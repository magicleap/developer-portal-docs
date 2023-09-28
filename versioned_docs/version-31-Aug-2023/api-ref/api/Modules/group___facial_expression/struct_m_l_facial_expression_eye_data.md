---
title: MLFacialExpressionEyeData
summary: a structure containing information about facial expressions. this structure must be initialized by calling mlfacialexpressioneyedatainit before use. 

---

# MLFacialExpressionEyeData

**Module:** **[Facial Expression](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md)**



A structure containing information about facial expressions. This structure must be initialized by calling [MLFacialExpressionEyeDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit) before use.  [More...](#detailed-description)


`#include <ml_facial_expression.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md#uint32-t-version)**  |
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md#mltime-timestamp)**  |
| float[MLFacialExpressionEyeExpressionType_Count] | **[eye_expression_weights](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md#float-eye-expression-weights)** <br></br>Eye expression weights. The values are between 0 and 1 and ordered such that the array should be indexed using [MLFacialExpressionEyeExpressionType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enum-mlfacialexpressioneyeexpressiontype).  |

## Detailed Description

```cpp
struct MLFacialExpressionEyeData;
```

A structure containing information about facial expressions. This structure must be initialized by calling [MLFacialExpressionEyeDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit) before use. 




**API Level:**
  * 29




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of the structure. 





-----------

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```


The [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) timestamp when expression data was updated. 





-----------

### eye_expression_weights {#float-eye-expression-weights}

```cpp
float[MLFacialExpressionEyeExpressionType_Count] eye_expression_weights;
```

Eye expression weights. The values are between 0 and 1 and ordered such that the array should be indexed using [MLFacialExpressionEyeExpressionType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enum-mlfacialexpressioneyeexpressiontype). 


| Type | Description |
|--|--|
| float[MLFacialExpressionEyeExpressionType_Count] | [MLFacialExpressionEyeExpressionType_Count] |






-----------


