---

title: MLAudioInputNativeBindings.cs

---


# MLAudioInputNativeBindings.cs









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

// Disable warnings about missing documentation for native interop.
#pragma warning disable 1591
namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;

    public sealed partial class MLAudioInput
    {

        private class NativeBindings : Native.MagicLeapNativeBindings
        {
            public delegate void MLAudioOnBufferDelegate(ulong handle, IntPtr context);

            public delegate void MLAudioMicMuteCallback([MarshalAs(UnmanagedType.I1)] bool muted, IntPtr callback);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioSetMicMute([MarshalAs(UnmanagedType.I1)] bool muted);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioGetMicMute([MarshalAs(UnmanagedType.I1)] out bool isMuted);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioSetMicMuteCallback(MLAudioMicMuteCallback callback, IntPtr data);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr MLAudioGetResultString(MLResult.Code result);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioGetBufferedInputDefaults(uint channelCount, uint samplesPerSecond, out MLAudioOutput.NativeBindings.MLAudioBufferFormat format, out uint recommendedSizeInBytes, out uint minimumSizeInBytes);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioCreateInputFromMicCapture(MicCaptureType captureType, in MLAudioOutput.NativeBindings.MLAudioBufferFormat format, uint bufferSizeInBytes, MLAudioOnBufferDelegate callback, IntPtr context, out ulong handle);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioGetInputBuffer(ulong handle, out MLAudioOutput.NativeBindings.MLAudioBuffer buffer);


            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioReleaseInputBuffer(ulong handle);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioStartInput(ulong handle);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioStopInput(ulong handle);

        }
    }
}
```




