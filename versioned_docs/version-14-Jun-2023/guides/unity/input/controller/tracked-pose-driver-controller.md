---
id: tracked-pose-driver-controller
title: Controller Tracked Pose Driver
sidebar_position: 1
date: 1/28/2022
tags: [UnityController, Input, Porting]
keywords: [UnityController, Input, Porting]
---

## Unity Input System - Tracked Pose Driver

The Tracked Pose Driver component is provided by Unity and allows objects to mirror the positional and rotation input of any [input device](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/api/UnityEngine.InputSystem.InputDevice.html). Perform the following steps to track the position of the controller:

1. Add a **Tracked Pose Driver (Input System)** component to the target transform.
2. Set the tracking type to **Rotation And Position**.
3. In the **Position Input** section, select the **+** icon, and set the path to `MagicLeapController/devicePosition` or `XRController/devicePosition`.
4. Next in the **Rotation Input** section, select the **+** icon, and set the path to `MagicLeapController/deviceRotation`.

<Image url= {require("/img/unity/input/controller/TrackedPoseDriver_Controller.png")} >Unity Input System's Tracked Pose Driver Component</Image>

### Control Binding Paths

Unity's Input System can look up Controls using paths. Bindings on Input Actions rely on this feature to identify the Control(s) they read input from. However, you can also use them for lookup directly on Controls and Devices, or to let the Input System search for Controls among all devices using [`InputSystem.FindControls`](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/api/UnityEngine.InputSystem.InputSystem.html#UnityEngine_InputSystem_InputSystem_FindControls_System_String_).

See Unity's [Control Path](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/Controls.html#control-paths) documentation to learn more.

| Action                      | Binding Path                                                                    |
|-----------------------------|---------------------------------------------------------------------------------|
| Bumper                      | MagicLeapController/gripbutton                                                  |
| Is Tracked                  | MagicLeapController/isTracked                                                   |
| Menu                        | MagicLeapController/menubutton                                                  |
| Position                    | MagicLeapController/devicePosition                                              |
| Rotation                    | MagicLeapController/deviceRotation                                              |
| Touchpad                    | MagicLeapController/primary2daxis <br></br> MagicLeapController/mlcontrollertouchforce |
| Touchpad (2nd Finger Touch) | N/A                                           |
| Trigger                     | MagicLeapController/TriggerAxis                                                 |

## XR - XR Controller

Alternatively, you can use either the action based or the device based XRController components.

### Device Based

1. Add a **XR Controller (Device-based)** component to the target transform.
2. Enable **Input Tracking**
3. Next, enable **Input Actions**
4. Finally, set the Controller Node to **Game Controller**.

<Image url= {require("/img/unity/input/controller/XRController_DeviceBased.png")} >Unity's Device Based XR Controller Component</Image>

### Action Based

1. Add a **XR Controller (Action-based)** component to the target transform.
2. Enable **Input Tracking**
3. Under the **Position Action**, select the **+** icon, and bind the position to **devicePosition [XR Controller**]
4. Finally, in the **Position Action**, select the **+** icon, and bind the rotation to **deviceRotation [XR Controller**]

<Image url= {require("/img/unity/input/controller/XRController_ActionBased.png")} >Unity's Action Based XR Controller Component</Image>
