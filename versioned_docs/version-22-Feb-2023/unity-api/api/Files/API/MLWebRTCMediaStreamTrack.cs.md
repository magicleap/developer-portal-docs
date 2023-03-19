---

title: MLWebRTCMediaStreamTrack.cs

---


# MLWebRTCMediaStreamTrack.cs









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
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class MediaStream
        {
            public partial class Track
            {
                protected bool wasEnabledBeforeLifecycleStateChange = false;

                private List<MediaStream> streams = new List<MediaStream>();

                internal Track(string trackId)
                {
                    MLDevice.RegisterApplicationPause(this.OnApplicationPause);

                    Id = trackId;
                }

                public enum Type
                {
                    Audio,

                    Video
                }

                public enum AudioType
                {
                    None,

                    Microphone,

                    Defined
                }

                public enum VideoType
                {
                    None,

                    MLCamera,

                    MLMRCamera,

                    VirtualOnly,
                }

                public List<MediaStream> Streams { get => this.streams; }

                public bool IsLocal { get; protected set; }

                public Type TrackType { get; internal set; }

                public MLWebRTC.PeerConnection ParentConnection { get; internal set; }

                public string Id { get; private set; }

                internal ulong Handle { get; set; }

                public static Track CreateAudioTrackFromMicrophone(out MLResult result, string trackId = "")
                {
                    var permResult = MLPermissions.CheckPermission(MLPermission.RecordAudio);
                    if (!MLResult.DidNativeCallSucceed(permResult.Result, nameof(MLPermissions.CheckPermission)))
                    {
                        MLPluginLog.Error($"{nameof(CreateAudioTrackFromMicrophone)} requires missing permission {MLPermission.RecordAudio}");
                        result = MLResult.Create(MLResult.Code.PermissionDenied);
                        return null;
                    }

                    Track track = null;
                    ulong handle = MagicLeapNativeBindings.InvalidHandle;
                    MLResult.Code resultCode = MLResult.Code.Ok;

                    resultCode = Source.NativeBindings.MLWebRTCSourceCreateLocalSourceForMicrophoneEx(trackId, out handle);

                    if (!MLResult.DidNativeCallSucceed(resultCode, nameof(Source.NativeBindings.MLWebRTCSourceCreateLocalSourceForMicrophoneEx)))
                    {
                        result = MLResult.Create(resultCode);
                        return track;
                    }

                    track = new Track(trackId)
                    {
                        Handle = handle,
                        TrackType = Type.Audio,
                        IsLocal = true,
                    };

                    MLWebRTC.Instance.localTracks.Add(track);
                    result = MLResult.Create(resultCode);
                    return track;
                }

                public static Track CreateAudioTrackFromSource(out MLResult result, string trackId = "")
                {
                    Track track = null;
                    ulong handle = MagicLeapNativeBindings.InvalidHandle;
                    MLResult.Code resultCode = MLResult.Code.Ok;

                    var sourceParams = Source.NativeBindings.MLWebRTCAppDefinedSourceParams.Create(trackId);
                    resultCode = Source.NativeBindings.MLWebRTCSourceCreateAppDefinedAudioSourceEx(ref sourceParams, out handle);

                    if (!MLResult.DidNativeCallSucceed(resultCode, nameof(Source.NativeBindings.MLWebRTCSourceCreateAppDefinedAudioSourceEx)))
                    {
                        result = MLResult.Create(resultCode);
                        return track;
                    }

                    track = new Track(trackId)
                    {
                        Handle = handle,
                        TrackType = Type.Audio,
                        IsLocal = true,
                    };

                    MLWebRTC.Instance.localTracks.Add(track);
                    result = MLResult.Create(resultCode);
                    return track;
                }

                public static Track CreateVideoTrack(VideoType videoType, out MLResult result, string trackId = "")
                {
                    Track track = null;
                    ulong handle = MagicLeapNativeBindings.InvalidHandle;
                    MLResult.Code resultCode = MLResult.Code.Ok;

                    MLCamera.ConnectContext connectContext = MLCamera.ConnectContext.Create();
                    switch (videoType)
                    {
                        case VideoType.MLCamera:
                            connectContext.Flags = MLCamera.ConnectFlag.CamOnly;
                            break;
                        case VideoType.MLMRCamera:
                            connectContext.Flags = MLCamera.ConnectFlag.MR;
                            break;
                        case VideoType.VirtualOnly:
                            connectContext.Flags = MLCamera.ConnectFlag.VirtualOnly;
                            break;
                    }

                    if (!MLResult.DidNativeCallSucceed(Source.NativeBindings.MLWebRTCSourceCreateLocalSourceForCamera(MLCamera.NativeBindings.MLCameraConnectContext.Create(connectContext), out handle), nameof(Source.NativeBindings.MLWebRTCSourceCreateLocalSourceForCamera)))
                    {
                        result = MLResult.Create(resultCode);
                        return track;
                    }

                    track = new Track(trackId)
                    {
                        Handle = handle,
                        TrackType = Type.Video,
                        IsLocal = true,
                    };

                    MLWebRTC.Instance.localTracks.Add(track);
                    result = MLResult.Create(resultCode);
                    return track;
                }

                public MLResult GetEnabled(out bool isEnabled)
                {
                    if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                    {
                        isEnabled = false;
                        return MLResult.Create(MLResult.Code.InvalidParam, "Source handle is invalid.");
                    }

                    MLResult.Code resultCode = Source.NativeBindings.MLWebRTCSourceIsEnabled(this.Handle, out isEnabled);
                    MLResult.DidNativeCallSucceed(resultCode, nameof(Source.NativeBindings.MLWebRTCSourceIsEnabled));
                    return MLResult.Create(resultCode);
                }

                public MLResult SetEnabled(bool isEnabled)
                {
                    if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                    {
                        return MLResult.Create(MLResult.Code.InvalidParam, "Source handle is invalid.");
                    }

                    MLResult result = this.GetEnabled(out bool trackEnabled);
                    if (!result.IsOk)
                    {
                        return result;
                    }

                    if (trackEnabled != isEnabled)
                    {
                        MLResult.Code resultCode = Source.NativeBindings.MLWebRTCSourceSetEnabled(this.Handle, isEnabled);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(Source.NativeBindings.MLWebRTCSourceSetEnabled));
                        result = MLResult.Create(resultCode);
                    }

                    return result;
                }

                public virtual MLResult DestroyLocal()
                {
                    if (!this.IsLocal)
                    {
                        return MLResult.Create(MLResult.Code.InvalidParam, "Souce is not local.");
                    }

                    if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                    {
                        return MLResult.Create(MLResult.Code.InvalidParam, "Source handle is invalid.");
                    }

                    this.Cleanup();

                    MLResult.Code resultCode = MLResult.Code.Ok;

                    // If this is a local source then we need to explicitly remove it from it's associated connections.
                    foreach (MLWebRTC.PeerConnection connection in Instance.connections)
                    {
                        if (connection == this.ParentConnection)
                        {
                            connection.RemoveLocalTrack(this);
                            break;
                        }
                    }

                    MLWebRTC.Instance.localTracks.Remove(this);

                    resultCode = Source.NativeBindings.MLWebRTCSourceDestroy(this.Handle);
                    MLResult.DidNativeCallSucceed(resultCode, nameof(Source.NativeBindings.MLWebRTCSourceDestroy));
                    this.Handle = MagicLeapNativeBindings.InvalidHandle;
                    this.ParentConnection = null;

                    return MLResult.Create(resultCode);
                }

                internal void Cleanup()
                {
                    // While local tracks can be unsubscribed in the DestroyLocal(), the only place to do that for remote tracks is in the finalizer.
                    MLDevice.UnregisterApplicationPause(this.OnApplicationPause);
                }

                protected virtual void HandleDeviceActive()
                {
                    if (this.wasEnabledBeforeLifecycleStateChange)
                    {
                        this.SetEnabled(true);
                    }
                }

                protected virtual void HandleDeviceStandby()
                {
                    this.GetEnabled(out this.wasEnabledBeforeLifecycleStateChange);
                    if (this.wasEnabledBeforeLifecycleStateChange)
                    {
                        this.SetEnabled(false);
                    }
                }

                protected virtual void HandleDeviceReality()
                {
                    HandleDeviceStandby();
                }

                protected virtual void OnApplicationPause(bool pause)
                {
                    if (pause)
                    {
                        this.HandleDeviceStandby();
                    }
                    else
                    {
                        this.HandleDeviceActive();
                    }
                }
            }
        }
    }
}
```




