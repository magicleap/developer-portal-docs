---

title: MLWebRTCAudioSink.cs

---


# MLWebRTCAudioSink.cs









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
    using System.Collections.Generic;
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class AudioSink : Sink
        {
            private NativeBindings.MLWebRTCAudioSinkPosition nativePosition;
            private NativeBindings.MLWebRTCAudioSinkOrientation nativeOrientation;
            private NativeBindings.MLWebRTCAudioSinkSoundLevels nativeSoundLevels;
            private NativeBindings.MLWebRTCAudioSinkSoundDistance nativeDistance;
            private NativeBindings.MLWebRTCAudioSinkSoundRadiation nativeRadiation;

            public enum BufferNotifyMode : uint
            {
                None,

                NotifyAndPlay,

                NotifyOnly
            }

            public enum ServiceStatus : uint
            {
                Initial,

                Started,

                Failed,

                Stopped,

                Unknown
            }

            public delegate void OnAudioDataAvailableDelegate(MLAudioOutput.Buffer buffer);

            public delegate void OnAudioServiceStatusChangedDelegate(ServiceStatus status);

            public BufferNotifyMode Mode { get; private set; }

            public ServiceStatus CurrentServiceStatus { get; private set; }

            public bool CopyRawAudioDataToManagedMemory { get; set; } = true;

            public event OnAudioDataAvailableDelegate OnAudioDataAvailable_NativeCallbackThread;

            public event OnAudioDataAvailableDelegate OnAudioDataAvailable;

            public event OnAudioServiceStatusChangedDelegate OnAudioServiceStatusChanged;

            private GCHandle gcHandle;

            internal AudioSink()
            {
                this.Type = MediaStream.Track.Type.Audio;
            }

            internal AudioSink(ulong handle, BufferNotifyMode mode) : base(handle)
            {
                this.Type = MediaStream.Track.Type.Audio;
                this.Mode = mode;
                this.CurrentServiceStatus = ServiceStatus.Unknown;
                this.gcHandle = GCHandle.Alloc(this);
            }

            public static AudioSink Create(out MLResult result, BufferNotifyMode mode = BufferNotifyMode.None)
            {
                AudioSink audioSink = null;

                List<MLWebRTC.Sink> sinks = MLWebRTC.Instance.sinks;
                ulong handle = MagicLeapNativeBindings.InvalidHandle;
                // We have a chicken-and-egg problem here. We need the audioSink object in order to create the
                // userContext ptr from it GCHandle, which will later be used in the audio data callback to
                // invoke the delegate on this particular object.
                // So, create the AudioSink obj with an invalid handle for now, and then update it if the 
                // native sink creation is successful.
                audioSink = new AudioSink(handle, mode);

                NativeBindings.MLWebRTCAudioSinkParams sinkParams = new NativeBindings.MLWebRTCAudioSinkParams(audioSink);
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkCreateEx(ref sinkParams, out handle);
                if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkCreateEx)))
                {
                    result = MLResult.Create(resultCode);
                    return null;
                }

                audioSink.Handle = handle;

                if (MagicLeapNativeBindings.MLHandleIsValid(audioSink.Handle))
                {
                    sinks.Add(audioSink);
                }

                result = MLResult.Create(resultCode);

                return audioSink;
            }

            public MLResult SetStream(MediaStream stream)
            {
                if (this.Stream == stream)
                {
                    return MLResult.Create(MLResult.Code.InvalidParam);
                }

                this.Stream = stream;
                if (this.Stream == null)
                {
                    return this.SetTrack(null);
                }

                return this.SetTrack(this.Stream.ActiveAudioTrack);
            }

            public MLResult SetVolume(float volume)
            {
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetSoundVolume(this.Handle, volume);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkSetSoundVolume));
                return MLResult.Create(resultCode);
            }

            public MLResult SetPosition(Vector3 position, int channel = -1)
            {
                nativePosition.Update(position, channel);
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetPositionEx(this.Handle, ref nativePosition);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkSetPositionEx));
                return MLResult.Create(resultCode);
            }

            public MLResult SetOrientation(Quaternion orientation, int channel = -1)
            {
                nativeOrientation.Update(orientation, channel);
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetSoundOrientation(this.Handle, ref nativeOrientation);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkSetSoundOrientation));
                return MLResult.Create(resultCode);
            }

            public MLResult SetDirectSendLevels(MLAudioOutput.SpatialSound.SendLevels sendLevels, int channel = -1)
            {
                nativeSoundLevels.Update(sendLevels, channel);
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetDirectSoundLevels(this.Handle, ref nativeSoundLevels);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkSetDirectSoundLevels));
                return MLResult.Create(resultCode);
            }

            public MLResult SetRoomSendLevels(MLAudioOutput.SpatialSound.SendLevels sendLevels, int channel = -1)
            {
                nativeSoundLevels.Update(sendLevels, channel);
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetRoomSoundLevels(this.Handle, ref nativeSoundLevels);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkSetRoomSoundLevels));
                return MLResult.Create(resultCode);
            }

            public MLResult SetDistanceProperties(MLAudioOutput.SpatialSound.DistanceProperties distanceProperties, int channel = -1)
            {
                nativeDistance.Update(distanceProperties, channel);
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetSoundDistanceProperties(this.Handle, ref nativeDistance);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkSetSoundDistanceProperties));
                return MLResult.Create(resultCode);
            }

            public MLResult SetRadiationProperties(MLAudioOutput.SpatialSound.RadiationProperties radiationProperties, int channel = -1)
            {
                nativeRadiation.Update(radiationProperties, channel);
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetSoundRadiationProperties(this.Handle, ref nativeRadiation);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkSetSoundRadiationProperties));
                return MLResult.Create(resultCode);
            }

            public MLResult ResetPosition()
            {
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkResetPosition(this.Handle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkResetPosition));
                return MLResult.Create(resultCode);
            }

            public MLResult SetCacheSize(uint millisecondsToCache)
            {
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetCacheSize(this.Handle, millisecondsToCache);
                string nativeMethodName = nameof(NativeBindings.MLWebRTCAudioSinkSetCacheSize);
                MLResult.DidNativeCallSucceed(resultCode, $"{nativeMethodName}({millisecondsToCache})");
                return MLResult.Create(resultCode);
            }

            public override MLResult Destroy()
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                this.SetStream(null);
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkDestroy(this.Handle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkDestroy));
                this.InvalidateHandle();

                MLWebRTC.Instance.sinks.Remove(this);
                this.gcHandle.Free();

                nativeRadiation.FreeUnmanagedMemory();
                nativeDistance.FreeUnmanagedMemory();
                nativeSoundLevels.FreeUnmanagedMemory();
                nativeOrientation.FreeUnmanagedMemory();
                nativePosition.FreeUnmanagedMemory();

                return MLResult.Create(resultCode);
            }

            protected override MLResult SetTrack(MLWebRTC.MediaStream.Track track)
            {
                ulong sourceHandle = track != null ? track.Handle : MagicLeapNativeBindings.InvalidHandle;
                MLResult.Code resultCode = NativeBindings.MLWebRTCAudioSinkSetSource(this.Handle, sourceHandle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCAudioSinkSetSource));
                return MLResult.Create(resultCode);
            }
        }
    }
}
```




