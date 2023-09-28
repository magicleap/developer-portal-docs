---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer {#mlresultcode-mlnativesurfaceacquirehardwarebufferfromnativebuffer}

```csharp
public MLResult.Code MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer(
    ulong handle,
    ulong native&#95;buffer,
    out IntPtr hardwareBuffer,
    out uint width,
    out uint height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ulong |native&#95;buffer||
| out IntPtr |hardwareBuffer||
| out uint |width||
| out uint |height||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceAcquireNextAvailableFrame {#mlresultcode-mlnativesurfaceacquirenextavailableframe}

```csharp
public MLResult.Code MLNativeSurfaceAcquireNextAvailableFrame(
    ulong handle,
    out ulong nativeBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out ulong |nativeBuffer||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceCreate {#mlresultcode-mlnativesurfacecreate}

```csharp
public MLResult.Code MLNativeSurfaceCreate(
    ref MLNativeSurfaceConfig configValues,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLNativeSurface/NativeBindings/UnityEngine.XR.MagicLeap.MLNativeSurface.NativeBindings.MLNativeSurfaceConfig.md) |configValues||
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceGetFrameCropRect {#mlresultcode-mlnativesurfacegetframecroprect}

```csharp
public MLResult.Code MLNativeSurfaceGetFrameCropRect(
    ulong handle,
    out MLRecti cropRect
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out [MLRecti](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLRecti.md) |cropRect|2D rectangle with integer values in native format. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceGetFrameNumber {#mlresultcode-mlnativesurfacegetframenumber}

```csharp
public MLResult.Code MLNativeSurfaceGetFrameNumber(
    ulong handle,
    out ulong number
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out ulong |number||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceGetFrameQueueBufferTimestamp {#mlresultcode-mlnativesurfacegetframequeuebuffertimestamp}

```csharp
public MLResult.Code MLNativeSurfaceGetFrameQueueBufferTimestamp(
    ulong handle,
    out long timestampNs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out long |timestampNs||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceGetFrameTimestamp {#mlresultcode-mlnativesurfacegetframetimestamp}

```csharp
public MLResult.Code MLNativeSurfaceGetFrameTimestamp(
    ulong handle,
    out long timestampNs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out long |timestampNs||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceGetFrameTransformationMatrix {#mlresultcode-mlnativesurfacegetframetransformationmatrix}

```csharp
public MLResult.Code MLNativeSurfaceGetFrameTransformationMatrix(
    ulong handle,
    float [] OutMtx
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| float [] |OutMtx||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceRelease {#mlresultcode-mlnativesurfacerelease}

```csharp
public MLResult.Code MLNativeSurfaceRelease(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceReleaseFrame {#mlresultcode-mlnativesurfacereleaseframe}

```csharp
public MLResult.Code MLNativeSurfaceReleaseFrame(
    ulong handle,
    ulong native&#95;buffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ulong |native&#95;buffer||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLNativeSurfaceSetOnFrameAvailableCallback {#mlresultcode-mlnativesurfacesetonframeavailablecallback}

```csharp
public MLResult.Code MLNativeSurfaceSetOnFrameAvailableCallback(
    ulong handle,
    ref MLNativeSurfaceOnFrameAvailableCallback callback,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLNativeSurface/NativeBindings/UnityEngine.XR.MagicLeap.MLNativeSurface.NativeBindings.MLNativeSurfaceOnFrameAvailableCallback.md) |callback||
| IntPtr |userData||






-----------

### delegate void OnFrameAvailable {#delegate-void-onframeavailable}

```csharp
public delegate void OnFrameAvailable(
    ulong handle,
    ref MLNativeSurfaceFrameAvailableInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLNativeSurfaceFrameAvailableInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLNativeSurface/NativeBindings/UnityEngine.XR.MagicLeap.MLNativeSurface.NativeBindings.MLNativeSurfaceFrameAvailableInfo.md) |info||






-----------

## Public Enums

### MLNativeSurfaceAcquiredBufferCount {#enums-mlnativesurfaceacquiredbuffercount}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Min | 1|   |
| Max | 16|   |








-----------


