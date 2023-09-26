---
title: ProxyConfig
summary: class that represents an ice server used by the mlwebrtc api. 

---

# ProxyConfig




Class that represents an ice server used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   





## Public Fields

### AutoConfigUrl {#string-autoconfigurl}

Gets url to use for downloading proxy config. 

```csharp

public string AutoConfigUrl { get; set; }

```






-----------

### AutoDetect {#bool-autodetect}

Whether the proxy will be auto-detected. 

```csharp

public bool AutoDetect { get; set; }

```






-----------

### BypassList {#string-bypasslist}

Gets urls which should bypass the proxy. 

```csharp

public string BypassList { get; set; }

```






-----------

### HostAddress {#string-hostaddress}

Gets the proxy server address. 

```csharp

public string HostAddress { get; set; }

```






-----------

### HostPort {#int-hostport}

Gets the proxy server port. 

```csharp

public int HostPort { get; set; }

```






-----------

### Password {#string-password}

Gets the password to authenticate the proxy server. 

```csharp

public string Password { get; set; }

```






-----------

### Type {#proxytype-type}

Gets the type of this proxy config. 

```csharp

public ProxyType Type { get; set; }

```

| Type | Description  | 
|--|--|
| [ProxyType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#enums-proxytype) | Protocol for the forward proxy.  |





-----------

### Username {#string-username}

Gets the username to authenticate the proxy server. 

```csharp

public string Username { get; set; }

```






-----------

## Public Methods

### [ProxyConfig](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.ProxyConfig.md) Create {#proxyconfig-create}

Factory method used to create a new [IceServer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceServer.md) object. 

```csharp
public static ProxyConfig Create(
    ProxyType type,
    string hostAddress,
    int hostPort,
    string userName =null,
    string password =null,
    bool autoDetect =false,
    string autoConfigUrl =null,
    string bypassList =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ProxyType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#enums-proxytype) |uri|The uri of the ice server.|
| string |userName|The username to log into the ice server.|
| int |password|The password to log into the ice server.|
| string |userName||
| string |password||
| bool |autoDetect||
| string |autoConfigUrl||
| string |bypassList||






**Returns**: An ice candidate object with the given handle.



-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------


