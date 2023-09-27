---
title: MLMediaPlayerOnFramePackingInfo
summary: mediaplayer frame packing callback info. 

---

# MLMediaPlayerOnFramePackingInfo




MediaPlayer frame packing callback Info.   





## Public Attributes

### Data {#intptr-data}

User data as passed to MLMediaPlayerSetEventCallbacksEx(). 

```csharp

public IntPtr Data;

```






-----------

### Flags {#framepackingflags-flags}

Frame packing flag. 

```csharp

public FramePackingFlags Flags;

```

| Type | Description  | 
|--|--|
| [FramePackingFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-framepackingflags) | Frame Packing Arrangement flags for stereoscopic videos.  |





-----------

### Mode {#framepackingmode-mode}

Frame packing more. 

```csharp

public FramePackingMode Mode;

```

| Type | Description  | 
|--|--|
| [FramePackingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-framepackingmode) | Frame Packing Arrangement for stereoscopic videos.  |





-----------


