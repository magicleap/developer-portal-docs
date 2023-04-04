---

title: MLCameraMetadata.cs

---


# MLCameraMetadata.cs









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
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLCameraBase
    {
        public partial class Metadata
        {
            public struct Rational
            {

                public int Numerator;

                public int Denominator;

                public override string ToString()
                {
                    return this.Numerator + "/" + this.Denominator;
                }

                public float ToFloat()
                {
                    if (this.Denominator == 0)
                    {
                        Debug.LogError("MLCameraMetadataRationalNative has a Denominator of 0. Cannot divide by zero!");
                        return 0.0f;
                    }

                    return (float)this.Numerator / (float)this.Denominator;
                }

                public void FromFloat(float value, int denominator)
                {
                    this.Numerator = (int)(value * denominator);
                    this.Denominator = denominator;
                }
            };

            public ulong Handle { get; private set; }

            internal Metadata(ulong handle)
            {
                Handle = handle;
            }

            public MLResult GetSensorSensitivityRequestMetadata(out int OutData)
                => MLResult.Create(InternalGetSensorSensitivityRequestMetadata(out OutData));

            public MLResult SetControlAELock(ControlAELock Data)
                => MLResult.Create(InternalSetControlAELock(Data));

            public MLResult GetControlAEMaxRegions(out int OutData)
                => MLResult.Create(InternalGetControlAEMaxRegions(out OutData));

            public MLResult GetControlAEModeResultMetadata(out ControlAEMode OutData)
                => MLResult.Create(InternalGetControlAEModeResultMetadata(out OutData));

            public MLResult GetControlAEAntibandingModeResultMetadata(out ControlAEAntibandingMode OutData)
                => MLResult.Create(InternalGetControlAEAntibandingModeResultMetadata(out OutData));


            public MLResult GetControlAECompensationStep(out Rational OutData)
                => MLResult.Create(InternalGetControlAECompensationStep(out OutData));

            public MLResult GetColorCorrectionTransformRequestMetadata(out Rational[][] OutData)
                => MLResult.Create(InternalGetColorCorrectionTransformRequestMetadata(out OutData));

            public MLResult GetSensorInfoSensitivityRange(out int[] OutData)
                => MLResult.Create(InternalGetSensorInfoSensitivityRange(out OutData));

            public MLResult SetControlEffectMode(ControlEffectMode Data)
                => MLResult.Create(InternalSetControlEffectMode(Data));

            public MLResult SetColorCorrectionAberrationMode(ColorCorrectionAberrationMode Data)
                => MLResult.Create(InternalSetColorCorrectionAberrationMode(Data));

            public MLResult GetColorCorrectionAvailableAberrationModes(
                out ColorCorrectionAberrationMode[] OutData)
                => MLResult.Create(InternalGetColorCorrectionAvailableAberrationModes(out OutData));

            public MLResult GetColorCorrectionAberrationModeRequestMetadata(
                out ColorCorrectionAberrationMode OutData)
                => MLResult.Create(InternalGetColorCorrectionAberrationModeRequestMetadata(out OutData));

            public MLResult GetControlAELockAvailable(out ControlAELock OutData)
                => MLResult.Create(InternalGetControlAELockAvailable(out OutData));

            public MLResult GetJpegGPSCoordinatesRequestMetadata(out double[] OutData)
                => MLResult.Create(InternalGetJpegGPSCoordinatesRequestMetadata(out OutData));

            public MLResult GetControlAvailableEffectModes(out ControlEffectMode[] OutData)
                => MLResult.Create(InternalGetControlAvailableEffectModes(out OutData));

            public MLResult GetControlAvailableSceneModes(out ControlSceneMode[] OutData)
                => MLResult.Create(InternalGetControlAvailableSceneModes(out OutData));

            public MLResult GetControlAEAvailableModes(out ControlAEMode[] OutData)
                => MLResult.Create(InternalGetControlAEAvailableModes(out OutData));

            public MLResult GetControlAECompensationRange(out int[] OutData)
                => MLResult.Create(InternalGetControlAECompensationRange(out OutData));

            public MLResult GetControlAWBAvailableModes(out ControlAWBMode[] OutData)
                => MLResult.Create(InternalGetControlAWBAvailableModes(out OutData));

            public MLResult GetControlAFAvailableModes(out ControlAFMode[] OutData)
                => MLResult.Create(InternalGetControlAFAvailableModes(out OutData));

            public MLResult GetLensInfoHyperfocalDistance(out float OutData)
                => MLResult.Create(InternalGetLensInfoHyperfocalDistance(out OutData));

            public MLResult GetLensInfoMinimumFocusDistance(out float OutData)
                => MLResult.Create(InternalGetLensInfoMinimumFocusDistance(out OutData));

            public MLResult GetLensInfoMinimumFocusDistanceIncrement(out float OutData)
                => MLResult.Create(InternalGetLensInfoMinimumFocusDistanceIncrement(out OutData));

            public MLResult GetControlAFModeRequestMetadata(out ControlAFMode OutData)
                => MLResult.Create(InternalGetControlAFModeRequestMetadata(out OutData));

            public MLResult GetControlAFTriggerRequestMetadata(out ControlAFTrigger OutData)
                => MLResult.Create(InternalGetControlAFTriggerRequestMetadata(out OutData));

            public MLResult GetControlAFDistanceRangeRequestMetadata(out float Min, out float Max)
                => MLResult.Create(InternalGetControlAFDistanceRangeRequestMetadata(out Min, out Max));

            public MLResult GetLensFocusDistanceRequestMetadata(out float OutData)
                => MLResult.Create(InternalGetLensFocusDistanceRequestMetadata(out OutData));

            public MLResult SetControlAFMode(ControlAFMode Mode)
                => MLResult.Create(InternalSetControlAFMode(Mode));

            public MLResult SetControlAFTrigger(ControlAFTrigger Trigger)
                => MLResult.Create(InternalSetControlAFTrigger(Trigger));

            public MLResult SetControlAFDistanceRange(float Min, float Max)
                => MLResult.Create(InternalSetAFDistanceRange(Min, Max));

            public MLResult SetLensFocusDistance(float Distance)
                => MLResult.Create(InternalSetLensFocusDistance(Distance));

            public MLResult GetControlAFModeResultMetadata(out ControlAFMode Data)
                => MLResult.Create(InternalGetControlAFModeResultMetadata(out Data));

            public MLResult GetControlAFTriggerResultMetadata(out ControlAFTrigger Data)
                => MLResult.Create(InternalGetControlAFTriggerResultMetadata(out Data));

            public MLResult GetControlAFDistanceRangeResultMetadata(out float Min, out float Max)
                => MLResult.Create(InternalGetControlAFDistanceRangeResultMetadata(out Min, out Max));

            public MLResult GetControlAFStateResultMetadata(out ControlAFState Data)
                => MLResult.Create(InternalGetControlAFStateResultMetadata(out Data));

            public MLResult GetControlAFSceneChangeResultMetadata(out ControlAFSceneChange Data)
                => MLResult.Create(InternalGetControlAFSceneChangeResultMetadata(out Data));

            public MLResult GetLensFocusDistanceResultMetadata(out float Data)
                => MLResult.Create(InternalGetLensFocusDistanceResultMetadata(out Data));

            public MLResult GetLensStateResultMetadata(out LensState Data)
                => MLResult.Create(InternalGetLensStateResultMetadata(out Data));

            public MLResult GetControlAERegionsRequestMetadata(out int[][] OutData)
                => MLResult.Create(InternalGetControlAERegionsRequestMetadata(out OutData));

            public MLResult GetControlAvailableModes(out ControlMode[] OutData)
                => MLResult.Create(InternalGetControlAvailableModes(out OutData));

            public MLResult SetColorCorrectionTransform(Rational[][] Data)
                => MLResult.Create(InternalSetColorCorrectionTransform(Data));

            public MLResult GetControlAWBLockAvailable(out ControlAWBLock OutData)
                => MLResult.Create(InternalGetControlAWBLockAvailable(out OutData));

            public MLResult GetSensorInfoActiveArraySize(out int[] OutData)
                => MLResult.Create(InternalGetSensorInfoActiveArraySize(out OutData));

            public MLResult GetColorCorrectionModeRequestMetadata(out ColorCorrectionMode OutData)
                => MLResult.Create(InternalGetColorCorrectionModeRequestMetadata(out OutData));

            public MLResult GetSensorOrientation(out int OutData)
                => MLResult.Create(InternalGetSensorOrientation(out OutData));

            public MLResult GetColorCorrectionGainsRequestMetadata(out float[] OutData)
                => MLResult.Create(InternalGetColorCorrectionGainsRequestMetadata(out OutData));

            public MLResult GetColorCorrectionTransformResultMetadata(out Rational[][] OutData)
                => MLResult.Create(InternalGetColorCorrectionTransformResultMetadata(out OutData));

            public MLResult GetControlAEAntibandingModeRequestMetadata(out ControlAEAntibandingMode OutData)
                => MLResult.Create(InternalGetControlAEAntibandingModeRequestMetadata(out OutData));

            public MLResult GetControlAEExposureCompensationRequestMetadata(out int OutData)
                => MLResult.Create(InternalGetControlAEExposureCompensationRequestMetadata(out OutData));

            public MLResult GetControlAELockRequestMetadata(out ControlAELock OutData)
                => MLResult.Create(InternalGetControlAELockRequestMetadata(out OutData));

            public MLResult GetControlAEModeRequestMetadata(out ControlAEMode OutData)
                => MLResult.Create(InternalGetControlAEModeRequestMetadata(out OutData));

            public MLResult GetControlAWBLockRequestMetadata(out ControlAWBLock OutData)
                => MLResult.Create(InternalGetControlAWBLockRequestMetadata(out OutData));

            public MLResult GetControlAWBModeRequestMetadata(out ControlAWBMode OutData)
                => MLResult.Create(InternalGetControlAWBModeRequestMetadata(out OutData));

            public MLResult GetControlModeRequestMetadata(out ControlMode OutData)
                => MLResult.Create(InternalGetControlModeRequestMetadata(out OutData));

            public MLResult GetControlSceneModeRequestMetadata(out ControlSceneMode OutData)
                => MLResult.Create(InternalGetControlSceneModeRequestMetadata(out OutData));

            public MLResult GetSensorExposureTimeRequestMetadata(out long OutData)
                => MLResult.Create(InternalGetSensorExposureTimeRequestMetadata(out OutData));

            public MLResult GetControlEffectModeRequestMetadata(out ControlEffectMode OutData)
                => MLResult.Create(InternalGetControlEffectModeRequestMetadata(out OutData));

            public MLResult GetControlAELockResultMetadata(out ControlAELock OutData)
                => MLResult.Create(InternalGetControlAELockResultMetadata(out OutData));

            public MLResult GetControlExposureUpperTimeLimitRequestMetadata(out long OutData)
                => MLResult.Create(InternalGetControlExposureUpperTimeLimitRequestMetadata(out OutData));

            public MLResult GetJpegGPSTimestampRequestMetadata(out long OutData)
                => MLResult.Create(InternalGetJpegGPSTimestampRequestMetadata(out OutData));

            public MLResult GetJpegThumbnailSizeRequestMetadata(out JpegThumbnailSize OutData)
                => MLResult.Create(InternalGetJpegThumbnailSizeRequestMetadata(out OutData));

            public MLResult GetJpegQualityRequestMetadata(out byte OutData)
                => MLResult.Create(InternalGetJpegQualityRequestMetadata(out OutData));

            public MLResult SetControlForceApplyMode(ControlForceApplyMode Data)
                => MLResult.Create(InternalSetControlForceApplyMode(Data));


            public MLResult GetControlForceApplyModeRequestMetadata(out ControlForceApplyMode OutData)
                => MLResult.Create(InternalGetControlForceApplyModeRequestMetadata(out OutData));

            public MLResult GetControlForceApplyModeResultMetadata(out ControlForceApplyMode OutData)
                => MLResult.Create(InternalGetControlForceApplyModeResultMetadata(out OutData));


            public MLResult SetColorCorrectionMode(ColorCorrectionMode Data)
                => MLResult.Create(InternalSetColorCorrectionMode(Data));

            public MLResult GetColorCorrectionGainsResultMetadata(out float[] OutData)
                => MLResult.Create(InternalGetColorCorrectionGainsResultMetadata(out OutData));

            public MLResult SetColorCorrectionGains(float[] Data)
                => MLResult.Create(InternalSetColorCorrectionGains(Data));

            public MLResult SetControlAEAntibandingMode(ControlAEAntibandingMode Data)
                => MLResult.Create(InternalSetControlAEAntibandingMode(Data));

            public MLResult SetControlAEExposureCompensation(int Data)
                => MLResult.Create(InternalSetControlAEExposureCompensation(Data));

            public MLResult SetControlAEMode(ControlAEMode Data)
                => MLResult.Create(InternalSetControlAEMode(Data));

            public MLResult SetControlAERegions(int[][] Data)
                => MLResult.Create(InternalSetControlAERegions(Data));

            public MLResult SetControlAWBLock(ControlAWBLock Data)
                => MLResult.Create(InternalSetControlAWBLock(Data));

            public MLResult SetControlAWBMode(ControlAWBMode Data)
                => MLResult.Create(InternalSetControlAWBMode(Data));

            public MLResult SetControlMode(ControlMode Data)
                => MLResult.Create(InternalSetControlMode(Data));

            public MLResult SetControlSceneMode(ControlSceneMode Data)
                => MLResult.Create(InternalSetControlSceneMode(Data));

            public MLResult GetControlAWBLockResultMetadata(out ControlAWBLock OutData)
                => MLResult.Create(InternalGetControlAWBLockResultMetadata(out OutData));

            public MLResult SetSensorExposureTime(long Data)
                => MLResult.Create(InternalSetSensorExposureTime(Data));

            public MLResult SetSensorSensitivity(int Data)
                => MLResult.Create(InternalSetSensorSensitivity(Data));

            public MLResult SetControlExposureUpperTimeLimit(long Data)
                => MLResult.Create(InternalSetControlExposureUpperTimeLimit(Data));

            public MLResult SetJpegGPSCoordinates(double[] Data)
                => MLResult.Create(InternalSetJpegGPSCoordinates(Data));

            public MLResult SetJpegGPSTimestamp(long Data)
                => MLResult.Create(InternalSetJpegGPSTimestamp(Data));

            public MLResult SetJpegThumbnailSize(JpegThumbnailSize Data)
                => MLResult.Create(InternalSetJpegThumbnailSize(Data));

            public MLResult SetJpegQuality(byte Data)
                => MLResult.Create(InternalSetJpegQuality(Data));

            public MLResult GetColorCorrectionModeResultMetadata(out ColorCorrectionMode OutData)
                => MLResult.Create(InternalGetColorCorrectionModeResultMetadata(out OutData));

            public MLResult GetColorCorrectionAberrationModeResultMetadata(
                out ColorCorrectionAberrationMode OutData)
                => MLResult.Create(InternalGetColorCorrectionAberrationModeResultMetadata(out OutData));

            public MLResult GetControlAEExposureCompensationResultMetadata(out int OutData)
                => MLResult.Create(InternalGetControlAEExposureCompensationResultMetadata(out OutData));

            public MLResult GetControlAERegionsResultMetadata(out int[][] OutData)
                => MLResult.Create(InternalGetControlAERegionsResultMetadata(out OutData));

            public MLResult GetControlAETargetFPSRangeResultMetadata(out int[] OutData)
                => MLResult.Create(InternalGetControlAETargetFPSRangeResultMetadata(out OutData));

            public MLResult GetControlAEStateResultMetadata(out ControlAEState OutData)
                => MLResult.Create(InternalGetControlAEStateResultMetadata(out OutData));

            public MLResult GetControlAWBStateResultMetadata(out ControlAWBState OutData)
                => MLResult.Create(InternalGetControlAWBStateResultMetadata(out OutData));

            public MLResult GetControlAWBModeResultMetadata(out ControlAWBMode OutData)
                => MLResult.Create(InternalGetControlAWBModeResultMetadata(out OutData));

            public MLResult GetControlModeResultMetadata(out ControlMode OutData)
                => MLResult.Create(InternalGetControlModeResultMetadata(out OutData));

            public MLResult GetControlSceneModeResultMetadata(out ControlSceneMode OutData)
                => MLResult.Create(InternalGetControlSceneModeResultMetadata(out OutData));

            public MLResult GetSensorExposureTimeResultMetadata(out long OutData)
                => MLResult.Create(InternalGetSensorExposureTimeResultMetadata(out OutData));

            public MLResult GetSensorSensitivityResultMetadata(out int OutData)
                => MLResult.Create(InternalGetSensorSensitivityResultMetadata(out OutData));

            public MLResult GetSensorTimestampResultMetadata(out long OutData)
                => MLResult.Create(InternalGetSensorTimestampResultMetadata(out OutData));

            public MLResult GetSensorFrameDurationResultMetadata(out long OutData)
                => MLResult.Create(InternalGetSensorFrameDurationResultMetadata(out OutData));

            public MLResult GetControlEffectModeResultMetadata(out ControlEffectMode OutData)
                => MLResult.Create(InternalGetControlEffectModeResultMetadata(out OutData));

            public MLResult GetControlExposureUpperTimeLimitResultMetadata(out long OutData)
                => MLResult.Create(InternalGetControlExposureUpperTimeLimitResultMetadata(out OutData));

            public MLResult GetJpegGPSCoordinatesResultMetadata(out double[] OutData)
                => MLResult.Create(InternalGetJpegGPSCoordinatesResultMetadata(out OutData));

            public MLResult GetJpegGPSTimestampResultMetadata(out long OutData)
                => MLResult.Create(InternalGetJpegGPSTimestampResultMetadata(out OutData));

            public MLResult GetJpegThumbnailSizeResultMetadata(out JpegThumbnailSize OutData)
                => MLResult.Create(InternalGetJpegThumbnailSizeResultMetadata(out OutData));

            public MLResult GetJpegQualityResultMetadata(out byte OutData)
                => MLResult.Create(InternalGetJpegQualityResultMetadata(out OutData));
        }
    }
}
```




