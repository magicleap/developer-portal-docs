---
id: sdk-controller-scene
title: Controller
description: An overview of the controller demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 4
date: 1/28/2022
keywords: [Unity, Controller, Input, XR Interaction Toolkit, Examples]
tags: [Unity, Controller, Input, XR Interaction Toolkit, Examples]
---


## Overview

The controller example scene provided with the Magic Leap Unity Examples Project provides developers with simple demonstrations of typical controller interactions. The included prefabs utilize the [XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/index.html)(XRI) for familiar interaction standards and direct access to Unity events. This project gives you an excellent starting point for becoming familiar with the tools and scripts that allow you to take full advantage of the Magic Leap 2 controller.

To download the Examples project, follow the [Getting Started Guide](/docs/guides/unity/getting-started/unity-getting-started.md). The controller scene can be found under `Assets/MagicLeap/Examples/Scenes/Control`.

## Scene Hierarchy and Prefab Locations

The screenshot below shows the scene hierarchy, with the prefabs relevant to the walkthrough highlighted in blue:

<Image url= {require("/img/unity/input/controller/xri-example-walkthrough/sceneHierarchy.png")} >Scene Hierarchy</Image>

Those prefabs can be found in the following file locations:

- Controller Prefab: `Assets/MagicLeap/Examples/Assets/Prefabs`
- UIEventSystem: `Assets/MagicLeap/Examples/UI/Prefabs`
- UserInterface: `Assets/MagicLeap/Examples/UI/Prefabs`
- Main Camera: `Packages/Magic Leap SDK/Tools/Prefabs`

## Magic Leap Input Asset

Data for input and controller bindings are configured in the Magic Leap Input Asset, which utilizes the Unity Input System. The Input Asset can be found in the Magic Leap SDK package located in: `Packages/Magic Leap SDK/Subsystems/Input`.

For more information on how Magic Leap 2 interfaces with Unity's Input System, reference our [ML1 Controller Porting Guide](/docs/guides/unity/input/controller/controller-porting-guide.md).

<Image url= {require("/img/unity/input/controller/xri-example-walkthrough/inputAsset2.png")} >Input Asset In Project Folder</Image>

<Image url= {require("/img/unity/input/controller/xri-example-walkthrough/inputAsset3.png")} >Input Asset Expanded</Image>

## Component Breakdown

The following components are included in the example scene, divided into categories by organizational game objects:

### Control Example Script

This script contains examples of subscribing to controller events and sample data from each event. These events are closely tied to the Magic Leap Inputs Asset in the Magic Leap SDK package (explained above and found at `Packages/Magic Leap SDK/Subsystems/Input`).

This section enables the newly declared `MagicLeapInputs` class and then uses `controllerActions` to subscribe to each controller event:

```csharp showLineNumbers
using System.Text;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;
using UnityEngine.XR.MagicLeap;

namespace MagicLeap
{
    /// <summary>
    /// This class provides examples of how you can use haptics
    /// on the Control.
    /// </summary>
    public class ControlExample : MonoBehaviour
    {
        private MagicLeapInputs mlInputs;
        private MagicLeapInputs.ControllerActions controllerActions;

        [SerializeField] private GestureSubsystemComponent gestureComponent;
        
        /// <summary>
        /// Initialize variables, callbacks and check null references.
        /// </summary>
        void Start()
        {
            mlInputs = new MagicLeapInputs();
            mlInputs.Enable();
            controllerActions = new MagicLeapInputs.ControllerActions(mlInputs);
            
            controllerActions.Touchpad1Position.performed += HandleOnTouchpad;
            // canceled event used to detect when bumper button is released
            controllerActions.Bumper.canceled += HandleOnBumper;
            controllerActions.Bumper.performed += HandleOnBumper;
            controllerActions.Trigger.performed += HandleOnTrigger;
        }
    ...
```

Those controller events can then be referenced with the following methods:

```csharp
/// <summary>
/// Handles the event for bumper.
/// </summary>
/// <param name="obj">Input Callback</param>
private void HandleOnBumper(InputAction.CallbackContext obj)
{
    bool bumperDown = obj.ReadValueAsButton();
    Debug.Log("was released this frame: " + obj.action.WasReleasedThisFrame());
    // On bumper down
    if (bumperDown)
    {
        // Do something...
    }
}

private void HandleOnTrigger(InputAction.CallbackContext obj)
{
    float triggerValue = obj.ReadValue<float>();
    ...
}

private void HandleOnTouchpad(InputAction.CallbackContext obj)
{
    Vector2 triggerValue = obj.ReadValue<Vector2>();
    ...
}
```

The values for each `InputAction.CallbackContext` are explicitly assigned in the Magic Leap Input Asset:

<Image url= {require("/img/unity/input/controller/xri-example-walkthrough/inputAsset.png")} >Magic Leap Input Asset Trigger Event</Image>

### Controller Prefab

The XRI controller prefab contains several scripts and components attached for convenience:

- Line Renderer: The visual of the raycast beam 
- XR Controller: Captures controller input from the Input Asset
- XR Ray Interactor: Raycasts and provides feedback on ray collisions
- XR Interactor Line Visual: Controls the Line Renderer component
- Controller Status: A class that provides the current status of the controller, exposed in text format

### Gesture Subsystem

The Magic Leap SDK's Gesture Subsystem captures and displays activated controller gesture events. The event callbacks inform code when gesture events occur.

### UIEventSystem

XRI's UIEventSystem acts as a central dispatch for UI events to process input, and update individual active canvases. For more information, reference the [Unity XRI Manual](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/index.html).

### UserInterface

Basic user interface interaction setup within the scene, containing several useful components:

- Place From Camera: Script that pushes the UI window to a location in view
- User Interface: Script that manages the provided UI canvas and it’s components
- Tracked Device Graphic Raycaster: Custom XR Interaction implementation of the Graphic Raycaster component

### Main Camera

Magic Leap's camera prefab with an attached scene optimizer and tracked pose driver.
