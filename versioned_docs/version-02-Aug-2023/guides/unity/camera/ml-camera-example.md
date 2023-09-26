---
title: Simple Camera Example
sidebar_position: 4
date: 10/09/2022
tags: [Unity, Example, Camera]
keywords: [Unity, Example, Camera]
---


This section includes a simple camera example. A detailed explanation of each function can be found in the [Camera Overview](docs\guides\unity\camera\camera-capture-walkthrough.md) guide.

## Example

This example script starts the camera capture immediately and displays the resulting image on a Renderer.

:::caution
This examples requires that `CAMERA` permission is **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

```csharp showLineNumbers
using System;
using System.Collections;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class SimpleCamera : MonoBehaviour
{
    [SerializeField, Tooltip("Desired width for the camera capture")]
    private int captureWidth = 1280;
    [SerializeField, Tooltip("Desired height for the camera capture")]
    private int captureHeight = 720;
    [SerializeField, Tooltip("The renderer to show the camera capture on RGB format")]
    private Renderer _screenRendererRGB = null;

    //The identifier can either target the Main or CV cameras.
    private MLCamera.Identifier _identifier = MLCamera.Identifier.Main;
    private MLCamera _camera;
    //Is true if the camera is ready to be connected.
    private bool _cameraDeviceAvailable;

    private MLCamera.CaptureConfig _captureConfig;

    private Texture2D _videoTextureRgb;
    //The camera capture state
    bool _isCapturing;

    void OnEnable()
    {
        //This script assumes that camera permissions were already granted.
        StartCoroutine(EnableMLCamera());
    }

    void OnDisable()
    {
        StopCapture();
    }

    //Waits for the camera to be ready and then connects to it.
    private IEnumerator EnableMLCamera()
    {
        //Checks the main camera's availability.
        while (!_cameraDeviceAvailable)
        {
            MLResult result = MLCamera.GetDeviceAvailabilityStatus(_identifier, out _cameraDeviceAvailable);
            if (result.IsOk == false || _cameraDeviceAvailable == false)
            {
                // Wait until camera device is available
                yield return new WaitForSeconds(1.0f);
            }
        }
        ConnectCamera();
    }

    private void ConnectCamera()
    {
        //Once the camera is available, we can connect to it.
        if (_cameraDeviceAvailable)
        {
            MLCamera.ConnectContext connectContext = MLCamera.ConnectContext.Create();
            connectContext.CamId = _identifier;
            //MLCamera.Identifier.Main is the only camera that can access the virtual and mixed reality flags
            connectContext.Flags = MLCamera.ConnectFlag.CamOnly;
            connectContext.EnableVideoStabilization = true;

            _camera = MLCamera.CreateAndConnect(connectContext);
            if (_camera != null)
            {
                Debug.Log("Camera device connected");
                ConfigureCameraInput();
                SetCameraCallbacks();
            }
        }
    }

    private void ConfigureCameraInput()
    {
        //Gets the stream capabilities the selected camera. (Supported capture types, formats and resolutions)
        MLCamera.StreamCapability[] streamCapabilities = MLCamera.GetImageStreamCapabilitiesForCamera(_camera, MLCamera.CaptureType.Video);

        if(streamCapabilities.Length== 0)
            return;

        //Set the default capability stream
        MLCamera.StreamCapability defaultCapability = streamCapabilities[0];

        //Try to get the stream that most closely matches the target width and height
        if (MLCamera.TryGetBestFitStreamCapabilityFromCollection(streamCapabilities, captureWidth, captureHeight,
                MLCamera.CaptureType.Video, out MLCamera.StreamCapability selectedCapability))
        {
            defaultCapability = selectedCapability;
        }

        //Initialize a new capture config.
        _captureConfig = new MLCamera.CaptureConfig();
        //Set RGBA video as the output
        MLCamera.OutputFormat outputFormat = MLCamera.OutputFormat.RGBA_8888;
        //Set the Frame Rate to 30fps
        _captureConfig.CaptureFrameRate = MLCamera.CaptureFrameRate._30FPS;
        //Initialize a camera stream config.
        //The Main Camera can support up to two stream configurations
        _captureConfig.StreamConfigs = new MLCamera.CaptureStreamConfig[1];
        _captureConfig.StreamConfigs[0] = MLCamera.CaptureStreamConfig.Create(
            defaultCapability, outputFormat
        );
        StartVideoCapture();
    }

    private void StartVideoCapture()
    {
        MLResult result = _camera.PrepareCapture(_captureConfig, out MLCamera.Metadata metaData);
        if (result.IsOk)
        {
            //Trigger auto exposure and auto white balance
            _camera.PreCaptureAEAWB();
            //Starts video capture. This call can also be called asynchronously 
            //Images capture uses the CaptureImage function instead.
            result = _camera.CaptureVideoStart();
            _isCapturing = MLResult.DidNativeCallSucceed(result.Result, nameof(_camera.CaptureVideoStart));
            if (_isCapturing)
            {
                Debug.Log("Video capture started!");
            }
            else
            {
                Debug.LogError($"Could not start camera capture. Result : {result}");
            }
        }
    }

    private void StopCapture()
    {
        if (_isCapturing)
        {
            _camera.CaptureVideoStop();
        }

        _camera.Disconnect();
        _camera.OnRawVideoFrameAvailable -= RawVideoFrameAvailable;
        _isCapturing = false;
    }

    //Assumes that the capture configure was created with a Video CaptureType
    private void SetCameraCallbacks()
    {
        //Provides frames in either YUV/RGBA format depending on the stream configuration
        _camera.OnRawVideoFrameAvailable += RawVideoFrameAvailable;
    }

    void RawVideoFrameAvailable(MLCamera.CameraOutput output, MLCamera.ResultExtras extras, MLCameraBase.Metadata metadataHandle)
    {
        if (output.Format == MLCamera.OutputFormat.RGBA_8888)
        {
            UpdateRGBTexture(ref _videoTextureRgb, output.Planes[0], _screenRendererRGB);
        }
    }

    private void UpdateRGBTexture(ref Texture2D videoTextureRGB, MLCamera.PlaneInfo imagePlane, Renderer renderer)
    {

        if (videoTextureRGB != null &&
            (videoTextureRGB.width != imagePlane.Width || videoTextureRGB.height != imagePlane.Height))
        {
            Destroy(videoTextureRGB);
            videoTextureRGB = null;
        }

        if (videoTextureRGB == null)
        {
            videoTextureRGB = new Texture2D((int)imagePlane.Width, (int)imagePlane.Height, TextureFormat.RGBA32, false);
            videoTextureRGB.filterMode = FilterMode.Bilinear;

            Material material = renderer.material;
            material.mainTexture = videoTextureRGB;
            material.mainTextureScale = new Vector2(1.0f, -1.0f);
        }

        int actualWidth = (int)(imagePlane.Width * imagePlane.PixelStride);

        if (imagePlane.Stride != actualWidth)
        {
            var newTextureChannel = new byte[actualWidth * imagePlane.Height];
            for (int i = 0; i < imagePlane.Height; i++)
            {
                Buffer.BlockCopy(imagePlane.Data, (int)(i * imagePlane.Stride), newTextureChannel, i * actualWidth, actualWidth);
            }
            videoTextureRGB.LoadRawTextureData(newTextureChannel);
        }
        else
        {
            videoTextureRGB.LoadRawTextureData(imagePlane.Data);
        }
        videoTextureRGB.Apply();
    }
}
```

See the [Render Camera Output Guide](docs\guides\unity\camera\render-camera-output.md) for more information on rendering the camera's output.

