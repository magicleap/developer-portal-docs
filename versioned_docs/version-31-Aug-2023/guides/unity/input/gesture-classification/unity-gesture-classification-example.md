---
title: Examples
sidebar_position: 1
date: 09/08/2022
tags: [Unity, Gesture Classification, Input]
keywords: [Unity, Gesture Classification, Input]
---

This section demonstrates how to use the Gesture Classification API.

:::caution
This feature requires the `HAND_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**). For more information, refer to the [permissions guide](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md).
:::

## Detect Posture Type Example

This example starts the Gesture Classification API and prints the detected Posture Type into the Debug Log.

```csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;

public class PostureExample : MonoBehaviour
{
    // Used to get hand input data.
    private InputDevice leftHandDevice;
    private InputDevice rightHandDevice;

    void Start()
    {
        // Check Hand Tracking Permissions before starting Gesture Classification
        if (MLPermissions.CheckPermission(MLPermission.HandTracking).IsOk)
        {
            InputSubsystem.Extensions.MLGestureClassification.StartTracking();
        }
    }

    void Update()
    {
        //Do not continue if the gesture devices have not been initialized
        if (GesturesInitialized() == false)
        {
            return;
        }

        // Query the Input Devices for the detected postures
        leftHandDevice.TryGetFeatureValue(
            InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GesturePosture, out uint leftPostureInt);
        rightHandDevice.TryGetFeatureValue(
            InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GesturePosture, out uint rightPostureInt);

        // Convert the uints into a Posture Type
        InputSubsystem.Extensions.MLGestureClassification.PostureType leftHandPostureType =
            (InputSubsystem.Extensions.MLGestureClassification.PostureType)leftPostureInt;

        InputSubsystem.Extensions.MLGestureClassification.PostureType rightHandPostureType =
            (InputSubsystem.Extensions.MLGestureClassification.PostureType)rightPostureInt;

        // Write the detected posture into the Debug Log
        Debug.Log("Left Hand Posture: " + leftHandPostureType + " Right Hand Posture: " + rightHandPostureType);
    }

    /// Finds the gesture input devices and checks if Gestures have been initialized.
    private bool GesturesInitialized()
    {
        if (!leftHandDevice.isValid || !rightHandDevice.isValid)
        {
            Debug.Log("Looking for Left Hand Gesture Device...");
            leftHandDevice = GetInputDeviceByName(InputSubsystem.Extensions.MLGestureClassification.LeftGestureInputDeviceName);
            rightHandDevice = GetInputDeviceByName(InputSubsystem.Extensions.MLGestureClassification.RightGestureInputDeviceName);
            return false;
        }

        if (!leftHandDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GesturesEnabled,
                out bool gesturesEnabled) || gesturesEnabled == false)
        {
            Debug.Log("Gestures are Disabled");
            return false;
        }

        return true;
    }

    /// Simple method that returns an input device with a given name.
    /// Use InputDevice.isValid to verify that an input device was found.
    private InputDevice GetInputDeviceByName(string deviceName)
    {
        List<UnityEngine.XR.InputDevice> devices = new List<UnityEngine.XR.InputDevice>();
        InputDevices.GetDevices(devices);
        foreach (UnityEngine.XR.InputDevice device in devices)
        {
            if (device.name == deviceName)
            {
                return device;
            }
        }

        return new InputDevice();
    }
}
```

## Query Finger Data Example

This example queries the right hand's Index finger for additional data, then prints the data into the debug log.

```csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;

public class FingerDataExample : MonoBehaviour
{
    // Used to get hand input data.
    private InputDevice leftHandDevice;
    private InputDevice rightHandDevice;

    void Start()
    {
        // Check Hand Tracking Permissions before starting Gesture Classification
        if (MLPermissions.CheckPermission(MLPermission.HandTracking).IsOk)
        {
            InputSubsystem.Extensions.MLGestureClassification.StartTracking();
        }
    }

    void Update()
    {
        //Do not continue if the gesture devices have not been initialized
        if (GesturesInitialized() == false)
        {
            return;
        }

        // Specify the Index finger as the one to query the data for.
        var currentFinger = InputSubsystem.Extensions.MLGestureClassification.FingerType.Index;

        //Try to get the Finger data from the right hand gesture device.
        InputSubsystem.Extensions.MLGestureClassification.FingerState fingerData;
        InputSubsystem.Extensions.MLGestureClassification.TryGetFingerState(rightHandDevice, currentFinger, out fingerData);

        var debugMessage = "Finger Data";
        debugMessage += "\n--" + (currentFinger).ToString() + "--";
        debugMessage += "\nIsExtended: " + fingerData.IsExtended;
        debugMessage += "\nLength: " + fingerData.LengthM;
        debugMessage += "\nNormExt: " + fingerData.NormalizedExtension;
        debugMessage += "\nAngToPalm: " + fingerData.AngleToPalm;
        debugMessage += "\nPinchNormAng: " + fingerData.PostureData.PinchNormalAngle;
        debugMessage += "\nPinchAngSep: " + fingerData.PostureData.PinchAngleOfSeparationDeg;
        debugMessage += "\nPinchNormDis: " + fingerData.PostureData.PinchNormalizedDistance;
        debugMessage += "\nPinchDis: " + fingerData.PostureData.PinchDistanceM;

        // Write the values into the debug log.
        Debug.Log(debugMessage);
    }

    /// Finds the gesture input devices and checks if Gestures have been initialized.
    private bool GesturesInitialized()
    {
        if (!leftHandDevice.isValid || !rightHandDevice.isValid)
        {
            Debug.Log("Looking for Left Hand Gesture Device...");
            leftHandDevice = GetInputDeviceByName(InputSubsystem.Extensions.MLGestureClassification.LeftGestureInputDeviceName);
            rightHandDevice = GetInputDeviceByName(InputSubsystem.Extensions.MLGestureClassification.RightGestureInputDeviceName);
            return false;
        }

        if (!leftHandDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GesturesEnabled,
                out bool gesturesEnabled) || gesturesEnabled == false)
        {
            Debug.Log("Gestures are Disabled");
            return false;
        }

        return true;
    }

    /// Simple method that returns an input device with a given name.
    /// Use InputDevice.isValid to verify that an input device was found.
    private InputDevice GetInputDeviceByName(string deviceName)
    {
        List<UnityEngine.XR.InputDevice> devices = new List<UnityEngine.XR.InputDevice>();
        InputDevices.GetDevices(devices);
        foreach (UnityEngine.XR.InputDevice device in devices)
        {
            if (device.name == deviceName)
            {
                return device;
            }
        }

        return new InputDevice();
    }
}
```

## Query Finger Angles Example

This example gets the the angles between the index finger and all the other fingers on the user's left hand, then prints the data into the debug log.

```csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;

public class AngleExample : MonoBehaviour
{
    // Used to get hand input data.
    private InputDevice leftHandDevice;
    private InputDevice rightHandDevice;

    void Start()
    {
        // Check Hand Tracking Permissions before starting Gesture Classification
        if (MLPermissions.CheckPermission(MLPermission.HandTracking).IsOk)
        {
            InputSubsystem.Extensions.MLGestureClassification.StartTracking();
        }
    }

    void Update()
    {
        //Do not continue if the gesture devices have not been initialized
        if (GesturesInitialized() == false)
        {
            return;
        }

        // Try to get the Finger Angles for the left hand gesture device
        InputSubsystem.Extensions.MLGestureClassification.FingerAngleDeg fingerAngles;
        InputSubsystem.Extensions.MLGestureClassification.TryGetFingerAngles(leftHandDevice, out fingerAngles);

        var debugMessage = "Angles";

        debugMessage += " \n Angle Between Thumb and Index = " + fingerAngles.ThumbIndexDeg;

        debugMessage += "\nAngle Between Middle and Index = " + fingerAngles.IndexMiddleDeg;
        debugMessage += "\nAngle Between Ring and Index = " + fingerAngles.MiddleRingDeg;
        debugMessage += "\nAngle Between Pinky and Index = " + fingerAngles.RingPinkyDeg;

        // Write the Angle Values into the debug log
        Debug.Log(debugMessage);
    }

    /// Finds the gesture input devices and checks if Gestures have been initialized.
    private bool GesturesInitialized()
    {
        if (!leftHandDevice.isValid || !rightHandDevice.isValid)
        {
            Debug.Log("Looking for Left Hand Gesture Device...");
            leftHandDevice = GetInputDeviceByName(InputSubsystem.Extensions.MLGestureClassification.LeftGestureInputDeviceName);
            rightHandDevice = GetInputDeviceByName(InputSubsystem.Extensions.MLGestureClassification.RightGestureInputDeviceName);
            return false;
        }

        if (!leftHandDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GesturesEnabled,
                out bool gesturesEnabled) || gesturesEnabled == false)
        {
            Debug.Log("Gestures are Disabled");
            return false;
        }

        return true;
    }

    /// Simple method that returns an input device with a given name.
    /// Use InputDevice.isValid to verify that an input device was found.
    private InputDevice GetInputDeviceByName(string deviceName)
    {
        List<UnityEngine.XR.InputDevice> devices = new List<UnityEngine.XR.InputDevice>();
        InputDevices.GetDevices(devices);
        foreach (UnityEngine.XR.InputDevice device in devices)
        {
            if (device.name == deviceName)
            {
                return device;
            }
        }

        return new InputDevice();
    }
}

```

