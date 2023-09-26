---
title: MLNativeSurfaceConfig
summary: configuration values for creating the native surface. 

---

# MLNativeSurfaceConfig

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Configuration values for creating the Native Surface.  [More...](#detailed-description)


`#include <ml_native_surface.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md#uint32-t-version)**  |
| [MLNativeSurfacePixelFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat) | **[pixel_format](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md#mlnativesurfacepixelformat-pixel-format)**  |
| uint16_t | **[buffer_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md#uint16-t-buffer-count)**  |
| uint32_t | **[width](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md#uint32-t-width)**  |
| uint32_t | **[height](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md#uint32-t-height)**  |

## Detailed Description

```cpp
struct MLNativeSurfaceConfig;
```

Configuration values for creating the Native Surface. 




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

### pixel_format {#mlnativesurfacepixelformat-pixel-format}

```cpp
MLNativeSurfacePixelFormat pixel_format;
```



| Type | Description |
|--|--|
| [MLNativeSurfacePixelFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat) | Pixel format to use when creating the native surface. Used in functions [MLNativeSurfaceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate.  |


Pixel format from [MLNativeSurfacePixelFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlnativesurfacepixelformat) to the NativeSurface to be created. 





-----------

### buffer_count {#uint16-t-buffer-count}

```cpp
uint16_t buffer_count;
```


Number of buffers to be acquired. Refer to [MLNativeSurfaceAcquiredBufferCount](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enum-mlnativesurfaceacquiredbuffercount) for acceptable range of buffer count. 





-----------

### width {#uint32-t-width}

```cpp
uint32_t width;
```


Default width of the buffer while dequeuing the buffer from consumer. This should be same as frame width. Invalid width (negative or 0) will result in failure to create the Surface with the error code MLResult_InvalidParam. 





-----------

### height {#uint32-t-height}

```cpp
uint32_t height;
```


Default height of the buffer while dequeuing the buffer from consumer. This should be same as frame height. Invalid height (negative or 0) will result in failure to create the Surface with the error code MLResult_InvalidParam. 





-----------


