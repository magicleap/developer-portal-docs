---
title: SpaceLocalizationResult
summary: a structure containing information about the device's localization state. this structure must be initialized by calling #mlspacelocalizationresultinit before usebefore use. 

---

# SpaceLocalizationResult




A structure containing information about the device's localization state. This structure must be initialized by calling #MLSpaceLocalizationResultInit before usebefore use.   





## Public Methods

### [SpaceLocalizationResult](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceLocalizationResult.md) Create {#spacelocalizationresult-create}

Initialize default values for #MLSpaceLocalizationResult. 

```csharp
public static SpaceLocalizationResult Create(
    uint version =1u
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### LocalizationStatus {#readonly-localizationstatus}

The localization status at the time this structure was returned. 

```csharp

public readonly Status LocalizationStatus;

```

| Type | Description  | 
|--|--|
| readonly [Status](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.md#enums-status) | The current localization status.  |





-----------

### Space {#readonly-space}

[Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) information. If localized(#MLSpaceLocalizationStatus&#95;Localized) this will contain valid [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) information. If not localized this field should be ignored. 

```csharp

public readonly Space Space;

```

| Type | Description  | 
|--|--|
| readonly [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) | A structure containing information about a Magic Leap [Space](/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). This structure must be initialized by calling #MLSpaceInit before use.  |





-----------

### Version {#uint-version}

Version of the structure. 

```csharp

public uint Version;

```






-----------

