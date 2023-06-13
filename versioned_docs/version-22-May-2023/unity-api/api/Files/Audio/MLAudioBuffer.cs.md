---

title: MLAudioBuffer.cs

---


# MLAudioBuffer.cs









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
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

namespace UnityEngine.XR.MagicLeap
{
    public sealed partial class MLAudioOutput
    {
        public enum SampleFormatType : uint
        {
            Int,
            Float
        }

        public enum ChannelFormatType : uint
        {
            Default,
            AmbisonicAmbix
        }


        public struct BufferFormat
        {
            public uint ChannelCount { get; set; }

            public uint SamplesPerSecond { get; set; }

            public uint BitsPerSample { get; set; }

            public uint ValidBitsPerSample { get; set; }

            public SampleFormatType SampleFormat { get; set; }

            public ChannelFormatType ChannelFormat { get; set; }

            internal BufferFormat(MLAudioOutput.NativeBindings.MLAudioBufferFormat bufferFormatNative)
            {
                this.ChannelCount = bufferFormatNative.ChannelCount;
                this.SamplesPerSecond = bufferFormatNative.SamplesPerSecond;
                this.BitsPerSample = bufferFormatNative.BitsPerSample;
                this.ValidBitsPerSample = bufferFormatNative.ValidBitsPerSample;
                this.SampleFormat = bufferFormatNative.SampleFormat;
                this.ChannelFormat = bufferFormatNative.ChannelFormat;
            }

            public BufferFormat(uint channelCount, uint samplesPerSecond, uint bitsPerSample, SampleFormatType sampleFormat = SampleFormatType.Float, ChannelFormatType channelFormat = ChannelFormatType.Default)
            {
                this.ChannelCount = channelCount;
                this.SamplesPerSecond = samplesPerSecond;
                this.BitsPerSample = bitsPerSample;
                this.ValidBitsPerSample = bitsPerSample;
                this.SampleFormat = sampleFormat;
                this.ChannelFormat = channelFormat;
            }

            public override string ToString()
            {
                return $"ChannelCount: {ChannelCount}, SamplesPerSec: {SamplesPerSecond}, BitsPerSample: {BitsPerSample}, ValidBitsPerSample: {ValidBitsPerSample}, SampleFormat: {SampleFormat}, ChannelFormat: {ChannelFormat}";
            }
        }

        public struct Buffer
        {
            public IntPtr NativeDataPtr;

            public uint Size;

            public float[] Samples;

            public BufferFormat Format;

            internal Buffer(MLAudioOutput.NativeBindings.MLAudioBuffer buffer, MLAudioOutput.NativeBindings.MLAudioBufferFormat bufferFormat, bool copyToManagedMemory = false)
            {
                this.NativeDataPtr = buffer.Ptr;
                this.Size = buffer.Size;
                this.Format = new BufferFormat(bufferFormat);
                this.Samples = null;

                if (copyToManagedMemory)
                {
                    this.Samples = ConvertToManagedFloatSamples(Size, NativeDataPtr, Format);
                }
            }

            private static readonly Dictionary<uint, Func<IntPtr, float>> UnmanagedToFloat = new Dictionary<uint, Func<IntPtr, float>>()
            {
                { 8,  (ptr) => Marshal.ReadByte (ptr) / (float)byte.MaxValue  },
                { 16, (ptr) => Marshal.ReadInt16(ptr) / (float)short.MaxValue },
                { 32, (ptr) => Marshal.ReadInt32(ptr) / (float)int.MaxValue   },
                { 64, (ptr) => Marshal.ReadInt64(ptr) / (float)long.MaxValue  }
            };

            public static float[] ConvertToManagedFloatSamples(uint size, IntPtr bufferPtr, BufferFormat format)
            {
                uint bytesPerSample = format.BitsPerSample / 8;
                uint numSamples = size / bytesPerSample;
                float[] samples = new float[numSamples];
                if (format.SampleFormat == SampleFormatType.Float)
                {
                    Marshal.Copy(bufferPtr, samples, 0, (int)numSamples);
                }
                else if (format.SampleFormat == SampleFormatType.Int)
                {
                    var toFloat = UnmanagedToFloat[format.BitsPerSample];
                    for (uint i = 0; i < numSamples; ++i)
                    {
                        samples[i] = toFloat(bufferPtr);
                        bufferPtr = IntPtr.Add(bufferPtr, (int)bytesPerSample);
                    }
                }

                return samples;
            }

            public Buffer(BufferFormat format, float[] samples)
            {
                this.NativeDataPtr = IntPtr.Zero;
                this.Size = 0;
                this.Samples = samples;
                this.Format = format;
            }
        }
    }
}
```




