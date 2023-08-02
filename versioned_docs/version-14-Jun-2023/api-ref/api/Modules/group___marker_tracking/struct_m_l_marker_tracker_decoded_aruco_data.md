---
title: MLMarkerTrackerDecodedArucoData
summary: aruco decoded data. 

---

# MLMarkerTrackerDecodedArucoData

**Module:** **[Fiducial Marker Tracking](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



Aruco decoded data.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMarkerTrackingDecodedDataType](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingdecodeddatatype) | **[type](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_aruco_data.md#mlmarkertrackingdecodeddatatype-type)**  |
| [MLMarkerTrackerArucoDictionaryName](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerarucodictionaryname) | **[dictionary](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_aruco_data.md#mlmarkertrackerarucodictionaryname-dictionary)**  |
| uint32_t | **[id](/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_aruco_data.md#uint32-t-id)**  |

## Detailed Description

```cpp
struct MLMarkerTrackerDecodedArucoData;
```

Aruco decoded data. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### type {#mlmarkertrackingdecodeddatatype-type}

```cpp
MLMarkerTrackingDecodedDataType type;
```



| Type | Description |
|--|--|
| [MLMarkerTrackingDecodedDataType](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingdecodeddatatype) | Decoded Data Type enumeration.  |


Type selector for the structure. 





-----------

### dictionary {#mlmarkertrackerarucodictionaryname-dictionary}

```cpp
MLMarkerTrackerArucoDictionaryName dictionary;
```



| Type | Description |
|--|--|
| [MLMarkerTrackerArucoDictionaryName](/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerarucodictionaryname) | Supported pre-defined Aruco dictionary and AprilTags.  |


Dictionary used by the Aruco Marker. 





-----------

### id {#uint32-t-id}

```cpp
uint32_t id;
```


Aruco marker Id. 





-----------

