---
title: NativeBindings
summary: see ml-camera-metadata-v2.h for additional comments. 

---

# NativeBindings




See ml&#95;camera&#95;metadata&#95;v2.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetAFDistanceRangeRequestMetadata {#mlresultcode-mlcamerametadatagetafdistancerangerequestmetadata}

Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance. 

```csharp
public MLResult.Code MLCameraMetadataGetAFDistanceRangeRequestMetadata(
    ulong Handle,
    out float [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetAFDistanceRangeResultMetadata {#mlresultcode-mlcamerametadatagetafdistancerangeresultmetadata}

Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance. 

```csharp
public MLResult.Code MLCameraMetadataGetAFDistanceRangeResultMetadata(
    ulong Handle,
    out float [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectionaberrationmoderequestmetadata}

Gets color correction aberration. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata(
    ulong Handle,
    out ColorCorrectionAberrationMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionaberrationmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectionaberrationmoderesultmetadata}

Gets color correction aberration. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata(
    ulong Handle,
    out ColorCorrectionAberrationMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionaberrationmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionAvailableAberrationModes {#mlresultcode-mlcamerametadatagetcolorcorrectionavailableaberrationmodes}

Gets color correction aberration modes. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionAvailableAberrationModes(
    ulong Handle,
    out IntPtr OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out IntPtr |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionGainsRequestMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectiongainsrequestmetadata}

Gets color correction gains. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionGainsRequestMetadata(
    ulong Handle,
    float [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| float [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionGainsResultMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectiongainsresultmetadata}

Gets color correction gains. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionGainsResultMetadata(
    ulong Handle,
    float [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| float [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionModeRequestMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectionmoderequestmetadata}

Gets color correction mode. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionModeRequestMetadata(
    ulong Handle,
    out ColorCorrectionMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ColorCorrectionMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionModeResultMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectionmoderesultmetadata}

Gets color correction. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionModeResultMetadata(
    ulong Handle,
    out ColorCorrectionMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ColorCorrectionMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionTransformRequestMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectiontransformrequestmetadata}

Gets color correction transform. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionTransformRequestMetadata(
    ulong Handle,
    IntPtr OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetColorCorrectionTransformResultMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectiontransformresultmetadata}

Gets color correction transform. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionTransformResultMetadata(
    ulong Handle,
    IntPtr OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEAntibandingModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaeantibandingmoderequestmetadata}

Gets AE antibanding mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEAntibandingModeRequestMetadata(
    ulong Handle,
    out ControlAEAntibandingMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaeantibandingmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEAntibandingModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaeantibandingmoderesultmetadata}

Gets AE antibanding mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEAntibandingModeResultMetadata(
    ulong Handle,
    out ControlAEAntibandingMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaeantibandingmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEAvailableModes {#mlresultcode-mlcamerametadatagetcontrolaeavailablemodes}

Gets AE modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEAvailableModes(
    ulong Handle,
    out ControlAEMode [] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAEMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaemode) [] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAECompensationRange {#mlresultcode-mlcamerametadatagetcontrolaecompensationrange}

Gets AE compensation range. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAECompensationRange(
    ulong Handle,
    out int [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out int [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAECompensationStep {#mlresultcode-mlcamerametadatagetcontrolaecompensationstep}

Gets AE compensation step. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAECompensationStep(
    ulong Handle,
    IntPtr OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEExposureCompensationRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaeexposurecompensationrequestmetadata}

Gets AE exposure compensation. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEExposureCompensationRequestMetadata(
    ulong Handle,
    out int OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out int |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEExposureCompensationResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaeexposurecompensationresultmetadata}

Gets AE exposure compensation. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEExposureCompensationResultMetadata(
    ulong Handle,
    out int OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out int |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAELockAvailable {#mlresultcode-mlcamerametadatagetcontrolaelockavailable}

Gets AE lock. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAELockAvailable(
    ulong Handle,
    out ControlAELock OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAELock](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaelock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAELockRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaelockrequestmetadata}

Gets AE lock. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAELockRequestMetadata(
    ulong Handle,
    out ControlAELock OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAELock](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaelock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAELockResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaelockresultmetadata}

Gets AE lock. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAELockResultMetadata(
    ulong Handle,
    out ControlAELock OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAELock](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaelock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEMaxRegions {#mlresultcode-mlcamerametadatagetcontrolaemaxregions}

Gets AE Max Regions. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEMaxRegions(
    ulong Handle,
    out int OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out int |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaemoderequestmetadata}

Gets AE mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEModeRequestMetadata(
    ulong Handle,
    out ControlAEMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAEMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaemode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaemoderesultmetadata}

Gets AE mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEModeResultMetadata(
    ulong Handle,
    out ControlAEMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAEMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaemode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAERegionsRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaeregionsrequestmetadata}

Gets AE regions. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAERegionsRequestMetadata(
    ulong Handle,
    IntPtr OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAERegionsResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaeregionsresultmetadata}

Gets AE regions. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAERegionsResultMetadata(
    ulong Handle,
    IntPtr OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAEStateResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaestateresultmetadata}

Gets AE state. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEStateResultMetadata(
    ulong Handle,
    out ControlAEState OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAEState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaestate) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAETargetFPSRangeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaetargetfpsrangeresultmetadata}

Gets AE target FPS range. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAETargetFPSRangeResultMetadata(
    ulong Handle,
    int [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| int [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAFAvailableModes {#mlresultcode-mlcamerametadatagetcontrolafavailablemodes}

Gets AF modes 

```csharp
public MLResult.Code MLCameraMetadataGetControlAFAvailableModes(
    ulong Handle,
    out ControlAFMode [] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAFMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafmode) [] |OutData|The current auto-focus (AF) mode controls. |
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAFModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolafmoderequestmetadata}

Gets AF mode 

```csharp
public MLResult.Code MLCameraMetadataGetControlAFModeRequestMetadata(
    ulong Handle,
    out ControlAFMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAFMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafmode) |OutData|The current auto-focus (AF) mode controls. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAFModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolafmoderesultmetadata}

Gets AF mode 

```csharp
public MLResult.Code MLCameraMetadataGetControlAFModeResultMetadata(
    ulong Handle,
    out ControlAFMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAFMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafmode) |OutData|The current auto-focus (AF) mode controls. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAFSceneChangeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolafscenechangeresultmetadata}

Gets AF scene change detection status 

```csharp
public MLResult.Code MLCameraMetadataGetControlAFSceneChangeResultMetadata(
    ulong Handle,
    out ControlAFSceneChange OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAFSceneChange](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafscenechange) |OutData|Whether a significant scene change is detected by AF algorithm. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAFStateResultMetadata {#mlresultcode-mlcamerametadatagetcontrolafstateresultmetadata}

Gets AF state 

```csharp
public MLResult.Code MLCameraMetadataGetControlAFStateResultMetadata(
    ulong Handle,
    out ControlAFState OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAFState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafstate) |OutData|Current state of auto-focus (AF) routine. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAFTriggerRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaftriggerrequestmetadata}

Gets AF trigger 

```csharp
public MLResult.Code MLCameraMetadataGetControlAFTriggerRequestMetadata(
    ulong Handle,
    out ControlAFTrigger OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAFTrigger](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaftrigger) |OutData|The current auto-focus (AF) trigger. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAFTriggerResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaftriggerresultmetadata}

Gets AF trigger 

```csharp
public MLResult.Code MLCameraMetadataGetControlAFTriggerResultMetadata(
    ulong Handle,
    out ControlAFTrigger OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAFTrigger](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaftrigger) |OutData|The current auto-focus (AF) trigger. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAWBAvailableModes {#mlresultcode-mlcamerametadatagetcontrolawbavailablemodes}

Gets AWB modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAWBAvailableModes(
    ulong Handle,
    out ControlAWBMode [] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAWBMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbmode) [] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAWBLockAvailable {#mlresultcode-mlcamerametadatagetcontrolawblockavailable}

Gets AWB lock. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAWBLockAvailable(
    ulong Handle,
    out ControlAWBLock OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAWBLock](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawblock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAWBLockRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolawblockrequestmetadata}

Gets AWB lock. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAWBLockRequestMetadata(
    ulong Handle,
    out ControlAWBLock OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAWBLock](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawblock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAWBLockResultMetadata {#mlresultcode-mlcamerametadatagetcontrolawblockresultmetadata}

Gets AWB lock. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAWBLockResultMetadata(
    ulong Handle,
    out ControlAWBLock OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAWBLock](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawblock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAWBModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolawbmoderequestmetadata}

Gets AWB mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAWBModeRequestMetadata(
    ulong Handle,
    out ControlAWBMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAWBMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAWBModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolawbmoderesultmetadata}

Gets AWB mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAWBModeResultMetadata(
    ulong Handle,
    out ControlAWBMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAWBMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAWBStateResultMetadata {#mlresultcode-mlcamerametadatagetcontrolawbstateresultmetadata}

Gets AWB state. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAWBStateResultMetadata(
    ulong Handle,
    out ControlAWBState OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAWBState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbstate) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAvailableEffectModes {#mlresultcode-mlcamerametadatagetcontrolavailableeffectmodes}

Gets Effect modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAvailableEffectModes(
    ulong Handle,
    out ControlEffectMode [] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlEffectMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controleffectmode) [] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAvailableModes {#mlresultcode-mlcamerametadatagetcontrolavailablemodes}

Gets Available Modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAvailableModes(
    ulong Handle,
    out ControlMode [] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlmode) [] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlAvailableSceneModes {#mlresultcode-mlcamerametadatagetcontrolavailablescenemodes}

Gets Scene modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAvailableSceneModes(
    ulong Handle,
    out ControlSceneMode [] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlSceneMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlscenemode) [] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlEffectModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontroleffectmoderequestmetadata}

Effect mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlEffectModeRequestMetadata(
    ulong Handle,
    out ControlEffectMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlEffectMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controleffectmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlEffectModeResultMetadata {#mlresultcode-mlcamerametadatagetcontroleffectmoderesultmetadata}

Gets Effect mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlEffectModeResultMetadata(
    ulong Handle,
    out ControlEffectMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlEffectMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controleffectmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolexposureuppertimelimitrequestmetadata}

Gets exposure time upper limit. 

```csharp
public MLResult.Code MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata(
    ulong Handle,
    out long OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out long |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata {#mlresultcode-mlcamerametadatagetcontrolexposureuppertimelimitresultmetadata}

Gets exposure time upper limit. 

```csharp
public MLResult.Code MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata(
    ulong Handle,
    out long OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out long |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlForceApplyModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolforceapplymoderequestmetadata}

Gets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties. 

```csharp
public MLResult.Code MLCameraMetadataGetControlForceApplyModeRequestMetadata(
    ulong Handle,
    out ControlForceApplyMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlForceApplyMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlforceapplymode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlForceApplyModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolforceapplymoderesultmetadata}

Gets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties. 

```csharp
public MLResult.Code MLCameraMetadataGetControlForceApplyModeResultMetadata(
    ulong Handle,
    out ControlForceApplyMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlForceApplyMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlforceapplymode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolmoderequestmetadata}

Gets mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlModeRequestMetadata(
    ulong Handle,
    out ControlMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolmoderesultmetadata}

Gets mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlModeResultMetadata(
    ulong Handle,
    out ControlMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlSceneModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolscenemoderequestmetadata}

Gets Scene mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlSceneModeRequestMetadata(
    ulong Handle,
    out ControlSceneMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlSceneMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlscenemode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetControlSceneModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolscenemoderesultmetadata}

Gets Scene mode. 

```csharp
public MLResult.Code MLCameraMetadataGetControlSceneModeResultMetadata(
    ulong Handle,
    out ControlSceneMode OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlSceneMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlscenemode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata {#mlresultcode-mlcamerametadatagetjpeggpscoordinatesrequestmetadata}

Gets jpeg GPS coordinates. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata(
    ulong Handle,
    double [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| double [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetJpegGPSCoordinatesResultMetadata {#mlresultcode-mlcamerametadatagetjpeggpscoordinatesresultmetadata}

Gets jpeg GPS coordinates. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegGPSCoordinatesResultMetadata(
    ulong Handle,
    out double [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out double [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetJpegGPSTimestampRequestMetadata {#mlresultcode-mlcamerametadatagetjpeggpstimestamprequestmetadata}

Gets jpeg timestamp. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegGPSTimestampRequestMetadata(
    ulong Handle,
    out long OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out long |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetJpegGPSTimestampResultMetadata {#mlresultcode-mlcamerametadatagetjpeggpstimestampresultmetadata}

Gets jpeg timestamp. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegGPSTimestampResultMetadata(
    ulong Handle,
    out long OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out long |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetJpegQualityRequestMetadata {#mlresultcode-mlcamerametadatagetjpegqualityrequestmetadata}

Gets jpeg quality. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegQualityRequestMetadata(
    ulong Handle,
    out byte OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out byte |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetJpegQualityResultMetadata {#mlresultcode-mlcamerametadatagetjpegqualityresultmetadata}

Gets jpeg quality. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegQualityResultMetadata(
    ulong Handle,
    out byte OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out byte |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetJpegThumbnailSizeRequestMetadata {#mlresultcode-mlcamerametadatagetjpegthumbnailsizerequestmetadata}

Gets jpeg thumbnail size. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegThumbnailSizeRequestMetadata(
    ulong Handle,
    out JpegThumbnailSize OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [JpegThumbnailSize](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-jpegthumbnailsize) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetJpegThumbnailSizeResultMetadata {#mlresultcode-mlcamerametadatagetjpegthumbnailsizeresultmetadata}

Gets jpeg thumbnail size. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegThumbnailSizeResultMetadata(
    ulong Handle,
    out JpegThumbnailSize OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [JpegThumbnailSize](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-jpegthumbnailsize) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetLensFocusDistanceRequestMetadata {#mlresultcode-mlcamerametadatagetlensfocusdistancerequestmetadata}

Gets Lens focus distance in diopters. The distance is between minimum focus distance and hyperfocal distance. 

```csharp
public MLResult.Code MLCameraMetadataGetLensFocusDistanceRequestMetadata(
    ulong Handle,
    out float OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetLensFocusDistanceResultMetadata {#mlresultcode-mlcamerametadatagetlensfocusdistanceresultmetadata}

Gets Lens focus distance 

```csharp
public MLResult.Code MLCameraMetadataGetLensFocusDistanceResultMetadata(
    ulong Handle,
    out float OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetLensInfoHyperfocalDistance {#mlresultcode-mlcamerametadatagetlensinfohyperfocaldistance}

Gets lens hyperfocal distance. 

```csharp
public MLResult.Code MLCameraMetadataGetLensInfoHyperfocalDistance(
    ulong Handle,
    out float OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetLensInfoMinimumFocusDistance {#mlresultcode-mlcamerametadatagetlensinfominimumfocusdistance}

Gets lens minimum focus distance 

```csharp
public MLResult.Code MLCameraMetadataGetLensInfoMinimumFocusDistance(
    ulong Handle,
    out float OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement {#mlresultcode-mlcamerametadatagetlensinfominimumfocusdistanceincrement}

Gets lens minimum focus distance increment. The lens position can be set in multiples of distance increments between hyperfocal distance and minimum focus distance. 

```csharp
public MLResult.Code MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement(
    ulong Handle,
    out float OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetLensStateResultMetadata {#mlresultcode-mlcamerametadatagetlensstateresultmetadata}

Gets Lens state 

```csharp
public MLResult.Code MLCameraMetadataGetLensStateResultMetadata(
    ulong Handle,
    out LensState OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [LensState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-lensstate) |OutData|Current Lens status. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorExposureTimeRequestMetadata {#mlresultcode-mlcamerametadatagetsensorexposuretimerequestmetadata}

Gets sensor exposure time. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorExposureTimeRequestMetadata(
    ulong Handle,
    out long OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out long |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorExposureTimeResultMetadata {#mlresultcode-mlcamerametadatagetsensorexposuretimeresultmetadata}

Gets sensor exposure time. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorExposureTimeResultMetadata(
    ulong Handle,
    out long OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out long |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorFrameDurationResultMetadata {#mlresultcode-mlcamerametadatagetsensorframedurationresultmetadata}

Gets sensor frame duration. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorFrameDurationResultMetadata(
    ulong Handle,
    out long OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out long |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorInfoActiveArraySize {#mlresultcode-mlcamerametadatagetsensorinfoactivearraysize}

Gets sensor info active array sizes. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorInfoActiveArraySize(
    ulong Handle,
    int [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| int [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorInfoSensitivityRange {#mlresultcode-mlcamerametadatagetsensorinfosensitivityrange}

Gets sensor info sensitivity range. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorInfoSensitivityRange(
    ulong Handle,
    int [] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| int [] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorOrientation {#mlresultcode-mlcamerametadatagetsensororientation}

Gets sensor orientation degree. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorOrientation(
    ulong Handle,
    out int OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out int |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorSensitivityRequestMetadata {#mlresultcode-mlcamerametadatagetsensorsensitivityrequestmetadata}

Gets sensor sensitivity. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorSensitivityRequestMetadata(
    ulong Handle,
    out int OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out int |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorSensitivityResultMetadata {#mlresultcode-mlcamerametadatagetsensorsensitivityresultmetadata}

Gets sensor sensitivity. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorSensitivityResultMetadata(
    ulong Handle,
    out int OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out int |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataGetSensorTimestampResultMetadata {#mlresultcode-mlcamerametadatagetsensortimestampresultmetadata}

Gets frame captured timestamp. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorTimestampResultMetadata(
    ulong Handle,
    out long OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out long |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetAFDistanceRange {#mlresultcode-mlcamerametadatasetafdistancerange}

Sets AF distance range. Both min and max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance. 

```csharp
public MLResult.Code MLCameraMetadataSetAFDistanceRange(
    ulong Handle,
    in float [] InData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| in float [] |InData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetColorCorrectionAberrationMode {#mlresultcode-mlcamerametadatasetcolorcorrectionaberrationmode}

Sets color correction aberration. 

```csharp
public MLResult.Code MLCameraMetadataSetColorCorrectionAberrationMode(
    ulong Handle,
    ref ColorCorrectionAberrationMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionaberrationmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetColorCorrectionGains {#mlresultcode-mlcamerametadatasetcolorcorrectiongains}

Sets color correction gains. 

```csharp
public MLResult.Code MLCameraMetadataSetColorCorrectionGains(
    ulong Handle,
    float [] Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| float [] |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetColorCorrectionMode {#mlresultcode-mlcamerametadatasetcolorcorrectionmode}

Sets color correction mode. 

```csharp
public MLResult.Code MLCameraMetadataSetColorCorrectionMode(
    ulong Handle,
    ref ColorCorrectionMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ColorCorrectionMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetColorCorrectionTransform {#mlresultcode-mlcamerametadatasetcolorcorrectiontransform}

Sets color correction transform. 

```csharp
public MLResult.Code MLCameraMetadataSetColorCorrectionTransform(
    ulong Handle,
    IntPtr Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAEAntibandingMode {#mlresultcode-mlcamerametadatasetcontrolaeantibandingmode}

Sets AE antiband mode. 

```csharp
public MLResult.Code MLCameraMetadataSetControlAEAntibandingMode(
    ulong Handle,
    ref ControlAEAntibandingMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaeantibandingmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAEExposureCompensation {#mlresultcode-mlcamerametadatasetcontrolaeexposurecompensation}

Sets AE exposure compensation. 

```csharp
public MLResult.Code MLCameraMetadataSetControlAEExposureCompensation(
    ulong Handle,
    ref int Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref int |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAELock {#mlresultcode-mlcamerametadatasetcontrolaelock}

Sets AE lock. 

```csharp
public MLResult.Code MLCameraMetadataSetControlAELock(
    ulong Handle,
    ref ControlAELock Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ControlAELock](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaelock) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAEMode {#mlresultcode-mlcamerametadatasetcontrolaemode}

Sets AE mode. MLCameraMetadataControlAEMode&#95;Off is not supported if camera is configured for 15FPS 

```csharp
public MLResult.Code MLCameraMetadataSetControlAEMode(
    ulong Handle,
    ref ControlAEMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ControlAEMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaemode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAERegions {#mlresultcode-mlcamerametadatasetcontrolaeregions}

set AE regions. 

```csharp
public MLResult.Code MLCameraMetadataSetControlAERegions(
    ulong Handle,
    IntPtr Data,
    int Count
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |Data||
| int |Count||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAFMode {#mlresultcode-mlcamerametadatasetcontrolafmode}

Sets AF mode 

```csharp
public MLResult.Code MLCameraMetadataSetControlAFMode(
    ulong Handle,
    in ControlAFMode InData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| in [ControlAFMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafmode) |InData|The current auto-focus (AF) mode controls. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAFTrigger {#mlresultcode-mlcamerametadatasetcontrolaftrigger}

Sets AF trigger 

```csharp
public MLResult.Code MLCameraMetadataSetControlAFTrigger(
    ulong Handle,
    in ControlAFTrigger InData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| in [ControlAFTrigger](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaftrigger) |InData|The current auto-focus (AF) trigger. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAWBLock {#mlresultcode-mlcamerametadatasetcontrolawblock}

Sets AWB lock. 

```csharp
public MLResult.Code MLCameraMetadataSetControlAWBLock(
    ulong Handle,
    ref ControlAWBLock Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ControlAWBLock](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawblock) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlAWBMode {#mlresultcode-mlcamerametadatasetcontrolawbmode}

Sets AWB mode. 

```csharp
public MLResult.Code MLCameraMetadataSetControlAWBMode(
    ulong Handle,
    ref ControlAWBMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ControlAWBMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlEffectMode {#mlresultcode-mlcamerametadatasetcontroleffectmode}

Sets Effect mode. 

```csharp
public MLResult.Code MLCameraMetadataSetControlEffectMode(
    ulong Handle,
    ref ControlEffectMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ControlEffectMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controleffectmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlExposureUpperTimeLimit {#mlresultcode-mlcamerametadatasetcontrolexposureuppertimelimit}

Sets exposure time upper limit. 

```csharp
public MLResult.Code MLCameraMetadataSetControlExposureUpperTimeLimit(
    ulong Handle,
    long Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| long |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlForceApplyMode {#mlresultcode-mlcamerametadatasetcontrolforceapplymode}

Sets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties. 

```csharp
public MLResult.Code MLCameraMetadataSetControlForceApplyMode(
    ulong Handle,
    ControlForceApplyMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| [ControlForceApplyMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlforceapplymode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlMode {#mlresultcode-mlcamerametadatasetcontrolmode}

Sets mode. 

```csharp
public MLResult.Code MLCameraMetadataSetControlMode(
    ulong Handle,
    ref ControlMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ControlMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetControlSceneMode {#mlresultcode-mlcamerametadatasetcontrolscenemode}

Sets Scene mode. 

```csharp
public MLResult.Code MLCameraMetadataSetControlSceneMode(
    ulong Handle,
    ref ControlSceneMode Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [ControlSceneMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlscenemode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetJpegGPSCoordinates {#mlresultcode-mlcamerametadatasetjpeggpscoordinates}

Sets jpeg GPS coordinates. 

```csharp
public MLResult.Code MLCameraMetadataSetJpegGPSCoordinates(
    ulong Handle,
    double [] Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| double [] |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetJpegGPSTimestamp {#mlresultcode-mlcamerametadatasetjpeggpstimestamp}

Sets jpeg timestamp. 

```csharp
public MLResult.Code MLCameraMetadataSetJpegGPSTimestamp(
    ulong Handle,
    long Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| long |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetJpegQuality {#mlresultcode-mlcamerametadatasetjpegquality}

Sets jpeg quality. 

```csharp
public MLResult.Code MLCameraMetadataSetJpegQuality(
    ulong Handle,
    ref byte Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref byte |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetJpegThumbnailSize {#mlresultcode-mlcamerametadatasetjpegthumbnailsize}

Sets jpeg thumbnail size. 

```csharp
public MLResult.Code MLCameraMetadataSetJpegThumbnailSize(
    ulong Handle,
    ref JpegThumbnailSize Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [JpegThumbnailSize](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-jpegthumbnailsize) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetLensFocusDistance {#mlresultcode-mlcamerametadatasetlensfocusdistance}

Sets Lens focus distance 

```csharp
public MLResult.Code MLCameraMetadataSetLensFocusDistance(
    ulong Handle,
    in float InData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| in float |InData||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetSensorExposureTime {#mlresultcode-mlcamerametadatasetsensorexposuretime}

Sets sensor exposure time. 

```csharp
public MLResult.Code MLCameraMetadataSetSensorExposureTime(
    ulong Handle,
    ref long Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref long |Data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLCameraMetadataSetSensorSensitivity {#mlresultcode-mlcamerametadatasetsensorsensitivity}

Sets sensor sensitivity. 

```csharp
public MLResult.Code MLCameraMetadataSetSensorSensitivity(
    ulong Handle,
    ref int Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref int |Data||






-----------


