---
id: eye-tracking-subsystem-extension
title: Magic Leap Eye Tracking Data
sidebar_position: 1
date: 1/28/2022
tags: [Unity, Eye Tracking, Input, Porting]
keywords: [Unity, Eye Tracking, Input, Porting]
---

# Magic Leap Eye Tracking Data
To obtain Magic Leap device specific features such as checking the eye tracking FixationConfidence status or if the user is blinking use Magic Leap's [InputSubsystem.Extensions](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.md)

Below is a list of some of the data that can be obtained via the [`EyeTrackingState`](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md).

- Fixation Confidence
- Left/Right Blink
- Left/Right CenterConfidence
- Timestamp

### Fixation Confidence Example

This example shows how to obtain the Eye Tracking State from Magic Leap's Eye Tracking XR Device.

:::caution
This features requires the `EYE_TRACKING` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

```csharp
 ...
 //A cached version of the located Eye Tracking Input Device
 private InputDevice eyesDevice;
 
    void Start(){
      InputSubsystem.Extensions.MLEyes.StartTracking();
    }

    void Update()
    {
        if (!eyesDevice.isValid)
        {
            //Locate the input device using the FindMagicLeapDevice Util
            this.eyesDevice = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.EyeTracking | InputDeviceCharacteristics.TrackedDevice);
            return;
        }
        //Query for Eye Tracking State data
        InputSubsystem.Extensions.TryGetEyeTrackingState(eyesDevice, out MLEyes.State trackingState);
        Debug.Log("Fixation Confidence: " + trackingState.FixationConfidence);
        //Access the trackingState data
        if (trackingState.RightBlink)
        {
           Debug.Log("Right Eye Blink: " + trackingState.RightBlink);
        }
    }
 ...
```

## See also

- [`MLEyes.State`](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md)
  - API documentation of Magic Leap's `MLEyes.State` struct.
- [`InputSubsystem.Utils.FindMagicLeapDevice()`](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/UnityEngine.XR.MagicLeap.InputSubsystem.Utils.md)
  - API documentation of Magic Leap's Input System Utils.
- [`InputSubsystem.Extensions.TryGetEyeTrackingState()`](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.md)
  - API documentation of Magic Leap's Input System Extensions.

