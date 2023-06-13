---
title: Space
summary: a structure containing information about a magic leap space. this structure must be initialized by calling #mlspaceinit before use. 

---

# Space




A structure containing information about a Magic Leap [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). This structure must be initialized by calling #MLSpaceInit before use.   





## Public Methods

### [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) Create {#space-create}

Initializes default values for [MLSpace](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.md). 

```csharp
public static Space Create(
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

Unique ID of the [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). 

```csharp

public MLUUID SpaceId;

```






-----------

### SpaceName {#string-spacename}

Name of the [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). 

```csharp

public string SpaceName;

```






-----------

### SpaceType {#type-spacetype}

Type of the [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). 

```csharp

public Type SpaceType;

```

| Type | Description  | 
|--|--|
| [Type](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.md#enums-type) | Indicates the type of the [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md).  |





-----------

### Version {#uint-version}

Version of the structure. 

```csharp

public uint Version;

```






-----------

