---
title: MLMarkerTrackerDecodedBinaryData
summary: binary decoded data. 

---

# MLMarkerTrackerDecodedBinaryData

**Module:** **[Fiducial Marker Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



Binary decoded data.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMarkerTrackingDecodedDataType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingdecodeddatatype) | **[type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_binary_data.md#mlmarkertrackingdecodeddatatype-type)**  |
| uint32_t | **[data_size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_binary_data.md#uint32-t-data-size)**  |
| const char[] | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_binary_data.md#const-char-data)** <br></br>Binary data.  |

## Detailed Description

```cpp
struct MLMarkerTrackerDecodedBinaryData;
```

Binary decoded data. 




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

### data_size {#uint32-t-data-size}

```cpp
uint32_t data_size;
```


Binary data size. 





-----------

### data {#const-char-data}

```cpp
const char[] data;
```

Binary data. 


| Type | Description |
|--|--|
| const char[] | [] |


This is the binary data directly from the scanned code. This typically does not include a terminating null character. When using this as a string, either always specify the length or manually add a null terminator after copying. 





-----------


