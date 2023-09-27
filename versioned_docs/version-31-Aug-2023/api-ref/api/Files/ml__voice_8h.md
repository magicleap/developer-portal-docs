---
title: ml_voice.h

---

# ml_voice.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLInputVoiceAppIntentSlot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_voice_app_intent_slot.md)** <br></br>A structure containing voice app-intent slot in voice event.  |
| struct | **[MLVoiceIntentEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md)** <br></br>A structure containing voice intent event.  |
| struct | **[MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md)** <br></br>A structure containing callbacks for voice intent events.  |
| struct | **[MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md)** <br></br>A structure containing settings for voice app intent.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLInputVoiceAppIntentSlot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_voice_app_intent_slot.md) | **[MLInputVoiceAppIntentSlot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#struct-mlinputvoiceappintentslot)** <br></br>A structure containing voice app-intent slot in voice event.  |
| typedef struct [MLVoiceIntentEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md) | **[MLVoiceIntentEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#struct-mlvoiceintentevent)** <br></br>A structure containing voice intent event.  |
| typedef struct [MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) | **[MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#struct-mlvoiceintentcallbacks)** <br></br>A structure containing callbacks for voice intent events.  |
| typedef struct [MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) | **[MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#struct-mlvoiceintentsettings)** <br></br>A structure containing settings for voice app intent.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 30](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-anonymous-enum-30)** <br></br> { <br></br>[MLResultAPIPrefix_Voice](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlresultapiprefix-voice) = ( 0xbe7a  << 16)<br></br>} |
| enum | **[MLVoiceResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlvoiceresult)** <br></br> { <br></br>[MLVoiceResult_IntentDisabled](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoiceresult-intentdisabled) = MLResultAPIPrefix_Voice,<br></br> [MLVoiceResult_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoiceresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Return values for Voice API calls.  |
| enum | **[MLVoiceState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlvoicestate)** <br></br> { <br></br>[MLVoiceState_IntentHotwordDetected](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-intenthotworddetected) = 0,<br></br> [MLVoiceState_IntentSessionEnded](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-intentsessionended) = 1,<br></br> [MLVoiceState_IntentSessionEndedAborted](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-intentsessionendedaborted) = 2,<br></br> [MLVoiceState_IntentSessionEndedNoIntent](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-intentsessionendednointent) = 3,<br></br> [MLVoiceState_IntentSessionEndedTimeout](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-intentsessionendedtimeout) = 4,<br></br> [MLVoiceState_IntentSessionEndedError](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-intentsessionendederror) = 5,<br></br> [MLVoiceState_IntentReady](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-intentready) = 6,<br></br> [MLVoiceState_IntentNotAvailable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-intentnotavailable) = 7,<br></br> [MLVoiceState_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoicestate-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Voice state in voice event.  |
| enum | **[MLVoiceIntentNoIntentReason](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlvoiceintentnointentreason)** <br></br> { <br></br>[MLVoiceIntentNoIntentReason_NoReason](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoiceintentnointentreason-noreason) = 0,<br></br> [MLVoiceIntentNoIntentReason_Silence](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoiceintentnointentreason-silence) = 1,<br></br> [MLVoiceIntentNoIntentReason_NoMatch](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoiceintentnointentreason-nomatch) = 2,<br></br> [MLVoiceIntentNoIntentReason_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__voice_8h.md#enums-mlvoiceintentnointentreason-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>No intent reason code in voice event.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLVoiceIntentCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentcallbacksinit)**([MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) * inout_callbacks)<br></br>Initializes default values for [MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md).  |
| void | **[MLVoiceIntentSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentsettingsinit)**([MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) * inout_settings)<br></br>Initializes default values for [MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md).  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLVoiceIntentCreate](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentcreate)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a voice intent client.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLVoiceIntentDestroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentdestroy)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys a voice intent client.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLVoiceIntentConfigureSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentconfiguresettings)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) * voice_settings)<br></br>Sets the settings for voice intent events.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLVoiceIntentSetCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentsetcallbacks)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) * voice_callbacks, void * user_data)<br></br>Sets the callbacks for voice intent events.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLVoiceIntentStartProcessing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstartprocessing)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Starts voice intent processing.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLVoiceIntentStopProcessing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstopprocessing)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Stops voice intent processing.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLVoiceIntentIsEnabled](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentisenabled)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, bool * out_is_enabled)<br></br>Checks voice intent feature is enabled in the system.  |

## Enums Documentation

### Anonymous Enum 30 {#enums-anonymous-enum-30}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_Voice |  ( 0xbe7a  << 16)| Defines the prefix for MLVoiceResult codes. |








-----------

### MLVoiceResult {#enums-mlvoiceresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLVoiceResult_IntentDisabled |  MLResultAPIPrefix_Voice| Operation failed because a required voice intent feature is disabled in system settings. |
| MLVoiceResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Return values for Voice API calls. 




**API Level:**
  * 20




-----------

### MLVoiceState {#enums-mlvoicestate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLVoiceState_IntentHotwordDetected |  0| Intent hotword detected, Automatic Speech Recognition (ASR) session is going to start. |
| MLVoiceState_IntentSessionEnded |  1| Voice UI is stopped, ASR session is going to stop. |
| MLVoiceState_IntentSessionEndedAborted |  2| ASR session is stopped due to abort. |
| MLVoiceState_IntentSessionEndedNoIntent |  3| ASR session is stopped without detecting an intent. |
| MLVoiceState_IntentSessionEndedTimeout |  4| ASR session is stopped due to timeout. |
| MLVoiceState_IntentSessionEndedError |  5| ASR session is stopped due to error. |
| MLVoiceState_IntentReady |  6| Intent mode is started and ready. |
| MLVoiceState_IntentNotAvailable |  7| Intent mode is stopped and not available. |
| MLVoiceState_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Voice state in voice event. 




**API Level:**
  * 20




-----------

### MLVoiceIntentNoIntentReason {#enums-mlvoiceintentnointentreason}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLVoiceIntentNoIntentReason_NoReason |  0| In case of success. |
| MLVoiceIntentNoIntentReason_Silence |  1| When the MLVoiceState in [MLVoiceIntentEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md) is either MLVoiceState_IntentSessionEndedTimeout or MLVoiceState_IntentSessionEndedError. |
| MLVoiceIntentNoIntentReason_NoMatch |  2| When the MLVoiceState in [MLVoiceIntentEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md) is MLVoiceState_IntentSessionEndedNoIntent. |
| MLVoiceIntentNoIntentReason_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



No intent reason code in voice event. 




**API Level:**
  * 20




-----------


## Types Documentation

### MLInputVoiceAppIntentSlot {#struct-mlinputvoiceappintentslot}

```cpp
typedef struct MLInputVoiceAppIntentSlot MLInputVoiceAppIntentSlot;
```

A structure containing voice app-intent slot in voice event. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_voice_app_intent_slot.md)


**API Level:**
  * 24




-----------

### MLVoiceIntentEvent {#struct-mlvoiceintentevent}

```cpp
typedef struct MLVoiceIntentEvent MLVoiceIntentEvent;
```

A structure containing voice intent event. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md)


**API Level:**
  * 24




-----------

### MLVoiceIntentCallbacks {#struct-mlvoiceintentcallbacks}

```cpp
typedef struct MLVoiceIntentCallbacks MLVoiceIntentCallbacks;
```

A structure containing callbacks for voice intent events. 

The final parameter to all the callbacks is a void *, which will point to whatever payload data the user provides in MLVoiceIntentSetCallbacks. Individual callbacks which are not required by the client can be NULL.

This structure must be initialized by calling [MLVoiceIntentCallbacksInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentcallbacksinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md)


**API Level:**
  * 24




-----------

### MLVoiceIntentSettings {#struct-mlvoiceintentsettings}

```cpp
typedef struct MLVoiceIntentSettings MLVoiceIntentSettings;
```

A structure containing settings for voice app intent. 

This structure must be initialized by calling [MLVoiceIntentSettingsInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentsettingsinit) before use.



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLVoiceIntentCallbacksInit {#void-mlvoiceintentcallbacksinit}

```cpp
static inline void MLVoiceIntentCallbacksInit(
    MLVoiceIntentCallbacks * inout_callbacks
)
```

Initializes default values for [MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) * |inout_callbacks|The object to initialize with default settings.|
**Required Permissions**:

  * None 





**API Level:**
  * 24




-----------

### MLVoiceIntentSettingsInit {#void-mlvoiceintentsettingsinit}

```cpp
static inline void MLVoiceIntentSettingsInit(
    MLVoiceIntentSettings * inout_settings
)
```

Initializes default values for [MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) * |inout_settings|The object to initialize with default settings.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLVoiceIntentCreate {#mlresult-mlvoiceintentcreate}

```cpp
MLResult MLVoiceIntentCreate(
    MLHandle * out_handle
)
```

Creates a voice intent client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created voice intent client. Only valid if the return value is MLResult_Ok.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create the voice intent client due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created the voice intent client. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Failed to create client due to missing permission.|
**Required Permissions**:

  * com.magicleap.permission.VOICE_INPUT (protection level: dangerous) 





**API Level:**
  * 20




-----------

### MLVoiceIntentDestroy {#mlresult-mlvoiceintentdestroy}

```cpp
MLResult MLVoiceIntentDestroy(
    MLHandle handle
)
```

Destroys a voice intent client. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the voice intent client to destroy.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to destroy the voice intent client due to an invalid input parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed the voice intent client.|
**Required Permissions**:

  * None 






-----------

### MLVoiceIntentConfigureSettings {#mlresult-mlvoiceintentconfiguresettings}

```cpp
MLResult MLVoiceIntentConfigureSettings(
    MLHandle handle,
    const MLVoiceIntentSettings * voice_settings
)
```

Sets the settings for voice intent events. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the voice intent client. |
| const [MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) * |voice_settings|Pointer to [MLVoiceIntentSettings](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md) structure.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set settings for voice intent events due to an invalid param. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set settings for voice intent events. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLVoiceResult_IntentDisabled|Failed to set the settings because required voice intent feature is disabled. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


App needs to call MLVoiceIntentConfigureSettings at least once before it calls MLVoiceIntentStartProcessing. App can call MLVoiceIntentConfigureSettings anytime it needs to update the voice intents. But such call will trigger updating intent grammar inside speech engine, which may result in a short delay (could be a few seconds depending on the device's workload). So it is not recommended to call the function frequently.




**API Level:**
  * 20




-----------

### MLVoiceIntentSetCallbacks {#mlresult-mlvoiceintentsetcallbacks}

```cpp
MLResult MLVoiceIntentSetCallbacks(
    MLHandle handle,
    const MLVoiceIntentCallbacks * voice_callbacks,
    void * user_data
)
```

Sets the callbacks for voice intent events. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the voice intent client. |
| const [MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) * |voice_callbacks|Pointer to [MLVoiceIntentCallbacks](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md) structure. Set this to NULL to unregister callbacks. |
| void * |user_data|Pointer to user payload data (can be NULL).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set callbacks for voice intent events due to an invalid param. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set callbacks for voice intent events. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLVoiceResult_IntentDisabled|Failed to set the callbacks because required voice intent feature is disabled in system settings. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLVoiceIntentStartProcessing {#mlresult-mlvoiceintentstartprocessing}

```cpp
MLResult MLVoiceIntentStartProcessing(
    MLHandle handle
)
```

Starts voice intent processing. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the voice intent client.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to start processing due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully start intent processing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLVoiceResult_IntentDisabled|Failed to start intent processing because required voice intent feature is disabled in system settings. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This API call affects the system voice service.

NOTE: If your application is processing voice intents make sure to call [MLVoiceIntentStopProcessing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstopprocessing) when application loses focus and [MLVoiceIntentStartProcessing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstartprocessing) when application gains focus to allow for uninterrupted processing of the voice intents.




**API Level:**
  * 20




-----------

### MLVoiceIntentStopProcessing {#mlresult-mlvoiceintentstopprocessing}

```cpp
MLResult MLVoiceIntentStopProcessing(
    MLHandle handle
)
```

Stops voice intent processing. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the voice intent client.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to stop processing due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully stop intent processing. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLVoiceResult_IntentDisabled|Failed to stop intent processing because required voice intent feature is disabled in system settings. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This API call affects the system voice service.

NOTE: If your application is processing voice intents make sure to call [MLVoiceIntentStopProcessing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstopprocessing) when application loses focus and [MLVoiceIntentStartProcessing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentstartprocessing) when application gains focus to allow for uninterrupted processing of the voice intents.




**API Level:**
  * 20




-----------

### MLVoiceIntentIsEnabled {#mlresult-mlvoiceintentisenabled}

```cpp
MLResult MLVoiceIntentIsEnabled(
    MLHandle handle,
    bool * out_is_enabled
)
```

Checks voice intent feature is enabled in the system. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the voice intent client. |
| bool * |out_is_enabled|Returns status whether voice intent feature is enabled in system settings.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to check due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The API call completed successfuly.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%
#pragma once
#include <ml_api.h>

ML_EXTERN_C_BEGIN

enum {
  MLResultAPIPrefix_Voice = MLRESULT_PREFIX(0xbe7a)
};

typedef enum MLVoiceResult {
  MLVoiceResult_IntentDisabled = MLResultAPIPrefix_Voice,
  MLVoiceResult_Ensure32Bits = 0x7FFFFFFF
} MLVoiceResult;

typedef enum MLVoiceState {
  MLVoiceState_IntentHotwordDetected = 0,
  MLVoiceState_IntentSessionEnded = 1,
  MLVoiceState_IntentSessionEndedAborted = 2,
  MLVoiceState_IntentSessionEndedNoIntent = 3,
  MLVoiceState_IntentSessionEndedTimeout = 4,
  MLVoiceState_IntentSessionEndedError = 5,
  MLVoiceState_IntentReady = 6,
  MLVoiceState_IntentNotAvailable = 7,

  MLVoiceState_Ensure32Bits = 0x7FFFFFFF
} MLVoiceState;


typedef enum MLVoiceIntentNoIntentReason {
  MLVoiceIntentNoIntentReason_NoReason = 0,
  MLVoiceIntentNoIntentReason_Silence = 1,
  MLVoiceIntentNoIntentReason_NoMatch = 2,

  MLVoiceIntentNoIntentReason_Ensure32Bits = 0x7FFFFFFF
} MLVoiceIntentNoIntentReason;

typedef struct MLInputVoiceAppIntentSlot {
  const char* slot_name;
  const char* slot_value;
} MLInputVoiceAppIntentSlot;

typedef struct MLVoiceIntentEvent {
  bool is_success;
  MLVoiceState state;
  MLVoiceIntentNoIntentReason no_intent_reason;
  const char* text;
  uint32_t intent_id;
  MLInputVoiceAppIntentSlot* app_intent_slots;
  uint32_t app_intent_slot_count;
} MLVoiceIntentEvent;

typedef struct MLVoiceIntentCallbacks {
  uint32_t version;
  void (*on_voice_event)(const MLVoiceIntentEvent* event, void* data);
} MLVoiceIntentCallbacks;

ML_STATIC_INLINE void MLVoiceIntentCallbacksInit(MLVoiceIntentCallbacks* inout_callbacks) {
  if (inout_callbacks) {
    inout_callbacks->version = 2u;
    inout_callbacks->on_voice_event = NULL;
  }
}

typedef struct MLVoiceIntentSettings {
  uint32_t version;
  const char* app_intent;
} MLVoiceIntentSettings;

ML_STATIC_INLINE void MLVoiceIntentSettingsInit(MLVoiceIntentSettings* inout_settings) {
  if (inout_settings) {
    inout_settings->version = 1u;
    inout_settings->app_intent = NULL;
  }
}

ML_API MLResult ML_CALL MLVoiceIntentCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLVoiceIntentDestroy(MLHandle handle);

ML_API MLResult ML_CALL MLVoiceIntentConfigureSettings(MLHandle handle, const MLVoiceIntentSettings* voice_settings);

ML_API MLResult ML_CALL MLVoiceIntentSetCallbacks(MLHandle handle, const MLVoiceIntentCallbacks* voice_callbacks, void* user_data);

ML_API MLResult ML_CALL MLVoiceIntentStartProcessing(MLHandle handle);

ML_API MLResult ML_CALL MLVoiceIntentStopProcessing(MLHandle handle);

ML_API MLResult ML_CALL MLVoiceIntentIsEnabled(MLHandle handle, bool* out_is_enabled);
ML_EXTERN_C_END
```




