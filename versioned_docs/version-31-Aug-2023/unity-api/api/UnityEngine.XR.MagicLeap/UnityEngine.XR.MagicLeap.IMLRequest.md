---
title: IMLRequest
summary: always inherit from this 

---

# IMLRequest



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


ALWAYS INHERIT FROM THIS   [More...](#detailed-description)  


Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLRequest< Params, Result >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLRequest.md)



## Detailed Description

```csharp
public template <Params ,Result > class IMLRequest; 
```






-----------



## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Start {#mlresult-start}

```csharp
public MLResult Start(
    Params parameters
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Params |parameters||




**Reimplemented by**: [Start](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLRequest.md#abstract-start)



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) TryGetResult {#mlresult-trygetresult}

```csharp
public MLResult TryGetResult(
    out Result result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out Result |result||




**Reimplemented by**: [TryGetResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLRequest.md#abstract-trygetresult)



-----------


