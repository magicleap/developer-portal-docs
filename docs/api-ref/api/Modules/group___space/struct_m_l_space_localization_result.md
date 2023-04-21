---
title: MLSpaceLocalizationResult
summary: a structure containing information about the device's localization state. this structure must be initialized by calling mlspacelocalizationresultinit before use. 

---

# MLSpaceLocalizationResult

**Module:** **[Space](/api-ref/api/Modules/group___space/group___space.md)**



A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___space/group___space.md#void-mlspacelocalizationresultinit) before use.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___space/struct_m_l_space_localization_result.md#uint32-t-version)**  |
| [MLSpaceLocalizationStatus](/api-ref/api/Modules/group___space/group___space.md#enums-mlspacelocalizationstatus) | **[localization_status](/api-ref/api/Modules/group___space/struct_m_l_space_localization_result.md#mlspacelocalizationstatus-localization-status)**  |
| [MLSpace](/api-ref/api/Modules/group___space/struct_m_l_space.md) | **[space](/api-ref/api/Modules/group___space/struct_m_l_space_localization_result.md#mlspace-space)** <br></br>Space information. If localized ([MLSpaceLocalizationStatus_Localized](/api-ref/api/Modules/group___space/group___space.md#enums-mlspacelocalizationstatus-localized)) this will contain valid Space information. If not localized this field should be ignored.  |

## Detailed Description

```cpp
struct MLSpaceLocalizationResult;
```

A structure containing information about the device's localization state. This structure must be initialized by calling [MLSpaceLocalizationResultInit](/api-ref/api/Modules/group___space/group___space.md#void-mlspacelocalizationresultinit) before use. 




**API Level:\n 26**
  * 




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
| [MLSpaceLocalizationStatus](/api-ref/api/Modules/group___space/group___space.md#enums-mlspacelocalizationstatus) | The current localization status.  |


The localization status at the time this structure was returned. 





-----------

### space {#mlspace-space}

```cpp
MLSpace space;
```

Space information. If localized ([MLSpaceLocalizationStatus_Localized](/api-ref/api/Modules/group___space/group___space.md#enums-mlspacelocalizationstatus-localized)) this will contain valid Space information. If not localized this field should be ignored. 


| Type | Description |
|--|--|
| [MLSpace](/api-ref/api/Modules/group___space/struct_m_l_space.md) | A structure containing information about a Magic Leap Space. This structure must be initialized by calling [MLSpaceInit](/api-ref/api/Modules/group___space/group___space.md#void-mlspaceinit) before use.  |






-----------

