---
title: MLRequest
summary: inherit from this if your request should be a class 

---

# MLRequest



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


INHERIT FROM THIS IF YOUR REQUEST SHOULD BE A CLASS   [More...](#detailed-description)  


Inherits from: <br></br>[IMLRequest< Params, Result >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLRequest.md)



## Detailed Description

```csharp
public template <Params ,Result > class MLRequest : IMLRequest< Params, Result > 
```






-----------



## Public Methods

### abstract [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Start {#abstract-start}

```csharp
public virtual abstract MLResult Start(
    Params parameters
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Params |parameters||




**Reimplements**: [Start](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLRequest.md#mlresult-start)



-----------

### abstract [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) TryGetResult {#abstract-trygetresult}

```csharp
public virtual abstract MLResult TryGetResult(
    out Result result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out Result |result||




**Reimplements**: [TryGetResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLRequest.md#mlresult-trygetresult)



-----------

## Protected Methods

### Dispose {#abstract-void-dispose}

```csharp
protected virtual abstract void Dispose(
    bool disposing
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |disposing||




**Reimplemented by**: [Dispose](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/Request/UnityEngine.XR.MagicLeap.MLAnchors.Request.md#override-void-dispose)



-----------

### MLRequest {#functions-mlrequest}

```csharp
protected MLRequest()
```






-----------

## Public Attributes

### Parameters {#params-parameters}

```csharp

public Params Parameters => parameters;

```






-----------

## Protected Attributes

### handle {#ulong-handle}

```csharp

protected ulong handle = MagicLeapNativeBindings.InvalidHandle;

```






-----------

### parameters {#params-parameters}

```csharp

protected Params parameters;

```






-----------


