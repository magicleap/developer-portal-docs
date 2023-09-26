---
title: MLMeshingSettings

---

# MLMeshingSettings

**Module:** **[Meshing2](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md)**



 [More...](#detailed-description)


`#include <ml_meshing2.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md#uint32-t-flags)**  |
| float | **[fill_hole_length](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md#float-fill-hole-length)**  |
| float | **[disconnected_component_area](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/struct_m_l_meshing_settings.md#float-disconnected-component-area)** <br></br>Any component that is disconnected from the main mesh which has an area (in meters^2) less than disconnected_component_area will be removed. The maximum area is limited to 2 square meters, and the area needs to exist fully within a mesh block boundary without skirt.  |

## Detailed Description

```cpp
struct MLMeshingSettings;
```


Mesh Settings for the underlying system. 





-----------
## Public Attributes Documentation

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```


Request flags that are a combination of MLMeshingFlags. 





-----------

### fill_hole_length {#float-fill-hole-length}

```cpp
float fill_hole_length;
```


Any hole which has perimeter (in meters) less than fill_hole_length will be filled. The maximum hole perimeter is limited to 5 meters. Also The maximum area of the hole should not exceed 0.5 square meters. If the hole overlaps with neighboring mesh block/s, it won't be filled in. 





-----------

### disconnected_component_area {#float-disconnected-component-area}

```cpp
float disconnected_component_area;
```

Any component that is disconnected from the main mesh which has an area (in meters^2) less than disconnected_component_area will be removed. The maximum area is limited to 2 square meters, and the area needs to exist fully within a mesh block boundary without skirt. 





-----------


