---
title: MLWebRTCFrame
summary: representation of the native frame structure. 

---

# MLWebRTCFrame




Representation of the native frame structure.   





## Public Methods

### [MLWebRTCFrame](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.NativeBindings.MLWebRTCFrame.md) Create {#mlwebrtcframe-create}

```csharp
public static MLWebRTCFrame Create(
    OutputFormat format
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [OutputFormat](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md#enums-outputformat) |format|Defines the supported output formats of the image planes. |






-----------

### [MLWebRTCFrame](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.NativeBindings.MLWebRTCFrame.md) Create {#mlwebrtcframe-create}

Caller MUST call  FreeUnmanagedMemory  when finished with the returned  MLWebRTCFrame ! Unmanaged memory will be allocated for the  FrameData  pointer.    Creates and returns an initialized version of this struct from a MLWebRTC.VideoSink.Frame object. 

```csharp
public static MLWebRTCFrame Create(
    MLWebRTC.VideoSink.Frame frame
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.VideoSink.Frame](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md) |frame|The frame object to use for initializing.|






**Returns**: An initialized version of this struct.



-----------

### void FreeUnmanagedMemory {#void-freeunmanagedmemory}

```csharp
public void FreeUnmanagedMemory()
```






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### Format {#outputformat-format}

Output format that the image planes will be in. 

```csharp

public OutputFormat Format;

```

| Type | Description  | 
|--|--|
| [OutputFormat](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md#enums-outputformat) | Defines the supported output formats of the image planes.  |





-----------

### FrameData {#intptr-framedata}

Frame data to be interpreted as a MLWebRTCNativeFrameInfo if Format is OutputFormat.NativeBuffer, otherwise interpreted as a MLWebRTCFramePlanes. 

```csharp

public IntPtr FrameData;

```






-----------

### TimeStamp {#ulong-timestamp}

Timestamp of the frame. 

```csharp

public ulong TimeStamp;

```






-----------

### Version {#uint-version}

Version of this structure. 

```csharp

public uint Version;

```






-----------


