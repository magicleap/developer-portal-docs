---
title: DRM
summary: mediadrm to obtain the content keys for decrypting protected media streams. 

---

# DRM




MediaDRM to obtain the content keys for decrypting protected media streams.   





## Public Fields

### TrackType {#tracktype-tracktype}

Type of track this [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) is used for. 

```csharp

public Track.Type TrackType { get; set; }

```

| Type | Description  | 
|--|--|
| [Track.Type](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md#enums-type) | Media player track types.  |





-----------

## Public Methods

### [Session](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/Session/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Session.md) CreateSession {#session-createsession}

Creates a new session for the [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) with the provided track information. 

```csharp
public Session CreateSession(
    Info trackInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Info](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Info.md) |trackInfo|The provided track information to create the new session with.|






-----------

###  DRM {#functions-drm}

Provides initilization of the [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) class with the two given parameters. 

```csharp
public DRM(
    MLMedia.Player mlPlayer,
    Info trackDRMInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMedia.Player](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md) |mlPlayer|The media player this [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) is associated with.|
| [Info](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Info.md) |trackInfo|The info from the media player track that this [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) is associated with.|






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetPropertyByteArray {#mlresult-getpropertybytearray}

_**CURRENTLY UNTESTED ON CAPI**_ Read a [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin byte array property value, given the property name. 

```csharp
public MLResult GetPropertyByteArray(
    Property property,
    out byte [] propertyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Property |property||
| out byte [] |propertyValue||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetPropertyString {#mlresult-getpropertystring}

_**CURRENTLY UNTESTED ON CAPI**_ Read a [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin String property value, given the property name. 

```csharp
public MLResult GetPropertyString(
    Property property,
    out string propertyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Property |property||
| out string |propertyValue||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetSecureStop {#mlresult-getsecurestop}

_**CURRENTLY UNTESTED ON CAPI**_ Access secure stop by secure stop ID. 

```csharp
public MLResult GetSecureStop(
    byte [] secureStopId,
    out byte [] secureStop
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |secureStopId||
| out byte [] |secureStop||




**See**: MLMediaDRMGetSecureStops() 



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetSecureStops {#mlresult-getsecurestops}

_**CURRENTLY UNTESTED ON CAPI**_ Access all secure stops. Secure Stop: A means of enforcing limits on the number of concurrent streams per subscriber across devices is provided via #SecureStop. This is achieved by securely monitoring the lifetime of sessions. Information from the server related to the current playback session is written to persistent storage on the device when each #MediaCrypto object is created. In the normal case, playback will be completed, the session destroyed and the Secure Stops will be queried. The app queries secure stops and forwards the secure stop message to the server which verifies the signature and notifies the server side database that the session destruction has been confirmed. The persisted record on the client is only removed after positive confirmation that the server received the message using releaseSecureStops(). 

```csharp
public MLResult GetSecureStops(
    out byte secureStops[][]
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out byte |secureStops[][]||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) IsCryptoSchemeSupported {#mlresult-iscryptoschemesupported}

_**CURRENTLY UNTESTED ON CAPI**_ Query if the given scheme identified by its UUID is supported on this device. And whether the drm plugin is able to handle the media container format. 

```csharp
public MLResult IsCryptoSchemeSupported(
    MagicLeapNativeBindings.MLUUID uuid,
    string mime,
    out bool isSupported
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| MagicLeapNativeBindings.MLUUID |uuid||
| string |mime||
| out bool |isSupported||






-----------

### delegate void OnEventDelegate {#delegate-void-oneventdelegate}

Delegate for the any OnEvent event. 

```csharp
public delegate void OnEventDelegate(
    DRM drm,
    Event eventInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) |drm|MediaDRM to obtain the content keys for decrypting protected media streams. |
| [Event](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Event.md) |eventInfo|MediaDRM event info associated with a session. |






-----------

### delegate void OnExpirationUpdateDelegate {#delegate-void-onexpirationupdatedelegate}

Delegate for the any OnExpirationUpdate event. 

```csharp
public delegate void OnExpirationUpdateDelegate(
    DRM drm,
    Expiration expirationInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) |drm|MediaDRM to obtain the content keys for decrypting protected media streams. |
| [Expiration](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Expiration.md) |expirationInfo|MediaDRM expiration update info associated with a session. |






-----------

### delegate void OnKeyStatusChangeDelegate {#delegate-void-onkeystatuschangedelegate}

Delegate for the any OnKeyStatusChange event. 

```csharp
public delegate void OnKeyStatusChangeDelegate(
    DRM drm,
    KeyStatuses KeyStatuses
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) |drm|MediaDRM to obtain the content keys for decrypting protected media streams. |
| [KeyStatuses](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.KeyStatuses.md) |KeyStatuses|MediaDRM session keys status change info. |






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ProvisionRequest {#mlresult-provisionrequest}

A provision request/response exchange occurs between the app and a provisioning server to retrieve a device certificate. If provisioning is required, the #EVENT&#95;PROVISION&#95;REQUIRED event will be sent to the event handler. MLMediaDRMGetProvisionRequest() is used to obtain the opaque provision request byte array that should be delivered to the provisioning server. 

```csharp
public MLResult ProvisionRequest(
    out byte [] requestData,
    out string defaultURL
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out byte [] |requestData||
| out string |defaultURL||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ProvisionResponse {#mlresult-provisionresponse}

After a provision response is received by the app, it is provided to the [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin using this method. 

```csharp
public MLResult ProvisionResponse(
    byte [] responseData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |responseData||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ReleaseAllSecureStops {#mlresult-releaseallsecurestops}

_**CURRENTLY UNTESTED ON CAPI**_ Remove all the SecureStops. 

```csharp
public MLResult ReleaseAllSecureStops()
```






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ReleaseSecureStops {#mlresult-releasesecurestops}

_**CURRENTLY UNTESTED ON CAPI**_ Process the SecureStop server response message. After authenticating the message, remove the SecureStops identified in the response. 

```csharp
public MLResult ReleaseSecureStops(
    byte [] secureStops
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |secureStops||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetPropertyByteArray {#mlresult-setpropertybytearray}

_**CURRENTLY UNTESTED ON CAPI**_ Set a [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin byte array property value. 

```csharp
public MLResult SetPropertyByteArray(
    Property property,
    byte [] propertyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Property |property||
| byte [] |propertyValue||






-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetPropertyString {#mlresult-setpropertystring}

_**CURRENTLY UNTESTED ON CAPI**_ Set a [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin String property value. 

```csharp
public MLResult SetPropertyString(
    Property property,
    string propertyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Property |property||
| string |propertyValue||






-----------

## Public Events

### OnEvent {#oneventdelegate-onevent}

[Event](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Event.md) used to listen for different drm events. 

```csharp
public OnEventDelegate OnEvent()
```






-----------

### OnExpirationUpdate {#onexpirationupdatedelegate-onexpirationupdate}

[Event](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Event.md) used to listen for when there is an update in expiration. 

```csharp
public OnExpirationUpdateDelegate OnExpirationUpdate()
```






-----------

### OnKeyStatusChange {#onkeystatuschangedelegate-onkeystatuschange}

[Event](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Event.md) used to listen for when a key's status has changed. 

```csharp
public OnKeyStatusChangeDelegate OnKeyStatusChange()
```






-----------

## Public Enums

### EventType {#enums-eventtype}

The type of [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) event. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ProvisionRequired | 1| This event type indicates that the app needs to request a certificate from the provisioning server. The request message data is obtained using MLMediaDRMGetProvisionRequest().   |
| KeyRequired | | This event type indicates that the app needs to request keys from a license server. The request message data is obtained using MLMediaDRMGetKeyRequest().   |
| KeyExpired | | This event type indicates that the licensed usage duration for keys in a session has expired. The keys are no longer valid.   |
| VendorDefined | | This event may indicate some specific vendor-defined condition, see your [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) provider documentation for details.   |
| SessionReclaimed | | This event indicates that a session opened by the app has been reclaimed by the resource manager.   |
| ExpirationUpdate | | This event is issued when a session expiration update occurs, to inform the app about the change in expiration time.   |
| KeysChange | | This event is issued when the keys in a session change status, such as when the license is renewed or expires.   |








-----------

### KeyStatus {#enums-keystatus}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Usable | 0|   |
| Expired | |   |
| OutputNotAllowed | |   |
| Pending | |   |
| InternalError | |   |








-----------

### KeyType {#enums-keytype}

Type of [DRM](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) key. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Streaming | 1| This key request type specifies that the keys will be for online use, they will. not be saved to the device for subsequent use when the device is not connected to a network.   |
| Offline | | This key request type specifies that the keys will be for offline use, they will be saved to the device for use when the device is not connected to a network.   |
| Release | | This key request type specifies that previously saved offline keys should be released.   |








-----------

### Property {#enums-property}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Vendor | |   |
| Version | |   |
| Description | |   |
| Algorithms | |   |
| DeviceUniqueId | |   |








-----------

