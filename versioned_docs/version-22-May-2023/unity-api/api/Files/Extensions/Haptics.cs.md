---

title: Haptics.cs

---


# Haptics.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2019-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine.InputSystem.LowLevel;
using UnityEngine.InputSystem.Utilities;

namespace UnityEngine.XR.MagicLeap
{
    public static partial class InputSubsystem
    {
        public static partial class Extensions
        {
            public static class Haptics
            {
                public enum Type
                {
                    Buzz = 1,

                    PreDefined
                }

                public static MLResult StartBuzz(ushort startHz, ushort endHz, ushort durationMs, byte amplitude) => Buzz.Create(startHz, endHz, durationMs, amplitude).StartHaptics();

                public static MLResult StartPreDefined(PreDefined.Type type) => PreDefined.Create(type).StartHaptics();

                public static MLResult Stop()
                {
                    var resultCode = MagicLeapXrProviderNativeBindings.StopHaptics();
                    return MLResult.Create(resultCode);
                }

                public interface IHapticsCommand
                {
                    public MLResult StartHaptics();
                }

                public readonly struct Buzz : IHapticsCommand
                {
                    public static Buzz Create(ushort startHz, ushort endHz, ushort durationMs, byte amplitude) => new Buzz(startHz, endHz, durationMs, amplitude);

                    public MLResult StartHaptics()
                    {
                        var nativeCommandStruct = new NativeBindings.MLInputBuzzCommand(this);
                        IntPtr ptr = Marshal.AllocHGlobal(Marshal.SizeOf(nativeCommandStruct));
                        Marshal.StructureToPtr(nativeCommandStruct, ptr, false);

                        var resultCode = MagicLeapXrProviderNativeBindings.StartHapticsPattern((uint)(int)nativeCommandStruct.typeStatic, ptr);

                        Marshal.FreeHGlobal(ptr);
                        return MLResult.Create(resultCode);
                    }

                    private Buzz(ushort startHz, ushort endHz, ushort durationMs, byte amplitude)
                    {
                        StartHz = startHz;
                        EndHz = endHz;
                        DurationMs = durationMs;
                        Amplitude = amplitude;
                    }

                    public readonly ushort StartHz;

                    public readonly ushort EndHz;

                    public readonly uint DurationMs;

                    public readonly byte Amplitude;
                }

                public readonly struct PreDefined : IHapticsCommand
                {
                    public enum Type
                    {
                        A,

                        B,

                        C
                    }

                    public static PreDefined Create(Type patternType) => new PreDefined(patternType);

                    public MLResult StartHaptics()
                    {
                        var nativeCommandStruct = new NativeBindings.MLInputPreDefinedPattern(this);
                        IntPtr ptr = Marshal.AllocHGlobal(Marshal.SizeOf(nativeCommandStruct));
                        Marshal.StructureToPtr(nativeCommandStruct, ptr, false);

                        var resultCode = MagicLeapXrProviderNativeBindings.StartHapticsPattern((uint)(int)nativeCommandStruct.typeStatic, ptr);

                        Marshal.FreeHGlobal(ptr);
                        return MLResult.Create(resultCode);
                    }

                    private PreDefined(Type patternType) => PatternType = patternType;

                    public readonly Type PatternType;
                }

                public class CustomPattern : IHapticsCommand
                {
                    private List<NativeBindings.MLInputCustomHaptics> customHaptics = new List<NativeBindings.MLInputCustomHaptics>();

                    public MLResult StartHaptics()
                    {
                        var nativeCommandStruct = new NativeBindings.MLInputCustomHapticsInfo(customHaptics);
                        IntPtr ptr = Marshal.AllocHGlobal(Marshal.SizeOf(nativeCommandStruct));
                        Marshal.StructureToPtr(nativeCommandStruct, ptr, false);

                        var resultCode = MagicLeapXrProviderNativeBindings.StartHapticsPattern((uint)(int)nativeCommandStruct.typeStatic, ptr);

                        nativeCommandStruct.Dispose();
                        Marshal.FreeHGlobal(ptr);
                        return MLResult.Create(resultCode);
                    }

                    public void Add(in Buzz buzz) => customHaptics.Add(new NativeBindings.MLInputCustomHaptics(in buzz));
                    public void Add(in PreDefined preDefined, uint durationMs) => customHaptics.Add(new NativeBindings.MLInputCustomHaptics(in preDefined, durationMs));

                    public bool Remove(in Buzz buzz) => customHaptics.Remove(new NativeBindings.MLInputCustomHaptics(in buzz));
                    public bool Remove(in PreDefined preDefined, uint durationMs) => customHaptics.Remove(new NativeBindings.MLInputCustomHaptics(in preDefined, durationMs));

                }

                internal static class NativeBindings
                {
                    [StructLayout(LayoutKind.Sequential)]
                    public readonly struct MLInputBuzzCommand : IInputDeviceCommandInfo
                    {
                        private static FourCC commandType { get { return new FourCC('M', 'L', 'B', 'Z'); } }

                        public FourCC typeStatic => commandType;

                        public MLInputBuzzCommand(in Buzz buzzCommand)
                        {
                            Version = 1;
                            StartHz = buzzCommand.StartHz;
                            EndHz = buzzCommand.EndHz;
                            DurationMs = buzzCommand.DurationMs;
                            Amplitude = buzzCommand.Amplitude;
                        }

                        public readonly uint Version;

                        public readonly ushort StartHz;

                        public readonly ushort EndHz;

                        public readonly uint DurationMs;

                        public readonly byte Amplitude;

                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public readonly struct MLInputPreDefinedPattern : IInputDeviceCommandInfo
                    {
                        private static FourCC commandType { get { return new FourCC('M', 'L', 'P', 'D'); } }

                        public FourCC typeStatic => commandType;

                        public MLInputPreDefinedPattern(in PreDefined preDefinedPattern)
                        {
                            Version = 1;
                            Pattern = (uint)preDefinedPattern.PatternType;
                        }

                        public readonly uint Version;

                        public readonly uint Pattern;
                    }

                    [StructLayout(LayoutKind.Explicit)]
                    public readonly struct MLInputCustomHaptics
                    {
                        public MLInputCustomHaptics(in Buzz buzzHaptics)
                        {
                            Type = Type.Buzz;
                            PreDefined = default;
                            Buzz = new MLInputBuzzCommand(in buzzHaptics);
                            DurationMs = buzzHaptics.DurationMs;
                        }

                        public MLInputCustomHaptics(in PreDefined preDefinedPatternHaptics, uint durationMs)
                        {
                            Type = Type.PreDefined;
                            Buzz = default;
                            PreDefined = new MLInputPreDefinedPattern(in preDefinedPatternHaptics);
                            DurationMs = durationMs;
                        }

                        [FieldOffset(0)]
                        public readonly Type Type;

                        [FieldOffset(4)]
                        public readonly MLInputBuzzCommand Buzz;

                        [FieldOffset(4)]
                        public readonly MLInputPreDefinedPattern PreDefined;

                        [FieldOffset(20)]
                        public readonly uint DurationMs;
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public readonly struct MLInputCustomHapticsInfo : IInputDeviceCommandInfo, IDisposable
                    {
                        private static FourCC commandType { get { return new FourCC('M', 'L', 'C', 'I'); } }

                        public FourCC typeStatic => commandType;

                        public MLInputCustomHapticsInfo(List<NativeBindings.MLInputCustomHaptics> customHaptics)
                        {
                            Version = 1;

                            CustomHapticsArrayPtr = Marshal.AllocHGlobal(Marshal.SizeOf<MLInputCustomHaptics>() * customHaptics.Count);

                            IntPtr walkPtr = CustomHapticsArrayPtr;
                            for (int i = 0; i < customHaptics.Count; ++i)
                            {
                                var custom = customHaptics[i];
                                Marshal.StructureToPtr(custom, walkPtr, true);
                                walkPtr = new IntPtr(walkPtr.ToInt64()) + Marshal.SizeOf<MLInputCustomHaptics>();
                            }

                            Size = (uint)customHaptics.Count;
                        }


                        public void Dispose() => Marshal.FreeHGlobal(CustomHapticsArrayPtr);

                        public readonly uint Version;

                        public readonly IntPtr CustomHapticsArrayPtr;

                        public readonly uint Size;
                    }
                }
            }

        }
    }
}
```




