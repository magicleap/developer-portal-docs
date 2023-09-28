---
title: MLSpaceLocalizationResult
summary: a structure containing information about the device's localization state. this structure must be initialized by calling mlspacelocalizationresultinit before use. 

---

# MLSpaceLocalizationResult

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#uint32-t-version)**  |
| [MLSpaceLocalizationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus) | **[localization_status](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#mlspacelocalizationstatus-localization-status)**  |
| [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) | **[space](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#mlspace-space)** <br></br>Space information. If localized ([MLSpaceLocalizationStatus_Localized](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-localized)) this will contain valid Space information. If not localized this field should be ignored.  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[target_space_origin](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#mlcoordinateframeuid-target-space-origin)** <br></br>Target space's origin relative to world origin. If localized this will contain the identifier of the transform of the target space's origin relative to the world origin. If not localized this will be null.  |

## Detailed Description

```cpp
struct MLSpaceLocalizationResult;
```

A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use. 




**API Level:**
  * 28




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of the structure. 





-----------

### localization_status {#mlspacelocalizationstatus-localization-status}

```cpp
MLSpaceLocalizationStatus localization_status;
```



| Type | Description |
|--|--|
| [MLSpaceLocalizationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus) | The current localization status.  |


The localization status at the time this structure was returned. 





-----------

### space {#mlspace-space}

```cpp
MLSpace space;
```

Space information. If localized ([MLSpaceLocalizationStatus_Localized](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-localized)) this will contain valid Space information. If not localized this field should be ignored. 


| Type | Description |
|--|--|
| [MLSpace](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) | A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use.  |






-----------

### target_space_origin {#mlcoordinateframeuid-target-space-origin}

```cpp
MLCoordinateFrameUID target_space_origin;
```

Target space's origin relative to world origin. If localized this will contain the identifier of the transform of the target space's origin relative to the world origin. If not localized this will be null. 





-----------


