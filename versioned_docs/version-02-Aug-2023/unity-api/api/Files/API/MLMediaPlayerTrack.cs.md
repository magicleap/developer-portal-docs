---

title: MLMediaPlayerTrack.cs

---


# MLMediaPlayerTrack.cs









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
    using MagicLeap.Native;
    public partial class MLMedia
    {
        public partial class Player
        {
            public partial class Track
            {
                private Track() { }

                internal Track(ulong mediaPlayerHandle, uint trackIndex)
                {
                    this.Index = trackIndex;
                    this.Language = NativeBindings.GetTrackLanguage(mediaPlayerHandle, trackIndex);

                    MLResult.Code resultCode = NativeBindings.MLMediaPlayerGetTrackMediaFormat(mediaPlayerHandle, trackIndex, out ulong formatHandle);
                    if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaPlayerGetTrackMediaFormat)))
                    {
                        this.MediaFormat = new MLMediaFormat(formatHandle);
                        MLResult result = this.MediaFormat.GetValue(MLMediaFormatKey.Mime, out string mime);
                        if (result.IsOk)
                        {
                            this.MimeType = mime;
                            if (mime.Contains("audio/"))
                            {
                                result = this.MediaFormat.GetValue(MLMediaFormatKey.Channel_Mask, out int channelMask);
                                if (result.IsOk)
                                {
                                    AudioChannelLayout = (MLAudioOutput.ChannelLayouts)channelMask;
                                }
                            }
                        }
                    }

                    resultCode = NativeBindings.MLMediaPlayerGetTrackType(mediaPlayerHandle, trackIndex, out Type type);
                    MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaPlayerGetTrackType));
                    this.TrackType = type;
                }

                public MLAudioOutput.ChannelLayouts AudioChannelLayout
                {
                    get;
                    private set;
                }

                public uint Index
                {
                    get;
                    private set;
                }

                public string Language
                {
                    get;
                    private set;
                }

                public Type TrackType
                {
                    get;
                    private set;
                }

                public string MimeType
                {
                    get;
                    private set;
                }

                public MLMediaFormat MediaFormat
                {
                    get;
                    private set;
                }

                public override string ToString() => $"Index: {this.Index}, Language: {this.Language}, Type: {this.TrackType}, Mime: {this.MimeType}, format: {this.MediaFormat}";

                public enum Type
                {
                    Unknown = 0,

                    Video,

                    Audio,

                    TimedText,

                    Subtitle,

                    Metadata,
                };
            }
        }
    }
}
```




