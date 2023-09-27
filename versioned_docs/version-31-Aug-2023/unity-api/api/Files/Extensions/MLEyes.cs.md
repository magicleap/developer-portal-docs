---

title: MLEyes.cs

---


# MLEyes.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2019-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%
namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public static partial class InputSubsystem
    {
        public static partial class Extensions
        {
            public static bool TryGetEyeTrackingState(InputDevice eyesDevice, out MLEyes.State state) => MLEyes.TryGetState(eyesDevice, out state);

            public static class MLEyes
            {
                public static void StartTracking()
                {
                    MagicLeapXrProviderNativeBindings.StartEyeTracking();
                }

                public static void StopTracking()
                {
                    MagicLeapXrProviderNativeBindings.StopEyeTracking();
                }

                public static bool TryGetState(InputDevice eyesDevice, out State state) => NativeBindings.TryGetTrackingState(eyesDevice, out state);

                public readonly struct State
                {
                    public readonly float FixationConfidence;

                    public readonly float LeftCenterConfidence;

                    public readonly float RightCenterConfidence;

                    public readonly bool LeftBlink;

                    public readonly bool RightBlink;

                    public readonly bool Error;

                    public readonly MLTime Timestamp;
                    
                    public readonly float LeftEyeOpenness;

                    public readonly float RightEyeOpenness;

                    internal State(NativeBindings.MLEyeTrackingStateEx nativeState)
                    {
                        this.FixationConfidence = nativeState.VergenceConfidence;
                        this.LeftCenterConfidence = nativeState.LeftCenterConfidence;
                        this.RightCenterConfidence = nativeState.RightCenterConfidence;
                        this.LeftBlink = nativeState.LeftBlink;
                        this.RightBlink = nativeState.RightBlink;
                        this.Error = nativeState.Error == 1;
                        this.Timestamp = nativeState.Timestamp;
                        this.LeftEyeOpenness = nativeState.LeftEyeOpenness;
                        this.RightEyeOpenness = nativeState.RightEyeOpenness;
                    }
                }

                public struct StaticData 
                {
                    public MagicLeapNativeBindings.MLCoordinateFrameUID Vergence;

                    public MagicLeapNativeBindings.MLCoordinateFrameUID LeftCenter;

                    public MagicLeapNativeBindings.MLCoordinateFrameUID RightCenter;
                }

                public struct DeviceCenteredEyeData
                {
                    public Pose LeftEye;

                    public Pose RightEye;
                      
                    public Pose Vergence;
                }

                public static void GetStaticData(out StaticData staticData)
                {
                    staticData = new();
                    var eyeHandle = MagicLeapXrProviderNativeBindings.GetEyeTrackerHandle();
                    if (!MagicLeapNativeBindings.MLHandleIsValid(eyeHandle))
                    {
                        Debug.LogError("Eye handle invalid");
                        return;
                    }

                    NativeBindings.MLEyeTrackingStaticData data = new();
                    var result = MLResult.Create(NativeBindings.MLEyeTrackingGetStaticData(eyeHandle, ref data));
                    if (!result.IsOk)
                    {
                        Debug.LogError($"GetStaticData failed: {result}");
                        return;
                    }

                    staticData.Vergence = data.vergence;
                    staticData.LeftCenter = data.left_center;
                    staticData.RightCenter = data.right_center;
                    return;
                }

                public static void GetEyeDataInDeviceCoords(out DeviceCenteredEyeData deviceCenteredEyeData)
                {
                    deviceCenteredEyeData = new();
                    MagicLeapNativeBindings.MLSnapshotStaticData snapshotStaticData = MagicLeapNativeBindings.MLSnapshotStaticData.Init();
                    IntPtr snap = IntPtr.Zero;

                    MLResult result;
                    result = MLResult.Create(MagicLeapNativeBindings.MLSnapshotGetStaticData(ref snapshotStaticData));
                    if (!result.IsOk)
                    {
                        Debug.LogError($"MLEyes::MLSnapshotGetStaticData failed: {result}");
                        return;
                    }

                    result = MLResult.Create(MagicLeapNativeBindings.MLPerceptionGetSnapshot(ref snap));
                    if (!result.IsOk)
                    {
                        Debug.LogError($"MLEyes::MLPerceptionGetSnapshot failed: {result}");
                        return;
                    }

                    MagicLeapNativeBindings.MLPose leftEyeCenter = new();
                    MagicLeapNativeBindings.MLPose rightEyeCenter = new();
                    MagicLeapNativeBindings.MLTransform head = new();
                    MagicLeapNativeBindings.MLTransform vergence = new();

                    MLHeadTracking.GetStaticData(out MagicLeapNativeBindings.MLCoordinateFrameUID headUID);

                    result = MLResult.Create(MagicLeapNativeBindings.MLSnapshotGetTransform(snap, ref headUID, ref head));
                    if (!result.IsOk)
                    {
                        Debug.LogError($"MLEyes::MLSnapshotGetTransform (Device UID) failed: {result}");
                        return;
                    }

                    StaticData eyeStaticData;
                    GetStaticData(out eyeStaticData);

                    result = MLResult.Create(MagicLeapNativeBindings.MLSnapshotGetTransform(snap, ref eyeStaticData.Vergence, ref vergence));
                    if (!result.IsOk)
                    {
                        Debug.LogError($"MLEyes::MLSnapshotGetTransform (vergence UID) failed: {result}");
                        return;
                    }

                    result = MLResult.Create(MagicLeapNativeBindings.MLSnapshotGetPoseInBase(snap, ref headUID, ref eyeStaticData.LeftCenter, ref leftEyeCenter));
                    if (!result.IsOk)
                    {
                        Debug.LogError($"MLEyes::MLSnapshotGetPoseInBase(leftEye) failed: {result}");
                        return;
                    }

                    result = MLResult.Create(MagicLeapNativeBindings.MLSnapshotGetPoseInBase(snap, ref headUID, ref eyeStaticData.RightCenter, ref rightEyeCenter));
                    if (!result.IsOk)
                    {
                        Debug.LogError($"MLEyes::MLSnapshotGetPoseInBase(rightEye) failed: {result}");
                        return;
                    }

                    deviceCenteredEyeData.LeftEye = new Pose(MLConvert.ToUnity(leftEyeCenter.Transform.Position), MLConvert.ToUnity(leftEyeCenter.Transform.Rotation));
                    deviceCenteredEyeData.RightEye = new Pose(MLConvert.ToUnity(rightEyeCenter.Transform.Position), MLConvert.ToUnity(rightEyeCenter.Transform.Rotation));
                    deviceCenteredEyeData.Vergence = new Pose(MLConvert.ToUnity(vergence.Position), MLConvert.ToUnity(vergence.Rotation));

                    MagicLeapNativeBindings.MLPerceptionReleaseSnapshot(snap);
                }

                internal static class NativeBindings
                {
                    private static byte[] allocatedStateData = new byte[Marshal.SizeOf<NativeBindings.MLEyeTrackingStateEx>()];

                    public static bool TryGetTrackingState(InputDevice eyesDevice, out State state)
                    {
                        if (!eyesDevice.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Eyes.TrackingState, allocatedStateData))
                        {
                            state = default;
                            return false;
                        }

                        IntPtr ptr = Marshal.AllocHGlobal(allocatedStateData.Length);
                        Marshal.Copy(allocatedStateData, 0, ptr, allocatedStateData.Length);
                        var nativeState = Marshal.PtrToStructure<NativeBindings.MLEyeTrackingStateEx>(ptr);
                        Marshal.FreeHGlobal(ptr);
                        state = new State(nativeState);
                        return true;
                    }
                    
                    [StructLayout(LayoutKind.Sequential)]
                    public readonly struct MLEyeTrackingStateEx
                    {
                        public static MLEyeTrackingStateEx Init() => new (version: 2);
                        
                        public readonly uint Version;

                        public readonly float VergenceConfidence;

                        public readonly float LeftCenterConfidence;

                        public readonly float RightCenterConfidence;

                        [MarshalAs(UnmanagedType.I1)]
                        public readonly bool LeftBlink;

                        [MarshalAs(UnmanagedType.I1)]
                        public readonly bool RightBlink;

                        public readonly uint Error;

                        public readonly long Timestamp;

                        public readonly float LeftEyeOpenness;

                        public readonly float RightEyeOpenness;

                        private MLEyeTrackingStateEx(uint version)
                        {
                            Version = version;
                            #region state defaults
                            VergenceConfidence = 0;
                            LeftCenterConfidence = 0;
                            RightCenterConfidence = 0;
                            LeftBlink = false;
                            RightBlink = false;
                            Error = 0;
                            Timestamp = 0;
                            LeftEyeOpenness = 0;
                            RightEyeOpenness = 0;
                            #endregion
                        }
                    }

                    [DllImport(MagicLeapNativeBindings.MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLEyeTrackingGetStaticData(ulong handle, ref MLEyeTrackingStaticData outData);

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLEyeTrackingStaticData
                    {
                        public MagicLeapNativeBindings.MLCoordinateFrameUID vergence;

                        public MagicLeapNativeBindings.MLCoordinateFrameUID left_center;

                        public MagicLeapNativeBindings.MLCoordinateFrameUID right_center;
                    }
                }
            }
        }
    }
}
```




