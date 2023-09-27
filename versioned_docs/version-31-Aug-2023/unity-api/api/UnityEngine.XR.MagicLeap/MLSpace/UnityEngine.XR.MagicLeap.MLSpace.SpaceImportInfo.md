---
title: SpaceImportInfo
summary: a structure containing information needed to import magic leap space. this structure must be initialized by calling #mlspaceimportinfoinit before use. 

---

# SpaceImportInfo




A structure containing information needed to import Magic Leap [Space](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). This structure must be initialized by calling #MLSpaceImportInfoInit before use.   





## Public Methods

### [SpaceImportInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceImportInfo.md) Create {#spaceimportinfo-create}

Initialize default values for #SpaceImportInfo. 

```csharp
public static SpaceImportInfo Create(
    uint version =1u
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### Data {#intptr-data}

Binary data obtained from #MLSpaceExportSpace. 

```csharp

public IntPtr Data;

```






-----------

### Size {#ulong-size}

Binary data size in bytes. 

```csharp

public ulong Size;

```






-----------

### Version {#uint-version}

Version of the structure. 

```csharp

public uint Version;

```






-----------


