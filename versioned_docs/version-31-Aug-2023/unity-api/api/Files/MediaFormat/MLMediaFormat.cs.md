---

title: MLMediaFormat.cs

---


# MLMediaFormat.cs









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
    public partial class MLMediaFormat
    {
        public enum AudioEncoding
        {
            None = 0,

            PCM16Bits = 2,

            PCM8Bits = 3,

            PCMFloat = 4,

            PCM32Bits = 201,
        }

        public ulong Handle { get; private set; }

        public static MLMediaFormat CreateVideo(string mimeType, int width, int height)
        {
            if (MLResult.DidNativeCallSucceed(NativeBindings.MLMediaFormatCreateVideo(mimeType, width, height, out ulong handle), nameof(NativeBindings.MLMediaFormatCreateVideo)))
            {
                return new MLMediaFormat(handle);
            }
            return null;
        }

        public static MLMediaFormat CreateAudio(string mimeType, int sampleRate, int channelCount)
        {
            if (MLResult.DidNativeCallSucceed(NativeBindings.MLMediaFormatCreateAudio(mimeType, sampleRate, channelCount, out ulong handle), nameof(NativeBindings.MLMediaFormatCreateAudio)))
            {
                return new MLMediaFormat(handle);
            }
            return null;
        }

        public static MLMediaFormat CreateSubtitle(string mimeType, string language)
        {
            if (MLResult.DidNativeCallSucceed(NativeBindings.MLMediaFormatCreateSubtitle(mimeType, language, out ulong handle), nameof(NativeBindings.MLMediaFormatCreateSubtitle)))
            {
                return new MLMediaFormat(handle);
            }
            return null;
        }

        // TODO : can we replace with a "copy-constructor" or Clone() method?
        public static MLMediaFormat CreateCopy(MLMediaFormat format)
        {
            if (MLResult.DidNativeCallSucceed(NativeBindings.MLMediaFormatCreateCopy(format.Handle, out ulong handle), nameof(NativeBindings.MLMediaFormatCreateCopy)))
            {
                return new MLMediaFormat(handle);
            }
            return null;
        }

        // TODO : replace this with a regular constructor, but then we cant return null value if MLMediaFormatCreate() fails.
        public static MLMediaFormat CreateEmpty()
        {
            if (MLResult.DidNativeCallSucceed(NativeBindings.MLMediaFormatCreate(out ulong handle), nameof(NativeBindings.MLMediaFormatCreate)))
            {
                return new MLMediaFormat(handle);
            }
            return null;
        }

        internal MLMediaFormat(ulong handle)
        {
            this.Handle = handle;
        }

        ~MLMediaFormat()
        {
            MLResult.Code resultCode = NativeBindings.MLMediaFormatDestroy(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaFormatDestroy));
        }

        public override string ToString()
        {
            string objToStr = string.Empty;

            IntPtr stringPtr = Marshal.AllocHGlobal(NativeBindings.MAX_FORMAT_STRING_SIZE);

            if (MLResult.DidNativeCallSucceed(NativeBindings.MLMediaFormatObjectToString(Handle, stringPtr), nameof(NativeBindings.MLMediaFormatObjectToString)))
            {
                objToStr = Marshal.PtrToStringAnsi(stringPtr);
            }
            Marshal.FreeHGlobal(stringPtr);

            return objToStr;
        }

        public MLResult GetValue(string keyName, out int value)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatGetKeyValueInt32(Handle, keyName, out value));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatGetKeyValueInt32));
            return result;
        }

        public MLResult GetValue(string keyName, out long value)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatGetKeyValueInt64(Handle, keyName, out value));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatGetKeyValueInt64));
            return result;
        }

        public MLResult GetValue(string keyName, out float value)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatGetKeyValueFloat(Handle, keyName, out value));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatGetKeyValueFloat));
            return result;
        }

        public MLResult GetValue(string keyName, out string value)
        {
            value = string.Empty;

            IntPtr stringPtr = Marshal.AllocHGlobal(NativeBindings.MAX_KEY_STRING_SIZE);
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatGetKeyString(Handle, keyName, stringPtr));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatGetKeyString));
            if (result.IsOk)
            {
                value = Marshal.PtrToStringAnsi(stringPtr);
            }
            Marshal.FreeHGlobal(stringPtr);
            return result;
        }

        public MLResult GetValue(string keyName, out byte[] value)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatGetKeyByteBuffer(Handle, keyName, out NativeBindings.MLMediaFormatByteArray nativeByteBuffer));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatGetKeyByteBuffer));
            if (result.IsOk)
            {
                value = new byte[nativeByteBuffer.Length];
                Marshal.Copy(nativeByteBuffer.Ptr, value, 0, (int)nativeByteBuffer.Length);

                MLResult.Code resultCode = NativeBindings.MLMediaFormatKeyByteBufferRelease(Handle, ref nativeByteBuffer);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaFormatKeyByteBufferRelease));
            }
            else
            {
                value = null;
            }

            return result;
        }

        public MLResult GetValue(string keyName, out ulong size)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatGetKeySize(Handle, keyName, out size));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatGetKeySize));
            return result;
        }

        public MLResult SetValue(string keyName, int value)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatSetKeyInt32(Handle, keyName, value));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatSetKeyInt32));
            return result;
        }

        public MLResult SetValue(string keyName, long value)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatSetKeyInt64(Handle, keyName, value));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatSetKeyInt64));
            return result;
        }

        public MLResult SetValue(string keyName, float value)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatSetKeyFloat(Handle, keyName, value));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatSetKeyFloat));
            return result;
        }

        public MLResult SetValue(string keyName, string value)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatSetKeyString(Handle, keyName, value));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatSetKeyString));
            return result;
        }

        public MLResult SetValue(string keyName, byte[] value)
        {
            IntPtr bufferPtr = Marshal.AllocHGlobal(value.Length);
            Marshal.Copy(value, 0, bufferPtr, value.Length);
            NativeBindings.MLMediaFormatByteArray nativeBuffer = new NativeBindings.MLMediaFormatByteArray(bufferPtr, (uint)value.Length);

            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatSetKeyByteBuffer(Handle, keyName, ref nativeBuffer));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatSetKeyByteBuffer));
            Marshal.FreeHGlobal(bufferPtr);

            return result;
        }

        public MLResult SetValue(string keyName, ulong size)
        {
            MLResult result = MLResult.Create(NativeBindings.MLMediaFormatSetKeySize(Handle, keyName, size));
            MLResult.DidNativeCallSucceed(result.Result, nameof(NativeBindings.MLMediaFormatSetKeySize));
            return result;
        }

    }
}
```




