---
title: MLVoiceIntentEvent
summary: a structure containing voice intent event. 

---

# MLVoiceIntentEvent

**Module:** **[Input](/api-ref/api/Modules/group___input/group___input.md)**



A structure containing voice intent event.  [More...](#detailed-description)


`#include <ml_voice.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| bool | **[is_success](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#bool-is-success)** <br></br>Voice event handling result in the voice intent event.  |
| [MLVoiceState](/api-ref/api/Modules/group___input/group___input.md#enums-mlvoicestate) | **[state](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#mlvoicestate-state)**  |
| [MLVoiceIntentNoIntentReason](/api-ref/api/Modules/group___input/group___input.md#enums-mlvoiceintentnointentreason) | **[no_intent_reason](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#mlvoiceintentnointentreason-no-intent-reason)**  |
| const char * | **[text](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#const-char-text)**  |
| uint32_t | **[intent_id](/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#uint32-t-intent-id)**  |

## Detailed Description

```cpp
struct MLVoiceIntentEvent;
```

A structure containing voice intent event. 




**API Level:**
  * 20 




-----------
## Public Attributes Documentation

### is_success {#bool-is-success}

```cpp
bool is_success;
```

Voice event handling result in the voice intent event. 

In case of false, other member variables should be ignored (text will be NULL). 





-----------

### state {#mlvoicestate-state}

```cpp
MLVoiceState state;
```



| Type | Description |
|--|--|
| [MLVoiceState](/api-ref/api/Modules/group___input/group___input.md#enums-mlvoicestate) | Voice state in voice event.  |


Voice state when generating the voice intent event. 





-----------

### no_intent_reason {#mlvoiceintentnointentreason-no-intent-reason}

```cpp
MLVoiceIntentNoIntentReason no_intent_reason;
```



| Type | Description |
|--|--|
| [MLVoiceIntentNoIntentReason](/api-ref/api/Modules/group___input/group___input.md#enums-mlvoiceintentnointentreason) | No intent reason code in voice event.  |


If intent is not detected, it contains the reason, otherwise the value is MLVoiceIntentNoIntentReason_NoReason. 





-----------

### text {#const-char-text}

```cpp
const char * text;
```


The C string carrying identifier data which is UTF-8 and null terminated. And the memory of this variable is managed by system. 





-----------

### intent_id {#uint32-t-intent-id}

```cpp
uint32_t intent_id;
```


User defined intent index which is detected. 





-----------

