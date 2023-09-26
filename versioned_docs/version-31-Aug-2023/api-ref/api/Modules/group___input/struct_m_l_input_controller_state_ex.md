---
title: MLInputControllerStateEx
summary: a structure containing information about the current state of an input controller. 

---

# MLInputControllerStateEx

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing information about the current state of an input controller.  [More...](#detailed-description)


`#include <ml_input.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#uint32-t-version)**  |
| [MLInputControllerType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertype) | **[type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#mlinputcontrollertype-type)**  |
| [MLInputControllerHand](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollerhand) | **[hand](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#mlinputcontrollerhand-hand)**  |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md)[MLInput_MaxControllerTouchpadTouches] | **[touch_pos_and_force](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#mlvec3f-touch-pos-and-force)** <br></br>Current touch position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range.  |
| float | **[trigger_normalized](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#float-trigger-normalized)**  |
| bool[MLInputControllerButton_Count] | **[button_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#bool-button-state)**  |
| bool[MLInput_MaxControllerTouchpadTouches] | **[is_touch_active](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#bool-is-touch-active)**  |
| bool | **[is_connected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#bool-is-connected)**  |
| [MLInputControllerTouchpadGesture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md) | **[touchpad_gesture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#mlinputcontrollertouchpadgesture-touchpad-gesture)**  |
| [MLInputControllerTouchpadGestureState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertouchpadgesturestate) | **[touchpad_gesture_state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#mlinputcontrollertouchpadgesturestate-touchpad-gesture-state)**  |
| uint8_t | **[hardware_index](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md#uint8-t-hardware-index)** <br></br>Hardware index of this controller. For ML2 physical controller this value will always be 0.  |

## Detailed Description

```cpp
struct MLInputControllerStateEx;
```

A structure containing information about the current state of an input controller. 




**API Level:**
  * 21




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### type {#mlinputcontrollertype-type}

```cpp
MLInputControllerType type;
```


Type of this controller. 





-----------

### hand {#mlinputcontrollerhand-hand}

```cpp
MLInputControllerHand hand;
```



| Type | Description |
|--|--|
| [MLInputControllerHand](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollerhand) | Hand in which the controller is held.  |


Controller holding hand. 





-----------

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

### hardware_index {#uint8-t-hardware-index}

```cpp
uint8_t hardware_index;
```

Hardware index of this controller. For ML2 physical controller this value will always be 0. 





-----------


