---
title: MLInputControllerCallbacksEx
summary: a structure containing callbacks for input controller events. 

---

# MLInputControllerCallbacksEx

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing callbacks for input controller events.  [More...](#detailed-description)


`#include <ml_input.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#uint32-t-version)**  |
| void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) | **[on_touchpad_gesture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-touchpad-gesture)** <br></br>This callback will be invoked whenever a touch gesture is detected. This callback will be called for both discrete and continuous gestures.  |
| void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) | **[on_touchpad_gesture_continue](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-touchpad-gesture-continue)** <br></br>This callback will be invoked whenever a continuation of a touch gesture is detected. This callback will be called only for continuous gestures.  |
| void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) | **[on_touchpad_gesture_end](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-touchpad-gesture-end)** <br></br>This callback will be invoked whenever a continuous touch gesture ends. This callback will be called only for continuous gestures.  |
| void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) | **[on_button_down](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-button-down)** <br></br>This callback will be invoked whenever a controller button is pressed. This callback will be called only for discrete gestures.  |
| void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) | **[on_button_up](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-button-up)** <br></br>This callback will be invoked whenever a controller button is released.  |
| void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) | **[on_button_click](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-button-click)** <br></br>This callback will be invoked whenever a controller button is pressed and released within a short duration.  |
| void(*)(uint8_t controller_id, MLInputControllerTriggerEvent event, float depth, void *data) | **[on_trigger](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-trigger)** <br></br>This callback will be invoked whenever a controller trigger state is changed.  |
| void(*)(uint8_t controller_id, void *data) | **[on_connect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-connect)** <br></br>This callback will be invoked whenever a controller is connected.  |
| void(*)(uint8_t controller_id, void *data) | **[on_disconnect](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md#void-on-disconnect)** <br></br>This callback will be invoked whenever a controller is disconnected.  |

## Detailed Description

```cpp
struct MLInputControllerCallbacksEx;
```

A structure containing callbacks for input controller events. 

The final parameter to all the callbacks is a void *, which will point to whatever payload data the user provides in MLInputSetControllerCallbacksEx. Individual callbacks which are not required by the client can be NULL.

This structure must be initialized by calling [MLInputControllerCallbacksExInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlinputcontrollercallbacksexinit) before use.




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

### on_touchpad_gesture {#void-on-touchpad-gesture}

```cpp
void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) on_touchpad_gesture;
```

This callback will be invoked whenever a touch gesture is detected. This callback will be called for both discrete and continuous gestures. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) | )(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |touchpad_gesture|Pointer to the struct containing state of the controller. |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------

### on_touchpad_gesture_continue {#void-on-touchpad-gesture-continue}

```cpp
void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) on_touchpad_gesture_continue;
```

This callback will be invoked whenever a continuation of a touch gesture is detected. This callback will be called only for continuous gestures. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) | )(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |touchpad_gesture|Pointer to the struct containing state of the controller. |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------

### on_touchpad_gesture_end {#void-on-touchpad-gesture-end}

```cpp
void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) on_touchpad_gesture_end;
```

This callback will be invoked whenever a continuous touch gesture ends. This callback will be called only for continuous gestures. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) | )(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |touchpad_gesture|Pointer to the struct containing state of the controller. |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------

### on_button_down {#void-on-button-down}

```cpp
void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) on_button_down;
```

This callback will be invoked whenever a controller button is pressed. This callback will be called only for discrete gestures. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) | )(uint8_t controller_id, MLInputControllerButton button, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |button|Value of the controller button. |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------

### on_button_up {#void-on-button-up}

```cpp
void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) on_button_up;
```

This callback will be invoked whenever a controller button is released. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) | )(uint8_t controller_id, MLInputControllerButton button, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |button|Value of the controller button. |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------

### on_button_click {#void-on-button-click}

```cpp
void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) on_button_click;
```

This callback will be invoked whenever a controller button is pressed and released within a short duration. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, MLInputControllerButton button, void *data) | )(uint8_t controller_id, MLInputControllerButton button, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |button|Value of the controller button. |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------

### on_trigger {#void-on-trigger}

```cpp
void(*)(uint8_t controller_id, MLInputControllerTriggerEvent event, float depth, void *data) on_trigger;
```

This callback will be invoked whenever a controller trigger state is changed. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, MLInputControllerTriggerEvent event, float depth, void *data) | )(uint8_t controller_id, MLInputControllerTriggerEvent event, float depth, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |event|Value of the trigger event. |
|  |depth|Normalized value of trigger pressing (0.0 ~ 1.0) |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------

### on_connect {#void-on-connect}

```cpp
void(*)(uint8_t controller_id, void *data) on_connect;
```

This callback will be invoked whenever a controller is connected. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, void *data) | )(uint8_t controller_id, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------

### on_disconnect {#void-on-disconnect}

```cpp
void(*)(uint8_t controller_id, void *data) on_disconnect;
```

This callback will be invoked whenever a controller is disconnected. 


| Type | Description |
|--|--|
| void(*)(uint8_t controller_id, void *data) | )(uint8_t controller_id, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |controller_id|Id of the controller. |
|  |data|User data as passed to [MLInputSetControllerCallbacksEx()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex). |




-----------


