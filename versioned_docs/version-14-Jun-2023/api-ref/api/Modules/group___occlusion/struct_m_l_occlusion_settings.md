---
title: MLOcclusionSettings
summary: mesh settings for the underlying system. 

---

# MLOcclusionSettings

**Module:** **[Occlusion](/api-ref/api/Modules/group___occlusion/group___occlusion.md)**



Mesh Settings for the underlying system.  [More...](#detailed-description)


`#include <ml_occlusion.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md#uint32-t-version)**  |
| float | **[min_distance](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md#float-min-distance)** <br></br>Minimum distance in meters to occlude objects. Possible values ranges from 0.3m up to 7.5m.  |
| float | **[max_distance](/api-ref/api/Modules/group___occlusion/struct_m_l_occlusion_settings.md#float-max-distance)** <br></br>Maximum distance in meters to occlude objects. Possible values ranges from 0.3m up to 7.5m.  |

## Detailed Description

```cpp
struct MLOcclusionSettings;
```

Mesh Settings for the underlying system. 




**API Level:**
  * 28




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Struct version. 





-----------

### min_distance {#float-min-distance}

```cpp
float min_distance;
```

Minimum distance in meters to occlude objects. Possible values ranges from 0.3m up to 7.5m. 





-----------

### max_distance {#float-max-distance}

```cpp
float max_distance;
```

Maximum distance in meters to occlude objects. Possible values ranges from 0.3m up to 7.5m. 





-----------

