---
id: unity-hmd-overview
title: Head Tracking Overview
sidebar_position: 0
date: 1/28/2022
tags: [UnityHMD, Input]
keywords: [UnityHMD, Input]
---


Head tracking uses cameras on the headset to track the movement of the user’s head. This allows the headset to display 3D content at a specific point in the user's viewing area.


## Overview

The Magic Leap 2's Head Mounted Display input is separated into two parts:

1. Input that is generic and can be accessed using Unity's [Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/QuickStartGuide.html).
2. Device specific input such as Mapping and Head Tracking State events can be accessed using Magic Leap's `InputSubsystem.Extensions`.

:::info
Map Events are now exposed and can be accessed using[`MLHeadTracking.TryGetMapEvents(headDevice, out MLHeadTracking.MapEvents mapEvents);`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md)
:::

## See also

- [Tracked Pose Driver](/versioned_docs/version-31-Aug-2023/guides/unity/input/head-tracking/tracked-pose-driver-hmd.md)
  - An easy way to access the HMD's positional and rotational input.
- [Porting Guide](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md)
  - Learn how to access the Magic Leap's Head Tracking state and mapping events.

