---
title: API Overview
sidebar_position: 1
date: 07/08/2022
tags: [Unity, Gesture Classification, Input]
keywords: [Unity, Gesture Classification, Input]
---

This section provides information on the Gesture Classification API and how to enable it inside your application.

:::caution
This feature requires the `HAND_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**). For more information, refer to the [permissions guide](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md).
:::

:::caution Known Issue
It is recommended to not rely on the GestureTransformRotation or the GestureInteractionRotation as they are not fully implemented and not guaranteed to be accurate. The positions are fully implemented for the Gesture Transform and Gesture Interaction points.
:::

## Namespace

The MLGestureClassification API is defined under the `UnityEngine.XR.MagicLeap` namespace.

```csharp
using UnityEngine;
using UnityEngine.XR.MagicLeap;
```

## Coding Example

This section includes code snippets to demonstrate how to obtain gesture classification data.

### Code Snippets Using Shortened Names

To keep the examples from getting too long each snippet makes use of declaring the following `using` values in the scripts header.

```csharp
using HandGestures = InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture;
using GestureClassification = InputSubsystem.Extensions.MLGestureClassification;
```

### Gesture Classification Permission

This feature requires the `HAND_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**). For more information, refer to the [permissions guide](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md).

Before using the Magic Leap Gesture Classification API, we need to make sure that the permission was declared in the Application's manifest.

```csharp
void Start()
{
    if (!MLPermissions.CheckPermission(MLPermission.HandTracking).IsOk)
    {
        Debug.LogError($"You must include the {MLPermission.HandTracking} permission in the AndroidManifest.xml to run this example.");
        enabled = false;
        return;
    }
    
}
```

### Start Gesture Classification

Before accessing the Gesture Input devices, you need to initial the Gesture Classification API.

```csharp
void Start()
{
    ...
    
    GestureClassification.StartTracking();

    ...
}
```

### Obtain the Gesture Classification Input Devices

The Gesture Classification input is obtained separate from the Hand Tracking input. Therefore, to calculate gestures for the Left and Right hand we need to locate and reference the Left and Right Gesture Classification devices individually.

```csharp
private InputDevice leftHandDevice;
private InputDevice rightHandDevice;

void Update()
{
    if (!leftHandDevice.isValid || !rightHandDevice.isValid)
    {
        List<InputDevice> foundDevices = new List<InputDevice>();
        InputDevices.GetDevices(foundDevices);

        foreach (InputDevice device in foundDevices)
        {
            if (device.name == GestureClassification.LeftGestureInputDeviceName)
            {
                leftHandDevice = device;
                continue;
            }

            if (device.name == GestureClassification.RightGestureInputDeviceName)
            {
                 rightHandDevice = device;
                 continue;
            }

            if (leftHandDevice.isValid && rightHandDevice.isValid)
            {
                break;
            }
        }
        return;
    }
}
```

### Validate the Gesture Data

To make sure that gesture data is being populated, you can use the check below. This only needs to be checked for one hand since it is implied that if gesture data is being populated in one hand it is also being populated in the other.

```csharp
leftHandDevice.TryGetFeatureValue(HandGestures.GesturesEnabled, out bool EnableCheck);
```

### Get the Gesture Hand Transform Position and Rotation

The following query provides the center of the palm.

:::note
As noted above, the rotation is not fully implemented yet and cannot be guaranteed accurate.
:::

```csharp
if(leftHandDevice.isValid){
    leftHandDevice.TryGetFeatureValue(HandGestures.GestureTransformPosition, out Vector3 leftPos);
    leftHandDevice.TryGetFeatureValue(HandGestures.GestureTransformRotation, out Quaternion leftRot);
}

if(rightHandDevice.isValid){
    rightHandDevice.TryGetFeatureValue(HandGestures.GestureTransformPosition, out Vector3 rightPos);
    rightHandDevice.TryGetFeatureValue(HandGestures.GestureTransformRotation, out Quaternion rightRot);
}
```

### Get the Gesture Interaction Point Position and Rotation

The following query get the Interaction Points Position and Rotation.

- For pinch the point is between the index finger tip and thumb tip.
- For point, the point is at the tip of the index finger.
- For grab, the point is near the palm center.

:::note
As noted above, the rotation is not fully implemented yet and cannot be guaranteed accurate.
:::

```csharp
if(leftHandDevice.isValid){
    leftHandDevice.TryGetFeatureValue(HandGestures.GestureInteractionPosition, out Vector3 leftIntPos);
    leftHandDevice.TryGetFeatureValue(HandGestures.GestureInteractionRotation, out Quaternion leftIntRot);
}

if(rightHandDevice.isValid){
    rightHandDevice.TryGetFeatureValue(HandGestures.GestureInteractionPosition, out Vector3 rightIntPos);
    rightHandDevice.TryGetFeatureValue(HandGestures.GestureInteractionRotation, out Quaternion rightIntRot);

}
```

### Get the Gesture Posture For Each Hand

The following query returns the detected Posture such as Pinch or Point for each hand.

```csharp
if(leftHandDevice.isValid){
GestureClassification.TryGetHandPosture(leftHandDevice, out GestureClassification.PostureType leftPosture);
}

if(rightHandDevice.isValid){
GestureClassification.TryGetHandPosture(rightHandDevice, out GestureClassification.PostureType rightPosture);
}
```

### Get the KeyPose For Each Hand

The following query returns the detected Key Pose such as `Ok` or `C` for each hand.

```csharp
if(leftHandDevice.isValid){
GestureClassification.TryGetHandPosture(leftHandDevice, out GestureClassification.PostureType leftPosture);
}

if(rightHandDevice.isValid){
GestureClassification.TryGetHandPosture(rightHandDevice, out GestureClassification.PostureType rightPosture);
}
```

### Get the Angles Between Each Finger in Degrees and the Finger State Data

To get more in depth data about each finger use the  `FingerAngleDeg` and `FingerState` structs.

```csharp
InputSubsystem.Extensions.MLGestureClassification.FingerAngleDeg FingerAngles;
InputSubsystem.Extensions.MLGestureClassification.TryGetFingerAngles(leftHandDevice, out FingerAngles);

//Do something with the left hand finger angles

InputSubsystem.Extensions.MLGestureClassification.TryGetFingerAngles(rightHandDevice, out FingerAngles);

//Do something with the right hand finger angles
```

To get the state of a finger, you will need to query each finger individually. In the snippet below, we get the finger state for the thumb, located on the user's left and right hand.

```csharp
InputSubsystem.Extensions.MLGestureClassification.FingerState fingerData;
InputSubsystem.Extensions.MLGestureClassification.TryGetFingerState(leftHandDevice, InputSubsystem.Extensions.MLGestureClassification.FingerType.Thumb, out fingerData);

//Do something with the left hand thumb state data

InputSubsystem.Extensions.MLGestureClassification.TryGetFingerState(rightHandDevice, InputSubsystem.Extensions.MLGestureClassification.FingerType.Thumb, out fingerData);

//Do something with the right hand thumb state data
```

## Components of Gesture Classification

- **MLGestureClassification.StartTracking** - Starts Gesture Tracking. Must be called before trying to get Hand Gesture Input Devices. Much like Hand Tracking.
- **MLGestureClassification.TryGetHandPosture** - A helper function that takes the data provided from DeviceFeatureUsages for Gestures into the proper enum format for Postures.
- **MLGestureClassification.TryGetHandKeyPose** - A helper function that takes the data provided from DeviceFeatureUsages for Gestures into the proper enum format for KeyPoses.
- **MLGestureClassification.TryGetFingerAngles** - A helper function that takes the data provided from DeviceFeatureUsages for Gestures into a more readable **MLGestureClassification.FingerAngleDeg** struct with the data of the angles in-between each finger.
- **MLGestureClassification.TryGetFingerState** - A helper function that takes the data provided from DeviceFeatureUsages for Gestures into a more readable **MLGestureClassification.FingerState** struct with the data of individual finger measurements.
- **MLGestureClassification.LeftGestureInputDeviceName** - The name of the Left gesture Input Device.
- **MLGestureClassification.RightGestureInputDeviceName** - The name of the Right gesture Input Device.

## Device Feature Usage

This section shows the lower level api that can be used to query an [`InputDevice`](https://docs.unity3d.com/Manual/xr_input.html) directly and to obtain the Gesturer Classification via  Input Feature Usage.

- `InputFeatureUsage<bool> GesturesEnabled`
- `InputFeatureUsage<Vector3> GestureInteractionPosition`
- `InputFeatureUsage<Vector3> GestureTransformPosition`
- `InputFeatureUsage<Quaternion> GestureInteractionRotation`
- `InputFeatureUsage<Quaternion> GestureTransformRotation`
- `InputFeatureUsage<uint> GesturePosture`
- `InputFeatureUsage<uint> GestureKeyPose`
- `InputFeatureUsage<byte[]> GestureThumbState`
- `InputFeatureUsage<byte[]> GestureIndexState`
- `InputFeatureUsage<byte[]> GestureMiddleState`
- `InputFeatureUsage<byte[]> GestureRingState`
- `InputFeatureUsage<byte[]> GesturePinkyState`
- `InputFeatureUsage<float> AngleThumbIndexDeg`
- `InputFeatureUsage<float> AngleIndexMiddleDeg`
- `InputFeatureUsage<float> AngleMiddleRingDeg`
- `InputFeatureUsage<float> AngleRingPinkyDeg`

