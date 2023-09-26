---

title: MLMediaTTMLNativeBindings.cs

---


# MLMediaTTMLNativeBindings.cs









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

    public partial class MLMediaTTML
    {
        private class NativeBindings : Native.MagicLeapNativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public struct MLTTMLData
            {
                public long StartTimeMs;

                public long EndTimeMs;

                public string Text;

                public MLTTMLLayoutAlignment TextAlignment;

                public MLTTMLImage Bitmap;

                public float Line;

                public MLTTMLLineType LineType;

                public MLTTMLAnchorType LineAnchor;

                public float Position;

                public MLTTMLAnchorType PositionAnchor;

                public float Size;

                public float BitmapHeight;

                public bool WindowColorSet;

                public uint WindowColor;

                public MLTTMLTextSizeType TextSizeType;

                public float TextSize;

                public static MLTTMLData Create()
                {
                    return new MLTTMLData()
                    {
                    };
                }
            };

            [StructLayout(LayoutKind.Sequential)]
            public struct MLTTMLImage
            {
                public uint Size;

                public IntPtr Data;

                public static MLTTMLImage Create()
                {
                    return new MLTTMLImage()
                    {
                        Data = IntPtr.Zero,
                        Size = 0,
                    };
                }

                public static MLTTMLImage Create(IntPtr pointer, uint bufferLength)
                {
                    return new MLTTMLImage()
                    {
                        Data = pointer,
                        Size = bufferLength,
                    };
                }
            };
        }
    }
}
```




