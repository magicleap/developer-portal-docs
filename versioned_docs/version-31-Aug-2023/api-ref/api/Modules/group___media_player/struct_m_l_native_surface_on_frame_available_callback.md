---
title: MLNativeSurfaceOnFrameAvailableCallback
summary: callbacks for notifying when an output frame is available for consumption. 

---

# MLNativeSurfaceOnFrameAvailableCallback

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



Callbacks for notifying when an output frame is available for consumption.  [More...](#detailed-description)


`#include <ml_native_surface.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md#uint32-t-version)**  |
| void(*)(MLHandle handle, const MLNativeSurfaceFrameAvailableInfo *info) | **[on_frame_available](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md#void-on-frame-available)** <br></br>This callback is invoked when the raw video frame is available for consumption on client side.  |

## Detailed Description

```cpp
struct MLNativeSurfaceOnFrameAvailableCallback;
```

Callbacks for notifying when an output frame is available for consumption. 




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

### on_frame_available {#void-on-frame-available}

```cpp
void(*)(MLHandle handle, const MLNativeSurfaceFrameAvailableInfo *info) on_frame_available;
```

This callback is invoked when the raw video frame is available for consumption on client side. 


| Type | Description |
|--|--|
| void(*)(MLHandle handle, const MLNativeSurfaceFrameAvailableInfo *info) | )(MLHandle handle, const MLNativeSurfaceFrameAvailableInfo *info) |


**Parameters**

|  |   |   |
|--|--|--|
|  |handle|MLNativeSurface or MLNativeSurfaceTexture handle for which callback was called. |
|  |info|Output Frame availability info as [MLNativeSurfaceFrameAvailableInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_frame_available_info.md). |
Client should implement this callback when they want to use raw video frame as a texture mapped to 3D geometry, for example.

This callback is typically fired when the when a raw frame is available for consumption, such as when the decoded output buffer has been released by the decoder OR camera produces a frame.





-----------


