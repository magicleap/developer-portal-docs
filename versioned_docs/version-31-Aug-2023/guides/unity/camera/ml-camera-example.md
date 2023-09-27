---
title: Simple Camera Example
sidebar_position: 4
date: 10/09/2022
tags: [Unity, Example, Camera]
keywords: [Unity, Example, Camera]
---


This section includes a simple camera example. A detailed explanation of each function can be found in the [Camera Overview](docs\guides\unity\camera\camera-capture-walkthrough.md) guide.

## Simple Example

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

## Async Example

The script below is more complex and uses the Async functions to prevent performance issues when starting and stopping Camera capture. The example only supports a single Video capture stream. To use it, add the script to a GameObject and then call `StartCameraCapture` to start the the camera capture. This examples does not render the output.

:::caution
This examples requires that `CAMERA` permission is enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

```csharp
using System;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

/// <summary>
/// A script that enables and disables the RGB camera using the async methods.
/// </summary>
public class MagicLeapRGBCamera : MonoBehaviour
{
    /// <summary>
    /// Can be used by external scripts to query the status of the camera and see if the camera capture has been started.
    /// </summary>
    public bool IsCameraConnected => _captureCamera != null && _captureCamera.ConnectionEstablished;
    
    [SerializeField][Tooltip("If true, the camera capture will start immediately.")]
    private bool _startCameraCaptureOnStart = true;

    #region Capture Config

    private int _targetImageWidth = 1920;
    private int _targetImageHeight = 1080;
    private MLCameraBase.Identifier _cameraIdentifier = MLCameraBase.Identifier.CV;
    private MLCameraBase.CaptureFrameRate _targetFrameRate = MLCameraBase.CaptureFrameRate._30FPS;
    private MLCameraBase.OutputFormat _outputFormat = MLCameraBase.OutputFormat.RGBA_8888;

    #endregion

    #region Magic Leap Camera Info
    //The connected Camera
    private MLCamera _captureCamera;
    // True if CaptureVideoStartAsync was called successfully
    private bool _isCapturingVideo = false;
    #endregion

    private bool? _cameraPermissionGranted;
    private bool _isCameraInitializationInProgress;

    private readonly MLPermissions.Callbacks _permissionCallbacks = new MLPermissions.Callbacks();

    private void Awake()
    {
        _permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
        _permissionCallbacks.OnPermissionDenied += OnPermissionDenied;
        _permissionCallbacks.OnPermissionDeniedAndDontAskAgain += OnPermissionDenied;
        _isCapturingVideo = false;
    }

    void Start()
    {
        if (_startCameraCaptureOnStart)
        {
            StartCameraCapture();
        }
    }

    /// <summary>
    /// Starts the Camera capture with the target settings.
    /// </summary>
    /// <param name="cameraIdentifier">Which camera to use. (Main or CV)</param>
    /// <param name="width">The width of the video stream.</param>
    /// <param name="height">The height of the video stream.</param>
    /// <param name="onCameraCaptureStarted">An action callback that returns true if the video capture started successfully.</param>
    public void StartCameraCapture(MLCameraBase.Identifier cameraIdentifier = MLCameraBase.Identifier.CV, int width = 1920, int height = 1080, Action<bool> onCameraCaptureStarted = null)
    {
        if (_isCameraInitializationInProgress)
        {
            Debug.LogError("Camera Initialization is already in progress.");
            onCameraCaptureStarted?.Invoke(false);
            return;
        }

        this._cameraIdentifier = cameraIdentifier;
        _targetImageWidth = width;
        _targetImageHeight = height;
        TryEnableMLCamera(onCameraCaptureStarted);
    }

    private void OnDisable()
    {
        _ = DisconnectCameraAsync();
    }

    private void OnPermissionGranted(string permission)
    {
        if (permission == MLPermission.Camera)
        {
            _cameraPermissionGranted = true;
            Debug.Log($"Granted {permission}.");
        }
    }

    private void OnPermissionDenied(string permission)
    {
        if (permission == MLPermission.Camera)
        {
            _cameraPermissionGranted = false;
            Debug.LogError($"{permission} denied, camera capture won't function.");
        }
    }

    private async void TryEnableMLCamera(Action<bool> onCameraCaptureStarted = null)
    {
        // If the camera initialization is already in progress, return immediately
        if (_isCameraInitializationInProgress)
        {
            onCameraCaptureStarted?.Invoke(false);
            return;
        }

        _isCameraInitializationInProgress = true;

        _cameraPermissionGranted = null;
        Debug.Log("Requesting Camera permission.");
        MLPermissions.RequestPermission(MLPermission.Camera, _permissionCallbacks);

        while (!_cameraPermissionGranted.HasValue)
        {
            // Wait until we have permission to use the camera
            await Task.Delay(TimeSpan.FromSeconds(1.0f));
        }

        if (MLPermissions.CheckPermission(MLPermission.Camera).IsOk || _cameraPermissionGranted.GetValueOrDefault(false))
        {
            Debug.Log("Initializing camera.");
            bool isCameraAvailable = await WaitForCameraAvailabilityAsync();

            if (isCameraAvailable)
            {
                await ConnectAndConfigureCameraAsync();
            }
        }

        _isCameraInitializationInProgress = false;
        onCameraCaptureStarted?.Invoke(_isCapturingVideo);
    }

    /// <summary>
    /// Connects the MLCamera component and instantiates a new instance
    /// if it was never created.
    /// </summary>
    private async Task<bool> WaitForCameraAvailabilityAsync()
    {
        bool cameraDeviceAvailable = false;
        int maxAttempts = 10;
        int attempts = 0;
   
        while (!cameraDeviceAvailable && attempts < maxAttempts)
        {
            MLResult result =
                MLCameraBase.GetDeviceAvailabilityStatus(_cameraIdentifier, out cameraDeviceAvailable);

            if (result.IsOk == false && cameraDeviceAvailable == false)
            {
                // Wait until the camera device is available
                await Task.Delay(TimeSpan.FromSeconds(1.0f));
            }
            attempts++;
        }

        return cameraDeviceAvailable;
    }

    private async Task<bool> ConnectAndConfigureCameraAsync()
    {
        Debug.Log("Starting Camera Capture.");

        MLCameraBase.ConnectContext context = CreateCameraContext();

        _captureCamera = await MLCamera.CreateAndConnectAsync(context);
        if (_captureCamera == null)
        {
            Debug.LogError("Could not create or connect to a valid camera. Stopping Capture.");
            return false;
        }

        Debug.Log("Camera Connected.");

        bool hasImageStreamCapabilities = GetStreamCapabilityWBestFit(out MLCameraBase.StreamCapability streamCapability);
        if (!hasImageStreamCapabilities)
        {
            Debug.LogError("Could not start capture. No valid Image Streams available. Disconnecting Camera.");
            await DisconnectCameraAsync();
            return false;
        }

        Debug.Log("Preparing camera configuration.");

        // Try to configure the camera based on our target configuration values
        MLCameraBase.CaptureConfig captureConfig = CreateCaptureConfig(streamCapability);
        var prepareResult = _captureCamera.PrepareCapture(captureConfig, out MLCameraBase.Metadata _);
        if (!MLResult.DidNativeCallSucceed(prepareResult.Result, nameof(_captureCamera.PrepareCapture)))
        {
            Debug.LogError($"Could not prepare capture. Result: {prepareResult.Result} .  Disconnecting Camera.");
            await DisconnectCameraAsync();
            return false;
        }

        Debug.Log("Starting Video Capture.");

        bool captureStarted = await StartVideoCaptureAsync();
        if (!captureStarted)
        {
            Debug.LogError("Could not start capture. Disconnecting Camera.");
            await DisconnectCameraAsync();
            return false;
        }

        return _isCapturingVideo;
    }

    private MLCameraBase.ConnectContext CreateCameraContext()
    {
        var context = MLCameraBase.ConnectContext.Create();
        context.CamId = _cameraIdentifier;
        context.Flags = MLCameraBase.ConnectFlag.CamOnly;
        return context;
    }

    private MLCameraBase.CaptureConfig CreateCaptureConfig(MLCameraBase.StreamCapability streamCapability)
    {
        var captureConfig = new MLCameraBase.CaptureConfig();
        captureConfig.CaptureFrameRate = _targetFrameRate;
        captureConfig.StreamConfigs = new MLCameraBase.CaptureStreamConfig[1];
        captureConfig.StreamConfigs[0] = MLCameraBase.CaptureStreamConfig.Create(streamCapability, _outputFormat);
        return captureConfig;
    }

    private async Task<bool> StartVideoCaptureAsync()
    {
        // Trigger auto exposure and white balance
        await _captureCamera.PreCaptureAEAWBAsync();

        var startCapture = await _captureCamera.CaptureVideoStartAsync();
        _isCapturingVideo = MLResult.DidNativeCallSucceed(startCapture.Result, nameof(_captureCamera.CaptureVideoStart));

        if (!_isCapturingVideo)
        {
            Debug.LogError($"Could not start camera capture. Result : {startCapture.Result}");
            return false;
        }

        _captureCamera.OnRawVideoFrameAvailable += OnCaptureRawVideoFrameAvailable;
        return true;
    }

    private async Task DisconnectCameraAsync()
    {
        if (_captureCamera != null)
        {
            if (_isCapturingVideo)
            {
                await _captureCamera.CaptureVideoStopAsync();
                _captureCamera.OnRawVideoFrameAvailable -= OnCaptureRawVideoFrameAvailable;
            }

            await _captureCamera.DisconnectAsync();
            _captureCamera = null;
        }

        _isCapturingVideo = false;
    }

    /// <summary>
    /// Gets the Image stream capabilities.
    /// </summary>
    /// <returns>True if MLCamera returned at least one stream capability.</returns>
    private bool GetStreamCapabilityWBestFit(out MLCameraBase.StreamCapability streamCapability)
    {
        streamCapability = default;

        if (_captureCamera == null)
        {
            Debug.Log("Could not get Stream capabilities Info. No Camera Connected");
            return false;
        }

        MLCameraBase.StreamCapability[] streamCapabilities =
            MLCameraBase.GetImageStreamCapabilitiesForCamera(_captureCamera, MLCameraBase.CaptureType.Video);

        if (streamCapabilities.Length <= 0) 
            return false;

        if (MLCameraBase.TryGetBestFitStreamCapabilityFromCollection(streamCapabilities, _targetImageWidth,
                _targetImageHeight, MLCameraBase.CaptureType.Video,
                out streamCapability))
        {
            Debug.Log($"Stream: {streamCapability} selected with best fit.");
            return true;
        }

        Debug.Log($"No best fit found. Stream: {streamCapabilities[0]} selected by default.");
        streamCapability = streamCapabilities[0];
        return true;
    }

    private void OnCaptureRawVideoFrameAvailable(MLCameraBase.CameraOutput cameraOutput,
        MLCameraBase.ResultExtras resultExtras,
        MLCameraBase.Metadata metadata)
    {
        //Cache or use camera data as needed
        //TODO: Implement use of camera data
    }
}
```

## References

See the [Render Camera Output Guide](docs\guides\unity\camera\render-camera-output.md) for more information on rendering the camera's output.

