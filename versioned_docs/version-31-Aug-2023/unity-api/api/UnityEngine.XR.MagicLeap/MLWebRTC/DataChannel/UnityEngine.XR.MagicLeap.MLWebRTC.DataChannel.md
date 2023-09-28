---
title: DataChannel
summary: class that represents a data channel used by the mlwebrtc api. 

---

# DataChannel




Class that represents a data channel used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   





## Public Fields

### Label {#string-label}

Gets the label of the data channel. 

```csharp

public string Label { get; set; }

```






-----------

### ParentConnection {#peerconnection-parentconnection}

Gets the connection associated with the data channel. 

```csharp

public PeerConnection ParentConnection { get; set; }

```

| Type | Description  | 
|--|--|
| [PeerConnection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) | Class that represents a connection used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.  |





-----------

## Public Methods

### [DataChannel](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md) CreateLocal {#datachannel-createlocal}

Creates an initialized [DataChannel](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md) object. 

```csharp
public static DataChannel CreateLocal(
    MLWebRTC.PeerConnection connection,
    out MLResult result,
    string label ="local"
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.PeerConnection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The connection to create the data channel with.|
| out [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |label|The label to give the data channel.|
| string |result|The [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) object of the inner platform call(s).|






**Returns**: An initialized [DataChannel](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md) object.



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Destroy {#mlresult-destroy}

Destroys the data channel object. 

```csharp
public MLResult Destroy()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) IsOpen {#mlresult-isopen}

Checks if the data channel is currently open. 

```csharp
public MLResult IsOpen(
    out bool open
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out bool |open|True if data channel is open.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. 



-----------

### delegate void OnClosedDelegate {#delegate-void-oncloseddelegate}

Delegate that describes the requirements of the OnClosed callback. 

```csharp
public delegate void OnClosedDelegate(
    MLWebRTC.DataChannel dataChannel
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.DataChannel](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md) |dataChannel|The data channel associated with the event.|






-----------

### delegate void OnMessageBinaryDelegate {#delegate-void-onmessagebinarydelegate}

Delegate that describes the requirements of the OnMessageBinary callback. 

```csharp
public delegate void OnMessageBinaryDelegate(
    MLWebRTC.DataChannel dataChannel,
    byte [] message
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.DataChannel](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md) |dataChannel|The data channel associated with the event.|
| byte [] |message|The message byte array.|






-----------

### delegate void OnMessageTextDelegate {#delegate-void-onmessagetextdelegate}

Delegate that describes the requirements of the OnMessageText callback. 

```csharp
public delegate void OnMessageTextDelegate(
    MLWebRTC.DataChannel dataChannel,
    string message
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.DataChannel](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md) |dataChannel|The data channel associated with the event.|
| string |message|The message string.|






-----------

### delegate void OnOpenedDelegate {#delegate-void-onopeneddelegate}

Delegate that describes the requirements of the OnOpened callback. 

```csharp
public delegate void OnOpenedDelegate(
    MLWebRTC.DataChannel dataChannel
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.DataChannel](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/DataChannel/UnityEngine.XR.MagicLeap.MLWebRTC.DataChannel.md) |dataChannel|The data channel associated with the event.|






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SendMessage {#mlresult-sendmessage}

Sends a string message to a data channel. 

```csharp
public MLResult SendMessage(
    string message
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |message|The string to send.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultDataChannelIsClosed  if data channel is closed. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SendMessage< T > {#mlresult-sendmessage-t-}

Sends a byte array message to a data channel. 

```csharp
public MLResult SendMessage< T >(
    T [] message
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| T [] |message|The byte array to send.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if destroying all handles was successful. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultInstanceNotCreated  if [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) instance was not created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultMismatchingHandle  if an incorrect handle was sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if an invalid parameter was passed. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.WebRTCResultDataChannelIsClosed  if data channel is closed. 



-----------

## Public Events

### OnClosed {#oncloseddelegate-onclosed}

Event invoked for when a data channel closes. 

```csharp
public OnClosedDelegate OnClosed()
```






-----------

### OnMessageBinary {#onmessagebinarydelegate-onmessagebinary}

Event invoked for when a data channel receives a binary message. 

```csharp
public OnMessageBinaryDelegate OnMessageBinary()
```






-----------

### OnMessageText {#onmessagetextdelegate-onmessagetext}

Event invoked for when a data channel receives a text message. 

```csharp
public OnMessageTextDelegate OnMessageText()
```






-----------

### OnOpened {#onopeneddelegate-onopened}

Event invoked for when a data channel opens. 

```csharp
public OnOpenedDelegate OnOpened()
```






-----------


