---
title: NativeBindings
summary: see ml-media-drm.h for additional comments. 

---

# NativeBindings




See ml&#95;media&#95;drm.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMByteArrayAllocAndCopy {#mlresultcode-mlmediadrmbytearrayallocandcopy}

Allocate and Copy to byte array buffer. 

```csharp
public MLResult.Code MLMediaDRMByteArrayAllocAndCopy(
    IntPtr CopyFrom,
    uint Size,
    out MLMediaDRMByteArray OutArray
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |CopyFrom||
| uint |Size||
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |OutArray|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMByteArrayAllocate {#mlresultcode-mlmediadrmbytearrayallocate}

String property name: identifies the maker of the [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin. 

```csharp
public MLResult.Code MLMediaDRMByteArrayAllocate(
    uint Size,
    out MLMediaDRMByteArray OutArray
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |Size||
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |OutArray|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMByteArrayListRelease {#mlresultcode-mlmediadrmbytearraylistrelease}

Release list of byte array buffer. 

```csharp
public MLResult.Code MLMediaDRMByteArrayListRelease(
    ref MLMediaDRMByteArrayList Array
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLMediaDRMByteArrayList](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArrayList.md) |Array|Data type containing list of byte array buffers and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMByteArrayRelease {#mlresultcode-mlmediadrmbytearrayrelease}

Release byte array buffer. 

```csharp
public MLResult.Code MLMediaDRMByteArrayRelease(
    ref MLMediaDRMByteArray array
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |array|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMCloseSession {#mlresultcode-mlmediadrmclosesession}

Closes a session that was previously opened. 

```csharp
public MLResult.Code MLMediaDRMCloseSession(
    ulong drmHandle,
    ref MLMediaDRMByteArray sessionId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |drmHandle||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |sessionId|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMCreate {#mlresultcode-mlmediadrmcreate}

Create a 

```csharp
public MLResult.Code MLMediaDRMCreate(
    Native.MagicLeapNativeBindings.MLUUID uuid,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Native.MagicLeapNativeBindings.MLUUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUID.md) |uuid|Universally unique identifier |
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMDecrypt {#mlresultcode-mlmediadrmdecrypt}

Decrypt the data referenced by input using algorithm if specified, and write the encrypted result into output. The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult.Code MLMediaDRMDecrypt(
    ulong MediaDrm,
    ref MLMediaDRMByteArray SessionId,
    ref MLMediaDRMCryptoInputParam CryptoKeyParam,
    ref MLMediaDRMByteArray Input,
    out MLMediaDRMByteArray Output
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMCryptoInputParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMCryptoInputParam.md) |CryptoKeyParam|Data type that encapsulates algorithm, key&#95;set&#95;id and IV for Encryption/Decryption. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Input|Data type containing byte array buffer and the size. |
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Output|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMEncrypt {#mlresultcode-mlmediadrmencrypt}

Encrypt the data referenced by input using algorithm if specified, and write the encrypted result into output. The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult.Code MLMediaDRMEncrypt(
    ulong MediaDrm,
    ref MLMediaDRMByteArray SessionId,
    ref MLMediaDRMCryptoInputParam CryptoKeyParam,
    ref MLMediaDRMByteArray Input,
    out MLMediaDRMByteArray Output
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMCryptoInputParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMCryptoInputParam.md) |CryptoKeyParam|Data type that encapsulates algorithm, key&#95;set&#95;id and IV for Encryption/Decryption. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Input|Data type containing byte array buffer and the size. |
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Output|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMGetKeyRequest {#mlresultcode-mlmediadrmgetkeyrequest}

A key request/response exchange occurs between the app and a license server to obtain or release keys used to decrypt encrypted content. MLMediaDRMGetKeyRequest() is used to obtain an opaque key request byte array that is delivered to the license server. The opaque key request byte array is returned in out&#95;key&#95;request. request The recommended URL to deliver the key request to is returned in out&#95;key&#95;request. default&#95;URL. After the app has received the key request response from the server, it should deliver to the response to the [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin using the method MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult.Code MLMediaDRMGetKeyRequest(
    ulong drmHandle,
    ref MLMediaDRMByteArray sessionId,
    ref MLMediaDRMKeyRequestInputParam keyRequestParam,
    out MLMediaDRMRequestMessage keyRequest
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |drmHandle||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |sessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMKeyRequestInputParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMKeyRequestInputParam.md) |keyRequestParam|Data type that encapsulates [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) Request input arguments. |
| out [MLMediaDRMRequestMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMRequestMessage.md) |keyRequest|Data type that encapsulates either of the following along with an URL: For [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) Request Message: an opaque key request byte array that should be delivered to the license server. For Provision Request Message: an opaque provision request byte array that should be delivered to the provisioning server. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMGetPropertyByteArray {#mlresultcode-mlmediadrmgetpropertybytearray}

Read a [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin byte array property value, given the property name. 

```csharp
public MLResult.Code MLMediaDRMGetPropertyByteArray(
    ulong MediaDrm,
    string PropertyName,
    out MLMediaDRMByteArray OutPropertyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| string |PropertyName||
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |OutPropertyValue|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMGetPropertyString {#mlresultcode-mlmediadrmgetpropertystring}

Read a [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin String property value, given the property name. 

```csharp
public MLResult.Code MLMediaDRMGetPropertyString(
    ulong MediaDrm,
    string PropertyName,
    out string OutPropertyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| string |PropertyName||
| out string |OutPropertyValue||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMGetProvisionRequest {#mlresultcode-mlmediadrmgetprovisionrequest}

A provision request/response exchange occurs between the app and a provisioning server to retrieve a device certificate. If provisioning is required, the #EVENT&#95;PROVISION&#95;REQUIRED event will be sent to the event handler. MLMediaDRMGetProvisionRequest() is used to obtain the opaque provision request byte array that should be delivered to the provisioning server. 

```csharp
public MLResult.Code MLMediaDRMGetProvisionRequest(
    ulong drmHandle,
    string certType,
    out MLMediaDRMRequestMessage provisionRequest
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |drmHandle||
| string |certType||
| out [MLMediaDRMRequestMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMRequestMessage.md) |provisionRequest|Data type that encapsulates either of the following along with an URL: For [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) Request Message: an opaque key request byte array that should be delivered to the license server. For Provision Request Message: an opaque provision request byte array that should be delivered to the provisioning server. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMGetSecureStop {#mlresultcode-mlmediadrmgetsecurestop}

Access secure stop by secure stop ID. 

```csharp
public MLResult.Code MLMediaDRMGetSecureStop(
    ulong MediaDrm,
    ref MLMediaDRMByteArray SecureStopId,
    out MLMediaDRMByteArray SecureStop
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SecureStopId|Data type containing byte array buffer and the size. |
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SecureStop|Data type containing byte array buffer and the size. |




**See**: MLMediaDRMGetSecureStops() 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMGetSecureStops {#mlresultcode-mlmediadrmgetsecurestops}

Access all secure stops. Secure Stop: A means of enforcing limits on the number of concurrent streams per subscriber across devices is provided via #SecureStop. This is achieved by securely monitoring the lifetime of sessions. Information from the server related to the current playback session is written to persistent storage on the device when each #MediaCrypto object is created. In the normal case, playback will be completed, the session destroyed and the Secure Stops will be queried. The app queries secure stops and forwards the secure stop message to the server which verifies the signature and notifies the server side database that the session destruction has been confirmed. The persisted record on the client is only removed after positive confirmation that the server received the message using releaseSecureStops(). 

```csharp
public MLResult.Code MLMediaDRMGetSecureStops(
    ulong MediaDrm,
    out MLMediaDRMByteArrayList SecureStops
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| out [MLMediaDRMByteArrayList](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArrayList.md) |SecureStops|Data type containing list of byte array buffers and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMIsCryptoSchemeSupported {#mlresultcode-mlmediadrmiscryptoschemesupported}

Query if the given scheme identified by its UUID is supported on this device. And whether the drm plugin is able to handle the media container format. 

```csharp
public MLResult.Code MLMediaDRMIsCryptoSchemeSupported(
    Native.MagicLeapNativeBindings.MLUUID Uuid,
    IntPtr MimeType,
    out bool supported
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Native.MagicLeapNativeBindings.MLUUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUID.md) |Uuid|Universally unique identifier |
| IntPtr |MimeType||
| out bool |supported||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMKeyValueArrayAdd {#mlresultcode-mlmediadrmkeyvaluearrayadd}

Add a {key, value} pair to the array of {key, value} pairs. 

```csharp
public MLResult.Code MLMediaDRMKeyValueArrayAdd(
    ref MLMediaDRMKeyValue Pair,
    out MLMediaDRMKeyValueArray OutArray
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLMediaDRMKeyValue](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMKeyValue.md) |Pair|Data type containing {key, value} pair. |
| out [MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMKeyValueArray.md) |OutArray|Data type containing array of {key, value} pair. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMKeyValueArrayAllocate {#mlresultcode-mlmediadrmkeyvaluearrayallocate}

Allocate array of {key, value} pairs. 

```csharp
public MLResult.Code MLMediaDRMKeyValueArrayAllocate(
    uint Size,
    out MLMediaDRMKeyValueArray OutArray
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |Size||
| out [MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMKeyValueArray.md) |OutArray|Data type containing array of {key, value} pair. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMKeyValueArrayRelease {#mlresultcode-mlmediadrmkeyvaluearrayrelease}

Release {key, value} pair array. 

```csharp
public MLResult.Code MLMediaDRMKeyValueArrayRelease(
    ref MLMediaDRMKeyValueArray Array
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMKeyValueArray.md) |Array|Data type containing array of {key, value} pair. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMOpenSession {#mlresultcode-mlmediadrmopensession}

Opens a new session. A session ID is returned. 

```csharp
public MLResult.Code MLMediaDRMOpenSession(
    ulong MediaDrm,
    out MLMediaDRMByteArray sessionId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |sessionId|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMProvideKeyResponse {#mlresultcode-mlmediadrmprovidekeyresponse}

A key response is received from the license server by the app, then it is provided to the [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin using MLMediaDRMProvideKeyResponse(). When the response is for an offline key request, a key&#95;set&#95;id is returned that can be used to later restore the keys to a new session with restoreKeys(). When the response is for a streaming or release request, a null key&#95;set&#95;id is returned. 

```csharp
public MLResult.Code MLMediaDRMProvideKeyResponse(
    ulong drmHandle,
    ref MLMediaDRMByteArray sessionId,
    ref MLMediaDRMByteArray response,
    out MLMediaDRMByteArray keySetId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |drmHandle||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |sessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |response|Data type containing byte array buffer and the size. |
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |keySetId|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMProvideProvisionResponse {#mlresultcode-mlmediadrmprovideprovisionresponse}

After a provision response is received by the app, it is provided to the [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin using this method. 

```csharp
public MLResult.Code MLMediaDRMProvideProvisionResponse(
    ulong drmHandle,
    ref MLMediaDRMByteArray response,
    out MLMediaDRMByteArray certificate,
    out MLMediaDRMByteArray wrappedKey
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |drmHandle||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |response|Data type containing byte array buffer and the size. |
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |certificate|Data type containing byte array buffer and the size. |
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |wrappedKey|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMQueryKeyStatus {#mlresultcode-mlmediadrmquerykeystatus}

Request an informative description of the key status for the session. The status is in the form of {key, value} pairs. Since [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) license policies vary by vendor, the specific status field names are determined by each [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) vendor. Refer to your [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) provider documentation for definitions of the field names for a particular [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin. 

```csharp
public MLResult.Code MLMediaDRMQueryKeyStatus(
    ulong MediaDrm,
    ref MLMediaDRMByteArray sessionId,
    out MLMediaDRMKeyValueArray OutInfoMap
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |sessionId|Data type containing byte array buffer and the size. |
| out [MLMediaDRMKeyValueArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMKeyValueArray.md) |OutInfoMap|Data type containing array of {key, value} pair. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMRelease {#mlresultcode-mlmediadrmrelease}

Release the 

```csharp
public MLResult.Code MLMediaDRMRelease(
    ulong drmHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |drmHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMReleaseAllSecureStops {#mlresultcode-mlmediadrmreleaseallsecurestops}

Remove all the SecureStops. 

```csharp
public MLResult.Code MLMediaDRMReleaseAllSecureStops(
    ulong MediaDrm
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMReleaseSecureStops {#mlresultcode-mlmediadrmreleasesecurestops}

Process the SecureStop server response message. After authenticating the message, remove the SecureStops identified in the response. 

```csharp
public MLResult.Code MLMediaDRMReleaseSecureStops(
    ulong MediaDrm,
    ref MLMediaDRMByteArray SecureStop
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SecureStop|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMRemoveKeys {#mlresultcode-mlmediadrmremovekeys}

Remove the current keys from a session. 

```csharp
public MLResult.Code MLMediaDRMRemoveKeys(
    ulong MediaDrm,
    ref MLMediaDRMByteArray SessionId,
    ref MLMediaDRMByteArray KeySetId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |KeySetId|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMRequestMessageRelease {#mlresultcode-mlmediadrmrequestmessagerelease}

Release Request Message. 

```csharp
public MLResult.Code MLMediaDRMRequestMessageRelease(
    ref MLMediaDRMRequestMessage Request
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLMediaDRMRequestMessage](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMRequestMessage.md) |Request|Data type that encapsulates either of the following along with an URL: For [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) Request Message: an opaque key request byte array that should be delivered to the license server. For Provision Request Message: an opaque provision request byte array that should be delivered to the provisioning server. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMRestoreKeys {#mlresultcode-mlmediadrmrestorekeys}

Restore persisted offline keys into a new session. key&#95;set&#95;id identifies the keys to load, obtained from a prior call to MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult.Code MLMediaDRMRestoreKeys(
    ulong MediaDrm,
    ref MLMediaDRMByteArray sessionId,
    ref MLMediaDRMByteArray KeySetId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |sessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |KeySetId|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMSetOnEventListenerEx {#mlresultcode-mlmediadrmsetoneventlistenerex}

Register a callback to be invoked when an event occurs. 

```csharp
public MLResult.Code MLMediaDRMSetOnEventListenerEx(
    ulong MediaDrm,
    ref MLMediaDRMEventCallbacks Listener,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMEventCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMEventCallbacks.md) |Listener|Data type containing array of {key, value} pair. |
| IntPtr |data||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMSetPropertyByteArray {#mlresultcode-mlmediadrmsetpropertybytearray}

Set a [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin byte array property value. 

```csharp
public MLResult.Code MLMediaDRMSetPropertyByteArray(
    ulong MediaDrm,
    string PropertyName,
    ref MLMediaDRMByteArray PropertyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| string |PropertyName||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |PropertyValue|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMSetPropertyString {#mlresultcode-mlmediadrmsetpropertystring}

Set a [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin String property value. 

```csharp
public MLResult.Code MLMediaDRMSetPropertyString(
    ulong MediaDrm,
    string PropertyName,
    string PropertyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| string |PropertyName||
| string |PropertyValue||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMSign {#mlresultcode-mlmediadrmsign}

Generate a signature using the specified algorithm (if provided) over the message data and store the signature. The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult.Code MLMediaDRMSign(
    ulong MediaDrm,
    ref MLMediaDRMByteArray SessionId,
    ref MLMediaDRMHMACInputParam HMACParam,
    ref MLMediaDRMByteArray Message,
    out MLMediaDRMByteArray Signature
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMHMACInputParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMHMACInputParam.md) |HMACParam|Data type that encapsulates algorithm, key&#95;set&#95;id for HMAC based Sign/Verify. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Message|Data type containing byte array buffer and the size. |
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Signature|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMSignRSA {#mlresultcode-mlmediadrmsignrsa}

Generate a signature using the specified RSA [Key](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md) and algorithm. 

```csharp
public MLResult.Code MLMediaDRMSignRSA(
    ulong MediaDrm,
    ref MLMediaDRMByteArray SessionId,
    ref MLMediaDRMRSAInputParam HMACParam,
    ref MLMediaDRMByteArray Message,
    out MLMediaDRMByteArray Signature
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMRSAInputParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMRSAInputParam.md) |HMACParam|Data type that encapsulates algorithm, wrapped&#95;key for RSA operation. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Message|Data type containing byte array buffer and the size. |
| out [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Signature|Data type containing byte array buffer and the size. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaDRMVerify {#mlresultcode-mlmediadrmverify}

Perform a signature verification using the specified algorithm (if specified) over the message data referenced by the message parameter. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult.Code MLMediaDRMVerify(
    ulong MediaDrm,
    ref MLMediaDRMByteArray SessionId,
    ref MLMediaDRMHMACInputParam HMACParam,
    ref MLMediaDRMByteArray Message,
    ref MLMediaDRMByteArray Signature,
    out bool IsMatch
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |MediaDrm||
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |SessionId|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMHMACInputParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMHMACInputParam.md) |HMACParam|Data type that encapsulates algorithm, key&#95;set&#95;id for HMAC based Sign/Verify. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Message|Data type containing byte array buffer and the size. |
| ref [MLMediaDRMByteArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMByteArray.md) |Signature|Data type containing byte array buffer and the size. |
| out bool |IsMatch||






-----------

### delegate void OnEventDelegate {#delegate-void-oneventdelegate}

```csharp
public delegate void OnEventDelegate(
    ulong handle,
    ref MLMediaDRMEventInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLMediaDRMEventInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMEventInfo.md) |info|MediaDRM event info associated with a session. |






-----------

### delegate void OnExpirationUpdateDelegate {#delegate-void-onexpirationupdatedelegate}

```csharp
public delegate void OnExpirationUpdateDelegate(
    ulong handle,
    ref MLMediaDRMExpirationUpdateInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLMediaDRMExpirationUpdateInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMExpirationUpdateInfo.md) |info|MediaDRM expiration update info associated with a session. |






-----------

### delegate void OnKeyStatusChangeDelegate {#delegate-void-onkeystatuschangedelegate}

```csharp
public delegate void OnKeyStatusChangeDelegate(
    ulong handle,
    ref MLMediaDRMKeyStatusInfo info
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [MLMediaDRMKeyStatusInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.NativeBindings.MLMediaDRMKeyStatusInfo.md) |info|MediaDRM session keys status change info. |






-----------


