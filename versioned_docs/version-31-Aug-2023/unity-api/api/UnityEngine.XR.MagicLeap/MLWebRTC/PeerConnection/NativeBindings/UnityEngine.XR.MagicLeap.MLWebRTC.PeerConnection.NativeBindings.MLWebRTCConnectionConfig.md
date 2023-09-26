---
title: MLWebRTCConnectionConfig
summary: the native representation of the mlwebrtc connection configuration. 

---

# MLWebRTCConnectionConfig




The native representation of the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) connection configuration.   





## Public Attributes

### IceServers {#intptr-iceservers}

Pointer to the array of ice servers. 

```csharp

public IntPtr IceServers;

```






-----------

### NumIceServers {#uint-numiceservers}

Number of ice servers the above pointer can step through. 

```csharp

public uint NumIceServers;

```






-----------

### ProxyConfig {#intptr-proxyconfig}

(Optional) Config for a forward proxy 

```csharp

public IntPtr ProxyConfig;

```






-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


