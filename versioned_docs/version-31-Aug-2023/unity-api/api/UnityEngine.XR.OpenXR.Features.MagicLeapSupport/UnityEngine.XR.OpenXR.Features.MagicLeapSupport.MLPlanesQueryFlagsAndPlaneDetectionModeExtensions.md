---
title: MLPlanesQueryFlagsAndPlaneDetectionModeExtensions

---

# MLPlanesQueryFlagsAndPlaneDetectionModeExtensions



**NameSpace:** 
[MagicLeapSupport](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR.Features.MagicLeapSupport/UnityEngine.XR.OpenXR.Features.MagicLeapSupport.md) 








## Public Methods

### void ToMLXrOrientationsAndSemanticTypes {#void-tomlxrorientationsandsemantictypes}

```csharp
public static void ToMLXrOrientationsAndSemanticTypes(
    this MLXrPlaneSubsystem.MLPlanesQueryFlags flags,
    out IList< MLXrPlaneSubsystem.XrTypes.MLXrPlaneDetectorOrientation > orientations,
    out IList< MLXrPlaneSubsystem.XrTypes.MLXrPlaneDetectorSemanticType > semanticTypes
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| this [MLXrPlaneSubsystem.MLPlanesQueryFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR.Features.MagicLeapSupport/MLXrPlaneSubsystem/UnityEngine.XR.OpenXR.Features.MagicLeapSupport.MLXrPlaneSubsystem.md#enums-mlplanesqueryflags) |flags||
| out IList&lt; MLXrPlaneSubsystem.XrTypes.MLXrPlaneDetectorOrientation &gt; |orientations||
| out IList&lt; MLXrPlaneSubsystem.XrTypes.MLXrPlaneDetectorSemanticType &gt; |semanticTypes||






-----------

### [MLXrPlaneSubsystem.MLPlanesQueryFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR.Features.MagicLeapSupport/MLXrPlaneSubsystem/UnityEngine.XR.OpenXR.Features.MagicLeapSupport.MLXrPlaneSubsystem.md#enums-mlplanesqueryflags) ToMLXrQueryFlags {#mlxrplanesubsystemmlplanesqueryflags-tomlxrqueryflags}

```csharp
public static MLXrPlaneSubsystem.MLPlanesQueryFlags ToMLXrQueryFlags(
    this PlaneDetectionMode planeDetectionMode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| this PlaneDetectionMode |planeDetectionMode||






-----------

### PlaneDetectionMode ToPlaneDetectionMode {#planedetectionmode-toplanedetectionmode}

```csharp
public static PlaneDetectionMode ToPlaneDetectionMode(
    this MLXrPlaneSubsystem.MLPlanesQueryFlags planesQueryFlags
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| this [MLXrPlaneSubsystem.MLPlanesQueryFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR.Features.MagicLeapSupport/MLXrPlaneSubsystem/UnityEngine.XR.OpenXR.Features.MagicLeapSupport.MLXrPlaneSubsystem.md#enums-mlplanesqueryflags) |planesQueryFlags||






-----------


