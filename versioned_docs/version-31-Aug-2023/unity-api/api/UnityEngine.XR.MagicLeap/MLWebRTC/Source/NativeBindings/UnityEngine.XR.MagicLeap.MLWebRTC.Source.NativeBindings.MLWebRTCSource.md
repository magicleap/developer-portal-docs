---
title: MLWebRTCSource
summary: the native representation of an mlwebrtc source. 

---

# MLWebRTCSource




The native representation of an [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) source.   





## Public Fields

### Data {#mlwebrtcmediastreamtrack-data}

Gets an [MLWebRTC.Source](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/Source/UnityEngine.XR.MagicLeap.MLWebRTC.Source.md) object from the data of this object. 

```csharp

public MLWebRTC.MediaStream.Track Data { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebRTC.MediaStream.Track](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) | Struct that represents a media stream track object.  |





-----------

## Public Methods

### [MLWebRTCSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/Source/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.Source.NativeBindings.MLWebRTCSource.md) Create {#mlwebrtcsource-create}

Creates and returns an initialized version of this struct from a native [MLWebRTCSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/Source/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.Source.NativeBindings.MLWebRTCSource.md) object. 

```csharp
public static MLWebRTCSource Create()
```






**Returns**: An initialized version of this struct.



-----------

## Public Attributes

### Handle {#ulong-handle}

Handle of the struct. 

```csharp

public ulong Handle;

```






-----------

### Type {#mlwebrtcmediastreamtracktype-type}

Type of the struct. 

```csharp

public MLWebRTC.MediaStream.Track.Type Type;

```

| Type | Description  | 
|--|--|
| [MLWebRTC.MediaStream.Track.Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#enums-type) | Defines the types of tracks that can exist.  |





-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


