---
id: eye-tracking-subsystem-extension
title: Magic Leap Eye Tracking Data
sidebar_position: 1
date: 1/28/2022
tags: [Unity, Eye Tracking, Input, Porting]
keywords: [Unity, Eye Tracking, Input, Porting]
---

# Magic Leap Eye Tracking Data
To obtain Magic Leap device specific features such as checking the eye tracking FixationConfidence status or if the user is blinking use Magic Leap's [InputSubsystem.Extensions](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.md)

:::note
If your Application collects, stores, transfers or otherwise uses data off the Magic Leap 2 device that is received via this API, then you must comply with the [Magic Leap 2 Eye Tracking Data Transparency Policy](https://www.magicleap.com/eye-tracking).
:::

Below is a list of some of the data that can be obtained via the [`EyeTrackingState`](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md).

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

### Eye Width Max  Example

This example shows how to obtain the maximum value for the height and width of the eye_left and eye_right vector as well as the location of the 3D vergence point, intersection of 3D gaze vectors.

:::caution
This features requires the `EYE_TRACKING` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

```csharp

using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.MagicLeap;

public class GazeRecognitionTest : MonoBehaviour
{
    // Was EyeTracking permission granted by user
    private bool permissionGranted = false;
    private readonly MLPermissions.Callbacks permissionCallbacks = new MLPermissions.Callbacks();

    private void Awake()
    {
        permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
        permissionCallbacks.OnPermissionDenied += OnPermissionDenied;
        permissionCallbacks.OnPermissionDeniedAndDontAskAgain += OnPermissionDenied;

        MLPermissions.RequestPermission(MLPermission.EyeTracking, permissionCallbacks);
    }

    private void OnDestroy()
    {
        permissionCallbacks.OnPermissionGranted -= OnPermissionGranted;
        permissionCallbacks.OnPermissionDenied -= OnPermissionDenied;
        permissionCallbacks.OnPermissionDeniedAndDontAskAgain -= OnPermissionDenied;
    }

    private void Update()
    {
        if (!permissionGranted)
        {
            return;
        }

        MLResult gazeStateResult = MLGazeRecognition.GetState(out MLGazeRecognition.State state);
        MLResult gazeStaticDataResult = MLGazeRecognition.GetStaticData(out MLGazeRecognition.StaticData data);

        Debug.Log($"MLGazeRecognitionStaticData {gazeStaticDataResult.Result}\n" +
            $"Vergence {data.Vergence}\n" +
            $"EyeHeightMax {data.EyeHeightMax}\n" +
            $"EyeWidthMax {data.EyeWidthMax}\n" +
            $"MLGazeRecognitionState: {gazeStateResult.Result}\n" +
            state.ToString());
    }

    private void OnPermissionDenied(string permission)
    {
        MLPluginLog.Error($"{permission} denied, test won't function.");
    }

    private void OnPermissionGranted(string permission)
    {
        permissionGranted = true;
    }
}

```

## See also

- [`MLEyes.State`](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLEyes/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLEyes.State.md)
  - API documentation of Magic Leap's `MLEyes.State` struct.
- [`InputSubsystem.Utils.FindMagicLeapDevice()`](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/UnityEngine.XR.MagicLeap.InputSubsystem.Utils.md)
  - API documentation of Magic Leap's Input System Utils.
- [`InputSubsystem.Extensions.TryGetEyeTrackingState()`](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.md)
  - API documentation of Magic Leap's Input System Extensions.
