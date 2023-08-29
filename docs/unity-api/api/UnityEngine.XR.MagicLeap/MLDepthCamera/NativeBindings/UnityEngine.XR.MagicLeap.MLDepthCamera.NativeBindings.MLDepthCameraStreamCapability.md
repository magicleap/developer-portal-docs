---
title: MLDepthCameraStreamCapability
summary: structure to encapsulate a possible configuration for a single stream. can be used to understand possible values for a specific streamconfig element in mldepthcamerasettings. the capabilities supported by the depth camera can be queried with mldepthcameragetcapabilities. 

---

# MLDepthCameraStreamCapability




Structure to encapsulate a possible configuration for a single stream. Can be used to understand possible values for a specific [StreamConfig](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.StreamConfig.md) element in [MLDepthCameraSettings](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md). The capabilities supported by the depth camera can be queried with MLDepthCameraGetCapabilities().   





## Public Attributes

### FrameRateCapability {#framerate-frameratecapability}

Frame rate. 

```csharp

public FrameRate FrameRateCapability;

```

| Type | Description  | 
|--|--|
| [FrameRate](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-framerate) | Enumeration of possible frame rates  |





-----------

### MaxExposure {#uint-maxexposure}

Maximum sensor exposure in microseconds. 

```csharp

public uint MaxExposure;

```






-----------

### MinExposure {#uint-minexposure}

Minimum sensor exposure in microseconds. 

```csharp

public uint MinExposure;

```






-----------

### Stream {#stream-stream}

Stream for which this capability can be applied. 

```csharp

public Stream Stream;

```

| Type | Description  | 
|--|--|
| [Stream](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-stream) | Depth Camera modes

 Future release may add support to other modes.  |





-----------

