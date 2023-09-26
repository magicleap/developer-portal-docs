---
title: CreateInfo
summary: info to create the native rendering plugin instance with 

---

# CreateInfo




Info to create the native rendering plugin instance with   





## Public Methods

###  CreateInfo {#functions-createinfo}

Construct the info for the native plugin instance 

```csharp
public CreateInfo(
    GCHandle context,
    YcbcrRenderer renderer,
    bool waitForQueueIdleOnSubmit
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| GCHandle |context|GCHandle passed back to the callbacks as the user context|
| [YcbcrRenderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.md) |isReleaseBufferAvailable|If the api supports releasing the native buffer. Pass false to avoid unnecesarry calls from unmanaged to managed layer.|
| bool |isFrameTransformMatrixAvailable|If the api supports a frame transform matrix. Pass false to avoid unnecesarry calls & data copies from unmanaged to managed layer & back.|






-----------

## Public Attributes

### AcquireNextAvailableBufferCallback {#acquirenextavailablebufferdelegate-acquirenextavailablebuffercallback}

Callback invoked by the native plugin to acquire a native buffer. 

```csharp

public AcquireNextAvailableBufferDelegate AcquireNextAvailableBufferCallback;

```






-----------

### AcquireNextAvailableHwBufferCallback {#acquirenextavailablehwbufferdelegate-acquirenextavailablehwbuffercallback}

```csharp

public AcquireNextAvailableHwBufferDelegate AcquireNextAvailableHwBufferCallback;

```






-----------

### Context {#intptr-context}

User context data provided in the callbacks. 

```csharp

public IntPtr Context;

```






-----------

### GetFrameTransformMatrixCallback {#getframetransformmatrixdelegate-getframetransformmatrixcallback}

Callback invoked by the native plugin to get the frame transform matrix. 

```csharp

public GetFrameTransformMatrixDelegate GetFrameTransformMatrixCallback;

```






-----------

### IsNewFrameAvailableCallback {#isnewframeavailabledelegate-isnewframeavailablecallback}

```csharp

public IsNewFrameAvailableDelegate IsNewFrameAvailableCallback;

```






-----------

### OnCleanupCompleteCallback {#oncleanupcompletedelegate-oncleanupcompletecallback}

```csharp

public OnCleanupCompleteDelegate OnCleanupCompleteCallback;

```






-----------

### OnFirstFrameRenderedCallback {#onfirstframerendereddelegate-onfirstframerenderedcallback}

```csharp

public OnFirstFrameRenderedDelegate OnFirstFrameRenderedCallback;

```






-----------

### OverrideYcbcrConversionSamplerCallback {#overrideycbcrconversionsamplerdelegate-overrideycbcrconversionsamplercallback}

```csharp

public OverrideYcbcrConversionSamplerDelegate OverrideYcbcrConversionSamplerCallback;

```






-----------

### ReleaseBufferCallback {#releasebufferdelegate-releasebuffercallback}

Callback invoked by the native plugin to release a native buffer. 

```csharp

public ReleaseBufferDelegate ReleaseBufferCallback;

```






-----------

### ReleaseHwBufferCallback {#releasehwbufferdelegate-releasehwbuffercallback}

```csharp

public ReleaseHwBufferDelegate ReleaseHwBufferCallback;

```






-----------

### ShouldWaitForQueueIdleOnSubmit {#bool-shouldwaitforqueueidleonsubmit}

```csharp

public bool ShouldWaitForQueueIdleOnSubmit;

```






-----------


