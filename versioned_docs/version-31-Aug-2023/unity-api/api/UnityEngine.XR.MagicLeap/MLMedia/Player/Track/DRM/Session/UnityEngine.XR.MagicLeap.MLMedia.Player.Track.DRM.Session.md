---
title: Session
summary: a drm session that's required for a media player track to be prepared. 

---

# Session




A [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) session that's required for a media player track to be prepared.   





## Public Fields

### Drm {#drm-drm}

The drm this session is associated with. 

```csharp

public DRM Drm { get; set; }

```

| Type | Description  | 
|--|--|
| [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) | MediaDRM to obtain the content keys for decrypting protected media streams.  |





-----------

### IsPrepared {#bool-isprepared}

Determines if the session is prepared or not. 

```csharp

public bool IsPrepared { get; set; }

```






-----------

## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) AddKeyValue {#mlresult-addkeyvalue}

_**CURRENTLY UNTESTED ON CAPI**_ Add a {key, value} pair to the array of {key, value} pairs. 

```csharp
public MLResult AddKeyValue(
    KeyValuePair< string, string > pair,
    out KeyValuePair< string, string > [] allKeys
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| KeyValuePair&lt; string, string &gt; |pair||
| out KeyValuePair&lt; string, string &gt; [] |allKeys||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) AllocateKeyValueArray {#mlresult-allocatekeyvaluearray}

_**CURRENTLY UNTESTED ON CAPI**_ Allocate array of {key, value} pairs. 

```csharp
public MLResult AllocateKeyValueArray(
    uint size,
    out KeyValuePair< string, string > [] allKeys
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |size||
| out KeyValuePair&lt; string, string &gt; [] |allKeys||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Close {#mlresult-close}

Closes a session that was previously opened. 

```csharp
public MLResult Close()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Decrypt {#mlresult-decrypt}

_**CURRENTLY UNTESTED ON CAPI**_ Decrypt the data referenced by input using algorithm if specified, and write the encrypted result into output. The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult Decrypt(
    CryptoKeyParam cryptoKeyParam,
    byte [] input,
    out byte [] output
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [CryptoKeyParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/Session/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Session.CryptoKeyParam.md) |cryptoKeyParam||
| byte [] |input||
| out byte [] |output||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Encrypt {#mlresult-encrypt}

_**CURRENTLY UNTESTED ON CAPI**_ Encrypt the data referenced by input using algorithm if specified, and write the encrypted result into output. The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult Encrypt(
    CryptoKeyParam cryptoKeyParam,
    byte [] input,
    out byte [] output
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [CryptoKeyParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/Session/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Session.CryptoKeyParam.md) |cryptoKeyParam||
| byte [] |input||
| out byte [] |output||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetKeyValues {#mlresult-getkeyvalues}

_**CURRENTLY UNTESTED ON CAPI**_ Request an informative description of the key status for the session. The status is in the form of {key, value} pairs. Since [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) license policies vary by vendor, the specific status field names are determined by each [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) vendor. Refer to your [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) provider documentation for definitions of the field names for a particular [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin. 

```csharp
public MLResult GetKeyValues(
    out KeyValuePair< string, string > [] keyValues
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out KeyValuePair&lt; string, string &gt; [] |keyValues||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) KeysRequest {#mlresult-keysrequest}

A key request/response exchange occurs between the app and a license server to obtain or release keys used to decrypt encrypted content. MLMediaDRMGetKeyRequest() is used to obtain an opaque key request byte array that is delivered to the license server. The opaque key request byte array is returned in out&#95;key&#95;request. request The recommended URL to deliver the key request to is returned in out&#95;key&#95;request. default&#95;URL. After the app has received the key request response from the server, it should deliver to the response to the [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin using the method MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult KeysRequest(
    out byte [] requestData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out byte [] |requestData||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) KeysResponse {#mlresult-keysresponse}

A key response is received from the license server by the app, then it is provided to the [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) engine plugin using MLMediaDRMProvideKeyResponse(). When the response is for an offline key request, a key&#95;set&#95;id is returned that can be used to later restore the keys to a new session with restoreKeys(). When the response is for a streaming or release request, a null key&#95;set&#95;id is returned. 

```csharp
public MLResult KeysResponse(
    byte [] responseData,
    out byte [] keySetData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |responseData||
| out byte [] |keySetData||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Open {#mlresult-open}

Opens a new session. 

```csharp
public MLResult Open()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Prepare {#mlresult-prepare}

Prepare [DRM](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.md) for the selected media (either audio or video) track with the CurrentSession member. 

```csharp
public MLResult Prepare()
```






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) RemoveKeys {#mlresult-removekeys}

_**CURRENTLY UNTESTED ON CAPI**_ Remove the current keys from a session. 

```csharp
public MLResult RemoveKeys(
    byte [] keySetId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |keySetId||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) RestoreKeys {#mlresult-restorekeys}

_**CURRENTLY UNTESTED ON CAPI**_ Restore persisted offline keys into a new session. key&#95;set&#95;id identifies the keys to load, obtained from a prior call to MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult RestoreKeys(
    byte [] keySetId
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |keySetId||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Sign {#mlresult-sign}

_**CURRENTLY UNTESTED ON CAPI**_ Generate a signature using the specified algorithm (if provided) over the message data and store the signature. The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult Sign(
    HMACParam hmacParam,
    byte [] message,
    out byte [] signature
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [HMACParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/Session/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Session.HMACParam.md) |hmacParam||
| byte [] |message||
| out byte [] |signature||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Sign {#mlresult-sign}

_**CURRENTLY UNTESTED ON CAPI**_ Generate a signature using the specified algorithm (if provided) over the message data and store the signature. The key to use is identified by the 16 byte keyId. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult Sign(
    RSAParam rsaParam,
    byte [] message,
    out byte [] signature
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [RSAParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/Session/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Session.RSAParam.md) |rsaParam||
| byte [] |message||
| out byte [] |signature||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Verify {#mlresult-verify}

_**CURRENTLY UNTESTED ON CAPI**_ Perform a signature verification using the specified algorithm (if specified) over the message data referenced by the message parameter. The key must have been loaded into the session using MLMediaDRMProvideKeyResponse(). 

```csharp
public MLResult Verify(
    HMACParam hmacParam,
    byte [] message,
    byte [] signature,
    out bool isMatch
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [HMACParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/Session/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Session.HMACParam.md) |hmacParam||
| byte [] |message||
| byte [] |signature||
| out bool |isMatch||






-----------


