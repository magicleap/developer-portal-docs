---
title: ml_camera_metadata_v2.h

---

# ml_camera_metadata_v2.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) | **[MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#struct-mlcamerametadatarational)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionAvailableAberrationModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionavailableaberrationmodes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) ** out_data, uint32_t * out_count)<br></br>Gets color correction aberration modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEAvailableModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeavailablemodes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) ** out_data, uint32_t * out_count)<br></br>Gets auto-exposure modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEAvailableAntibandingModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeavailableantibandingmodes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) ** out_data, uint32_t * out_count)<br></br>Gets anti-banding modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAECompensationRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaecompensationrange)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t out_data[2])<br></br>Gets auto-exposure compensation range.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAECompensationStep](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaecompensationstep)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) * out_data)<br></br>Gets AE compensation step.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAELockAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockavailable)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * out_data)<br></br>Gets AE lock.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEMaxRegions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemaxregions)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t * out_data)<br></br>Gets AE Max Regions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAvailableModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailablemodes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) ** out_data, uint32_t * out_count)<br></br>Gets Available Modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBAvailableModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbavailablemodes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) ** out_data, uint32_t * out_count)<br></br>Gets AWB modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFAvailableModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafavailablemodes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) ** out_data, uint32_t * out_count)<br></br>Gets AF modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFMaxRegions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmaxregions)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t * out_data)<br></br>Gets max number of AF regions supported.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAvailableSceneModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailablescenemodes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) ** out_data, uint32_t * out_count)<br></br>Gets Scene modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAvailableEffectModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolavailableeffectmodes)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) ** out_data, uint32_t * out_count)<br></br>Gets Effect modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBLockAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockavailable)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, [MLCameraMetadataControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * out_data)<br></br>Gets AWB lock.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorInfoActiveArraySize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorinfoactivearraysize)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t out_data[4])<br></br>Gets sensor info active array sizes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorInfoSensitivityRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorinfosensitivityrange)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t out_data[2])<br></br>Gets sensor info sensitivity range (Analog Gain).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetPostRawSensitivityBoostRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostrange)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t out_data[2])<br></br>Gets post raw sensitivity boost range (Digital Gain).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensInfoHyperfocalDistance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfohyperfocaldistance)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, float * out_data)<br></br>Gets lens hyperfocal distance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensInfoMinimumFocusDistance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfominimumfocusdistance)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, float * out_data)<br></br>Gets lens minimum focus distance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensinfominimumfocusdistanceincrement)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, float * out_data)<br></br>Gets lens minimum focus distance increment. The lens position can be set in multiples of distance increments between hyperfocal distance and minimum focus distance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorOrientation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensororientation)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) characteristics_handle, int32_t * out_data)<br></br>Gets sensor orientation degree.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionmoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataColorCorrectionMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * out_data)<br></br>Gets color correction mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionTransformRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiontransformrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) out_data[3][3])<br></br>Gets color correction transform.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionGainsRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiongainsrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, float out_data[4])<br></br>Gets color correction gains.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * out_data)<br></br>Gets color correction aberration.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEAntibandingModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeantibandingmoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * out_data)<br></br>Gets AE antibanding mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEExposureCompensationRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeexposurecompensationrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t * out_data)<br></br>Gets AE exposure compensation.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAELockRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * out_data)<br></br>Gets AE lock.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * out_data)<br></br>Gets AE mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAERegionsRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeregionsrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t out_data[3][5], uint32_t * out_count)<br></br>Gets auto-exposure regions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBLockRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * out_data)<br></br>Gets AWB lock.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbmoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * out_data)<br></br>Gets AWB mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * out_data)<br></br>Gets AF mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFTriggerRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaftriggerrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlAFTrigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * out_data)<br></br>Gets AF trigger.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFRegionsRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafregionsrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t out_data[3][5], uint32_t * out_count)<br></br>Gets auto-focus regions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetAFDistanceRangeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetafdistancerangerequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, float out_data[2])<br></br>Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensFocusDistanceRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensfocusdistancerequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, float * out_data)<br></br>Gets Lens focus distance in diopters. The distance is between minimum focus distance and hyperfocal distance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolmoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * out_data)<br></br>Gets mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlSceneModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolscenemoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * out_data)<br></br>Gets Scene mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorExposureTimeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorexposuretimerequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int64_t * out_data)<br></br>Gets sensor exposure time.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorSensitivityRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorsensitivityrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t * out_data)<br></br>Gets sensor sensitivity.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetPostRawSensitivityBoostRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int32_t * out_data)<br></br>Gets post raw sensitivity boost.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlEffectModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontroleffectmoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * out_data)<br></br>Effect mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int64_t * out_data)<br></br>Gets exposure time upper limit.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpscoordinatesrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, double out_data[3])<br></br>Gets JPEG GPS coordinates.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegGPSTimestampRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpstimestamprequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, int64_t * out_data)<br></br>Gets JPEG timestamp.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegThumbnailSizeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegthumbnailsizerequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataJpegThumbnailSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * out_data)<br></br>Gets JPEG thumbnail size.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegQualityRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegqualityrequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, uint8_t * out_data)<br></br>Gets JPEG quality.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlForceApplyModeRequestMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolforceapplymoderequestmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, [MLCameraMetadataControlForceApplyMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * out_data)<br></br>Gets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetColorCorrectionMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectionmode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataColorCorrectionMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * data)<br></br>Sets color correction mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetColorCorrectionTransform](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectiontransform)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) data[3][3])<br></br>Sets color correction transform from RGB color space to output linear sRGB.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetColorCorrectionGains](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectiongains)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const float data[4])<br></br>Sets color correction gains. The gains in the request metadata are the gains applied by the camera device.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcolorcorrectionaberrationmode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * data)<br></br>Sets color correction chromatic aberration, minimizing chromatic artifacts that may occur.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeantibandingmode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * data)<br></br>Sets AE antiband mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAEExposureCompensation](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeexposurecompensation)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t * data)<br></br>Sets auto-exposure compensation.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaelock)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * data)<br></br>Sets auto-exposure lock.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaemode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * data)<br></br>Sets auto-exposure mode. MLCameraMetadataControlAEMode_Off is not supported if camera is configured for 15FPS.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAERegions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaeregions)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t data[3][5], const uint32_t count)<br></br>Sets auto-exposure regions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolawblock)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * data)<br></br>Sets automatic white balance lock.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolawbmode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * data)<br></br>Sets AWB mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolafmode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * data)<br></br>Sets AF mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAFTrigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolaftrigger)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlAFTrigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * data)<br></br>Sets AF trigger.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlAFRegions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolafregions)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t data[3][5], const uint32_t count)<br></br>Sets auto-focus regions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetAFDistanceRange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetafdistancerange)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const float data[2])<br></br>Sets AF distance range. Both min and max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using api MLCameraMetadataGetLensInfoHyperfocalDistance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetLensFocusDistance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetlensfocusdistance)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const float * data)<br></br>Sets Lens focus distance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolmode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * data)<br></br>Sets mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolscenemode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * data)<br></br>Sets Scene mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetSensorExposureTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetsensorexposuretime)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int64_t * data)<br></br>Sets sensor exposure time.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetSensorSensitivity](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetsensorsensitivity)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t * data)<br></br>Sets sensor sensitivity.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetPostRawSensitivityBoost](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetpostrawsensitivityboost)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int32_t * data)<br></br>Sets post raw sensitivity boost.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontroleffectmode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * data)<br></br>Sets Effect mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlExposureUpperTimeLimit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolexposureuppertimelimit)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int64_t * data)<br></br>Sets exposure time upper limit.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetJpegGPSCoordinates](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpeggpscoordinates)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const double data[3])<br></br>Sets JPEG GPS coordinates.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetJpegGPSTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpeggpstimestamp)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const int64_t * data)<br></br>Sets JPEG timestamp.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetJpegThumbnailSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpegthumbnailsize)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataJpegThumbnailSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * data)<br></br>Sets JPEG thumbnail size.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetJpegQuality](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetjpegquality)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const uint8_t * data)<br></br>Sets JPEG quality.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataSetControlForceApplyMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatasetcontrolforceapplymode)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) request_handle, const [MLCameraMetadataControlForceApplyMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * data)<br></br>Sets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionmoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataColorCorrectionMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * out_data)<br></br>Gets color correction.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionTransformResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiontransformresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) out_data[3][3])<br></br>Gets color correction transform from RGB color space to output linear sRGB.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectionaberrationmoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * out_data)<br></br>Gets color correction aberration.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetColorCorrectionGainsResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcolorcorrectiongainsresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, float out_data[4])<br></br>Gets color correction gains. The gains in the result metadata are the gains applied by the camera device to the current frame.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEAntibandingModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeantibandingmoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * out_data)<br></br>Gets AE antibanding mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEExposureCompensationResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeexposurecompensationresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t * out_data)<br></br>Gets AE exposure compensation.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAELockResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaelockresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * out_data)<br></br>Gets auto-exposure lock.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaemoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * out_data)<br></br>Gets AE mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAERegionsResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaeregionsresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t out_data[3][5], uint32_t * out_count)<br></br>Gets auto-exposure regions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAETargetFPSRangeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaetargetfpsrangeresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t out_data[2])<br></br>Gets auto-exposure target FPS range.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAEStateResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaestateresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAEState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaestate) * out_data)<br></br>Gets AE state.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBLockResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawblockresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * out_data)<br></br>Gets AWB lock.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBStateResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbstateresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAWBState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbstate) * out_data)<br></br>Gets AWB state.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAWBModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolawbmoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * out_data)<br></br>Gets AWB mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafmoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * out_data)<br></br>Gets AF mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFTriggerResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolaftriggerresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAFTrigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * out_data)<br></br>Gets AF trigger.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFRegionsResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafregionsresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t out_data[3][5], uint32_t * out_count)<br></br>Gets auto-focus regions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetAFDistanceRangeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetafdistancerangeresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, float out_data[2])<br></br>Gets AF distance range. Both Min and Max are specified as focus distance in diopters. The min value specifies the lower bound for focus distance used by Autofocus algorithm and should be more than min focus distance which can be queried using MLCameraMetadataGetLensInfoMinimumFocusDistance. The max value specifies the upper bound for focus distance used by Autofocus algorithm and should be less than hyperfocal distance which can be queried using API MLCameraMetadataGetLensInfoHyperfocalDistance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFStateResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafstateresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAFState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafstate) * out_data)<br></br>Gets AF state.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlAFSceneChangeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolafscenechangeresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlAFSceneChange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafscenechange) * out_data)<br></br>Gets AF scene change detection status.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensFocusDistanceResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensfocusdistanceresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, float * out_data)<br></br>Gets Lens focus distance.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetLensStateResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetlensstateresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataLensState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatalensstate) * out_data)<br></br>Get Lens state.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolmoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * out_data)<br></br>Gets mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlSceneModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolscenemoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * out_data)<br></br>Gets Scene mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorExposureTimeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorexposuretimeresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets sensor exposure time.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorSensitivityResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorsensitivityresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t * out_data)<br></br>Gets sensor sensitivity.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetPostRawSensitivityBoostResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetpostrawsensitivityboostresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int32_t * out_data)<br></br>Gets post raw sensitivity boost.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorTimestampResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensortimestampresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets frame captured timestamp.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetSensorFrameDurationResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetsensorframedurationresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets sensor frame duration.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlEffectModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontroleffectmoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * out_data)<br></br>Gets Effect mode.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolexposureuppertimelimitresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets exposure time upper limit.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegGPSCoordinatesResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpscoordinatesresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, double out_data[3])<br></br>Gets JPEG GPS coordinates.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegGPSTimestampResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpeggpstimestampresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, int64_t * out_data)<br></br>Gets JPEG timestamp.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegThumbnailSizeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegthumbnailsizeresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataJpegThumbnailSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * out_data)<br></br>Gets JPEG thumbnail size.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetControlForceApplyModeResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetcontrolforceapplymoderesultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, [MLCameraMetadataControlForceApplyMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * out_data)<br></br>Gets force apply mode. Main camera and CV Camera share the same camera hardware resources. When both the cameras are streaming, request metadata properties for both cameras are merged and then applied. While merging, the metadata properties from Main Camera take precedence over CV camera metadata properties. The force apply mode property can be used to override this. If CV Camera metadata has force apply mode on, the CV Camera metadata properties take precedence over Main Camera metadata properties.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLCameraMetadataGetJpegQualityResultMetadata](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#mlresult-mlcamerametadatagetjpegqualityresultmetadata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) result_handle, uint8_t * out_data)<br></br>Gets JPEG quality.  |


## Types Documentation

### MLCameraMetadataRational {#struct-mlcamerametadatarational}

```cpp
typedef struct MLCameraMetadataRational MLCameraMetadataRational;
```


Rational data type. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md)



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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) ** |out_data|Array of aberration modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction aberration modes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction aberration modes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction aberration modes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) ** |out_data|Array of auto-exposure modes. The Library allocates and maintains the lifetime of the output data.|
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE modes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE modes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE modes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) ** |out_data|Array of anti-banding modes. The Library allocates and maintains the lifetime of the output data.|
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AntiBanding modes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AntiBanding modes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AntiBanding modes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t |out_data|Array of min (1st) and max (2nd) of auto-exposure compensation. The adjustment is measured as a count of steps.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE compensation range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE compensation range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE compensation range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) * |out_data|AE compensation step.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE compensation step due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE compensation step. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE compensation step due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * |out_data|AE lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE lock due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE lock. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE lock due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t * |out_data|Num AE Regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE Max Regions due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE Max Regions. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE Max Regions due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) ** |out_data|Array of modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Avaialble Modes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Available Modes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Available Modes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) ** |out_data|Array of AWB modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB modes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB modes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB modes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) ** |out_data|Array of AF modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF modes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF modes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF modes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t * |out_data|Num AF Regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF Max Regions due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF Max Regions. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF Max Regions due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) ** |out_data|Array of Scene modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Scene modes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Scene modes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Scene modes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) ** |out_data|Array of Effect modes. The Library allocates and maintains the lifetime of the output data. |
| uint32_t * |out_count|Number of output data elements.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Effect modes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Effect modes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Effect modes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| [MLCameraMetadataControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * |out_data|AWB lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB lock due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB lock. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB lock due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t |out_data|Active array size [left, top, right, bottom].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor info active array sizes due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor info active array sizes. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor info active array sizes due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t |out_data|Sensor info sensitivity range[min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor info sensitivity range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor info sensitivity range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor info sensitivity range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t |out_data|Post raw sensitivity boost range[min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain post raw sensitivity boost range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained post raw sensitivity boost range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain post raw sensitivity boost range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| float * |out_data|Lens hyperfocal distance in diopters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain hyperfocal distance due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained hyperfocal distance. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain hyperfocal distance due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| float * |out_data|Minimum focus distance in diopters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain minimum focus distance due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained minimum focus distance. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain minimum focus distance due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| float * |out_data|Minimum focus distance increment in diopters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain minimum focus distance increment due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained minimum focus distance increment. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain minimum focus distance increment due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |characteristics_handle|Camera characteristic metadata handle acquired from [MLCameraGetCameraCharacteristics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcameragetcameracharacteristics). |
| int32_t * |out_data|Sensor orientation degree.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor orientation degree due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor orientation degree. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor orientation degree due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataColorCorrectionMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * |out_data|Color correction mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) |out_data|3x3 color correction transform.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction transform due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction transform. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction transform due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| float |out_data|Color correction gains.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction gains due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction gains. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction gains due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * |out_data|Color correction aberration.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction aberration due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction aberration. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction aberration due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * |out_data|AE antibanding mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE antibanding mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE antibanding mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE antibanding mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t * |out_data|Exposure compensation value.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE exposure compensation due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE exposure compensation. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE exposure compensation due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * |out_data|AE Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE lock due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE lock. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE lock due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * |out_data|AE mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t |out_data|Auto-exposure regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). |
| uint32_t * |out_count|Number of auto-exposure regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE regions due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE regions. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE regions due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * |out_data|AWB Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB lock due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB lock. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB lock due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * |out_data|AWB mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * |out_data|AF mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlAFTrigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * |out_data|AF trigger.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF trigger due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF trigger. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF trigger due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t |out_data|Auto-focus regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). |
| uint32_t * |out_count|Number of auto-focus regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF regions due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF regions. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF regions due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| float |out_data|AF distance range [min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF distance range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF distance range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF distance range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| float * |out_data|Lens focus distance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Lens focus distance range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Lens focus distance range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Lens focus distance range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * |out_data|Mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * |out_data|Scene mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain scene mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained scene mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain scene mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int64_t * |out_data|Duration each pixel is exposed to light in nanoseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor exposure time due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor exposure time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor exposure time due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t * |out_data|Sensor sensitivity.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor sensitivity due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor sensitivity. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor sensitivity due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int32_t * |out_data|Post raw sensitivity boost.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain post raw sensitivity boost due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained post raw sensitivity boost. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain post raw sensitivity boost due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * |out_data|Effect mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain effect mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained effect mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain effect mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int64_t * |out_data|Exposure time upper limit for auto exposure algorithm.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain exposure time upper limit due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained exposure time upper limit. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain exposure time upperlimit due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| double |out_data|JPEG GPS coordinates – latitude and longitude in degrees, altitude in meters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG GPS coordinates due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG GPS coordinates. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG GPS coordinates due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| int64_t * |out_data|JPEG timestamp in UNIX Epoch time (UTC in seconds since January 1, 1970).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG timestamp due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG timestamp due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataJpegThumbnailSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * |out_data|Resolution of embedded JPEG thumbnail.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG thumbnail size due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG thumbnail size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG thumbnail size due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| uint8_t * |out_data|Compression quality of JPEG thumbnail, with 100 being the highest quality, and 1 the lowest.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG quality due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG quality. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG quality due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| [MLCameraMetadataControlForceApplyMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * |out_data|Force apply mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain force apply mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained force apply mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain force apply mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataColorCorrectionMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * |data|Color correction mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set color correction mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set color correction mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set color correction mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) |data|Color correction transform (3x3). Set all values to 0/1 to clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set color correction transform due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set color correction transform. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set color correction transform due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const float |data|An array of floats for 4 color channel color correction gains. Set all values to 0 to clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set color correction gains due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set color correction gains. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set color correction gains due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * |data|Color correction aberration.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set color correction aberration due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set color correction aberration. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set color correction aberration due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * |data|AE antibanding mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE antiband mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE antiband mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE antiband mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t * |data|Exposure compensation value as a count of steps. If exposure compensation is set to 0, no exposure compensation will be applied.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE exposure compensation due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE exposure compensation. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE exposure compensation due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * |data|Auto-exposure Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE lock due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE lock. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE lock due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * |data|Auto-exposure mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE mode due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_InvalidOperation|Failed to set AE Mode due to conflict between fps setting and AE Mode.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t |data|Auto-exposure regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight] array with all zeros and count 1 clears the data. Coordinates must be between [(0,0), (width, height)). Max width, height can be obtained using MLCameraMetadataGetSensorInfoActiveArraySize. Weight for a region can be between [0,1000].For a region to be used its weight should be > 0. Weight is used to decide relative priority between multiple regions. |
| const uint32_t |count|Number of auto-exposure regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE regions due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AE regions. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AE regions due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * |data|Automatic White Balance Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AE target FPS range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set automatic white balance lock. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set automatic white balance lock due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * |data|AWB mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AWB mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set AWB mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AWB mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * |data|AF mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AF mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set AF mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AF mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlAFTrigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * |data|AF trigger.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AF trigger due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set AF trigger. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AF trigger due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t |data|Auto-focus regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). Max width, height can be obtained using MLCameraMetadataGetSensorInfoActiveArraySize. Weight for a region can be between [0,1000]. For a region to be used its weight should be > 0. All regions with weight > 0 are treated as same priority. |
| const uint32_t |count|Number of auto-focus regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AF regions due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set AF regions. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AF regions due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const float |data|AF distance range [min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set AF distance range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set AF distance range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set AF distance range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const float * |data|Lens focus distance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set Lens focus distance due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set Lens focus distance. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set Lens focus distance due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * |data|Mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * |data|Scene mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set scene mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set scene mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set scene mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int64_t * |data|Duration each pixel is exposed to light in nanoseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set sensor exposure time due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set sensor exposure time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set sensor exposure time due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t * |data|Sensor sensitivity.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set sensor sensitivity due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set sensor sensitivity. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set sensor sensitivity due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int32_t * |data|Post raw sensitivity boost.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set post raw sensitivity boost due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set post raw sensitivity boost. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set post raw sensitivity boost due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * |data|Effect mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set effect mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set effect mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set effect mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int64_t * |data|Exposure time upper limit. Null pointer will clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set exposure time upper limit due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set exposure time upper limit. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set exposure time upperlimit due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const double |data|JPEG GPS coordinates – latitude and longitude in degrees, altitude in meters.Null pointer will clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set JPEG GPS coordinates due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set JPEG GPS coordinates. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set JPEG GPS coordinates due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const int64_t * |data|JPEG timestamp in UNIX Epoch time (UTC in seconds since January 1, 1970). Null pointer will clear the data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set JPEG timestamp due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set JPEG timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set JPEG timestamp due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataJpegThumbnailSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * |data|Resolution of embedded JPEG thumbnail. Null pointer will prevent the inclusion of a thumbnail.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set JPEG thumbnail size due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set JPEG thumbnail size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set JPEG thumbnail size due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const uint8_t * |data|Compression quality of JPEG thumbnail, with 100 being the highest quality, and 1 the lowest.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set JPEG quality due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Set JPEG quality. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set JPEG quality due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |request_handle|Camera capture request metadata handle acquired from [MLCameraPrepareCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/group___camera.md#mlresult-mlcamerapreparecapture). |
| const [MLCameraMetadataControlForceApplyMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * |data|Force apply mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set force apply mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set force apply mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set force apply mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataColorCorrectionMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionmode) * |out_data|Color correction mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataRational](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/struct_m_l_camera_metadata_rational.md) |out_data|3x3 color correction transform matrix.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction transform due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction transform. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction transform due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataColorCorrectionAberrationMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacolorcorrectionaberrationmode) * |out_data|Color correction aberration mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction aberration due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction aberration. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction aberration due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| float |out_data|An array of floats for 4 color channel color correction gains.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain color correction gains due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained color correction gains. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain color correction gains due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAEAntibandingMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaeantibandingmode) * |out_data|AE antibanding mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE antibanding mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE antibanding mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE antibanding mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t * |out_data|AE exposure compensation.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE exposure compensation due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE exposure compensation. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE exposure compensation due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAELock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaelock) * |out_data|AE lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE lock due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE lock. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE lock due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAEMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaemode) * |out_data|AE control mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t |out_data|Auto-exposure regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). |
| uint32_t * |out_count|Number of auto-exposure regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE regions due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE regions. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE regions due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t |out_data|Target range over which good exposure can be maintained by adjusting the capture frame rate.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE target FPS range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE target FPS range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE target FPS range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAEState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaestate) * |out_data|AE state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AE state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AE state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AE state due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAWBLock](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawblock) * |out_data|AWB Lock.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB lock due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB lock. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB lock due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAWBState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbstate) * |out_data|AWB state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB state due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAWBMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolawbmode) * |out_data|AWB mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AWB mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AWB mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AWB mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAFMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafmode) * |out_data|AF mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAFTrigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolaftrigger) * |out_data|AF trigger.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF trigger due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF trigger. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF trigger due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t |out_data|Auto-focus regions. Regions array of area_size x 5[xmin, ymin, xmax, ymax, weight]. Coordinates must be between [(0,0), (width, height)). |
| uint32_t * |out_count|Number of auto-focus regions.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF regions due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF regions. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF regions due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| float |out_data|AF distance range [min, max].|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF distance range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF distance range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF distance range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAFState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafstate) * |out_data|AF state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF state due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlAFSceneChange](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolafscenechange) * |out_data|AF scene change detected or not.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain AF scene change detection status due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained AF scene change detection status. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain AF scene change detection status due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| float * |out_data|Lens focus distance.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Lens focus distance range due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Lens focus distance range. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Lens focus distance range due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataLensState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatalensstate) * |out_data|Lens state.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain Lens state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained Lens state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain Lens state due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolmode) * |out_data|Obtained mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlSceneMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolscenemode) * |out_data|Scene mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain scene mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained scene mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain scene mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|Duration each pixel is exposed to light in nanoseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor exposure time due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor exposure time. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor exposure time due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t * |out_data|Sensor sensitivity.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor sensitivity due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor sensitivity. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor sensitivity due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int32_t * |out_data|Post raw sensitivity boost.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain post raw sensitivity boost due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained post raw sensitivity boost. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain post raw sensitivity boost due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|Timestamp in nanoseconds when captured.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain frame captured timestamp due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained frame captured timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain frame captured timestamp due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|Sensor frame duration.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain sensor frame duration due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained sensor frame duration. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain sensor frame duration due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlEffectMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontroleffectmode) * |out_data|Effect mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain effect mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained effect mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain effect mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|Exposure time upper limit.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain exposure time upper limit due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained exposure time upper limit. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain exposure time upperlimit due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| double |out_data|JPEG GPS coordinates – latitude and longitude in degrees, altitude in meters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG GPS coordinates due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG GPS coordinates. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG GPS coordinates due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| int64_t * |out_data|JPEG timestamp in UNIX Epoch time (UTC in seconds since January 1, 1970).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG timestamp due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG timestamp. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG timestamp due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataJpegThumbnailSize](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatajpegthumbnailsize) * |out_data|Resolution of embedded JPEG thumbnail. When set to 0, thumbnail will not be included.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG thumbnail size due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG thumbnail size. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG thumbnail size due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| [MLCameraMetadataControlForceApplyMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera_metadata/group___camera_metadata.md#enums-mlcamerametadatacontrolforceapplymode) * |out_data|Force apply mode.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain force apply mode due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained force apply mode. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain force apply mode due to an unknown error.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |result_handle|Camera capture result metadata handle returned in [MLCameraCaptureCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___camera/struct_m_l_camera_capture_callbacks.md). |
| uint8_t * |out_data|Compression quality of JPEG thumbnail, with 100 being the highest quality, and 1 the lowest.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to obtain JPEG quality due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully obtained JPEG quality. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to obtain JPEG quality due to an unknown error.|
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




