---

title: MLCameraBaseNativeDelegates.cs

---


# MLCameraBaseNativeDelegates.cs









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

    public partial class MLCameraBase
    {
        internal partial class NativeBindings
        {
            public delegate void DeviceAvailabilityStatusDelegate(ref MLCameraDeviceAvailabilityInfo info);

            public delegate void OnDataCallback(IntPtr data);

            public delegate void OnErrorDataCallback(MLCamera.ErrorType error, IntPtr data);

            public delegate void OnOutputRefDataCallback(ref MLCameraOutput output, IntPtr data);

            public delegate void OnHandleDataCallback(ulong metadataHandle, IntPtr data);

            public delegate void OnResultExtrasRefDataCallback(ref MLCameraResultExtras extra, IntPtr data);

            public delegate void OnHandleAndResultExtrasRefDataCallback(MLCamera.Metadata metadataHandle,
                ref MLCameraResultExtras extra, IntPtr data);

            public delegate void OnCaptureFailedDelegate(ref MLCameraResultExtras extra, IntPtr data);

            public delegate void OnCaptureAbortedDelegate(IntPtr data);

            public delegate void OnPreviewBufferAvailableDelegate(ulong bufferHandle, ulong metadataHandle,
                ref MLCameraResultExtras extra, IntPtr data);

            public delegate void OnDeviceStreamingDelegate(IntPtr data);

            public delegate void OnDeviceIdleDelegate(IntPtr data);

            public delegate void OnImageBufferAvailableDelegate(ref MLCameraOutput output, ulong metadataHandle,
                ref MLCameraResultExtras extra, IntPtr data);

            public delegate void OnVideoBufferAvailableDelegate(ref MLCameraOutput output, ulong metadataHandle,
                ref MLCameraResultExtras extra, IntPtr data);

            public delegate void OnDeviceErrorDelegate(MLCamera.ErrorType error, IntPtr data);

            public delegate void OnDeviceDisconnectedDelegate(MLCamera.DisconnectReason reason, IntPtr data);

            public delegate void OnCaptureCompletedDelegate(ulong metadataHandle, ref MLCameraResultExtras extra, IntPtr data);
        }
    }
}
```




