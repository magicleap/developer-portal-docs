---
title: Settings
summary: depth camera settings

---

# Settings




Depth Camera [Settings](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md)  [More...](#detailed-description)  




## Detailed Description

```csharp
public struct Settings; 
```


**Details**

API Level 22





-----------



## Public Attributes

### Flags {#captureflags-flags}

Flags to configure the depth data. 

```csharp

public CaptureFlags Flags;

```

| Type | Description  | 
|--|--|
| [CaptureFlags](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-captureflags) | Flags used to specify what kind of data to request from Depth Camera  |





-----------

### Mode {#mode-mode}

Depth camera Mode. 

```csharp

public Mode Mode;

```

| Type | Description  | 
|--|--|
| [Mode](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-mode) | Depth Camera modes

 Future release may add support to other modes.  |

**Details**

See [Mode](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md#mode-mode) for more details.

NOTE: The system may not be able to service all the requested modes at any given time. This parameter is treated as a hint and data will be provided for the requested modes if available.





-----------


