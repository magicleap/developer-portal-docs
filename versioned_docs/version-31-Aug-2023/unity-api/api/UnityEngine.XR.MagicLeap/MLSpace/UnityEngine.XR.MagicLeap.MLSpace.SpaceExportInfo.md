---
title: SpaceExportInfo
summary: a structure containing information about the space export settings. this structure must be initialized by calling #mlspaceexportinfoinit before use. 

---

# SpaceExportInfo




A structure containing information about the [Space](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) export settings. This structure must be initialized by calling #MLSpaceExportInfoInit before use.   





## Public Methods

### [SpaceExportInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceExportInfo.md) Create {#spaceexportinfo-create}

Initialize default values for #SpaceExportInfo. 

```csharp
public static SpaceExportInfo Create(
    uint version =1u
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### SpaceId {#mluuid-spaceid}

#MLUUID of the [Space](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) that needs to be exported. 

```csharp

public MLUUID SpaceId;

```






-----------

### Version {#uint-version}

Version of the structure. 

```csharp

public uint Version;

```






-----------


