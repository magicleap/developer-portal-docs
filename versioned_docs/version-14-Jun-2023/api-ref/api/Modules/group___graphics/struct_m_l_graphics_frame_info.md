---
title: MLGraphicsFrameInfo
summary: information about the current render frame populated by mlgraphicsbeginframeex. this struct must be populated by calling mlgraphicsframeinfoinit before being used in a call to mlgraphicsbeginframeex. 

---

# MLGraphicsFrameInfo

**Module:** **[Graphics](/api-ref/api/Modules/group___graphics/group___graphics.md)**



Information about the current render frame populated by [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). This struct must be populated by calling [MLGraphicsFrameInfoInit()](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeinfoinit) before being used in a call to [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex).  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#uint32-t-version)**  |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[handle](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#mlhandle-handle)**  |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[color_id](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#mlhandle-color-id)** <br></br>The handle (ID) of the texture array color surface for the virtual cameras. There is one texture layer per virtual camera.  |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[depth_id](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#mlhandle-depth-id)** <br></br>The handle (ID) of the texture array depth surface for the virtual cameras. There is one texture layer per virtual camera.  |
| [MLRectf](/api-ref/api/Modules/group___common/struct_m_l_rectf.md) | **[viewport](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#mlrectf-viewport)**  |
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | **[wait_sync_object](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#mlhandle-wait-sync-object)** <br></br>A handle to a synchronization object that must be cast to VkSemaphore and used during queue submission of a Vulkan app. GL apps can ignore this member.  |
| uint32_t | **[num_virtual_cameras](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#uint32-t-num-virtual-cameras)**  |
| [MLGraphicsVirtualCameraInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md)[MLGraphicsVirtualCameraName_Count] | **[virtual_cameras](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#mlgraphicsvirtualcamerainfo-virtual-cameras)**  |
| [MLTime](/api-ref/api/Modules/group___common/group___common.md#int64-t-mltime) | **[predicted_display_time](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_info.md#mltime-predicted-display-time)**  |

## Detailed Description

```cpp
struct MLGraphicsFrameInfo;
```

Information about the current render frame populated by [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). This struct must be populated by calling [MLGraphicsFrameInfoInit()](/api-ref/api/Modules/group___graphics/group___graphics.md#void-mlgraphicsframeinfoinit) before being used in a call to [MLGraphicsBeginFrameEx()](/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsbeginframeex). 




**API Level:**
  * 27




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Struct API version. 





-----------

### handle {#mlhandle-handle}

```cpp
MLHandle handle;
```



| Type | Description |
|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |


A reference handle for this frame to be provided at end of frame. 





-----------

### color_id {#mlhandle-color-id}

```cpp
MLHandle color_id;
```

The handle (ID) of the texture array color surface for the virtual cameras. There is one texture layer per virtual camera. 


| Type | Description |
|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |






-----------

### depth_id {#mlhandle-depth-id}

```cpp
MLHandle depth_id;
```

The handle (ID) of the texture array depth surface for the virtual cameras. There is one texture layer per virtual camera. 


| Type | Description |
|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |






-----------

### viewport {#mlrectf-viewport}

```cpp
MLRectf viewport;
```


The common viewport definition for all virtual cameras. 





-----------

### wait_sync_object {#mlhandle-wait-sync-object}

```cpp
MLHandle wait_sync_object;
```

A handle to a synchronization object that must be cast to VkSemaphore and used during queue submission of a Vulkan app. GL apps can ignore this member. 


| Type | Description |
|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) | Integer handle type used to reference many things returned by the API, instead of returning pointers directly. Use [MLHandleIsValid()](/api-ref/api/Modules/group___platform/group___platform.md#bool-mlhandleisvalid) to check if a handle is valid or not.  |






-----------

### num_virtual_cameras {#uint32-t-num-virtual-cameras}

```cpp
uint32_t num_virtual_cameras;
```


The number of virtual cameras for the frame, each virtual camera is a layer. 





-----------

### virtual_cameras {#mlgraphicsvirtualcamerainfo-virtual-cameras}

```cpp
MLGraphicsVirtualCameraInfo[MLGraphicsVirtualCameraName_Count] virtual_cameras;
```



| Type | Description |
|--|--|
| [MLGraphicsVirtualCameraInfo](/api-ref/api/Modules/group___graphics/struct_m_l_graphics_virtual_camera_info.md)[MLGraphicsVirtualCameraName_Count] | The per virtual camera information as defined in #MLGraphicsVirtualCameraInfoArray. [MLGraphicsVirtualCameraName_Count] |


The array of virtual cameras to render to for the frame. 





-----------

### predicted_display_time {#mltime-predicted-display-time}

```cpp
MLTime predicted_display_time;
```


Predicted time when the frame will be displayed. 





-----------

