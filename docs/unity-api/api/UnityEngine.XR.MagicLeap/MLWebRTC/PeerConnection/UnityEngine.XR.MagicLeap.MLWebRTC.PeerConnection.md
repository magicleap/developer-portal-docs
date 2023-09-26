---
title: PeerConnection
summary: class that represents a connection used by the mlwebrtc api. 

---

# PeerConnection




Class that represents a connection used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   





## Public Fields

### IceCandidate {#mlwebrtcicecandidate-icecandidate}

Gets the ice candidate chosen by the connection. 

```csharp

public MLWebRTC.IceCandidate IceCandidate { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebRTC.IceCandidate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceCandidate.md) | Class that represents an ice candidate used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.  |





-----------

### IceServers {#mlwebrtciceserver-iceservers}

Gets the ice servers used for the connection. 

```csharp

public MLWebRTC.IceServer [] IceServers { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebRTC.IceServer](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceServer.md) [] | Class that represents an ice server used by the [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.  |





-----------

## Public Methods

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) AddLocalTrack {#mlresult-addlocaltrack}

Adds a local track to the connection. 

```csharp
public MLResult AddLocalTrack(
    MLWebRTC.MediaStream.Track trackToAdd
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.MediaStream.Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |trackToAdd|Track to add to the connection.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) AddRemoteIceCandidate {#mlresult-addremoteicecandidate}

Adds an ice candidate to the connection. 

```csharp
public MLResult AddRemoteIceCandidate(
    MLWebRTC.IceCandidate iceCandidate
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.IceCandidate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceCandidate.md) |iceCandidate|The ice candidate to add.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### bool ContainsTrack {#bool-containstrack}

```csharp
public bool ContainsTrack(
    MediaStream.Track track
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MediaStream.Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |track|Struct that represents a media stream track object. |






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) CreateOffer {#mlresult-createoffer}

Creates the offer for the connection. 

```csharp
public MLResult CreateOffer()
```






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

### [PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) CreateRemote {#peerconnection-createremote}

Creates an initialized [PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) object. 

```csharp
public static PeerConnection CreateRemote(
    MLWebRTC.IceServer [] iceServers,
    out MLResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.IceServer](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceServer.md) [] |iceServers|The ice servers to create the connection with.|
| out [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|






**Returns**: An initialized [PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) object.



-----------

### [PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) CreateRemote {#peerconnection-createremote}

Creates an initialized [PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) object with a forward proxy configuration. 

```csharp
public static PeerConnection CreateRemote(
    MLWebRTC.IceServer [] iceServers,
    MLWebRTC.ProxyConfig proxyConfig,
    out MLResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.IceServer](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceServer.md) [] |iceServers|The ice servers to create the connection with.|
| [MLWebRTC.ProxyConfig](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.ProxyConfig.md) |proxyConfig|Configuration for the forward proxy.|
| out [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |result|The [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|






**Returns**: An initialized [PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) object.



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Destroy {#mlresult-destroy}

Destroys the connection. 

```csharp
public MLResult Destroy()
```






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) HasFailed {#mlresult-hasfailed}

Gets if the connection has failed or not. 

```csharp
public MLResult HasFailed(
    out bool failed
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out bool |failed|True if connection has failed.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) IsConnected {#mlresult-isconnected}

Gets if the connection is currently connected or not. 

```csharp
public MLResult IsConnected(
    out bool connected
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out bool |connected|True if connected.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### delegate void OnConnectedDelegate {#delegate-void-onconnecteddelegate}

Delegate describing the callback necessary to monitor if a connection has been made. 

```csharp
public delegate void OnConnectedDelegate(
    MLWebRTC.PeerConnection connection
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection the event was invoked on.|






-----------

### delegate void OnDataChannelReceivedDelegate {#delegate-void-ondatachannelreceiveddelegate}

A delegate that describes the requirements of the OnDataChannelReceivedDelegate callback. 

```csharp
public delegate void OnDataChannelReceivedDelegate(
    MLWebRTC.PeerConnection connection,
    MLWebRTC.DataChannel dataChannel
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection the event was invoked on.|
| [MLWebRTC.DataChannel](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md) |dataChannel|The data channel that was added to the connection.|






-----------

### delegate void OnDisconnectedDelegate {#delegate-void-ondisconnecteddelegate}

Delegate describing the callback necessary to monitor if a disconnection has been made. 

```csharp
public delegate void OnDisconnectedDelegate(
    MLWebRTC.PeerConnection connection
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection the event was invoked on.|






-----------

### delegate void OnErrorDelegate {#delegate-void-onerrordelegate}

Delegate describing the callback necessary to monitor errors. 

```csharp
public delegate void OnErrorDelegate(
    MLWebRTC.PeerConnection connection,
    string message
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection the event was invoked on.|
| string |message|The error message.|






-----------

### delegate void OnIceGatheringCompletedDelegate {#delegate-void-onicegatheringcompleteddelegate}

Delegate describing the callback necessary to notify that all ICEs have been gathered. 

```csharp
public delegate void OnIceGatheringCompletedDelegate(
    MLWebRTC.PeerConnection connection
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection the event was invoked on.|






-----------

### delegate void OnLocalAnswerCreatedDelegate {#delegate-void-onlocalanswercreateddelegate}

Delegate describing the callback necessary to monitor when an answer to an offer is sent. 

```csharp
public delegate void OnLocalAnswerCreatedDelegate(
    MLWebRTC.PeerConnection connection,
    string sendAnswer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection the event was invoked on.|
| string |sendAnswer|The  json  of the answer sent.|






-----------

### delegate void OnLocalIceCandidateFoundDelegate {#delegate-void-onlocalicecandidatefounddelegate}

Delegate describing the callback necessary to monitor when an ice candidate is sent. 

```csharp
public delegate void OnLocalIceCandidateFoundDelegate(
    MLWebRTC.PeerConnection connection,
    MLWebRTC.IceCandidate iceCandidate
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection the event was invoked on.|
| [MLWebRTC.IceCandidate](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceCandidate.md) |iceCandidate|The ice candidate that was sent.|






-----------

### delegate void OnLocalOfferCreatedDelegate {#delegate-void-onlocaloffercreateddelegate}

Delegate describing the callback necessary to monitor when an offer is sent. 

```csharp
public delegate void OnLocalOfferCreatedDelegate(
    MLWebRTC.PeerConnection connection,
    string sdpSend
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection the event was invoked on.|
| string |sdpSend|The  json  of the offer sent.|






-----------

### delegate void OnTrackAddedMultipleStreamsDelegate {#delegate-void-ontrackaddedmultiplestreamsdelegate}

A delegate that describes the requirements of the OnTrackAddedDelegate callback. 

```csharp
public delegate void OnTrackAddedMultipleStreamsDelegate(
    List< MLWebRTC.MediaStream > mediaStreams,
    MLWebRTC.MediaStream.Track addedTrack
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| List&lt; [MLWebRTC.MediaStream](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) &gt; |mediaStreams|The media stream associated with the added track.|
| [MLWebRTC.MediaStream.Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |addedTrack|The track that was added to the connection.|






-----------

### delegate void OnTrackRemovedMultipleStreamsDelegate {#delegate-void-ontrackremovedmultiplestreamsdelegate}

A delegate that describes the requirements of the OnTrackRemovedDelegate callback. 

```csharp
public delegate void OnTrackRemovedMultipleStreamsDelegate(
    List< MLWebRTC.MediaStream > mediaStreams,
    MLWebRTC.MediaStream.Track removedTrack
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| List&lt; [MLWebRTC.MediaStream](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.md) &gt; |mediaStreams|The media stream associated with the removed track.|
| [MLWebRTC.MediaStream.Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |removedTrack|The track that was removed from the connection.|






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) RemoveLocalTrack {#mlresult-removelocaltrack}

Removes a local track to the connection. 

```csharp
public MLResult RemoveLocalTrack(
    MLWebRTC.MediaStream.Track trackToRemove
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.MediaStream.Track](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/MediaStream/UnityEngine.XR.MagicLeap.MLWebRTC.MediaStream.Track.md) |trackToRemove|Track to remove to the connection.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetRemoteAnswer {#mlresult-setremoteanswer}

Sets the remote answer for the connection. 

```csharp
public MLResult SetRemoteAnswer(
    string remoteAnswer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |remoteAnswer|The answer to set.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetRemoteOffer {#mlresult-setremoteoffer}

Sets the remote offer for the connection. 

```csharp
public MLResult SetRemoteOffer(
    string remoteOffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |remoteOffer|The offer to set.|






**Returns**: [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

## Public Events

### OnConnected {#onconnecteddelegate-onconnected}

Event invoked for when a connection between a local and remote peer is established. 

```csharp
public OnConnectedDelegate OnConnected()
```






-----------

### OnDataChannelReceived {#ondatachannelreceiveddelegate-ondatachannelreceived}

Event invoked for when a data channel is received by a connection. 

```csharp
public OnDataChannelReceivedDelegate OnDataChannelReceived()
```






-----------

### OnDisconnected {#ondisconnecteddelegate-ondisconnected}

Event invoked for when a connection between a local and remote peer is destroyed. 

```csharp
public OnDisconnectedDelegate OnDisconnected()
```






-----------

### OnError {#onerrordelegate-onerror}

Event invoked for when an error occurs. 

```csharp
public OnErrorDelegate OnError()
```






-----------

### OnIceGatheringCompleted {#onicegatheringcompleteddelegate-onicegatheringcompleted}

Event invoked for when ice gathering completed. 

```csharp
public OnIceGatheringCompletedDelegate OnIceGatheringCompleted()
```






-----------

### OnLocalAnswerCreated {#onlocalanswercreateddelegate-onlocalanswercreated}

Event invoked for when an answer is sent. 

```csharp
public OnLocalAnswerCreatedDelegate OnLocalAnswerCreated()
```






-----------

### OnLocalIceCandidateFound {#onlocalicecandidatefounddelegate-onlocalicecandidatefound}

Event invoked for when an ice candidate is sent. 

```csharp
public OnLocalIceCandidateFoundDelegate OnLocalIceCandidateFound()
```






-----------

### OnLocalOfferCreated {#onlocaloffercreateddelegate-onlocaloffercreated}

Event invoked for when an offer is sent. 

```csharp
public OnLocalOfferCreatedDelegate OnLocalOfferCreated()
```






-----------

### OnTrackAddedMultipleStreams {#ontrackaddedmultiplestreamsdelegate-ontrackaddedmultiplestreams}

Event invoked for when a track is added to a connection. 

```csharp
public OnTrackAddedMultipleStreamsDelegate OnTrackAddedMultipleStreams()
```






-----------

### OnTrackRemovedMultipleStreams {#ontrackremovedmultiplestreamsdelegate-ontrackremovedmultiplestreams}

Event invoked for when a track is removed from a connection. 

```csharp
public OnTrackRemovedMultipleStreamsDelegate OnTrackRemovedMultipleStreams()
```






-----------

