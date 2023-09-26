---
title: API Overview
sidebar_position: 0
date: 10/09/2022
tags: [Unity, Overview, Camera]
keywords: [Unity, Overview, Camera]
---

This guide provides a walk through of creating a custom camera capture script. The sections in this guide were written in a linear flow although each section can also be referenced individually.

:::caution
This features requires the `CAMERA` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

## Connecting

This section explains how to find and connect to the Magic Leap Camera. After completing each of the steps in this guide, you will be able to connect to the preferred camera device.

### Check Camera Availability

Before accessing the camera device it's best practice to make sure the camera is available and not being used by another process. You can check the availability status using `MLCamera.GetDeviceAvailabilityStatus`. Once the camera is available, you will be able to initialize it.

The example below checks if the Magic Leap camera is available.

```csharp
  //The identifier can either target the Main or CV cameras.
  private MLCamera.Identifier _identifier = MLCamera.Identifier.Main;
  //Is true if the camera is ready to be connected.
  private bool _cameraDeviceAvailable;
...
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
     //ConnectCamera();
  }
 ...
```

### Connect to Camera Device

Once the camera is available, you need to locate the preferred camera device and initialize it.

During initialization, you can specify if the connected camera will record Real World, Virtual, or Mixed Reality content by setting the `MLCamera.ConnectContext.Flags` parameter.

:::info
To learn more about the different camera devices see the [Camera Overview Guide](/versioned_docs/version-31-Aug-2023/guides/features/ml-camera.md).
:::

The example below tries to establish a connection with the camera stream.

```csharp
  //The identifier can either target the Main or CV cameras.
  private MLCamera.Identifier _identifier = MLCamera.Identifier.Main;
  //Cached version of the MLCamera instance.
  private MLCamera _camera;
  //Is true if the camera is ready to be connected.
  private bool _cameraDeviceAvailable;
...
  private void ConnectCamera()
  {
     //Once the camera is available, we can connect to it.
     if(_cameraDeviceAvailable)
     {
       MLCamera.ConnectContext connectContext = MLCamera.ConnectContext.Create();
       connectContext.CamId = _identifier;
       //The MLCamera.Identifier.Main is the only camera that can access the virtual and mixed reality flags
       connectContext.Flags = MLCamera.ConnectFlag.CamOnly;
       connectContext.EnableVideoStabilization = true;

       _camera = MLCamera.CreateAndConnect(connectContext);
       if (_camera != null)
       {
          Debug.Log("Camera device connected");
          //ConfigureCameraInput();
          //SetCameraCallbacks();
       }
     }
  }
 ...
```

## Camera Configuration

Before you can capture the Magic Leap Camera's input, you need to create `CaptureConfig`. A `CaptureConfig` includes information about the final output such as, output format, frame-rate, and which camera stream to use.

:::info
To learn more about the different camera devices see the [Camera Overview Guide](/versioned_docs/version-31-Aug-2023/guides/features/ml-camera.md).
:::

The example below demonstrates how to configure a camera to capture an RGBA video from the main camera. The type of capture is set by the `MLCamera.StreamCapabilitiesInfo` parameter.

:::caution Frame-Rates

Use FrameRate_None when configuring only Image capture.
`FrameRate_60fps` is only supported on captures that have resolutions less than 3MP(2048x1536).

:::
  
```csharp
...
  [SerializeField, Tooltip("Desired width for the camera capture")]
  private int captureWidth = 1280;
  [SerializeField, Tooltip("Desired height for the camera capture")]
  private int captureHeight = 720;

  private MLCamera _camera;
  //Cache the capture configure for later use.
  private MLCamera.CaptureConfig _captureConfig;
  
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
        //StartVideoCapture();
}
```

## Start Video Capture

This section shows how to prepare and start video capture using the `_captureConfig` defined in the last step.

```csharp
  //Cache the capture configure for later use
  MLCamera.CaptureConfig _captureConfig;
  //Cached version of the MLCamera instance.
  MLCamera _camera;
  //The camera capture state
  bool _isCapturing;

...

//Assumes that the capture configure was created with a Video CaptureType
 private void StartVideoCapture()
 {
    MLResult result = _camera.PrepareCapture(_captureConfig, out MLCamera.Metadata metaData);
    if (result.IsOk)
    {
      // Trigger auto exposure and auto white balance
      _camera.PreCaptureAEAWB();
      // Starts video capture. This call can also be called asynchronously 
      // Images capture uses the CaptureImage function instead.
      result = _camera.CaptureVideoStart();
      if (result.IsOk)
      {
        Debug.Log("Video capture started!");
        _isCapturing = true;
      }
      else
      {
        Debug.LogError("Failed to start video capture!");
      }
    }
 }
```

## Stop Video Capture

To stop video capture simply call `CaptureVideoStop()` on the target MLCamera. Note that developers should track if the camera capture was started before trying to call the stop function.

```csharp
  //The camera capture state
  bool _isCapturing;

  private void StopVideoCapture()
  {
    if (isCapturing)
    {
      _camera.CaptureVideoStop();
    }
    isCapturing = false;
  }
```

## Receive Camera Image

The captured video frames are provided thorough the `OnRawVideoFrameAvailable` callback. This callback returns the frames in either YUV/RGBA format depending on the stream configuration.

```csharp
  //Cached version of the MLCamera instance.
  private MLCamera _camera;

...

  //Assumes that the capture configure was created with a Video CaptureType
  private void SetCameraCallbacks()
  {
    //Provides frames in either YUV/RGBA format depending on the stream configuration
    _camera.OnRawVideoFrameAvailable += RawVideoFrameAvailable;
  }

  void RawVideoFrameAvailable(MLCamera.CameraOutput output, MLCamera.ResultExtras extras)
  {
    if (output.Format == MLCamera.OutputFormat.RGBA_8888)
    {
        //UpdateRGBTexture(ref videoTextureRGB, output.Planes[0], _screenRendererRGB);
    }
  }
  
```

## Render Camera Image

This section demonstrates how to render the RGBA image provided by the Magic Leap camera. For more information see the [Render Camera Output Guide](docs/guides/unity/camera/render-camera-output.md)

```csharp
  [SerializeField, Tooltip("The renderer to show the camera capture on RGB format")]
  private Renderer _screenRendererRGB = null;
  private Texture2D videoTextureRGB;
...

  void RawVideoFrameAvailable(MLCamera.CameraOutput output, MLCamera.ResultExtras extras, MLCamera.Metadata metadataHandle)
  {
    if (output.Format == MLCamera.OutputFormat.RGBA_8888)
    {
        UpdateRGBTexture(ref videoTextureRGB, output.Planes[0], _screenRendererRGB);
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
        for(int i = 0; i < imagePlane.Height; i++)
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
```

