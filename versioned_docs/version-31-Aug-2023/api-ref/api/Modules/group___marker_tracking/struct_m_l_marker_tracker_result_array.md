---
title: MLMarkerTrackerResultArray
summary: an array of all the marker results from the marker tracker. 

---

# MLMarkerTrackerResultArray

**Module:** **[Fiducial Marker Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



An array of all the marker results from the Marker Tracker.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md#uint32-t-version)**  |
| [MLMarkerTrackerResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md) ** | **[detections](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md#mlmarkertrackerresult-detections)**  |
| size_t | **[count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result_array.md#size-t-count)**  |

## Detailed Description

```cpp
struct MLMarkerTrackerResultArray;
```

An array of all the marker results from the Marker Tracker. 

Free this array with [MLMarkerTrackerReleaseResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#mlresult-mlmarkertrackerreleaseresult).




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
| [MLMarkerTrackerResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md) ** | Represents the result for a single marker.  |


Pointer to an array of pointers for [MLMarkerTrackerResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md). 





-----------

### count {#size-t-count}

```cpp
size_t count;
```


Number of markers being tracked. 





-----------


