---
title: Space
summary: apis for magic leap space. 

---

# Space

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)**

APIs for Magic Leap Space.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md)** <br></br>A structure containing settings for the space manager. This structure must be initialized by calling [MLSpaceManagerSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit) before use.  |
| struct | **[MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md)** <br></br>A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use.  |
| struct | **[MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md)** <br></br>A structure containing list of [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). This structure must be initialized by calling [MLSpaceListInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit) before use.  |
| struct | **[MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md)** <br></br>A collection of filters for Magic Leap Spaces. This structure must be initialized by calling [MLSpaceQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit) before use. There is no support for filters at this time.  |
| struct | **[MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md)** <br></br>A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use.  |
| struct | **[MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md)** <br></br>A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use.  |
| struct | **[MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md)** <br></br>A structure containing callbacks for events related to the Space.  |
| struct | **[MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md)** <br></br>A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use.  |
| struct | **[MLSpaceImportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md)** <br></br>A structure containing information about the imported Space.  |
| struct | **[MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md)** <br></br>A structure containing information about the Space export settings. This structure must be initialized by calling [MLSpaceExportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit) before use.  |
| struct | **[MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md)** <br></br>A structure containing information about the exported Space.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) | **[MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacemanagersettings)** <br></br>A structure containing settings for the space manager. This structure must be initialized by calling [MLSpaceManagerSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit) before use.  |
| typedef struct [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) | **[MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspace)** <br></br>A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use.  |
| typedef struct [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) | **[MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacelist)** <br></br>A structure containing list of [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). This structure must be initialized by calling [MLSpaceListInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit) before use.  |
| typedef struct [MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) | **[MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacequeryfilter)** <br></br>A collection of filters for Magic Leap Spaces. This structure must be initialized by calling [MLSpaceQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit) before use. There is no support for filters at this time.  |
| typedef struct [MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) | **[MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacelocalizationinfo)** <br></br>A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use.  |
| typedef struct [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) | **[MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacelocalizationresult)** <br></br>A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use.  |
| typedef struct [MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) | **[MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspacecallbacks)** <br></br>A structure containing callbacks for events related to the Space.  |
| typedef struct [MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) | **[MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspaceimportinfo)** <br></br>A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use.  |
| typedef struct [MLSpaceImportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md) | **[MLSpaceImportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspaceimportoutdata)** <br></br>A structure containing information about the imported Space.  |
| typedef struct [MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) | **[MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspaceexportinfo)** <br></br>A structure containing information about the Space export settings. This structure must be initialized by calling [MLSpaceExportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit) before use.  |
| typedef struct [MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) | **[MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#struct-mlspaceexportoutdata)** <br></br>A structure containing information about the exported Space.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 28](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-anonymous-enum-28)** <br></br> { <br></br>[MLResultAPIPrefix_Space](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlresultapiprefix-space) = ( 0x10cc  << 16),<br></br> [MLSpace_MaxSpaceNameLength](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspace-maxspacenamelength) = 64<br></br>} |
| enum | **[MLSpaceResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult)** <br></br> { <br></br>[MLSpaceResult_ServerError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-servererror) = MLResultAPIPrefix_Space,<br></br> [MLSpaceResult_ServiceUnavailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-serviceunavailable),<br></br> [MLSpaceResult_UnavailableSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-unavailablespace),<br></br> [MLSpaceResult_IncompatibleSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-incompatiblespace),<br></br> [MLSpaceResult_SpaceAlreadyExists](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-spacealreadyexists),<br></br> [MLSpaceResult_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspaceresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Magic Leap Space specific return codes.  |
| enum | **[MLSpaceType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype)** <br></br> { <br></br>[MLSpaceType_OnDevice](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype-ondevice) = 0,<br></br> [MLSpaceType_ARCloud](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype-arcloud) = 1,<br></br> [MLSpaceType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Space type. Indicates the type of the Space.  |
| enum | **[MLSpaceLocalizationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus)** <br></br> { <br></br>[MLSpaceLocalizationStatus_NotLocalized](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-notlocalized) = 0,<br></br> [MLSpaceLocalizationStatus_Localized](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-localized) = 1,<br></br> [MLSpaceLocalizationStatus_LocalizationPending](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-localizationpending) = 2,<br></br> [MLSpaceLocalizationStatus_SleepingBeforeRetry](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-sleepingbeforeretry) = 3,<br></br> [MLSpaceLocalizationStatus_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The current localization status.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLSpaceManagerSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit)**([MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) * inout_info)<br></br>Initializes default values for [MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md).  |
| void | **[MLSpaceInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit)**([MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) * inout_info)<br></br>Initializes default values for [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md).  |
| void | **[MLSpaceListInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit)**([MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * inout_info)<br></br>Initializes default values for [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md).  |
| void | **[MLSpaceQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit)**([MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) * inout_query_filter)<br></br>Initializes the default values for a query filter.  |
| void | **[MLSpaceLocalizationInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit)**([MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) * inout_info)<br></br>Initializes the default values for localization info.  |
| void | **[MLSpaceLocalizationResultInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit)**([MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) * inout_info)<br></br>Initialize default values for [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md).  |
| void | **[MLSpaceCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacecallbacksinit)**([MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) * inout_callbacks)<br></br>Initialize defaults for [MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md).  |
| void | **[MLSpaceImportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit)**([MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) * inout_info)<br></br>Initialize default values for [MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md).  |
| void | **[MLSpaceExportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit)**([MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) * inout_info)<br></br>Initialize default values for [MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md).  |
| const char * | **[MLSpaceGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#const-char-mlspacegetresultstring)**([MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result)<br></br>Returns an ASCII string for MLSpaceResult and MLResult codes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate)**(const [MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) * settings, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a Magic Leap Space manager handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceSetCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacesetcallbacks)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) * callbacks, void * user_data)<br></br>Set the callbacks for events related to the Magic Leap Space.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceGetSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetspacelist)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) * query_filter, [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * out_space_list)<br></br>Get the list of available spaces.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceReleaseSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleasespacelist)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * space_list)<br></br>Release the list of available spaces.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceRequestLocalization](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacerequestlocalization)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) * localization_info)<br></br>Send a request to localize to a given Magic Leap Space.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceGetLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetlocalizationresult)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) * out_localization_result)<br></br>Get the localization results.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceManagerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagerdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a Space manager handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceImportSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceimportspace)**(const [MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) * import_info, [MLSpaceImportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md) * out_data)<br></br>Import a Magic Leap Space.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceExportSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace)**(const [MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) * export_info, [MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) * out_data)<br></br>Export an on device Magic Leap Space.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLSpaceReleaseExportData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleaseexportdata)**([MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) * space_data)<br></br>Release resources acquired in [MLSpaceExportSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace).  |

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


## Types Documentation

### MLSpaceManagerSettings {#struct-mlspacemanagersettings}

```cpp
typedef struct MLSpaceManagerSettings MLSpaceManagerSettings;
```

A structure containing settings for the space manager. This structure must be initialized by calling [MLSpaceManagerSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacemanagersettingsinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md)


**API Level:**
  * 26




-----------

### MLSpace {#struct-mlspace}

```cpp
typedef struct MLSpace MLSpace;
```

A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md)


**API Level:**
  * 26




-----------

### MLSpaceList {#struct-mlspacelist}

```cpp
typedef struct MLSpaceList MLSpaceList;
```

A structure containing list of [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). This structure must be initialized by calling [MLSpaceListInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelistinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md)


**API Level:**
  * 26




-----------

### MLSpaceQueryFilter {#struct-mlspacequeryfilter}

```cpp
typedef struct MLSpaceQueryFilter MLSpaceQueryFilter;
```

A collection of filters for Magic Leap Spaces. This structure must be initialized by calling [MLSpaceQueryFilterInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacequeryfilterinit) before use. There is no support for filters at this time. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md)


**API Level:**
  * 26




-----------

### MLSpaceLocalizationInfo {#struct-mlspacelocalizationinfo}

```cpp
typedef struct MLSpaceLocalizationInfo MLSpaceLocalizationInfo;
```

A collection of parameters to be used for localization request. This structure must be initialized by calling [MLSpaceLocalizationInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationinfoinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md)


**API Level:**
  * 26




-----------

### MLSpaceLocalizationResult {#struct-mlspacelocalizationresult}

```cpp
typedef struct MLSpaceLocalizationResult MLSpaceLocalizationResult;
```

A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md)


**API Level:**
  * 28




-----------

### MLSpaceCallbacks {#struct-mlspacecallbacks}

```cpp
typedef struct MLSpaceCallbacks MLSpaceCallbacks;
```

A structure containing callbacks for events related to the Space. 

This structure must be initialized by calling [MLSpaceCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacecallbacksinit) before use. Application can unregister (stop receiving callbacks) at any time by setting the corresponding callback to NULL.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md)


**API Level:**
  * 26




-----------

### MLSpaceImportInfo {#struct-mlspaceimportinfo}

```cpp
typedef struct MLSpaceImportInfo MLSpaceImportInfo;
```

A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling [MLSpaceImportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceimportinfoinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md)


**API Level:**
  * 26




-----------

### MLSpaceImportOutData {#struct-mlspaceimportoutdata}

```cpp
typedef struct MLSpaceImportOutData MLSpaceImportOutData;
```

A structure containing information about the imported Space. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md)


**API Level:**
  * 26




-----------

### MLSpaceExportInfo {#struct-mlspaceexportinfo}

```cpp
typedef struct MLSpaceExportInfo MLSpaceExportInfo;
```

A structure containing information about the Space export settings. This structure must be initialized by calling [MLSpaceExportInfoInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceexportinfoinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md)


**API Level:**
  * 26




-----------

### MLSpaceExportOutData {#struct-mlspaceexportoutdata}

```cpp
typedef struct MLSpaceExportOutData MLSpaceExportOutData;
```

A structure containing information about the exported Space. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md)


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

Initializes default values for [MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) * |inout_info|The object to initialize with default values.|
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

Initializes default values for [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) * |inout_info|The object to initialize with default values.|
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

Initializes default values for [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * |inout_info|The object to initialize with default values.|
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
| [MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) * |inout_query_filter|The filter to initialize.|
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
| [MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) * |inout_info|The object to initialize with default values.|
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

Initialize default values for [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) * |inout_info|The localization result to initialize.|
**Required Permissions**:

  * None 





**API Level:**
  * 28




-----------

### MLSpaceCallbacksInit {#void-mlspacecallbacksinit}

```cpp
static inline void MLSpaceCallbacksInit(
    MLSpaceCallbacks * inout_callbacks
)
```

Initialize defaults for [MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) * |inout_callbacks|The callback structure to initialize.|
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

Initialize default values for [MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) * |inout_info|The object to initialize with default values.|
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

Initialize default values for [MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) * |inout_info|The object to initialize with default values.|
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
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result|The input MLResult enum from [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) functions. |
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
| const [MLSpaceManagerSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_manager_settings.md) * |settings|Settings that configures the space manager. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The handle to be created.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_ClientLimitExceeded|Failed due to an existing manager. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Space manager handle was successfully created. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| const [MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) * |callbacks|Pointer to the [MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) structure containing the callbacks. |
| void * |user_data|Pointer that will be returned in the callback.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The callbacks were registered successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |



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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| const [MLSpaceQueryFilter](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_query_filter.md) * |query_filter|The filter structure for the query. |
| [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * |out_space_list|List of Spaces currently available to the device.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|List of spaces retrieved successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_ServerError|Operation failed due to server side error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_ServiceUnavailable|Operation failed because service is not ready.|
**Required Permissions**:

  * None 


The list of spaces returned will depend on the current device mapping mode. Only the Spaces associated with the current mapping mode will be returned by this call. Device mapping mode can be changed via the system application(s).

The list memory is owned by the library, call [MLSpaceReleaseSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleasespacelist) to release the memory. Each get [MLSpaceGetSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetspacelist) should have a corresponding [MLSpaceReleaseSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleasespacelist).




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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| [MLSpaceList](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_list.md) * |space_list|List Magic Leap Spaces that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|List resources was successfully released. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| const [MLSpaceLocalizationInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_info.md) * |localization_info|Magic Leap Space to localize into.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Localization request was submitted successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_UnavailableSpace|Operation failed due an unavailable Space. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_ServerError|Operation failed due to server side error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_ServiceUnavailable|Operation failed because service is not ready.|
**Required Permissions**:

  * None 


This is an asynchronous request. Use [MLSpaceGetLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacegetlocalizationresult) to get the results of the localization or use [MLSpaceCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md) to listen to on_localization_changed events.

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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Space manager handle created by [MLSpaceManagerCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacemanagercreate). |
| [MLSpaceLocalizationResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md) * |out_localization_result|Contains the result of the localization request.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Localization result was retrieved successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
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
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to be destroyed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Space manager handle was successfully destroyed.|
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
| const [MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) * |import_info|Information need to import the space. |
| [MLSpaceImportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_out_data.md) * |out_data|Information about the imported space.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_IncompatibleSpace|Operation failed due an incompatible Space. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_SpaceAlreadyExists|Operation failed because Space being imported already exists.|
**Required Permissions**:

  * com.magicleap.permission.SPACE_IMPORT_EXPORT (protection level: dangerous) 


The [MLSpaceImportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_import_info.md) memory is owned by the app and the app should make sure to release the memory once the API call has returned.




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
| const [MLSpaceExportInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_info.md) * |export_info|Information needed to export the space. |
| [MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) * |out_data|Exported space data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLSpaceResult_UnavailableSpace|Operation failed due an unavailable Space.|
**Required Permissions**:

  * com.magicleap.permission.SPACE_IMPORT_EXPORT (protection level: dangerous) 


The [MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) is owned by the library, call [MLSpaceReleaseExportData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleaseexportdata) to release the memory. Each [MLSpaceExportSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace) call should have a corresponding [MLSpaceReleaseExportData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacereleaseexportdata).




**API Level:**
  * 26




-----------

### MLSpaceReleaseExportData {#mlresult-mlspacereleaseexportdata}

```cpp
MLResult MLSpaceReleaseExportData(
    MLSpaceExportOutData * space_data
)
```

Release resources acquired in [MLSpaceExportSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspaceexportspace). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) * |space_data|[MLSpaceExportOutData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_export_out_data.md) that needs to be released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|List resources was successfully released. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * None 





**API Level:**
  * 26




-----------






