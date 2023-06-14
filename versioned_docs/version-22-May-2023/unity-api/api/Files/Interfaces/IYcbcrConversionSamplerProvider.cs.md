---

title: IYcbcrConversionSamplerProvider.cs

---


# IYcbcrConversionSamplerProvider.cs









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

namespace UnityEngine.XR.MagicLeap
{
    public partial class YcbcrRenderer
    {
        public interface IYcbcrConversionSamplerProvider
        {
            public abstract bool OverrideYcbcrConversionSampler(ref VkAndroidHardwareBufferFormatPropertiesANDROID hwBufferFormatProperties, ref VkSamplerYcbcrConversionCreateInfo sampler);
        }


        [StructLayout(LayoutKind.Sequential)]
        public struct VkComponentMapping
        {
            public uint r;

            public uint g;

            public uint b;

            public uint a;

            public override bool Equals(object obj)
            {
                VkComponentMapping other = (VkComponentMapping)obj;
                return (r == other.r)
                    && (g == other.g)
                    && (b == other.b)
                    && (a == other.a);
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct VkAndroidHardwareBufferFormatPropertiesANDROID
        {
            public uint sType;

            public IntPtr pNext;

            public uint format;

            public ulong externalFormat;

            public uint formatFeatures;

            public VkComponentMapping samplerYcbcrConversionComponents;

            public uint suggestedYcbcrModel;

            public uint suggestedYcbcrRange;

            public uint suggestedXChromaOffset;

            public uint suggestedYChromaOffset;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct VkSamplerYcbcrConversionCreateInfo
        {
            public uint sType;

            public IntPtr pNext;

            public uint format;

            public uint ycbcrModel;

            public uint ycbcrRange;

            public VkComponentMapping components;

            public uint xChromaOffset;

            public uint yChromaOffset;

            public uint chromaFilter;

            public uint forceExplicitReconstruction;
        }
    }
}
```




