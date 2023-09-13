---
id: unity-simple-interaction
title: Simple Grab Interaction
sidebar_position: 5
date: 9/11/2-23
tags: [Unity, Overview, Getting Started, Hello Cube]
keywords: [Unity, Overview, Getting Started, Hello Cube]
---

This document provides step-by-step instructions on how to create a cube that can be selected, grabbed and manipulated using Unity's [XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.4/manual/index.html) and the sample scene created in the [Building a Simple App](/docs/guides/unity/getting-started/unity-building-simple-app.md) guide.

By the end of this guide, developers should have a better understanding on how to use the XR Grab Interactable script to allow Magic Leap 2 users to interact with gameobjects in the scene.

## Prerequisites

- [Configured Unity Settings](/docs/guides/unity/getting-started/configure-unity-settings.md)
- [Completed the Building a Simple App tutoria](/docs/guides/unity/getting-started/unity-building-simple-app.md)

## Enabling Controller Input

You can learn more about what each portion of this script does in the [Controller input Unity guides](docs/guides/unity/input/controller/controller-overview.md).

1. Select the XR Rig prefab in the scene and in the inspector make sure that the Action Assets in the Input Action Manager script are set to **Magic Leap Inputs (Input Action Asset)**.

<img src="/img/unity/simple-app-interaction/ml-inputs-action-asset.png" width="900"/>

## Adding Unity XR interaction

This section will utilize a [Unity XR Interaction](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.4/manual/index.html) script allowing the user to grab the cube created in the previous tutorial.

1. Selected the previously created cube from [Building a Simple App](/docs/guides/unity/getting-started/unity-building-simple-app.md) and rename it to **Grabbable Cube**.

2. Add a box collider to the Grabbable Cube if it is not already present. This will allow for raycasts from the controller to be detected by the cube.

3. In the scene hierarchy, right click in an empty space and select **XR > Interaction Manager** to add a new XR Interaction manager to the scene.

    - The [XR Interaction Manager](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/manual/xr-interaction-manager.html#:~:text=The%20Interaction%20Manager%20acts%20as,set%20of%20Interactors%20and%20Interactables.) script act as an intermediary between Interactors and Interactables in Unity's XR Interaction Toolkit (XRI) and many of the methods on Interactors and Interactables in Unity XRI are designed to be called by the Interaction Manager instead of directly in order to maintain consistency between both targets of an interaction event.

4. Select the Grabbable Cube and in the inspector click **Add Component > XR Grab Interactable**.

    - The [XR Grab Interactable](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/manual/xr-grab-interactable.html) script is an Interactable component that hooks into the interaction system (via *XRInteractionManager*) to allow basic "grab" functionality. Can attach to a selecting Interactor and follow it around while obeying physics (and inherit velocity when released).

    - For the actions to work properly, the input objects (the controller in this case) Requires the *XR Controller* component, which translates the input actions into generic XR Input events, and *XR Ray Interactor* component, which controls the Ray and the interactor's properties.

5. Select the **Grabbable Cube**.

6. Navigate to the **XR Grab Interactable** component and set the **Interaction Manager** to the newly created **XR Interaction Manager** object.


7. Set the parameters of the **XR Grab Interactable** script to the following settings for smooth movement of the cube:

<img src="/img/unity/simple-app-interaction/xr-grab-interactable.png" width="900"/>

8. Add a **Rigidbody** component in order for the cube to interact with physics forces in the scene
    - Disable *Use Gravity* and *Is Kinematic*. This will prevent the object from falling to the ground when released by the controller.
    - Set Collision Detection to *Continuous Dynamic* so the cube can continuously detect a raycast from the controller.

<img src="/img/unity/simple-app-interaction/rigidbody-settings.png" width="900"/>

This final component hierarchy on the Grabbable Cube will look like this: 

<img src="/img/unity/simple-app-interaction/grabbable-cube-settings.png" width="900"/>

9. Select the **Game Controller** from the scene hierarchy (XR Rig/Session Origin/Game Controller).

10. In the Inspector, find the **XR Ray Interactor** script attached to this object. Drag the **XR Interaction Manager** from the scene into the **XR Interaction Manager** slot in the script and **uncheck** the *Force grab* option in the script as shown below:

<img src="/img/unity/simple-app-interaction/xr-ray-interactor.png" width="900"/>

This will prevent the Cube from sliding to the location of the controller when grabbed and instead allow for it to be manipulated at a distance.

## Adding Hover Interaction

One of the features of the XR Grab Interactable Script is that it allows the grabbed object to respond hover events. This section will explain how to change the Grabbable Cube's material on different hover behaviors.

1. Create 3 new materials: Cyan (00FFFF), Magenta (FF00FF), and Yellow (FFFF00).

2. Select the Grabbable Cube

3. In the inspector, find the XR Grab Interactable script and scroll down to the *Interactable Events* section to see hover event options.
4. Under *Hover Enetered*, drag the Grabbable Cube into the Object slot and in the function dropdown select *MeshRenderer > Material*. Then drag the Cyan material into the material slot.
5. Repeat the same step for *Hover Exited* using the Magenta material and *Select Entered* using the Yellow material.

The final Hover actions will look like this:

<img src="/img/unity/simple-app-interaction/hover-interactions.png" width="900"/>

## Test the project

1. Save the scene.
2. Make sure the device is connected to the computer.
3. Go to **File>Build Settings**, select the current scene and click **Build and Run**.

You should be able to pick up the cube by hovering over the cube with the controller ray and pressing the trigger, and release it by letting go of the trigger button. The cube will change colors based on the controller's hover behavior.
