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

        // Image width and stride may differ due to padding bytes for memory alignment. Skip over padding bytes when accessing pixel data.
        if (imagePlane.Stride != actualWidth)
        {
            // Create a new array to store the pixel data without padding
            var newTextureChannel = new byte[actualWidth * imagePlane.Height];
            // Loop through each row of the image
            for (int i = 0; i < imagePlane.Height; i++)
            {
                // Copy the pixel data from the original array to the new array, skipping the padding bytes
                Buffer.BlockCopy(imagePlane.Data, (int)(i * imagePlane.Stride), newTextureChannel, i * actualWidth, actualWidth);
            }
            // Load the new array as the texture data
            _rawVideoTextureRGBA.LoadRawTextureData(newTextureChannel);
        }
        else // If the stride is equal to the width, no padding bytes are present
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

    [SerializeField, Tooltip("The shader used for the YUV to RGB conversion. (Unlit/YUV_Camera_Shader)")]
    private Shader _yuv2RgbShader;

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
        // Ensure the output format is YUV_420_888 before processing.
        if (output.Format != MLCamera.OutputFormat.YUV_420_888)
            return;

        // Create an instance of the YUV render material.
        InitializeMaterial();

        // Update YUV texture channels based on the image data received.
        UpdateYUVTextureChannel(ref _rawVideoTexturesYuv[0], output.Planes[0], SamplerNamesYuv[0], ref _yChannelBuffer);
        UpdateYUVTextureChannel(ref _rawVideoTexturesYuv[1], output.Planes[1], SamplerNamesYuv[1], ref _uChannelBuffer);
        UpdateYUVTextureChannel(ref _rawVideoTexturesYuv[2], output.Planes[2], SamplerNamesYuv[2], ref _vChannelBuffer);

        // Combines each of the YUV channels to a single ARGB32 Render texture.
        CombineYUVChannels2RGB(output);
    }

    // Initialize the material that will be used to render the YUV channels
    private void InitializeMaterial()
    {
        // Ensure the YUV shader is valid
        if (_yuv2RgbShader == null)
        {
            _yuv2RgbShader = Shader.Find("Unlit/YUV_Camera_Shader");
            if (_yuv2RgbShader == null)
            {
                Debug.LogError("Unlit/YUV_Camera_Shader not found. Disabling Visualizer.");
                this.enabled = false;
                return;
            }
        }

        // Ensure the material is initialized with the correct shader.
        if (_yuvMaterial == null)
        {
            _yuvMaterial = new Material(_yuv2RgbShader);
        }
    }

    // Combines each of the YUV channels to a single ARGB32 Render texture.
    private void CombineYUVChannels2RGB(MLCamera.CameraOutput output)
    {
        // If the render texture hasn't been initialized yet, set it up.
        if (!_renderTexture)
        {
            // Create a render texture that will be used to display the RGB image.
            _renderTexture = new RenderTexture((int)output.Planes[0].Width, (int)(output.Planes[0].Height), 0, RenderTextureFormat.ARGB32, 0);

            // Check if the command buffer needs initialization.
            if (_commandBuffer == null)
            {
                // Create a command buffer for the graphics blit operation.
                _commandBuffer = new CommandBuffer();
                _commandBuffer.name = "YUV2RGB";
            }

            // Link the screen renderer's texture to the render texture.
            _screenRendererYUV.texture = _renderTexture;
        }

        // Adjust the texture's scale based on the output image.
        // This is done to compensate for any pixel stride in the Y channel, and to flip the image vertically.
        _yuvMaterial.mainTextureScale = new Vector2(1f / output.Planes[0].PixelStride, -1.0f);

        // Blit (copy) the YUV material to the render texture, effectively converting YUV to RGB in the process.
        _commandBuffer.Blit(null, _renderTexture, _yuvMaterial);

        // Execute the command buffer to render the changes.
        Graphics.ExecuteCommandBuffer(_commandBuffer);

        // Clear the command buffer to prepare it for the next round of rendering.
        _commandBuffer.Clear();
    }

    private void UpdateYUVTextureChannel(ref Texture2D channelTexture, MLCamera.PlaneInfo imagePlane,
                                               string samplerName, ref byte[] newTextureChannel)
    {
        // Define texture dimensions based on the image plane information.
        int textureWidth = (int)imagePlane.Width;
        int textureHeight = (int)imagePlane.Height;

        // Check if the channelTexture either does not exist or its dimensions don't match the current image plane.
        if (channelTexture == null ||
            channelTexture.width != textureWidth ||
            channelTexture.height != textureHeight)
        {
            // If the channelTexture exists but has incorrect dimensions, destroy it to make space for a new one.
            if (channelTexture != null)
            {
                Destroy(channelTexture);
            }

            // Depending on the PixelStride of the image, determine the texture format.
            // PixelStride represents the number of bytes for each pixel in the image.
            if (imagePlane.PixelStride == 2)
            {
                // If each pixel has 2 bytes, it means we have two channels (like Y and U, or Y and V).
                // Hence, use RG16 format where each channel (R and G) will represent one byte of data.
                channelTexture = new Texture2D(textureWidth, textureHeight, TextureFormat.RG16, false);
            }
            else
            {
                // Otherwise, assume a single channel (like pure Y, U, or V) and use Alpha8 format.
                channelTexture = new Texture2D(textureWidth, textureHeight, TextureFormat.Alpha8, false);
            }
            // Set the filter mode for the texture and assign it to the material.
            channelTexture.filterMode = FilterMode.Bilinear;
            _yuvMaterial.SetTexture(samplerName, channelTexture);
        }

        // Calculate the actual width in bytes of the image data.
        int actualWidth = (int) (textureWidth * imagePlane.PixelStride);

        // Check if there's padding or other data altering the stride of the image.
        if (imagePlane.Stride != actualWidth)
        {
            // Calculate the required length for the new texture channel based on actual width.
            int requiredLength = actualWidth * textureHeight;
            // If the newTextureChannel either doesn't exist or has incorrect dimensions, reallocate.
            if (newTextureChannel == null || newTextureChannel.Length != requiredLength)
            {
                newTextureChannel = new byte[requiredLength];
            }

            // Copy data from the image plane to the new texture channel byte by byte.
            for (int i = 0; i < textureHeight; i++)
            {
                int sourceOffset = (int) (i * imagePlane.Stride);
                int destOffset = i * actualWidth;
                Buffer.BlockCopy(imagePlane.Data, sourceOffset, newTextureChannel, destOffset, actualWidth);
            }

            // Load the processed data into the channelTexture.
            channelTexture.LoadRawTextureData(newTextureChannel);
        }
        else
        {
            // If the stride matches the actual width, load the image plane data directly into the channelTexture.
            channelTexture.LoadRawTextureData(imagePlane.Data);
        }

        // Apply the changes made to the texture.
        channelTexture.Apply();
    }
}
```

