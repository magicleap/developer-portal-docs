---
id: tracked-pose-driver-hmd
title: HMD Tracked Pose Driver
sidebar_position: 1.5
date: 1/28/2022
tags: [UnityHMD, Input]
keywords: [UnityHMD, Input]
---



In order for your unity camera to track with head pose, it needs to have the Tracked Pose Driver component with the following settings. Depending on your app setup, you can either add this component to the main camera yourself, or get it through prefabs like the XRRig (from the XR Interaction Toolkit) or the "Main Camera" (from our SDK package).

## Unity Input System - Tracked Pose Driver

The Tracked Pose Driver allows objects to mirror the positional and rotation input of any [Input Device](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/api/UnityEngine.InputSystem.InputDevice.html). To track the HMD position :

1. Add a **Tracked Pose Driver (Input System)** component to the target transform.
2. Set the Tracking Type to **Rotation And Position**.
3. For the both the Position and Rotation input set the Input Action binding path to **XR HMD**.

<Image url= {require("/img/unity/input/head-tracking/Unity_TrackedPoseDriver.png")} >Unity Input System's Tracked Pose Driver Component</Image>

## XR - Tracked Pose Driver

The Tracked Pose Driver component has the same functionality as the Tracked Pose Driver (Input System) component. However, instead of binding to an Input Device, the XR version is bound to an XR Device. To mirror the HMD's positional and rotational input do the following :

1. Add a **Tracked Pose Driver** component to the target transform.
2. Set the device to **Generic XR Device**.
3. Set the pose source as **Center Eye - HMD Reference**
4. Finally, set the Tracking Type to **Rotation And Position**.

<Image url= {require("/img/unity/input/head-tracking/Unity_TrackedPoseDriver_InputSystem.png")} >Unity's XR Tracked Pose Driver Component</Image>

## See also

- [Porting Guide](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md)
  - Learn how to access the Magic Leap's Head Tracking state and mapping events.
- [`MLHeadTracking.TryGetMapEvents(headDevice, out MLHeadTracking.MapEvents mapEvents);`](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md)
  - API to retrieve the Head Tracking Map Events.
- [`MLHeadTracking.TryGetState(headDevice, out MLHeadTracking.State state);`](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md)
  - API to retrieve the Head Tracking State Events.
