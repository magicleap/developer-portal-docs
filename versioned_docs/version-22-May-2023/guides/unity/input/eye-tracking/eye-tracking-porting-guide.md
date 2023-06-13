---
id: eye-tracking-porting-guide
title: Migrating from ML1
sidebar_position: 2
date: 1/28/2022
tags: [Unity, Eye Tracking, Input, Porting]
keywords: [Unity, Eye Tracking, Input, Porting]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Upgrade to Magic Leap's new Eye Tracking APIs

The Magic Leap 2's eye tracking input can largely be accessed using Unity's [Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/QuickStartGuide.html). However, some platform specific values are accessed via the `TrackingState`, which can be retrieved using Magic Leaps `InputSubsystem.Extensions`.

:::note
If your Application collects, stores, transfers or otherwise uses data off the Magic Leap 2 device that is received via this API, then you must comply with the [Magic Leap 2 Eye Tracking Data Transparency Policy](https://www.magicleap.com/eye-tracking).
:::

When upgrading an ML1 app please note:

- The `MLEyesStarterKit` class has been removed
- Use the Unity Input System to obtain generic eye trying input data such fixation point and eye rotation.
- Use `InputSubsystem.Extensions.TryGetEyeTrackingState` to obtain the eye tracking state and access device specific input values such as fixation confidence and blink state.

These changes to the API were made to better support and align with existing Unity frameworks like AR Foundation, XR Interaction Toolkit and the new Input System.

## API Transition Table

| Topic                       | Magic Leap 1                                              | Magic Leap 2   |
|-----------------------------|--------------------------------------------------|------------------------------------------------------------------|
| Fixation point              | `MLEyes.FixationPoint`                           | `eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>().fixationPoint`                                                                                      |
| Left / Right eye center     | `MLEyes.LeftEye.Center`<br /><br />`MLEyes.LeftEye.Gaze` | `eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>().leftEyePosition`<br /><br />`eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>().leftEyeRotation` |
| Fixation confidence         | `MLEyes.FixationConfidence`                      | `MLEyes.TryGetState(eyesDevice, out MLEyes.State trackingState);`<br />`trackingState.FixationConfidence;`                                         |
| Left / Right eye confidence | `MLEyes.LeftEye.CenterConfidence`                | `MLEyes.TryGetState(eyesDevice, out MLEyes.State trackingState);`<br />`trackingState.LeftCenterConfidence;`                                   |
| Left / Right blink state    | `MLEyes.LeftEye.IsBlinking`                      | `MLEyes.TryGetState(eyesDevice, out MLEyes.State trackingState);`<br />`trackingState.LeftCenterConfidence;` |
| Calibration status          | **Currently Not Available**                      | `MLEyes.TryGetState(eyesDevice, out MLEyes.State trackingState);`<br />` trackingState.LeftBlink;`                                                  |
| Timestamp                   | `MLEyes.Timestamp`                               | `MLEyes.TryGetState(eyesDevice, out MLEyes.State trackingState);`<br />` trackingState.Timestamp` |
| Left / Right pupil size     | `MLEyes.LeftEye.PupilSize`                       | `eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>().leftEyeOpenAmount` |

## Example

Reference the example script below to see how the eye tracking APIs have changed.

<Tabs>  
<TabItem  value="diff"  label="Diff"  default>  
The differences between the Magic Leap 1 and Magic Leap 2 script.

```diff
 using UnityEngine;
 using UnityEngine.XR.MagicLeap;
+ using UnityEngine.XR;
+ using Eyes = UnityEngine.InputSystem.XR.Eyes;

public class ExampleEyeScript : MonoBehaviour
{
+    private MagicLeapInputs mlInputs;
+    private MagicLeapInputs.EyesActions eyesActions;
+    private InputDevice eyesDevice;

+    void Start()
+    {
+        //Initialize Magic Leap Eye Tracking
+        InputSubsystem.Extensions.MLEyes.StartTracking();
+        //Initialize Magic Leap inputs to capture input data
+        mlInputs = new MagicLeapInputs();
+        mlInputs.Enable();
+        eyesActions = new MagicLeapInputs.EyesActions(mlInputs);
+    }

    // Update is called once per frame
    void Update()
    {
+        if (!eyesDevice.isValid)
+        {
+            this.eyesDevice = InputSubsystem.Utils.FindMagicLeapDevice(
+                              InputDeviceCharacteristics.EyeTracking | InputDeviceCharacteristics.TrackedDevice);
+            return;
+        }
        
+        InputSubsystem.Extensions.TryGetEyeTrackingState(eyesDevice, out var trackingState);
+        Eyes eyes = eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>(); 

+        if (trackingState.FixationConfidence > 0.5f)
-        if (MLEyes.IsStarted && MLEyes.CalibrationStatus == MLEyes.Calibration.Good)
        {
            Vector3 worldPosition = Camera.main.transform.position;
+           Vector3 worldRotation = (eyes.fixationPoint - worldPosition).normalized;
-           Vector3 worldRotation = (MLEyes.FixationPoint - worldPosition).normalized;
            // Will only be visible in editor when using App Simulator
            Debug.DrawRay(worldPosition, worldRotation);

+            Debug.Log("Left Eye Is Blinking: " + trackingState.LeftBlink);
-            Debug.Log("Left Eye Is Blinking: " + MLEyes.LeftEye.IsBlinking);
+            Debug.Log("Left Eye Center: " + eyes.leftEyePosition);
-            Debug.Log("Left Eye Center: " + MLEyes.LeftEye.Center);
+            Debug.Log("Left Eye Rotation: " + eyes.leftEyeRotation);
-            Debug.Log("Left Eye Rotation: " + MLEyes.LeftEye.Gaze);
        }
    }
+    private void OnDestroy()
+    {
+        mlInputs.Disable();
+        mlInputs.Dispose();
+    }
}
```

</TabItem>  
<TabItem  value="ml1"  label="Magic Leap 1">

This is the Magic leap 1 script

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class ExampleEyeScript: MonoBehaviour
{
    // Update is called once per frame
    void Update()
    {
        if (MLEyes.IsStarted
            && MLEyes.CalibrationStatus == MLEyes.Calibration.Good)
        {
            Vector3 worldPosition = Camera.main.transform.position;
            Vector3 worldRotation = (MLEyes.FixationPoint - worldPosition).normalized;

            // Will only be visible in editor when using App Simulator
            Debug.DrawRay(worldPosition, worldRotation);

            Debug.Log("Left Eye Is Blinking: " + MLEyes.LeftEye.IsBlinking);
            Debug.Log("Left Eye Center: " + MLEyes.LeftEye.Center);
            Debug.Log("Left Eye Rotation: " + MLEyes.LeftEye.Gaze);
        }
    }
}
```

</TabItem>  
<TabItem  value="ml2"  label="Magic Leap 2">
  
This is the complete Magic Leap 2 Script

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR.MagicLeap;
using UnityEngine.XR;
using Eyes = UnityEngine.InputSystem.XR.Eyes;

public class ExampleEyeScript: MonoBehaviour
{
    private MagicLeapInputs mlInputs;
    private MagicLeapInputs.EyesActions eyesActions;
    private InputDevice eyesDevice;

    // Start is called before the first frame update
    void Start()
    {
        //Initialize Magic Leap Eye Tracking
        InputSubsystem.Extensions.MLEyes.StartTracking();
        //Initialize Magic Leap inputs to capture input data
        mlInputs = new MagicLeapInputs();
        mlInputs.Enable();
        eyesActions = new MagicLeapInputs.EyesActions(mlInputs);
    }

    // Update is called once per frame
    void Update()
    {
        if (!eyesDevice.isValid)
        {
            this.eyesDevice = InputSubsystem.Utils.FindMagicLeapDevice(
            InputDeviceCharacteristics.EyeTracking | InputDeviceCharacteristics.TrackedDevice);
            return;
        }
        
        InputSubsystem.Extensions.TryGetEyeTrackingState(eyesDevice, out var trackingState);
        Eyes eyes = eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>(); 

        if (trackingState.FixationConfidence > 0.5f)
        {
            Vector3 worldPosition = Camera.main.transform.position;
            Vector3 worldRotation = (eyes.fixationPoint - worldPosition).normalized;

            // Will only be visible in editor when using App Simulator
            Debug.DrawRay(worldPosition, worldRotation);

            Debug.Log("Left Eye Is Blinking: " + trackingState.LeftBlink);
            Debug.Log("Left Eye Center: " + eyes.leftEyePosition);
            Debug.Log("Left Eye Rotation: " + eyes.leftEyeRotation);
        }
    }
    private void OnDestroy()
    {
        mlInputs.Disable();
        mlInputs.Dispose();
    }
}
```

</TabItem>  
</Tabs>

