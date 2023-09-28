---
title: MLInputControllerTouchpadGesture

---

# MLInputControllerTouchpadGesture

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



 [More...](#detailed-description)


`#include <ml_input.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLVec3f](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_vec3f.md) | **[pos_and_force](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md#mlvec3f-pos-and-force)** <br></br>Gesture position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range.  |
| [MLInputControllerTouchpadGestureType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertouchpadgesturetype) | **[type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md#mlinputcontrollertouchpadgesturetype-type)**  |
| [MLInputControllerTouchpadGestureDirection](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertouchpadgesturedirection) | **[direction](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md#mlinputcontrollertouchpadgesturedirection-direction)**  |
| float | **[speed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md#float-speed)** <br></br>Speed of gesture. Note that the value has different meanings depending on the gesture type being performed. For radial scroll the distance is the difference in angles between the start and the end of the gesture.  |
| float | **[distance](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md#float-distance)** <br></br>For radial gestures, this is the absolute value of the angle.  |
| float | **[radius](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md#float-radius)** <br></br>For radial gestures, this is the radius of the gesture.  |
| float | **[angle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md#float-angle)**  |

## Detailed Description

```cpp
struct MLInputControllerTouchpadGesture;
```


A structure containing information about recognized touchpad gesture. 





-----------
## Public Attributes Documentation

### pos_and_force {#mlvec3f-pos-and-force}

```cpp
MLVec3f pos_and_force;
```

Gesture position (x,y) and force (z). Position is in the [-1.0,1.0] range and force is in the [0.0,1.0] range. 





-----------

### type {#mlinputcontrollertouchpadgesturetype-type}

```cpp
MLInputControllerTouchpadGestureType type;
```


Type of gesture. Supported gesture types are listed below: 

* Tap gesture. 
* Force tap down gesture. 
* Second force down gesture. 
* Force tap up gesture. 
* Force dwell gesture. 
* Radial scroll gesture. 
* Swipe gesture. 





-----------

### direction {#mlinputcontrollertouchpadgesturedirection-direction}

```cpp
MLInputControllerTouchpadGestureDirection direction;
```


Direction of gesture. 





-----------

### speed {#float-speed}

```cpp
float speed;
```

Speed of gesture. Note that the value has different meanings depending on the gesture type being performed. For radial scroll the distance is the difference in angles between the start and the end of the gesture. 





-----------

### distance {#float-distance}

```cpp
float distance;
```

For radial gestures, this is the absolute value of the angle. 





-----------

### radius {#float-radius}

```cpp
float radius;
```

For radial gestures, this is the radius of the gesture. 





-----------

### angle {#float-angle}

```cpp
float angle;
```


Angle between the positive x axis and the ray to the finger point in radians. 





-----------


