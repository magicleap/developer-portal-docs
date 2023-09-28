---
id: tracked-pose-driver-eye-tracking
title: Eye Tracking Tracked Pose Driver
sidebar_position: 1.5
date: 1/28/2022
tags: [Unity, Eye Tracking, Input]
keywords: [Unity, Eye Tracking, Input]
---

:::note
If your Application collects, stores, transfers or otherwise uses data off the Magic Leap 2 device that is received via this API, then you must comply with the [Magic Leap 2 Eye Tracking Data Transparency Policy](https://www.magicleap.com/eye-tracking).
:::

In addition to getting the eye center and fixation point transforms in code via the `UnityEngine.InputSystem.XR.Eyes` struct, you can also use the `TrackedPoseDriver` component, as long as it has been configured with the appropriate input action bindings.

1. Add the Tracked Pose driver Component
2. Select the **+** icon under the **Position Input** section
3. Add the path to eye binding of your choice.
4. If rotation is desired, repeat steps 2 and 3 under the components **Rotation Input**.

:::caution
This features requires the `EYE_TRACKING` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**). Afterwards the Eye Tracking service needs to be started by calling `InputSubsystem.Extensions.MLEyes.StartTracking()`.
:::

Example

|Fixation Data Position | Right Eye Position + Rotation | Left Eye Position + Rotation|
|---------------| --------------  | --------------|
|![MagicLeapEyes/eyesdata/Fixation](/img/unity/input/eye-tracking/TrackedPoseDriver_FixationPoint.png)|![MagicLeapEyes/eyesdata/LeftEyePosition](/img/unity/input/eye-tracking/TrackedPoseDriver_LeftEyeCenter.png)|![MagicLeapEyes/eyesdata/LeftEyePosition](/img/unity/input/eye-tracking/TrackedPoseDriver_RightEyeCenter.png)|

