---

title: MLResult.cs

---


# MLResult.cs









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
    using System.Threading.Tasks;
    using UnityEngine.XR.MagicLeap.Native;

  public interface IMLRequest<Params, Result>
    {
        MLResult Start(Params parameters);
        MLResult TryGetResult(out Result result);
    }

    public abstract class MLRequest<Params, Result> : IMLRequest<Params, Result>
    {
        protected MLRequest() { }

        public Params Parameters => parameters;

        protected Params parameters;

        protected ulong handle = MagicLeapNativeBindings.InvalidHandle;

        public abstract MLResult Start(Params parameters);

        public abstract MLResult TryGetResult(out Result result);

        // if u also need to dispose of managed data, inherit from IDisposable
        protected abstract void Dispose(bool disposing);

        ~MLRequest() => this.Dispose(false);
    }

    public partial struct MLResult
    {

        public static implicit operator Task<MLResult>(MLResult r) => Task.FromResult(r);

        public readonly Code Result;

        private static Dictionary<Code, MLResult> existingResults;

        private string message;

        private MLResult(Code result, string msg)
        {
            this.Result = result;
            this.message = msg;
        }

        public enum Code : int
        {
            Ok = (CodePrefix.MLResultGlobal << 16),

            Pending,

            Timeout,

            Locked,

            UnspecifiedFailure,

            InvalidParam,

            AllocFailed,

            PermissionDenied,

            NotImplemented,

            ClientLimitExceeded,

            PoseNotFound,

            IncompatibleSKU,

            PerceptionSystemNotStarted,

            IllegalState,

            LicenseError,

            InvalidTimestamp,

            // MLAudioResult

            AudioNotImplemented = (CodePrefix.MLAudioResult << 16),

            AudioHandleNotFound,

            AudioInvalidSampleRate,

            AudioInvalidBitsPerSample,

            AudioInvalidValidBits,

            AudioInvalidSampleFormat,

            AudioInvalidChannelCount,

            AudioInvalidBufferSize,

            AudioBufferNotReady,

            AudioFileNotFound,

            AudioFileNotRecognized,

            AudioResourceNotFound,

            AudioResourceDiscarded,

            AudioOperationUnavailable,

            AudioInternalOperationNotReady,

            AudioInternalConfigError,

            InputServiceNotAvailable = (CodePrefix.MLInputResult << 16),

            InputPermissionDenied,

            InputDeviceNotFound,

            InputIllegalState,

            InputInternalError,

            InputSpeechDisabled,

            // MLMediaPlayerResult

            MediaPlayerServerDied = (CodePrefix.MLMediaPlayerResult << 16),

            MediaPlayerNotValidForProgressivePlayback,

            MediaAlreadyConnected = (CodePrefix.MLMediaResult << 16),

            MediaNotConnected,

            MediaUnknownHost,

            MediaCannotConnect,

            MediaIO,

            MediaConnectionLost,

            MediaLegacy1,

            MediaMalformed,

            MediaOutOfRange,

            MediaBufferTooSmall,

            MediaUnsupported,

            MediaEndOfStream,

            MediaFormatChanged,

            MediaDiscontinuity,

            MediaOutputBuffersChanged,

            MediaPermissionRevoked,

            MediaUnsupportedAudioFormat,

            MediaHeartbeatTerminateRequested,

            MediaUnknownResource,

            MediaInvalidResourceRequest,

            MediaOnlyHWResourceAvailable,

            MediaOnlySWResourceAvailable,

            MediaNoMoreResources,

            MediaNoMoreHWResources,

            MediaNoMoreSWResources,

            MediaInvalidCodecParam,

            // MLMediaDRMResult

            MediaDRMUnknown = (CodePrefix.MLMediaDRMResult << 16),

            MediaDRMNoLicense,

            MediaDRMLicenseExpired,

            MediaDRMSessionNotOpened,

            MediaDRMDecryptUnitNotInitialized,

            MediaDRMDecrypt,

            MediaDRMCannotHandle,

            MediaDRMTamperDetect,

            MediaDRMNotProvisioned,

            MediaDRMDeviceRevoked,

            MediaDRMResourceBusy,

            MediaDRMInsufficientOutputProtection,

            MediaDRMLastUsedErrorCode = MediaDRMInsufficientOutputProtection,

            MediaDRMVendorMin = (CodePrefix.MLMediaDRMResult << 16) + 500,

            MediaDRMVendorMax = (CodePrefix.MLMediaDRMResult << 16) + 999,

            // MLMediaGenericResult

            MediaGenericInvalidOperation = (CodePrefix.MLMediaGenericResult << 16),

            MediaGenericBadType,

            MediaGenericNameNotFound,

            MediaGenericHandleNotFound,

            MediaGenericNoInit,

            MediaGenericAlreadyExists,

            MediaGenericDeadObject,

            MediaGenericFailedTransaction,

            MediaGenericBadIndex,

            MediaGenericNotEnoughData,

            MediaGenericWouldBlock,

            MediaGenericUnknownTransaction,

            MediaGenericFDSNotAllowed,

            MediaGenericUnexpectedNull,

            MediaGenericNotAvailable,

            // MLSnapshotResult

            SnapshotDerivativesNotCalculated = (CodePrefix.MLSnapshotResult << 16),

            // MLWebRTCResult

            WebRTCInstanceNotCreated = (CodePrefix.MLWebRTCResult << 16),

            WebRTCMismatchingHandle,

            WebRTCInvalidFrameFormat,

            WebRTCInvalidFramePlaneCount,

            WebRTCSendNativeFrameError,

            WebRTCDataChannelIsClosed,

            // MLSpatialAnchorResult

            AnchorsMaxAnchorLimitReached = (CodePrefix.MLAnchorsResult << 16),

            AnchorsMinDistanceThresholdExceeded,

            AnchorsInsufficientMapping,

            AnchorsInvalidId,

            AnchorsInvalidExpirationTimestamp,

            AnchorsNotLocalized,

            AnchorsServerError,

            AnchorsServiceUnavailable,

            // MLVoiceResult

            VoiceIntentDisabled = (CodePrefix.MLVoiceResult << 16),

            // MLWebViewResult

            WebViewZoomLimitReached = (CodePrefix.MLWebViewResult << 16),

            // MLSpaceResult

            SpacesServerError = (CodePrefix.MLSpaceResult << 16),

            SpacesServiceUnavailable,

            UnavailableSpace,

            IncompatibleSpace,

            SpaceAlreadyExists,

            // Facial Expression

            HeadsetFitIssue = (CodePrefix.MLFacialExpressionResult << 16),

            EyeExpressionDisabled,

            PowerManagerNotConnect = (CodePrefix.MLPowerManager << 16),

            PowerManagerInvalidStateTransition,

            PowerManagerStateTransitionsDisabled,

            PowerManagerUnsupportedState,

            APIDLLNotFound = int.MaxValue - 0,

            APISymbolsNotFound = int.MaxValue - 1,

        }

        private enum CodePrefix : ushort
        {
            MLResultGlobal = 0x0000,

            MLAudioResult = 0x9e11,

            MLMediaDRMResult = 0x62ce,

            MLMediaGenericResult = 0xbf3b,

            MLMediaPlayerResult = 0xc435,

            MLMediaResult = 0x4184,

            MLSnapshotResult = 0x87b8,

            MLWebRTCResult = 0xefc7,

            MLAnchorsResult = 0x439,

            MLVoiceResult = 0xbe7a,

            MLInputResult = 0x21dc,

            MLWebViewResult = 0xebf7,

            MLSpaceResult = 0x10cc,

            MLPowerManager = 0x4c8a,

            MLFacialExpressionResult = 0x18cd
        }

        public bool IsOk
        {
            get
            {
                return Code.Ok == this.Result;
            }
        }

        public static MLResult Create(Code result, string msg = null)
        {
            if (string.IsNullOrEmpty(msg))
            {
                MLResult toReturn;

                if (existingResults == null)
                {
                    existingResults = new Dictionary<Code, MLResult>();
                }

                if (existingResults.Count == 0 || !existingResults.TryGetValue(result, out toReturn))
                {
                    toReturn = new MLResult(result, msg);

                    existingResults.Add(result, toReturn);
                }

                return toReturn;
            }
            else
            {
                return new MLResult(result, msg);
            }
        }

        public static string CodeToString(MLResult.Code resultCode)
        {
            string codeString = string.Empty;

            switch ((CodePrefix)((int)resultCode >> 16))
            {
                case CodePrefix.MLResultGlobal:
                    codeString = MagicLeapNativeBindings.MLGetResultString(resultCode);
                    break;
                case CodePrefix.MLSnapshotResult:
                    codeString = MagicLeapNativeBindings.MLGetSnapshotResultString(resultCode);
                    break;
                case CodePrefix.MLAudioResult:
                    codeString = MLAudioOutput.GetResultString(resultCode);
                    break;
                case CodePrefix.MLMediaDRMResult:
                case CodePrefix.MLMediaGenericResult:
                case CodePrefix.MLMediaPlayerResult:
                case CodePrefix.MLMediaResult:
                    codeString = MLMedia.NativeBindings.GetResultString(resultCode);
                    break;
                case CodePrefix.MLWebRTCResult:
                    codeString = Marshal.PtrToStringAnsi(MLWebRTC.NativeBindings.MLWebRTCGetResultString(resultCode));
                    break;
                case CodePrefix.MLInputResult:
                    codeString = MagicLeapNativeBindings.MLGetInputResultString(resultCode);
                    break;
                case CodePrefix.MLWebViewResult:
                    // No MLWebViewGetResultString in API 
                    codeString = "Web View Result Code - String Not Available";
                    break;
                case CodePrefix.MLAnchorsResult:
                    codeString = "MLResult_" + resultCode;
                    break;
                case CodePrefix.MLPowerManager:
                    codeString = resultCode.ToString();
                    break;
                case CodePrefix.MLFacialExpressionResult:
                    codeString = resultCode.ToString();
                    break;
                default:
                    // This will catch any unknown/invalid return values.
                    codeString = MagicLeapNativeBindings.MLGetResultString(resultCode);
                    break;
            }

            return codeString;
        }

        public static bool IsOK(Code result)
        {
            return Code.Ok == result;
        }

        public static bool IsPending(Code result)
        {
            return (Code.Pending == result);
        }

        public static bool DidNativeCallSucceed(Code resultCode, string functionName = "A native function", Predicate<Code> successCase = null, bool showError = true)
        {
            bool success = successCase != null ? successCase(resultCode) : IsOK(resultCode);

            if (!success && showError)
                MLPluginLog.ErrorFormat($"{functionName} in the Magic Leap API failed. Reason: {CodeToString(resultCode)} ");
            return success;
        }

        public static bool operator ==(MLResult one, MLResult.Code two)
        {
            return one.Result == two;
        }

        public static bool operator !=(MLResult one, MLResult.Code two)
        {
            return !(one.Result == two);
        }

        public override bool Equals(object obj)
        {
            if (obj is MLResult.Code)
            {
                return this.Result == (MLResult.Code)obj;
            }
            else
            {
                return false;
            }
        }

        public override int GetHashCode()
        {
            return this.Result.GetHashCode();
        }

        public override string ToString()
        {
            if (string.IsNullOrEmpty(this.message))
            {
                this.message = CodeToString(this.Result);
            }

            return this.message;
        }
    }
}
```



