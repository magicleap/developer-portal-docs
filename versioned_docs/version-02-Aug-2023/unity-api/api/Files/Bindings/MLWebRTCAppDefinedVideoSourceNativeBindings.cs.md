---

title: MLWebRTCAppDefinedVideoSourceNativeBindings.cs

---


# MLWebRTCAppDefinedVideoSourceNativeBindings.cs









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
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class AppDefinedVideoSource
        {
            internal new class NativeBindings : MagicLeapNativeBindings
            {
                public static MLResult.Code InitializeAppDefinedVideoSource(MLWebRTC.AppDefinedVideoSource appDefinedVideoSource)
                {
                    appDefinedVideoSource.TrackType = Type.Video;
                    appDefinedVideoSource.IsLocal = true;
                    appDefinedVideoSource.gcHandle = GCHandle.Alloc(appDefinedVideoSource);
                    IntPtr gcHandlePtr = GCHandle.ToIntPtr(appDefinedVideoSource.gcHandle);

                    ulong appDefinedVideoSourceHandle = MagicLeapNativeBindings.InvalidHandle;

                    AppDefinedSource.NativeBindings.MLWebRTCAppDefinedSourceEventCallbacks callbacks = AppDefinedSource.NativeBindings.MLWebRTCAppDefinedSourceEventCallbacks.Create(gcHandlePtr, OnSetEnabled, OnDestroyed);
                    MLResult.Code resultCode = NativeBindings.MLWebRTCSourceCreateAppDefinedVideoSource(in callbacks, out appDefinedVideoSourceHandle);

                    appDefinedVideoSource.Handle = appDefinedVideoSourceHandle;

                    if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCSourceCreateAppDefinedVideoSource)))
                    {
                        appDefinedVideoSource.gcHandle.Free();
                    }

                    return resultCode;
                }

                [AOT.MonoPInvokeCallback(typeof(AppDefinedSource.NativeBindings.OnSetEnabledDelegate))]
                private static void OnSetEnabled(bool enabled, IntPtr context)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(context);
                    AppDefinedVideoSource videoSource = gcHandle.Target as AppDefinedVideoSource;
                    videoSource?.OnSourceSetEnabled(enabled);
                }

                [AOT.MonoPInvokeCallback(typeof(AppDefinedSource.NativeBindings.OnDestroyedDelegate))]
                private static void OnDestroyed(IntPtr context)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(context);
                    AppDefinedVideoSource videoSource = gcHandle.Target as AppDefinedVideoSource;
                    videoSource?.OnSourceDestroy();
                }

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceCreateAppDefinedVideoSource(in AppDefinedSource.NativeBindings.MLWebRTCAppDefinedSourceEventCallbacks callbacks, out ulong sourceHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceAppDefinedVideoSourcePushFrame(ulong sourceHandle, in MLWebRTC.VideoSink.Frame.NativeBindings.MLWebRTCFrame frameNative);
            }
        }
    }
}
```




