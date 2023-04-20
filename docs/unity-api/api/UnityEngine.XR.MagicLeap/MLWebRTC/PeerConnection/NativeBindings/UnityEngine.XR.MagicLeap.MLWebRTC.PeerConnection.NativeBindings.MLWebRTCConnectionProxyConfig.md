---
title: MLWebRTCConnectionProxyConfig
summary: native representation of proxy config 

---

# MLWebRTCConnectionProxyConfig




[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) representation of proxy config   





## Public Attributes

### Username {#string-username}

Proxy server auth username 

```csharp

public string Username;

```






-----------

### Type {#mlwebrtcproxytype-type}

Type of proxy 

```csharp

public MLWebRTC.ProxyType Type;

```

| Type | Description  | 
|--|--|
| [MLWebRTC.ProxyType](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md#enums-proxytype) | Protocol for the forward proxy.  |





-----------

### Password {#string-password}

Proxy server auth password 

```csharp

public string Password;

```






-----------

### HostPort {#int-hostport}

Proxy server port 

```csharp

public int HostPort;

```






-----------

### HostAddress {#string-hostaddress}

Proxy server address 

```csharp

public string HostAddress;

```






-----------

### BypassList {#string-bypasslist}

List of urls that should bypass the proxy 

```csharp

public string BypassList;

```






-----------

### AutoDetect {#bool-autodetect}

Attempt to automatically detect proxy 

```csharp

public bool AutoDetect;

```






-----------

### AutoConfigUrl {#string-autoconfigurl}

Url to use to download the proxy config 

```csharp

public string AutoConfigUrl;

```






-----------

