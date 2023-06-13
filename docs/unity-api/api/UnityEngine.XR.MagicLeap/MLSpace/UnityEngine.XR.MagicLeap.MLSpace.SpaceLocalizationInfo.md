---
title: SpaceLocalizationInfo
summary: a collection of parameters to be used for localization request. this structure must be initialized by calling #mlspacelocalizationinfoinit before use. 

---

# SpaceLocalizationInfo




A collection of parameters to be used for localization request. This structure must be initialized by calling #MLSpaceLocalizationInfoInit before use.   





## Public Methods

### [SpaceLocalizationInfo](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceLocalizationInfo.md) Create {#spacelocalizationinfo-create}

Initializes the default values for localization info. 

```csharp
public static SpaceLocalizationInfo Create(
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

#MLUUID of the [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) into which the device attempts to localize into. 

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

