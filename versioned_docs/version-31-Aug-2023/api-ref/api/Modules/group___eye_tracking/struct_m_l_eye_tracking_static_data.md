---
title: MLEyeTrackingStaticData
summary: static information about the eye tracking. 

---

# MLEyeTrackingStaticData

**Module:** **[Eye Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md)**



Static information about the eye tracking.  [More...](#detailed-description)


`#include <ml_eye_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[vergence](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md#mlcoordinateframeuid-vergence)**  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[left_center](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md#mlcoordinateframeuid-left-center)**  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[right_center](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/struct_m_l_eye_tracking_static_data.md#mlcoordinateframeuid-right-center)**  |

## Detailed Description

```cpp
struct MLEyeTrackingStaticData;
```

Static information about the eye tracking. 

Populate with [MLEyeTrackingGetStaticData()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___eye_tracking/group___eye_tracking.md#mlresult-mleyetrackinggetstaticdata).




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### vergence {#mlcoordinateframeuid-vergence}

```cpp
MLCoordinateFrameUID vergence;
```


Location of the 3D vergence point, intersection of 3D gaze vectors. 





-----------

### left_center {#mlcoordinateframeuid-left-center}

```cpp
MLCoordinateFrameUID left_center;
```


Left center. The rotation component is the left gaze w.r.t. -Z (RUB) Note: Prior to API Level 7 rotation will only return identity. 





-----------

### right_center {#mlcoordinateframeuid-right-center}

```cpp
MLCoordinateFrameUID right_center;
```


Right center. The rotation component is the right gaze w.r.t. -Z (RUB) Note: Prior to API Level 7 rotation will only return identity. 





-----------


