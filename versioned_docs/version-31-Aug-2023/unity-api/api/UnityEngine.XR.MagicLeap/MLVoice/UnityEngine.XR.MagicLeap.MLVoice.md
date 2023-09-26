---
title: MLVoice
summary: apis for the voice service system. 

---

# MLVoice



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


APIs for the voice service system.   [More...](#detailed-description)  


Inherits from: <br></br>[MLAutoAPISingleton< MLVoice >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public class MLVoice : MLAutoAPISingleton< MLVoice > 
```


**Details**

APIs for the voice service system. 

To use the voice feature (with a specific application's intent list), the application should send a Scriptable Object called [MLVoiceIntentsConfiguration](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.md), Located under Assets/Magic Leap/Voice Intents Configuration, with the application's voice intents data to [MLVoice.SetupVoiceIntents()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#mlresult-setupvoiceintents).

Name, id, and value should be unique. Value is the phrase needed to be spoken out loud after "Hey Magic Leap" " | " may be used in the configuration file's value field to indicate multiple values tied to the same name and id. 





-----------



## Public Fields

### OnVoiceEvent {#onvoiceeventdelegate-onvoiceevent}

Event invoked for when a data channel opens. 

```csharp

public static OnVoiceEventDelegate OnVoiceEvent { get; set; }

```

| Type | Description  | 
|--|--|
| [OnVoiceEventDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#delegate-void-onvoiceeventdelegate) | This callback will be invoked whenever a voice intent event is detected.  |





-----------

## Public Methods

### delegate void OnVoiceEventDelegate {#delegate-void-onvoiceeventdelegate}

This callback will be invoked whenever a voice intent event is detected. 

```csharp
public delegate void OnVoiceEventDelegate(
    in bool wasSuccessful,
    in IntentEvent voiceEvent
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in bool |wasSuccessful|Voice event handling result. In case of false, voiceEvent member variables should be ignored. (voiceEvent.EventName will be NULL)|
| in [IntentEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.IntentEvent.md) |voiceEvent|Voice intent event.|


**Details**

/// 





-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetupVoiceIntents {#mlresult-setupvoiceintents}

Configures Settings sent, Sets the callbacks for voice intent events, and starts processing. 

```csharp
public static MLResult SetupVoiceIntents(
    MLVoiceIntentsConfiguration voiceConfiguration
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLVoiceIntentsConfiguration](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.md) |voiceConfiguration|[MLVoiceIntentsConfiguration](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.md) scriptable object that contains the App Intents data. Memory of this variable is managed by user. |






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed due to an invalid param. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if Successfully set settings, callbacks, and starts processing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.MLVoiceResult&#95;IntentDisabled  if failed to set the callbacks or settings because required voice intent feature is disabled in system settings. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the operation failed with an unspecified error. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetupVoiceIntents {#mlresult-setupvoiceintents}

Configures Settings sent, Sets the callbacks for voice intent events, and starts processing. 

```csharp
public static MLResult SetupVoiceIntents(
    string JSONString
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |JSONString|The JSON file with the voice intents data in the proper format. |


**Details**

When providing a string instead of the [MLVoiceIntentsConfiguration](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.md) Scriptable Object no validation is done to confirm proper format. 





**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed due to an invalid param. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if Successfully set settings, callbacks, and starts processing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.MLVoiceResult&#95;IntentDisabled  if failed to set the callbacks or settings because required voice intent feature is disabled in system settings. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the operation failed with an unspecified error. 



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Stop {#mlresult-stop}

Stop unsets callbacks and stops processing. This is not necessary for shutdown. This is only needed if a user wants to stop processing at runtime after call [MLVoice.SetupVoiceIntents](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#mlresult-setupvoiceintents). [MLVoice](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md) can be restarted by calling [MLVoice.SetupVoiceIntents](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#mlresult-setupvoiceintents). 

```csharp
public static MLResult Stop()
```






**Returns**: [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.InvalidParam](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed due to an invalid param. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.Ok](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if Successfully unset callbacks and stops processing. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  MLResult.Code.MLVoiceResult&#95;IntentDisabled  if failed because required voice intent feature is disabled in system settings. [MLResult.Result](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result) will be  [MLResult.Code.UnspecifiedFailure](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if the operation failed with an unspecified error. 



-----------

## Protected Methods

### OnApplicationPause {#override-void-onapplicationpause}

Callback sent to all [MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application pause. 

```csharp
protected virtual override void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|True if the application is paused, else False. |




**Reimplements**: [OnApplicationPause](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-onapplicationpause)



-----------

### StartAPI {#override-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

API-specific cleanup. Will be called whenever [MLDevice](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Attributes

### VoiceEnabled {#bool-voiceenabled}

Checks voice intent feature is enabled in the system. 

```csharp

public static bool VoiceEnabled => Instance.isEnabled();

```






-----------

## Public Enums

### NoIntentReason {#enums-nointentreason}

No intent reason code in voice event. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoReason | | In case of success   |
| Silence | | When the State in [IntentEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.IntentEvent.md) is either [MLVoice.State.SessionEndedTimeout](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#enums-sessionendedtimeout) or [MLVoice.State.SessionEndedError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#enums-sessionendederror).   |
| NoMatch | | When the State in [IntentEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.IntentEvent.md) is [MLVoice.State.SessionEndedNoIntent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#enums-sessionendednointent).   |








-----------

### State {#enums-state}

Voice state in voice event. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| HotwordDetected | | Intent hotword detected, Automatic Speech Recognition (ASR) session is going to start.   |
| SessionEnded | | Voice UI is stopped, ASR session is going to stop.   |
| ISessionEndedAborted | | ASR session is stopped due to abort.   |
| SessionEndedNoIntent | | ASR session is stopped without detecting an intent.   |
| SessionEndedTimeout | | ASR session is stopped due to timeout.   |
| SessionEndedError | | ASR session is stopped due to error.   |
| Ready | | Intent mode is started and ready.   |
| NotAvailable | | Intent mode is stopped and not available.   |








-----------


