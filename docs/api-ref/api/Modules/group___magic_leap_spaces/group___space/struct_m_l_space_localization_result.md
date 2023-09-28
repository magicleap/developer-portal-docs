---
title: MLSpaceLocalizationResult
summary: a structure containing information about the device's localization state. this structure must be initialized by calling mlspacelocalizationresultinit before use. 

---

# MLSpaceLocalizationResult

**Module:** **[Magic Leap Spaces](/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#uint32-t-version)**  |
| [MLSpaceLocalizationStatus](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus) | **[localization_status](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#mlspacelocalizationstatus-localization-status)**  |
| [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) | **[space](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#mlspace-space)** <br></br>Space information. If localized ([MLSpaceLocalizationStatus_Localized](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-localized)) this will contain valid Space information. If not localized this field should be ignored.  |
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[target_space_origin](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#mlcoordinateframeuid-target-space-origin)** <br></br>Target space's origin relative to world origin. If localized this will contain the identifier of the transform of the target space's origin relative to the world origin. If not localized this will be null.  |
| [MLSpaceLocalizationConfidence](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationconfidence) | **[localization_confidence](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#mlspacelocalizationconfidence-localization-confidence)**  |
| uint32_t | **[error](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_localization_result.md#uint32-t-error)**  |

## Detailed Description

```cpp
struct MLSpaceLocalizationResult;
```

A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacelocalizationresultinit) before use. 




**API Level:**
  * 31




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
| [MLSpaceLocalizationStatus](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus) | The current localization status.  |


The localization status at the time this structure was returned. 





-----------

### space {#mlspace-space}

```cpp
MLSpace space;
```

Space information. If localized ([MLSpaceLocalizationStatus_Localized](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationstatus-localized)) this will contain valid Space information. If not localized this field should be ignored. 


| Type | Description |
|--|--|
| [MLSpace](/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space.md) | A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspaceinit) before use.  |






-----------

### target_space_origin {#mlcoordinateframeuid-target-space-origin}

```cpp
MLCoordinateFrameUID target_space_origin;
```

Target space's origin relative to world origin. If localized this will contain the identifier of the transform of the target space's origin relative to the world origin. If not localized this will be null. 





-----------

### localization_confidence {#mlspacelocalizationconfidence-localization-confidence}

```cpp
MLSpaceLocalizationConfidence localization_confidence;
```



| Type | Description |
|--|--|
| [MLSpaceLocalizationConfidence](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enums-mlspacelocalizationconfidence) | The confidence of the current localization.  |


The confidence level of this localization result. 





-----------

### error {#uint32-t-error}

```cpp
uint32_t error;
```


Represents a bitmask of [MLSpaceLocalizationErrorFlag](/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#enum-mlspacelocalizationerrorflag). 





-----------

