---

title: MLWebRTCSourceNativeBindings.cs

---


# MLWebRTCSourceNativeBindings.cs









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
        public partial class Source
        {
            internal class NativeBindings : MagicLeapNativeBindings
            {
                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceCreateLocalSourceForCamera(in MLCamera.NativeBindings.MLCameraConnectContext inputContext, out ulong sourceHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceCreateLocalSourceForMicrophoneEx([MarshalAs(UnmanagedType.LPStr)] string trackName, out ulong sourceHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceCreateAppDefinedAudioSourceEx(ref MLWebRTCAppDefinedSourceParams sourceParams, out ulong sourceHandle);


                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceIsEnabled(ulong sourceHandle, [MarshalAs(UnmanagedType.I1)] out bool enabled);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceSetEnabled(ulong sourceHandle, [MarshalAs(UnmanagedType.I1)] bool enabled);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceGetType(ulong sourceHandle, out MLWebRTC.MediaStream.Track.Type sourceType);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceGetTrackId(ulong sourceHandle, out IntPtr trackIdPtr);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceReleaseTrackId(ulong sourceHandle, IntPtr trackId);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCSourceDestroy(ulong sourceHandle);

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCSource
                {
                    public uint Version;

                    public MLWebRTC.MediaStream.Track.Type Type;

                    public ulong Handle;

                    public MLWebRTC.MediaStream.Track Data
                    {
                        get
                        {
                            string trackId = string.Empty;
                            MLResult.Code resultCode = NativeBindings.MLWebRTCSourceGetTrackId(this.Handle, out IntPtr trackIdPtr);

                            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCSourceGetTrackId)))
                            {
                                if (trackIdPtr != IntPtr.Zero)
                                {
                                    trackId = Marshal.PtrToStringAnsi(trackIdPtr);
                                    resultCode = NativeBindings.MLWebRTCSourceReleaseTrackId(this.Handle, trackIdPtr);
                                    MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCSourceReleaseTrackId));
                                }
                            }

                            MLWebRTC.MediaStream.Track track = new MLWebRTC.MediaStream.Track(trackId)
                            {
                                Handle = this.Handle,
                                TrackType = this.Type
                            };
                            return track;
                        }
                    }

                    public static MLWebRTCSource Create()
                    {
                        MLWebRTCSource source = new MLWebRTCSource();
                        source.Version = 1;
                        source.Handle = MagicLeapNativeBindings.InvalidHandle;
                        return source;
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCAppDefinedSourceParams
                {
                    public uint Version;

                    public IntPtr Callbacks;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string TrackName;

                    public static MLWebRTCAppDefinedSourceParams Create(string trackName)
                    {
                        MLWebRTCAppDefinedSourceParams sourceParams = new MLWebRTCAppDefinedSourceParams();
                        sourceParams.Version = 1;
                        sourceParams.Callbacks = IntPtr.Zero;
                        sourceParams.TrackName = trackName;
                        return sourceParams;
                    }

                    public static MLWebRTCAppDefinedSourceParams Create(string trackName, AppDefinedSource.NativeBindings.MLWebRTCAppDefinedSourceEventCallbacks callbacks)
                    {
                        MLWebRTCAppDefinedSourceParams sourceParams = new MLWebRTCAppDefinedSourceParams();
                        sourceParams.Version = 1;
                        IntPtr callbacksPtr = Marshal.AllocHGlobal(Marshal.SizeOf(callbacks));
                        Marshal.StructureToPtr(callbacks, callbacksPtr, false);
                        sourceParams.Callbacks = callbacksPtr;
                        sourceParams.TrackName = trackName;
                        return sourceParams;
                    }
                }
            }
        }
    }
}
```




