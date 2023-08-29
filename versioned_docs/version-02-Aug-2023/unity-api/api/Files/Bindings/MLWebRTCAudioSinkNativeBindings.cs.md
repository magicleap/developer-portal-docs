---

title: MLWebRTCAudioSinkNativeBindings.cs

---


# MLWebRTCAudioSinkNativeBindings.cs









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
        public partial class AudioSink
        {
            internal class NativeBindings : MagicLeapNativeBindings
            {
                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkCreate(out ulong sinkHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkCreateEx([In] ref MLWebRTCAudioSinkParams sinkParams, out ulong sinkHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetSource(ulong sinkHandle, ulong sourceHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetPosition(ulong sinkHandle, in MagicLeapNativeBindings.MLVec3f position);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetPositionEx(ulong sinkHandle, [In] ref MLWebRTCAudioSinkPosition position);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetSoundVolume(ulong sinkHandle, float volume);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetSoundOrientation(ulong sinkHandle, [In] ref MLWebRTCAudioSinkOrientation orientation);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetDirectSoundLevels(ulong sinkHandle, [In] ref MLWebRTCAudioSinkSoundLevels soundLevels);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetRoomSoundLevels(ulong sinkHandle, [In] ref MLWebRTCAudioSinkSoundLevels soundLevels);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetSoundDistanceProperties(ulong sinkHandle, [In] ref MLWebRTCAudioSinkSoundDistance soundDistance);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetSoundRadiationProperties(ulong sinkHandle, [In] ref MLWebRTCAudioSinkSoundRadiation soundRadiation);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkResetPosition(ulong sinkHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkSetCacheSize(ulong sinkHandle, uint millisecondsToCache);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCAudioSinkDestroy(ulong sinkHandle);

                private delegate void OnAudioSinkDataAvailableDelegate(in MLAudioOutput.NativeBindings.MLAudioBuffer audioBuffer, in MLAudioOutput.NativeBindings.MLAudioBufferFormat audioBufferFormat, IntPtr userContext);

                [AOT.MonoPInvokeCallback(typeof(OnAudioSinkDataAvailableDelegate))]
                private static void OnAudioSinkDataAvailable(in MLAudioOutput.NativeBindings.MLAudioBuffer audioBuffer, in MLAudioOutput.NativeBindings.MLAudioBufferFormat audioBufferFormat, IntPtr userContext)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(userContext);
                    AudioSink audioSink = gcHandle.Target as AudioSink;

                    if (audioSink == null)
                    {
                        return;
                    }

                    MLAudioOutput.Buffer buffer = new MLAudioOutput.Buffer(audioBuffer, audioBufferFormat, audioSink.CopyRawAudioDataToManagedMemory || (audioSink.OnAudioDataAvailable != null));

                    if (audioSink.OnAudioDataAvailable_NativeCallbackThread != null)
                    {
                        audioSink.OnAudioDataAvailable_NativeCallbackThread.Invoke(buffer);
                    }

                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        audioSink.OnAudioDataAvailable?.Invoke(buffer);
                    });
                }

                private delegate void OnAudioServiceStatusDelegate(ServiceStatus status, IntPtr userContext);

                [AOT.MonoPInvokeCallback(typeof(OnAudioServiceStatusChangedDelegate))]
                private static void OnAudioServiceStatus(ServiceStatus status, IntPtr userContext)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(userContext);
                    AudioSink audioSink = gcHandle.Target as AudioSink;

                    if (audioSink == null)
                    {
                        return;
                    }

                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        audioSink.CurrentServiceStatus = status;
                        audioSink.OnAudioServiceStatusChanged?.Invoke(status);
                    });
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCAudioSinkParams
                {
                    private readonly uint version;
                    private readonly AudioSink.BufferNotifyMode mode;
                    private readonly IntPtr userContext;
                    private readonly OnAudioSinkDataAvailableDelegate audioSinkCallback;
                    private readonly OnAudioServiceStatusDelegate audioServiceStatusCallback;

                    public MLWebRTCAudioSinkParams(AudioSink audioSink)
                    {
                        this.version = 1;
                        this.mode = audioSink.Mode;
                        if (audioSink.Mode != BufferNotifyMode.None)
                        {
                            this.audioSinkCallback = OnAudioSinkDataAvailable;
                        }
                        else
                        {
                            this.audioSinkCallback = null;
                        }
                        this.audioServiceStatusCallback = OnAudioServiceStatus;
                        this.userContext = GCHandle.ToIntPtr(audioSink.gcHandle);
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCAudioSinkPosition
                {
                    private uint version;

                    private IntPtr positionPtr;

                    private int channel;

                    public void Update(Vector3 position, int channel = -1)
                    {
                        if (this.positionPtr == IntPtr.Zero)
                        {
                            this.version = 1;
                            this.positionPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(MagicLeapNativeBindings.MLVec3f)));
                        }
                        Marshal.StructureToPtr(MLConvert.FromUnity(position), this.positionPtr, false);
                        this.channel = channel;
                    }

                    public void FreeUnmanagedMemory()
                    {
                        if (positionPtr != IntPtr.Zero)
                        {
                            Marshal.FreeHGlobal(positionPtr);
                            positionPtr = IntPtr.Zero;
                        }
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCAudioSinkOrientation
                {
                    private uint version;

                    private IntPtr orientationPtr;

                    private int channel;

                    public void Update(Quaternion orientation, int channel = -1)
                    {
                        if (this.orientationPtr == IntPtr.Zero)
                        {
                            this.version = 1;
                            this.orientationPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(MagicLeapNativeBindings.MLQuaternionf)));
                        }
                        Marshal.StructureToPtr(MLConvert.FromUnity(orientation), this.orientationPtr, false);
                        this.channel = channel;
                    }

                    public void FreeUnmanagedMemory()
                    {
                        if (orientationPtr != IntPtr.Zero)
                        {
                            Marshal.FreeHGlobal(orientationPtr);
                            orientationPtr = IntPtr.Zero;
                        }
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCAudioSinkSoundLevels
                {
                    private uint version;

                    private IntPtr sendLevelsPtr;

                    private int channel;

                    public void Update(MLAudioOutput.SpatialSound.SendLevels sendLevels, int channel = -1)
                    {
                        if (this.sendLevelsPtr == IntPtr.Zero)
                        {
                            this.version = 1;
                            this.sendLevelsPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(MLAudioOutput.NativeBindings.MLAudioSpatialSoundSendLevels)));
                        }
                        Marshal.StructureToPtr(new MLAudioOutput.NativeBindings.MLAudioSpatialSoundSendLevels(sendLevels), this.sendLevelsPtr, false);
                        this.channel = channel;
                    }

                    public void FreeUnmanagedMemory()
                    {
                        if (sendLevelsPtr != IntPtr.Zero)
                        {
                            Marshal.FreeHGlobal(sendLevelsPtr);
                            sendLevelsPtr = IntPtr.Zero;
                        }
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCAudioSinkSoundDistance
                {
                    private uint version;

                    private IntPtr distancePropertiesPtr;

                    private int channel;

                    public void Update(MLAudioOutput.SpatialSound.DistanceProperties distanceProperties, int channel = -1)
                    {
                        if (this.distancePropertiesPtr == IntPtr.Zero)
                        {
                            this.version = 1;
                            this.distancePropertiesPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(MLAudioOutput.NativeBindings.MLAudioSpatialSoundDistanceProperties)));
                        }
                        Marshal.StructureToPtr(new MLAudioOutput.NativeBindings.MLAudioSpatialSoundDistanceProperties(distanceProperties), this.distancePropertiesPtr, false);
                        this.channel = channel;
                    }

                    public void FreeUnmanagedMemory()
                    {
                        if (distancePropertiesPtr != IntPtr.Zero)
                        {
                            Marshal.FreeHGlobal(distancePropertiesPtr);
                            distancePropertiesPtr = IntPtr.Zero;
                        }
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCAudioSinkSoundRadiation
                {
                    private uint version;

                    private IntPtr radiationPropertiesPtr;

                    private int channel;

                    public void Update(MLAudioOutput.SpatialSound.RadiationProperties radiationProperties, int channel = -1)
                    {
                        if (this.radiationPropertiesPtr == IntPtr.Zero)
                        {
                            this.version = 1;
                            this.radiationPropertiesPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(MLAudioOutput.NativeBindings.MLAudioSpatialSoundRadiationProperties)));
                        }
                        Marshal.StructureToPtr(new MLAudioOutput.NativeBindings.MLAudioSpatialSoundRadiationProperties(radiationProperties), this.radiationPropertiesPtr, false);
                        this.channel = channel;
                    }

                    public void FreeUnmanagedMemory()
                    {
                        if (radiationPropertiesPtr != IntPtr.Zero)
                        {
                            Marshal.FreeHGlobal(radiationPropertiesPtr);
                            radiationPropertiesPtr = IntPtr.Zero;
                        }
                    }
                }
            }
        }
    }
}
```




