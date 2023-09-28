---
title: MLDepthCameraSettings

---

# MLDepthCameraSettings










## Public Methods

### [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md) Init {#mldepthcamerasettings-init}

```csharp
public static MLDepthCameraSettings Init()
```






-----------

## Public Attributes

### StreamConfig {#streamconfig-streamconfig}

Controls for each of the depth camera streams. Only controls for streams enabled via streams field will be read. Use [MLDepthCamera.FrameType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-frametype) enumeration for indexing. 

```csharp

public StreamConfig [] StreamConfig;

```






-----------

### Streams {#uint-streams}

The system may not be able to service all the requested streams at any given time. This parameter is treated as a hint and data will be provided for the requested streams if available. 

```csharp

public uint Streams;

```






-----------

### Version {#uint-version}

Version of this structure 

```csharp

public uint Version;

```






-----------


