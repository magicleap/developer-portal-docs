---
title: YcbcrRenderer
summary: implements a renderer for android native & hardware buffers vulkan-only. 

---

# YcbcrRenderer



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Implements a renderer for android native & hardware buffers (Vulkan-only).   


Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLCameraBase.Renderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.Renderer.md), <br></br>[UnityEngine.XR.MagicLeap.MLNativeSurfaceYcbcrRenderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLNativeSurfaceYcbcrRenderer.md), <br></br>[UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Renderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/VideoSink/UnityEngine.XR.MagicLeap.MLWebRTC.VideoSink.Renderer.md), <br></br>[UnityEngine.XR.MagicLeap.MLWebView.Renderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.Renderer.md)




## Public Methods

### void Cleanup {#void-cleanup}

Destroy all resources held by the native rendering plugin. 

```csharp
public void Cleanup()
```






-----------

### delegate void OnCleanupCompleteDelegate {#delegate-void-oncleanupcompletedelegate}

```csharp
public delegate void OnCleanupCompleteDelegate()
```






-----------

### delegate void OnFirstFrameRendereredDelegate {#delegate-void-onfirstframerenderereddelegate}

```csharp
public delegate void OnFirstFrameRendereredDelegate()
```






-----------

### void Render {#void-render}

Render the latest native buffer onto the provided Unity texture. Should preferably be called every frame. 

```csharp
public void Render()
```






-----------

### void SetRenderBuffer {#void-setrenderbuffer}

Currently only 1 call after obj instantiation will work 

```csharp
public void SetRenderBuffer(
    RenderTexture renderTexture
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| RenderTexture |renderTexture||






-----------

## Protected Methods

### Initialize {#void-initialize}

Initialize the native api handle & the graphics command buffers. 

```csharp
protected void Initialize(
    bool waitForQueueIdleOnSubmit =false
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |colorSpace|Color space to render in|






-----------

## Protected Attributes

### gcHandle {#gchandle-gchandle}

GCHandle for the callback user context 

```csharp

protected GCHandle gcHandle;

```






-----------

## Public Events

### OnCleanupComplete {#oncleanupcompletedelegate-oncleanupcomplete}

Event fired on Unity's main thread to indicate that resource cleanup is complete in the native plugin and it is now safe to cleanup associated managed resources like the RenderTexture. 

```csharp
public OnCleanupCompleteDelegate OnCleanupComplete()
```






-----------

### OnCleanupComplete_CallbackThread {#oncleanupcompletedelegate-oncleanupcomplete-callbackthread}

Event fired on the callback thread to indicate that resource cleanup is complete in the native plugin and it is now safe to cleanup associated managed resources like the RenderTexture. 

```csharp
public OnCleanupCompleteDelegate OnCleanupComplete_CallbackThread()
```






-----------

### OnFirstFrameRendered {#onfirstframerenderereddelegate-onfirstframerendered}

Event fired to indicate a frame has been rendered on the current RenderTexture for the first time. Apps can use this event to disable UI elements like loading indicators since the RenderTexture will have a valid frame to display. 

```csharp
public OnFirstFrameRendereredDelegate OnFirstFrameRendered()
```






-----------


