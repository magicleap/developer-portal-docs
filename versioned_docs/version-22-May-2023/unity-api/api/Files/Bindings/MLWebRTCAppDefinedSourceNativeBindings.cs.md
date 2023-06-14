---

title: MLWebRTCAppDefinedSourceNativeBindings.cs

---


# MLWebRTCAppDefinedSourceNativeBindings.cs









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
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class AppDefinedSource
        {
            internal class NativeBindings
            {
                public delegate void OnSetEnabledDelegate([MarshalAs(UnmanagedType.I1)] bool enabled, IntPtr context);

                public delegate void OnDestroyedDelegate(IntPtr context);

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCAppDefinedSourceEventCallbacks
                {
                    public uint Version;

                    public IntPtr Context;

                    public OnSetEnabledDelegate OnSetEnabled;

                    public OnDestroyedDelegate OnDestroyed;

                    public static MLWebRTCAppDefinedSourceEventCallbacks Create(IntPtr context, OnSetEnabledDelegate onSetEnabled, OnDestroyedDelegate onDestroyed)
                    {
                        MLWebRTCAppDefinedSourceEventCallbacks callbacks = new MLWebRTCAppDefinedSourceEventCallbacks
                        {
                            Version = 1,
                            OnSetEnabled = onSetEnabled,
                            OnDestroyed = onDestroyed,
                            Context = context
                        };
                        return callbacks;
                    }
                }
            }
        }
    }
}
```




