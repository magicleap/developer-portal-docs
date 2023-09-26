---
title: MLInputVoiceAppIntentSlot
summary: a structure containing voice app-intent slot in voice event. 

---

# MLInputVoiceAppIntentSlot

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing voice app-intent slot in voice event.  [More...](#detailed-description)


`#include <ml_voice.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| const char * | **[slot_name](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_voice_app_intent_slot.md#const-char-slot-name)**  |
| const char * | **[slot_value](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_voice_app_intent_slot.md#const-char-slot-value)**  |

## Detailed Description

```cpp
struct MLInputVoiceAppIntentSlot;
```

A structure containing voice app-intent slot in voice event. 




**API Level:**
  * 24




-----------
## Public Attributes Documentation

### slot_name {#const-char-slot-name}

```cpp
const char * slot_name;
```


The C string carrying slot name which is UTF-8 and null terminated. And the memory of this variable is managed by system. 





-----------

### slot_value {#const-char-slot-value}

```cpp
const char * slot_value;
```


The C string carrying concept value which is UTF-8 and null terminated. And the memory of this variable is managed by system. 





-----------


