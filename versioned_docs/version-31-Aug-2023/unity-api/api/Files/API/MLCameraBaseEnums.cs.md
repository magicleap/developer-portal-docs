---

title: MLCameraBaseEnums.cs

---


# MLCameraBaseEnums.cs









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

using System;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLCameraBase
    {
        public enum ErrorType
        {
            None = 0,

            Invalid,

            Disabled,

            DeviceFailed,

            ServiceFailed,

            CaptureFailed
        }

        public enum CaptureType
        {
            Image,

            Video,

            Preview,
        }

        public enum OutputFormat
        {
            YUV_420_888 = 1,

            JPEG,

            RGBA_8888,
        }

        [Flags]
        public enum DeviceStatusFlag
        {
            Connected = 1 << 0,

            Idle = 1 << 1,

            Streaming = 1 << 2,

            Disconnected = 1 << 3,

            Error = 1 << 4,
        }

        public enum MetadataControlAEMode
        {
            Off = 0,

            On
        }

        public enum MetadataColorCorrectionAberrationMode
        {
            Off = 0,

            Fast,

            HighQuality,
        }

        public enum MetadataControlAELock
        {
            Off = 0,

            On,
        }

        public enum MetadataControlAWBMode
        {
            Off = 0,

            Auto,

            Incandescent,

            Fluorescent,

            WarmFluorescent,

            Daylight,

            CloudyDaylight,

            Twilight,

            Shade,
        }

        public enum MetadataControlAWBLock
        {
            Off = 0,

            On,
        }

        public enum MetadataColorCorrectionMode
        {
            TransformMatrix = 0,

            Fast,

            HighQuality,
        }

        public enum MetadataControlAEAntibandingMode
        {
            Off = 0,

            FiftyHz,

            SixtyHz,

            Auto,
        }

        public enum MetadataScalerAvailableFormats
        {
            RAW16 = 0x20,

            RAW_OPAQUE = 0x24,

            YV12 = 0x32315659,

            YCrCb_420_SP = 0x11,

            IMPLEMENTATION_DEFINED = 0x22,

            YCbCr_420_888 = 0x23,

            BLOB = 0x21,
        }

        public enum MetadataScalerAvailableStreamConfigurations
        {
            OUTPUT = 0,

            INPUT,
        }

        public enum MetadataControlAEState
        {
            Inactive = 0,

            Searching,

            Converged,

            Locked,

            FlashRequired,

            PreCapture,
        }

        public enum MetadataControlAWBState
        {
            Inactive = 0,

            Searching,

            Converged,

            Locked,
        }

        public enum MRQuality
        {
            _648x720 = 1,
            
            _972x1080 = 2,
            
            _1944x2160 = 3,
            
            _960x720 = 4,
            
            _1440x1080 = 5,
            
            _2880x2160 = 6,
        };

        public enum CaptureFrameRate
        {
            None,

            _15FPS,

            _30FPS,

            _60FPS,
        };

        public enum DisconnectReason
        {
            DeviceLost,

            PriorityLost,
        };

        public enum Identifier
        {
            Main = 0,

            CV,
        };

        public enum ConnectFlag
        {
            CamOnly,

            VirtualOnly,

            MR,
        };

        public enum MRBlendType
        {
            Additive = 1
        };
    }
}
```




