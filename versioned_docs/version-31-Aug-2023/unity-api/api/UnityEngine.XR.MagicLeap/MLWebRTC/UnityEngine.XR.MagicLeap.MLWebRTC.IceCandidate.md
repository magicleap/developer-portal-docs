---
title: IceCandidate
summary: class that represents an ice candidate used by the mlwebrtc api. 

---

# IceCandidate




Class that represents an ice candidate used by the [MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) API.   





## Public Fields

### Candidate {#string-candidate}

Gets the candidate id. 

```csharp

public string Candidate { get; set; }

```






-----------

### SdpMLineIndex {#int-sdpmlineindex}

Gets the index that indicates which media source is associated with the candidate. 

```csharp

public int SdpMLineIndex { get; set; }

```






-----------

### SdpMid {#string-sdpmid}

Gets the id of the source media component from which the candidate draws data. 

```csharp

public string SdpMid { get; set; }

```






-----------

## Public Methods

### [IceCandidate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceCandidate.md) Create {#icecandidate-create}

Factory method used to create a new [IceCandidate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.IceCandidate.md) object. 

```csharp
public static IceCandidate Create(
    string candidate ="",
    string sdpMid ="",
    int sdpMLineIndex =0
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |candidate|The candidate id.|
| string |sdpMid|The id of the source media component from which the candidate draws data.|
| int |sdpMLineIndex|Index that indicates which media source is associated with a candidate.|






**Returns**: An ice candidate object with the given handle.



-----------


