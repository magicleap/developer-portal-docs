---

title: MLMediaPlayerTrackNativeBindings.cs

---


# MLMediaPlayerTrackNativeBindings.cs









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
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLMedia
    {
        public partial class Player
        {
            public partial class Track
            {
                internal class NativeBindings : MagicLeapNativeBindings
                {
                    public const uint MAX_KEY_STRING_SIZE = 64;

                    public static string GetTrackLanguage(ulong mediaPlayerHandle, uint trackIndex)
                    {
                        string language = string.Empty;
                        IntPtr stringPtr = IntPtr.Zero;
                        MLResult.Code resultCode = MLMediaPlayerGetTrackLanguage(mediaPlayerHandle, trackIndex, ref stringPtr);
                        MLResult.DidNativeCallSucceed(resultCode, "MLMediaPlayerGetTrackLanguage");

                        if (stringPtr != IntPtr.Zero)
                        {
                            language = Marshal.PtrToStringAnsi(stringPtr);
                            FreeUnmanagedMemory(stringPtr);
                        }

                        return language;
                    }

                    [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLMediaPlayerGetTrackLanguage(ulong mediaPlayerHandle, uint trackIndex, ref IntPtr OutTrackLanguage);

                    [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLMediaPlayerGetTrackType(ulong mediaPlayerHandle, uint trackIndex, out Type trackType);

                    [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLMediaPlayerGetTrackMediaFormat(ulong mediaPlayerHandle, uint trackIndex, out ulong formatHandle);
                    
                    [DllImport(CUtilsDLL, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code FreeUnmanagedMemory(IntPtr mediaStringPtr);

                }
            }
        }
    }
}
```




