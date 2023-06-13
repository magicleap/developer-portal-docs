---

title: MLCameraBaseNativeBindings.cs

---


# MLCameraBaseNativeBindings.cs









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

    public partial class MLCameraBase
    {
        internal partial class NativeBindings : Native.MagicLeapNativeBindings
        {
            public const int MLCameraMaxImagePlanes = 3;

            private const int MLCameraMaxDistortionCoefficients = 5;

            private const int MLCameraMaxStreams = 2;

            #region V2

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraInit(ref MLCameraDeviceAvailabilityStatusCallbacks deviceAvailabilityStatusCallback, IntPtr userData);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraDeInit();

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraConnect(ref MLCameraConnectContext inputContext, out ulong handle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraGetNumSupportedStreams(ulong handle, out uint numSupportedStreams);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            internal static extern MLResult.Code MLCameraGetStreamCaps(ulong contextHandle, uint streamIndex, ref uint numStreamCaps, IntPtr streamCaps);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraDisconnect(ulong contextHandle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            internal static extern MLResult.Code MLCameraPreCaptureAEAWB(ulong contextHandle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraPrepareCapture(ulong contextHandle, ref MLCameraCaptureConfig config, out ulong metadataHandle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            internal static extern MLResult.Code MLCameraUpdateCaptureSettings(ulong contextHandle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraSetDeviceStatusCallbacks(ulong contextHandle, ref MLCameraDeviceStatusCallbacks deviceStatusCallbacks, IntPtr data);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            internal static extern MLResult.Code MLCameraSetCaptureCallbacks(ulong handle, ref MLCameraCaptureCallbacks captureCallbacks, IntPtr data);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl, CharSet = CharSet.Ansi)]
            public static extern MLResult.Code MLCameraCaptureImage(ulong contextHandle, uint numImages);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl, CharSet = CharSet.Ansi)]
            public static extern MLResult.Code MLCameraCaptureVideoStart(ulong contextHandle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            internal static extern MLResult.Code MLCameraCapturePreviewStart(ulong contextHandle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraCaptureVideoStop(ulong contextHandle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            internal static extern MLResult.Code MLCameraCapturePreviewStop(ulong contextHandle);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraGetDeviceStatus(ulong contextHandle, out uint outDeviceStatus);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            internal static extern MLResult.Code MLCameraGetDeviceAvailabilityStatus(MLCamera.Identifier camId, [MarshalAs(UnmanagedType.I1)] out bool deviceAvailabilityStatus);

            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraGetErrorCode(ulong contextHandle, out MLCamera.ErrorType outErrorCode);


            [DllImport(MLCameraDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLCameraGetCameraCharacteristics(ulong contextHandle, out ulong outMetadataHandle);

            #endregion
        }
    }
}
```




