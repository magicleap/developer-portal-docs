---

title: MLCameraBaseYcbcrRenderer.cs

---


# MLCameraBaseYcbcrRenderer.cs









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

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLCameraBase
    {
        public class Renderer : YcbcrRenderer, YcbcrRenderer.INativeBufferProvider
        {
            public ulong PreviewBuffer = MagicLeapNativeBindings.InvalidHandle;
            public Renderer()
            {
                Initialize();
            }

            bool INativeBufferProvider.AcquireNextAvailableBuffer(out ulong nativeBufferHandle)
            {
                nativeBufferHandle = PreviewBuffer;
                return MagicLeapNativeBindings.MLHandleIsValid(PreviewBuffer);
            }

            void INativeBufferProvider.ReleaseBuffer(ulong nativeBufferHandle)
            { }
        }
    }
}
```




