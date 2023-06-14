---

title: MLWebRTCVideoSinkNativeBindings.cs

---


# MLWebRTCVideoSinkNativeBindings.cs









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
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class VideoSink
        {
            internal class NativeBindings : MagicLeapNativeBindings
            {
                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCVideoSinkCreate(out ulong sinkHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCVideoSinkSetSource(ulong sinkHandle, ulong sourceHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCVideoSinkIsNewFrameAvailable(ulong sinkHandle, [MarshalAs(UnmanagedType.I1)] out bool newFrameAvailable);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCVideoSinkAcquireNextAvailableFrame(ulong sinkHandle, out ulong frameHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCVideoSinkReleaseFrame(ulong sinkHandle, ulong frameHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCVideoSinkDestroy(ulong sinkHandle);
            }
        }
    }
}
```




