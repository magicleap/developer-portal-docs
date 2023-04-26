---

title: MLCameraMetadataTags.cs

---


# MLCameraMetadataTags.cs









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
        public partial class Metadata
        {
            public enum ColorCorrectionMode
            {
                TransformMatrix = 0,
                Fast,
                HighQuality,
            }

            public enum ColorCorrectionAberrationMode
            {
                Off = 0,
                Fast,
                HighQuality,
            }

            public enum ControlAEAntibandingMode
            {
                Off = 0,
                Mode_50Hz,
                Mode_60Hz,
                Auto,
            }

            public enum ControlAELock
            {
                Off = 0,
                On,
            }

            public enum ControlAEMode
            {
                Off = 0,
                On,
            }

            public enum ControlAWBLock
            {
                Off = 0,
                On,
            }

            public enum ControlAWBMode
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

            public enum ControlAFMode
            {
                Off = 0,

                Auto,

                Macro,

                ContinuousVideo,

                ContinuousPicture
            }

            public enum ControlAFTrigger
            {
                Idle = 0,

                Start,

                Cancel
            }

            public enum ControlMode
            {
                Off = 0,
                Auto,
                UseSceneMode,
                OffKeepState,
            }

            public enum ControlSceneMode
            {
                Action = 2,
                Portrait = 3,
                Landscape = 4,
                Theatre = 7,
                Sports = 13,
                Party = 14,
                CandleLight = 15,
                Barcode = 16,
                Medical = 100,
            }

            public enum ControlEffectMode
            {
                Off = 0,
                Grayscale,
                Negative,
                Sepia,
                ColorSelection,
                Sharpening,
                Emboss,
                Sketch,
            }

            public enum ControlAEState
            {
                Inactive = 0,
                Searching,
                Converged,
                Locked,
                FlashRequired,
                PreCapture,
            }

            public enum ControlAWBState
            {
                Inactive = 0,
                Searching,
                Converged,
                Locked,
            }

            public enum ControlAFState
            {
                Inactive = 0,

                PassiveScan,

                PassiveFocused,

                ActiveScan,

                FocusedLocked,

                NotFocusedLocked,

                PassiveUnFocused
            }

            public enum ControlAFSceneChange
            {
                NotDetected = 0,

                Detected
            }

            public enum LensState
            {
                Stationary = 0,

                Moving
            }

            public enum ScalerAvailableFormats
            {
                RAW16 = 0x20,
                RAW_OPAQUE = 0x24,
                YV12 = 0x32315659,
                YCrCb_420_SP = 0x11,
                IMPLEMENTATION_DEFINED = 0x22,
                YCbCr_420_888 = 0x23,
                BLOB = 0x21,
            }

            public enum ScalerAvailableStreamConfigurations
            {
                OUTPUT = 0,
                INPUT,
            }

            public enum JpegThumbnailSize
            {
                Size_160x120 = 1,
                Size_240x135 = 2,
                Size_256x135 = 3,
            }

            public enum ControlForceApplyMode
            {
                Off = 0,
                On = 1
            }
        }
    }
}
```




