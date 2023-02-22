---
title: MLMarkerTrackerResultArray
summary: an array of all the marker results from the marker tracker. 

---

# MLMarkerTrackerResultArray

**Module:** **[Fiducial Marker Tracking](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



An array of all the marker results from the Marker Tracker.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md#uint32-t-version)**  |
| [MLMarkerTrackerResult](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md) ** | **[detections](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md#mlmarkertrackerresult-detections)**  |
| size_t | **[count](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md#size-t-count)**  |

## Detailed Description

```cpp
struct MLMarkerTrackerResultArray;
```

An array of all the marker results from the Marker Tracker. 

Free this array with [MLMarkerTrackerReleaseResult](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackerreleaseresult).




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

### detections {#mlmarkertrackerresult-detections}

```cpp
MLMarkerTrackerResult ** detections;
```



| Type | Description |
|--|--|
| [MLMarkerTrackerResult](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md) ** | Represents the result for a single marker.  |


Pointer to an array of pointers for [MLMarkerTrackerResult](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md). 





-----------

### count {#size-t-count}

```cpp
size_t count;
```


Number of markers being tracked. 





-----------

