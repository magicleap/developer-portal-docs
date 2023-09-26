---
title: MLInputCustomHapticsInfo
summary: or pre-defined patterns to be played. 

---

# MLInputCustomHapticsInfo

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing a list of Buzz command and/or pre-defined patterns to be played.  [More...](#detailed-description)


`#include <ml_input.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md#uint32-t-version)**  |
| [MLInputCustomHaptics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md) * | **[custom](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md#mlinputcustomhaptics-custom)**  |
| uint32_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md#uint32-t-size)**  |

## Detailed Description

```cpp
struct MLInputCustomHapticsInfo;
```

A structure containing a list of Buzz command and/or pre-defined patterns to be played. 


A custom haptics pattern can be played by combining Buzz haptic command and/or a pre-defined pattern, this structure holds a list of such a combination. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of the structure. 





-----------

### custom {#mlinputcustomhaptics-custom}

```cpp
MLInputCustomHaptics * custom;
```



| Type | Description |
|--|--|
| [MLInputCustomHaptics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md) * | A structure containing information about the Buzz command and/or pre-defined pattern to be played.  |


An array containing the list of buzz command and/or pre-defined patterns.

Memory of this variable is managed by user. 





-----------

### size {#uint32-t-size}

```cpp
uint32_t size;
```


Size of the array. 





-----------


