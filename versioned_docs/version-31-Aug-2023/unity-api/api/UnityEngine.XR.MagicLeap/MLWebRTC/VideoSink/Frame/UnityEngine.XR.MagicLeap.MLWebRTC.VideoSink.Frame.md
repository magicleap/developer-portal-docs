---
title: Frame
summary: struct representing a captured camera frame. 

---

# Frame




Struct representing a captured camera frame.   





## Public Fields

### Format {#mlwebrtcvideosinkframeoutputformat-format}

Gets the format of the image planes in this frame. 

```csharp

public MLWebRTC.VideoSink.Frame.OutputFormat Format { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebRTC.VideoSink.Frame.OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md#enums-outputformat) | Defines the supported output formats of the image planes.  |





-----------

### Id {#ulong-id}

Gets the id of the frame. 

```csharp

public ulong Id { get; set; }

```






-----------

### ImagePlanes {#mlwebrtcvideosinkframeplaneinfo-imageplanes}

Gets the array of image planes contained in this frame. 

```csharp

public MLWebRTC.VideoSink.Frame.PlaneInfo [] ImagePlanes { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebRTC.VideoSink.Frame.PlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.PlaneInfo.md) [] | Struct representing an image plane that comes from some captured camera frame.  |





-----------

### NativeFrame {#nativebufferinfo-nativeframe}

```csharp

public NativeBufferInfo NativeFrame { get; set; }

```






-----------

### TimeStampUs {#ulong-timestampus}

Gets the timestamp of the frame in microseconds. 

```csharp

public ulong TimeStampUs { get; set; }

```






-----------

## Public Methods

### [Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md) Create {#frame-create}

Creates and returns an initialized version of this struct. 

```csharp
public static Frame Create(
    ulong id,
    ulong timeStampUs,
    PlaneInfo [] imagePlanes,
    OutputFormat format
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |id|Id of the frame.|
| ulong |timeStampUs|Timestamp of the frame in microseconds.|
| [PlaneInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.PlaneInfo.md) [] |imagePlanes|Array of image planes this frame contains.|
| [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md#enums-outputformat) |format|The output format of this frame.|






**Returns**: An initialized version of this struct.



-----------

### [Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md) Create {#frame-create}

```csharp
public static Frame Create(
    ulong id,
    ulong timeStampUs,
    NativeBufferInfo nativeBufferInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |id||
| ulong |timeStampUs||
| [NativeBufferInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.NativeBufferInfo.md) |nativeBufferInfo||






-----------

### override string ToString {#override-string-tostring}

Override to display the contents of a frame as a string. 

```csharp
public override string ToString()
```






**Returns**: A string representation of this struct.



-----------

## Public Attributes

### NativeImagePlanesLength {#readonly-dictionary-nativeimageplaneslength}

Defines amount of valid image planes to be found within the frame's image planes array output formats of the image planes. 

```csharp

public static readonly Dictionary< OutputFormat, byte > NativeImagePlanesLength = new Dictionary<OutputFormat, byte>()
                {
                    { OutputFormat.YUV_420_888, 3 },
                    { OutputFormat.RGBA_8888, 1 },
                    { OutputFormat.NativeBuffer, 0 }
                };

```

| Type | Description  | 
|--|--|
| readonly Dictionary&lt; [OutputFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/Frame/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Frame.md#enums-outputformat), byte &gt; | Defines the supported output formats of the image planes.  |





-----------

## Public Enums

### OutputFormat {#enums-outputformat}

Defines the supported output formats of the image planes. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| YUV_420_888 | | YUV&#95;420&#95;888 format.   |
| RGBA_8888 | | RGBA&#95;8888 format.   |
| NativeBuffer | | [Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) buffer format   |








-----------


