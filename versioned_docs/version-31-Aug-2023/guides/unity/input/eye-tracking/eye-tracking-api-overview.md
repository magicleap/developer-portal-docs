---
id: eye-tracking-api-overview
title: API Overview
sidebar_position: 1
date: 04/01/2022
tags: [Unity, Eye Tracking, Input, Overview]
keywords: [Unity, Eye Tracking, Input, Overview]
---

# Eye Tracking API Overview

Magic Leap's Eye Tracking data is retrieved in two ways.

1. Using Magic Leap's Eyes Action class and the Unity Input System
2. Using Magic Leap's Input Subsystem Extensions

Regardless of which data you access, you must initialize the Magic Leap Eye tracking service first.

:::note
If your Application collects, stores, transfers or otherwise uses data off the Magic Leap 2 device that is received via this API, then you must comply with the [Magic Leap 2 Eye Tracking Data Transparency Policy](https://www.magicleap.com/eye-tracking).
:::

## Initialize Eye Tracking

:::caution
This features requires the `EYE_TRACKING` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

```csharp
    InputSubsystem.Extensions.MLEyes.StartTracking();
```

## Eyes Action Input

The `EyesActions` class is populated using Unity's generic `UnityEngine.InputSystem.XR.Eyes` which is used for all devices that support eye tracking, because of this, `MagicLeapInputs.EyesActions` only contain generic eye tracking data, such as fixation point and position of an eye.

```csharp
...
    private MagicLeapInputs mlInputs;
    private MagicLeapInputs.EyesActions eyesActions;
    void Start()
    {
        InputSubsystem.Extensions.MLEyes.StartTracking();

        mlInputs = new MagicLeapInputs();
        mlInputs.Enable();
        eyesActions = new MagicLeapInputs.EyesActions(mlInputs);
    }
    void Update()
    {
        var eyes = eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>();
        //Access input such as eyes.fixationPoint.
     }
 ...
```

## Tracking State Data

 Any data that is not part of the generic input device is exposed as an extension (i.e. The [`TrackingState`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md)).

```csharp
    private InputDevice eyesDevice;
    
    void Start(){
        InputSubsystem.Extensions.MLEyes.StartTracking();
    }
    
    void Update()
    {
        if (!eyesDevice.isValid)
        {
            this.eyesDevice = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.EyeTracking | InputDeviceCharacteristics.TrackedDevice);
            return;
        }
        InputSubsystem.Extensions.TryGetEyeTrackingState(eyesDevice, out var trackingState);
        //Access input such as trackingState.FixationConfidence
    }
...
```

## Terminology

### EyePosition

The center of perspective rotation of an eye. It lies along the optical axis, behind the cornea, provided relative to the world origin.

### EyeRotation

The orientation of an relative to the world origin.  

### Eye fixation point  

The point where the ray from both of the user’s eyes meet, indicating where the user is currently looking. The 3d point in space where the user is looking -- intersection of the left and right visual axis vectors in 3D.

