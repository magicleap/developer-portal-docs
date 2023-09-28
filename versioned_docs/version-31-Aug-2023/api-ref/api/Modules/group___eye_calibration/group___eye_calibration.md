---
title: Eye Calibration
summary: apis for querying the eye calibration state. 

---

# Eye Calibration

APIs for querying the eye calibration state.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md)** <br></br>A struct representing the eye calibration state.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) | **[MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#struct-mleyecalibrationstate)** <br></br>A struct representing the eye calibration state.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLEyeCalibrationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#enums-mleyecalibrationstatus)** <br></br> { <br></br>[MLEyeCalibrationStatus_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#enums-mleyecalibrationstatus-none) = 0,<br></br> [MLEyeCalibrationStatus_Coarse](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#enums-mleyecalibrationstatus-coarse) = 1,<br></br> [MLEyeCalibrationStatus_Fine](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#enums-mleyecalibrationstatus-fine) = 2,<br></br> [MLEyeCalibrationStatus_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#enums-mleyecalibrationstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible eye calibration codes that the eye calibration system can report.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLEyeCalibrationStateInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#void-mleyecalibrationstateinit)**([MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) * inout_state)<br></br>Initialize [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) with version.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeCalibrationCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationcreateclient)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates an eye calibration client.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeCalibrationDestroyClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationdestroyclient)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys an eye calibration client.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLEyeCalibrationGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationgetstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) * out_state)<br></br>Gets information about the user's current eye calibration.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#uint32-t-version)**  |
| [MLEyeCalibrationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#enums-mleyecalibrationstatus) | **[eye_calibration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mleyecalibrationstatus-eye-calibration)**  |
| int64_t | **[epoch_timestamp_us](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#int64-t-epoch-timestamp-us)**  |

## Detailed Description

APIs for querying the eye calibration state. 




**Shared Object:**
  * perception.magicleap*




-----------
## Enums Documentation

### MLEyeCalibrationStatus {#enums-mleyecalibrationstatus}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLEyeCalibrationStatus_None |  0| No valid calibration was found for eyes. |
| MLEyeCalibrationStatus_Coarse |  1| Calibration is of lower accuracy. |
| MLEyeCalibrationStatus_Fine |  2| Calibration is of higher accuracy. |
| MLEyeCalibrationStatus_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible eye calibration codes that the eye calibration system can report. 

Has a calibration occurred. If so, what was the granularity.




**API Level:**
  * 20




-----------


## Types Documentation

### MLEyeCalibrationState {#struct-mleyecalibrationstate}

```cpp
typedef struct MLEyeCalibrationState MLEyeCalibrationState;
```

A struct representing the eye calibration state. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLEyeCalibrationStateInit {#void-mleyecalibrationstateinit}

```cpp
static inline void MLEyeCalibrationStateInit(
    MLEyeCalibrationState * inout_state
)
```

Initialize [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) with version. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) * |inout_state|Set up the version for inout_state and zero all other fields. |



**API Level:**
  * 20




-----------

### MLEyeCalibrationCreateClient {#mlresult-mleyecalibrationcreateclient}

```cpp
MLResult MLEyeCalibrationCreateClient(
    MLHandle * out_handle
)
```

Creates an eye calibration client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an MLHandle to the newly created eye calibration client.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create eye calibration client due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created eye calibration client. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFaiure|Failed to create eye calibration client due to an unknown failure.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLEyeCalibrationDestroyClient {#mlresult-mleyecalibrationdestroyclient}

```cpp
MLResult MLEyeCalibrationDestroyClient(
    MLHandle handle
)
```

Destroys an eye calibration client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle to the eye calibration cleint created by [MLEyeCalibrationCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationcreateclient).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLHandle is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed eye calibration client. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFaiure|Failed to destroy eye calibration client due to an unknown failure.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLEyeCalibrationGetState {#mlresult-mleyecalibrationgetstate}

```cpp
MLResult MLEyeCalibrationGetState(
    MLHandle handle,
    MLEyeCalibrationState * out_state
)
```

Gets information about the user's current eye calibration. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|A handle to an Eye calibration client created by [MLEyeCalibrationCreateClient](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mlresult-mleyecalibrationcreateclient). |
| [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) * |out_state|A pointer to [MLEyeCalibrationState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/struct_m_l_eye_calibration_state.md) where information about the eye calibration state is to be stored.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to receive eye calibration state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully received eye calibration state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to receive eye calibration state due to an unknown failure.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------


## Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### eye_calibration {#mleyecalibrationstatus-eye-calibration}

```cpp
MLEyeCalibrationStatus eye_calibration;
```



| Type | Description |
|--|--|
| [MLEyeCalibrationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#enums-mleyecalibrationstatus) | A set of possible eye calibration codes that the eye calibration system can report.  |


MLEyeCalibrationStatus enum defined above. 





-----------

### epoch_timestamp_us {#int64-t-epoch-timestamp-us}

```cpp
int64_t epoch_timestamp_us;
```


Epoch timestamp of last calibration in microseconds. 





-----------





