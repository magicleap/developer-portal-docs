---
title: MLWebRTCConnectionEventCallbacks
summary: the native representation of the mlwebrtc callback events. 

---

# MLWebRTCConnectionEventCallbacks




The native representation of the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) callback events.   





## Public Attributes

### Context {#intptr-context}

Context pointer. 

```csharp

public IntPtr Context;

```






-----------

### OnConnected {#onconnecteddelegate-onconnected}

OnConnected event. 

```csharp

public OnConnectedDelegate OnConnected;

```

| Type | Description  | 
|--|--|
| [OnConnectedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onconnecteddelegate) | Delegate describing the callback necessary to monitor if a connection has been made.  |





-----------

### OnDataChannelReceived {#ondatachannelreceiveddelegate-ondatachannelreceived}

OnDataChannelReceived event. 

```csharp

public OnDataChannelReceivedDelegate OnDataChannelReceived;

```

| Type | Description  | 
|--|--|
| [OnDataChannelReceivedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-ondatachannelreceiveddelegate) | A delegate that describes the requirements of the OnDataChannelReceivedDelegate callback.  |





-----------

### OnDisconnected {#ondisconnecteddelegate-ondisconnected}

OnDisconnected event. 

```csharp

public OnDisconnectedDelegate OnDisconnected;

```

| Type | Description  | 
|--|--|
| [OnDisconnectedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-ondisconnecteddelegate) | Delegate describing the callback necessary to monitor if a disconnection has been made.  |





-----------

### OnError {#onerrordelegate-onerror}

OnError event. 

```csharp

public OnErrorDelegate OnError;

```

| Type | Description  | 
|--|--|
| [OnErrorDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onerrordelegate) | Delegate describing the callback necessary to monitor errors.  |





-----------

### OnIceGatheringCompleted {#onicegatheringcompleteddelegate-onicegatheringcompleted}

OnIceGatheringCompleted event. 

```csharp

public OnIceGatheringCompletedDelegate OnIceGatheringCompleted;

```

| Type | Description  | 
|--|--|
| [OnIceGatheringCompletedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onicegatheringcompleteddelegate) | Delegate describing the callback necessary to notify that all ICEs have been gathered.  |





-----------

### OnLocalAnswerCreated {#onlocalanswercreateddelegate-onlocalanswercreated}

OnSendAnswer event. 

```csharp

public OnLocalAnswerCreatedDelegate OnLocalAnswerCreated;

```

| Type | Description  | 
|--|--|
| [OnLocalAnswerCreatedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onlocalanswercreateddelegate) | Delegate describing the callback necessary to monitor when an answer to an offer is sent.  |





-----------

### OnLocalIceCandidateFound {#onlocalicecandidatefounddelegate-onlocalicecandidatefound}

OnSendIceCandidate event. 

```csharp

public OnLocalIceCandidateFoundDelegate OnLocalIceCandidateFound;

```

| Type | Description  | 
|--|--|
| [OnLocalIceCandidateFoundDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onlocalicecandidatefounddelegate) | Delegate describing the callback necessary to monitor when an ice candidate is sent.  |





-----------

### OnLocalOfferCreated {#onlocaloffercreateddelegate-onlocaloffercreated}

OnSendOffer event. 

```csharp

public OnLocalOfferCreatedDelegate OnLocalOfferCreated;

```

| Type | Description  | 
|--|--|
| [OnLocalOfferCreatedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onlocaloffercreateddelegate) | Delegate describing the callback necessary to monitor when an offer is sent.  |





-----------

### OnTrackAdded {#ontrackaddeddelegate-ontrackadded}

OnTrackAdded event. 

```csharp

public OnTrackAddedDelegate OnTrackAdded;

```






-----------

### OnTrackRemoved {#ontrackremoveddelegate-ontrackremoved}

OnTrackRemoved event. 

```csharp

public OnTrackRemovedDelegate OnTrackRemoved;

```






-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


