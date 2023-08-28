---
title: Visualize Camera Output
sidebar_position: 2
date: 10/09/2022
tags: [Unity, Example, Camera, Render]
keywords: [Unity, Example, Camera, Render]
---


This section includes details on rendering the Magic Leap's camera output on a Raw Image UI Component. When receiving camera output developers can query the format using the  `MLCamera.CameraOutput.Format` property.

```csharp

        public void OnCaptureDataReceived(MLCamera.CameraOutput output, MLCamera.ResultExtras extras, MLCamera.Metadata metadataHandle)
        {
            if (output.Format == MLCamera.OutputFormat.JPEG)
            {
              // JPEG Output
            }
            else if (output.Format == MLCamera.OutputFormat.YUV_420_888)
            {
              // YUV Output
            }
            else if (output.Format == MLCamera.OutputFormat.RGBA_8888)
            {
              // RGBA Output
            }
        }
```

## Render JPEG Output

The following example displays camera output on a captured in JPEG format on a Raw Image.

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.MagicLeap;

public class JPEGVisualizer : MonoBehaviour
{
    [SerializeField, Tooltip("The UI to show the camera capture in JPEG format")]
    private RawImage _screenRendererJPEG = null;
    //JPEG Image Texture
    private Texture2D _imageTexture;

    public void OnCaptureDataReceived(MLCamera.CameraOutput output, MLCamera.ResultExtras extras, MLCamera.Metadata metadataHandle)
    {
        if (output.Format == MLCamera.OutputFormat.JPEG)
        {
            UpdateJPGTexture(output.Planes[0]);
        }
    }

    private void UpdateJPGTexture(MLCamera.PlaneInfo imagePlane)
    {
        if (_imageTexture != null)
        {
            Destroy(_imageTexture);
        }

        _imageTexture = new Texture2D(8, 8);
        bool status = _imageTexture.LoadImage(imagePlane.Data);
        if (status && (_imageTexture.width != 8 && _imageTexture.height != 8))
        {
            _screenRendererJPEG.texture = _imageTexture;
        }
    }
}

```

## Render RGBA Output

Note the conditional check at the bottom of the function. This is in place because at times image width and stride are not the same because of memory layout optimizations. Loosely speaking, depending on the frame resolution, in cases where the width does not line up well with the memory boundaries then the camera pipeline will pad each line in the frame with dummy pixel values which then needs to be skipped over when being operated on.

```csharp showLineNumbers
using System;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.MagicLeap;

public class RGBVisualizer : MonoBehaviour
{
    [SerializeField, Tooltip("The UI to show the camera capture in RGBA format")]
    private RawImage _screenRendererRGBA = null;

    //RGBA Image Texture
    private Texture2D _rawVideoTextureRGBA;

    public void OnCaptureDataReceived(MLCamera.CameraOutput output, MLCamera.ResultExtras extras, MLCamera.Metadata metadataHandle)
    {
        if (output.Format == MLCamera.OutputFormat.RGBA_8888)
        {
            UpdateRGBTexture(output.Planes[0]);
        }
    }

    private void UpdateRGBTexture(MLCamera.PlaneInfo imagePlane)
    {
        int actualWidth = (int)(imagePlane.Width * imagePlane.PixelStride);

        if (_rawVideoTextureRGBA != null &&
            (_rawVideoTextureRGBA.width != imagePlane.Width || _rawVideoTextureRGBA.height != imagePlane.Height))
        {
            Destroy(_rawVideoTextureRGBA);
            _rawVideoTextureRGBA = null;
        }

        if (_rawVideoTextureRGBA == null)
        {
            // Create a new texture that will display the RGB image
            _rawVideoTextureRGBA = new Texture2D((int)imagePlane.Width, (int)imagePlane.Height, TextureFormat.RGBA32, false);
            _rawVideoTextureRGBA.filterMode = FilterMode.Bilinear;

            // Assign the RawImage Texture to the resulting texture
            _screenRendererRGBA.texture = _rawVideoTextureRGBA;
            // Flip the image horizontally
            _screenRendererRGBA.uvRect = new Rect(0, 1, 1, -1);
        }

        if (imagePlane.Stride != actualWidth)
        {
            var newTextureChannel = new byte[actualWidth * imagePlane.Height];
            for (int i = 0; i < imagePlane.Height; i++)
            {
                Buffer.BlockCopy(imagePlane.Data, (int)(i * imagePlane.Stride), newTextureChannel, i * actualWidth, actualWidth);
            }
            _rawVideoTextureRGBA.LoadRawTextureData(newTextureChannel);
        }
        else
        {
            _rawVideoTextureRGBA.LoadRawTextureData(imagePlane.Data);
        }

        _rawVideoTextureRGBA.Apply();
    }
}

```

## Render YUV Output

Visualizing the YUV output is more difficult that RGBA or JPEG since each channel (Y, U, V) needs to be combined into a final texture. The example below renders the YUV output as a Render Texture, converting the format into RGBA using a compatible material and setting each of the YUV channels, then blitting the result into the  target Render Texture.

Similar to the RGBA Image, the conditional check in the `UpdateYUVTextureChannel()` function is in place because at times image width and stride are not the same because of memory layout optimizations.

:::caution Prevent Stripping the YUV Shader

Make sure that the `YUV_Camera_Shader` is not stripped from your project on build. This can be done by making sure that an object in your scene has a material that uses the `YUV_Camera_Shader` shader or by adding it to the `Project Settings / Player / Preloaded Assets`

:::

```csharp showLineNumbers
using System;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.UI;
using UnityEngine.XR.MagicLeap;

public class YUVVisualizer : MonoBehaviour
{
    [SerializeField, Tooltip("The UI to show the camera capture in YUV format")]
    private RawImage _screenRendererYUV = null;

    //The Image Textures for each channel Y,U,V
    private Texture2D[] _rawVideoTexturesYuv = new Texture2D[3];
    private byte[] _yChannelBuffer;
    private byte[] _uChannelBuffer;
    private byte[] _vChannelBuffer;

    private static readonly string[] SamplerNamesYuv = new string[] { "_MainTex", "_UTex", "_VTex" };

    // The texture that will display our final image
    private RenderTexture _renderTexture;
    private Material _yuvMaterial;
    private CommandBuffer _commandBuffer;

    public void OnCaptureDataReceived(MLCamera.CameraOutput output, MLCamera.ResultExtras extras, MLCamera.Metadata metadataHandle)
    {
        if (output.Format == MLCamera.OutputFormat.YUV_420_888)
        {
            UpdateYUVTextureChannel(ref _rawVideoTexturesYuv[0], output.Planes[0],
                      SamplerNamesYuv[0], ref _yChannelBuffer);
            UpdateYUVTextureChannel(ref _rawVideoTexturesYuv[1], output.Planes[1],
                SamplerNamesYuv[1], ref _uChannelBuffer);
            UpdateYUVTextureChannel(ref _rawVideoTexturesYuv[2], output.Planes[2],
                SamplerNamesYuv[2], ref _vChannelBuffer);

            if (!_renderTexture)
            {
                // Create a render texture that will display the RGB image
                _renderTexture = new RenderTexture((int)output.Planes[0].Width, (int)(output.Planes[0].Height), 0, RenderTextureFormat.ARGB32, RenderTextureReadWrite.Linear);
                
                // Create a command buffer that will be used for Blitting
                _commandBuffer = new CommandBuffer();
                _commandBuffer.name = "YUV2RGB";

                // Create a Material with a shader that will combine all of our channels into a single Render Texture
                _yuvMaterial = new Material(Shader.Find("Unlit/YUV_Camera_Shader"));

                // Assign the RawImage Texture to the Render Texture
                _screenRendererYUV.texture = _renderTexture;
            }

            // Set the texture's scale based on the output image
            _yuvMaterial.mainTextureScale = new Vector2(1f / output.Planes[0].PixelStride, -1.0f);

            // Blit the resulting Material into a single render texture
            _commandBuffer.Blit(null, _renderTexture, _yuvMaterial);
            Graphics.ExecuteCommandBuffer(_commandBuffer);
            _commandBuffer.Clear();
        }
    }

    private void UpdateYUVTextureChannel(ref Texture2D channelTexture, MLCamera.PlaneInfo imagePlane,
                                               string samplerName, ref byte[] newTextureChannel)
    {
        if (channelTexture != null &&
            (channelTexture.width != imagePlane.Width || channelTexture.height != imagePlane.Height))
        {
            Destroy(channelTexture);
            channelTexture = null;
        }

        if (channelTexture == null)
        {
            if (imagePlane.PixelStride == 2)
            {
                channelTexture = new Texture2D((int)imagePlane.Width, (int)(imagePlane.Height), TextureFormat.RG16, false)
                {
                    filterMode = FilterMode.Bilinear
                };
            }
            else
            {
                channelTexture = new Texture2D((int)imagePlane.Width, (int)(imagePlane.Height), TextureFormat.Alpha8, false)
                {
                    filterMode = FilterMode.Bilinear
                };
            }
            _yuvMaterial.SetTexture(samplerName, channelTexture);
        }

        int actualWidth = (int)(imagePlane.Width * imagePlane.PixelStride);
        if (imagePlane.Stride != actualWidth)
        {
            if (newTextureChannel == null || newTextureChannel.Length != (actualWidth * imagePlane.Height))
            {
                newTextureChannel = new byte[actualWidth * imagePlane.Height];
            }

            for (int i = 0; i < imagePlane.Height; i++)
            {
                Buffer.BlockCopy(imagePlane.Data, (int)(i * imagePlane.Stride), newTextureChannel,
                    i * actualWidth, actualWidth);
            }

            channelTexture.LoadRawTextureData(newTextureChannel);
        }
        else
        {
            channelTexture.LoadRawTextureData(imagePlane.Data);
        }

        channelTexture.Apply();
    }
}
```

