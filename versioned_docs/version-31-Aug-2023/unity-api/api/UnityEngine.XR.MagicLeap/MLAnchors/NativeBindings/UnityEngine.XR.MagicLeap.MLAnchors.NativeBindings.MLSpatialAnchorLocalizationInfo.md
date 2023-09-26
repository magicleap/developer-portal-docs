---
title: MLSpatialAnchorLocalizationInfo
summary: a structure containing information about the device's localization state. 

---

# MLSpatialAnchorLocalizationInfo




A structure containing information about the device's localization state.   





## Public Methods

### [MLSpatialAnchorLocalizationInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/NativeBindings/UnityEngine.XR.MagicLeap.MLAnchors.NativeBindings.MLSpatialAnchorLocalizationInfo.md) Create {#mlspatialanchorlocalizationinfo-create}

```csharp
public static MLSpatialAnchorLocalizationInfo Create()
```






-----------

###  MLSpatialAnchorLocalizationInfo {#functions-mlspatialanchorlocalizationinfo}

```csharp
public MLSpatialAnchorLocalizationInfo(
    uint version
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

### SpaceId {#readonly-spaceid}

If localized, this will contain the unique ID of the current space. 

```csharp

public readonly NativeBindings.MLUUIDBytes SpaceId;

```

| Type | Description  | 
|--|--|
| readonly [NativeBindings.MLUUIDBytes](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUIDBytes.md) | Universally unique identifier, byte array.  |





-----------

### SpaceName {#readonly-string-spacename}

If localized, this will contain the name of the current space. 

```csharp

public readonly string SpaceName;

```






-----------

### TargetSpaceOrigin {#readonly-magicleapnativebindingsmlcoordinateframeuid-targetspaceorigin}

If localized, this will contain the identifier of the transform of the target space's origin relative to the world origin. 

```csharp

public readonly MagicLeapNativeBindings.MLCoordinateFrameUID TargetSpaceOrigin;

```






-----------

### Version {#readonly-uint-version}

Version of the structure. 

```csharp

public readonly uint Version;

```






-----------


