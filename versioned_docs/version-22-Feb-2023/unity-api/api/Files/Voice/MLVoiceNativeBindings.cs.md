---

title: MLVoiceNativeBindings.cs

---


# MLVoiceNativeBindings.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;
    using Native;

    public partial class MLVoice
    {
        public class NativeBindings : MagicLeapNativeBindings
        {
            public delegate void OnVoiceEventDelegate(in IntentEventInternal intentEvent, IntPtr data);

            [AOT.MonoPInvokeCallback(typeof(OnVoiceEventDelegate))]
            private static void OnEvent(in IntentEventInternal intentEvent, IntPtr data)
            {
                IntentEvent newEvent = new IntentEvent();
                newEvent.State = intentEvent.State;
                newEvent.NoIntentReason = intentEvent.NoIntentReason;
                newEvent.EventName = intentEvent.Text;
                newEvent.EventID = intentEvent.IntentID;

                bool eventSuccessful = intentEvent.IsSuccess;
                MLThreadDispatch.ScheduleMain(() =>
                {
                    OnVoiceEventInternal?.Invoke(eventSuccessful, newEvent);
                });
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct IntentEventInternal
            {
                [MarshalAs(UnmanagedType.I1)]
                public bool IsSuccess;

                public State State;

                public NoIntentReason NoIntentReason;

                [MarshalAs(UnmanagedType.LPStr)]
                public string Text;

                public uint IntentID;
            };

            [StructLayout(LayoutKind.Sequential)]
            public struct IntentCallbacks
            {
                public uint Version;

                public OnVoiceEventDelegate OnEvent;

                public static IntentCallbacks Create()
                {
                    IntentCallbacks callbacks = new IntentCallbacks();
                    callbacks.Version = 1;
                    callbacks.OnEvent = MLVoice.NativeBindings.OnEvent;
                    return callbacks;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct IntentSettings
            {
                public uint Version;

                [MarshalAs(UnmanagedType.LPStr)]
                public string AppIntent;

                public static IntentSettings Create()
                {
                    IntentSettings settings = new IntentSettings();
                    settings.Version = 1;
                    settings.AppIntent = null;

                    return settings;
                }
            }

            [DllImport(MLVoiceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLVoiceIntentCreate(out ulong handle);

            [DllImport(MLVoiceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLVoiceIntentDestroy(ulong handle);

            [DllImport(MLVoiceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLVoiceIntentConfigureSettings(ulong handle, in IntentSettings voiceSettings);

            [DllImport(MLVoiceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLVoiceIntentSetCallbacks(ulong handle, in IntentCallbacks callbacks, in IntPtr data);

            [DllImport(MLVoiceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLVoiceIntentStartProcessing(ulong handle);

            [DllImport(MLVoiceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLVoiceIntentStopProcessing(ulong handle);

            [DllImport(MLVoiceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLVoiceIntentIsEnabled(ulong handle, [MarshalAs(UnmanagedType.I1)] out bool isEnabled);
        }
    }
}
```




