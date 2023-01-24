---

title: MLCameraEvents.cs

---


# MLCameraEvents.cs









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
    using System.Collections.Generic;
    using System.Runtime.InteropServices;
    using System.Threading;
    using System.Threading.Tasks;
    using UnityEngine.XR.MagicLeap.Native;

    public sealed partial class MLCamera
    {
        #region Events
        public static event OnDeviceAvailabilityStatusDelegate OnDeviceAvailable
        {
            add
            {
                internalOnDeviceAvailable += value;
                if (GetDeviceAvailabilitySubscriberCount() > 0)
                {
                    InternalInitialize();
                }
            }

            remove
            {
                internalOnDeviceAvailable -= value;
                if (GetDeviceAvailabilitySubscriberCount() == 0)
                {
                    InternalUninitialize();
                }
            }
        }

        public static event OnDeviceAvailabilityStatusDelegate OnDeviceUnavailable
        {
            add
            {
                internalOnDeviceUnavailable += value;
                if (GetDeviceAvailabilitySubscriberCount() > 0)
                {
                    InternalInitialize();
                }
            }

            remove
            {
                internalOnDeviceUnavailable -= value;
                if (GetDeviceAvailabilitySubscriberCount() == 0)
                {
                    InternalUninitialize();
                }
            }
        }

        public event OnDeviceStatusDelegate OnDeviceIdle;

        public event OnDeviceStatusDelegate OnDeviceStreaming;

        public event OnDeviceDisconnectedDelegate OnDeviceDisconnected;

        public event OnDeviceErrorDelegate OnDeviceError;

        public event OnCaptureFailedDelegate OnCaptureFailed;

        public event OnCaptureAbortedDelegate OnCaptureAborted;

        public event OnCaptureCompletedDelegate OnCaptureCompleted;

        public event OnPreviewCaptureCompletedDelegate OnPreviewCaptureCompleted;

        public event OnCapturedFrameAvailableDelegate OnRawImageAvailable;

        public event OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailable;

        public event OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailable_NativeCallbackThread;

        public event OnPreviewBufferAvailableDelegate OnPreviewBufferAvailable;

        private static OnDeviceAvailabilityStatusDelegate internalOnDeviceAvailable;
        private static OnDeviceAvailabilityStatusDelegate internalOnDeviceUnavailable;

        private static int GetDeviceAvailabilitySubscriberCount()
        {
            int deviceAvailableListeners = (internalOnDeviceAvailable != null) ? internalOnDeviceAvailable.GetInvocationList().Length : 0;
            int deviceUnavailableListeners = (internalOnDeviceUnavailable != null) ? internalOnDeviceUnavailable.GetInvocationList().Length : 0;
            return deviceAvailableListeners + deviceUnavailableListeners;
        }

        #endregion

        #region Delegates

        public delegate void OnDeviceAvailabilityStatusDelegate(Identifier camId);

        public delegate void OnDeviceStatusDelegate();

        public delegate void OnDeviceErrorDelegate(ErrorType error);

        public delegate void OnDeviceDisconnectedDelegate(DisconnectReason reason);

        public delegate void OnCaptureFailedDelegate(ResultExtras extra);

        public delegate void OnCaptureAbortedDelegate();

        public delegate void OnCaptureCompletedDelegate(Metadata metadataHandle, ResultExtras extra);

        public delegate void OnPreviewCaptureCompletedDelegate(MLResult result);


        public delegate void OnCapturedFrameAvailableDelegate(CameraOutput frameInfo, ResultExtras resultExtras, Metadata metadataHandle);

        public delegate void OnPreviewBufferAvailableDelegate(Metadata metadataHandle, ResultExtras extra);

        #endregion
    }
}
```



