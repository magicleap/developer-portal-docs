---

title: MLMediaPlayerEnums.cs

---


# MLMediaPlayerEnums.cs









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

    public partial class MLMedia
    {
        public partial class Player
        {
            public enum VideoScalingMode
            {
                ScaleToFit = 1,

                ScaleToFitWithCropping = 2
            };

            [Flags]
            public enum PollingStateFlags : uint
            {

                IsPlaying = 1 << 0,

                IsLooping = 1 << 1,

                HasBeenPrepared = 1 << 2,

                HasPlaybackCompleted = 1 << 3,

                HasSeekCompleted = 1 << 4,

                HasSizeChanged = 1 << 5,

                HasBufferingUpdated = 1 << 6,

                HasReceivedInfo = 1 << 7,

                HasReceivedError = 1 << 8,

                HasTimedTextUpdated = 1 << 9,

                HasSubtitleUpdated = 1 << 10,

                HasMetadataUpdated = 1 << 11,

                HasDrmInfoUpdated = 1 << 12,

                HasResetCompleted = 1 << 13,

                All = ~0u

            };

            public enum BufferingMode
            {

                None,

                TimeOnly,

                SizeOnly,

                TimeThenSize,
            };

            public enum FramePackingMode
            {
                None = 0,

                Checkboard,

                ColumnInterleaved,

                RowInterleaved,

                SideBySideQuincunx,

                SideBySide,

                TopBottom,

                MultiviewFrameByFrame,

                FrameByFrame,

                Anaglyph
            }

            [Flags]
            public enum FramePackingFlags
            {
                None = 0,

                RightViewFirst = 1,

                LeftFlipped = 2,

                RightFlipped = 4,

                Anaglyph_RedCyan = 8,

                AnaglyphGreenMagenta = 16
            }

            public enum SeekMode
            {
                PreviousSync = 0,

                NextSync,

                ClosestSync,

                Closest
            }

            public enum Info
            {
                Unknown = 1,

                StartedAsNext = 2,

                RenderingStart = 3,

                Looping = 4,

                Started = 5,

                Paused = 6,

                Stopped = 7,

                StartedBySharedPlayer = 8,

                PausedBySharedPlayer = 9,

                SeekBySharedPlayer = 10,

                StoppedBySharedPlayer = 11,

                SyncStart = 12,

                SyncComplete = 13,

                VideoTrackLagging = 700,

                BufferingStart = 701,

                BufferingEnd = 702,

                NetworkBandwidth = 703,

                BehindLiveWindow = 704,

                PowerStatePause = 705,

                PowerStateResume = 706,

                BufferedDuration = 707,

                BadInterleaving = 800,

                NotSeekable = 801,

                MetadataUpdate = 802,

                PlayAudioError = 804,

                PlayVideoError = 805,

                TimedTextError = 900,
            }


            public enum Cea608CaptionColor : uint
            {
                White = 0,

                Green = 1,

                Blue = 2,

                Cyan = 3,

                Red = 4,

                Yellow = 5,

                Magenta = 6,

                Invalid = 7
            }

            public enum Cea608CaptionStyle : uint
            {
                Normal = 0x00000000,

                Italics = 0x00000001,

                Underline = 0x00000002
            }

            public enum Cea608CaptionDimension : int
            {
                MaxRows = 15,

                MaxCols = 32,

                MaxRowsPlus2 = 17,

                MaxColsPlus2 = 34
            }

            public enum Cea708CaptionPenSize
            {
                Small = 0,

                Standard = 1,

                Large = 2,
            }

            public enum Cea708CaptionPenOffset
            {
                Subscript = 0,

                Normal = 1,

                Superscript = 2,
            }

            public enum Cea708CaptionEmitCommand : int
            {
                Buffer = 1,

                Control = 2,

                CWX = 3,

                CLW = 4,

                DSW = 5,

                HDW = 6,

                TGW = 7,

                DLW = 8,

                DLY = 9,

                DLC = 10,

                RST = 11,

                SPA = 12,

                SPC = 13,

                SPL = 14,

                SWA = 15,

                DFX = 16
            }

            public enum Cea708CaptionEmitCommandControl : int
            {
                ETX = 0x03,

                BS = 0x08,

                FF = 0x0c,

                HCR = 0x0e
            }

            public enum Cea708CaptionColorOpacity : int
            {
                Solid = 0,

                Flash = 1,

                Translucent = 2,

                Transparent = 3
            }

            public enum AudioChannel : uint
            {
                FrontLeft = 0,

                FrontRight = 1,

                FrontCenter = 2,

                LowFrequencyEffects = 3,

                SurroundLeft = 4,

                SurroundRight = 5
            }
        }
    }
}
```




