---

title: MLCameraMetadataNativeBindings.cs

---


# MLCameraMetadataNativeBindings.cs









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

    public partial class MLCameraBase
    {
        public partial class Metadata
        {
            private class NativeBindings : Native.MagicLeapNativeBindings
            {
                [StructLayout(LayoutKind.Sequential)]
                public struct MLCameraMetadataRational
                {

                    public int Numerator;

                    public int Denominator;

                    public static MLCameraMetadataRational Create()
                    {
                        return new MLCameraMetadataRational()
                        {
                        };
                    }
                };


                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorSensitivityRequestMetadata(ulong Handle, out int OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAELock(
                    ulong Handle, ref ControlAELock Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEMaxRegions(ulong Handle, out int OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEModeResultMetadata(
                    ulong Handle, out ControlAEMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEAntibandingModeResultMetadata(
                    ulong Handle, out ControlAEAntibandingMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlForceApplyMode(
                    ulong Handle,
                    ControlForceApplyMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAECompensationStep(ulong Handle, IntPtr OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionTransformRequestMetadata(ulong Handle, IntPtr OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorInfoSensitivityRange(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 2)] int[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlEffectMode(
                    ulong Handle, ref ControlEffectMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetColorCorrectionAberrationMode(
                    ulong Handle, ref ColorCorrectionAberrationMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionAvailableAberrationModes(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray)] out IntPtr OutData,
                    out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionAberrationModeRequestMetadata(
                    ulong Handle, out ColorCorrectionAberrationMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAELockAvailable(
                    ulong Handle, out ControlAELock OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetJpegGPSCoordinatesRequestMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 3)] double[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAvailableEffectModes(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)] out ControlEffectMode[] OutData,
                    [MarshalAs(UnmanagedType.SysUInt)] out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAvailableSceneModes(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)] out ControlSceneMode[] OutData,
                    [MarshalAs(UnmanagedType.SysUInt)] out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEAvailableModes(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)] out ControlAEMode[] OutData,
                    [MarshalAs(UnmanagedType.SysUInt)] out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAECompensationRange(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 2, ArraySubType = UnmanagedType.SysInt)] out int[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAWBAvailableModes(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)] out ControlAWBMode[] OutData,
                    [MarshalAs(UnmanagedType.SysUInt)] out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAFAvailableModes(
                    ulong Handle, 
                    [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)] out ControlAFMode[] OutData, 
                    [MarshalAs(UnmanagedType.SysUInt)] out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetLensInfoHyperfocalDistance(ulong Handle, out float OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetLensInfoMinimumFocusDistance(ulong Handle, out float OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetLensInfoMinimumFocusDistanceIncrement(ulong Handle, out float OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAFModeRequestMetadata(ulong Handle, out ControlAFMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAFTriggerRequestMetadata(ulong Handle, out ControlAFTrigger OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetAFDistanceRangeRequestMetadata(ulong Handle, [MarshalAs(UnmanagedType.LPArray, SizeConst = 2)] out float[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetLensFocusDistanceRequestMetadata(ulong Handle, out float OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAFMode(ulong Handle, in ControlAFMode InData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAFTrigger(ulong Handle, in ControlAFTrigger InData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetAFDistanceRange(ulong Handle, [MarshalAs(UnmanagedType.LPArray, SizeConst = 2)] in float[] InData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetLensFocusDistance(ulong Handle, in float InData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAFModeResultMetadata(ulong Handle, out ControlAFMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAFTriggerResultMetadata(ulong Handle, out ControlAFTrigger OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetAFDistanceRangeResultMetadata(ulong Handle, [MarshalAs(UnmanagedType.LPArray, SizeConst = 2)] out float[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAFStateResultMetadata(ulong Handle, out ControlAFState OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAFSceneChangeResultMetadata(ulong Handle, out ControlAFSceneChange OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetLensFocusDistanceResultMetadata(ulong Handle, out float OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetLensStateResultMetadata(ulong Handle, out LensState OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAERegionsRequestMetadata(
                    ulong Handle,
                    IntPtr OutData,
                    out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAvailableModes(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)] out ControlMode[] OutData,
                    [MarshalAs(UnmanagedType.SysUInt)] out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetColorCorrectionTransform(
                    ulong Handle,
                    IntPtr Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAWBLockAvailable(
                    ulong Handle,
                    out ControlAWBLock OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorInfoActiveArraySize(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 4)] int[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionModeRequestMetadata(
                    ulong Handle,
                    out ColorCorrectionMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorOrientation(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.SysInt)] out int OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionGainsRequestMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 4)] float[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionTransformResultMetadata(
                    ulong Handle,
                    IntPtr OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEAntibandingModeRequestMetadata(
                    ulong Handle,
                    out ControlAEAntibandingMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEExposureCompensationRequestMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.SysInt)] out int OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAELockRequestMetadata(
                    ulong Handle,
                    out ControlAELock OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEModeRequestMetadata(
                    ulong Handle,
                    out ControlAEMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAWBLockRequestMetadata(
                    ulong Handle,
                    out ControlAWBLock OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAWBModeRequestMetadata(
                    ulong Handle,
                    out ControlAWBMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlModeRequestMetadata(
                    ulong Handle,
                    out ControlMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlSceneModeRequestMetadata(
                    ulong Handle,
                    out ControlSceneMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorExposureTimeRequestMetadata(
                    ulong Handle,
                    out long OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlEffectModeRequestMetadata(
                    ulong Handle,
                    out ControlEffectMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAELockResultMetadata(
                    ulong Handle,
                    out ControlAELock OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlExposureUpperTimeLimitRequestMetadata(
                    ulong Handle,
                    out long OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetJpegGPSTimestampRequestMetadata(
                    ulong Handle,
                    out long OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetJpegThumbnailSizeRequestMetadata(
                    ulong Handle,
                    out JpegThumbnailSize OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlForceApplyModeRequestMetadata(
                    ulong Handle,
                    out ControlForceApplyMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetJpegQualityRequestMetadata(
                    ulong Handle,
                    out byte OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetColorCorrectionMode(
                    ulong Handle,
                    ref ColorCorrectionMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionGainsResultMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 4)] float[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetColorCorrectionGains(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 4)] float[] Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAEAntibandingMode(
                    ulong Handle,
                    ref ControlAEAntibandingMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAEExposureCompensation(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.SysInt)] ref int Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAEMode(
                    ulong Handle,
                    ref ControlAEMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAERegions(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 15)] IntPtr Data,
                    int Count);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAWBLock(
                    ulong Handle,
                    ref ControlAWBLock Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlAWBMode(
                    ulong Handle,
                    ref ControlAWBMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlMode(
                    ulong Handle,
                    ref ControlMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlSceneMode(
                    ulong Handle,
                    ref ControlSceneMode Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAWBLockResultMetadata(
                    ulong Handle,
                    out ControlAWBLock OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetSensorExposureTime(
                    ulong Handle,
                    ref long Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetSensorSensitivity(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.SysInt)] ref int Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetControlExposureUpperTimeLimit(
                    ulong Handle,
                    long Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetJpegGPSCoordinates(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 3)] double[] Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetJpegGPSTimestamp(
                    ulong Handle,
                    long Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetJpegThumbnailSize(
                    ulong Handle,
                    ref JpegThumbnailSize Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataSetJpegQuality(
                    ulong Handle,
                    ref byte Data);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionModeResultMetadata(
                    ulong Handle,
                    out ColorCorrectionMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetColorCorrectionAberrationModeResultMetadata(
                    ulong Handle,
                    out ColorCorrectionAberrationMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEExposureCompensationResultMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.SysInt)] out int OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAERegionsResultMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 15)] IntPtr OutData,
                    [MarshalAs(UnmanagedType.SysInt)] out int OutCount);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAETargetFPSRangeResultMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 2)] int[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAEStateResultMetadata(
                    ulong Handle,
                    out ControlAEState OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAWBStateResultMetadata(
                    ulong Handle,
                    out ControlAWBState OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlAWBModeResultMetadata(
                    ulong Handle,
                    out ControlAWBMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlModeResultMetadata(
                    ulong Handle,
                    out ControlMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlSceneModeResultMetadata(
                    ulong Handle,
                    out ControlSceneMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorExposureTimeResultMetadata(
                    ulong Handle,
                    out long OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorSensitivityResultMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.SysInt)] out int OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorTimestampResultMetadata(
                    ulong Handle,
                    out long OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetSensorFrameDurationResultMetadata(
                    ulong Handle,
                    out long OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlEffectModeResultMetadata(
                    ulong Handle,
                    out ControlEffectMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlExposureUpperTimeLimitResultMetadata(
                    ulong Handle,
                    out long OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetJpegGPSCoordinatesResultMetadata(
                    ulong Handle,
                    [MarshalAs(UnmanagedType.LPArray, SizeConst = 3)] out double[] OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetJpegGPSTimestampResultMetadata(
                    ulong Handle,
                    out long OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetJpegThumbnailSizeResultMetadata(
                    ulong Handle,
                    out JpegThumbnailSize OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetControlForceApplyModeResultMetadata(
                    ulong Handle,
                    out ControlForceApplyMode OutData);

                [DllImport(MLCameraMetadataDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLCameraMetadataGetJpegQualityResultMetadata(
                    ulong Handle,
                    out byte OutData);
            }
        }
    }
}
```




