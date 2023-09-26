---
title: MLDepthCameraCapability
summary: structure to encapsulate a possible set of streams configuration. such set describes a possible way of setting streamconfig in mldepthcamerasettings and may hold multiple mldepthcamerastreamcapability for different streams. whole streamcapabilities array describe a single configuration. using only part of it is not recommended. the capabilities supported by the depth camera can be queried with mldepthcameragetcapabilities. 

---

# MLDepthCameraCapability




Structure to encapsulate a possible set of streams configuration. Such set describes a possible way of setting [StreamConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.StreamConfig.md) in [MLDepthCameraSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md) and may hold multiple [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraStreamCapability.md) for different streams. Whole StreamCapabilities array describe a single configuration. Using only part of it is not recommended. The capabilities supported by the depth camera can be queried with MLDepthCameraGetCapabilities().   





## Public Attributes

### Size {#byte-size}

Size of StreamCapabilities array. 

```csharp

public byte Size;

```






-----------

### StreamCapabilities {#intptr-streamcapabilities}

Array of [MLDepthCameraStreamCapability](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraStreamCapability.md) elements. 

```csharp

public IntPtr StreamCapabilities;

```






-----------


