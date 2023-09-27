---
title: MLInputControllerState
summary: a structure containing information about the current state of an input controller. 

---

# MLInputControllerState

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing information about the current state of an input controller.  [More...](#detailed-description)


`#include <ml_input.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md)[MLInput_MaxControllerTouchpadTouches] | **[touch_pos_and_force](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#mlvec3f-touch-pos-and-force)** <br></br>Current touch position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range.  |
| float | **[trigger_normalized](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#float-trigger-normalized)**  |
| bool[MLInputControllerButton_Count] | **[button_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#bool-button-state)**  |
| bool[MLInput_MaxControllerTouchpadTouches] | **[is_touch_active](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#bool-is-touch-active)**  |
| bool | **[is_connected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#bool-is-connected)**  |
| [MLInputControllerTouchpadGesture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md) | **[touchpad_gesture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#mlinputcontrollertouchpadgesture-touchpad-gesture)**  |
| [MLInputControllerTouchpadGestureState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertouchpadgesturestate) | **[touchpad_gesture_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#mlinputcontrollertouchpadgesturestate-touchpad-gesture-state)**  |
| [MLInputControllerType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertype) | **[type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#mlinputcontrollertype-type)**  |
| uint8_t | **[hardware_index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md#uint8-t-hardware-index)** <br></br>Hardware index of this controller. For ML2 physical controller this value will always be 0.  |

## Detailed Description

```cpp
struct MLInputControllerState;
```

A structure containing information about the current state of an input controller. 



:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal. 
:::



-----------
## Public Attributes Documentation

### touch_pos_and_force {#mlvec3f-touch-pos-and-force}

```cpp
MLVec3f[MLInput_MaxControllerTouchpadTouches] touch_pos_and_force;
```

Current touch position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range. 


| Type | Description |
|--|--|
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md)[MLInput_MaxControllerTouchpadTouches] | [MLInput_MaxControllerTouchpadTouches] |






-----------

### trigger_normalized {#float-trigger-normalized}

```cpp
float trigger_normalized;
```


Normalized trigger value [0.0,1.0]. 





-----------

### button_state {#bool-button-state}

```cpp
bool[MLInputControllerButton_Count] button_state;
```



| Type | Description |
|--|--|
| bool[MLInputControllerButton_Count] | [MLInputControllerButton_Count] |


Button states. 





-----------

### is_touch_active {#bool-is-touch-active}

```cpp
bool[MLInput_MaxControllerTouchpadTouches] is_touch_active;
```



| Type | Description |
|--|--|
| bool[MLInput_MaxControllerTouchpadTouches] | [MLInput_MaxControllerTouchpadTouches] |


If this controller's touch is active. 





-----------

### is_connected {#bool-is-connected}

```cpp
bool is_connected;
```


If this controller is connected. 





-----------

### touchpad_gesture {#mlinputcontrollertouchpadgesture-touchpad-gesture}

```cpp
MLInputControllerTouchpadGesture touchpad_gesture;
```


Current touchpad gesture. 





-----------

### touchpad_gesture_state {#mlinputcontrollertouchpadgesturestate-touchpad-gesture-state}

```cpp
MLInputControllerTouchpadGestureState touchpad_gesture_state;
```


Current touchpad gesture state. 





-----------

### type {#mlinputcontrollertype-type}

```cpp
MLInputControllerType type;
```


Type of this controller. 





-----------

### hardware_index {#uint8-t-hardware-index}

```cpp
uint8_t hardware_index;
```

Hardware index of this controller. For ML2 physical controller this value will always be 0. 





-----------


