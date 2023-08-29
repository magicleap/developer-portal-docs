---

title: MLWebRTCNativeBindings.cs

---


# MLWebRTCNativeBindings.cs









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
        public enum AndroidLogPriority : uint
        {
            Unkown = 0,
            Default,
            Verbose,
            Debug,
            Info,
            Warn,
            Error,
            Fatal,
            Silent,
        }

        internal class NativeBindings : MagicLeapNativeBindings
        {
            public delegate void OnDebugMessageDelegate(AndroidLogPriority logLevel, [MarshalAs(UnmanagedType.LPStr)] string message, IntPtr context);

            [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebRTCInstanceCreate();

            [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebRTCInstanceCreateWithDebugUtils(in MLWebRTCDebugUtils debugUtils);

            [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebRTCInstanceDestroy();

            [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr MLWebRTCGetResultString(MLResult.Code result);

            [AOT.MonoPInvokeCallback(typeof(OnDebugMessageDelegate))]
            private static void OnDebugMessage(AndroidLogPriority logLevel, [MarshalAs(UnmanagedType.LPStr)] string message, IntPtr context)
            {
                Debug.LogError("MLWebRTC Debug: " + message);
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLWebRTCDebugUtils
            {
                public uint Version;

                public IntPtr Context;

                public AndroidLogPriority LogLevel;

                public OnDebugMessageDelegate OnDebugMessage;

                public static MLWebRTCDebugUtils Create()
                {
                    MLWebRTCDebugUtils debugUtils = new MLWebRTCDebugUtils
                    {
                        Version = 1,
                        LogLevel = AndroidLogPriority.Error,
                        OnDebugMessage = NativeBindings.OnDebugMessage
                    };

                    return debugUtils;
                }
            }
        }
    }
}
```




