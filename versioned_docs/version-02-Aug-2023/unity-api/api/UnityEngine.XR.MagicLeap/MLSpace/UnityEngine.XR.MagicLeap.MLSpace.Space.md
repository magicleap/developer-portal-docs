---
title: Space
summary: a structure containing information about a magic leap space. this structure must be initialized by calling #mlspaceinit before use. 

---

# Space




A structure containing information about a Magic Leap Space. This structure must be initialized by calling #MLSpaceInit before use.   





## Public Methods

### [Space](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) Create {#space-create}

Initializes default values for MLSpace. 

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

Unique ID of the Space. 

```csharp

public MLUUID SpaceId;

```






-----------

### SpaceName {#string-spacename}

Name of the Space. 

```csharp

public string SpaceName;

```






-----------

### SpaceType {#type-spacetype}

Type of the Space. 

```csharp

public Type SpaceType;

```

| Type | Description  | 
|--|--|
| [Type](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.md#enums-type) | Indicates the type of the Space.  |





-----------

### Version {#uint-version}

Version of the structure. 

```csharp

public uint Version;

```






-----------


