---
title: MLVoiceIntentEvent
summary: a structure containing voice intent event. 

---

# MLVoiceIntentEvent

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing voice intent event.  [More...](#detailed-description)


`#include <ml_voice.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| bool | **[is_success](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#bool-is-success)** <br></br>Voice event handling result in the voice intent event.  |
| [MLVoiceState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlvoicestate) | **[state](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#mlvoicestate-state)**  |
| [MLVoiceIntentNoIntentReason](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlvoiceintentnointentreason) | **[no_intent_reason](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#mlvoiceintentnointentreason-no-intent-reason)**  |
| const char * | **[text](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#const-char-text)**  |
| uint32_t | **[intent_id](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#uint32-t-intent-id)**  |
| [MLInputVoiceAppIntentSlot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_voice_app_intent_slot.md) * | **[app_intent_slots](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#mlinputvoiceappintentslot-app-intent-slots)**  |
| uint32_t | **[app_intent_slot_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_event.md#uint32-t-app-intent-slot-count)**  |

## Detailed Description

```cpp
struct MLVoiceIntentEvent;
```

A structure containing voice intent event. 




**API Level:**
  * 24




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
| [MLVoiceState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlvoicestate) | Voice state in voice event.  |


Voice state when generating the voice intent event. 





-----------

### no_intent_reason {#mlvoiceintentnointentreason-no-intent-reason}

```cpp
MLVoiceIntentNoIntentReason no_intent_reason;
```



| Type | Description |
|--|--|
| [MLVoiceIntentNoIntentReason](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#enums-mlvoiceintentnointentreason) | No intent reason code in voice event.  |


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

### app_intent_slots {#mlinputvoiceappintentslot-app-intent-slots}

```cpp
MLInputVoiceAppIntentSlot * app_intent_slots;
```



| Type | Description |
|--|--|
| [MLInputVoiceAppIntentSlot](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_voice_app_intent_slot.md) * | A structure containing voice app-intent slot in voice event.  |


Array of app-intent slot, array count is set in app_intent_slot_count. And the memory of this variable is managed by system. 





-----------

### app_intent_slot_count {#uint32-t-app-intent-slot-count}

```cpp
uint32_t app_intent_slot_count;
```


Count of an array app_intent_slots. 





-----------


