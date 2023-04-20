---
title: MLWebRTCConnectionEventCallbacks
summary: the native representation of the mlwebrtc callback events. 

---

# MLWebRTCConnectionEventCallbacks




The native representation of the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) callback events.   





## Public Attributes

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------

### OnTrackRemoved {#ontrackremoveddelegate-ontrackremoved}

OnTrackRemoved event. 

```csharp

public OnTrackRemovedDelegate OnTrackRemoved;

```






-----------

### OnTrackAdded {#ontrackaddeddelegate-ontrackadded}

OnTrackAdded event. 

```csharp

public OnTrackAddedDelegate OnTrackAdded;

```






-----------

### OnLocalOfferCreated {#onlocaloffercreateddelegate-onlocaloffercreated}

OnSendOffer event. 

```csharp

public OnLocalOfferCreatedDelegate OnLocalOfferCreated;

```

| Type | Description  | 
|--|--|
| [OnLocalOfferCreatedDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onlocaloffercreateddelegate) | Delegate describing the callback necessary to monitor when an offer is sent.  |





-----------

### OnLocalIceCandidateFound {#onlocalicecandidatefounddelegate-onlocalicecandidatefound}

OnSendIceCandidate event. 

```csharp

public OnLocalIceCandidateFoundDelegate OnLocalIceCandidateFound;

```

| Type | Description  | 
|--|--|
| [OnLocalIceCandidateFoundDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onlocalicecandidatefounddelegate) | Delegate describing the callback necessary to monitor when an ice candidate is sent.  |





-----------

### OnLocalAnswerCreated {#onlocalanswercreateddelegate-onlocalanswercreated}

OnSendAnswer event. 

```csharp

public OnLocalAnswerCreatedDelegate OnLocalAnswerCreated;

```

| Type | Description  | 
|--|--|
| [OnLocalAnswerCreatedDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onlocalanswercreateddelegate) | Delegate describing the callback necessary to monitor when an answer to an offer is sent.  |





-----------

### OnIceGatheringCompleted {#onicegatheringcompleteddelegate-onicegatheringcompleted}

OnIceGatheringCompleted event. 

```csharp

public OnIceGatheringCompletedDelegate OnIceGatheringCompleted;

```

| Type | Description  | 
|--|--|
| [OnIceGatheringCompletedDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onicegatheringcompleteddelegate) | Delegate describing the callback necessary to notify that all ICEs have been gathered.  |





-----------

### OnError {#onerrordelegate-onerror}

OnError event. 

```csharp

public OnErrorDelegate OnError;

```

| Type | Description  | 
|--|--|
| [OnErrorDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onerrordelegate) | Delegate describing the callback necessary to monitor errors.  |





-----------

### OnDisconnected {#ondisconnecteddelegate-ondisconnected}

OnDisconnected event. 

```csharp

public OnDisconnectedDelegate OnDisconnected;

```

| Type | Description  | 
|--|--|
| [OnDisconnectedDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-ondisconnecteddelegate) | Delegate describing the callback necessary to monitor if a disconnection has been made.  |





-----------

### OnDataChannelReceived {#ondatachannelreceiveddelegate-ondatachannelreceived}

OnDataChannelReceived event. 

```csharp

public OnDataChannelReceivedDelegate OnDataChannelReceived;

```

| Type | Description  | 
|--|--|
| [OnDataChannelReceivedDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-ondatachannelreceiveddelegate) | A delegate that describes the requirements of the OnDataChannelReceivedDelegate callback.  |





-----------

### OnConnected {#onconnecteddelegate-onconnected}

OnConnected event. 

```csharp

public OnConnectedDelegate OnConnected;

```

| Type | Description  | 
|--|--|
| [OnConnectedDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md#delegate-void-onconnecteddelegate) | Delegate describing the callback necessary to monitor if a connection has been made.  |





-----------

### Context {#intptr-context}

Context pointer. 

```csharp

public IntPtr Context;

```






-----------

