---
title: NativeBindings

---

# NativeBindings










## Public Methods

### delegate void AcquireNextAvailableBufferDelegate {#delegate-void-acquirenextavailablebufferdelegate}

Delegate signature for the callback invoked by the native rendering plugin, requesting a new native buffer handle. 

```csharp
public delegate void AcquireNextAvailableBufferDelegate(
    ref bool success,
    ref ulong nativeBufferHandle,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref bool |success|Whether a new native buffer handle was acquired|
| ref ulong |nativeBufferHandle|Acquired native buffer handle|
| IntPtr |context|User context passed during instance creation|






-----------

### delegate void AcquireNextAvailableHwBufferDelegate {#delegate-void-acquirenextavailablehwbufferdelegate}

Delegate signature for the callback invoked by the native rendering plugin, requesting a new AHardwareBuffer. 

```csharp
public delegate void AcquireNextAvailableHwBufferDelegate(
    ref bool success,
    ref IntPtr hwBuffer,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref bool |success|Whether a new native buffer handle was acquired|
| ref IntPtr |hwBuffer|Acquired native buffer handle|
| IntPtr |context|User context passed during instance creation|






-----------

### delegate void GetFrameTransformMatrixDelegate {#delegate-void-getframetransformmatrixdelegate}

Delegate signature for the callback invoked by the native rendering plugin, requesting the frame transform matrix for the last acquired native buffer handle. 

```csharp
public delegate void GetFrameTransformMatrixDelegate(
    ref bool success,
    ref Native.MagicLeapNativeBindings.MLMat4f frameMat,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref bool |success|Whether a valid frame transform matrix was provided|
| ref [Native.MagicLeapNativeBindings.MLMat4f](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLMat4f.md) |frameMat|Frame transform matrix|
| IntPtr |context|User context passed during instance creation|






-----------

### delegate void IsNewFrameAvailableDelegate {#delegate-void-isnewframeavailabledelegate}

```csharp
public delegate void IsNewFrameAvailableDelegate(
    ref bool success,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref bool |success||
| IntPtr |context||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLYcbcrRendererCreate {#mlresultcode-mlycbcrrenderercreate}

Create an instance of the [YcbcrRenderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.md). 

```csharp
public MLResult.Code MLYcbcrRendererCreate(
    ref CreateInfo createInfo,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [CreateInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/NativeBindings/UnityEngine.XR.MagicLeap.YcbcrRenderer.NativeBindings.CreateInfo.md) |createInfo|Info used to create the instance|
| out ulong |handle|Handle to the instance|






**Returns**: [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) if instance was created successfully.

[MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam) if one of params was null.

[MLResult.Code.MediaGenericNoInit](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericnoinit) if func was called before Unity graphics was initialized.



-----------

### IntPtr MLYcbcrRendererGetCallbackForPluginEvent {#intptr-mlycbcrrenderergetcallbackforpluginevent}

Get the callback function pointer to be used in CommandBuffer.IssuePluginEvent() for a given rendering plugin event. 

```csharp
public IntPtr MLYcbcrRendererGetCallbackForPluginEvent(
    PluginEvent pluginEvent
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| PluginEvent |pluginEvent|Rendering plugin event to get the callback function pointer for|






**Returns**: Callback function pointer



-----------

### int MLYcbcrRendererGetEventIdForPluginEvent {#int-mlycbcrrenderergeteventidforpluginevent}

Get the event id to be used in CommandBuffer.IssuePluginEvent() for a given rendering plugin event. 

```csharp
public int MLYcbcrRendererGetEventIdForPluginEvent(
    PluginEvent pluginEvent
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| PluginEvent |pluginEvent|Rendering plugin event to get the id for|






**Returns**: Event Id



-----------

### delegate void OnCleanupCompleteDelegate {#delegate-void-oncleanupcompletedelegate}

```csharp
public delegate void OnCleanupCompleteDelegate(
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context||






-----------

### delegate void OnFirstFrameRenderedDelegate {#delegate-void-onfirstframerendereddelegate}

```csharp
public delegate void OnFirstFrameRenderedDelegate(
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context||






-----------

### delegate void OverrideYcbcrConversionSamplerDelegate {#delegate-void-overrideycbcrconversionsamplerdelegate}

```csharp
public delegate void OverrideYcbcrConversionSamplerDelegate(
    ref VkAndroidHardwareBufferFormatPropertiesANDROID hwBufferFormatProperties,
    ref bool samplerChanged,
    ref VkSamplerYcbcrConversionCreateInfo sampler,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [VkAndroidHardwareBufferFormatPropertiesANDROID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.VkAndroidHardwareBufferFormatPropertiesANDROID.md) |hwBufferFormatProperties||
| ref bool |samplerChanged||
| ref [VkSamplerYcbcrConversionCreateInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.VkSamplerYcbcrConversionCreateInfo.md) |sampler||
| IntPtr |context||






-----------

### delegate void ReleaseBufferDelegate {#delegate-void-releasebufferdelegate}

Delegate signature for the callback invoked by the native rendering plugin, requesting the given native buffer to be released. 

```csharp
public delegate void ReleaseBufferDelegate(
    ulong nativeBufferHandle,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |nativeBufferHandle|[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) buffer handle to be released|
| IntPtr |context|User context passed during instance creation|






-----------

### delegate void ReleaseHwBufferDelegate {#delegate-void-releasehwbufferdelegate}

Delegate signature for the callback invoked by the native rendering plugin, requesting the given AHardwareBuffer to be released. 

```csharp
public delegate void ReleaseHwBufferDelegate(
    IntPtr hwBuffer,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |nativeBufferHandle|[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) buffer handle to be released|
| IntPtr |context|User context passed during instance creation|






-----------

## Public Enums

### ColorSpace {#enums-colorspace}

Color spaces supported by the native rendering plugin 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Linear | |   |
| Gamma | |   |








-----------

### PluginEvent {#enums-pluginevent}

Plugin events supported by the native rendering plugin 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SetTexture | | Pass a unity texture and its width, height to the native rendering plugin   |
| Draw | | Draw the latest native buffer onto the unity texture   |
| Cleanup | | Destroy all resources and the renderer instance   |
| AccessTexture | |   |








-----------


