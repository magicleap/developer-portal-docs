---
title: Controller
summary: apis for the direct access to the controller system. 

---

# Controller

APIs for the direct access to the Controller system.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLControllerConfiguration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_configuration.md)**  |
| struct | **[MLControllerStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md)** <br></br>A structure containing information about the tracking-stream of this controller.  |
| struct | **[MLControllerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md)** <br></br>A structure containing information about the current state of this controller.  |
| struct | **[MLControllerStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md)** <br></br>A structure containing information about the current state of this controller.  |
| struct | **[MLControllerSystemState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md)** <br></br>A structure containing information about the current state of the controller system.  |
| struct | **[MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md)** <br></br>A structure containing information about the current state of the controller system.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLControllerConfiguration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_configuration.md) | **[MLControllerConfiguration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#struct-mlcontrollerconfiguration)**  |
| typedef struct [MLControllerStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md) | **[MLControllerStream](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#struct-mlcontrollerstream)** <br></br>A structure containing information about the tracking-stream of this controller.  |
| typedef struct [MLControllerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md) | **[MLControllerState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#struct-mlcontrollerstate)** <br></br>A structure containing information about the current state of this controller.  |
| typedef struct [MLControllerStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md) | **[MLControllerStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#struct-mlcontrollerstateex)** <br></br>A structure containing information about the current state of this controller.  |
| typedef struct [MLControllerSystemState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md) | **[MLControllerSystemState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#struct-mlcontrollersystemstate)** <br></br>A structure containing information about the current state of the controller system.  |
| typedef struct [MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md) | **[MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#struct-mlcontrollersystemstateex)** <br></br>A structure containing information about the current state of the controller system.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLControllerMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollermode)** <br></br> { <br></br>[Deprecated_Mode_0](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-deprecated-mode-0) = 0,<br></br> [Deprecated_Mode_1](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-deprecated-mode-1) = 1,<br></br> [MLControllerMode_Fused6Dof](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollermode-fused6dof) = 2,<br></br> [MLControllerMode_Count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollermode-count),<br></br> [MLControllerMode_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollermode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>A set of possible tracking modes for the Controller system.  |
| enum | **[Anonymous Enum 7](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-anonymous-enum-7)** <br></br> { <br></br>[MLController_MaxActive](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontroller-maxactive) = 1<br></br>} |
| enum | **[MLControllerCalibAccuracy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy)** <br></br> { <br></br>[MLControllerCalibAccuracy_Bad](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy-bad) = 0,<br></br> [MLControllerCalibAccuracy_Low](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy-low) = 1,<br></br> [MLControllerCalibAccuracy_Medium](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy-medium) = 2,<br></br> [MLControllerCalibAccuracy_High](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy-high) = 3,<br></br> [MLControllerCalibAccuracy_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollercalibaccuracy-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Calibration Accuracy levels for controller.  |
| enum | **[MLControllerStatus](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollerstatus)** <br></br> { <br></br>[MLControllerStatus_NotActive](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollerstatus-notactive) = 0,<br></br> [MLControllerStatus_Active_Rotation_Only](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollerstatus-active-rotation-only) = 1,<br></br> [MLControllerStatus_Active](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollerstatus-active) = 2,<br></br> [MLControllerStatus_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#enums-mlcontrollerstatus-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Stream mode for controller stream.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLControllerSystemStateExInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#void-mlcontrollersystemstateexinit)**([MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md) * inout_attr)<br></br>Initializes values for [MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLControllerCreateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollercreateex)**(const [MLControllerConfiguration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_configuration.md) * mode, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a controller tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLControllerDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollerdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) tracker)<br></br>Destroys a controller tracker.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLControllerGetState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollergetstate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, struct [MLControllerSystemState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md) * out_state)<br></br>Return the most recent controller state.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLControllerGetStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollergetstateex)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md) * out_state)<br></br>Return the most recent controller state.  |

## Detailed Description

APIs for the direct access to the Controller system. 




**Shared Object:**
  * perception.magicleap*




-----------
## Enums Documentation

### MLControllerMode {#enums-mlcontrollermode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Deprecated_Mode_0 |  0| |
| Deprecated_Mode_1 |  1| |
| MLControllerMode_Fused6Dof |  2| High quality 6 degrees of freedom tracking (position and orientation). |
| MLControllerMode_Count | | Count of number of modes. |
| MLControllerMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



A set of possible tracking modes for the Controller system. 



:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal.
:::



-----------

### Anonymous Enum 7 {#enums-anonymous-enum-7}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLController_MaxActive |  1| Maximum number of active Controllers. |








-----------

### MLControllerCalibAccuracy {#enums-mlcontrollercalibaccuracy}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLControllerCalibAccuracy_Bad |  0| CalAccuracy is Bad. |
| MLControllerCalibAccuracy_Low |  1| CalAccuracy is Low. |
| MLControllerCalibAccuracy_Medium |  2| CalAccuracy is Medium. |
| MLControllerCalibAccuracy_High |  3| CalAccuracy is High. |
| MLControllerCalibAccuracy_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Calibration Accuracy levels for controller. 



:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal.
:::



-----------

### MLControllerStatus {#enums-mlcontrollerstatus}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLControllerStatus_NotActive |  0| Controller stream is not active. |
| MLControllerStatus_Active_Rotation_Only |  1| Controller stream is active (rotation only). |
| MLControllerStatus_Active |  2| Controller stream is active (both position and rotation). |
| MLControllerStatus_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Stream mode for controller stream. 




**API Level:**
  * 21




-----------


## Types Documentation

### MLControllerConfiguration {#struct-mlcontrollerconfiguration}

```cpp
typedef struct MLControllerConfiguration MLControllerConfiguration;
```


A structure to configure controller's tracking-modes. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_configuration.md)



-----------

### MLControllerStream {#struct-mlcontrollerstream}

```cpp
typedef struct MLControllerStream MLControllerStream;
```

A structure containing information about the tracking-stream of this controller. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_stream.md)

:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal.
:::



-----------

### MLControllerState {#struct-mlcontrollerstate}

```cpp
typedef struct MLControllerState MLControllerState;
```

A structure containing information about the current state of this controller. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state.md)

:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal.
:::



-----------

### MLControllerStateEx {#struct-mlcontrollerstateex}

```cpp
typedef struct MLControllerStateEx MLControllerStateEx;
```

A structure containing information about the current state of this controller. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_state_ex.md)


**API Level:**
  * 21




-----------

### MLControllerSystemState {#struct-mlcontrollersystemstate}

```cpp
typedef struct MLControllerSystemState MLControllerSystemState;
```

A structure containing information about the current state of the controller system. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md)

:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal.
:::



-----------

### MLControllerSystemStateEx {#struct-mlcontrollersystemstateex}

```cpp
typedef struct MLControllerSystemStateEx MLControllerSystemStateEx;
```

A structure containing information about the current state of the controller system. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md)


**API Level:**
  * 21




-----------


## Functions Documentation

### MLControllerSystemStateExInit {#void-mlcontrollersystemstateexinit}

```cpp
static inline void MLControllerSystemStateExInit(
    MLControllerSystemStateEx * inout_attr
)
```

Initializes values for [MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md) * |inout_attr|The object to initialize. |



**API Level:**
  * 21




-----------

### MLControllerCreateEx {#mlresult-mlcontrollercreateex}

```cpp
MLResult MLControllerCreateEx(
    const MLControllerConfiguration * mode,
    MLHandle * out_handle
)
```

Creates a controller tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLControllerConfiguration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_configuration.md) * |mode|A pointer to [MLControllerConfiguration](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_configuration.md) struct which contains the tracking modes to use for this session. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A pointer to an [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) which will the handle to the controller tracker. If this operation fails, out_handle will be [ML_INVALID_HANDLE](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#enums-ml-invalid-handle).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create a controller tracker due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Controller Succesfully created a controller tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed to create a controller tracker due to lack of permission.|
**Required Permissions**:

  * None 





**API Level:**
  * 4




-----------

### MLControllerDestroy {#mlresult-mlcontrollerdestroy}

```cpp
MLResult MLControllerDestroy(
    MLHandle tracker
)
```

Destroys a controller tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |tracker|MLHandle to the tracker created by [MLControllerCreateEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollercreateex).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed the controller tracker. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy the controller tracker due to an unknown error.|
**Required Permissions**:

  * None 






-----------

### MLControllerGetState {#mlresult-mlcontrollergetstate}

```cpp
MLResult MLControllerGetState(
    MLHandle handle,
    struct MLControllerSystemState * out_state
)
```

Return the most recent controller state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the tracker created by [MLControllerCreateEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollercreateex). |
| struct [MLControllerSystemState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md) * |out_state|Pointer to valid [MLControllerSystemState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state.md) object to be filled with current state information.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to get the controller state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully filled out_state with current state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal.
:::



-----------

### MLControllerGetStateEx {#mlresult-mlcontrollergetstateex}

```cpp
MLResult MLControllerGetStateEx(
    MLHandle handle,
    MLControllerSystemStateEx * out_state
)
```

Return the most recent controller state. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the tracker created by [MLControllerCreateEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/group___controller.md#mlresult-mlcontrollercreateex). |
| [MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md) * |out_state|Pointer to valid [MLControllerSystemStateEx](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___controller/struct_m_l_controller_system_state_ex.md) object to be filled with current state information.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to get the controller state due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully filled out_state with current state. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PerceptionSystemNotStarted|Perception System has not been started.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------






