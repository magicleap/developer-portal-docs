---
title: MLFacialExpressionSettings
summary: a structure containing settings for the facial expressions. this structure must be initialized by calling mlfacialexpressionsettingsinit before use. 

---

# MLFacialExpressionSettings

**Module:** **[Facial Expression](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md)**



A structure containing settings for the facial expressions. This structure must be initialized by calling [MLFacialExpressionSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit) before use.  [More...](#detailed-description)


`#include <ml_facial_expression.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md#uint32-t-version)**  |
| bool | **[enable_eye_expression](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md#bool-enable-eye-expression)** <br></br>Enable [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md).  |

## Detailed Description

```cpp
struct MLFacialExpressionSettings;
```

A structure containing settings for the facial expressions. This structure must be initialized by calling [MLFacialExpressionSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit) before use. 




**API Level:**
  * 29




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this settings. 





-----------

### enable_eye_expression {#bool-enable-eye-expression}

```cpp
bool enable_eye_expression;
```

Enable [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md). 

If true, facial expressions will detect [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) and the same can queried using [MLFacialExpressionGetEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiongeteyedata).

This should be disabled when app does not need facial expression data. Internal state of the system will be maintained. 





-----------


