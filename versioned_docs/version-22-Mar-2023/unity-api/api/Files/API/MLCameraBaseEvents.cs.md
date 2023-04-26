---

title: MLCameraBaseEvents.cs

---


# MLCameraBaseEvents.cs









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
    public partial class MLCameraBase
    {
        #region Events
        public static event MLCamera.OnDeviceAvailabilityStatusDelegate OnDeviceAvailable
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

        public static event MLCamera.OnDeviceAvailabilityStatusDelegate OnDeviceUnavailable
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

        public event MLCamera.OnDeviceStatusDelegate OnDeviceIdle;

        public event MLCamera.OnDeviceStatusDelegate OnDeviceStreaming;

        public event MLCamera.OnDeviceDisconnectedDelegate OnDeviceDisconnected;

        public event MLCamera.OnDeviceErrorDelegate OnDeviceError;

        public event MLCamera.OnCaptureFailedDelegate OnCaptureFailed;

        public event MLCamera.OnCaptureAbortedDelegate OnCaptureAborted;

        public event MLCamera.OnCaptureCompletedDelegate OnCaptureCompleted;

        public event MLCamera.OnPreviewCaptureCompletedDelegate OnPreviewCaptureCompleted;

        public event MLCamera.OnCapturedFrameAvailableDelegate OnRawImageAvailable;

        public event MLCamera.OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailable;

        public event MLCamera.OnCapturedFrameAvailableDelegate OnRawVideoFrameAvailable_NativeCallbackThread;

        public event MLCamera.OnPreviewBufferAvailableDelegate OnPreviewBufferAvailable;


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

        protected static MLCamera.OnDeviceAvailabilityStatusDelegate internalOnDeviceAvailable;
        protected static MLCamera.OnDeviceAvailabilityStatusDelegate internalOnDeviceUnavailable;

        private static int GetDeviceAvailabilitySubscriberCount()
        {
            int deviceAvailableListeners = (internalOnDeviceAvailable != null) ? internalOnDeviceAvailable.GetInvocationList().Length : 0;
            int deviceUnavailableListeners = (internalOnDeviceUnavailable != null) ? internalOnDeviceUnavailable.GetInvocationList().Length : 0;
            return deviceAvailableListeners + deviceUnavailableListeners;
        }

        #endregion
    }
}
```




