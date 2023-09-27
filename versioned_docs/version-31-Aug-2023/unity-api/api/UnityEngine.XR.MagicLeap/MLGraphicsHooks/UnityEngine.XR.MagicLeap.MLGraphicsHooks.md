---
title: MLGraphicsHooks

---

# MLGraphicsHooks



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Fields

### OnPreBeginRenderFrame {#onprebeginrenderframedelegate-onprebeginrenderframe}

```csharp

public static OnPreBeginRenderFrameDelegate OnPreBeginRenderFrame { get; set; }

```






-----------

## Public Methods

### delegate void OnPreBeginRenderFrameDelegate {#delegate-void-onprebeginrenderframedelegate}

```csharp
public delegate void OnPreBeginRenderFrameDelegate()
```






-----------

### void RequestAlphaBlendFrameRendering {#void-requestalphablendframerendering}

```csharp
public static void RequestAlphaBlendFrameRendering(
    bool useAlphaBlend
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |useAlphaBlend||






-----------

### void RequestPredictedSnapshots {#void-requestpredictedsnapshots}

```csharp
public static void RequestPredictedSnapshots(
    bool useSnapshots
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |useSnapshots||






-----------

### void Shutdown {#void-shutdown}

```csharp
public static void Shutdown()
```






-----------

## Public Attributes

### ClientHandle {#ulong-clienthandle}

```csharp

public static ulong ClientHandle => NativeBindings.MLUnityGraphicsGetHandle();

```






-----------


