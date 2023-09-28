---
title: MLMarkerTrackerDecodedData
summary: represents the decoded data. 

---

# MLMarkerTrackerDecodedData

**Module:** **[Fiducial Marker Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



Represents the decoded data.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| const [MLMarkerTrackerDecodedTypedData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_typed_data.md) * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_data.md#const-data)** <br></br>Data decoded from a detected marker.  |
| uint32_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_data.md#uint32-t-size)** <br></br>Length of the decoded data.  |

## Detailed Description

```cpp
struct MLMarkerTrackerDecodedData;
```

Represents the decoded data. 

The different detectors will have different decoded outputs. See [MLMarkerTrackerDecodedTypedData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_typed_data.md) for details on the output formats supported.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### data {#const-data}

```cpp
const MLMarkerTrackerDecodedTypedData * data;
```

Data decoded from a detected marker. 


| Type | Description |
|--|--|
| const [MLMarkerTrackerDecodedTypedData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_typed_data.md) * | Structure type selector.  |


Where data field contents depends on the detected marker, and data->type indicates which structure this actually contains. 





-----------

### size {#uint32-t-size}

```cpp
uint32_t size;
```

Length of the decoded data. 





-----------


