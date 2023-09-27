---
title: Space
summary: apis for magic leap space. 

---

# Space

**Module:** **[Magic Leap Spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)**

APIs for Magic Leap Space.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md)** <br></br>A structure containing settings for the space manager. This structure must be initialized by calling [MLSpaceManagerSettingsInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit) before use.  |
| struct | **[MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md)** <br></br>A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use.  |
| struct | **[MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md)** <br></br>A structure containing list of [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). This structure must be initialized by calling [MLSpaceListInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit) before use.  |
| struct | **[MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md)** <br></br>A collection of filters for Magic Leap Spaces. This structure must be initialized by calling [MLSpaceQueryFilterInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit) before use. There is no support for filters at this time.  |
| struct | **[MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md)** <br></br>A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use.  |
| struct | **[MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md)** <br></br>A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use.  |
| struct | **[MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md)** <br></br>A structure containing callbacks for events related to the Space.  |
| struct | **[MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md)** <br></br>A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use.  |
| struct | **[MLSpaceImportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md)** <br></br>A structure containing information about the imported Space.  |
| struct | **[MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md)** <br></br>A structure containing information about the Space export settings. This structure must be initialized by calling [MLSpaceExportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit) before use.  |
| struct | **[MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md)** <br></br>A structure containing information about the exported Space.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) | **[MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacemanagersettings)** <br></br>A structure containing settings for the space manager. This structure must be initialized by calling [MLSpaceManagerSettingsInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit) before use.  |
| typedef struct [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) | **[MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspace)** <br></br>A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use.  |
| typedef struct [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) | **[MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacelist)** <br></br>A structure containing list of [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). This structure must be initialized by calling [MLSpaceListInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit) before use.  |
| typedef struct [MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) | **[MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacequeryfilter)** <br></br>A collection of filters for Magic Leap Spaces. This structure must be initialized by calling [MLSpaceQueryFilterInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit) before use. There is no support for filters at this time.  |
| typedef struct [MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) | **[MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacelocalizationinfo)** <br></br>A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use.  |
| typedef struct [MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) | **[MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacelocalizationresult)** <br></br>A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use.  |
| typedef struct [MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) | **[MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacecallbacks)** <br></br>A structure containing callbacks for events related to the Space.  |
| typedef struct [MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) | **[MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspaceimportinfo)** <br></br>A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use.  |
| typedef struct [MLSpaceImportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md) | **[MLSpaceImportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspaceimportoutdata)** <br></br>A structure containing information about the imported Space.  |
| typedef struct [MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) | **[MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspaceexportinfo)** <br></br>A structure containing information about the Space export settings. This structure must be initialized by calling [MLSpaceExportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit) before use.  |
| typedef struct [MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) | **[MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspaceexportoutdata)** <br></br>A structure containing information about the exported Space.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 28](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-anonymous-enum-28)** <br></br> { <br></br>[MLResultAPIPrefix_Space](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlresultapiprefix-space) = ( 0x10cc  << 16),<br></br> [MLSpace_MaxSpaceNameLength](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspace-maxspacenamelength) = 64<br></br>} |
| enum | **[MLSpaceResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult)** <br></br> { <br></br>[MLSpaceResult_ServerError](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-servererror) = MLResultAPIPrefix_Space,<br></br> [MLSpaceResult_ServiceUnavailable](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-serviceunavailable),<br></br> [MLSpaceResult_UnavailableSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-unavailablespace),<br></br> [MLSpaceResult_IncompatibleSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-incompatiblespace),<br></br> [MLSpaceResult_SpaceAlreadyExists](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-spacealreadyexists),<br></br> [MLSpaceResult_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Magic Leap Space specific return codes.  |
| enum | **[MLSpaceType](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype)** <br></br> { <br></br>[MLSpaceType_OnDevice](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype-ondevice) = 0,<br></br> [MLSpaceType_ARCloud](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype-arcloud) = 1,<br></br> [MLSpaceType_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Space type. Indicates the type of the Space.  |
| enum | **[MLSpaceLocalizationStatus](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus)** <br></br> { <br></br>[MLSpaceLocalizationStatus_NotLocalized](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-notlocalized) = 0,<br></br> [MLSpaceLocalizationStatus_Localized](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-localized) = 1,<br></br> [MLSpaceLocalizationStatus_LocalizationPending](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-localizationpending) = 2,<br></br> [MLSpaceLocalizationStatus_SleepingBeforeRetry](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-sleepingbeforeretry) = 3,<br></br> [MLSpaceLocalizationStatus_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The current localization status.  |
| enum | **[MLSpaceLocalizationConfidence](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationconfidence)** <br></br> { <br></br>[MLSpaceLocalizationConfidence_Poor](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationconfidence-poor) = 0,<br></br> [MLSpaceLocalizationConfidence_Fair](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationconfidence-fair) = 1,<br></br> [MLSpaceLocalizationConfidence_Good](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationconfidence-good) = 2,<br></br> [MLSpaceLocalizationConfidence_Excellent](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationconfidence-excellent) = 3,<br></br> [MLSpaceLocalizationConfidence_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationconfidence-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The confidence of the current localization.  |
| enum | **[MLSpaceLocalizationErrorFlag](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag)** <br></br> { <br></br>[MLSpaceLocalizationErrorFlag_None](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-none) = 0,<br></br> [MLSpaceLocalizationErrorFlag_Unknown](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-unknown) = 1 << 0,<br></br> [MLSpaceLocalizationErrorFlag_OutOfMappedArea](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-outofmappedarea) = 1 << 1,<br></br> [MLSpaceLocalizationErrorFlag_LowFeatureCount](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-lowfeaturecount) = 1 << 2,<br></br> [MLSpaceLocalizationErrorFlag_ExcessiveMotion](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-excessivemotion) = 1 << 3,<br></br> [MLSpaceLocalizationErrorFlag_LowLight](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-lowlight) = 1 << 4,<br></br> [MLSpaceLocalizationErrorFlag_HeadposeFailure](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-headposefailure) = 1 << 5,<br></br> [MLSpaceLocalizationErrorFlag_AlgorithmFailure](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-algorithmfailure) = 1 << 6,<br></br> [MLSpaceLocalizationErrorFlag_Ensure32Bits](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationerrorflag-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible reasons that a localization attempt may be unsuccessful.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLSpaceManagerSettingsInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit)**([MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) * inout_info)<br></br>Initializes default values for [MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md).  |
| void | **[MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit)**([MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) * inout_info)<br></br>Initializes default values for [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md).  |
| void | **[MLSpaceListInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit)**([MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * inout_info)<br></br>Initializes default values for [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md).  |
| void | **[MLSpaceQueryFilterInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit)**([MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) * inout_query_filter)<br></br>Initializes the default values for a query filter.  |
| void | **[MLSpaceLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit)**([MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) * inout_info)<br></br>Initializes the default values for localization info.  |
| void | **[MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit)**([MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) * inout_info)<br></br>Initialize default values for [MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md).  |
| void | **[MLSpaceCallbacksInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacecallbacksinit)**([MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) * inout_callbacks)<br></br>Initialize defaults for [MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md).  |
| void | **[MLSpaceImportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit)**([MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) * inout_info)<br></br>Initialize default values for [MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md).  |
| void | **[MLSpaceExportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit)**([MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) * inout_info)<br></br>Initialize default values for [MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md).  |
| const char * | **[MLSpaceGetResultString](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#const-char-mlspacegetresultstring)**([MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result)<br></br>Returns an ASCII string for MLSpaceResult and MLResult codes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceManagerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate)**(const [MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) * settings, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a Magic Leap Space manager handle.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceSetCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacesetcallbacks)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) * callbacks, void * user_data)<br></br>Set the callbacks for events related to the Magic Leap Space.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceGetSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetspacelist)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) * query_filter, [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * out_space_list)<br></br>Get the list of available spaces.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceReleaseSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleasespacelist)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * space_list)<br></br>Release the list of available spaces.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceRequestLocalization](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacerequestlocalization)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) * localization_info)<br></br>Send a request to localize to a given Magic Leap Space.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceGetLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetlocalizationresult)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) * out_localization_result)<br></br>Get the localization results.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceManagerDestroy](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagerdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a Space manager handle.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceImportSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceimportspace)**(const [MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) * import_info, [MLSpaceImportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md) * out_data)<br></br>Import a Magic Leap Space.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceExportSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace)**(const [MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) * export_info, [MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) * out_data)<br></br>Export an on device Magic Leap Space.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceReleaseExportData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleaseexportdata)**([MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) * space_data)<br></br>Release resources acquired in [MLSpaceExportSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace).  |

## Detailed Description

APIs for Magic Leap Space. 


Magic Leap Space is a container that holds metadata about your scanned environment. It is a digital copy of a physical place and could include spatial anchors, environment meshes, environment objects, etc. Spaces can be created on device or in the Magic Leap AR Cloud. Spaces created in the AR Cloud can be easily shared between other devices.

==> APIs for localization requests:

Magic Leap Space API allows an application to query the list of Spaces available to the application and determine the Space that the device should localize into. Applications needs to create a Space Manager to list the spaces and trigger localization. Application can create only one manager instance and the API is not thread safe.

==> APIs for importing and exporting Spaces:

Magic Leap Space API supports exporting and importing on device Spaces. Applications cannot export AR Cloud spaces. There is no need to create a Magic Leap Space manager to import/export spaces but the application will need additional permissions to import/export spaces. See the API for more details.

The format of the exported Space data can change with OS version updates. Backwards compatibility: Space exported using OS version n should work on OS versions up to and including OS version n-4. Forwards compatibility: Space exported using OS version n is not guaranteed to work on OS versions > n.

Developers are strongly encouraged to encrypt the exported Magic Leap Spaces. 




**Shared Object:**
  * space.magicleap*




-----------
## Enums Documentation

### Anonymous Enum 28 {#enums-anonymous-enum-28}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_Space |  ( 0x10cc  << 16)| Defines the prefix for MLSpaceResult codes. |
| MLSpace_MaxSpaceNameLength |  64| Maximum size for the name of a Magic Leap Space. |








-----------

### MLSpaceResult {#enums-mlspaceresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpaceResult_ServerError |  MLResultAPIPrefix_Space| There was an error communicating with the server. |
| MLSpaceResult_ServiceUnavailable | | The operation failed because the underlying service is not yet available, retry later. |
| MLSpaceResult_UnavailableSpace | | Space is not available. This can happen when the selected space is in AR Cloud but the device is configured for On Device spaces or vice-versa. |
| MLSpaceResult_IncompatibleSpace | | Space is not compatible with the current OS version. This can happen when a space exported from an older version of the OS is imported to a device running a newer version of the OS. Refer to the documentation at the top of this header for more notes on Space compatibility. |
| MLSpaceResult_SpaceAlreadyExists | | The operation failed because the Space being imported already exists in the device. |
| MLSpaceResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Magic Leap Space specific return codes. 




**API Level:**
  * 26




-----------

### MLSpaceType {#enums-mlspacetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpaceType_OnDevice |  0| On device space. |
| MLSpaceType_ARCloud |  1| AR Cloud based space. |
| MLSpaceType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Space type. Indicates the type of the Space. 




**API Level:**
  * 26




-----------

### MLSpaceLocalizationStatus {#enums-mlspacelocalizationstatus}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpaceLocalizationStatus_NotLocalized |  0| The device is currently not localized. |
| MLSpaceLocalizationStatus_Localized |  1| The device has localized successfully. |
| MLSpaceLocalizationStatus_LocalizationPending |  2| Localization attempt is currently in progress. |
| MLSpaceLocalizationStatus_SleepingBeforeRetry |  3| The device will attempt to localize after sleep duration is complete. |
| MLSpaceLocalizationStatus_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The current localization status. 




**API Level:**
  * 26




-----------

### MLSpaceLocalizationConfidence {#enums-mlspacelocalizationconfidence}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpaceLocalizationConfidence_Poor |  0| Localization confidence is very poor and should be reattempted. |
| MLSpaceLocalizationConfidence_Fair |  1| The confidence is low, current environmental conditions may adversely affect localization. |
| MLSpaceLocalizationConfidence_Good |  2| The confidence is high, persistent content should be stable. |
| MLSpaceLocalizationConfidence_Excellent |  3| This is a very high-confidence localization, persistent content will be very stable. |
| MLSpaceLocalizationConfidence_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The confidence of the current localization. 




**API Level:**
  * 31




-----------

### MLSpaceLocalizationErrorFlag {#enums-mlspacelocalizationerrorflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLSpaceLocalizationErrorFlag_None |  0| No error, localization was successful. |
| MLSpaceLocalizationErrorFlag_Unknown |  1 << 0| Localization failed for an unknown reason. |
| MLSpaceLocalizationErrorFlag_OutOfMappedArea |  1 << 1| Localization failed becuase the user is outside of the mapped area. |
| MLSpaceLocalizationErrorFlag_LowFeatureCount |  1 << 2| There are not enough features in the environment to successfully localize. |
| MLSpaceLocalizationErrorFlag_ExcessiveMotion |  1 << 3| Localization failed due to excessive motion. |
| MLSpaceLocalizationErrorFlag_LowLight |  1 << 4| Localization failed because the lighting levels are too low in the environment. |
| MLSpaceLocalizationErrorFlag_HeadposeFailure |  1 << 5| A headpose failure caused localization to be unsuccessful. |
| MLSpaceLocalizationErrorFlag_AlgorithmFailure |  1 << 6| There was an internal algorithm failure that prevented localization. |
| MLSpaceLocalizationErrorFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible reasons that a localization attempt may be unsuccessful. 




**API Level:**
  * 31




-----------


## Types Documentation

### MLSpaceManagerSettings {#struct-mlspacemanagersettings}

```cpp
typedef struct MLSpaceManagerSettings MLSpaceManagerSettings;
```

A structure containing settings for the space manager. This structure must be initialized by calling [MLSpaceManagerSettingsInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit) before use. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md)


**API Level:**
  * 26




-----------

### MLSpace {#struct-mlspace}

```cpp
typedef struct MLSpace MLSpace;
```

A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md)


**API Level:**
  * 26




-----------

### MLSpaceList {#struct-mlspacelist}

```cpp
typedef struct MLSpaceList MLSpaceList;
```

A structure containing list of [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). This structure must be initialized by calling [MLSpaceListInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit) before use. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md)


**API Level:**
  * 26




-----------

### MLSpaceQueryFilter {#struct-mlspacequeryfilter}

```cpp
typedef struct MLSpaceQueryFilter MLSpaceQueryFilter;
```

A collection of filters for Magic Leap Spaces. This structure must be initialized by calling [MLSpaceQueryFilterInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit) before use. There is no support for filters at this time. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md)


**API Level:**
  * 26




-----------

### MLSpaceLocalizationInfo {#struct-mlspacelocalizationinfo}

```cpp
typedef struct MLSpaceLocalizationInfo MLSpaceLocalizationInfo;
```

A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md)


**API Level:**
  * 26




-----------

### MLSpaceLocalizationResult {#struct-mlspacelocalizationresult}

```cpp
typedef struct MLSpaceLocalizationResult MLSpaceLocalizationResult;
```

A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md)


**API Level:**
  * 31




-----------

### MLSpaceCallbacks {#struct-mlspacecallbacks}

```cpp
typedef struct MLSpaceCallbacks MLSpaceCallbacks;
```

A structure containing callbacks for events related to the Space. 

This structure must be initialized by calling [MLSpaceCallbacksInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacecallbacksinit) before use. Application can unregister (stop receiving callbacks) at any time by setting the corresponding callback to NULL.



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md)


**API Level:**
  * 26




-----------

### MLSpaceImportInfo {#struct-mlspaceimportinfo}

```cpp
typedef struct MLSpaceImportInfo MLSpaceImportInfo;
```

A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md)


**API Level:**
  * 26




-----------

### MLSpaceImportOutData {#struct-mlspaceimportoutdata}

```cpp
typedef struct MLSpaceImportOutData MLSpaceImportOutData;
```

A structure containing information about the imported Space. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md)


**API Level:**
  * 26




-----------

### MLSpaceExportInfo {#struct-mlspaceexportinfo}

```cpp
typedef struct MLSpaceExportInfo MLSpaceExportInfo;
```

A structure containing information about the Space export settings. This structure must be initialized by calling [MLSpaceExportInfoInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit) before use. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md)


**API Level:**
  * 26




-----------

### MLSpaceExportOutData {#struct-mlspaceexportoutdata}

```cpp
typedef struct MLSpaceExportOutData MLSpaceExportOutData;
```

A structure containing information about the exported Space. 



[More Info](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md)


**API Level:**
  * 26




-----------


## Functions Documentation

### MLSpaceManagerSettingsInit {#void-mlspacemanagersettingsinit}

```cpp
static inline void MLSpaceManagerSettingsInit(
    MLSpaceManagerSettings * inout_info
)
```

Initializes default values for [MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) * |inout_info|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceInit {#void-mlspaceinit}

```cpp
static inline void MLSpaceInit(
    MLSpace * inout_info
)
```

Initializes default values for [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) * |inout_info|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceListInit {#void-mlspacelistinit}

```cpp
static inline void MLSpaceListInit(
    MLSpaceList * inout_info
)
```

Initializes default values for [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * |inout_info|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceQueryFilterInit {#void-mlspacequeryfilterinit}

```cpp
static inline void MLSpaceQueryFilterInit(
    MLSpaceQueryFilter * inout_query_filter
)
```

Initializes the default values for a query filter. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) * |inout_query_filter|The filter to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceLocalizationInfoInit {#void-mlspacelocalizationinfoinit}

```cpp
static inline void MLSpaceLocalizationInfoInit(
    MLSpaceLocalizationInfo * inout_info
)
```

Initializes the default values for localization info. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) * |inout_info|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceLocalizationResultInit {#void-mlspacelocalizationresultinit}

```cpp
static inline void MLSpaceLocalizationResultInit(
    MLSpaceLocalizationResult * inout_info
)
```

Initialize default values for [MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) * |inout_info|The localization result to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 31




-----------

### MLSpaceCallbacksInit {#void-mlspacecallbacksinit}

```cpp
static inline void MLSpaceCallbacksInit(
    MLSpaceCallbacks * inout_callbacks
)
```

Initialize defaults for [MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) * |inout_callbacks|The callback structure to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceImportInfoInit {#void-mlspaceimportinfoinit}

```cpp
static inline void MLSpaceImportInfoInit(
    MLSpaceImportInfo * inout_info
)
```

Initialize default values for [MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) * |inout_info|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceExportInfoInit {#void-mlspaceexportinfoinit}

```cpp
static inline void MLSpaceExportInfoInit(
    MLSpaceExportInfo * inout_info
)
```

Initialize default values for [MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) * |inout_info|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceGetResultString {#const-char-mlspacegetresultstring}

```cpp
const char * MLSpaceGetResultString(
    MLResult result
)
```

Returns an ASCII string for MLSpaceResult and MLResult codes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result|The input MLResult enum from [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) functions. |
**Required Permissions**:

  * None 




**Return**: ASCII string containing readable version of result code.


**API Level:**
  * 26




-----------

### MLSpaceManagerCreate {#mlresult-mlspacemanagercreate}

```cpp
MLResult MLSpaceManagerCreate(
    const MLSpaceManagerSettings * settings,
    MLHandle * out_handle
)
```

Creates a Magic Leap Space manager handle. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLSpaceManagerSettings](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) * |settings|Settings that configures the space manager. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The handle to be created.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_ClientLimitExceeded|Failed due to an existing manager. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Space manager handle was successfully created. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * com.magicleap.permission.SPACE_MANAGER (protection level: normal) 


Application can create only one Magic Leap Space manager handle. Multiple calls to create a manager handle will result in a failure. The handle is valid for the lifecycle of the application.




**API Level:**
  * 26




-----------

### MLSpaceSetCallbacks {#mlresult-mlspacesetcallbacks}

```cpp
MLResult MLSpaceSetCallbacks(
    MLHandle handle,
    const MLSpaceCallbacks * callbacks,
    void * user_data
)
```

Set the callbacks for events related to the Magic Leap Space. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| const [MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) * |callbacks|Pointer to the [MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) structure containing the callbacks. |
| void * |user_data|Pointer that will be returned in the callback.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The callbacks were registered successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |



**API Level:**
  * 26




-----------

### MLSpaceGetSpaceList {#mlresult-mlspacegetspacelist}

```cpp
MLResult MLSpaceGetSpaceList(
    MLHandle handle,
    const MLSpaceQueryFilter * query_filter,
    MLSpaceList * out_space_list
)
```

Get the list of available spaces. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| const [MLSpaceQueryFilter](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) * |query_filter|The filter structure for the query. |
| [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * |out_space_list|List of Spaces currently available to the device.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|List of spaces retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Unauthenticated|Invalid authentication credentials for this operation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_ServerError|Operation failed due to server side error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_ServiceUnavailable|Operation failed because service is not ready.|
**Required Permissions**:

  * None 


The list of spaces returned will depend on the current device mapping mode. Only the Spaces associated with the current mapping mode will be returned by this call. Device mapping mode can be changed via the system application(s).

The list memory is owned by the library, call [MLSpaceReleaseSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleasespacelist) to release the memory. Each get [MLSpaceGetSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetspacelist) should have a corresponding [MLSpaceReleaseSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleasespacelist).




**API Level:**
  * 26




-----------

### MLSpaceReleaseSpaceList {#mlresult-mlspacereleasespacelist}

```cpp
MLResult MLSpaceReleaseSpaceList(
    MLHandle handle,
    MLSpaceList * space_list
)
```

Release the list of available spaces. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| [MLSpaceList](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * |space_list|List Magic Leap Spaces that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|List resources was successfully released. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceRequestLocalization {#mlresult-mlspacerequestlocalization}

```cpp
MLResult MLSpaceRequestLocalization(
    MLHandle handle,
    const MLSpaceLocalizationInfo * localization_info
)
```

Send a request to localize to a given Magic Leap Space. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| const [MLSpaceLocalizationInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) * |localization_info|Magic Leap Space to localize into.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Localization request was submitted successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Unauthenticated|Invalid authentication credentials for this operation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_UnavailableSpace|Operation failed due an unavailable Space. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_ServerError|Operation failed due to server side error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_ServiceUnavailable|Operation failed because service is not ready.|
**Required Permissions**:

  * None 


This is an asynchronous request. Use [MLSpaceGetLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetlocalizationresult) to get the results of the localization or use [MLSpaceCallbacks](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) to listen to on_localization_changed events.

A new request for localization will override all the past requests for localization that are yet to be completed.




**API Level:**
  * 26




-----------

### MLSpaceGetLocalizationResult {#mlresult-mlspacegetlocalizationresult}

```cpp
MLResult MLSpaceGetLocalizationResult(
    MLHandle handle,
    MLSpaceLocalizationResult * out_localization_result
)
```

Get the localization results. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| [MLSpaceLocalizationResult](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) * |out_localization_result|Contains the result of the localization request.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Localization result was retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Unauthenticated|Invalid authentication credentials for this operation. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * None 


Returns the results of the most recent localization request.




**API Level:**
  * 26




-----------

### MLSpaceManagerDestroy {#mlresult-mlspacemanagerdestroy}

```cpp
MLResult MLSpaceManagerDestroy(
    MLHandle handle
)
```

Destroys a Space manager handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to be destroyed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Space manager handle was successfully destroyed.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------

### MLSpaceImportSpace {#mlresult-mlspaceimportspace}

```cpp
MLResult MLSpaceImportSpace(
    const MLSpaceImportInfo * import_info,
    MLSpaceImportOutData * out_data
)
```

Import a Magic Leap Space. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) * |import_info|Information need to import the space. |
| [MLSpaceImportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md) * |out_data|Information about the imported space.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_IncompatibleSpace|Operation failed due an incompatible Space. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_SpaceAlreadyExists|Operation failed because Space being imported already exists.|
**Required Permissions**:

  * com.magicleap.permission.SPACE_IMPORT_EXPORT (protection level: dangerous) 


The [MLSpaceImportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) memory is owned by the app and the app should make sure to release the memory once the API call has returned.




**API Level:**
  * 26




-----------

### MLSpaceExportSpace {#mlresult-mlspaceexportspace}

```cpp
MLResult MLSpaceExportSpace(
    const MLSpaceExportInfo * export_info,
    MLSpaceExportOutData * out_data
)
```

Export an on device Magic Leap Space. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLSpaceExportInfo](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) * |export_info|Information needed to export the space. |
| [MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) * |out_data|Exported space data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_UnavailableSpace|Operation failed due an unavailable Space.|
**Required Permissions**:

  * com.magicleap.permission.SPACE_IMPORT_EXPORT (protection level: dangerous) 


The [MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) is owned by the library, call [MLSpaceReleaseExportData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleaseexportdata) to release the memory. Each [MLSpaceExportSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace) call should have a corresponding [MLSpaceReleaseExportData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleaseexportdata).




**API Level:**
  * 26




-----------

### MLSpaceReleaseExportData {#mlresult-mlspacereleaseexportdata}

```cpp
MLResult MLSpaceReleaseExportData(
    MLSpaceExportOutData * space_data
)
```

Release resources acquired in [MLSpaceExportSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) * |space_data|[MLSpaceExportOutData](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|List resources was successfully released. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------





