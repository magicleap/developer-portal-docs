---
title: IceServer
summary: class that represents an ice server used by the mlwebrtc api. 

---

# IceServer




Class that represents an ice server used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   





## Public Fields

### Password {#string-password}

Gets the password to log into the ice server. 

```csharp

public string Password { get; set; }

```






-----------

### Uri {#string-uri}

Gets the uri of the ice server. 

```csharp

public string Uri { get; set; }

```






-----------

### UserName {#string-username}

Gets the username to log into the ice server. 

```csharp

public string UserName { get; set; }

```






-----------

## Public Methods

### [IceServer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceServer.md) Create {#iceserver-create}

Factory method used to create a new [IceServer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceServer.md) object. 

```csharp
public static IceServer Create(
    string uri,
    string userName =null,
    string password =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |uri|The uri of the ice server.|
| string |userName|The username to log into the ice server.|
| string |password|The password to log into the ice server.|






**Returns**: An ice candidate object with the given handle.



-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------


