---
title: MLGraphicsHooks

---

# MLGraphicsHooks



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Fields

### OnPreBeginRenderFrame {#onprebeginrenderframedelegate-onprebeginrenderframe}

```csharp

public static OnPreBeginRenderFrameDelegate OnPreBeginRenderFrame { get; set; }

```






-----------

## Public Methods

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

### delegate void OnPreBeginRenderFrameDelegate {#delegate-void-onprebeginrenderframedelegate}

```csharp
public delegate void OnPreBeginRenderFrameDelegate()
```






-----------

## Public Attributes

### ClientHandle {#ulong-clienthandle}

```csharp

public static ulong ClientHandle => NativeBindings.MLUnityGraphicsGetHandle();

```






-----------

