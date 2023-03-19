---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraConnect {#mlresultcode-mldepthcameraconnect}

```csharp
public MLResult.Code MLDepthCameraConnect(
    in MLDepthCameraSettings settings,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLDepthCameraSettings](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md) |settings||
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraDisconnect {#mlresultcode-mldepthcameradisconnect}

```csharp
public MLResult.Code MLDepthCameraDisconnect(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraGetLatestDepthData {#mlresultcode-mldepthcameragetlatestdepthdata}

```csharp
public MLResult.Code MLDepthCameraGetLatestDepthData(
    ulong handle,
    ulong timeoutMs,
    out IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ulong |timeoutMs||
| out IntPtr |data||






-----------

### [MLResult.Code](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraReleaseDepthData {#mlresultcode-mldepthcamerareleasedepthdata}

```csharp
public MLResult.Code MLDepthCameraReleaseDepthData(
    ulong handle,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| IntPtr |data||






-----------

### [MLResult.Code](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLDepthCameraUpdateSettings {#mlresultcode-mldepthcameraupdatesettings}

```csharp
public MLResult.Code MLDepthCameraUpdateSettings(
    ulong handle,
    in MLDepthCameraSettings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| in [MLDepthCameraSettings](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraSettings.md) |settings||






-----------


