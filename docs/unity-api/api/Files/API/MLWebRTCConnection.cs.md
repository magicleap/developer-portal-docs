---

title: MLWebRTCConnection.cs

---


# MLWebRTCConnection.cs









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
    using System.Text;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class PeerConnection
        {
            private Dictionary<string, MLWebRTC.MediaStream> remoteMediaStreams = new Dictionary<string, MLWebRTC.MediaStream>();

            private List<MLWebRTC.MediaStream.Track> localMediaStreamTracks = new List<MLWebRTC.MediaStream.Track>();

            private List<MLWebRTC.DataChannel> remoteDataChannels = new List<DataChannel>();

            private List<MLWebRTC.DataChannel> localDataChannels = new List<DataChannel>();

            private GCHandle gcHandle;

            internal PeerConnection()
            {
            }

            public delegate void OnErrorDelegate(MLWebRTC.PeerConnection connection, string message);

            public delegate void OnConnectedDelegate(MLWebRTC.PeerConnection connection);

            public delegate void OnDisconnectedDelegate(MLWebRTC.PeerConnection connection);

            public delegate void OnTrackAddedMultipleStreamsDelegate(List<MLWebRTC.MediaStream> mediaStreams, MLWebRTC.MediaStream.Track addedTrack);

            public delegate void OnTrackRemovedMultipleStreamsDelegate(List<MLWebRTC.MediaStream> mediaStreams, MLWebRTC.MediaStream.Track removedTrack);

            public delegate void OnDataChannelReceivedDelegate(MLWebRTC.PeerConnection connection, MLWebRTC.DataChannel dataChannel);

            public delegate void OnLocalOfferCreatedDelegate(MLWebRTC.PeerConnection connection, string sdpSend);

            public delegate void OnLocalAnswerCreatedDelegate(MLWebRTC.PeerConnection connection, string sendAnswer);

            public delegate void OnLocalIceCandidateFoundDelegate(MLWebRTC.PeerConnection connection, MLWebRTC.IceCandidate iceCandidate);

            public delegate void OnIceGatheringCompletedDelegate(MLWebRTC.PeerConnection connection);

            public event OnErrorDelegate OnError = delegate { };

            public event OnConnectedDelegate OnConnected = delegate { };

            public event OnDisconnectedDelegate OnDisconnected = delegate { };

            public event OnTrackAddedMultipleStreamsDelegate OnTrackAddedMultipleStreams = delegate { };

            public event OnTrackRemovedMultipleStreamsDelegate OnTrackRemovedMultipleStreams = delegate { };

            public event OnDataChannelReceivedDelegate OnDataChannelReceived = delegate { };

            public event OnLocalOfferCreatedDelegate OnLocalOfferCreated = delegate { };

            public event OnLocalAnswerCreatedDelegate OnLocalAnswerCreated = delegate { };

            public event OnLocalIceCandidateFoundDelegate OnLocalIceCandidateFound = delegate { };

            public event OnIceGatheringCompletedDelegate OnIceGatheringCompleted = delegate { };

            public MLWebRTC.IceServer[] IceServers { get; private set; }

            public MLWebRTC.IceCandidate IceCandidate { get; private set; }

            internal ulong Handle { get; private set; }

            internal Dictionary<string, MLWebRTC.MediaStream> RemoteMediaStreams { get => this.remoteMediaStreams; }

            internal List<MLWebRTC.MediaStream.Track> LocalMediaStreamTracks { get => this.localMediaStreamTracks; }

            internal List<MLWebRTC.DataChannel> RemoteDataChannels { get => this.remoteDataChannels; }

            internal List<MLWebRTC.DataChannel> LocalDataChannels { get => this.localDataChannels; }

            public static PeerConnection CreateRemote(MLWebRTC.IceServer[] iceServers, out MLResult result)
            {
                var permResult = MLPermissions.CheckPermission(MLPermission.Internet);
                if (!MLResult.DidNativeCallSucceed(permResult.Result, nameof(CreateRemote)))
                {
                    MLPluginLog.Error($"{nameof(CreateRemote)} requires missing permission {MLPermission.Internet}");
                    result = MLResult.Create(MLResult.Code.PermissionDenied);
                    return null;
                }

                List<MLWebRTC.PeerConnection> connections = MLWebRTC.Instance.connections;

                MLResult.Code resultCode = NativeBindings.CreateRemoteConnection(iceServers, out PeerConnection connection);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.CreateRemoteConnection));
                result = MLResult.Create(resultCode);
                if (result.IsOk)
                {
                    connections.Add(connection);
                }
                return connection;
            }

            public static PeerConnection CreateRemote(MLWebRTC.IceServer[] iceServers, MLWebRTC.ProxyConfig proxyConfig, out MLResult result)
            {
                var permResult = MLPermissions.CheckPermission(MLPermission.Internet);
                if (!MLResult.DidNativeCallSucceed(permResult.Result, nameof(CreateRemote)))
                {
                    MLPluginLog.Error($"{nameof(CreateRemote)} requires missing permission {MLPermission.Internet}");
                    result = MLResult.Create(MLResult.Code.PermissionDenied);
                    return null;
                }

                List<MLWebRTC.PeerConnection> connections = MLWebRTC.Instance.connections;

                MLResult.Code resultCode = NativeBindings.CreateRemoteConnection(iceServers, proxyConfig, out PeerConnection connection);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.CreateRemoteConnection));
                result = MLResult.Create(resultCode);
                if (result.IsOk)
                {
                    connections.Add(connection);
                }
                return connection;
            }

            public MLResult IsConnected(out bool connected)
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    connected = false;
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }
                bool isConnected = false;
                MLResult.Code resultCode = NativeBindings.MLWebRTCConnectionIsConnected(this.Handle, out isConnected);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCConnectionIsConnected));
                connected = isConnected;
                return MLResult.Create(resultCode);
            }

            public MLResult HasFailed(out bool failed)
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    failed = false;
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                bool isFailed = false;
                MLResult.Code resultCode = NativeBindings.MLWebRTCConnectionHasFailed(this.Handle, out isFailed);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCConnectionHasFailed));
                failed = isFailed;
                return MLResult.Create(resultCode);
            }

            public MLResult CreateOffer()
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }
                MLResult.Code resultCode = NativeBindings.MLWebRTCConnectionCreateOffer(this.Handle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCConnectionCreateOffer));
                return MLResult.Create(resultCode);
            }

            public MLResult SetRemoteOffer(string remoteOffer)
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                MLResult.Code resultCode = NativeBindings.MLWebRTCConnectionSetRemoteOffer(this.Handle, remoteOffer);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCConnectionSetRemoteOffer));
                return MLResult.Create(resultCode);
            }

            public MLResult SetRemoteAnswer(string remoteAnswer)
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                MLResult.Code resultCode = NativeBindings.MLWebRTCConnectionSetRemoteAnswer(this.Handle, remoteAnswer);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCConnectionSetRemoteAnswer));
                return MLResult.Create(resultCode);
            }

            public MLResult AddRemoteIceCandidate(MLWebRTC.IceCandidate iceCandidate)
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                NativeBindings.MLWebRTCConnectionIceCandidate nativeIceCandidate = new NativeBindings.MLWebRTCConnectionIceCandidate();
                nativeIceCandidate.Data = iceCandidate;

                MLResult.Code resultCode = NativeBindings.MLWebRTCConnectionAddRemoteIceCandidate(this.Handle, in nativeIceCandidate);

                if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCConnectionAddRemoteIceCandidate)))
                {
                    this.IceCandidate = iceCandidate;
                }

                return MLResult.Create(resultCode);
            }

            public MLResult Destroy()
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                MLResult.Code resultCode = MLResult.Code.Ok;

                // Remove local tracks from this connection.
                foreach (MLWebRTC.MediaStream.Track mediaStreamTrack in this.localMediaStreamTracks)
                {
                    // Don't call this.RemoveLocalTrack() because that modifies the list we're iterating on.
                    var result = NativeBindings.MLWebRTCConnectionRemoveLocalSourceTrack(this.Handle, mediaStreamTrack.Handle);
                    MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebRTCConnectionRemoveLocalSourceTrack));
                }

                // Invalidate the handles of any remote sources and remove the media stream id from the set of unique ids.
                foreach (MLWebRTC.MediaStream mediaStream in this.remoteMediaStreams.Values)
                {
                    foreach (MediaStream.Track remoteTrack in mediaStream.Tracks)
                    {
                        remoteTrack.Cleanup();
                    }
                    mediaStream.Tracks.Clear();
                    mediaStream.ParentConnections.Remove(this);

                    foreach (MLWebRTC.MediaStream.Track track in mediaStream.Tracks)
                    {
                        track.Handle = MagicLeapNativeBindings.InvalidHandle;
                    }
                }

                // Destroy local data channels.
                foreach (MLWebRTC.DataChannel dataChannel in this.localDataChannels)
                {
                    dataChannel.Destroy();
                }

                // Destroy this connection.
                resultCode = NativeBindings.MLWebRTCConnectionDestroy(this.Handle);

                this.Handle = MagicLeapNativeBindings.InvalidHandle;
                this.localMediaStreamTracks.Clear();
                this.remoteMediaStreams.Clear();
                this.remoteDataChannels.Clear();
                this.localDataChannels.Clear();
                this.IceServers = null;
                this.gcHandle.Free();
                MLWebRTC.Instance.connections.Remove(this);
                return MLResult.Create(resultCode);
            }


            public MLResult AddLocalTrack(MLWebRTC.MediaStream.Track trackToAdd)
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                if (trackToAdd == null)
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Track is null.");
                }

                if (this.localMediaStreamTracks.Contains(trackToAdd))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Connection already has this track.");
                }

                string[] streamIds = new string[trackToAdd.Streams.Count];
                for (int i = 0; i < streamIds.Length; ++i)
                {
                    streamIds[i] = trackToAdd.Streams[i].Id;
                    trackToAdd.Streams[i].ParentConnections.Add(this);
                }

                NativeBindings.MLWebRTCTrackInfo trackInfo = new NativeBindings.MLWebRTCTrackInfo(streamIds, trackToAdd.Id);
                MLResult.Code resultCode = NativeBindings.MLWebRTCConnectionAddLocalSourceTrackEx(Handle, trackToAdd.Handle, ref trackInfo);
                trackInfo.FreeUnmanagedMemory();
                if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCConnectionAddLocalSourceTrackEx)))
                {
                    localMediaStreamTracks.Add(trackToAdd);
                }
                return MLResult.Create(resultCode);
            }

            public MLResult RemoveLocalTrack(MLWebRTC.MediaStream.Track trackToRemove)
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                if (trackToRemove == null)
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Track is null.");
                }

                if (!this.localMediaStreamTracks.Contains(trackToRemove))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Connection does not have this track.");
                }

                MLResult.Code resultCode = MLWebRTC.PeerConnection.NativeBindings.MLWebRTCConnectionRemoveLocalSourceTrack(this.Handle, trackToRemove.Handle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(MLWebRTC.PeerConnection.NativeBindings.MLWebRTCConnectionRemoveLocalSourceTrack));
                this.localMediaStreamTracks.Remove(trackToRemove);
                foreach (MLWebRTC.MediaStream stream in trackToRemove.Streams)
                {
                    stream.ParentConnections.Remove(this);
                }

                return MLResult.Create(resultCode);
            }

            public bool ContainsTrack(MediaStream.Track track)
            {
                return localMediaStreamTracks != null && localMediaStreamTracks.Contains(track);
            }
        }
    }
}
```



