---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### delegate void CloseDelegate {#delegate-void-closedelegate}

```csharp
public delegate void CloseDelegate(
    ulong dataSourceHandle,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |dataSourceHandle||
| IntPtr |context||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) Create {#mlresultcode-create}

```csharp
public static MLResult.Code Create(
    DataSource dataSource,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [DataSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/DataSource/UnityEngine.XR.MagicLeap.MLMedia.DataSource.md) |dataSource||
| out ulong |handle||






-----------

### delegate long GetSizeDelegate {#delegate-long-getsizedelegate}

```csharp
public delegate long GetSizeDelegate(
    ulong dataSourceHandle,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |dataSourceHandle||
| IntPtr |context||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDataSourceCreate {#mlresultcode-mlmediadatasourcecreate}

```csharp
public MLResult.Code MLMediaDataSourceCreate(
    ReadAtDelegate readAt,
    GetSizeDelegate getSize,
    CloseDelegate close,
    IntPtr context,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ReadAtDelegate |readAt||
| GetSizeDelegate |getSize||
| CloseDelegate |close||
| IntPtr |context||
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDataSourceDestroy {#mlresultcode-mlmediadatasourcedestroy}

```csharp
public MLResult.Code MLMediaDataSourceDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### delegate long ReadAtDelegate {#delegate-long-readatdelegate}

```csharp
public delegate long ReadAtDelegate(
    ulong dataSourceHandle,
    ulong position,
    ulong size,
    IntPtr buffer,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |dataSourceHandle||
| ulong |position||
| ulong |size||
| IntPtr |buffer||
| IntPtr |context||






-----------


