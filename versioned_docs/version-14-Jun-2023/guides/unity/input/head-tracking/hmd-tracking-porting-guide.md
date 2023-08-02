---
id: hmd-tracking-porting-guide
title: Migrating from ML1
sidebar_position: 4
date: 1/28/2022
tags: [UnityHMD, Input, Porting]
keywords: [UnityHMD, Input, Porting]
---

This article provides an overview on the changes that were made to the Magic Leap SDK and how to access Magic Leap 1 equivalent features on the Magic Leap 2.

Both Magic Leap 1 and Magic Leap 2 define these APIs under the `UnityEngine.XR.MagicLeap` namespace.

## API Transition Table

|Topic | Magic Leap 1 | Magic Leap 2|
|---------------| --------------  | --------------|
|State |`MLHeadTracking.GetState(out State state)`|`MLHeadTracking.TryGetStateEx(headDevice, out MLHeadTracking.State state);`|
|Map Events |Delegates were exposed but didn't work|`MLHeadTracking.TryGetMapEvents(headDevice, out MLHeadTracking.MapEvents mapEvents);`|

:::info
Head tracking state provides information like tracking mode, confidence and reason for tracking errors.
:::

## Overview

```csharp
using UnityEngine.XR.MagicLeap;
using InputDevice = UnityEngine.XR.InputDevice;
using static UnityEngine.XR.MagicLeap.InputSubsystem.Extensions;
 
 
private InputDevice headDevice;
...
// Initialize headDevice in Start() or Update()
headDevice = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.HeadMounted | InputDeviceCharacteristics.TrackedDevice);

// Access the head tracking state
MLHeadTracking.TryGetStateEx(headDevice, out MLHeadTracking.StateEx state);
// Access the head tracking map events
MLHeadTracking.TryGetMapEvents(headDevice, out MLHeadTracking.MapEvents mapEvents);
```

## See also

- [`MLHeadTracking.TryGetMapEvents(headDevice, out MLHeadTracking.MapEvents mapEvents);`](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md)
  - API to retrieve the Head Tracking Map Events.
- [`MLHeadTracking.TryGetStateEx(headDevice, out MLHeadTracking.State state);`](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLHeadTracking/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.md)
  - API to retrieve the Head Tracking State Events.
- [Tracked Pose Driver](/docs/guides/unity/input/head-tracking/tracked-pose-driver-hmd.md)
  - An easy way to access the HMD's positional and rotational input.
