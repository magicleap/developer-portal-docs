---

title: MLMediaMuxer.cs

---


# MLMediaMuxer.cs









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
using System.Runtime.InteropServices;
using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLMedia
    {
        public sealed partial class Muxer
        {
            public enum OutputFormat
            {
                MPEG4 = 0,

                WEBM = 1,

                ThreeGPP = 2,

                HEIF = 3,

                OGG = 4
            }

            [Flags]
            public enum CodecBufferFlags
            {
                KeyFrame = 1,

                EOS = 4,

                MuxerData = 16
            }

            private ulong handle = MagicLeapNativeBindings.InvalidHandle;

            public Muxer()
            {
                var result = NativeBindings.MLMediaMuxerCreate(out handle);
                MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLMediaMuxerCreate));
            }

            ~Muxer()
            {
                var result = NativeBindings.MLMediaMuxerRelease(handle);
                MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLMediaMuxerRelease));
            }

            public MLResult Configure(OutputFormat format, string filePath)
            {
                var resultCode = NativeBindings.MLMediaMuxerConfigure(handle, (int)format, filePath);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerConfigure));
                return MLResult.Create(resultCode);
            }

            public MLResult Start()
            {
                var resultCode = NativeBindings.MLMediaMuxerStart(handle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerStart));
                return MLResult.Create(resultCode);
            }

            public MLResult Stop()
            {
                var resultCode = NativeBindings.MLMediaMuxerStop(handle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerStop));
                return MLResult.Create(resultCode);
            }

            public MLResult GetSupportedOutputFormats(out OutputFormat[] results) => MLResult.Create(InternalGetSupportedOutputFormats(out results));

            public MLResult GetSupportedMimes(OutputFormat format, out string[] results) => MLResult.Create(InternalGetSupportedMimeTypes(format, out results));

            public MLResult AddAudioTrack(string mimeType, int sampleRate, int channels, out int addedTrackIndex)
            {
                MLMediaFormat mediaFormat = MLMediaFormat.CreateAudio(mimeType, sampleRate, channels);
                addedTrackIndex = -1;
                return (mediaFormat != null) ? MLResult.Create(InternalAddTrack(mediaFormat.Handle, out addedTrackIndex)) : MLResult.Create(MLResult.Code.UnspecifiedFailure);
            }

            public MLResult AddVideoTrack(string mimeType, int width, int height, out int addedTrackIndex)
            {
                MLMediaFormat mediaFormat = MLMediaFormat.CreateVideo(mimeType, width, height);
                addedTrackIndex = -1;
                return (mediaFormat != null) ? MLResult.Create(InternalAddTrack(mediaFormat.Handle, out addedTrackIndex)) : MLResult.Create(MLResult.Code.UnspecifiedFailure);
            }

            public MLResult SetOrientationHint(int degrees)
            {
                var resultCode = NativeBindings.MLMediaMuxerSetOrientationHint(handle, degrees);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerSetOrientationHint));
                return MLResult.Create(resultCode);
            }

            public MLResult SetLocation(float latitude, float longitude)
            {
                var resultCode = NativeBindings.MLMediaMuxerSetLocation(handle, latitude, longitude);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerSetLocation));
                return MLResult.Create(resultCode);
            }

            public MLResult WriteSampleData(int trackIndex, byte[] data, long time, CodecBufferFlags flags) => MLResult.Create(InternalWriteSampleData(trackIndex, data, time, flags));
        }
    }
}
```




