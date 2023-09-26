---
title: MLMarkerTrackerDecodedTypedData
summary: structure type selector. 

---

# MLMarkerTrackerDecodedTypedData

**Module:** **[Fiducial Marker Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



Structure type selector.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMarkerTrackingDecodedDataType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingdecodeddatatype) | **[type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_typed_data.md#mlmarkertrackingdecodeddatatype-type)**  |

## Detailed Description

```cpp
struct MLMarkerTrackerDecodedTypedData;
```

Structure type selector. 

Different Marker Decoders will produce different data. Use this structure to find what the data structure is. 

```cpp
switch ( data->type ) {
  case MLMarkerTrackingDecodedDataType_Aruco:
    MLMarkerTrackerDecodedArucoData * aruco = reinterpret_cast<MLMarkerTrackerDecodedArucoData*>(data);
    MLog(Verbose, "Received Aruco Code %u", aruco->id);
    break;
  default:
    MLog(Verbose, "Unhandled type received");
}
```




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
| [MLMarkerTrackingDecodedDataType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingdecodeddatatype) | Decoded Data Type enumeration.  |


Type selector for the structure. 





-----------


