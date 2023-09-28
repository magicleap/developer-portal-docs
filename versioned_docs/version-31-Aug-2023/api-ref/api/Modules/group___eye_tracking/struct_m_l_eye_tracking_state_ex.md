---
title: MLEyeTrackingStateEx
summary: information about the state of the eye tracking system. 

---

# MLEyeTrackingStateEx

**Module:** **[Eye Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md)**



Information about the state of the eye tracking system.  [More...](#detailed-description)


`#include <ml_eye_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#uint32-t-version)**  |
| float | **[vergence_confidence](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#float-vergence-confidence)** <br></br>A quality metric confidence value 0.0 - 1.0 to indicate accuracy of vergence.  |
| float | **[left_center_confidence](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#float-left-center-confidence)** <br></br>A quality metric confidence value 0.0 - 1.0 to indicate accuracy of left eye center.  |
| float | **[right_center_confidence](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#float-right-center-confidence)** <br></br>A quality metric confidence value 0.0 - 1.0 to indicate accuracy of right eye center.  |
| bool | **[left_blink](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#bool-left-blink)**  |
| bool | **[right_blink](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#bool-right-blink)**  |
| [MLEyeTrackingError](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#enums-mleyetrackingerror) | **[error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#mleyetrackingerror-error)**  |
| [MLTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[timestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#mltime-timestamp)** <br></br>The timestamp for all the data fields in this struct.  |
| float | **[left_eye_openness](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#float-left-eye-openness)** <br></br>Openness of the left eye.  |
| float | **[right_eye_openness](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_state_ex.md#float-right-eye-openness)** <br></br>Openness of the right eye.  |

## Detailed Description

```cpp
struct MLEyeTrackingStateEx;
```

Information about the state of the eye tracking system. 

This structure must be initialized by calling [MLEyeTrackingStateInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#void-mleyetrackingstateinit) before use.




**API Level:**
  * 26




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### vergence_confidence {#float-vergence-confidence}

```cpp
float vergence_confidence;
```

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of vergence. 

Output may be arbitrary if confidence == 0. 





-----------

### left_center_confidence {#float-left-center-confidence}

```cpp
float left_center_confidence;
```

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of left eye center. 

Output may be arbitrary if confidence == 0. 





-----------

### right_center_confidence {#float-right-center-confidence}

```cpp
float right_center_confidence;
```

A quality metric confidence value 0.0 - 1.0 to indicate accuracy of right eye center. 

Output may be arbitrary if confidence == 0. 





-----------

### left_blink {#bool-left-blink}

```cpp
bool left_blink;
```


Returns true if eyes are inside a blink. When not wearing the device, values can be arbitrary. 





-----------

### right_blink {#bool-right-blink}

```cpp
bool right_blink;
```






-----------

### error {#mleyetrackingerror-error}

```cpp
MLEyeTrackingError error;
```


Represents what eye tracking error (if any) is present. 





-----------

### timestamp {#mltime-timestamp}

```cpp
MLTime timestamp;
```

The timestamp for all the data fields in this struct. 





-----------

### left_eye_openness {#float-left-eye-openness}

```cpp
float left_eye_openness;
```

Openness of the left eye. 

Output is 0.0 - 1.0, with 0.0 being fully closed and 1.0 fully open. 





-----------

### right_eye_openness {#float-right-eye-openness}

```cpp
float right_eye_openness;
```

Openness of the right eye. 

Output is 0.0 - 1.0, with 0.0 being fully closed and 1.0 fully open. 





-----------


