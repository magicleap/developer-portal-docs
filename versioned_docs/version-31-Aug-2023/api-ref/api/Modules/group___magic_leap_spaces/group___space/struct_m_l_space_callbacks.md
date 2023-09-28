---
title: MLSpaceCallbacks
summary: a structure containing callbacks for events related to the space. 

---

# MLSpaceCallbacks

**Module:** **[Magic Leap Spaces](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___magic_leap_spaces.md)** **/** **[Space](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md)**



A structure containing callbacks for events related to the Space.  [More...](#detailed-description)


`#include <ml_space.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md#uint32-t-version)**  |
| void(*)(const MLSpaceLocalizationResult *localization_result, void *user_data) | **[on_localization_changed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/struct_m_l_space_callbacks.md#void-on-localization-changed)** <br></br>This callback will be invoked whenever there is an update to the localization status.  |

## Detailed Description

```cpp
struct MLSpaceCallbacks;
```

A structure containing callbacks for events related to the Space. 

This structure must be initialized by calling [MLSpaceCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#void-mlspacecallbacksinit) before use. Application can unregister (stop receiving callbacks) at any time by setting the corresponding callback to NULL.




**API Level:**
  * 26




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of the structure. 





-----------

### on_localization_changed {#void-on-localization-changed}

```cpp
void(*)(const MLSpaceLocalizationResult *localization_result, void *user_data) on_localization_changed;
```

This callback will be invoked whenever there is an update to the localization status. 


| Type | Description |
|--|--|
| void(*)(const MLSpaceLocalizationResult *localization_result, void *user_data) | )(const MLSpaceLocalizationResult *localization_result, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |localization_result|Information about the localization status. |
|  |user_data|Pointer to user context data as set by [MLSpaceSetCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacesetcallbacks) (can be NULL). |
Localization events can occur when the application requests for localization via [MLSpaceRequestLocalization](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___space/group___space.md#mlresult-mlspacerequestlocalization) or due to other events outside the control of the app such as head tracking failure, localization loss.





-----------


