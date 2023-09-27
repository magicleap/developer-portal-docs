---
title: ml_native_surface.h

---

# ml_native_surface.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLNativeSurfaceFrameAvailableInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_frame_available_info.md)** <br></br>NativeSurface/NativeSurfaceTexture Output Frame Availability information.  |
| struct | **[MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md)** <br></br>Configuration values for creating the Native Surface.  |
| struct | **[MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md)** <br></br>Callbacks for notifying when an output frame is available for consumption.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLNativeSurfaceFrameAvailableInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_frame_available_info.md) | **[MLNativeSurfaceFrameAvailableInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlnativesurfaceframeavailableinfo)** <br></br>NativeSurface/NativeSurfaceTexture Output Frame Availability information.  |
| typedef struct [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) | **[MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlnativesurfaceconfig)** <br></br>Configuration values for creating the Native Surface.  |
| typedef struct [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) | **[MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlnativesurfaceonframeavailablecallback)** <br></br>Callbacks for notifying when an output frame is available for consumption.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLNativeSurfaceAcquiredBufferCount](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfaceacquiredbuffercount)** <br></br> { <br></br>[MLNativeSurfaceAcquiredBufferCount_Min](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfaceacquiredbuffercount-min) = 1,<br></br> [MLNativeSurfaceAcquiredBufferCount_Max](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfaceacquiredbuffercount-max) = 16,<br></br> [MLNativeSurfaceAcquiredBufferCount_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfaceacquiredbuffercount-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Number of acquired buffers to be requested in functions [MLNativeSurfaceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate.  |
| enum | **[MLNativeSurfacePixelFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacepixelformat)** <br></br> { <br></br>[MLNativeSurfacePixelFormat_Custom](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-custom) = -4,<br></br> [MLNativeSurfacePixelFormat_Translucent](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-translucent) = -3,<br></br> [MLNativeSurfacePixelFormat_Transparent](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-transparent) = -2,<br></br> [MLNativeSurfacePixelFormat_Opaque](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-opaque) = -1,<br></br> [MLNativeSurfacePixelFormat_None](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-none) = 0,<br></br> [MLNativeSurfacePixelFormat_Rgba8888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-rgba8888) = 1,<br></br> [MLNativeSurfacePixelFormat_Rgbx8888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-rgbx8888) = 2,<br></br> [MLNativeSurfacePixelFormat_Rgb888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-rgb888) = 3,<br></br> [MLNativeSurfacePixelFormat_Rgb565](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-rgb565) = 4,<br></br> [MLNativeSurfacePixelFormat_Bgra8888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-bgra8888) = 5,<br></br> [MLNativeSurfacePixelFormat_RgbaFp16](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-rgbafp16) = 22,<br></br> [MLNativeSurfacePixelFormat_Rgba1010102](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-rgba1010102) = 43,<br></br> [MLNativeSurfacePixelFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacepixelformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Pixel format to use when creating the native surface. Used in functions [MLNativeSurfaceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate.  |
| enum | **[MLNativeSurfaceTextureBackend](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacetexturebackend)** <br></br> { <br></br>[MLNativeSurfaceTextureBackend_OpenGL](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacetexturebackend-opengl) = 0,<br></br> [MLNativeSurfaceTextureBackend_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__native__surface_8h.md#enums-mlnativesurfacetexturebackend-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLNativeSurfaceConfigInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlnativesurfaceconfiginit)**([MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * inout_config_values)<br></br>Initializes [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) with default values.  |
| void | **[MLNativeSurfaceOnFrameAvailableCallbackInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#void-mlnativesurfaceonframeavailablecallbackinit)**([MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * inout_callbacks)<br></br>Initializes [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) with default values.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate)**(const [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * config_values, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new NativeSurface.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacerelease)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Release a NativeSurface.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetNativeWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_native_window, int32_t * out_format)<br></br>Gets an implementation of NativeWindow that feeds graphic buffers into MLNativeSurface.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceReleaseNativeWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleasenativewindow)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) native_window)<br></br>Releases NativeWindow previously acquired by [MLNativeSurfaceGetNativeWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceAcquireNextAvailableFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirenextavailableframe)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_native_buffer)<br></br>Consume next available buffer.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirehardwarebufferfromnativebuffer)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) native_buffer, struct AHardwareBuffer ** out_hardware_buffer, uint32_t * out_width, uint32_t * out_height)<br></br>Acquire an AHardwareBuffer* from a native buffer handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceReleaseFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleaseframe)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) native_buffer)<br></br>Release a native buffer previously acquired.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameTransformationMatrix](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframetransformationmatrix)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float out_mtx[16])<br></br>Retrieves the 4x4 texture coordinate transform matrix associated with the last acquired Frame.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframetimestamp)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_timestamp_ns)<br></br>Retrieves the timestamp associated with the last acquired frame. The timestamp is in nanoseconds, and is monotonically increasing from beginning of the playback. Its other semantics (zero point, etc) are codec-dependent and should be documented by the codec vendor.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameQueueBufferTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframequeuebuffertimestamp)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_timestamp_ns)<br></br>Retrieves the QueueBuffer timestamp associated with the last acquired Frame This timestamp is for profiling purposes only and corresponds to the time when this frame was queued by internal Codec's producer code. The timestamp is in nanoseconds, and is monotonically increasing from beginning of playback. Its other semantics (zero point, etc) are codec-dependent and should by documented by the codec vendor.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameNumber](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframenumber)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint64_t * out_number)<br></br>Retrieves the last acquired frame number. The frame number is an incrementing counter set to 0 at Codec configuration time.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceGetFrameCropRect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetframecroprect)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLRecti](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_recti.md) * out_crop_rect)<br></br>Retrieves the cropping rectangle of the current frame/buffer.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceSetOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacesetonframeavailablecallback)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * callback, void * user_data)<br></br>Set callback to notify client when a frame is available.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturecreate)**(const [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * config_values, [MLNativeSurfaceTextureBackend](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacetexturebackend) backend, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Create a new NativeSurfaceTexture.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturerelease)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Release a NativeSurfaceTexture.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureUpdateTexImage](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetextureupdateteximage)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Update the texture image to the most recent frame from the image stream.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureAttachToGLContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetextureattachtoglcontext)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t texture_id)<br></br>Attach the NativeSurfaceTexture to the graphic context that is current on the calling thread.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureDetachFromGLContext](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturedetachfromglcontext)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Detach the NativeSurfaceTexture from the graphic context that owns the graphic texture object.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureGetTransformationMatrix](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturegettransformationmatrix)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float out_matrix[16])<br></br>Retrieve the 4x4 texture coordinate transform matrix associated with the texture image set by the most recent call to MLNativeSurfaceTextureUpdateTexImage.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureGetTimestamp](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturegettimestamp)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, int64_t * out_timestamp_ns)<br></br>Retrieve the timestamp associated with the texture image set by the most recent call to MLNativeSurfaceTextureUpdateTexImage.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLNativeSurfaceTextureSetOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturesetonframeavailablecallback)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * callback, void * user_data)<br></br>Set callback to notify client when a frame is available.  |

## Enums Documentation

### MLNativeSurfaceAcquiredBufferCount {#enums-mlnativesurfaceacquiredbuffercount}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLNativeSurfaceAcquiredBufferCount_Min |  1| Min number of buffer count. |
| MLNativeSurfaceAcquiredBufferCount_Max |  16| Max number of buffer count. |
| MLNativeSurfaceAcquiredBufferCount_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Number of acquired buffers to be requested in functions [MLNativeSurfaceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate. 





-----------

### MLNativeSurfacePixelFormat {#enums-mlnativesurfacepixelformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLNativeSurfacePixelFormat_Custom |  -4| Custom format. |
| MLNativeSurfacePixelFormat_Translucent |  -3| Translucent format. |
| MLNativeSurfacePixelFormat_Transparent |  -2| Transparent format. |
| MLNativeSurfacePixelFormat_Opaque |  -1| Opaque format. |
| MLNativeSurfacePixelFormat_None |  0| None. |
| MLNativeSurfacePixelFormat_Rgba8888 |  1| Below enums should match android_pixel_format_t in graphics-base-v1.0.h header.4x8-bit RGBA format. |
| MLNativeSurfacePixelFormat_Rgbx8888 |  2| 4x8-bit RGBX format. |
| MLNativeSurfacePixelFormat_Rgb888 |  3| 3x8-bit RGB format. |
| MLNativeSurfacePixelFormat_Rgb565 |  4| 16-bit RGB format. |
| MLNativeSurfacePixelFormat_Bgra8888 |  5| 4x8-bit BGRA format. |
| MLNativeSurfacePixelFormat_RgbaFp16 |  22| 64-bit RGBA format. |
| MLNativeSurfacePixelFormat_Rgba1010102 |  43| 32-bit RGBA format. |
| MLNativeSurfacePixelFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Pixel format to use when creating the native surface. Used in functions [MLNativeSurfaceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate) and MLNativeSurfaceTextureCreate. 





-----------

### MLNativeSurfaceTextureBackend {#enums-mlnativesurfacetexturebackend}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLNativeSurfaceTextureBackend_OpenGL |  0| OpenGL texture. |
| MLNativeSurfaceTextureBackend_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Graphic backend to use.




**API Level:**
  * 20




-----------


## Types Documentation

### MLNativeSurfaceFrameAvailableInfo {#struct-mlnativesurfaceframeavailableinfo}

```cpp
typedef struct MLNativeSurfaceFrameAvailableInfo MLNativeSurfaceFrameAvailableInfo;
```

NativeSurface/NativeSurfaceTexture Output Frame Availability information. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_frame_available_info.md)


**API Level:**
  * 20




-----------

### MLNativeSurfaceConfig {#struct-mlnativesurfaceconfig}

```cpp
typedef struct MLNativeSurfaceConfig MLNativeSurfaceConfig;
```

Configuration values for creating the Native Surface. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md)


**API Level:**
  * 20




-----------

### MLNativeSurfaceOnFrameAvailableCallback {#struct-mlnativesurfaceonframeavailablecallback}

```cpp
typedef struct MLNativeSurfaceOnFrameAvailableCallback MLNativeSurfaceOnFrameAvailableCallback;
```

Callbacks for notifying when an output frame is available for consumption. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLNativeSurfaceConfigInit {#void-mlnativesurfaceconfiginit}

```cpp
static inline void MLNativeSurfaceConfigInit(
    MLNativeSurfaceConfig * inout_config_values
)
```

Initializes [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * |inout_config_values|[MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) structure defined by [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) that needs to be initialized. |




-----------

### MLNativeSurfaceOnFrameAvailableCallbackInit {#void-mlnativesurfaceonframeavailablecallbackinit}

```cpp
static inline void MLNativeSurfaceOnFrameAvailableCallbackInit(
    MLNativeSurfaceOnFrameAvailableCallback * inout_callbacks
)
```

Initializes [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * |inout_callbacks|[MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) Callback structure defined by [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) that needs to be initialized. |




-----------

### MLNativeSurfaceCreate {#mlresult-mlnativesurfacecreate}

```cpp
MLResult MLNativeSurfaceCreate(
    const MLNativeSurfaceConfig * config_values,
    MLHandle * out_handle
)
```

Create a new NativeSurface. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * |config_values|Configuration values for creating the native surface, refer [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) for more details. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created NativeSurface. Or else, it will point to [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed to allocate memory for surface. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|NativeSurface object was created successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The NativeSurface created through this API should be released using MLNativeSurfaceRelease once done using it.




**API Level:**
  * 20




-----------

### MLNativeSurfaceRelease {#mlresult-mlnativesurfacerelease}

```cpp
MLResult MLNativeSurfaceRelease(
    MLHandle handle
)
```

Release a NativeSurface. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurface.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurface object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|NativeSurface object was successfully released. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceGetNativeWindow {#mlresult-mlnativesurfacegetnativewindow}

```cpp
MLResult MLNativeSurfaceGetNativeWindow(
    MLHandle handle,
    MLHandle * out_native_window,
    int32_t * out_format
)
```

Gets an implementation of NativeWindow that feeds graphic buffers into MLNativeSurface. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. This handle can be:

* Surface created on an Encoder using [MLMediaCodecCreateInputSurface](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeccreateinputsurface).
* The output surface created using [MLNativeSurfaceCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacecreate).
* The output surface created using [MLNativeSurfaceTextureCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacetexturecreate). |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_native_window|Native window as MLHandle on success. |
| int32_t * |out_format|Native window format on success and for valid pointer, which will be used as EGL_NATIVE_VISUAL_ID.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurface object is invalid or out_native_window is NULL. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Native window is successfully retrieved. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This function returns the platform-dependent native window typically used by Graphics API or HW decoders to render frames.




**API Level:**
  * 20




-----------

### MLNativeSurfaceReleaseNativeWindow {#mlresult-mlnativesurfacereleasenativewindow}

```cpp
MLResult MLNativeSurfaceReleaseNativeWindow(
    MLHandle handle,
    MLHandle native_window
)
```

Releases NativeWindow previously acquired by [MLNativeSurfaceGetNativeWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |native_window|Native window handle acquired through [MLNativeSurfaceGetNativeWindow](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacegetnativewindow).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurface or NativeWindow object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Native window is successfully released. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLNativeSurfaceAcquireNextAvailableFrame {#mlresult-mlnativesurfaceacquirenextavailableframe}

```cpp
MLResult MLNativeSurfaceAcquireNextAvailableFrame(
    MLHandle handle,
    MLHandle * out_native_buffer
)
```

Consume next available buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_native_buffer|A pointer to the acquired native buffer of the frame. When buffer is not required anymore, caller must call [MLNativeSurfaceReleaseFrame()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfacereleaseframe) with this nativeBuffer handle to free up queuing space for incoming buffers.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Next available frame is acquired successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLMediaGenericResult_NotEnoughData|Native buffer is not available yet to acquire.|
**Required Permissions**:

  * None 


Note: This function is non-blocking and should only be called from the rendering thread _after_ #on_frame_available callback has been fired.

Note: The returned buffer's color format is multi-planar YUV420. Since our underlying hardware interops do not support multiplanar formats, advanced texture features like mipmaping, anisotropic filtering and MSAA will _not_ work on those returned buffers. If such advanced texturing features are required, one has to acquire the YUV buffers as usual and _render_ to an RGB texture and only then, will one be able to enable hardware optimization for such advanced texture features.




**API Level:**
  * 20




-----------

### MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer {#mlresult-mlnativesurfaceacquirehardwarebufferfromnativebuffer}

```cpp
MLResult MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer(
    MLHandle handle,
    MLHandle native_buffer,
    struct AHardwareBuffer ** out_hardware_buffer,
    uint32_t * out_width,
    uint32_t * out_height
)
```

Acquire an AHardwareBuffer* from a native buffer handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. Pass [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle) when using with native buffers acquired without a MLNativeSurface, like in the case of ml_webview api. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |native_buffer|The native buffer handle acquired from a [MLNativeSurfaceAcquireNextAvailableFrame](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlnativesurfaceacquirenextavailableframe) call. |
| struct AHardwareBuffer ** |out_hardware_buffer|The AHardwareBuffer pointer to the imported surface. |
| uint32_t * |out_width|Width of the imported surface. |
| uint32_t * |out_height|Height of the imported surface.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Import was not performed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Surface was acquired successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Import was not performed due to an unknown error.|
**Required Permissions**:

  * None 



The AHardwareBuffer* can be used with the Vulkan extension VK_ANDROID_external_memory_android_hardware_buffer to get the hardware buffer format properties, which can then be used to bind this hardware buffer to a VkImage. Caller is responsible for releasing the AHardwareBuffer by calling AHardwareBuffer_release() after its usage.




**API Level:**
  * 20




-----------

### MLNativeSurfaceReleaseFrame {#mlresult-mlnativesurfacereleaseframe}

```cpp
MLResult MLNativeSurfaceReleaseFrame(
    MLHandle handle,
    MLHandle native_buffer
)
```

Release a native buffer previously acquired. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |native_buffer|The native buffer for the frame to release.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Frame was released successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameTransformationMatrix {#mlresult-mlnativesurfacegetframetransformationmatrix}

```cpp
MLResult MLNativeSurfaceGetFrameTransformationMatrix(
    MLHandle handle,
    float out_mtx[16]
)
```

Retrieves the 4x4 texture coordinate transform matrix associated with the last acquired Frame. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| float |out_mtx|A pointer to an array of 16 floats that will receive retrieved transformation matrix.|
**Required Permissions**:

  * None 


This transform matrix maps 2D homogeneous texture coordinates of the form (s, t, 0, 1) with s and t in the inclusive range [0, 1] to the texture coordinate that should be used to sample that location from the texture. Sampling the texture outside of the range of this transform is undefined.

This transform is necessary to compensate for transforms that the stream content producer may implicitly apply to the content. By forcing users of a GLConsumer to apply this transform we avoid performing an extra copy of the data that would be needed to hide the transform from the user.

The matrix is stored in column-major order.



**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Transformation matrix was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameTimestamp {#mlresult-mlnativesurfacegetframetimestamp}

```cpp
MLResult MLNativeSurfaceGetFrameTimestamp(
    MLHandle handle,
    int64_t * out_timestamp_ns
)
```

Retrieves the timestamp associated with the last acquired frame. The timestamp is in nanoseconds, and is monotonically increasing from beginning of the playback. Its other semantics (zero point, etc) are codec-dependent and should be documented by the codec vendor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| int64_t * |out_timestamp_ns|A pointer to user variable for storing retrieved timestamp.|
**Required Permissions**:

  * None 




**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Timestamp was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameQueueBufferTimestamp {#mlresult-mlnativesurfacegetframequeuebuffertimestamp}

```cpp
MLResult MLNativeSurfaceGetFrameQueueBufferTimestamp(
    MLHandle handle,
    int64_t * out_timestamp_ns
)
```

Retrieves the QueueBuffer timestamp associated with the last acquired Frame This timestamp is for profiling purposes only and corresponds to the time when this frame was queued by internal Codec's producer code. The timestamp is in nanoseconds, and is monotonically increasing from beginning of playback. Its other semantics (zero point, etc) are codec-dependent and should by documented by the codec vendor. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| int64_t * |out_timestamp_ns|A pointer to user variable for storing retrieved timestamp.|
**Required Permissions**:

  * None 




**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Timestamp was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameNumber {#mlresult-mlnativesurfacegetframenumber}

```cpp
MLResult MLNativeSurfaceGetFrameNumber(
    MLHandle handle,
    uint64_t * out_number
)
```

Retrieves the last acquired frame number. The frame number is an incrementing counter set to 0 at Codec configuration time. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| uint64_t * |out_number|A pointer to user variable for storing retrieved frame number.|
**Required Permissions**:

  * None 




**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Frame number was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceGetFrameCropRect {#mlresult-mlnativesurfacegetframecroprect}

```cpp
MLResult MLNativeSurfaceGetFrameCropRect(
    MLHandle handle,
    MLRecti * out_crop_rect
)
```

Retrieves the cropping rectangle of the current frame/buffer. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the MLNativeSurface instance. |
| [MLRecti](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_recti.md) * |out_crop_rect|A pointer to user variable for storing retrieved Crop.|
**Required Permissions**:

  * None 


The Frame crop is returned as {left, bottom, width, height}.



**Return**: 

  * MLResult_InvalidParam One of the parameters is invalid. 
  * MLResult_Ok Frame Crop was returned.



**API Level:**
  * 20




-----------

### MLNativeSurfaceSetOnFrameAvailableCallback {#mlresult-mlnativesurfacesetonframeavailablecallback}

```cpp
MLResult MLNativeSurfaceSetOnFrameAvailableCallback(
    MLHandle handle,
    const MLNativeSurfaceOnFrameAvailableCallback * callback,
    void * user_data
)
```

Set callback to notify client when a frame is available. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurface. |
| const [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * |callback|A [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) function. |
| void * |user_data|Pointer to user payload data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|MLNativeSurface object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Callback was set successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error. |
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureCreate {#mlresult-mlnativesurfacetexturecreate}

```cpp
MLResult MLNativeSurfaceTextureCreate(
    const MLNativeSurfaceConfig * config_values,
    MLNativeSurfaceTextureBackend backend,
    MLHandle * out_handle
)
```

Create a new NativeSurfaceTexture. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) * |config_values|Configuration values for creating the native surface, refer [MLNativeSurfaceConfig](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_config.md) for more details. |
| [MLNativeSurfaceTextureBackend](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlnativesurfacetexturebackend) |backend|The graphic backend to use. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Upon successful return will point to handle to the created NativeSurfaceTexture. Or else, it will point to [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_AllocFailed|Failed to allocate memory for surface. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|NativeSurfaceTexture object was created successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureRelease {#mlresult-mlnativesurfacetexturerelease}

```cpp
MLResult MLNativeSurfaceTextureRelease(
    MLHandle handle
)
```

Release a NativeSurfaceTexture. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|NativeSurfaceTexture object was successfully released. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureUpdateTexImage {#mlresult-mlnativesurfacetextureupdateteximage}

```cpp
MLResult MLNativeSurfaceTextureUpdateTexImage(
    MLHandle handle
)
```

Update the texture image to the most recent frame from the image stream. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the texture was updated successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


May only be called on the thread with the graphic context that contains the texture object.




**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureAttachToGLContext {#mlresult-mlnativesurfacetextureattachtoglcontext}

```cpp
MLResult MLNativeSurfaceTextureAttachToGLContext(
    MLHandle handle,
    uint32_t texture_id
)
```

Attach the NativeSurfaceTexture to the graphic context that is current on the calling thread. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture. |
| uint32_t |texture_id|The graphic texture object id.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the texture was detached successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureDetachFromGLContext {#mlresult-mlnativesurfacetexturedetachfromglcontext}

```cpp
MLResult MLNativeSurfaceTextureDetachFromGLContext(
    MLHandle handle
)
```

Detach the NativeSurfaceTexture from the graphic context that owns the graphic texture object. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|the texture was detached successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If called on the thread with graphic context that contains the attached texture object, said texture will be deleted.




**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureGetTransformationMatrix {#mlresult-mlnativesurfacetexturegettransformationmatrix}

```cpp
MLResult MLNativeSurfaceTextureGetTransformationMatrix(
    MLHandle handle,
    float out_matrix[16]
)
```

Retrieve the 4x4 texture coordinate transform matrix associated with the texture image set by the most recent call to MLNativeSurfaceTextureUpdateTexImage. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture. |
| float |out_matrix|A 4x4 matrix stored in column-major order as 16 consecutive values.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureGetTimestamp {#mlresult-mlnativesurfacetexturegettimestamp}

```cpp
MLResult MLNativeSurfaceTextureGetTimestamp(
    MLHandle handle,
    int64_t * out_timestamp_ns
)
```

Retrieve the timestamp associated with the texture image set by the most recent call to MLNativeSurfaceTextureUpdateTexImage. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture. |
| int64_t * |out_timestamp_ns|The timestamp in nanoseconds.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLNativeSurfaceTextureSetOnFrameAvailableCallback {#mlresult-mlnativesurfacetexturesetonframeavailablecallback}

```cpp
MLResult MLNativeSurfaceTextureSetOnFrameAvailableCallback(
    MLHandle handle,
    const MLNativeSurfaceOnFrameAvailableCallback * callback,
    void * user_data
)
```

Set callback to notify client when a frame is available. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the NativeSurfaceTexture. |
| const [MLNativeSurfaceOnFrameAvailableCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_native_surface_on_frame_available_callback.md) * |callback|A MLNativeSurfaceTextureOnFrameAvailableCallback function. |
| void * |user_data|Pointer to user payload data.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|NativeSurfaceTexture object is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Callback was set successfully. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2021 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_types.h"

ML_EXTERN_C_BEGIN

typedef enum MLNativeSurfaceAcquiredBufferCount{
  MLNativeSurfaceAcquiredBufferCount_Min = 1,
  MLNativeSurfaceAcquiredBufferCount_Max = 16,
  MLNativeSurfaceAcquiredBufferCount_Ensure32Bits = 0x7FFFFFFF
}MLNativeSurfaceAcquiredBufferCount;

typedef enum MLNativeSurfacePixelFormat {
  MLNativeSurfacePixelFormat_Custom        = -4,
  MLNativeSurfacePixelFormat_Translucent   = -3,
  MLNativeSurfacePixelFormat_Transparent   = -2,
  MLNativeSurfacePixelFormat_Opaque        = -1,
  MLNativeSurfacePixelFormat_None          = 0,
  MLNativeSurfacePixelFormat_Rgba8888      = 1,
  MLNativeSurfacePixelFormat_Rgbx8888      = 2,
  MLNativeSurfacePixelFormat_Rgb888        = 3,
  MLNativeSurfacePixelFormat_Rgb565        = 4,
  MLNativeSurfacePixelFormat_Bgra8888      = 5,
  MLNativeSurfacePixelFormat_RgbaFp16      = 22,
  MLNativeSurfacePixelFormat_Rgba1010102   = 43,
  MLNativeSurfacePixelFormat_Ensure32Bits = 0x7FFFFFFF
} MLNativeSurfacePixelFormat;

typedef struct MLNativeSurfaceFrameAvailableInfo {
  void *user_data;
} MLNativeSurfaceFrameAvailableInfo;

typedef struct MLNativeSurfaceConfig {
  uint32_t version;

  MLNativeSurfacePixelFormat pixel_format;

  uint16_t buffer_count;

  uint32_t width;

  uint32_t height;

} MLNativeSurfaceConfig;

ML_STATIC_INLINE void MLNativeSurfaceConfigInit(MLNativeSurfaceConfig *inout_config_values)
{
  if (inout_config_values) {
    inout_config_values->version = 1;
    inout_config_values->width = 0;
    inout_config_values->height = 0;
    inout_config_values->buffer_count = 1;
  }
}

typedef struct MLNativeSurfaceOnFrameAvailableCallback {
  uint32_t version;

  void (*on_frame_available)(MLHandle handle, const MLNativeSurfaceFrameAvailableInfo *info);
} MLNativeSurfaceOnFrameAvailableCallback;

ML_STATIC_INLINE void MLNativeSurfaceOnFrameAvailableCallbackInit(MLNativeSurfaceOnFrameAvailableCallback *inout_callbacks) {
  if (inout_callbacks) {
    inout_callbacks->version = 1;
    inout_callbacks->on_frame_available = NULL;
  }
}

ML_API MLResult ML_CALL MLNativeSurfaceCreate(const MLNativeSurfaceConfig *config_values, MLHandle* out_handle);

ML_API MLResult ML_CALL MLNativeSurfaceRelease(MLHandle handle);

ML_API MLResult ML_CALL MLNativeSurfaceGetNativeWindow(MLHandle handle, MLHandle *out_native_window, int32_t *out_format);

ML_API MLResult ML_CALL MLNativeSurfaceReleaseNativeWindow(MLHandle handle, MLHandle native_window);

ML_API MLResult ML_CALL MLNativeSurfaceAcquireNextAvailableFrame(MLHandle handle, MLHandle *out_native_buffer);

struct AHardwareBuffer;

ML_API MLResult ML_CALL MLNativeSurfaceAcquireHardwareBufferFromNativeBuffer(MLHandle handle, MLHandle native_buffer, struct AHardwareBuffer **out_hardware_buffer, uint32_t *out_width, uint32_t *out_height);

ML_API MLResult ML_CALL MLNativeSurfaceReleaseFrame(MLHandle handle, MLHandle native_buffer);

ML_API MLResult ML_CALL MLNativeSurfaceGetFrameTransformationMatrix(MLHandle handle, float out_mtx[16]);

ML_API MLResult ML_CALL MLNativeSurfaceGetFrameTimestamp(MLHandle handle, int64_t *out_timestamp_ns);

ML_API MLResult ML_CALL MLNativeSurfaceGetFrameQueueBufferTimestamp(MLHandle handle, int64_t *out_timestamp_ns);

ML_API MLResult ML_CALL MLNativeSurfaceGetFrameNumber(MLHandle handle, uint64_t *out_number);

ML_API MLResult ML_CALL MLNativeSurfaceGetFrameCropRect(MLHandle handle, MLRecti *out_crop_rect);

ML_API MLResult ML_CALL MLNativeSurfaceSetOnFrameAvailableCallback(MLHandle handle, const MLNativeSurfaceOnFrameAvailableCallback *callback, void *user_data);

typedef enum MLNativeSurfaceTextureBackend {
  MLNativeSurfaceTextureBackend_OpenGL = 0,
  MLNativeSurfaceTextureBackend_Ensure32Bits = 0x7FFFFFFF
} MLNativeSurfaceTextureBackend;

ML_API MLResult ML_CALL MLNativeSurfaceTextureCreate(const MLNativeSurfaceConfig *config_values, MLNativeSurfaceTextureBackend backend,
    MLHandle *out_handle);

ML_API MLResult ML_CALL MLNativeSurfaceTextureRelease(MLHandle handle);

ML_API MLResult ML_CALL MLNativeSurfaceTextureUpdateTexImage(MLHandle handle);

ML_API MLResult ML_CALL MLNativeSurfaceTextureAttachToGLContext(MLHandle handle, uint32_t texture_id);

ML_API MLResult ML_CALL MLNativeSurfaceTextureDetachFromGLContext(MLHandle handle);

ML_API MLResult ML_CALL MLNativeSurfaceTextureGetTransformationMatrix(MLHandle handle, float out_matrix[16]);

ML_API MLResult ML_CALL MLNativeSurfaceTextureGetTimestamp(MLHandle handle, int64_t *out_timestamp_ns);

ML_API MLResult ML_CALL MLNativeSurfaceTextureSetOnFrameAvailableCallback(MLHandle handle,
    const MLNativeSurfaceOnFrameAvailableCallback *callback, void *user_data);

ML_EXTERN_C_END
```




