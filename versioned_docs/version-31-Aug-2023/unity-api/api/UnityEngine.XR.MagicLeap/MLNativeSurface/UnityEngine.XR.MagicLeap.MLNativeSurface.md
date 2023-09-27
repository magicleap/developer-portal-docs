---
title: MLNativeSurface

---

# MLNativeSurface



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Fields

### Handle {#ulong-handle}

```csharp

public ulong Handle { get; set; }

```






-----------

## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) AcquireNextAvailableFrame {#mlresult-acquirenextavailableframe}

```csharp
public MLResult AcquireNextAvailableFrame(
    out ulong nativeBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |nativeBuffer||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Destroy {#mlresult-destroy}

```csharp
public MLResult Destroy()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetFrameNumber {#mlresult-getframenumber}

```csharp
public MLResult GetFrameNumber(
    out ulong number
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |number||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetFrameQueueBufferTimestamp {#mlresult-getframequeuebuffertimestamp}

```csharp
public MLResult GetFrameQueueBufferTimestamp(
    out long timestampNs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out long |timestampNs||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetFrameTimestamp {#mlresult-getframetimestamp}

```csharp
public MLResult GetFrameTimestamp(
    out long timestampNs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out long |timestampNs||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetFrameTransformMatrix {#mlresult-getframetransformmatrix}

```csharp
public MLResult GetFrameTransformMatrix(
    float [] frameTransformMatColMajor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |frameTransformMatColMajor||






-----------

###  MLNativeSurface {#functions-mlnativesurface}

```csharp
public MLNativeSurface(
    PixelFormat pixelFormat,
    ushort bufferCount,
    uint width,
    uint height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [PixelFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLNativeSurface/UnityEngine.XR.MagicLeap.MLNativeSurface.md#enums-pixelformat) |pixelFormat||
| ushort |bufferCount||
| uint |width||
| uint |height||






-----------

###  MLNativeSurface {#functions-mlnativesurface}

For externally owned native surface, like in the case of [MLMediaRecorder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md)

```csharp
public MLNativeSurface(
    ulong surfaceHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |surfaceHandle||






-----------

### delegate void OnFrameAvailableDelegate {#delegate-void-onframeavailabledelegate}

```csharp
public delegate void OnFrameAvailableDelegate()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ReleaseFrame {#mlresult-releaseframe}

```csharp
public MLResult ReleaseFrame(
    ulong nativeBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |nativeBuffer||






-----------

## Public Events

### OnFrameAvailable {#onframeavailabledelegate-onframeavailable}

```csharp
public OnFrameAvailableDelegate OnFrameAvailable()
```






-----------

## Public Enums

### PixelFormat {#enums-pixelformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Custom | -4|  Custom  |
| Translucent | -3|  Translucent  |
| Transparent | -2|  Transparent  |
| Opaque | -1|  Opaque  |
| None | 0|  None  |
| Rgba8888 | 1|  4x8-bit RGBA  |
| Rgbx8888 | 2|  4x8-bit RGBX  |
| Rgb888 | 3|  3x8-bit RGB  |
| Rgb565 | 4|  16-bit RGB  |
| Bgra8888 | 5|  4x8-bit BGRA  |
| RgbaFp16 | 22|  64-bit RGBA  |
| Rgba1010102 | 43|  32-bit RGBA  |








-----------


