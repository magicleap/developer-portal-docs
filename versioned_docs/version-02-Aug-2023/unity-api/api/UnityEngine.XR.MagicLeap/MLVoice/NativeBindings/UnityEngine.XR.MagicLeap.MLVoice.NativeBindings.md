---
title: NativeBindings
summary: see ml-voice.h for additional comments. 

---

# NativeBindings




See ml&#95;voice.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLVoiceIntentConfigureSettings {#mlresultcode-mlvoiceintentconfiguresettings}

Sets the settings for voice intent events. 

```csharp
public MLResult.Code MLVoiceIntentConfigureSettings(
    ulong handle,
    in IntentSettings voiceSettings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Handle to the voice intent client.|
| in [IntentSettings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentSettings.md) |voiceSettings|Pointer to MLVoiceIntentSettings structure.|


**Details**

App needs to call MLVoiceIntentConfigureSettings at least once before it calls MLVoiceIntentStartProcessing. App can call MLVoiceIntentConfigureSettings anytime it needs to update the voice intents. But such call will trigger updating intent grammar inside speech engine, which may result in a short delay (could be a few seconds depending on the device's workload). So it is not recommended to call the function frequently.





**Returns**: MLResult.Result will be  MLResult.Code.InvalidParam  if failed to set settings for voice intent events due to an invalid param. MLResult.Result will be  MLResult.Code.Ok  if Successfully set settings for voice intent events. MLResult.Result will be  MLResult.Code.MLVoiceResult&#95;IntentDisabled  if failed to set the settings because required voice intent feature is disabled in system settings. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if the operation failed with an unspecified error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLVoiceIntentCreate {#mlresultcode-mlvoiceintentcreate}

Creates a voice intent client. 

```csharp
public MLResult.Code MLVoiceIntentCreate(
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |handle|A handle to the created voice intent client. Only valid if the return value is MLResult.Code.Ok.|






**Returns**: MLResult.Result will be  MLResult.Code.InvalidParam  if failed to create the voice intent client due to an invalid input parameter MLResult.Result will be  MLResult.Code.Ok  if successfully created the voice intent client. MLResult.Result will be  MLResult.Code.PermissionDenied  if failed to create client due to permission (permission).

Permissions: VOICE&#95;INPUT 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLVoiceIntentDestroy {#mlresultcode-mlvoiceintentdestroy}

Destroy a previously created voice intent client. 

```csharp
public MLResult.Code MLVoiceIntentDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Handle to the voice intent client.|






**Returns**: MLResult.Result will be  MLResult.Code.InvalidParam  if failed to destroy the voice intent client due to an invalid input parameter MLResult.Result will be  MLResult.Code.Ok  if successfully destroyed the voice intent client. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLVoiceIntentIsEnabled {#mlresultcode-mlvoiceintentisenabled}

Checks voice intent feature is enabled in the system. 

```csharp
public MLResult.Code MLVoiceIntentIsEnabled(
    ulong handle,
    out bool isEnabled
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Handle to the voice intent client.|
| out bool |isEnabled|Result whether voice intent feature is enabled.|






**Returns**: MLResult.Result will be  MLResult.Code.InvalidParam  if failed to check due to an invalid parameter. MLResult.Result will be  MLResult.Code.Ok  if Successfully checked voice intent feature is enabled. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLVoiceIntentSetCallbacks {#mlresultcode-mlvoiceintentsetcallbacks}

Sets the callbacks for voice intent events. 

```csharp
public MLResult.Code MLVoiceIntentSetCallbacks(
    ulong handle,
    in IntentCallbacks callbacks,
    in IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Handle to the voice intent client.|
| in [IntentCallbacks](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentCallbacks.md) |callbacks|Pointer to MLVoiceIntentCallbacks structure. Set this to NULL to unregister callbacks.|
| in IntPtr |data|Pointer to user payload data (can be NULL).|






**Returns**: MLResult.Result will be  MLResult.Code.InvalidParam  if failed to set callbacks for voice intent events due to an invalid param. MLResult.Result will be  MLResult.Code.Ok  if Successfully set callbacks for voice intent events. MLResult.Result will be  MLResult.Code.MLVoiceResult&#95;IntentDisabled  if failed to set the callbacks because required voice intent feature is disabled in system settings. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if the operation failed with an unspecified error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLVoiceIntentStartProcessing {#mlresultcode-mlvoiceintentstartprocessing}

Starts voice intent processing. This affects system voice service directly and permanently while system is running. Application should use this function carefully. It is strongly encourage to call MLVoiceIntentStopProcessing when the application is paused to avoid unexpected system behavior. 

```csharp
public MLResult.Code MLVoiceIntentStartProcessing(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Handle to the voice intent client.|






**Returns**: MLResult.Result will be  MLResult.Code.InvalidParam  if failed to start processing due to an invalid parameter. MLResult.Result will be  MLResult.Code.Ok  if Successfully started intent processing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if the operation failed with an unspecified error. 



-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLVoiceIntentStopProcessing {#mlresultcode-mlvoiceintentstopprocessing}

Stops voice intent processing. This affects system voice service directly and permanently while system is running. Application should use this function carefully. It is strongly encourage to call this when the application is paused to avoid unexpected system behavior. 

```csharp
public MLResult.Code MLVoiceIntentStopProcessing(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle|Handle to the voice intent client.|






**Returns**: MLResult.Result will be  MLResult.Code.InvalidParam  if failed to stop processing due to an invalid parameter. MLResult.Result will be  MLResult.Code.Ok  if Successfully stopped intent processing. MLResult.Result will be  MLResult.Code.UnspecifiedFailure  if the operation failed with an unspecified error. 



-----------

### delegate void OnVoiceEventDelegate {#delegate-void-onvoiceeventdelegate}

This callback will be invoked whenever a voice intent event is detected. 

```csharp
public delegate void OnVoiceEventDelegate(
    in IntentEventInternal intentEvent,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [IntentEventInternal](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentEventInternal.md) |intentEvent|Voice intent event.|
| IntPtr |data|User data as passed to MLVoiceIntentSetCallbacks().|






-----------


