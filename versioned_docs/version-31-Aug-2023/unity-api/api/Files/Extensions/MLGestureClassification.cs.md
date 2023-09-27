---

title: MLGestureClassification.cs

---


# MLGestureClassification.cs









## Source code

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

namespace UnityEngine.XR.MagicLeap
{
    public partial class InputSubsystem
    {
        public static partial class Extensions
        {
            public static class MLGestureClassification
            {
                public const string LeftGestureInputDeviceName = "MagicLeapHandGesture - Left";
                public const string RightGestureInputDeviceName = "MagicLeapHandGesture - Right";

                public enum FingerType
                {
                    Thumb = 0,
                    Index,
                    Middle,
                    Ring,
                    Pinky
                }

                public enum PostureType
                {
                    None,
                    Pinch,
                    Point,
                    Grasp,
                    Open
                }

                public enum KeyPoseType
                {
                    None,
                    OK,
                    C,
                    Pinch,
                    Finger,
                    L,
                    Thumb,
                    Fist,
                    Open
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct PostureFingerData
                {
                    public float PinchNormalAngle;
                    public float PinchAngleOfSeparationDeg;
                    public float PinchNormalizedDistance;
                    public float PinchDistanceM;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct FingerState
                {
                    [MarshalAs(UnmanagedType.I1)]
                    public bool IsExtended;
                    public float LengthM;
                    public float NormalizedExtension;
                    public float AngleToPalm;
                    public PostureFingerData PostureData;
                }

                public struct FingerAngleDeg
                {
                    public float ThumbIndexDeg;
                    public float IndexMiddleDeg;
                    public float MiddleRingDeg;
                    public float RingPinkyDeg;
                }

                public static void StartTracking()
                {
                    MagicLeapXrProviderNativeBindings.StartGestureTracking();
                }

                public static void StopTracking()
                {
                    MagicLeapXrProviderNativeBindings.StopGestureTracking();
                }

                public static bool TryGetFingerState(InputDevice handDevice, FingerType finger, out FingerState fingerStateData) => NativeBindings.TryGetFingerState(handDevice, finger, out fingerStateData);

                public static bool TryGetFingerAngles(InputDevice handDevice, out FingerAngleDeg allFingerAngles) => NativeBindings.TryGetFingerAngles(handDevice, out allFingerAngles);

                public static bool TryGetHandPosture(InputDevice handDevice, out PostureType Posture) => NativeBindings.TryGetHandPosture(handDevice, out Posture);

                public static bool TryGetHandKeyPose(InputDevice handDevice, out KeyPoseType KeyPose) => NativeBindings.TryGetHandKeyPose(handDevice, out KeyPose);

                internal static class NativeBindings
                {
                    public static bool TryGetFingerState(InputDevice handDevice, FingerType finger, out FingerState fingerStateData)
                    {
                        byte[] newFingerData = new byte[Marshal.SizeOf<FingerState>()];
                        fingerStateData = new FingerState();

                        switch (finger)
                        {
                            case FingerType.Thumb:
                                if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GestureThumbState, newFingerData))
                                    return false;
                                break;
                            case FingerType.Index:
                                if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GestureIndexState, newFingerData))
                                    return false;
                                break;
                            case FingerType.Middle:
                                if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GestureMiddleState, newFingerData))
                                    return false;
                                break;
                            case FingerType.Ring:
                                if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GestureRingState, newFingerData))
                                    return false;
                                break;
                            case FingerType.Pinky:
                                if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GesturePinkyState, newFingerData))
                                    return false;
                                break;
                        }

                        try
                        {
                            GCHandle handle = GCHandle.Alloc(newFingerData, GCHandleType.Pinned);
                            var nativeStruct = Marshal.PtrToStructure<FingerState>(handle.AddrOfPinnedObject());
                            handle.Free();
                            fingerStateData = nativeStruct;
                            return true;
                        }
                        catch (Exception e)
                        {
                            Debug.LogError("TryGetGestureFingerState failed with the exception: " + e);
                            return false;
                        }
                    }

                    public static bool TryGetFingerAngles(InputDevice handDevice, out FingerAngleDeg allFingerAngles)
                    {
                        allFingerAngles = new FingerAngleDeg();
                        if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.AngleThumbIndexDeg, out float TID))
                            return false;
                        if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.AngleIndexMiddleDeg, out float IMD))
                            return false;
                        if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.AngleMiddleRingDeg, out float MRD))
                            return false;
                        if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.AngleRingPinkyDeg, out float RPD))
                            return false;

                        allFingerAngles.ThumbIndexDeg = TID;
                        allFingerAngles.IndexMiddleDeg = IMD;
                        allFingerAngles.MiddleRingDeg = MRD;
                        allFingerAngles.RingPinkyDeg = RPD;
                        return true;
                    }

                    public static bool TryGetHandPosture(InputDevice handDevice, out PostureType Posture)
                    {
                        if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GesturePosture, out uint PostureInt))
                        {
                            Posture = PostureType.None;
                            return false;
                        }

                        Posture = (PostureType)PostureInt;
                        return true;
                    }

                    public static bool TryGetHandKeyPose(InputDevice handDevice, out KeyPoseType KeyPose)
                    {
                        if (!handDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.HandGesture.GestureKeyPose, out uint KeyPoseInt))
                        {
                            KeyPose = KeyPoseType.None;
                            return false;
                        }

                        KeyPose = (KeyPoseType)KeyPoseInt;
                        return true;
                    }

                }
            }
        }
    }
}
```




