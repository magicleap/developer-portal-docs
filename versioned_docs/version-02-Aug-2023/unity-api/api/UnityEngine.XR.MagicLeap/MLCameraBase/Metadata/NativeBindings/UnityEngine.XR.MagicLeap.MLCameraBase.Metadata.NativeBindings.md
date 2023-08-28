---
title: NativeBindings
summary: see ml-camera-metadata-v2.h for additional comments. 

---

# NativeBindings




See ml&#95;camera&#95;metadata&#95;v2.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetAFDistanceRangeRequestMetadata {#mlresultcode-mlcamerametadatagetafdistancerangerequestmetadata}

Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance. 

```csharp
public MLResult.Code MLCameraMetadataGetAFDistanceRangeRequestMetadata(
    ulong Handle,
    out float[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetAFDistanceRangeResultMetadata {#mlresultcode-mlcamerametadatagetafdistancerangeresultmetadata}

Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance. 

```csharp
public MLResult.Code MLCameraMetadataGetAFDistanceRangeResultMetadata(
    ulong Handle,
    out float[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out float[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectionaberrationmoderequestmetadata}

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
| out [ColorCorrectionAberrationMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionaberrationmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectionaberrationmoderesultmetadata}

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
| out [ColorCorrectionAberrationMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionaberrationmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionAvailableAberrationModes {#mlresultcode-mlcamerametadatagetcolorcorrectionavailableaberrationmodes}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionGainsRequestMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectiongainsrequestmetadata}

Gets color correction gains. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionGainsRequestMetadata(
    ulong Handle,
    float[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| float[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionGainsResultMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectiongainsresultmetadata}

Gets color correction gains. 

```csharp
public MLResult.Code MLCameraMetadataGetColorCorrectionGainsResultMetadata(
    ulong Handle,
    float[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| float[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionModeRequestMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectionmoderequestmetadata}

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
| out [ColorCorrectionMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionModeResultMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectionmoderesultmetadata}

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
| out [ColorCorrectionMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionTransformRequestMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectiontransformrequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetColorCorrectionTransformResultMetadata {#mlresultcode-mlcamerametadatagetcolorcorrectiontransformresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEAntibandingModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaeantibandingmoderequestmetadata}

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
| out [ControlAEAntibandingMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaeantibandingmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEAntibandingModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaeantibandingmoderesultmetadata}

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
| out [ControlAEAntibandingMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaeantibandingmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEAvailableModes {#mlresultcode-mlcamerametadatagetcontrolaeavailablemodes}

Gets AE modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAEAvailableModes(
    ulong Handle,
    out ControlAEMode[] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAEMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaemode)[] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAECompensationRange {#mlresultcode-mlcamerametadatagetcontrolaecompensationrange}

Gets AE compensation range. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAECompensationRange(
    ulong Handle,
    out int[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out int[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAECompensationStep {#mlresultcode-mlcamerametadatagetcontrolaecompensationstep}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEExposureCompensationRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaeexposurecompensationrequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEExposureCompensationResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaeexposurecompensationresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAELockAvailable {#mlresultcode-mlcamerametadatagetcontrolaelockavailable}

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
| out [ControlAELock](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaelock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAELockRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaelockrequestmetadata}

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
| out [ControlAELock](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaelock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAELockResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaelockresultmetadata}

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
| out [ControlAELock](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaelock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEMaxRegions {#mlresultcode-mlcamerametadatagetcontrolaemaxregions}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaemoderequestmetadata}

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
| out [ControlAEMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaemode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaemoderesultmetadata}

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
| out [ControlAEMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaemode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAERegionsRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaeregionsrequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAERegionsResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaeregionsresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAEStateResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaestateresultmetadata}

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
| out [ControlAEState](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaestate) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAETargetFPSRangeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaetargetfpsrangeresultmetadata}

Gets AE target FPS range. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAETargetFPSRangeResultMetadata(
    ulong Handle,
    int[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| int[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAFAvailableModes {#mlresultcode-mlcamerametadatagetcontrolafavailablemodes}

Gets AF modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAFAvailableModes(
    ulong Handle,
    out ControlAFMode[] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAFMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafmode)[] |OutData|The current auto-focus (AF) mode controls. |
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAFModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolafmoderequestmetadata}

Gets AF mode. 

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
| out [ControlAFMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafmode) |OutData|The current auto-focus (AF) mode controls. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAFModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolafmoderesultmetadata}

Gets AF mode. 

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
| out [ControlAFMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafmode) |OutData|The current auto-focus (AF) mode controls. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAFSceneChangeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolafscenechangeresultmetadata}

Gets AF scene change detection status. 

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
| out [ControlAFSceneChange](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafscenechange) |OutData|Whether a significant scene change is detected by AF algorithm. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAFStateResultMetadata {#mlresultcode-mlcamerametadatagetcontrolafstateresultmetadata}

Gets AF state. 

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
| out [ControlAFState](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafstate) |OutData|Current state of auto-focus (AF) routine. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAFTriggerRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolaftriggerrequestmetadata}

Gets AF trigger. 

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
| out [ControlAFTrigger](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaftrigger) |OutData|The current auto-focus (AF) trigger. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAFTriggerResultMetadata {#mlresultcode-mlcamerametadatagetcontrolaftriggerresultmetadata}

Gets AF trigger. 

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
| out [ControlAFTrigger](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaftrigger) |OutData|The current auto-focus (AF) trigger. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAWBAvailableModes {#mlresultcode-mlcamerametadatagetcontrolawbavailablemodes}

Gets AWB modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAWBAvailableModes(
    ulong Handle,
    out ControlAWBMode[] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlAWBMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbmode)[] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAWBLockAvailable {#mlresultcode-mlcamerametadatagetcontrolawblockavailable}

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
| out [ControlAWBLock](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawblock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAWBLockRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolawblockrequestmetadata}

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
| out [ControlAWBLock](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawblock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAWBLockResultMetadata {#mlresultcode-mlcamerametadatagetcontrolawblockresultmetadata}

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
| out [ControlAWBLock](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawblock) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAWBModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolawbmoderequestmetadata}

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
| out [ControlAWBMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAWBModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolawbmoderesultmetadata}

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
| out [ControlAWBMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAWBStateResultMetadata {#mlresultcode-mlcamerametadatagetcontrolawbstateresultmetadata}

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
| out [ControlAWBState](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbstate) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAvailableEffectModes {#mlresultcode-mlcamerametadatagetcontrolavailableeffectmodes}

Gets Effect modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAvailableEffectModes(
    ulong Handle,
    out ControlEffectMode[] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlEffectMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controleffectmode)[] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAvailableModes {#mlresultcode-mlcamerametadatagetcontrolavailablemodes}

Gets Available Modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAvailableModes(
    ulong Handle,
    out ControlMode[] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlmode)[] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlAvailableSceneModes {#mlresultcode-mlcamerametadatagetcontrolavailablescenemodes}

Gets Scene modes. 

```csharp
public MLResult.Code MLCameraMetadataGetControlAvailableSceneModes(
    ulong Handle,
    out ControlSceneMode[] OutData,
    out int OutCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out [ControlSceneMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlscenemode)[] |OutData||
| out int |OutCount||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlEffectModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontroleffectmoderequestmetadata}

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
| out [ControlEffectMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controleffectmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlEffectModeResultMetadata {#mlresultcode-mlcamerametadatagetcontroleffectmoderesultmetadata}

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
| out [ControlEffectMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controleffectmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolexposureuppertimelimitrequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata {#mlresultcode-mlcamerametadatagetcontrolexposureuppertimelimitresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlForceApplyModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolforceapplymoderequestmetadata}

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
| out [ControlForceApplyMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlforceapplymode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlForceApplyModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolforceapplymoderesultmetadata}

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
| out [ControlForceApplyMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlforceapplymode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolmoderequestmetadata}

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
| out [ControlMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolmoderesultmetadata}

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
| out [ControlMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlmode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlSceneModeRequestMetadata {#mlresultcode-mlcamerametadatagetcontrolscenemoderequestmetadata}

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
| out [ControlSceneMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlscenemode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetControlSceneModeResultMetadata {#mlresultcode-mlcamerametadatagetcontrolscenemoderesultmetadata}

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
| out [ControlSceneMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlscenemode) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata {#mlresultcode-mlcamerametadatagetjpeggpscoordinatesrequestmetadata}

Gets jpeg GPS coordinates. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata(
    ulong Handle,
    double[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| double[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetJpegGPSCoordinatesResultMetadata {#mlresultcode-mlcamerametadatagetjpeggpscoordinatesresultmetadata}

Gets jpeg GPS coordinates. 

```csharp
public MLResult.Code MLCameraMetadataGetJpegGPSCoordinatesResultMetadata(
    ulong Handle,
    out double[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| out double[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetJpegGPSTimestampRequestMetadata {#mlresultcode-mlcamerametadatagetjpeggpstimestamprequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetJpegGPSTimestampResultMetadata {#mlresultcode-mlcamerametadatagetjpeggpstimestampresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetJpegQualityRequestMetadata {#mlresultcode-mlcamerametadatagetjpegqualityrequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetJpegQualityResultMetadata {#mlresultcode-mlcamerametadatagetjpegqualityresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetJpegThumbnailSizeRequestMetadata {#mlresultcode-mlcamerametadatagetjpegthumbnailsizerequestmetadata}

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
| out [JpegThumbnailSize](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-jpegthumbnailsize) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetJpegThumbnailSizeResultMetadata {#mlresultcode-mlcamerametadatagetjpegthumbnailsizeresultmetadata}

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
| out [JpegThumbnailSize](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-jpegthumbnailsize) |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetLensFocusDistanceRequestMetadata {#mlresultcode-mlcamerametadatagetlensfocusdistancerequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetLensFocusDistanceResultMetadata {#mlresultcode-mlcamerametadatagetlensfocusdistanceresultmetadata}

Gets Lens focus distance. 

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetLensInfoHyperfocalDistance {#mlresultcode-mlcamerametadatagetlensinfohyperfocaldistance}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetLensInfoMinimumFocusDistance {#mlresultcode-mlcamerametadatagetlensinfominimumfocusdistance}

Gets lens minimum focus distance. 

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement {#mlresultcode-mlcamerametadatagetlensinfominimumfocusdistanceincrement}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetLensStateResultMetadata {#mlresultcode-mlcamerametadatagetlensstateresultmetadata}

Gets Lens state. 

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
| out [LensState](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-lensstate) |OutData|Current Lens status. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorExposureTimeRequestMetadata {#mlresultcode-mlcamerametadatagetsensorexposuretimerequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorExposureTimeResultMetadata {#mlresultcode-mlcamerametadatagetsensorexposuretimeresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorFrameDurationResultMetadata {#mlresultcode-mlcamerametadatagetsensorframedurationresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorInfoActiveArraySize {#mlresultcode-mlcamerametadatagetsensorinfoactivearraysize}

Gets sensor info active array sizes. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorInfoActiveArraySize(
    ulong Handle,
    int[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| int[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorInfoSensitivityRange {#mlresultcode-mlcamerametadatagetsensorinfosensitivityrange}

Gets sensor info sensitivity range. 

```csharp
public MLResult.Code MLCameraMetadataGetSensorInfoSensitivityRange(
    ulong Handle,
    int[] OutData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| int[] |OutData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorOrientation {#mlresultcode-mlcamerametadatagetsensororientation}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorSensitivityRequestMetadata {#mlresultcode-mlcamerametadatagetsensorsensitivityrequestmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorSensitivityResultMetadata {#mlresultcode-mlcamerametadatagetsensorsensitivityresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataGetSensorTimestampResultMetadata {#mlresultcode-mlcamerametadatagetsensortimestampresultmetadata}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetAFDistanceRange {#mlresultcode-mlcamerametadatasetafdistancerange}

Sets AF distance range. Both min and max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance. 

```csharp
public MLResult.Code MLCameraMetadataSetAFDistanceRange(
    ulong Handle,
    in float[] InData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| in float[] |InData||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetColorCorrectionAberrationMode {#mlresultcode-mlcamerametadatasetcolorcorrectionaberrationmode}

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
| ref [ColorCorrectionAberrationMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionaberrationmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetColorCorrectionGains {#mlresultcode-mlcamerametadatasetcolorcorrectiongains}

Sets color correction gains. 

```csharp
public MLResult.Code MLCameraMetadataSetColorCorrectionGains(
    ulong Handle,
    float[] Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| float[] |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetColorCorrectionMode {#mlresultcode-mlcamerametadatasetcolorcorrectionmode}

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
| ref [ColorCorrectionMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-colorcorrectionmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetColorCorrectionTransform {#mlresultcode-mlcamerametadatasetcolorcorrectiontransform}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAEAntibandingMode {#mlresultcode-mlcamerametadatasetcontrolaeantibandingmode}

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
| ref [ControlAEAntibandingMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaeantibandingmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAEExposureCompensation {#mlresultcode-mlcamerametadatasetcontrolaeexposurecompensation}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAELock {#mlresultcode-mlcamerametadatasetcontrolaelock}

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
| ref [ControlAELock](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaelock) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAEMode {#mlresultcode-mlcamerametadatasetcontrolaemode}

Sets AE mode. MLCameraMetadataControlAEMode&#95;Off is not supported if camera is configured for 15FPS. 

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
| ref [ControlAEMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaemode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAERegions {#mlresultcode-mlcamerametadatasetcontrolaeregions}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAFMode {#mlresultcode-mlcamerametadatasetcontrolafmode}

Sets AF mode. 

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
| in [ControlAFMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlafmode) |InData|The current auto-focus (AF) mode controls. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAFTrigger {#mlresultcode-mlcamerametadatasetcontrolaftrigger}

Sets AF trigger. 

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
| in [ControlAFTrigger](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlaftrigger) |InData|The current auto-focus (AF) trigger. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAWBLock {#mlresultcode-mlcamerametadatasetcontrolawblock}

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
| ref [ControlAWBLock](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawblock) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlAWBMode {#mlresultcode-mlcamerametadatasetcontrolawbmode}

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
| ref [ControlAWBMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlawbmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlEffectMode {#mlresultcode-mlcamerametadatasetcontroleffectmode}

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
| ref [ControlEffectMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controleffectmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlExposureUpperTimeLimit {#mlresultcode-mlcamerametadatasetcontrolexposureuppertimelimit}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlForceApplyMode {#mlresultcode-mlcamerametadatasetcontrolforceapplymode}

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
| [ControlForceApplyMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlforceapplymode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlMode {#mlresultcode-mlcamerametadatasetcontrolmode}

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
| ref [ControlMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlmode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetControlSceneMode {#mlresultcode-mlcamerametadatasetcontrolscenemode}

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
| ref [ControlSceneMode](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-controlscenemode) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetJpegGPSCoordinates {#mlresultcode-mlcamerametadatasetjpeggpscoordinates}

Sets jpeg GPS coordinates. 

```csharp
public MLResult.Code MLCameraMetadataSetJpegGPSCoordinates(
    ulong Handle,
    double[] Data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| double[] |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetJpegGPSTimestamp {#mlresultcode-mlcamerametadatasetjpeggpstimestamp}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetJpegQuality {#mlresultcode-mlcamerametadatasetjpegquality}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetJpegThumbnailSize {#mlresultcode-mlcamerametadatasetjpegthumbnailsize}

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
| ref [JpegThumbnailSize](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.md#enums-jpegthumbnailsize) |Data||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetLensFocusDistance {#mlresultcode-mlcamerametadatasetlensfocusdistance}

Sets Lens focus distance. 

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetSensorExposureTime {#mlresultcode-mlcamerametadatasetsensorexposuretime}

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

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLCameraMetadataSetSensorSensitivity {#mlresultcode-mlcamerametadatasetsensorsensitivity}

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


