---

title: MLAudioOutputNativeBindings.cs

---


# MLAudioOutputNativeBindings.cs









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

// Disable warnings about missing documentation for native interop.
#pragma warning disable 1591
namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;
    using MagicLeap.Native;

    public sealed partial class MLAudioOutput
    {
        internal class NativeBindings : MagicLeapNativeBindings
        {
            public delegate void MLAudioMasterVolumeChangedCallback(float volume, IntPtr callback);

            public delegate void MLAudioMediaEventCallback(MediaEvent mediaEvent, IntPtr callback);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioGetOutputDevice(out MLAudioOutput.Device device);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioGetMasterVolume(out float volume);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioSetMasterVolumeCallback(MLAudioMasterVolumeChangedCallback callback, IntPtr data);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr MLAudioGetResultString(MLResult.Code result);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioSetSpatialSoundEnable(ulong handle, bool enable);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioGetSpatialSoundEnable(ulong handle, out bool enabled);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioSetSpatialSoundPosition(ulong handle, uint channel, [In] ref MagicLeapNativeBindings.MLVec3f position);
            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioGetSpatialSoundPosition(ulong handle, uint channel, out MagicLeapNativeBindings.MLVec3f position);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioSetMediaEventCallback(MLAudioMediaEventCallback callback, IntPtr context);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioSetSoundBypassesMasterVolume(ulong audioHandle, [MarshalAs(UnmanagedType.I1)] bool isBypassing);

            [DllImport(AudioPlayerDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLAudioGetSoundBypassesMasterVolume(ulong audioHandle, [MarshalAs(UnmanagedType.I1)] out bool isBypassing);

            [DllImport(MLSdkLoaderDll, CallingConvention = CallingConvention.Cdecl)]
            internal static extern ulong MLUnityAudioGetHandle();

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLAudioBufferFormat
            {
                public readonly uint ChannelCount;
                public readonly uint SamplesPerSecond;
                public readonly uint BitsPerSample;
                public readonly uint ValidBitsPerSample;
                public readonly MLAudioOutput.SampleFormatType SampleFormat;
                public readonly MLAudioOutput.ChannelFormatType ChannelFormat;

                public MLAudioBufferFormat(MLAudioOutput.BufferFormat bufferFormat)
                {
                    this.ChannelCount = bufferFormat.ChannelCount;
                    this.SamplesPerSecond = bufferFormat.SamplesPerSecond;
                    this.BitsPerSample = bufferFormat.BitsPerSample;
                    this.ValidBitsPerSample = bufferFormat.ValidBitsPerSample;
                    this.SampleFormat = bufferFormat.SampleFormat;
                    this.ChannelFormat = bufferFormat.ChannelFormat;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLAudioBuffer
            {
                public IntPtr Ptr;
                public uint Size;

                public MLAudioBuffer(IntPtr ptr, uint size)
                {
                    this.Ptr = ptr;
                    this.Size = size;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLAudioSpatialSoundSendLevels
            {
                private readonly float gain;

                private readonly float gainLF;

                private readonly float gainMF;

                private readonly float gainHF;

                public MLAudioSpatialSoundSendLevels(SpatialSound.SendLevels sendLevels)
                {
                    this.gain = sendLevels.Gain;
                    this.gainLF = sendLevels.GainLF;
                    this.gainMF = sendLevels.GainMF;
                    this.gainHF = sendLevels.GainHF;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLAudioSpatialSoundDistanceProperties
            {
                private readonly float minDistance;

                private readonly float maxDistance;

                private readonly float rolloffFactor;

                public MLAudioSpatialSoundDistanceProperties(SpatialSound.DistanceProperties distanceProperties)
                {
                    this.minDistance = distanceProperties.MinDistance;
                    this.maxDistance = distanceProperties.MaxDistance;
                    this.rolloffFactor = distanceProperties.RolloffFactor;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLAudioSpatialSoundRadiationProperties
            {
                private readonly float innerAngle;

                private readonly float outerAngle;

                private readonly float outerGain;

                private readonly float outerGainLF;

                private readonly float outerGainMF;

                private readonly float outerGainHF;

                public MLAudioSpatialSoundRadiationProperties(SpatialSound.RadiationProperties radiationProperties)
                {
                    this.innerAngle = radiationProperties.InnerAngle;
                    this.outerAngle = radiationProperties.OuterAngle;
                    this.outerGain = radiationProperties.OuterGain;
                    this.outerGainLF = radiationProperties.OuterGainLF;
                    this.outerGainMF = radiationProperties.OuterGainMF;
                    this.outerGainHF = radiationProperties.OuterGainHF;
                }
            }
        }
    }
}
```




