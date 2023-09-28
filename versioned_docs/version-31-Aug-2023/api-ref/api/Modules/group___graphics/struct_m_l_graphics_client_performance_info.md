---
title: MLGraphicsClientPerformanceInfo
summary: performance timing information for the graphics client. 

---

# MLGraphicsClientPerformanceInfo

**Module:** **[Graphics](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md)**



Performance timing information for the graphics client.  [More...](#detailed-description)


`#include <ml_graphics.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint64_t | **[frame_start_cpu_comp_acquire_cpu_ns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md#uint64-t-frame-start-cpu-comp-acquire-cpu-ns)**  |
| uint64_t | **[frame_start_cpu_frame_end_gpu_ns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md#uint64-t-frame-start-cpu-frame-end-gpu-ns)**  |
| uint64_t | **[frame_start_cpu_frame_start_cpu_ns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md#uint64-t-frame-start-cpu-frame-start-cpu-ns)**  |
| uint64_t | **[frame_duration_cpu_ns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md#uint64-t-frame-duration-cpu-ns)**  |
| uint64_t | **[frame_duration_gpu_ns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md#uint64-t-frame-duration-gpu-ns)**  |
| uint64_t | **[frame_internal_duration_cpu_ns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md#uint64-t-frame-internal-duration-cpu-ns)**  |
| uint64_t | **[frame_internal_duration_gpu_ns](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/struct_m_l_graphics_client_performance_info.md#uint64-t-frame-internal-duration-gpu-ns)**  |

## Detailed Description

```cpp
struct MLGraphicsClientPerformanceInfo;
```

Performance timing information for the graphics client. 

Populated by [MLGraphicsGetClientPerformanceInfo](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___graphics/group___graphics.md#mlresult-mlgraphicsgetclientperformanceinfo), the performance information contains all metrics tracked by the graphics system for the specified client. Metrics are calculated using a sliding window and can be used to adjust the client workload characteristics (i.e. scale, fidelity, etc).




Note: The internal metrics are also provided, informing the client of both the CPU and GPU cost of the internal operations of the graphics system (in the client process). 





-----------
## Public Attributes Documentation

### frame_start_cpu_comp_acquire_cpu_ns {#uint64-t-frame-start-cpu-comp-acquire-cpu-ns}

```cpp
uint64_t frame_start_cpu_comp_acquire_cpu_ns;
```


The average frame start CPU to composition acquisition of the frame, in nanoseconds. 





-----------

### frame_start_cpu_frame_end_gpu_ns {#uint64-t-frame-start-cpu-frame-end-gpu-ns}

```cpp
uint64_t frame_start_cpu_frame_end_gpu_ns;
```


The average frame start CPU to frame end GPU, in nanoseconds. 





-----------

### frame_start_cpu_frame_start_cpu_ns {#uint64-t-frame-start-cpu-frame-start-cpu-ns}

```cpp
uint64_t frame_start_cpu_frame_start_cpu_ns;
```


The average frame cadence, CPU start to CPU start, in nanoseconds. 





-----------

### frame_duration_cpu_ns {#uint64-t-frame-duration-cpu-ns}

```cpp
uint64_t frame_duration_cpu_ns;
```


The average frame CPU duration, in nanoseconds. 





-----------

### frame_duration_gpu_ns {#uint64-t-frame-duration-gpu-ns}

```cpp
uint64_t frame_duration_gpu_ns;
```


The average frame GPU duration, in nanoseconds. 





-----------

### frame_internal_duration_cpu_ns {#uint64-t-frame-internal-duration-cpu-ns}

```cpp
uint64_t frame_internal_duration_cpu_ns;
```


The average CPU duration for internal operations per frame, in nanoseconds. 





-----------

### frame_internal_duration_gpu_ns {#uint64-t-frame-internal-duration-gpu-ns}

```cpp
uint64_t frame_internal_duration_gpu_ns;
```


The average GPU duration for internal operations per frame, in nanoseconds. 





-----------


