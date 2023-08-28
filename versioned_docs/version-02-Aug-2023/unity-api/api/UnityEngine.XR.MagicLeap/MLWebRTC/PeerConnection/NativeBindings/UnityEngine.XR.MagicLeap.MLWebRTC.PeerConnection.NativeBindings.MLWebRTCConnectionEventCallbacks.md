---
title: MLWebRTCConnectionEventCallbacks
summary: the native representation of the mlwebrtc callback events. 

---

# MLWebRTCConnectionEventCallbacks




The native representation of the MLWebRTC callback events.   





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






-----------

### OnDataChannelReceived {#ondatachannelreceiveddelegate-ondatachannelreceived}

OnDataChannelReceived event. 

```csharp

public OnDataChannelReceivedDelegate OnDataChannelReceived;

```






-----------

### OnDisconnected {#ondisconnecteddelegate-ondisconnected}

OnDisconnected event. 

```csharp

public OnDisconnectedDelegate OnDisconnected;

```






-----------

### OnError {#onerrordelegate-onerror}

OnError event. 

```csharp

public OnErrorDelegate OnError;

```






-----------

### OnIceGatheringCompleted {#onicegatheringcompleteddelegate-onicegatheringcompleted}

OnIceGatheringCompleted event. 

```csharp

public OnIceGatheringCompletedDelegate OnIceGatheringCompleted;

```






-----------

### OnLocalAnswerCreated {#onlocalanswercreateddelegate-onlocalanswercreated}

OnSendAnswer event. 

```csharp

public OnLocalAnswerCreatedDelegate OnLocalAnswerCreated;

```






-----------

### OnLocalIceCandidateFound {#onlocalicecandidatefounddelegate-onlocalicecandidatefound}

OnSendIceCandidate event. 

```csharp

public OnLocalIceCandidateFoundDelegate OnLocalIceCandidateFound;

```






-----------

### OnLocalOfferCreated {#onlocaloffercreateddelegate-onlocaloffercreated}

OnSendOffer event. 

```csharp

public OnLocalOfferCreatedDelegate OnLocalOfferCreated;

```






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


