---
title: MLEyeCalibrationState
summary: a struct representing the eye calibration state. 

---

# MLEyeCalibrationState

**Module:** **[Eye Calibration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md)**



A struct representing the eye calibration state.  [More...](#detailed-description)


`#include <ml_eye_calibration.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#uint32-t-version)**  |
| [MLEyeCalibrationStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#enums-mleyecalibrationstatus) | **[eye_calibration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#mleyecalibrationstatus-eye-calibration)**  |
| int64_t | **[epoch_timestamp_us](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_calibration/group___eye_calibration.md#int64-t-epoch-timestamp-us)**  |

## Detailed Description

```cpp
struct MLEyeCalibrationState;
```

A struct representing the eye calibration state. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

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


