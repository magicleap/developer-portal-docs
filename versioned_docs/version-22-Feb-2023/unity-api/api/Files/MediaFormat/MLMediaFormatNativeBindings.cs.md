---

title: MLMediaFormatNativeBindings.cs

---


# MLMediaFormatNativeBindings.cs









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

    public partial class MLMediaFormat
    {
        private class NativeBindings : MagicLeapNativeBindings
        {
            public static int MAX_KEY_STRING_SIZE = 64;

            public static int MAX_FORMAT_STRING_SIZE = 512;

            [StructLayout(LayoutKind.Sequential)]
            internal struct MLMediaFormatByteArray
            {
                public readonly IntPtr Ptr;

                public readonly ulong Length;

                public MLMediaFormatByteArray(IntPtr ptr, ulong length)
                {
                    this.Ptr = ptr;
                    this.Length = length;
                }
            };

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatCreateVideo([MarshalAs(unmanagedType: UnmanagedType.LPStr)] string mimeType, int Width, int Height, out ulong outHandle);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatCreateAudio([MarshalAs(unmanagedType: UnmanagedType.LPStr)] string MimeType, int SampleRate, int ChannelCount, out ulong outHandle);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatCreateSubtitle([MarshalAs(unmanagedType: UnmanagedType.LPStr)] string MimeType, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string Language, out ulong outHandle);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatCreate(out ulong outHandle);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatCreateCopy(ulong handle, out ulong outHandle);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatDestroy(ulong handle);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatObjectToString(ulong handle, IntPtr outString);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatGetKeyValueInt32(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, out int outKey);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatGetKeyValueInt64(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, out long outKey);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatGetKeyValueFloat(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, out float outKey);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatGetKeySize(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, out ulong outSize);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatGetKeyString(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, IntPtr outString);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatGetKeyByteBuffer(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, out MLMediaFormatByteArray OutBuffer);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatKeyByteBufferRelease(ulong handle, ref MLMediaFormatByteArray buffer);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatSetKeyInt32(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, int keyValue);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatSetKeyInt64(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, long keyValue);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatSetKeyFloat(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, float keyValue);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatSetKeySize(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, ulong keySize);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatSetKeyString(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string KeyValue);

            [DllImport(MLMediaFormatDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMediaFormatSetKeyByteBuffer(ulong handle, [MarshalAs(unmanagedType: UnmanagedType.LPStr)] string name, ref MLMediaFormatByteArray Buffer);
        }
    }
}
```




