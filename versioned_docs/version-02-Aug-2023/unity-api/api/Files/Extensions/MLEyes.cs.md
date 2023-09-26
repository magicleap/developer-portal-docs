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
                }
            }
        }
    }
}
```




