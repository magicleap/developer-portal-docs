---
title: MLWebRTCSource
summary: the native representation of an mlwebrtc source. 

---

# MLWebRTCSource




The native representation of an [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) source.   





## Public Fields

### Data {#mlwebrtcmediastreamtrack-data}

Gets an [MLWebRTC.Source](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/Source/UnityEngine.XR.MagicLeap.MLWebRTC.Source.md) object from the data of this object. 

```csharp

public MLWebRTC.MediaStream.Track Data { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebRTC.MediaStream.Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) | Struct that represents a media stream track object.  |





-----------

## Public Methods

### [MLWebRTCSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/Source/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.Source.NativeBindings.MLWebRTCSource.md) Create {#mlwebrtcsource-create}

Creates and returns an initialized version of this struct from a native [MLWebRTCSource](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/Source/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.Source.NativeBindings.MLWebRTCSource.md) object. 

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
| [MLWebRTC.MediaStream.Track.Type](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md#enums-type) | Defines the types of tracks that can exist.  |





-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------

