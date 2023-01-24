---
title: ml_camera_metadata_v2.h

---

# ml_camera_metadata_v2.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) | **[MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#struct-mlcamerametadatarational)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionAvailableAberrationModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionavailableaberrationmodes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) ** out_data, uint32_t * out_count)<br></br>Gets color correction aberration modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEAvailableModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeavailablemodes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) ** out_data, uint32_t * out_count)<br></br>Gets auto-exposure modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEAvailableAntibandingModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeavailableantibandingmodes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) ** out_data, uint32_t * out_count)<br></br>Gets anti-banding modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAECompensationRange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaecompensationrange)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t out_data[2])<br></br>Gets auto-exposure compensation range.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAECompensationStep](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaecompensationstep)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) * out_data)<br></br>Gets AE compensation step.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAELockAvailable](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockavailable)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * out_data)<br></br>Gets AE lock.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEMaxRegions](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemaxregions)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t * out_data)<br></br>Gets AE Max Regions.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAvailableModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailablemodes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) ** out_data, uint32_t * out_count)<br></br>Gets Available Modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBAvailableModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbavailablemodes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) ** out_data, uint32_t * out_count)<br></br>Gets AWB modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFAvailableModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafavailablemodes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) ** out_data, uint32_t * out_count)<br></br>Gets AF modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFMaxRegions](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmaxregions)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t * out_data)<br></br>Gets max number of AF regions supported.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAvailableSceneModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailablescenemodes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) ** out_data, uint32_t * out_count)<br></br>Gets Scene modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAvailableEffectModes](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailableeffectmodes)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) ** out_data, uint32_t * out_count)<br></br>Gets Effect modes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBLockAvailable](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockavailable)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * out_data)<br></br>Gets AWB lock.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorInfoActiveArraySize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorinfoactivearraysize)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t out_data[4])<br></br>Gets sensor info active array sizes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorInfoSensitivityRange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorinfosensitivityrange)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t out_data[2])<br></br>Gets sensor info sensitivity range (Analog Gain).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetPostRawSensitivityBoostRange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostrange)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t out_data[2])<br></br>Gets post raw sensitivity boost range (Digital Gain).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensInfoHyperfocalDistance](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfohyperfocaldistance)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, float * out_data)<br></br>Gets lens hyperfocal distance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensInfoMinimumFocusDistance](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfominimumfocusdistance)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, float * out_data)<br></br>Gets lens minimum focus distance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfominimumfocusdistanceincrement)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, float * out_data)<br></br>Gets lens minimum focus distance increment. The lens position can be set in multiples of distance increments between hyperfocal distance and minimum focus distance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorOrientation](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensororientation)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t * out_data)<br></br>Gets sensor orientation degree.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionmoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataColorCorrectionMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * out_data)<br></br>Gets color correction mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionTransformRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiontransformrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) out_data[3][3])<br></br>Gets color correction transform.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionGainsRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiongainsrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, float out_data[4])<br></br>Gets color correction gains.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * out_data)<br></br>Gets color correction aberration.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEAntibandingModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeantibandingmoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * out_data)<br></br>Gets AE antibanding mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEExposureCompensationRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeexposurecompensationrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t * out_data)<br></br>Gets AE exposure compensation.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAELockRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * out_data)<br></br>Gets AE lock.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * out_data)<br></br>Gets AE mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAERegionsRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeregionsrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t out_data[3][5], uint32_t * out_count)<br></br>Gets auto-exposure regions.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBLockRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * out_data)<br></br>Gets AWB lock.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbmoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * out_data)<br></br>Gets AWB mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * out_data)<br></br>Gets AF mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFTriggerRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaftriggerrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAFTrigger](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * out_data)<br></br>Gets AF trigger.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFRegionsRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafregionsrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t out_data[3][5], uint32_t * out_count)<br></br>Gets auto-focus regions.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetAFDistanceRangeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetafdistancerangerequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, float out_data[2])<br></br>Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensFocusDistanceRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensfocusdistancerequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, float * out_data)<br></br>Gets Lens focus distance in diopters. The distance is between minimum focus distance and hyperfocal distance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolmoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * out_data)<br></br>Gets mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlSceneModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolscenemoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * out_data)<br></br>Gets Scene mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorExposureTimeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorexposuretimerequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int64_t * out_data)<br></br>Gets sensor exposure time.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorSensitivityRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorsensitivityrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t * out_data)<br></br>Gets sensor sensitivity.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetPostRawSensitivityBoostRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t * out_data)<br></br>Gets post raw sensitivity boost.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlEffectModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontroleffectmoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * out_data)<br></br>Effect mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int64_t * out_data)<br></br>Gets exposure time upper limit.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpscoordinatesrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, double out_data[3])<br></br>Gets JPEG GPS coordinates.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegGPSTimestampRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpstimestamprequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int64_t * out_data)<br></br>Gets JPEG timestamp.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegThumbnailSizeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegthumbnailsizerequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataJpegThumbnailSize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * out_data)<br></br>Gets JPEG thumbnail size.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegQualityRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegqualityrequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, uint8_t * out_data)<br></br>Gets JPEG quality.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlForceApplyModeRequestMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolforceapplymoderequestmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlForceApplyMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * out_data)<br></br>Gets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetColorCorrectionMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectionmode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataColorCorrectionMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * data)<br></br>Sets color correction mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetColorCorrectionTransform](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectiontransform)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) data[3][3])<br></br>Sets color correction transform from RGB color space to output linear sRGB.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetColorCorrectionGains](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectiongains)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const float data[4])<br></br>Sets color correction gains. The gains in the request metadata are the gains applied by the camera device.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectionaberrationmode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * data)<br></br>Sets color correction chromatic aberration, minimizing chromatic artifacts that may occur.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeantibandingmode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * data)<br></br>Sets AE antiband mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAEExposureCompensation](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeexposurecompensation)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t * data)<br></br>Sets auto-exposure compensation.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaelock)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * data)<br></br>Sets auto-exposure lock.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaemode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * data)<br></br>Sets auto-exposure mode. MLCameraMetadataControlAEMode_Off is not supported if camera is configured for 15FPS.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAERegions](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeregions)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t data[3][5], const uint32_t count)<br></br>Sets auto-exposure regions.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolawblock)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * data)<br></br>Sets automatic white balance lock.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolawbmode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * data)<br></br>Sets AWB mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolafmode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * data)<br></br>Sets AF mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAFTrigger](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaftrigger)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAFTrigger](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * data)<br></br>Sets AF trigger.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAFRegions](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolafregions)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t data[3][5], const uint32_t count)<br></br>Sets auto-focus regions.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetAFDistanceRange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetafdistancerange)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const float data[2])<br></br>Sets AF distance range. Both min and max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetLensFocusDistance](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetlensfocusdistance)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const float * data)<br></br>Sets Lens focus distance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolmode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * data)<br></br>Sets mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolscenemode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * data)<br></br>Sets Scene mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetSensorExposureTime](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetsensorexposuretime)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int64_t * data)<br></br>Sets sensor exposure time.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetSensorSensitivity](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetsensorsensitivity)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t * data)<br></br>Sets sensor sensitivity.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetPostRawSensitivityBoost](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetpostrawsensitivityboost)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t * data)<br></br>Sets post raw sensitivity boost.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontroleffectmode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * data)<br></br>Sets Effect mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlExposureUpperTimeLimit](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolexposureuppertimelimit)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int64_t * data)<br></br>Sets exposure time upper limit.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetJpegGPSCoordinates](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpeggpscoordinates)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const double data[3])<br></br>Sets JPEG GPS coordinates.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetJpegGPSTimestamp](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpeggpstimestamp)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int64_t * data)<br></br>Sets JPEG timestamp.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetJpegThumbnailSize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpegthumbnailsize)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataJpegThumbnailSize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * data)<br></br>Sets JPEG thumbnail size.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetJpegQuality](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpegquality)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const uint8_t * data)<br></br>Sets JPEG quality.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlForceApplyMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolforceapplymode)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlForceApplyMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * data)<br></br>Sets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionmoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataColorCorrectionMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * out_data)<br></br>Gets color correction.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionTransformResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiontransformresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) out_data[3][3])<br></br>Gets color correction transform from RGB color space to output linear sRGB.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * out_data)<br></br>Gets color correction aberration.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionGainsResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiongainsresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, float out_data[4])<br></br>Gets color correction gains. The gains in the result metadata are the gains applied by the camera device to the current frame.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEAntibandingModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeantibandingmoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * out_data)<br></br>Gets AE antibanding mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEExposureCompensationResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeexposurecompensationresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t * out_data)<br></br>Gets AE exposure compensation.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAELockResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * out_data)<br></br>Gets auto-exposure lock.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * out_data)<br></br>Gets AE mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAERegionsResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeregionsresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t out_data[3][5], uint32_t * out_count)<br></br>Gets auto-exposure regions.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAETargetFPSRangeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaetargetfpsrangeresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t out_data[2])<br></br>Gets auto-exposure target FPS range.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEStateResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaestateresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAEState](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaestate) * out_data)<br></br>Gets AE state.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBLockResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * out_data)<br></br>Gets AWB lock.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBStateResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbstateresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAWBState](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbstate) * out_data)<br></br>Gets AWB state.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbmoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * out_data)<br></br>Gets AWB mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * out_data)<br></br>Gets AF mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFTriggerResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaftriggerresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAFTrigger](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * out_data)<br></br>Gets AF trigger.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFRegionsResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafregionsresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t out_data[3][5], uint32_t * out_count)<br></br>Gets auto-focus regions.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetAFDistanceRangeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetafdistancerangeresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, float out_data[2])<br></br>Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using API MLCameraMetadataGetLensInfoHyperfocalDistance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFStateResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafstateresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAFState](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafstate) * out_data)<br></br>Gets AF state.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFSceneChangeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafscenechangeresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAFSceneChange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafscenechange) * out_data)<br></br>Gets AF scene change detection status.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensFocusDistanceResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensfocusdistanceresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, float * out_data)<br></br>Gets Lens focus distance.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensStateResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensstateresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataLensState](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatalensstate) * out_data)<br></br>Get Lens state.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolmoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * out_data)<br></br>Gets mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlSceneModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolscenemoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * out_data)<br></br>Gets Scene mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorExposureTimeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorexposuretimeresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets sensor exposure time.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorSensitivityResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorsensitivityresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t * out_data)<br></br>Gets sensor sensitivity.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetPostRawSensitivityBoostResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t * out_data)<br></br>Gets post raw sensitivity boost.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorTimestampResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensortimestampresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets frame captured timestamp.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorFrameDurationResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorframedurationresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets sensor frame duration.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlEffectModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontroleffectmoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * out_data)<br></br>Gets Effect mode.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets exposure time upper limit.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegGPSCoordinatesResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpscoordinatesresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, double out_data[3])<br></br>Gets JPEG GPS coordinates.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegGPSTimestampResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpstimestampresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets JPEG timestamp.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegThumbnailSizeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegthumbnailsizeresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataJpegThumbnailSize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * out_data)<br></br>Gets JPEG thumbnail size.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlForceApplyModeResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolforceapplymoderesultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlForceApplyMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * out_data)<br></br>Gets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegQualityResultMetadata](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegqualityresultmetadata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, uint8_t * out_data)<br></br>Gets JPEG quality.  |


## Types Documentation

### MLCameraMetadataRational {#struct-mlcamerametadatarational}

```cpp
typedef struct MLCameraMetadataRational  MLCameraMetadataRational;
```


Rational data type. 



[More Info](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md)



-----------


## Functions Documentation

### MLCameraMetadataGetColorCorrectionAvailableAberrationModes {#mlresult-mlcamerametadatagetcolorcorrectionavailableaberrationmodes}

```cpp
MLResult MLCameraMetadataGetColorCorrectionAvailableAberrationModes(
    MLHandle characteristics_handle,
    MLCameraMetadataColorCorrectionAberrationMode ** out_data,
    uint32_t * out_count
)
```

Gets color correction aberration modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) ** |out_data|Array of aberration modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction aberration modes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction aberration modes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction aberration modes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEAvailableModes {#mlresult-mlcamerametadatagetcontrolaeavailablemodes}

```cpp
MLResult MLCameraMetadataGetControlAEAvailableModes(
    MLHandle characteristics_handle,
    MLCameraMetadataControlAEMode ** out_data,
    uint32_t * out_count
)
```

Gets auto-exposure modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) ** |out_data|Array of auto-exposure modes. The Library allocates and maintains the lifetime of the output data.|
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE modes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE modes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE modes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEAvailableAntibandingModes {#mlresult-mlcamerametadatagetcontrolaeavailableantibandingmodes}

```cpp
MLResult MLCameraMetadataGetControlAEAvailableAntibandingModes(
    MLHandle characteristics_handle,
    MLCameraMetadataControlAEAntibandingMode ** out_data,
    uint32_t * out_count
)
```

Gets anti-banding modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) ** |out_data|Array of anti-banding modes. The Library allocates and maintains the lifetime of the output data.|
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AntiBanding modes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AntiBanding modes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AntiBanding modes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAECompensationRange {#mlresult-mlcamerametadatagetcontrolaecompensationrange}

```cpp
MLResult MLCameraMetadataGetControlAECompensationRange(
    MLHandle characteristics_handle,
    int32_t out_data[2]
)
```

Gets auto-exposure compensation range. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t |out_data|Array of min (1st) and max (2nd) of auto-exposure compensation. The adjustment is measured as a count of steps.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE compensation range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE compensation range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE compensation range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAECompensationStep {#mlresult-mlcamerametadatagetcontrolaecompensationstep}

```cpp
MLResult MLCameraMetadataGetControlAECompensationStep(
    MLHandle characteristics_handle,
    MLCameraMetadataRational * out_data
)
```

Gets AE compensation step. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) * |out_data|AE compensation step.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE compensation step due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE compensation step. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE compensation step due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAELockAvailable {#mlresult-mlcamerametadatagetcontrolaelockavailable}

```cpp
MLResult MLCameraMetadataGetControlAELockAvailable(
    MLHandle characteristics_handle,
    MLCameraMetadataControlAELock * out_data
)
```

Gets AE lock. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * |out_data|AE lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE lock due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE lock. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE lock due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEMaxRegions {#mlresult-mlcamerametadatagetcontrolaemaxregions}

```cpp
MLResult MLCameraMetadataGetControlAEMaxRegions(
    MLHandle characteristics_handle,
    int32_t * out_data
)
```

Gets AE Max Regions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t * |out_data|Num AE Regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE Max Regions due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE Max Regions. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE Max Regions due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAvailableModes {#mlresult-mlcamerametadatagetcontrolavailablemodes}

```cpp
MLResult MLCameraMetadataGetControlAvailableModes(
    MLHandle characteristics_handle,
    MLCameraMetadataControlMode ** out_data,
    uint32_t * out_count
)
```

Gets Available Modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) ** |out_data|Array of modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Avaialble Modes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Available Modes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Available Modes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAWBAvailableModes {#mlresult-mlcamerametadatagetcontrolawbavailablemodes}

```cpp
MLResult MLCameraMetadataGetControlAWBAvailableModes(
    MLHandle characteristics_handle,
    MLCameraMetadataControlAWBMode ** out_data,
    uint32_t * out_count
)
```

Gets AWB modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) ** |out_data|Array of AWB modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB modes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB modes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB modes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFAvailableModes {#mlresult-mlcamerametadatagetcontrolafavailablemodes}

```cpp
MLResult MLCameraMetadataGetControlAFAvailableModes(
    MLHandle characteristics_handle,
    MLCameraMetadataControlAFMode ** out_data,
    uint32_t * out_count
)
```

Gets AF modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) ** |out_data|Array of AF modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF modes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF modes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF modes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFMaxRegions {#mlresult-mlcamerametadatagetcontrolafmaxregions}

```cpp
MLResult MLCameraMetadataGetControlAFMaxRegions(
    MLHandle characteristics_handle,
    int32_t * out_data
)
```

Gets max number of AF regions supported. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t * |out_data|Num AF Regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF Max Regions due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF Max Regions. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF Max Regions due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAvailableSceneModes {#mlresult-mlcamerametadatagetcontrolavailablescenemodes}

```cpp
MLResult MLCameraMetadataGetControlAvailableSceneModes(
    MLHandle characteristics_handle,
    MLCameraMetadataControlSceneMode ** out_data,
    uint32_t * out_count
)
```

Gets Scene modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) ** |out_data|Array of Scene modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Scene modes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Scene modes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Scene modes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAvailableEffectModes {#mlresult-mlcamerametadatagetcontrolavailableeffectmodes}

```cpp
MLResult MLCameraMetadataGetControlAvailableEffectModes(
    MLHandle characteristics_handle,
    MLCameraMetadataControlEffectMode ** out_data,
    uint32_t * out_count
)
```

Gets Effect modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) ** |out_data|Array of Effect modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Effect modes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Effect modes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Effect modes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAWBLockAvailable {#mlresult-mlcamerametadatagetcontrolawblockavailable}

```cpp
MLResult MLCameraMetadataGetControlAWBLockAvailable(
    MLHandle characteristics_handle,
    MLCameraMetadataControlAWBLock * out_data
)
```

Gets AWB lock. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * |out_data|AWB lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB lock due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB lock. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB lock due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorInfoActiveArraySize {#mlresult-mlcamerametadatagetsensorinfoactivearraysize}

```cpp
MLResult MLCameraMetadataGetSensorInfoActiveArraySize(
    MLHandle characteristics_handle,
    int32_t out_data[4]
)
```

Gets sensor info active array sizes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t |out_data|Active array size [left, top, right, bottom].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor info active array sizes due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor info active array sizes. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor info active array sizes due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorInfoSensitivityRange {#mlresult-mlcamerametadatagetsensorinfosensitivityrange}

```cpp
MLResult MLCameraMetadataGetSensorInfoSensitivityRange(
    MLHandle characteristics_handle,
    int32_t out_data[2]
)
```

Gets sensor info sensitivity range (Analog Gain). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t |out_data|Sensor info sensitivity range[min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor info sensitivity range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor info sensitivity range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor info sensitivity range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetPostRawSensitivityBoostRange {#mlresult-mlcamerametadatagetpostrawsensitivityboostrange}

```cpp
MLResult MLCameraMetadataGetPostRawSensitivityBoostRange(
    MLHandle characteristics_handle,
    int32_t out_data[2]
)
```

Gets post raw sensitivity boost range (Digital Gain). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t |out_data|Post raw sensitivity boost range[min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain post raw sensitivity boost range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained post raw sensitivity boost range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain post raw sensitivity boost range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetLensInfoHyperfocalDistance {#mlresult-mlcamerametadatagetlensinfohyperfocaldistance}

```cpp
MLResult MLCameraMetadataGetLensInfoHyperfocalDistance(
    MLHandle characteristics_handle,
    float * out_data
)
```

Gets lens hyperfocal distance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| float * |out_data|Lens hyperfocal distance in diopters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain hyperfocal distance due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained hyperfocal distance. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain hyperfocal distance due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetLensInfoMinimumFocusDistance {#mlresult-mlcamerametadatagetlensinfominimumfocusdistance}

```cpp
MLResult MLCameraMetadataGetLensInfoMinimumFocusDistance(
    MLHandle characteristics_handle,
    float * out_data
)
```

Gets lens minimum focus distance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| float * |out_data|Minimum focus distance in diopters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain minimum focus distance due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained minimum focus distance. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain minimum focus distance due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement {#mlresult-mlcamerametadatagetlensinfominimumfocusdistanceincrement}

```cpp
MLResult MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement(
    MLHandle characteristics_handle,
    float * out_data
)
```

Gets lens minimum focus distance increment. The lens position can be set in multiples of distance increments between hyperfocal distance and minimum focus distance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| float * |out_data|Minimum focus distance increment in diopters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain minimum focus distance increment due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained minimum focus distance increment. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain minimum focus distance increment due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorOrientation {#mlresult-mlcamerametadatagetsensororientation}

```cpp
MLResult MLCameraMetadataGetSensorOrientation(
    MLHandle characteristics_handle,
    int32_t * out_data
)
```

Gets sensor orientation degree. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t * |out_data|Sensor orientation degree.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor orientation degree due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor orientation degree. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor orientation degree due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetColorCorrectionModeRequestMetadata {#mlresult-mlcamerametadatagetcolorcorrectionmoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetColorCorrectionModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataColorCorrectionMode * out_data
)
```

Gets color correction mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataColorCorrectionMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * |out_data|Color correction mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetColorCorrectionTransformRequestMetadata {#mlresult-mlcamerametadatagetcolorcorrectiontransformrequestmetadata}

```cpp
MLResult MLCameraMetadataGetColorCorrectionTransformRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataRational out_data[3][3]
)
```

Gets color correction transform. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) |out_data|3x3 color correction transform.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction transform due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction transform. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction transform due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetColorCorrectionGainsRequestMetadata {#mlresult-mlcamerametadatagetcolorcorrectiongainsrequestmetadata}

```cpp
MLResult MLCameraMetadataGetColorCorrectionGainsRequestMetadata(
    MLHandle request_handle,
    float out_data[4]
)
```

Gets color correction gains. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| float |out_data|Color correction gains.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction gains due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction gains. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction gains due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata {#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataColorCorrectionAberrationMode * out_data
)
```

Gets color correction aberration. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * |out_data|Color correction aberration.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction aberration due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction aberration. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction aberration due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEAntibandingModeRequestMetadata {#mlresult-mlcamerametadatagetcontrolaeantibandingmoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAEAntibandingModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlAEAntibandingMode * out_data
)
```

Gets AE antibanding mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * |out_data|AE antibanding mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE antibanding mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE antibanding mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE antibanding mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEExposureCompensationRequestMetadata {#mlresult-mlcamerametadatagetcontrolaeexposurecompensationrequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAEExposureCompensationRequestMetadata(
    MLHandle request_handle,
    int32_t * out_data
)
```

Gets AE exposure compensation. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t * |out_data|Exposure compensation value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE exposure compensation due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE exposure compensation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE exposure compensation due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAELockRequestMetadata {#mlresult-mlcamerametadatagetcontrolaelockrequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAELockRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlAELock * out_data
)
```

Gets AE lock. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * |out_data|AE Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE lock due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE lock. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE lock due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEModeRequestMetadata {#mlresult-mlcamerametadatagetcontrolaemoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAEModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlAEMode * out_data
)
```

Gets AE mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * |out_data|AE mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAERegionsRequestMetadata {#mlresult-mlcamerametadatagetcontrolaeregionsrequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAERegionsRequestMetadata(
    MLHandle request_handle,
    int32_t out_data[3][5],
    uint32_t * out_count
)
```

Gets auto-exposure regions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t |out_data|Auto-exposure regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). |
| uint32_t * |out_count|Number of auto-exposure regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE regions due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE regions. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE regions due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAWBLockRequestMetadata {#mlresult-mlcamerametadatagetcontrolawblockrequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAWBLockRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlAWBLock * out_data
)
```

Gets AWB lock. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * |out_data|AWB Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB lock due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB lock. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB lock due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAWBModeRequestMetadata {#mlresult-mlcamerametadatagetcontrolawbmoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAWBModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlAWBMode * out_data
)
```

Gets AWB mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * |out_data|AWB mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFModeRequestMetadata {#mlresult-mlcamerametadatagetcontrolafmoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAFModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlAFMode * out_data
)
```

Gets AF mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * |out_data|AF mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFTriggerRequestMetadata {#mlresult-mlcamerametadatagetcontrolaftriggerrequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAFTriggerRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlAFTrigger * out_data
)
```

Gets AF trigger. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAFTrigger](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * |out_data|AF trigger.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF trigger due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF trigger. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF trigger due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFRegionsRequestMetadata {#mlresult-mlcamerametadatagetcontrolafregionsrequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlAFRegionsRequestMetadata(
    MLHandle request_handle,
    int32_t out_data[3][5],
    uint32_t * out_count
)
```

Gets auto-focus regions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t |out_data|Auto-focus regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). |
| uint32_t * |out_count|Number of auto-focus regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF regions due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF regions. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF regions due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetAFDistanceRangeRequestMetadata {#mlresult-mlcamerametadatagetafdistancerangerequestmetadata}

```cpp
MLResult MLCameraMetadataGetAFDistanceRangeRequestMetadata(
    MLHandle request_handle,
    float out_data[2]
)
```

Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| float |out_data|AF distance range [min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF distance range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF distance range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF distance range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetLensFocusDistanceRequestMetadata {#mlresult-mlcamerametadatagetlensfocusdistancerequestmetadata}

```cpp
MLResult MLCameraMetadataGetLensFocusDistanceRequestMetadata(
    MLHandle request_handle,
    float * out_data
)
```

Gets Lens focus distance in diopters. The distance is between minimum focus distance and hyperfocal distance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| float * |out_data|Lens focus distance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Lens focus distance range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Lens focus distance range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Lens focus distance range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlModeRequestMetadata {#mlresult-mlcamerametadatagetcontrolmoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlMode * out_data
)
```

Gets mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * |out_data|Mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlSceneModeRequestMetadata {#mlresult-mlcamerametadatagetcontrolscenemoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlSceneModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlSceneMode * out_data
)
```

Gets Scene mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * |out_data|Scene mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain scene mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained scene mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain scene mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorExposureTimeRequestMetadata {#mlresult-mlcamerametadatagetsensorexposuretimerequestmetadata}

```cpp
MLResult MLCameraMetadataGetSensorExposureTimeRequestMetadata(
    MLHandle request_handle,
    int64_t * out_data
)
```

Gets sensor exposure time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int64_t * |out_data|Duration each pixel is exposed to light in nanoseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor exposure time due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor exposure time. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor exposure time due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorSensitivityRequestMetadata {#mlresult-mlcamerametadatagetsensorsensitivityrequestmetadata}

```cpp
MLResult MLCameraMetadataGetSensorSensitivityRequestMetadata(
    MLHandle request_handle,
    int32_t * out_data
)
```

Gets sensor sensitivity. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t * |out_data|Sensor sensitivity.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor sensitivity due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor sensitivity. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor sensitivity due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetPostRawSensitivityBoostRequestMetadata {#mlresult-mlcamerametadatagetpostrawsensitivityboostrequestmetadata}

```cpp
MLResult MLCameraMetadataGetPostRawSensitivityBoostRequestMetadata(
    MLHandle request_handle,
    int32_t * out_data
)
```

Gets post raw sensitivity boost. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t * |out_data|Post raw sensitivity boost.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain post raw sensitivity boost due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained post raw sensitivity boost. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain post raw sensitivity boost due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlEffectModeRequestMetadata {#mlresult-mlcamerametadatagetcontroleffectmoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlEffectModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlEffectMode * out_data
)
```

Effect mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * |out_data|Effect mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain effect mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained effect mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain effect mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata {#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitrequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata(
    MLHandle request_handle,
    int64_t * out_data
)
```

Gets exposure time upper limit. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int64_t * |out_data|Exposure time upper limit for auto exposure algorithm.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain exposure time upper limit due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained exposure time upper limit. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain exposure time upperlimit due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata {#mlresult-mlcamerametadatagetjpeggpscoordinatesrequestmetadata}

```cpp
MLResult MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata(
    MLHandle request_handle,
    double out_data[3]
)
```

Gets JPEG GPS coordinates. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| double |out_data|JPEG GPS coordinates – latitude and longitude in degrees, altitude in meters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG GPS coordinates due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG GPS coordinates. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG GPS coordinates due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetJpegGPSTimestampRequestMetadata {#mlresult-mlcamerametadatagetjpeggpstimestamprequestmetadata}

```cpp
MLResult MLCameraMetadataGetJpegGPSTimestampRequestMetadata(
    MLHandle request_handle,
    int64_t * out_data
)
```

Gets JPEG timestamp. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int64_t * |out_data|JPEG timestamp in UNIX Epoch time (UTC in seconds since January 1, 1970).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG timestamp due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG timestamp. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG timestamp due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetJpegThumbnailSizeRequestMetadata {#mlresult-mlcamerametadatagetjpegthumbnailsizerequestmetadata}

```cpp
MLResult MLCameraMetadataGetJpegThumbnailSizeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataJpegThumbnailSize * out_data
)
```

Gets JPEG thumbnail size. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataJpegThumbnailSize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * |out_data|Resolution of embedded JPEG thumbnail.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG thumbnail size due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG thumbnail size. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG thumbnail size due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetJpegQualityRequestMetadata {#mlresult-mlcamerametadatagetjpegqualityrequestmetadata}

```cpp
MLResult MLCameraMetadataGetJpegQualityRequestMetadata(
    MLHandle request_handle,
    uint8_t * out_data
)
```

Gets JPEG quality. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| uint8_t * |out_data|Compression quality of JPEG thumbnail, with 100 being the highest quality, and 1 the lowest.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG quality due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG quality. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG quality due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlForceApplyModeRequestMetadata {#mlresult-mlcamerametadatagetcontrolforceapplymoderequestmetadata}

```cpp
MLResult MLCameraMetadataGetControlForceApplyModeRequestMetadata(
    MLHandle request_handle,
    MLCameraMetadataControlForceApplyMode * out_data
)
```

Gets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlForceApplyMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * |out_data|Force apply mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain force apply mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained force apply mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain force apply mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetColorCorrectionMode {#mlresult-mlcamerametadatasetcolorcorrectionmode}

```cpp
MLResult MLCameraMetadataSetColorCorrectionMode(
    MLHandle request_handle,
    const MLCameraMetadataColorCorrectionMode * data
)
```

Sets color correction mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataColorCorrectionMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * |data|Color correction mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set color correction mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set color correction mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set color correction mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetColorCorrectionTransform {#mlresult-mlcamerametadatasetcolorcorrectiontransform}

```cpp
MLResult MLCameraMetadataSetColorCorrectionTransform(
    MLHandle request_handle,
    const MLCameraMetadataRational data[3][3]
)
```

Sets color correction transform from RGB color space to output linear sRGB. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) |data|Color correction transform (3x3). Set all values to 0/1 to clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set color correction transform due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set color correction transform. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set color correction transform due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetColorCorrectionGains {#mlresult-mlcamerametadatasetcolorcorrectiongains}

```cpp
MLResult MLCameraMetadataSetColorCorrectionGains(
    MLHandle request_handle,
    const float data[4]
)
```

Sets color correction gains. The gains in the request metadata are the gains applied by the camera device. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const float |data|An array of floats for 4 color channel color correction gains. Set all values to 0 to clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set color correction gains due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set color correction gains. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set color correction gains due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetColorCorrectionAberrationMode {#mlresult-mlcamerametadatasetcolorcorrectionaberrationmode}

```cpp
MLResult MLCameraMetadataSetColorCorrectionAberrationMode(
    MLHandle request_handle,
    const MLCameraMetadataColorCorrectionAberrationMode * data
)
```

Sets color correction chromatic aberration, minimizing chromatic artifacts that may occur. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * |data|Color correction aberration.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set color correction aberration due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set color correction aberration. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set color correction aberration due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAEAntibandingMode {#mlresult-mlcamerametadatasetcontrolaeantibandingmode}

```cpp
MLResult MLCameraMetadataSetControlAEAntibandingMode(
    MLHandle request_handle,
    const MLCameraMetadataControlAEAntibandingMode * data
)
```

Sets AE antiband mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * |data|AE antibanding mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE antiband mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE antiband mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE antiband mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAEExposureCompensation {#mlresult-mlcamerametadatasetcontrolaeexposurecompensation}

```cpp
MLResult MLCameraMetadataSetControlAEExposureCompensation(
    MLHandle request_handle,
    const int32_t * data
)
```

Sets auto-exposure compensation. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t * |data|Exposure compensation value as a count of steps. If exposure compensation is set to 0, no exposure compensation will be applied.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE exposure compensation due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE exposure compensation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE exposure compensation due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAELock {#mlresult-mlcamerametadatasetcontrolaelock}

```cpp
MLResult MLCameraMetadataSetControlAELock(
    MLHandle request_handle,
    const MLCameraMetadataControlAELock * data
)
```

Sets auto-exposure lock. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * |data|Auto-exposure Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE lock due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE lock. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE lock due to an unknown error.|
**Required Permissions**:

  * None 


When auto-exposure is locked, the algorithm cannot update its parameters and adjust exposure times and sensitivity.




**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAEMode {#mlresult-mlcamerametadatasetcontrolaemode}

```cpp
MLResult MLCameraMetadataSetControlAEMode(
    MLHandle request_handle,
    const MLCameraMetadataControlAEMode * data
)
```

Sets auto-exposure mode. MLCameraMetadataControlAEMode_Off is not supported if camera is configured for 15FPS. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * |data|Auto-exposure mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE mode due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed to set AE Mode due to conflict between fps setting and AE Mode.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAERegions {#mlresult-mlcamerametadatasetcontrolaeregions}

```cpp
MLResult MLCameraMetadataSetControlAERegions(
    MLHandle request_handle,
    const int32_t data[3][5],
    const uint32_t count
)
```

Sets auto-exposure regions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t |data|Auto-exposure regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight] array with all zeros and count 1 clears the data. Coordinates must be between [(0,0), (width, height)). Max width, height can be obtained using MLCameraMetadataGetSensorInfoActiveArraySize. Weight for a region can be between [0,1000].For a region to be used its weight should be > 0. Weight is used to decide relative priority between multiple regions. |
| const uint32_t |count|Number of auto-exposure regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE regions due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE regions. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE regions due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAWBLock {#mlresult-mlcamerametadatasetcontrolawblock}

```cpp
MLResult MLCameraMetadataSetControlAWBLock(
    MLHandle request_handle,
    const MLCameraMetadataControlAWBLock * data
)
```

Sets automatic white balance lock. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * |data|Automatic White Balance Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE target FPS range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set automatic white balance lock. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set automatic white balance lock due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAWBMode {#mlresult-mlcamerametadatasetcontrolawbmode}

```cpp
MLResult MLCameraMetadataSetControlAWBMode(
    MLHandle request_handle,
    const MLCameraMetadataControlAWBMode * data
)
```

Sets AWB mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * |data|AWB mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AWB mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AWB mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AWB mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAFMode {#mlresult-mlcamerametadatasetcontrolafmode}

```cpp
MLResult MLCameraMetadataSetControlAFMode(
    MLHandle request_handle,
    const MLCameraMetadataControlAFMode * data
)
```

Sets AF mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * |data|AF mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AF mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set AF mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AF mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAFTrigger {#mlresult-mlcamerametadatasetcontrolaftrigger}

```cpp
MLResult MLCameraMetadataSetControlAFTrigger(
    MLHandle request_handle,
    const MLCameraMetadataControlAFTrigger * data
)
```

Sets AF trigger. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAFTrigger](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * |data|AF trigger.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AF trigger due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set AF trigger. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AF trigger due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlAFRegions {#mlresult-mlcamerametadatasetcontrolafregions}

```cpp
MLResult MLCameraMetadataSetControlAFRegions(
    MLHandle request_handle,
    const int32_t data[3][5],
    const uint32_t count
)
```

Sets auto-focus regions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t |data|Auto-focus regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). Max width, height can be obtained using MLCameraMetadataGetSensorInfoActiveArraySize. Weight for a region can be between [0,1000]. For a region to be used its weight should be > 0. All regions with weight > 0 are treated as same priority. |
| const uint32_t |count|Number of auto-focus regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AF regions due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set AF regions. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AF regions due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetAFDistanceRange {#mlresult-mlcamerametadatasetafdistancerange}

```cpp
MLResult MLCameraMetadataSetAFDistanceRange(
    MLHandle request_handle,
    const float data[2]
)
```

Sets AF distance range. Both min and max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const float |data|AF distance range [min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AF distance range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set AF distance range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AF distance range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetLensFocusDistance {#mlresult-mlcamerametadatasetlensfocusdistance}

```cpp
MLResult MLCameraMetadataSetLensFocusDistance(
    MLHandle request_handle,
    const float * data
)
```

Sets Lens focus distance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const float * |data|Lens focus distance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set Lens focus distance due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set Lens focus distance. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set Lens focus distance due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlMode {#mlresult-mlcamerametadatasetcontrolmode}

```cpp
MLResult MLCameraMetadataSetControlMode(
    MLHandle request_handle,
    const MLCameraMetadataControlMode * data
)
```

Sets mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * |data|Mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlSceneMode {#mlresult-mlcamerametadatasetcontrolscenemode}

```cpp
MLResult MLCameraMetadataSetControlSceneMode(
    MLHandle request_handle,
    const MLCameraMetadataControlSceneMode * data
)
```

Sets Scene mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * |data|Scene mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set scene mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set scene mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set scene mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetSensorExposureTime {#mlresult-mlcamerametadatasetsensorexposuretime}

```cpp
MLResult MLCameraMetadataSetSensorExposureTime(
    MLHandle request_handle,
    const int64_t * data
)
```

Sets sensor exposure time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int64_t * |data|Duration each pixel is exposed to light in nanoseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set sensor exposure time due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set sensor exposure time. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set sensor exposure time due to an unknown error.|
**Required Permissions**:

  * None 


Exposure time provided should be less than frame duration(1/framerate). If the sensor can't expose this exact duration, it will shorten the duration exposed to the nearest possible value.




**API Level:**
  * 20




-----------

### MLCameraMetadataSetSensorSensitivity {#mlresult-mlcamerametadatasetsensorsensitivity}

```cpp
MLResult MLCameraMetadataSetSensorSensitivity(
    MLHandle request_handle,
    const int32_t * data
)
```

Sets sensor sensitivity. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t * |data|Sensor sensitivity.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set sensor sensitivity due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set sensor sensitivity. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set sensor sensitivity due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetPostRawSensitivityBoost {#mlresult-mlcamerametadatasetpostrawsensitivityboost}

```cpp
MLResult MLCameraMetadataSetPostRawSensitivityBoost(
    MLHandle request_handle,
    const int32_t * data
)
```

Sets post raw sensitivity boost. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t * |data|Post raw sensitivity boost.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set post raw sensitivity boost due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set post raw sensitivity boost. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set post raw sensitivity boost due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlEffectMode {#mlresult-mlcamerametadatasetcontroleffectmode}

```cpp
MLResult MLCameraMetadataSetControlEffectMode(
    MLHandle request_handle,
    const MLCameraMetadataControlEffectMode * data
)
```

Sets Effect mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * |data|Effect mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set effect mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set effect mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set effect mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlExposureUpperTimeLimit {#mlresult-mlcamerametadatasetcontrolexposureuppertimelimit}

```cpp
MLResult MLCameraMetadataSetControlExposureUpperTimeLimit(
    MLHandle request_handle,
    const int64_t * data
)
```

Sets exposure time upper limit. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int64_t * |data|Exposure time upper limit. Null pointer will clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set exposure time upper limit due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set exposure time upper limit. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set exposure time upperlimit due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetJpegGPSCoordinates {#mlresult-mlcamerametadatasetjpeggpscoordinates}

```cpp
MLResult MLCameraMetadataSetJpegGPSCoordinates(
    MLHandle request_handle,
    const double data[3]
)
```

Sets JPEG GPS coordinates. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const double |data|JPEG GPS coordinates – latitude and longitude in degrees, altitude in meters.Null pointer will clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set JPEG GPS coordinates due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set JPEG GPS coordinates. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set JPEG GPS coordinates due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetJpegGPSTimestamp {#mlresult-mlcamerametadatasetjpeggpstimestamp}

```cpp
MLResult MLCameraMetadataSetJpegGPSTimestamp(
    MLHandle request_handle,
    const int64_t * data
)
```

Sets JPEG timestamp. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int64_t * |data|JPEG timestamp in UNIX Epoch time (UTC in seconds since January 1, 1970). Null pointer will clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set JPEG timestamp due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set JPEG timestamp. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set JPEG timestamp due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetJpegThumbnailSize {#mlresult-mlcamerametadatasetjpegthumbnailsize}

```cpp
MLResult MLCameraMetadataSetJpegThumbnailSize(
    MLHandle request_handle,
    const MLCameraMetadataJpegThumbnailSize * data
)
```

Sets JPEG thumbnail size. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataJpegThumbnailSize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * |data|Resolution of embedded JPEG thumbnail. Null pointer will prevent the inclusion of a thumbnail.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set JPEG thumbnail size due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set JPEG thumbnail size. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set JPEG thumbnail size due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetJpegQuality {#mlresult-mlcamerametadatasetjpegquality}

```cpp
MLResult MLCameraMetadataSetJpegQuality(
    MLHandle request_handle,
    const uint8_t * data
)
```

Sets JPEG quality. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const uint8_t * |data|Compression quality of JPEG thumbnail, with 100 being the highest quality, and 1 the lowest.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set JPEG quality due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set JPEG quality. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set JPEG quality due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataSetControlForceApplyMode {#mlresult-mlcamerametadatasetcontrolforceapplymode}

```cpp
MLResult MLCameraMetadataSetControlForceApplyMode(
    MLHandle request_handle,
    const MLCameraMetadataControlForceApplyMode * data
)
```

Sets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlForceApplyMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * |data|Force apply mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set force apply mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set force apply mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set force apply mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetColorCorrectionModeResultMetadata {#mlresult-mlcamerametadatagetcolorcorrectionmoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetColorCorrectionModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataColorCorrectionMode * out_data
)
```

Gets color correction. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataColorCorrectionMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * |out_data|Color correction mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetColorCorrectionTransformResultMetadata {#mlresult-mlcamerametadatagetcolorcorrectiontransformresultmetadata}

```cpp
MLResult MLCameraMetadataGetColorCorrectionTransformResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataRational out_data[3][3]
)
```

Gets color correction transform from RGB color space to output linear sRGB. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataRational](/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) |out_data|3x3 color correction transform matrix.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction transform due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction transform. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction transform due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata {#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataColorCorrectionAberrationMode * out_data
)
```

Gets color correction aberration. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataColorCorrectionAberrationMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * |out_data|Color correction aberration mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction aberration due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction aberration. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction aberration due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetColorCorrectionGainsResultMetadata {#mlresult-mlcamerametadatagetcolorcorrectiongainsresultmetadata}

```cpp
MLResult MLCameraMetadataGetColorCorrectionGainsResultMetadata(
    MLHandle result_handle,
    float out_data[4]
)
```

Gets color correction gains. The gains in the result metadata are the gains applied by the camera device to the current frame. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| float |out_data|An array of floats for 4 color channel color correction gains.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction gains due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction gains. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction gains due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEAntibandingModeResultMetadata {#mlresult-mlcamerametadatagetcontrolaeantibandingmoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAEAntibandingModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAEAntibandingMode * out_data
)
```

Gets AE antibanding mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAEAntibandingMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * |out_data|AE antibanding mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE antibanding mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE antibanding mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE antibanding mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEExposureCompensationResultMetadata {#mlresult-mlcamerametadatagetcontrolaeexposurecompensationresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAEExposureCompensationResultMetadata(
    MLHandle result_handle,
    int32_t * out_data
)
```

Gets AE exposure compensation. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t * |out_data|AE exposure compensation.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE exposure compensation due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE exposure compensation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE exposure compensation due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAELockResultMetadata {#mlresult-mlcamerametadatagetcontrolaelockresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAELockResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAELock * out_data
)
```

Gets auto-exposure lock. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAELock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * |out_data|AE lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE lock due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE lock. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE lock due to an unknown error.|
**Required Permissions**:

  * None 


When auto-exposure is locked, the algorithm cannot update its parameters and adjust exposure times and sensitivity.




**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEModeResultMetadata {#mlresult-mlcamerametadatagetcontrolaemoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAEModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAEMode * out_data
)
```

Gets AE mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAEMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * |out_data|AE control mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAERegionsResultMetadata {#mlresult-mlcamerametadatagetcontrolaeregionsresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAERegionsResultMetadata(
    MLHandle result_handle,
    int32_t out_data[3][5],
    uint32_t * out_count
)
```

Gets auto-exposure regions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t |out_data|Auto-exposure regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). |
| uint32_t * |out_count|Number of auto-exposure regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE regions due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE regions. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE regions due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAETargetFPSRangeResultMetadata {#mlresult-mlcamerametadatagetcontrolaetargetfpsrangeresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAETargetFPSRangeResultMetadata(
    MLHandle result_handle,
    int32_t out_data[2]
)
```

Gets auto-exposure target FPS range. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t |out_data|Target range over which good exposure can be maintained by adjusting the capture frame rate.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE target FPS range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE target FPS range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE target FPS range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAEStateResultMetadata {#mlresult-mlcamerametadatagetcontrolaestateresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAEStateResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAEState * out_data
)
```

Gets AE state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAEState](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaestate) * |out_data|AE state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE state due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE state due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAWBLockResultMetadata {#mlresult-mlcamerametadatagetcontrolawblockresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAWBLockResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAWBLock * out_data
)
```

Gets AWB lock. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAWBLock](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * |out_data|AWB Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB lock due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB lock. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB lock due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAWBStateResultMetadata {#mlresult-mlcamerametadatagetcontrolawbstateresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAWBStateResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAWBState * out_data
)
```

Gets AWB state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAWBState](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbstate) * |out_data|AWB state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB state due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB state due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAWBModeResultMetadata {#mlresult-mlcamerametadatagetcontrolawbmoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAWBModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAWBMode * out_data
)
```

Gets AWB mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAWBMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * |out_data|AWB mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFModeResultMetadata {#mlresult-mlcamerametadatagetcontrolafmoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAFModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAFMode * out_data
)
```

Gets AF mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAFMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * |out_data|AF mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFTriggerResultMetadata {#mlresult-mlcamerametadatagetcontrolaftriggerresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAFTriggerResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAFTrigger * out_data
)
```

Gets AF trigger. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAFTrigger](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * |out_data|AF trigger.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF trigger due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF trigger. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF trigger due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFRegionsResultMetadata {#mlresult-mlcamerametadatagetcontrolafregionsresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAFRegionsResultMetadata(
    MLHandle result_handle,
    int32_t out_data[3][5],
    uint32_t * out_count
)
```

Gets auto-focus regions. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t |out_data|Auto-focus regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). |
| uint32_t * |out_count|Number of auto-focus regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF regions due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF regions. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF regions due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetAFDistanceRangeResultMetadata {#mlresult-mlcamerametadatagetafdistancerangeresultmetadata}

```cpp
MLResult MLCameraMetadataGetAFDistanceRangeResultMetadata(
    MLHandle result_handle,
    float out_data[2]
)
```

Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using API MLCameraMetadataGetLensInfoHyperfocalDistance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| float |out_data|AF distance range [min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF distance range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF distance range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF distance range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFStateResultMetadata {#mlresult-mlcamerametadatagetcontrolafstateresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAFStateResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAFState * out_data
)
```

Gets AF state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAFState](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafstate) * |out_data|AF state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF state due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF state due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlAFSceneChangeResultMetadata {#mlresult-mlcamerametadatagetcontrolafscenechangeresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlAFSceneChangeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlAFSceneChange * out_data
)
```

Gets AF scene change detection status. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAFSceneChange](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafscenechange) * |out_data|AF scene change detected or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF scene change detection status due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF scene change detection status. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF scene change detection status due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetLensFocusDistanceResultMetadata {#mlresult-mlcamerametadatagetlensfocusdistanceresultmetadata}

```cpp
MLResult MLCameraMetadataGetLensFocusDistanceResultMetadata(
    MLHandle result_handle,
    float * out_data
)
```

Gets Lens focus distance. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| float * |out_data|Lens focus distance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Lens focus distance range due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Lens focus distance range. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Lens focus distance range due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetLensStateResultMetadata {#mlresult-mlcamerametadatagetlensstateresultmetadata}

```cpp
MLResult MLCameraMetadataGetLensStateResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataLensState * out_data
)
```

Get Lens state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataLensState](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatalensstate) * |out_data|Lens state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Lens state due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Lens state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Lens state due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlModeResultMetadata {#mlresult-mlcamerametadatagetcontrolmoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetControlModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlMode * out_data
)
```

Gets mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * |out_data|Obtained mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlSceneModeResultMetadata {#mlresult-mlcamerametadatagetcontrolscenemoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetControlSceneModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlSceneMode * out_data
)
```

Gets Scene mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlSceneMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * |out_data|Scene mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain scene mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained scene mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain scene mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorExposureTimeResultMetadata {#mlresult-mlcamerametadatagetsensorexposuretimeresultmetadata}

```cpp
MLResult MLCameraMetadataGetSensorExposureTimeResultMetadata(
    MLHandle result_handle,
    int64_t * out_data
)
```

Gets sensor exposure time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|Duration each pixel is exposed to light in nanoseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor exposure time due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor exposure time. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor exposure time due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorSensitivityResultMetadata {#mlresult-mlcamerametadatagetsensorsensitivityresultmetadata}

```cpp
MLResult MLCameraMetadataGetSensorSensitivityResultMetadata(
    MLHandle result_handle,
    int32_t * out_data
)
```

Gets sensor sensitivity. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t * |out_data|Sensor sensitivity.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor sensitivity due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor sensitivity. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor sensitivity due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetPostRawSensitivityBoostResultMetadata {#mlresult-mlcamerametadatagetpostrawsensitivityboostresultmetadata}

```cpp
MLResult MLCameraMetadataGetPostRawSensitivityBoostResultMetadata(
    MLHandle result_handle,
    int32_t * out_data
)
```

Gets post raw sensitivity boost. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t * |out_data|Post raw sensitivity boost.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain post raw sensitivity boost due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained post raw sensitivity boost. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain post raw sensitivity boost due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorTimestampResultMetadata {#mlresult-mlcamerametadatagetsensortimestampresultmetadata}

```cpp
MLResult MLCameraMetadataGetSensorTimestampResultMetadata(
    MLHandle result_handle,
    int64_t * out_data
)
```

Gets frame captured timestamp. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|Timestamp in nanoseconds when captured.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain frame captured timestamp due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained frame captured timestamp. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain frame captured timestamp due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetSensorFrameDurationResultMetadata {#mlresult-mlcamerametadatagetsensorframedurationresultmetadata}

```cpp
MLResult MLCameraMetadataGetSensorFrameDurationResultMetadata(
    MLHandle result_handle,
    int64_t * out_data
)
```

Gets sensor frame duration. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|Sensor frame duration.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor frame duration due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor frame duration. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor frame duration due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlEffectModeResultMetadata {#mlresult-mlcamerametadatagetcontroleffectmoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetControlEffectModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlEffectMode * out_data
)
```

Gets Effect mode. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlEffectMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * |out_data|Effect mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain effect mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained effect mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain effect mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata {#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitresultmetadata}

```cpp
MLResult MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata(
    MLHandle result_handle,
    int64_t * out_data
)
```

Gets exposure time upper limit. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|Exposure time upper limit.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain exposure time upper limit due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained exposure time upper limit. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain exposure time upperlimit due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetJpegGPSCoordinatesResultMetadata {#mlresult-mlcamerametadatagetjpeggpscoordinatesresultmetadata}

```cpp
MLResult MLCameraMetadataGetJpegGPSCoordinatesResultMetadata(
    MLHandle result_handle,
    double out_data[3]
)
```

Gets JPEG GPS coordinates. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| double |out_data|JPEG GPS coordinates – latitude and longitude in degrees, altitude in meters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG GPS coordinates due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG GPS coordinates. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG GPS coordinates due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetJpegGPSTimestampResultMetadata {#mlresult-mlcamerametadatagetjpeggpstimestampresultmetadata}

```cpp
MLResult MLCameraMetadataGetJpegGPSTimestampResultMetadata(
    MLHandle result_handle,
    int64_t * out_data
)
```

Gets JPEG timestamp. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|JPEG timestamp in UNIX Epoch time (UTC in seconds since January 1, 1970).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG timestamp due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG timestamp. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG timestamp due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetJpegThumbnailSizeResultMetadata {#mlresult-mlcamerametadatagetjpegthumbnailsizeresultmetadata}

```cpp
MLResult MLCameraMetadataGetJpegThumbnailSizeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataJpegThumbnailSize * out_data
)
```

Gets JPEG thumbnail size. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataJpegThumbnailSize](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * |out_data|Resolution of embedded JPEG thumbnail. When set to 0, thumbnail will not be included.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG thumbnail size due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG thumbnail size. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG thumbnail size due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetControlForceApplyModeResultMetadata {#mlresult-mlcamerametadatagetcontrolforceapplymoderesultmetadata}

```cpp
MLResult MLCameraMetadataGetControlForceApplyModeResultMetadata(
    MLHandle result_handle,
    MLCameraMetadataControlForceApplyMode * out_data
)
```

Gets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlForceApplyMode](/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * |out_data|Force apply mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain force apply mode due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained force apply mode. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain force apply mode due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLCameraMetadataGetJpegQualityResultMetadata {#mlresult-mlcamerametadatagetjpegqualityresultmetadata}

```cpp
MLResult MLCameraMetadataGetJpegQualityResultMetadata(
    MLHandle result_handle,
    uint8_t * out_data
)
```

Gets JPEG quality. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| uint8_t * |out_data|Compression quality of JPEG thumbnail, with 100 being the highest quality, and 1 the lowest.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG quality due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG quality. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG quality due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_camera_metadata_tags_v2.h"

ML_EXTERN_C_BEGIN

typedef struct MLCameraMetadataRational {
  int32_t numerator;
  int32_t denominator;
} MLCameraMetadataRational;

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionAvailableAberrationModes(MLHandle characteristics_handle, MLCameraMetadataColorCorrectionAberrationMode **out_data, uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEAvailableModes(MLHandle characteristics_handle, MLCameraMetadataControlAEMode **out_data, uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEAvailableAntibandingModes(MLHandle characteristics_handle, MLCameraMetadataControlAEAntibandingMode **out_data, uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAECompensationRange(MLHandle characteristics_handle, int32_t out_data[2]);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAECompensationStep(MLHandle characteristics_handle, MLCameraMetadataRational *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAELockAvailable(MLHandle characteristics_handle, MLCameraMetadataControlAELock *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEMaxRegions(MLHandle characteristics_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAvailableModes(MLHandle characteristics_handle, MLCameraMetadataControlMode **out_data, uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAWBAvailableModes(MLHandle characteristics_handle, MLCameraMetadataControlAWBMode **out_data, uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFAvailableModes(MLHandle characteristics_handle, MLCameraMetadataControlAFMode **out_data, uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFMaxRegions(MLHandle characteristics_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAvailableSceneModes(MLHandle characteristics_handle, MLCameraMetadataControlSceneMode **out_data, uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAvailableEffectModes(MLHandle characteristics_handle, MLCameraMetadataControlEffectMode **out_data, uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAWBLockAvailable(MLHandle characteristics_handle, MLCameraMetadataControlAWBLock *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorInfoActiveArraySize(MLHandle characteristics_handle, int32_t out_data[4]);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorInfoSensitivityRange(MLHandle characteristics_handle, int32_t out_data[2]);

ML_API MLResult ML_CALL MLCameraMetadataGetPostRawSensitivityBoostRange(MLHandle characteristics_handle, int32_t out_data[2]);

ML_API MLResult ML_CALL MLCameraMetadataGetLensInfoHyperfocalDistance(MLHandle characteristics_handle, float *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetLensInfoMinimumFocusDistance(MLHandle characteristics_handle, float *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement(MLHandle characteristics_handle, float *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorOrientation(MLHandle characteristics_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionModeRequestMetadata(MLHandle request_handle, MLCameraMetadataColorCorrectionMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionTransformRequestMetadata(MLHandle request_handle, MLCameraMetadataRational out_data[3][3]);

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionGainsRequestMetadata(MLHandle request_handle, float out_data[4]);

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata(MLHandle request_handle, MLCameraMetadataColorCorrectionAberrationMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEAntibandingModeRequestMetadata(MLHandle request_handle, MLCameraMetadataControlAEAntibandingMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEExposureCompensationRequestMetadata(MLHandle request_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAELockRequestMetadata(MLHandle request_handle, MLCameraMetadataControlAELock *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEModeRequestMetadata(MLHandle request_handle, MLCameraMetadataControlAEMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAERegionsRequestMetadata(MLHandle request_handle, int32_t out_data[3][5], uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAWBLockRequestMetadata(MLHandle request_handle, MLCameraMetadataControlAWBLock *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAWBModeRequestMetadata(MLHandle request_handle, MLCameraMetadataControlAWBMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFModeRequestMetadata(MLHandle request_handle, MLCameraMetadataControlAFMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFTriggerRequestMetadata(MLHandle request_handle, MLCameraMetadataControlAFTrigger *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFRegionsRequestMetadata(MLHandle request_handle, int32_t out_data[3][5], uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetAFDistanceRangeRequestMetadata(MLHandle request_handle, float out_data[2]);

ML_API MLResult ML_CALL MLCameraMetadataGetLensFocusDistanceRequestMetadata(MLHandle request_handle, float *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlModeRequestMetadata(MLHandle request_handle, MLCameraMetadataControlMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlSceneModeRequestMetadata(MLHandle request_handle, MLCameraMetadataControlSceneMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorExposureTimeRequestMetadata(MLHandle request_handle, int64_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorSensitivityRequestMetadata(MLHandle request_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetPostRawSensitivityBoostRequestMetadata(MLHandle request_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlEffectModeRequestMetadata(MLHandle request_handle, MLCameraMetadataControlEffectMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata(MLHandle request_handle, int64_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata(MLHandle request_handle, double out_data[3]);

ML_API MLResult ML_CALL MLCameraMetadataGetJpegGPSTimestampRequestMetadata(MLHandle request_handle, int64_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetJpegThumbnailSizeRequestMetadata(MLHandle request_handle, MLCameraMetadataJpegThumbnailSize *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetJpegQualityRequestMetadata(MLHandle request_handle, uint8_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlForceApplyModeRequestMetadata(MLHandle request_handle, MLCameraMetadataControlForceApplyMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataSetColorCorrectionMode(MLHandle request_handle, const MLCameraMetadataColorCorrectionMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetColorCorrectionTransform(MLHandle request_handle, const MLCameraMetadataRational data[3][3]);

ML_API MLResult ML_CALL MLCameraMetadataSetColorCorrectionGains(MLHandle request_handle, const float data[4]);

ML_API MLResult ML_CALL MLCameraMetadataSetColorCorrectionAberrationMode(MLHandle request_handle, const MLCameraMetadataColorCorrectionAberrationMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAEAntibandingMode(MLHandle request_handle, const MLCameraMetadataControlAEAntibandingMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAEExposureCompensation(MLHandle request_handle, const int32_t *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAELock(MLHandle request_handle, const MLCameraMetadataControlAELock *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAEMode(MLHandle request_handle, const MLCameraMetadataControlAEMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAERegions(MLHandle request_handle, const int32_t data[3][5], const uint32_t count);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAWBLock(MLHandle request_handle, const MLCameraMetadataControlAWBLock *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAWBMode(MLHandle request_handle, const MLCameraMetadataControlAWBMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAFMode(MLHandle request_handle, const MLCameraMetadataControlAFMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAFTrigger(MLHandle request_handle, const MLCameraMetadataControlAFTrigger *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlAFRegions(MLHandle request_handle, const int32_t data[3][5], const uint32_t count);

ML_API MLResult ML_CALL MLCameraMetadataSetAFDistanceRange(MLHandle request_handle, const float data[2]);

ML_API MLResult ML_CALL MLCameraMetadataSetLensFocusDistance(MLHandle request_handle, const float *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlMode(MLHandle request_handle, const MLCameraMetadataControlMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlSceneMode(MLHandle request_handle, const MLCameraMetadataControlSceneMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetSensorExposureTime(MLHandle request_handle, const int64_t *data);

ML_API MLResult ML_CALL MLCameraMetadataSetSensorSensitivity(MLHandle request_handle, const int32_t *data);

ML_API MLResult ML_CALL MLCameraMetadataSetPostRawSensitivityBoost(MLHandle request_handle, const int32_t *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlEffectMode(MLHandle request_handle, const MLCameraMetadataControlEffectMode *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlExposureUpperTimeLimit(MLHandle request_handle, const int64_t *data);

ML_API MLResult ML_CALL MLCameraMetadataSetJpegGPSCoordinates(MLHandle request_handle, const double data[3]);

ML_API MLResult ML_CALL MLCameraMetadataSetJpegGPSTimestamp(MLHandle request_handle, const int64_t *data);

ML_API MLResult ML_CALL MLCameraMetadataSetJpegThumbnailSize(MLHandle request_handle, const MLCameraMetadataJpegThumbnailSize *data);

ML_API MLResult ML_CALL MLCameraMetadataSetJpegQuality(MLHandle request_handle, const uint8_t *data);

ML_API MLResult ML_CALL MLCameraMetadataSetControlForceApplyMode(MLHandle request_handle, const MLCameraMetadataControlForceApplyMode *data);

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionModeResultMetadata(MLHandle result_handle, MLCameraMetadataColorCorrectionMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionTransformResultMetadata(MLHandle result_handle, MLCameraMetadataRational out_data[3][3]);

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata(MLHandle result_handle, MLCameraMetadataColorCorrectionAberrationMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetColorCorrectionGainsResultMetadata(MLHandle result_handle, float out_data[4]);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEAntibandingModeResultMetadata(MLHandle result_handle, MLCameraMetadataControlAEAntibandingMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEExposureCompensationResultMetadata(MLHandle result_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAELockResultMetadata(MLHandle result_handle, MLCameraMetadataControlAELock *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEModeResultMetadata(MLHandle result_handle, MLCameraMetadataControlAEMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAERegionsResultMetadata(MLHandle result_handle, int32_t out_data[3][5], uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAETargetFPSRangeResultMetadata(MLHandle result_handle, int32_t out_data[2]);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAEStateResultMetadata(MLHandle result_handle, MLCameraMetadataControlAEState *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAWBLockResultMetadata(MLHandle result_handle, MLCameraMetadataControlAWBLock *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAWBStateResultMetadata(MLHandle result_handle, MLCameraMetadataControlAWBState *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAWBModeResultMetadata(MLHandle result_handle, MLCameraMetadataControlAWBMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFModeResultMetadata(MLHandle result_handle, MLCameraMetadataControlAFMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFTriggerResultMetadata(MLHandle result_handle, MLCameraMetadataControlAFTrigger *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFRegionsResultMetadata(MLHandle result_handle, int32_t out_data[3][5], uint32_t *out_count);

ML_API MLResult ML_CALL MLCameraMetadataGetAFDistanceRangeResultMetadata(MLHandle result_handle, float out_data[2]);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFStateResultMetadata(MLHandle result_handle, MLCameraMetadataControlAFState *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlAFSceneChangeResultMetadata(MLHandle result_handle, MLCameraMetadataControlAFSceneChange *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetLensFocusDistanceResultMetadata(MLHandle result_handle, float *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetLensStateResultMetadata(MLHandle result_handle, MLCameraMetadataLensState *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlModeResultMetadata(MLHandle result_handle, MLCameraMetadataControlMode *out_data);
ML_API MLResult ML_CALL MLCameraMetadataGetControlSceneModeResultMetadata(MLHandle result_handle, MLCameraMetadataControlSceneMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorExposureTimeResultMetadata(MLHandle result_handle, int64_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorSensitivityResultMetadata(MLHandle result_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetPostRawSensitivityBoostResultMetadata(MLHandle result_handle, int32_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorTimestampResultMetadata(MLHandle result_handle, int64_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetSensorFrameDurationResultMetadata(MLHandle result_handle, int64_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlEffectModeResultMetadata(MLHandle result_handle, MLCameraMetadataControlEffectMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata(MLHandle result_handle, int64_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetJpegGPSCoordinatesResultMetadata(MLHandle result_handle, double out_data[3]);

ML_API MLResult ML_CALL MLCameraMetadataGetJpegGPSTimestampResultMetadata(MLHandle result_handle, int64_t *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetJpegThumbnailSizeResultMetadata(MLHandle result_handle, MLCameraMetadataJpegThumbnailSize *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetControlForceApplyModeResultMetadata(MLHandle result_handle, MLCameraMetadataControlForceApplyMode *out_data);

ML_API MLResult ML_CALL MLCameraMetadataGetJpegQualityResultMetadata(MLHandle result_handle, uint8_t *out_data);

ML_EXTERN_C_END
```



