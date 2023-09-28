---
title: NativeBindings
summary: native bindings for the mlwebrtc.peerconnection class. 

---

# NativeBindings




[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) bindings for the [MLWebRTC.PeerConnection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) class.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) CreateRemoteConnection {#mlresultcode-createremoteconnection}

Creates a remote connection and sets up the native callbacks. 

```csharp
public static MLResult.Code CreateRemoteConnection(
    MLWebRTC.IceServer [] iceServers,
    out PeerConnection connection
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.IceServer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceServer.md) [] |iceServers|The ice servers to create the connection with.|
| out [PeerConnection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The created connection object.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection was successfully created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) CreateRemoteConnection {#mlresultcode-createremoteconnection}

Creates a remote connection with a forward proxy configuration and sets up the native callbacks. 

```csharp
public static MLResult.Code CreateRemoteConnection(
    MLWebRTC.IceServer [] iceServers,
    MLWebRTC.ProxyConfig proxyConfig,
    out PeerConnection connection
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebRTC.IceServer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceServer.md) [] |iceServers|The ice servers to create the connection with.|
| [MLWebRTC.ProxyConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.ProxyConfig.md) |proxyConfig|The forward proxy configuration.|
| out [PeerConnection](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.md) |connection|The created connection object.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection was successfully created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionAddLocalSourceTrackEx {#mlresultcode-mlwebrtcconnectionaddlocalsourcetrackex}

Add a local source as a media track to the connection. 

```csharp
public MLResult.Code MLWebRTCConnectionAddLocalSourceTrackEx(
    ulong connectionHandle,
    ulong localSourceHandle,
    ref MLWebRTCTrackInfo trackInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection to set the local source to.|
| ulong |localSourceHandle|The handle to the local source to set onto the connection.|
| ref [MLWebRTCTrackInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.NativeBindings.MLWebRTCTrackInfo.md) |trackInfo|Information about the track to be added|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the source was successfully set on the connection. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionAddRemoteIceCandidate {#mlresultcode-mlwebrtcconnectionaddremoteicecandidate}

Adds a remote ice candidate from a connection. 

```csharp
public MLResult.Code MLWebRTCConnectionAddRemoteIceCandidate(
    ulong connectionHandle,
    in MLWebRTCConnectionIceCandidate candidate
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection to send the ice candidate to.|
| in [MLWebRTCConnectionIceCandidate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.NativeBindings.MLWebRTCConnectionIceCandidate.md) |candidate|The ice candidate to send.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the ice candidate was successfully sent. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionCreate {#mlresultcode-mlwebrtcconnectioncreate}

Creates a WebRTC connection. 

```csharp
public MLResult.Code MLWebRTCConnectionCreate(
    in MLWebRTCConnectionConfig config,
    in MLWebRTCConnectionEventCallbacks callbacks,
    out ulong connectionHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLWebRTCConnectionConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.NativeBindings.MLWebRTCConnectionConfig.md) |config|The configuration that holds the ice servers.|
| in [MLWebRTCConnectionEventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.NativeBindings.MLWebRTCConnectionEventCallbacks.md) |callbacks|The object that holds all the callbacks that will be invoked natively.|
| out ulong |connectionHandle|The handle of the connection to return to the caller.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection was successfully created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionCreateOffer {#mlresultcode-mlwebrtcconnectioncreateoffer}

Creates an offer with a connection. 

```csharp
public MLResult.Code MLWebRTCConnectionCreateOffer(
    ulong connectionHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection creating the offer.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the offer was successfully created. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionDestroy {#mlresultcode-mlwebrtcconnectiondestroy}

Destroys a WebRTC connection. 

```csharp
public MLResult.Code MLWebRTCConnectionDestroy(
    ulong connectionHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection to destroy.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection was successfully destroyed. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionHasFailed {#mlresultcode-mlwebrtcconnectionhasfailed}

Gets if a connection has failed 

```csharp
public MLResult.Code MLWebRTCConnectionHasFailed(
    ulong connectionHandle,
    out bool hasFailed
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection in question.|
| out bool |hasFailed|Used to return to the user to determine if the connection has failed or not.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection status was successfully queried. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionIsConnected {#mlresultcode-mlwebrtcconnectionisconnected}

Gets if a connection is currently connected. 

```csharp
public MLResult.Code MLWebRTCConnectionIsConnected(
    ulong connectionHandle,
    out bool isConnected
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection in question.|
| out bool |isConnected|Used to return to the user to determine if the connection is connected or not.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection status was successfully queried. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionProcessEvents {#mlresultcode-mlwebrtcconnectionprocessevents}

Processes events of a connection, responsible for callbacks being invoked natively. 

```csharp
public MLResult.Code MLWebRTCConnectionProcessEvents(
    ulong connectionHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection to process events from.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the connection had it's events successfully processed. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionRemoveLocalSourceTrack {#mlresultcode-mlwebrtcconnectionremovelocalsourcetrack}

Sets the local source of a connection. 

```csharp
public MLResult.Code MLWebRTCConnectionRemoveLocalSourceTrack(
    ulong connectionHandle,
    ulong localSourceHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection to set the local source to.|
| ulong |localSourceHandle|The handle to the local source to set onto the connection.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the source was successfully set on the connection. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionSetRemoteAnswer {#mlresultcode-mlwebrtcconnectionsetremoteanswer}

Sets the answer to an offer from a remote connection. 

```csharp
public MLResult.Code MLWebRTCConnectionSetRemoteAnswer(
    ulong connectionHandle,
    string answer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection answering to the offer.|
| string |answer|The  json  formatted answer string to set.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the answer was successfully set. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLWebRTCConnectionSetRemoteOffer {#mlresultcode-mlwebrtcconnectionsetremoteoffer}

Sets an offer from a remote connection. 

```csharp
public MLResult.Code MLWebRTCConnectionSetRemoteOffer(
    ulong connectionHandle,
    string offer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |connectionHandle|The handle to the connection responding to the offer.|
| string |offer|The offer string.|






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if the offer was successfully set. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.PermissionDenied](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if necessary permission is missing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to other internal error. 



-----------

### delegate void OnConnectedDelegate {#delegate-void-onconnecteddelegate}

A delegate that describes the requirements of the OnConnectedDelegate callback. 

```csharp
public delegate void OnConnectedDelegate(
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnDataChannelReceivedDelegate {#delegate-void-ondatachannelreceiveddelegate}

A delegate that describes the requirements of the OnDataChannelReceivedDelegate callback. 

```csharp
public delegate void OnDataChannelReceivedDelegate(
    ulong remoteDataChanelHandle,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |remoteDataChanelHandle|The handle to the newly received data channel.|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnDisconnectedDelegate {#delegate-void-ondisconnecteddelegate}

A delegate that describes the requirements of the OnDisconnectedDelegate callback. 

```csharp
public delegate void OnDisconnectedDelegate(
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnErrorDelegate {#delegate-void-onerrordelegate}

A delegate that describes the requirements of the OnError callback. 

```csharp
public delegate void OnErrorDelegate(
    string message,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |message|The error message.|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnIceGatheringCompletedDelegate {#delegate-void-onicegatheringcompleteddelegate}

A delegate that describes the requirements of the OnIceGatheringCompleted callback. 

```csharp
public delegate void OnIceGatheringCompletedDelegate(
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnLocalAnswerCreatedDelegate {#delegate-void-onlocalanswercreateddelegate}

A delegate that describes the requirements of the OnSendAnswer callback. 

```csharp
public delegate void OnLocalAnswerCreatedDelegate(
    string answer,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |answer|The  json  formatted answer string.|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnLocalIceCandidateFoundDelegate {#delegate-void-onlocalicecandidatefounddelegate}

A delegate that describes the requirements of the OnSendIceCandidate callback. 

```csharp
public delegate void OnLocalIceCandidateFoundDelegate(
    in MLWebRTCConnectionIceCandidate iceCandidate,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLWebRTCConnectionIceCandidate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/PeerConnection/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.PeerConnection.NativeBindings.MLWebRTCConnectionIceCandidate.md) |iceCandidate|The ice candidate object that was sent.|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnLocalOfferCreatedDelegate {#delegate-void-onlocaloffercreateddelegate}

A delegate that describes the requirements of the OnSendOfferDelegate callback. 

```csharp
public delegate void OnLocalOfferCreatedDelegate(
    string offer,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |offer|The  json  formatted offer string. |
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnTrackAddedDelegate {#delegate-void-ontrackaddeddelegate}

A delegate that describes the requirements of the OnTrackAddedDelegate callback. 

```csharp
public delegate void OnTrackAddedDelegate(
    in MLWebRTC.Source.NativeBindings.MLWebRTCSource sourceNative,
    uint numStreamIds,
    IntPtr streamIdsPtr,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLWebRTC.Source.NativeBindings.MLWebRTCSource](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/Source/NativeBindings/UnityEngine.XR.MagicLeap.MLWebRTC.Source.NativeBindings.MLWebRTCSource.md) |sourceNative|The native source object that was added.|
| uint |numStreamIds|The number of streams this track belongs to.|
| IntPtr |streamIdsPtr|The names of the streams this track belongs to.|
| IntPtr |context|Pointer to a context object.|






-----------

### delegate void OnTrackRemovedDelegate {#delegate-void-ontrackremoveddelegate}

A delegate that describes the requirements of the OnTrackRemovedDelegate callback. 

```csharp
public delegate void OnTrackRemovedDelegate(
    ulong remoteSourceHandle,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |remoteSourceHandle|The handle to the removed source.|
| IntPtr |context|Pointer to a context object.|






-----------


