---

title: MLWebRTCMediaStream.cs

---


# MLWebRTCMediaStream.cs









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

    public partial class MLWebRTC
    {
        public partial class MediaStream
        {
            private Dictionary<Track.Type, MediaStream.Track> activeTracks = new Dictionary<Track.Type, Track>
            {
                { Track.Type.Audio, null},
                { Track.Type.Video, null}
            };

            private MediaStream()
            {
            }

            public List<MediaStream.Track> Tracks { get; private set; }

            public List<MediaStream.Track> VideoTracks { get => Tracks.FindAll(track => track.TrackType == Track.Type.Video); }

            public List<MediaStream.Track> AudioTracks { get => Tracks.FindAll(track => track.TrackType == Track.Type.Audio); }

            public MediaStream.Track ActiveVideoTrack { get => activeTracks[Track.Type.Video]; }

            public MediaStream.Track ActiveAudioTrack { get => activeTracks[Track.Type.Audio]; }

            public HashSet<MLWebRTC.PeerConnection> ParentConnections { get; internal set; } = new HashSet<PeerConnection>();

            public string Id { get; private set; }

            public bool IsLocal { get; private set; }

            public static MediaStream CreateWithBuiltInTracks(string id, Track.VideoType videoType, Track.AudioType audioType, string videoTrackId = "", string audioTrackId = "")
            {
                MediaStream mediaStream = Create(id);
                if (mediaStream == null)
                {
                    return null;
                }

                MediaStream.Track videoTrack = (videoType != Track.VideoType.None) ? MediaStream.Track.CreateVideoTrack(videoType, out MLResult result, trackId: videoTrackId) : null;
                MediaStream.Track audioTrack = (audioType != Track.AudioType.None) ? MediaStream.Track.CreateAudioTrackFromMicrophone(out result, audioTrackId) : null;

                if (videoTrack != null)
                {
                    mediaStream.AddLocalTrack(videoTrack);
                    mediaStream.SelectTrack(videoTrack);
                }
                if (audioTrack != null)
                {
                    mediaStream.AddLocalTrack(audioTrack);
                    mediaStream.SelectTrack(audioTrack);
                }

                return mediaStream;
            }

            public static MediaStream CreateWithAppDefinedVideoTrack(string id, MLWebRTC.AppDefinedVideoSource appDefinedVideoSource, Track.AudioType audioType, string audioTrackId = "", MLWebRTC.AppDefinedAudioSource localDefinedAudioSource = null)
            {
                MediaStream mediaStream = Create(id);
                if (mediaStream == null)
                {
                    return null;
                }

                mediaStream.AddLocalTrack(appDefinedVideoSource);
                mediaStream.SelectTrack(appDefinedVideoSource);

                if (audioType != Track.AudioType.None)
                {
                    MediaStream.Track audioTrack = null;

                    switch (audioType)
                    {
                        case Track.AudioType.Microphone:
                            audioTrack = MediaStream.Track.CreateAudioTrackFromMicrophone(out MLResult micResult, audioTrackId);
                            break;
                        case Track.AudioType.Defined:
                            MLWebRTC.AppDefinedAudioSource.InitializeLocal(localDefinedAudioSource);
                            audioTrack = localDefinedAudioSource;
                            break;
                    }

                    mediaStream.AddLocalTrack(audioTrack);
                    mediaStream.SelectTrack(audioTrack);
                }

                return mediaStream;
            }

            public static MediaStream Create(string id)
            {
                if (MLWebRTC.Instance.uniqueMediaStreamIds.Contains(id))
                {
                    MLPluginLog.ErrorFormat("Media stream id '{0}' already exists.", id);
                    return null;
                }

                MediaStream mediaStream = Create(null, id);
                mediaStream.IsLocal = true;
                MLWebRTC.Instance.uniqueMediaStreamIds.Add(id);
                return mediaStream;
            }

            internal static MediaStream Create(MLWebRTC.PeerConnection connection, string id)
            {
                MediaStream mediaStream = new MediaStream();
                mediaStream.Tracks = new List<Track>();
                mediaStream.Id = id;
                mediaStream.ParentConnections.Add(connection);
                return mediaStream;
            }

            public MLResult AddLocalTrack(MLWebRTC.MediaStream.Track track)
            {
                MLResult result = MLResult.Create(MLResult.Code.Ok);
                if (this.Tracks.Contains(track))
                {
                    return result;
                }

                if (track.IsLocal)
                {
                    this.Tracks.Add(track);
                    track.Streams.Add(this);
                }

                return result;
            }

            public MLResult RemoveLocalTrack(MLWebRTC.MediaStream.Track track)
            {
                MLResult result = MLResult.Create(MLResult.Code.Ok);
                if (!this.Tracks.Contains(track))
                {
                    return result;
                }

                if (track.IsLocal)
                {
                    this.Tracks.Remove(track);
                    track.Streams.Remove(this);
                }

                return result;
            }

            public MLResult SelectTrack(MediaStream.Track track)
            {
                if (track == null)
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Track is null.");
                }

                MediaStream.Track currentActiveTrack = activeTracks[track.TrackType];

                if (currentActiveTrack != null)
                {
                    UnSelectTrack(currentActiveTrack);
                }

                activeTracks[track.TrackType] = track;
                MLResult result = track.SetEnabled(true);

                return result;
            }

            public MLResult UnSelectTrack(MediaStream.Track track)
            {
                if (track == null)
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Track is null.");
                }

                MLResult result = MLResult.Create(MLResult.Code.Ok);

                MediaStream.Track currentActiveTrack = activeTracks[track.TrackType];

                if (currentActiveTrack == track)
                {
                    if (IsLocal)
                        result = currentActiveTrack.SetEnabled(false);
                    activeTracks[track.TrackType] = null;
                }

                return result;
            }

            public void DestroyLocal()
            {
                if (!IsLocal)
                {
                    return;
                }

                foreach (Track track in this.Tracks)
                {
                    track.DestroyLocal();
                }

                MLWebRTC.Instance.uniqueMediaStreamIds.Remove(this.Id);
            }
        }
    }
}
```




