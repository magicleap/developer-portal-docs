---
title: Facial Expression
summary: apis for facial expression. 

---

# Facial Expression

APIs for facial expression.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md)** <br></br>A structure containing information about facial expressions. This structure must be initialized by calling [MLFacialExpressionEyeDataInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit) before use.  |
| struct | **[MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md)** <br></br>A structure containing settings for the facial expressions. This structure must be initialized by calling [MLFacialExpressionSettingsInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit) before use.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) | **[MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#struct-mlfacialexpressioneyedata)** <br></br>A structure containing information about facial expressions. This structure must be initialized by calling [MLFacialExpressionEyeDataInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit) before use.  |
| typedef struct [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) | **[MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#struct-mlfacialexpressionsettings)** <br></br>A structure containing settings for the facial expressions. This structure must be initialized by calling [MLFacialExpressionSettingsInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit) before use.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 9](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-anonymous-enum-9)** <br></br> { <br></br>[MLResultAPIPrefix_FacialExpression](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlresultapiprefix-facialexpression) = ( 0x18cd  << 16)<br></br>} |
| enum | **[MLFacialExpressionResult](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressionresult)** <br></br> { <br></br>[MLFacialExpressionResult_HeadsetFitIssue](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressionresult-headsetfitissue) = MLResultAPIPrefix_FacialExpression,<br></br> [MLFacialExpressionResult_EyeExpressionDisabled](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressionresult-eyeexpressiondisabled),<br></br> [MLFacialExpressionResult_Ensure32Bits](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressionresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Facial expression specific return codes.  |
| enum | **[MLFacialExpressionEyeExpressionType](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype)** <br></br> { <br></br>[MLFacialExpressionEyeExpressionType_Blink_Left](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-blink-left) = 0,<br></br> [MLFacialExpressionEyeExpressionType_Blink_Right](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-blink-right) = 1,<br></br> [MLFacialExpressionEyeExpressionType_Lid_Tightener_Left](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-lid-tightener-left) = 2,<br></br> [MLFacialExpressionEyeExpressionType_Lid_Tightener_Right](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-lid-tightener-right) = 3,<br></br> [MLFacialExpressionEyeExpressionType_Eye_Openness_Left](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-eye-openness-left) = 4,<br></br> [MLFacialExpressionEyeExpressionType_Eye_Openness_Right](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-eye-openness-right) = 5,<br></br> [MLFacialExpressionEyeExpressionType_Cheek_Raiser_Left](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-cheek-raiser-left) = 6,<br></br> [MLFacialExpressionEyeExpressionType_Cheek_Raiser_Right](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-cheek-raiser-right) = 7,<br></br> [MLFacialExpressionEyeExpressionType_Brow_Lowerer_Left](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-brow-lowerer-left) = 8,<br></br> [MLFacialExpressionEyeExpressionType_Brow_Lowerer_Right](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-brow-lowerer-right) = 9,<br></br> [MLFacialExpressionEyeExpressionType_Brow_Raiser_Left](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-brow-raiser-left) = 10,<br></br> [MLFacialExpressionEyeExpressionType_Brow_Raiser_Right](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-brow-raiser-right) = 11,<br></br> [MLFacialExpressionEyeExpressionType_Count](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-count) = 12,<br></br> [MLFacialExpressionEyeExpressionType_Ensure32Bits](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#enums-mlfacialexpressioneyeexpressiontype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Available facial expressions.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLFacialExpressionEyeDataInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit)**([MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) * inout_eye_data)<br></br>Initializes default values for [MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md).  |
| void | **[MLFacialExpressionSettingsInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit)**([MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * inout_settings)<br></br>Initializes default values for [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md).  |
| const char * | **[MLFacialExpressionGetResultString](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#const-char-mlfacialexpressiongetresultstring)**([MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result)<br></br>Returns an ASCII string for MLFacialExpressionResult and MLResult codes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLFacialExpressionCreateClient](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient)**(const [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * settings, [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a Facial expression client handle.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLFacialExpressionUpdateSettings](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressionupdatesettings)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * settings)<br></br>Update the Facial expression system with new settings.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLFacialExpressionGetEyeData](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiongeteyedata)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) * out_eye_data)<br></br>Get facial expressions data.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLFacialExpressionDestroyClient](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressiondestroyclient)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy client handle and free client resources.  |

## Detailed Description

APIs for facial expression. 


Avatar animation is the primary purpose for the API. Currently the API will produce symmetrical eye expression data (e.g. blinks). In the subsequent OS releases asymmetrical eye expressions like winks will be supported. 




**Shared Object:**
  * perception.magicleap*




-----------
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
| MLFacialExpressionResult_EyeExpressionDisabled | | Operation failed because enable_eye_expression in [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) is disabled. |
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

A structure containing information about facial expressions. This structure must be initialized by calling [MLFacialExpressionEyeDataInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressioneyedatainit) before use. 



[More Info](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md)


**API Level:**
  * 29




-----------

### MLFacialExpressionSettings {#struct-mlfacialexpressionsettings}

```cpp
typedef struct MLFacialExpressionSettings MLFacialExpressionSettings;
```

A structure containing settings for the facial expressions. This structure must be initialized by calling [MLFacialExpressionSettingsInit](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#void-mlfacialexpressionsettingsinit) before use. 



[More Info](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md)


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

Initializes default values for [MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) * |inout_eye_data|The object to initialize with default values.|
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

Initializes default values for [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * |inout_settings|The object to initialize with default values.|
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
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result|The input MLResult enum from MLFacialExpression functions.|
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
| const [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * |settings|Settings that configures the facial expressions system. |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|The handle to be created.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Facial expression client was created successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Necessary permission is missing. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Facial expression client handle created by [MLFacialExpressionCreateClient](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient). |
| const [MLFacialExpressionSettings](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_settings.md) * |settings|New Facial expression settings.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Facial expression settings was updated successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Facial expression client handle created by [MLFacialExpressionCreateClient](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient). |
| [MLFacialExpressionEyeData](/api-ref/api/Modules/group___facial_expression/struct_m_l_facial_expression_eye_data.md) * |out_eye_data|Eye expressions data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Facial expression data was retrieved successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLFacialExpressionResult_HeadsetFitIssue|Operation failed because unable to detect the eyes, check [MLHeadsetFitStatus](/api-ref/api/Modules/group___headset_fit/group___headset_fit.md#enum-mlheadsetfitstatus).|
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
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Facial expression client handle created by [MLFacialExpressionCreateClient](/api-ref/api/Modules/group___facial_expression/group___facial_expression.md#mlresult-mlfacialexpressioncreateclient).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One or more input parameters are not valid. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Client handle was successfully destroyed. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Operation failed for unknown reason.|
**Required Permissions**:

  * None 





**API Level:**
  * 29




-----------





