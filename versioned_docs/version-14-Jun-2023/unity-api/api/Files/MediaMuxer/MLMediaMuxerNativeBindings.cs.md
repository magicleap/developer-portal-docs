---

title: MLMediaMuxerNativeBindings.cs

---


# MLMediaMuxerNativeBindings.cs









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
    using System.ComponentModel;
    using System.Runtime.InteropServices;

    public partial class MLMedia
    {
        public sealed partial class Muxer
        {
            private class NativeBindings : Native.MagicLeapNativeBindings
            {
                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaMuxerSampleData
                {
                    public uint Version;

                    public uint TrackIndex;

                    public byte[] Buffer;

                    public uint Size;

                    public ulong Time;

                    public CodecBufferFlags Flags;

                    public static MLMediaMuxerSampleData Create()
                    {
                        return new MLMediaMuxerSampleData()
                        {
                            Version = 1,
                            TrackIndex = 0,
                            Buffer = null,
                            Size = 0,
                            Time = 0,
                            Flags = CodecBufferFlags.KeyFrame
                        };
                    }
                };

                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerCreate(out ulong muxerHandle);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerWriteSampleData(ulong muxerHandle, in MLMediaMuxerSampleData Data);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerSetOrientationHint(ulong muxerHandle, int Degrees);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerStop(ulong muxerHandle);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerStart(ulong muxerHandle);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerRelease(ulong muxerHandle);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerGetSupportedOutputFormats(ulong muxerHandle, [MarshalAs(UnmanagedType.LPArray)] out IntPtr OutFormatList, out int OutFormatListSize);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerGetSupportedMimes(ulong muxerHandle, OutputFormat Format, out IntPtr OutMimeList, out int OutMimeListSize);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerAddTrack(ulong muxerHandle, ulong formatHandle, out UIntPtr OutTrackIndex);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerConfigure(ulong muxerHandle, int Format, string Path);


                [DllImport(MediaMuxerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaMuxerSetLocation(ulong muxerHandle, float Latitude, float Longitude);
            }

            private MLResult.Code InternalGetSupportedOutputFormats(out OutputFormat[] formats)
            {
                const int sizeOfOutputFormatEnum = sizeof(OutputFormat);
                var resultCode = NativeBindings.MLMediaMuxerGetSupportedOutputFormats(handle, out IntPtr resultPtr, out int resultCount);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerGetSupportedOutputFormats));
                formats = new OutputFormat[resultCount];
                if (resultCode == MLResult.Code.Ok)
                {
                    for (int i = 0; i < resultCount; i++)
                    {
                        formats[i] = (OutputFormat)Marshal.ReadInt32(resultPtr);
                        resultPtr += sizeOfOutputFormatEnum;
                    }
                }
                Marshal.FreeHGlobal(resultPtr);
                return resultCode;
            }

            private MLResult.Code InternalGetSupportedMimeTypes(OutputFormat format, out string[] mimeResults)
            {
                var resultCode = NativeBindings.MLMediaMuxerGetSupportedMimes(handle, format, out IntPtr resultsPtr, out int resultsCount);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerGetSupportedMimes));
                mimeResults = new string[resultsCount];
                if (resultCode == MLResult.Code.Ok)
                {
                    IntPtr[] pIntPtrArray = new IntPtr[resultsCount];
                    Marshal.Copy(resultsPtr, pIntPtrArray, 0, resultsCount);
                    for (int i = 0; i < resultsCount; i++)
                    {
                        mimeResults[i] = Marshal.PtrToStringAnsi(pIntPtrArray[i]);
                    }
                }
                Marshal.FreeCoTaskMem(resultsPtr);
                return resultCode;
            }

            private MLResult.Code InternalAddTrack(ulong mediaFormatHandle, out int trackIndex)
            {
                var resultCode = NativeBindings.MLMediaMuxerAddTrack(handle, mediaFormatHandle, out UIntPtr indexPtr);
                trackIndex = (int)indexPtr;
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerAddTrack));
                return resultCode;
            }

            private MLResult.Code InternalWriteSampleData(int trackIndex, byte[] buffer, long time, CodecBufferFlags flags)
            {
                var sampleData = NativeBindings.MLMediaMuxerSampleData.Create();
                sampleData.TrackIndex = (uint)trackIndex;
                sampleData.Buffer = buffer;
                sampleData.Size = (buffer == null) ? 0 : (uint)buffer.Length;
                sampleData.Time = (ulong)time;
                sampleData.Flags = flags;

                var resultCode = NativeBindings.MLMediaMuxerWriteSampleData(handle, sampleData);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaMuxerWriteSampleData));
                return resultCode;
            }
        }
    }
}
```




