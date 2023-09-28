---
title: LocalizationInfo
summary: a structure containing information about the device's localization state. 

---

# LocalizationInfo




A structure containing information about the device's localization state.   





## Public Methods

###  LocalizationInfo {#functions-localizationinfo}

```csharp
public LocalizationInfo(
    NativeBindings.MLSpatialAnchorLocalizationInfo nativeInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [NativeBindings.MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.MLSpatialAnchorLocalizationInfo.md) |nativeInfo|A structure containing information about the device's localization state. |






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### LocalizationStatus {#readonly-localizationstatus}

The localization status at the time this structure was returned. 

```csharp

public readonly LocalizationStatus LocalizationStatus;

```

| Type | Description  | 
|--|--|
| readonly [LocalizationStatus](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.md#enums-localizationstatus) | LocalizationStatus  |





-----------

### MappingMode {#readonly-mappingmode}

The current mapping mode. 

```csharp

public readonly MappingMode MappingMode;

```

| Type | Description  | 
|--|--|
| readonly [MappingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.md#enums-mappingmode) | The current mapping mode, set via settings.  |





-----------

### SpaceId {#readonly-string-spaceid}

If localized, this will contain the name of the current space. 

```csharp

public readonly string SpaceId => this.spaceId.ToString();

```






-----------

### SpaceName {#readonly-string-spacename}

If localized, this will contain the name of the current space. 

```csharp

public readonly string SpaceName;

```






-----------

### SpaceOrigin {#readonly-pose-spaceorigin}

If localized, this will contain the pose info of the target space's origin relative to the world origin. 

```csharp

public readonly Pose SpaceOrigin;

```






-----------


