---
title: SpaceExportOutData
summary: a structure containing information about the exported space. 

---

# SpaceExportOutData




A structure containing information about the exported [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md).   





## Public Methods

### [SpaceExportOutData](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceExportOutData.md) Create {#spaceexportoutdata-create}

```csharp
public static SpaceExportOutData Create()
```






-----------

### byte [] GetData {#byte-getdata}

```csharp
public static byte [] GetData(
    SpaceExportOutData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [SpaceExportOutData](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceExportOutData.md) |data|A structure containing information about the exported [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). |






-----------

## Public Attributes

### Data {#intptr-data}

[Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) data. This is binary data and typically does not include a terminating null character. 

```csharp

public IntPtr Data;

```






-----------

### Size {#readonly-ulong-size}

Binary data size in bytes. 

```csharp

public readonly ulong Size;

```






-----------

