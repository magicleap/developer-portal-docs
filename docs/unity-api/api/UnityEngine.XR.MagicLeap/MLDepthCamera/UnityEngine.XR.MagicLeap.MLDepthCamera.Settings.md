---
title: Settings
summary: depth camera settings

---

# Settings




Depth Camera [Settings](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Settings.md)  [More...](#detailed-description)  




## Detailed Description

```csharp
public struct Settings; 
```


**Details**

API Level 29





-----------



## Public Attributes

### StreamConfig {#streamconfig-streamconfig}

Controls for each of the depth camera streams. Only controls for streams enabled via streams field will be read. Use [MLDepthCamera.FrameType](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-frametype) enumeration for indexing. 

```csharp

public StreamConfig [] StreamConfig;

```






-----------

### Streams {#stream-streams}

The system may not be able to service all the requested streams at any given time. This parameter is treated as a hint and data will be provided for the requested streams if available. 

```csharp

public Stream Streams;

```

| Type | Description  | 
|--|--|
| [Stream](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-stream) | Depth Camera modes

 Future release may add support to other modes.  |





-----------

