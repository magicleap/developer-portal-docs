---

title: MLMediaRecorderNativeBindings.cs

---


# MLMediaRecorderNativeBindings.cs









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

using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;

    public partial class MLMediaRecorder
    {
        internal class NativeBindings : Native.MagicLeapNativeBindings
        {
            public delegate void OnInfoDelegate(ulong handle, ref MLMediaRecorderOnInfo info);

            public delegate void OnTrackInfoDelegate(ulong handle, ref MLMediaRecorderOnInfo trackInfo);

            public delegate void OnErrorDelegate(ulong handle, ref MLMediaRecorderOnError error);

            public delegate void OnTrackErrorDelegate(ulong handle, ref MLMediaRecorderOnError trackError);

            [StructLayout(LayoutKind.Sequential)]
            public struct MLMediaRecorderOnError
            {
                public uint TrackId;

                public Error Error;

                public int Extra;

                public IntPtr Data;

                public static MLMediaRecorderOnError Create()
                {
                    return new MLMediaRecorderOnError()
                    {
                    };
                }
            };

            [StructLayout(LayoutKind.Sequential)]
            public struct MLMediaRecorderOnInfo
            {
                public uint TrackId;

                public Info Info;

                public int Extra;

                public IntPtr Data;

                public static MLMediaRecorderOnInfo Create()
                {
                    return new MLMediaRecorderOnInfo()
                    {
                    };
                }
            };

            [StructLayout(LayoutKind.Sequential)]
            public struct MLMediaRecorderEventCallbacks
            {
                private uint version;

                public OnInfoDelegate OnInfo;

                public OnTrackInfoDelegate OnTrackInfo;

                public OnErrorDelegate OnError;

                public OnTrackErrorDelegate OnTrackError;

                public static MLMediaRecorderEventCallbacks Create()
                {
                    return new MLMediaRecorderEventCallbacks()
                    {
                        version = 1,
                        OnInfo = NativeBindings.OnInfo,
                        OnTrackInfo = NativeBindings.OnTrackInfo,
                        OnError = NativeBindings.OnError,
                        OnTrackError = NativeBindings.OnTrackError,
                    };
                }
            };

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetOutputFileForPath(ulong handle,
                [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string path);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderPrepare(ulong handle, ulong formatHandle);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderStop(ulong handle);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderCreate(out ulong outHandle);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderDestroy(ulong handle);


            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetOutputFileForFD(ulong handle, int Fd);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetEventCallbacks(ulong handle, [In] ref MLMediaRecorderEventCallbacks callbacks,
                IntPtr data);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetVideoSource(ulong handle, VideoSource inVideoSource);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetAudioSource(ulong handle, AudioSource inAudioSource);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetOutputFormat(ulong handle, OutputFormat inFormat);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetVideoEncoder(ulong handle, VideoEncoder inVideoEncoder);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetAudioEncoder(ulong handle, AudioEncoder inAudioEncoder);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetMaxDuration(ulong handle, int inMaxDurationMsec);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetMaxFileSize(ulong handle, long inMaxFileSize);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderSetGeoLocation(ulong handle, long inLatitude10000,
                long inLongitude10000);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderStart(ulong handle);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderGetInputSurface(ulong handle, out ulong outInputSurfaceHandle);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderGetMaxAmplitude(ulong handle, out int MaxAmp);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderReleaseInputSurface(ulong handle, ulong inputSurfaceHandle);

            [DllImport(MLMediaRecorderDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaRecorderReset(ulong handle);

            [AOT.MonoPInvokeCallback(typeof(OnInfoDelegate))]
            internal static void OnInfo(ulong handle, ref MLMediaRecorderOnInfo info)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(info.Data);
                MLMediaRecorder mediaRecorder = gcHandle.Target as MLMediaRecorder;

                OnInfoData mediaRecorderInfo = new OnInfoData()
                {
                    Info = info.Info,
                    Extra = info.Extra,
                };

                MLThreadDispatch.Call(mediaRecorderInfo, mediaRecorder.OnInfo);
            }

            [AOT.MonoPInvokeCallback(typeof(OnTrackInfoDelegate))]
            private static void OnTrackInfo(ulong handle, ref MLMediaRecorderOnInfo trackInfo)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(trackInfo.Data);
                MLMediaRecorder mediaRecorder = gcHandle.Target as MLMediaRecorder;

                OnTrackInfoData mediaRecorderInfo = new OnTrackInfoData()
                {
                    TrackId = trackInfo.TrackId,
                    Info = trackInfo.Info,
                    Extra = trackInfo.Extra,
                };

                MLThreadDispatch.Call(mediaRecorderInfo, mediaRecorder.OnTrackInfo);
            }

            [AOT.MonoPInvokeCallback(typeof(OnErrorDelegate))]
            private static void OnError(ulong handle, ref MLMediaRecorderOnError error)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(error.Data);
                MLMediaRecorder mediaRecorder = gcHandle.Target as MLMediaRecorder;

                OnErrorData mediaRecorderError = new OnErrorData()
                {
                    Error = error.Error,
                    Extra = error.Extra,
                };

                MLThreadDispatch.Call(mediaRecorderError, mediaRecorder.OnError);
            }

            [AOT.MonoPInvokeCallback(typeof(OnTrackErrorDelegate))]
            private static void OnTrackError(ulong handle, ref MLMediaRecorderOnError trackError)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(trackError.Data);
                MLMediaRecorder mediaRecorder = gcHandle.Target as MLMediaRecorder;

                OnTrackErrorData mediaRecorderError = new OnTrackErrorData()
                {
                    TrackId = trackError.TrackId,
                    Error = trackError.Error,
                    Extra = trackError.Extra,
                };

                MLThreadDispatch.Call(mediaRecorderError, mediaRecorder.OnTrackError);
            }
        }
    }
}
```




