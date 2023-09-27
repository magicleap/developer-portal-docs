---
title: MLVoiceIntentCallbacks
summary: a structure containing callbacks for voice intent events. 

---

# MLVoiceIntentCallbacks

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing callbacks for voice intent events.  [More...](#detailed-description)


`#include <ml_voice.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md#uint32-t-version)**  |
| void(*)(const MLVoiceIntentEvent *event, void *data) | **[on_voice_event](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_callbacks.md#void-on-voice-event)** <br></br>This callback will be invoked whenever a voice intent event is detected.  |

## Detailed Description

```cpp
struct MLVoiceIntentCallbacks;
```

A structure containing callbacks for voice intent events. 

The final parameter to all the callbacks is a void *, which will point to whatever payload data the user provides in MLVoiceIntentSetCallbacks. Individual callbacks which are not required by the client can be NULL.

This structure must be initialized by calling [MLVoiceIntentCallbacksInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentcallbacksinit) before use.




**API Level:**
  * 24




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this callback. 





-----------

### on_voice_event {#void-on-voice-event}

```cpp
void(*)(const MLVoiceIntentEvent *event, void *data) on_voice_event;
```

This callback will be invoked whenever a voice intent event is detected. 


| Type | Description |
|--|--|
| void(*)(const MLVoiceIntentEvent *event, void *data) | )(const MLVoiceIntentEvent *event, void *data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |event|Voice intent event. |
|  |data|User data as passed to [MLVoiceIntentSetCallbacks()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#mlresult-mlvoiceintentsetcallbacks). |




-----------


