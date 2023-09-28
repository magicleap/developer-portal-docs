---

title: MLMediaTTML.cs

---


# MLMediaTTML.cs









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

    public partial class MLMediaTTML
    {
        public const float MLTTMLDimen_Unset = -3.402823466e+38F;

        public enum MLTTMLTextSizeType
        {
            Unset = 0x7FFFFFFF,

            Fractional = 0,

            FractionalIgnorePadding = 1,

            Absolute = 2,
        };

        public enum MLTTMLAnchorType
        {
            Unset = 0x7FFFFFFF,

            Start = 0,

            Middle = 1,

            End = 2
        };

        public enum MLTTMLLayoutAlignment
        {
            Unspecified = 0x7FFFFFFF,

            Normal = 0,

            Center = 1,

            Opposite = 2,
        };

        public enum MLTTMLLineType
        {
            Unset = 0x7FFFFFFF,

            Fraction = 0,

            Number = 1,
        };

        public struct MLTTMLData
        {
            public long StartTimeMs { get; internal set; }

            public long EndTimeMs { get; internal set; }

            public string Text { get; internal set; }

            public MLTTMLLayoutAlignment TextAlignment { get; internal set; }

            public MLTTMLImage Bitmap { get; internal set; }

            public float Line { get; internal set; }

            public MLTTMLLineType LineType { get; internal set; }

            public MLTTMLAnchorType LineAnchor { get; internal set; }

            public float Position { get; internal set; }

            public MLTTMLAnchorType PositionAnchor { get; internal set; }

            public float Size { get; internal set; }

            public float BitmapHeight { get; internal set; }

            public bool WindowColorSet { get; internal set; }

            public uint WindowColor { get; internal set; }

            public MLTTMLTextSizeType TextSizeType { get; internal set; }

            public float TextSize { get; internal set; }

            public static MLTTMLData Create()
            {
                return new MLTTMLData()
                {
                };
            }
        };

        public struct MLTTMLImage
        {
            public uint Size { get; private set; }

            public byte[] Data { get; private set; }

            public static MLTTMLImage Create()
            {
                return new MLTTMLImage()
                {
                    Size = 0,
                    Data = Array.Empty<byte>(),
                };
            }

            public static MLTTMLImage Create(byte[] outBuffer, uint imageSize)
            {
                return new MLTTMLImage()
                {
                    Size = imageSize,
                    Data = outBuffer,
                };
            }
        };
    }
}
```




