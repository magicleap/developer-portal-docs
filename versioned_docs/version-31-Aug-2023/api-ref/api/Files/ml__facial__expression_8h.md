---
title: ml_facial_expression.h

---

# ml_facial_expression.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md)** <br></br>A structure containing information about facial expressions. This structure must be initialized by calling [MLFacialExpressionEyeDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit) before use.  |
| struct | **[MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md)** <br></br>A structure containing settings for the facial expressions. This structure must be initialized by calling [MLFacialExpressionSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit) before use.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) | **[MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#struct-mlfacialexpressioneyedata)** <br></br>A structure containing information about facial expressions. This structure must be initialized by calling [MLFacialExpressionEyeDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit) before use.  |
| typedef struct [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) | **[MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#struct-mlfacialexpressionsettings)** <br></br>A structure containing settings for the facial expressions. This structure must be initialized by calling [MLFacialExpressionSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit) before use.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 9](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-anonymous-enum-9)** <br></br> { <br></br>[MLResultAPIPrefix_FacialExpression](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlresultapiprefix-facialexpression) = ( 0x18cd  << 16)<br></br>} |
| enum | **[MLFacialExpressionResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressionresult)** <br></br> { <br></br>[MLFacialExpressionResult_HeadsetFitIssue](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressionresult-headsetfitissue) = MLResultAPIPrefix_FacialExpression,<br></br> [MLFacialExpressionResult_EyeExpressionDisabled](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressionresult-eyeexpressiondisabled),<br></br> [MLFacialExpressionResult_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressionresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Facial expression specific return codes.  |
| enum | **[MLFacialExpressionEyeExpressionType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype)** <br></br> { <br></br>[MLFacialExpressionEyeExpressionType_Blink_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-blink-left) = 0,<br></br> [MLFacialExpressionEyeExpressionType_Blink_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-blink-right) = 1,<br></br> [MLFacialExpressionEyeExpressionType_Lid_Tightener_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-lid-tightener-left) = 2,<br></br> [MLFacialExpressionEyeExpressionType_Lid_Tightener_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-lid-tightener-right) = 3,<br></br> [MLFacialExpressionEyeExpressionType_Eye_Openness_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-eye-openness-left) = 4,<br></br> [MLFacialExpressionEyeExpressionType_Eye_Openness_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-eye-openness-right) = 5,<br></br> [MLFacialExpressionEyeExpressionType_Cheek_Raiser_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-cheek-raiser-left) = 6,<br></br> [MLFacialExpressionEyeExpressionType_Cheek_Raiser_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-cheek-raiser-right) = 7,<br></br> [MLFacialExpressionEyeExpressionType_Brow_Lowerer_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-brow-lowerer-left) = 8,<br></br> [MLFacialExpressionEyeExpressionType_Brow_Lowerer_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-brow-lowerer-right) = 9,<br></br> [MLFacialExpressionEyeExpressionType_Brow_Raiser_Left](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-brow-raiser-left) = 10,<br></br> [MLFacialExpressionEyeExpressionType_Brow_Raiser_Right](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-brow-raiser-right) = 11,<br></br> [MLFacialExpressionEyeExpressionType_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-count) = 12,<br></br> [MLFacialExpressionEyeExpressionType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__facial__expression_8h.md#enums-mlfacialexpressioneyeexpressiontype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Available facial expressions.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLFacialExpressionEyeDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit)**([MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) * inout_eye_data)<br></br>Initializes default values for [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md).  |
| void | **[MLFacialExpressionSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit)**([MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * inout_settings)<br></br>Initializes default values for [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md).  |
| const char * | **[MLFacialExpressionGetResultString](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#const-char-mlfacialexpressiongetresultstring)**([MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result)<br></br>Returns an ASCII string for MLFacialExpressionResult and MLResult codes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLFacialExpressionCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient)**(const [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * settings, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a Facial expression client handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLFacialExpressionUpdateSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressionupdatesettings)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * settings)<br></br>Update the Facial expression system with new settings.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLFacialExpressionGetEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiongeteyedata)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) * out_eye_data)<br></br>Get facial expressions data.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLFacialExpressionDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiondestroyclient)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy client handle and free client resources.  |

## Enums Documentation

### Anonymous Enum 9 {#enums-anonymous-enum-9}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_FacialExpression |  ( 0x18cd  << 16)| Defines the prefix for MLFacialExpressionResult codes. |








-----------

### MLFacialExpressionResult {#enums-mlfacialexpressionresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLFacialExpressionResult_HeadsetFitIssue |  MLResultAPIPrefix_FacialExpression| Unable to detect the eyes, check MLHeadsetFitStatus. |
| MLFacialExpressionResult_EyeExpressionDisabled | | Operation failed because enable_eye_expression in [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) is disabled. |
| MLFacialExpressionResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Facial expression specific return codes. 




**API Level:**
  * 29




-----------

### MLFacialExpressionEyeExpressionType {#enums-mlfacialexpressioneyeexpressiontype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLFacialExpressionEyeExpressionType_Blink_Left |  0| Blinking the left eye. |
| MLFacialExpressionEyeExpressionType_Blink_Right |  1| Blinking the right eye. |
| MLFacialExpressionEyeExpressionType_Lid_Tightener_Left |  2| Lower Lid upward movement of the left eye. |
| MLFacialExpressionEyeExpressionType_Lid_Tightener_Right |  3| Lower Lid upward movement of the right eye. |
| MLFacialExpressionEyeExpressionType_Eye_Openness_Left |  4| Upper lid upward movement of the left eye. |
| MLFacialExpressionEyeExpressionType_Eye_Openness_Right |  5| Upper lid upward movement of the right eye. |
| MLFacialExpressionEyeExpressionType_Cheek_Raiser_Left |  6| Upward cheek movement, left. |
| MLFacialExpressionEyeExpressionType_Cheek_Raiser_Right |  7| Upward cheek movement, right. |
| MLFacialExpressionEyeExpressionType_Brow_Lowerer_Left |  8| Downward brow movement, left. |
| MLFacialExpressionEyeExpressionType_Brow_Lowerer_Right |  9| Downward brow movement, right. |
| MLFacialExpressionEyeExpressionType_Brow_Raiser_Left |  10| Upward brow movement, left side. |
| MLFacialExpressionEyeExpressionType_Brow_Raiser_Right |  11| Upward brow movement, right side. |
| MLFacialExpressionEyeExpressionType_Count |  12| Number of eye expression types. |
| MLFacialExpressionEyeExpressionType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Available facial expressions. 




**API Level:**
  * 29




-----------


## Types Documentation

### MLFacialExpressionEyeData {#struct-mlfacialexpressioneyedata}

```cpp
typedef struct MLFacialExpressionEyeData MLFacialExpressionEyeData;
```

A structure containing information about facial expressions. This structure must be initialized by calling [MLFacialExpressionEyeDataInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md)


**API Level:**
  * 29




-----------

### MLFacialExpressionSettings {#struct-mlfacialexpressionsettings}

```cpp
typedef struct MLFacialExpressionSettings MLFacialExpressionSettings;
```

A structure containing settings for the facial expressions. This structure must be initialized by calling [MLFacialExpressionSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit) before use. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md)


**API Level:**
  * 29




-----------


## Functions Documentation

### MLFacialExpressionEyeDataInit {#void-mlfacialexpressioneyedatainit}

```cpp
static inline void MLFacialExpressionEyeDataInit(
    MLFacialExpressionEyeData * inout_eye_data
)
```

Initializes default values for [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) * |inout_eye_data|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------

### MLFacialExpressionSettingsInit {#void-mlfacialexpressionsettingsinit}

```cpp
static inline void MLFacialExpressionSettingsInit(
    MLFacialExpressionSettings * inout_settings
)
```

Initializes default values for [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * |inout_settings|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------

### MLFacialExpressionGetResultString {#const-char-mlfacialexpressiongetresultstring}

```cpp
const char * MLFacialExpressionGetResultString(
    MLResult result
)
```

Returns an ASCII string for MLFacialExpressionResult and MLResult codes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result|The input MLResult enum from MLFacialExpression functions.|
**Required Permissions**:

  * None 




**Return**: ASCII string containing readable version of result code.


**API Level:**
  * 29




-----------

### MLFacialExpressionCreateClient {#mlresult-mlfacialexpressioncreateclient}

```cpp
MLResult MLFacialExpressionCreateClient(
    const MLFacialExpressionSettings * settings,
    MLHandle * out_handle
)
```

Creates a Facial expression client handle. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * |settings|Settings that configures the facial expressions system. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The handle to be created.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Facial expression client was created successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * com.magicleap.permission.FACIAL_EXPRESSION (protection level: dangerous) 


Although multiple client handles can be created they all represent the same facial expressions backend system.




**API Level:**
  * 29




-----------

### MLFacialExpressionUpdateSettings {#mlresult-mlfacialexpressionupdatesettings}

```cpp
MLResult MLFacialExpressionUpdateSettings(
    MLHandle handle,
    const MLFacialExpressionSettings * settings
)
```

Update the Facial expression system with new settings. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Facial expression client handle created by [MLFacialExpressionCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient). |
| const [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * |settings|New Facial expression settings.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Facial expression settings was updated successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------

### MLFacialExpressionGetEyeData {#mlresult-mlfacialexpressiongeteyedata}

```cpp
MLResult MLFacialExpressionGetEyeData(
    MLHandle handle,
    MLFacialExpressionEyeData * out_eye_data
)
```

Get facial expressions data. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Facial expression client handle created by [MLFacialExpressionCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient). |
| [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) * |out_eye_data|Eye expressions data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Facial expression data was retrieved successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLFacialExpressionResult_HeadsetFitIssue|Operation failed because unable to detect the eyes, check [MLHeadsetFitStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#enum-mlheadsetfitstatus).|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------

### MLFacialExpressionDestroyClient {#mlresult-mlfacialexpressiondestroyclient}

```cpp
MLResult MLFacialExpressionDestroyClient(
    MLHandle handle
)
```

Destroy client handle and free client resources. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Facial expression client handle created by [MLFacialExpressionCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Client handle was successfully destroyed. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2023 Magic Leap, Inc. All Rights Reserved.
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
#include "ml_types.h"

#include <string.h>

ML_EXTERN_C_BEGIN

enum {
  MLResultAPIPrefix_FacialExpression = MLRESULT_PREFIX(0x18cd),
};
typedef enum MLFacialExpressionResult {
  MLFacialExpressionResult_HeadsetFitIssue = MLResultAPIPrefix_FacialExpression,
  MLFacialExpressionResult_EyeExpressionDisabled,
  MLFacialExpressionResult_Ensure32Bits = 0x7FFFFFFF
} MLFacialExpressionResult;

typedef enum MLFacialExpressionEyeExpressionType {
  MLFacialExpressionEyeExpressionType_Blink_Left = 0,
  MLFacialExpressionEyeExpressionType_Blink_Right = 1,
  MLFacialExpressionEyeExpressionType_Lid_Tightener_Left = 2,
  MLFacialExpressionEyeExpressionType_Lid_Tightener_Right = 3,
  MLFacialExpressionEyeExpressionType_Eye_Openness_Left = 4,
  MLFacialExpressionEyeExpressionType_Eye_Openness_Right = 5,
  MLFacialExpressionEyeExpressionType_Cheek_Raiser_Left = 6,
  MLFacialExpressionEyeExpressionType_Cheek_Raiser_Right = 7,
  MLFacialExpressionEyeExpressionType_Brow_Lowerer_Left = 8,
  MLFacialExpressionEyeExpressionType_Brow_Lowerer_Right = 9,
  MLFacialExpressionEyeExpressionType_Brow_Raiser_Left = 10,
  MLFacialExpressionEyeExpressionType_Brow_Raiser_Right = 11,
  MLFacialExpressionEyeExpressionType_Count = 12,
  MLFacialExpressionEyeExpressionType_Ensure32Bits = 0x7FFFFFFF
} MLFacialExpressionEyeExpressionType;

typedef struct MLFacialExpressionEyeData {
  uint32_t version;
  MLTime timestamp;
  float eye_expression_weights[MLFacialExpressionEyeExpressionType_Count];
} MLFacialExpressionEyeData;

ML_STATIC_INLINE void MLFacialExpressionEyeDataInit(MLFacialExpressionEyeData *inout_eye_data) {
  if (inout_eye_data) {
    memset(inout_eye_data, 0, sizeof(MLFacialExpressionEyeData));
    inout_eye_data->version = 1u;
  }
}

typedef struct MLFacialExpressionSettings {
  uint32_t version;
  bool enable_eye_expression;
} MLFacialExpressionSettings;

ML_STATIC_INLINE void MLFacialExpressionSettingsInit(MLFacialExpressionSettings *inout_settings) {
  if (inout_settings) {
    memset(inout_settings, 0, sizeof(MLFacialExpressionSettings));
    inout_settings->version = 1u;
    inout_settings->enable_eye_expression = true;
  }
}

ML_API const char *ML_CALL MLFacialExpressionGetResultString(MLResult result);

ML_API MLResult ML_CALL MLFacialExpressionCreateClient(const MLFacialExpressionSettings *settings, MLHandle *out_handle);

ML_API MLResult ML_CALL MLFacialExpressionUpdateSettings(MLHandle handle, const MLFacialExpressionSettings *settings);

ML_API MLResult ML_CALL MLFacialExpressionGetEyeData(MLHandle handle, MLFacialExpressionEyeData *out_eye_data);

ML_API MLResult ML_CALL MLFacialExpressionDestroyClient(MLHandle handle);

ML_EXTERN_C_END
```




