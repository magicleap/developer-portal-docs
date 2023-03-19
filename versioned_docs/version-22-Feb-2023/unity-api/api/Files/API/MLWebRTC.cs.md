---

title: MLWebRTC.cs

---


# MLWebRTC.cs









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
    using System.Threading.Tasks;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC : MLAutoAPISingleton<MLWebRTC>
    {
        private HashSet<string> uniqueMediaStreamIds = new HashSet<string>();

        private List<MLWebRTC.MediaStream.Track> localTracks = new List<MLWebRTC.MediaStream.Track>();

        private List<MLWebRTC.Sink> sinks = new List<MLWebRTC.Sink>();

        private List<MLWebRTC.PeerConnection> connections = new List<MLWebRTC.PeerConnection>();

        protected override MLResult.Code StopAPI()
        {
            // Destroy connections.
            PeerConnection[] remainingConnections = new PeerConnection[connections.Count];
            // PeerConnection.Destroy() removes the connection from Instance.connections list.
            connections.CopyTo(remainingConnections);
            foreach (PeerConnection connection in remainingConnections)
            {
                connection.Destroy();
            }

            // Destroy sinks.
            Sink[] remainingSinks = new Sink[sinks.Count];
            // Sink.Destroy() removes the sink from Instance.sinks list.
            sinks.CopyTo(remainingSinks);
            foreach (Sink sink in remainingSinks)
            {
                sink.Destroy();
            }

            // Destroy local tracks.
            MediaStream.Track[] remainingTracks = new MediaStream.Track[localTracks.Count];
            // MediaStream.Track.Destroy() removes the track from Instance.localTracks list.
            localTracks.CopyTo(remainingTracks);
            foreach (MediaStream.Track localTracks in remainingTracks)
            {
                localTracks.DestroyLocal();
            }

            Instance.connections.Clear();
            Instance.sinks.Clear();
            Instance.localTracks.Clear();

            MLResult.Code resultCode = NativeBindings.MLWebRTCInstanceDestroy();
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCInstanceDestroy));
            return resultCode;
        }

        protected override MLResult.Code StartAPI()
        {
            NativeBindings.MLWebRTCDebugUtils debugUtils = NativeBindings.MLWebRTCDebugUtils.Create();
            MLResult.Code resultCode = NativeBindings.MLWebRTCInstanceCreateWithDebugUtils(in debugUtils);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCInstanceCreateWithDebugUtils));
            return resultCode;
        }

        protected override void Update()
        {
            for (int i = 0; i < Instance.connections.Count; ++i)
            {
                MLWebRTC.PeerConnection connection = Instance.connections[i];
                if (MagicLeapNativeBindings.MLHandleIsValid(connection.Handle))
                {
                    // Polls for connection events.
                    MLResult.DidNativeCallSucceed(MLWebRTC.PeerConnection.NativeBindings.MLWebRTCConnectionProcessEvents(connection.Handle), "MLWebRTCConnectionProcessEvents()");
                }
            }
        }
    }
}
```




