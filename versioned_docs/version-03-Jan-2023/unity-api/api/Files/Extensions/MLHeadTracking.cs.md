---

title: MLHeadTracking.cs

---


# MLHeadTracking.cs









## Source code

```csharp
using System;
using System.Runtime.InteropServices;
using UnityEngine;

namespace UnityEngine.XR.MagicLeap
{
    public static partial class InputSubsystem
    {
        public static partial class Extensions
        {
            public static bool TryGetHeadTrackingState(InputDevice headDevice, out MLHeadTracking.State headTrackingState) => MLHeadTracking.TryGetState(headDevice, out headTrackingState);

            public static class MLHeadTracking
            {
                public enum TrackingError
                {
                    None,

                    NotEnoughFeatures,

                    LowLight,

                    Unknown
                }

                public enum TrackingMode
                {
                    Mode6DOF,

                    ModeUnavailable
                }

                [Flags]
                public enum MapEvents : ulong
                {
                    Lost = (1 << 0),

                    Recovered = (1 << 1),

                    RecoveryFailed = (1 << 2),

                    NewSession = (1 << 3)
                }

                public static bool TryGetState(InputDevice headDevice, out State headTrackingState) => NativeBindings.TryGetState(headDevice, out headTrackingState);
                public static bool TryGetMapEvents(InputDevice headDevice, out MapEvents mapEvents) => NativeBindings.TryGetMapEvents(headDevice, out mapEvents);

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

                internal static class NativeBindings
                {
                    private static byte[] allocatedHeadTrackingStateData = new byte[Marshal.SizeOf<NativeBindings.State>()];
                    private static byte[] allocatedHeadTrackingMapEventsData = new byte[sizeof(MapEvents)];

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

                    public static bool TryGetMapEvents(InputDevice device, out MLHeadTracking.MapEvents mapEvents)
                    {
                        if (!device.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Head.TrackingMapEvents, allocatedHeadTrackingMapEventsData))
                            goto Failure;

                        try
                        {
                            mapEvents = (MapEvents)BitConverter.ToUInt64(allocatedHeadTrackingMapEventsData);
                            return (mapEvents != 0);
                        }

                        catch (Exception e)
                        {
                            Debug.LogError("TryGetMapEvents failed with the exception: " + e);
                            goto Failure;
                        }

                    Failure:
                        mapEvents = default;
                        return false;

                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public readonly struct State
                    {
                        public readonly TrackingMode Mode;

                        public readonly float Confidence;

                        public readonly TrackingError Error;
                    }
                }
            }

        }
    }

}
```



