---
title: MLSnapshotStaticData
summary: static information about the snapshot system. 

---

# MLSnapshotStaticData

**Module:** **[Perception](/api-ref/api/Modules/group___perception/group___perception.md)**



Static information about the snapshot system.  [More...](#detailed-description)


`#include <ml_snapshot.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md#uint32-t-version)**  |
| [MLCoordinateFrameUID](/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[coord_world_origin](/api-ref/api/Modules/group___perception/struct_m_l_snapshot_static_data.md#mlcoordinateframeuid-coord-world-origin)**  |

## Detailed Description

```cpp
struct MLSnapshotStaticData;
```

Static information about the snapshot system. 

Initalize this structure with MLSnapshotStaticDataInit and populate with [MLSnapshotGetStaticData()](/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgetstaticdata).




**API Level:**
  * 30




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### coord_world_origin {#mlcoordinateframeuid-coord-world-origin}

```cpp
MLCoordinateFrameUID coord_world_origin;
```


Coordinate frame ID. 





-----------

