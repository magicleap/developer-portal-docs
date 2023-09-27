---

title: MLHeadTracking.cs

---


# MLHeadTracking.cs









## Source code

```csharp
using System;
using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.XR.MagicLeap.Native;
using static UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLHeadTracking.NativeBindings;

namespace UnityEngine.XR.MagicLeap
{
    public static partial class InputSubsystem
    {
        public static partial class Extensions
        {
            [Obsolete]
            public static bool TryGetHeadTrackingState(InputDevice headDevice, out MLHeadTracking.State headTrackingState) => MLHeadTracking.TryGetState(headDevice, out headTrackingState);

            public static bool TryGetHeadTrackingStateEx(InputDevice headDevice, out MLHeadTracking.StateEx headTrackingState) => MLHeadTracking.TryGetStateEx(headDevice, out headTrackingState);

            public static class MLHeadTracking
            {
                [Obsolete]
                public enum TrackingError
                {
                    None,

                    NotEnoughFeatures,

                    LowLight,

                    Unknown
                }

                [Flags]
                public enum TrackingErrorFlag
                {
                    None = 0,

                    Unknown = 1 << 0,

                    NotEnoughFeatures = 1 << 1,

                    LowLight = 1 << 2,

                    ExcessiveMotion = 1 << 3
                }

                [Obsolete]
                public enum TrackingMode
                {
                    Mode6DOF,

                    ModeUnavailable
                }

                public enum HeadTrackingStatus
                {
                    Invalid = 0,

                    Initializing = 1,

                    Relocalizing = 2,

                    Valid = 100
                }

                [Flags]
                public enum MapEvents : ulong
                {
                    Lost = (1 << 0),

                    Recovered = (1 << 1),

                    RecoveryFailed = (1 << 2),

                    NewSession = (1 << 3)
                }

                [Obsolete]
                public static bool TryGetState(InputDevice headDevice, out State headTrackingState) => NativeBindings.TryGetState(headDevice, out headTrackingState);

                public static bool TryGetStateEx(InputDevice headDevice, out StateEx headTrackingState) => NativeBindings.TryGetStateEx(headDevice, out headTrackingState);
                public static bool TryGetMapEvents(InputDevice headDevice, out MapEvents mapEvents) => NativeBindings.TryGetMapEvents(headDevice, out mapEvents);

                private static bool gotData = false;
                private static NativeBindings.MLHeadTrackingStaticData data;
                public static void GetStaticData(out MagicLeapNativeBindings.MLCoordinateFrameUID outUID)
                {
                    outUID = MagicLeapNativeBindings.MLCoordinateFrameUID.EmptyFrame;
                    if (!gotData)
                    {
                        var headHandle = MagicLeapXrProviderNativeBindings.GetHeadTrackerHandle();
                        data = new();
                        MLResult result = MLResult.Create(MLHeadTrackingGetStaticData(headHandle, ref data));
                        if (!result.IsOk)
                        {
                            Debug.LogError($"MLHeadTracking::GetStaticData failed: {result}");
                            gotData = false;
                            return;
                        }
                    }

                    outUID = data.coord_frame_head;
                    return;
                }

                [Obsolete]
                public readonly struct State
                {
                    public readonly TrackingMode Mode;

                    public readonly float Confidence;

                    public readonly TrackingError Error;

                    internal State(NativeBindings.State nativeState)
                    {
                        this.Mode = nativeState.Mode;
                        this.Confidence = nativeState.Confidence;
                        this.Error = nativeState.Error;
                    }

                    public override string ToString()
                    {
                        return $"Mode: {Mode}, Condidence: {Confidence}, Error: {Error}";
                    }
                }

                public readonly struct StateEx
                {
                    public readonly HeadTrackingStatus Status;

                    public readonly float Confidence;

                    public readonly TrackingErrorFlag Error;

                    internal StateEx(NativeBindings.StateEx nativeState)
                    {
                        this.Status = nativeState.Status;
                        this.Confidence = nativeState.Confidence;
                        this.Error = (TrackingErrorFlag)nativeState.Error;
                    }

                    public override string ToString()
                    {
                        return $"Status: {Status}, Condidence: {Confidence}, Error: {Error}";
                    }
                }

                internal static class NativeBindings
                {
                    [Obsolete]
                    private static byte[] allocatedHeadTrackingStateData = new byte[Marshal.SizeOf<NativeBindings.State>()];

                    private static byte[] allocatedHeadTrackingStateExData = new byte[Marshal.SizeOf<NativeBindings.StateEx>()];
                    private static byte[] allocatedHeadTrackingMapEventsData = new byte[sizeof(MapEvents)];

                    [Obsolete]
                    public static bool TryGetState(InputDevice device, out MLHeadTracking.State state)
                    {
                        if (!device.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Head.TrackingState, allocatedHeadTrackingStateData))
                            goto Failure;

                        try
                        {
                            IntPtr ptr = Marshal.AllocHGlobal(allocatedHeadTrackingStateData.Length);
                            Marshal.Copy(allocatedHeadTrackingStateData, 0, ptr, allocatedHeadTrackingStateData.Length);
                            var nativeState = Marshal.PtrToStructure<NativeBindings.State>(ptr);
                            Marshal.FreeHGlobal(ptr);
                            state = new MLHeadTracking.State(nativeState);
                            return true;
                        }

                        catch (Exception e)
                        {
                            Debug.LogError("TryGetState failed with the exception: " + e);
                            goto Failure;
                        }

                    Failure:
                        state = default;
                        return false;
                    }

                    public static bool TryGetStateEx(InputDevice device, out MLHeadTracking.StateEx state)
                    {
                        if (!device.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Head.TrackingStateEx, allocatedHeadTrackingStateExData))
                            goto Failure;

                        try
                        {
                            IntPtr ptr = Marshal.AllocHGlobal(allocatedHeadTrackingStateExData.Length);
                            Marshal.Copy(allocatedHeadTrackingStateExData, 0, ptr, allocatedHeadTrackingStateExData.Length);
                            var nativeState = Marshal.PtrToStructure<NativeBindings.StateEx>(ptr);
                            Marshal.FreeHGlobal(ptr);
                            state = new MLHeadTracking.StateEx(nativeState);
                            return true;
                        }

                        catch (Exception e)
                        {
                            Debug.LogError("TryGetStateEx failed with the exception: " + e);
                            goto Failure;
                        }

                    Failure:
                        state = default;
                        return false;
                    }

                    public static bool TryGetMapEvents(InputDevice device, out MLHeadTracking.MapEvents mapEvents)
                    {
                        if (!device.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Head.TrackingMapEvents, allocatedHeadTrackingMapEventsData))
                        {
                            mapEvents = default;
                            return false;
                        }

                        try
                        {
                            mapEvents = (MapEvents)BitConverter.ToUInt64(allocatedHeadTrackingMapEventsData);
                            return (mapEvents != 0);
                        }

                        catch (Exception e)
                        {
                            Debug.LogError("TryGetMapEvents failed with the exception: " + e);
                            mapEvents = default;
                            return false;
                        }
                    }

                    [Obsolete]
                    [StructLayout(LayoutKind.Sequential)]
                    public readonly struct State
                    {
                        public readonly TrackingMode Mode;

                        public readonly float Confidence;

                        public readonly TrackingError Error;
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public readonly struct StateEx
                    {
                        public readonly uint Version;

                        public readonly HeadTrackingStatus Status;

                        public readonly float Confidence;

                        public readonly uint Error;
                    }

                    [DllImport(MagicLeapNativeBindings.MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLHeadTrackingGetStaticData(ulong handle, ref MLHeadTrackingStaticData data);

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLHeadTrackingStaticData
                    {
                        public MagicLeapNativeBindings.MLCoordinateFrameUID coord_frame_head;
                    }
                }
            }
        }
    }

}
```




