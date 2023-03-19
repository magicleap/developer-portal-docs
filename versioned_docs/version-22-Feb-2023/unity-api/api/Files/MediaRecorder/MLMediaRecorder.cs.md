---

title: MLMediaRecorder.cs

---


# MLMediaRecorder.cs









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
        public enum VideoSource
        {
            Camera = 1,
        };

        public enum AudioSource
        {
            Voice = 0,

            World,

            Virtual,

            Mixed,
        };

        public enum Event
        {
            Error = 1,

            Info = 2,

            TrackError = 100,

            TrackInfo = 101,
        };

        public enum Info
        {
            Unknown = 1,

            MaxDurationReached = 800,

            MaxFileSizeReached = 801,

            MaxFileSizeApproaching = 802,

            TrackCompletionStatus = 1000,

            TrackProgressInTime = 1001,

            TrackType = 1002,

            TrackDurationMs = 1003,

            TrackMaxChunkDurationMs = 1004,

            TrackEncodedFrames = 1005,

            TrackInterChunkTimeUs = 1006,

            TrackInitialDelayMs = 1007,

            TrackStartOffsetMs = 1008,

            TrackDataKBytes = 1009,
        };

        public enum Error
        {
            Unknown = 1,
            ServerDied = 2,
            TrackGeneral = 100,
            VideoNoSyncFrame = 200,
        };

        public enum OutputFormat
        {
            Default = 0,

            THREE_GPP,

            MPEG_4,

            AMR_NB,

            AMR_WB,

            AAC_ADIF,

            AAC_ADTS,

            RTP_AVP,

            MPEG2TS,

            WEBM,

            HEIF,

            OGG,
        };

        public enum VideoEncoder
        {
            Default = 0,

            H263,

            H264,

            MPEG_4_SP,

            VP8,

            HEVC,
        };

        public enum AudioEncoder
        {
            Default = 0,

            AMR_NB,

            AMR_WB,

            AAC,

            HE_AAC,

            AAC_ELD,

            VORBIS,

            OPUS,
        };

        public struct OnErrorData
        {
            public Error Error;

            public int Extra;
        };

        public struct OnTrackErrorData
        {
            public uint TrackId;

            public Error Error;

            public int Extra;
        };

        public struct OnInfoData
        {
            public Info Info;

            public int Extra;
        };

        public struct OnTrackInfoData
        {
            public uint TrackId;

            public Info Info;

            public int Extra;
        };

        public delegate void OnInfoDelegate(OnInfoData info);
        public delegate void OnTrackInfoDelegate(OnTrackInfoData info);

        public delegate void OnErrorDelegate(OnErrorData trackInfo);
        public delegate void OnTrackErrorDelegate(OnTrackErrorData trackInfo);

        public event OnInfoDelegate OnInfo = delegate { };

        public event OnTrackInfoDelegate OnTrackInfo = delegate { };

        public event OnErrorDelegate OnError = delegate { };

        public event OnTrackErrorDelegate OnTrackError = delegate { };

        public ulong Handle { get; private set; } = MagicLeapNativeBindings.InvalidHandle;

        public MLNativeSurface InputSurface { get; private set; }

        private GCHandle gcHandle;

        public static MLMediaRecorder Create()
        {
            MLResult.Code resultCode = NativeBindings.MLMediaRecorderCreate(out ulong handle);
            return MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderCreate)) ? new MLMediaRecorder(handle) : null;
        }

        private MLMediaRecorder(ulong handle)
        {
            this.Handle = handle;

            NativeBindings.MLMediaRecorderEventCallbacks callbacks = NativeBindings.MLMediaRecorderEventCallbacks.Create();
            this.gcHandle = GCHandle.Alloc(this, GCHandleType.Weak);
            IntPtr gcHandlePtr = GCHandle.ToIntPtr(this.gcHandle);
            var resultCode = NativeBindings.MLMediaRecorderSetEventCallbacks(handle, ref callbacks, gcHandlePtr);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetEventCallbacks));
        }

        ~MLMediaRecorder()
        {
            Destroy();
            gcHandle.Free();
        }

        private void Destroy()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
                return;

            ReleaseInputSurface();

            MLResult.Code resultCode = NativeBindings.MLMediaRecorderDestroy(Handle);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderDestroy)))
                Handle = MagicLeapNativeBindings.InvalidHandle;
        }

        public MLResult SetOutputFileForFD(int fd)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetOutputFileForFD(Handle, fd);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetOutputFileForFD));
            return MLResult.Create(resultCode);
        }

        public MLResult SetOutputFileForPath(string path)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetOutputFileForPath(Handle, path);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetOutputFileForPath));
            return MLResult.Create(resultCode);
        }

        public MLResult SetVideoSource(VideoSource inVideoSource)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetVideoSource(Handle, inVideoSource);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetVideoSource));
            return MLResult.Create(resultCode);
        }

        public MLResult SetAudioSource(AudioSource inAudioSource)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetAudioSource(Handle, inAudioSource);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetAudioSource));
            return MLResult.Create(resultCode);
        }

        public MLResult SetOutputFormat(OutputFormat inFormat)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetOutputFormat(Handle, inFormat);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetOutputFormat));
            return MLResult.Create(resultCode);
        }

        public MLResult SetVideoEncoder(VideoEncoder inVideoEncoder)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetVideoEncoder(Handle, inVideoEncoder);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetVideoEncoder));
            return MLResult.Create(resultCode);
        }

        public MLResult SetAudioEncoder(AudioEncoder inAudioEncoder)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetAudioEncoder(Handle, inAudioEncoder);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetAudioEncoder));
            return MLResult.Create(resultCode);
        }

        public MLResult SetMaxDuration(int inMaxDurationMsec)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetMaxDuration(Handle, inMaxDurationMsec);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetMaxDuration));
            return MLResult.Create(resultCode);
        }

        public MLResult SetMaxFileSize(long inMaxFileSize)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetMaxFileSize(Handle, inMaxFileSize);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetMaxFileSize));
            return MLResult.Create(resultCode);
        }

        public MLResult SetGeoLocation(long inLatitude10000, long inLongitude10000)
        {
            var resultCode = NativeBindings.MLMediaRecorderSetGeoLocation(Handle, inLatitude10000, inLongitude10000);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderSetGeoLocation));
            return MLResult.Create(resultCode);
        }

        public MLResult Prepare(MLMediaFormat format)
        {
            MLResult.Code resultCode = NativeBindings.MLMediaRecorderPrepare(Handle, format.Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderPrepare));
            return MLResult.Create(resultCode);
        }

        public MLResult Start()
        {
            var resultCode = NativeBindings.MLMediaRecorderStart(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderStart));
            return MLResult.Create(resultCode);
        }

        public MLResult GetInputSurface()
        {
            var resultCode = NativeBindings.MLMediaRecorderGetInputSurface(Handle, out ulong inputSurface);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderGetInputSurface)))
            {
                InputSurface = new MLNativeSurface(inputSurface);
            }

            return MLResult.Create(resultCode);
        }

        public MLResult GetMaxAmplitude(out int maxAmp)
        {
            var resultCode = NativeBindings.MLMediaRecorderGetMaxAmplitude(Handle, out maxAmp);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderGetMaxAmplitude));
            return MLResult.Create(resultCode);
        }

        public MLResult Stop()
        {
            var resultCode = NativeBindings.MLMediaRecorderStop(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderStop));
            return MLResult.Create(resultCode);
        }

        public MLResult Reset()
        {
            MLResult.Code resultCode = NativeBindings.MLMediaRecorderReset(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderReset));
            ReleaseInputSurface();
            return MLResult.Create(resultCode);
        }

        private MLResult.Code ReleaseInputSurface()
        {
            MLResult.Code resultCode = MLResult.Code.Ok;
            if (InputSurface != null && MagicLeapNativeBindings.MLHandleIsValid(InputSurface.Handle))
            {
                resultCode = NativeBindings.MLMediaRecorderReleaseInputSurface(Handle, InputSurface.Handle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaRecorderReleaseInputSurface));
                InputSurface = null;
            }

            return resultCode;
        }
    }
}
```




