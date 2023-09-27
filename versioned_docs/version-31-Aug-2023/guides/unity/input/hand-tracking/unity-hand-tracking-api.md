---
id: unity-hand-tracking-api
title: Hand Tracking Overview
sidebar_position: 1
date: 07/08/2022
tags: [Unity, Hand Tracking, Input]
keywords: [Unity, Hand Tracking, Input]
---

This section provides information on the core Hand Tracking API and how to enable it inside your applications.

:::caution

This feature requires the `HAND_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**). For more information, refer to the [permissions guide](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md).

:::


:::info Gestures

To obtain gesture data, see the in the [Gesture Classification API](docs/guides/unity/input/gesture-classification/unity-gesture-classification-overview.md)

:::

## Start Hand Tracking and get Hand Input Device

By default HandTracking does a pre-render HandTracking update. That can be changed here or any time during runtime.

### Example

```csharp showLineNumbers
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;
using InputDevice = UnityEngine.XR.InputDevice;
public class HandTrackingExample : MonoBehaviour
{
    private void Start()
    {
        // HAND_TRACKING is a normal permission, so we don't request it at runtime. It is auto-granted if included in the app manifest.
        // If it's missing from the manifest, the permission is not available.
        if (MLPermissions.CheckPermission(MLPermission.HandTracking).IsOk)
        {
            //Start Hand Tracking
             InputSubsystem.Extensions.MLHandTracking.StartTracking();
        }
    }
}
```

## Find Magic Leap Hand Input Devices

The following snippet shows how to obtain the Magic Leap Hand Tracking Input Devices which are used to query Hand Tracking Data such as Key Points and Confidence.

```csharp
private InputDevice leftHandDevice;
private InputDevice rightHandDevice;
 
 
void Update()
{
    if (!leftHandDevice.isValid || !rightHandDevice.isValid)
    {
        leftHandDevice = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.HandTracking | InputDeviceCharacteristics.Left);
        rightHandDevice = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.HandTracking | InputDeviceCharacteristics.Right);
        return;
    }
}
```

## Get Hand Confidence

The following sample shows how to query the Hand tracking input devices for Hand Tracking Confidence. Note, the confidence value can be used to check if a hand is being tracked.

```csharp
void Update()
{
    leftHandDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Hand.Confidence, out float leftConfidence);

    Debug.Log("Left Hand Confidence: " + leftConfidence);

    rightHandDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Hand.Confidence, out float rightConfidence);
    
    Debug.Log("Right Hand Confidence: " + rightConfidence);

    if(rightConfidence > 0 && leftConfidence > 0 )
    {
          Debug.Log("Both Hands are being tracked.");
    }

}
```

## Get Key Points

Each finger will have 4 `UnityEngine.XR.Bones` that you can get their positions from. Key points for Wrist Ulnar and Wrist Radial, are not calculated.

Magic Leap's platform specific Hand Data can be queried using the `InputSubsystem.Extensions.DeviceFeatureUsages.Hand` static class.

There are two ways to access bone data for each hand.

- XR Input System (**Recommended**)
- Hand Action Maps - All of the events can be found in the MagicLeap Unity SDK `Subsystems/Input/MagicLeapInputs`. This method is normally only recommended if hand tracking data is being fed through other devices.


### Getting Hand data from TryGetFeatureValue

The following script shows how to obtain the position and rotation of key of the bones provided by the Magic Leap SDK

```csharp
private List<Bone> pinkyFingerBones = new List<Bone>();
private List<Bone> ringFingerBones = new List<Bone>();
private List<Bone> middleFingerBones = new List<Bone>();
private List<Bone> indexFingerBones = new List<Bone>();
private List<Bone> thumbBones = new List<Bone>();
private List<Bone> wristBones = new List<Bone>();

private Vector3 handCenterPosition;
private Vector3 handCenterRotation;
 

private InputDevice handDevice;

void Update()
{
    //Get the left hand device
    if (!handDevice.isValid)
    {
        leftHandDevice = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.HandTracking | InputDeviceCharacteristics.Left);
        return;
    }

    // Get All Bone Positions from UnityEngine.XR.Hand
    if (handDevice.TryGetFeatureValue(CommonUsages.handData, out UnityEngine.XR.Hand hand))
    {
        hand.TryGetFingerBones(UnityEngine.XR.HandFinger.Index, this.indexFingerBones);
        hand.TryGetFingerBones(UnityEngine.XR.HandFinger.Middle, this.middleFingerBones);
        hand.TryGetFingerBones(UnityEngine.XR.HandFinger.Ring, this.ringFingerBones);
        hand.TryGetFingerBones(UnityEngine.XR.HandFinger.Pinky, this.pinkyFingerBones);
        hand.TryGetFingerBones(UnityEngine.XR.HandFinger.Thumb, this.thumbBones);

        wristBones.Clear();
        handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Hand.WristCenter, out Bone wristBone);
        wristBones.Add(wristBone);
        handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Hand.WristRadial, out wristBone);
        wristBones.Add(wristBone);
        handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Hand.WristUlnar, out wristBone);
        wristBones.Add(wristBone);
    }

    // Get the bone positions and rotations for a finger.
    for (int i = 0; i < this.pinkyFingerBones.Count; ++i)
    {
        // Currently, Magic Leap only provides positional data
        this.pinkyFingerBones[i].TryGetPosition(out Vector3 bonePosition);
         this.pinkyFingerBones[i].TryGetRotation(out Quaternion bonePosition);
    }

    // Get Hand Center
    handDevice.TryGetFeatureValue(CommonUsages.devicePosition, out Vector3 handCenterPosition);
    handDevice.TryGetFeatureValue(CommonUsages.deviceRotation, out Quaternion handCenterRotation);
}
```

### Get the Status of a KeyPoint

Based on which finger and which bone on that finger it will determine the index of the `KeyPointsMask` returned from `TryGetKeyPointsMask` and return the value. If the hand is not currently tracked, incorrect the incorrect status may be reported. Therefore it is best practice to also check the hand confidence.

```csharp
// Get the Hand's Confidence
handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Hand.Confidence, out float handConfidence);

if(handConfidence > 0){
    // If the hand is being tracked, get the status of each the Pinky's KeyPoints. 
    for (int i = 0; i < this._pinkyFingerBones.Count; ++i)
    {
        HandTracking.GetKeyPointStatus(handDevice, HandTracking.KeyPointLocation.Pinky, i)
    }
}
```

### Get the Name of a KeyPoint

Based on which finger and which bone on that finger it will return the name from the KeyPoints enum.

```csharp
// Get the names of the KeyPoint returned for Pinky Bone
for (int i = 0; i < this._pinkyFingerBones.Count; ++i)
{
  HandTracking.GetKeyPointName(HandTracking.KeyPointLocation.Pinky, i)
}
```

## Advanced

### RenderUpdate

Depending on your applications requirement you may choose to update the hand KeyPoints less frequently. By default the KeyPoints data is updated twice. To turn this off set enable to false to potentially improve performance. This is not recommended if KeyPoints are visual in the app as it will significantly decrease the smoothness of visuals.

```csharp
     
     InputSubsystem.Extensions.MLHandTracking.SetPreRenderHandUpdate(false);

```

