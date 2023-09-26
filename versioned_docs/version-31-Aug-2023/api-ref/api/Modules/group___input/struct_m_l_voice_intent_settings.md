---
title: MLVoiceIntentSettings
summary: a structure containing settings for voice app intent. 

---

# MLVoiceIntentSettings

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing settings for voice app intent.  [More...](#detailed-description)


`#include <ml_voice.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md#uint32-t-version)**  |
| const char * | **[app_intent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md#const-char-app-intent)** <br></br>The C string carrying app intent made by JSON format, which is UTF-8 and null terminated.  |

## Detailed Description

```cpp
struct MLVoiceIntentSettings;
```

A structure containing settings for voice app intent. 

This structure must be initialized by calling [MLVoiceIntentSettingsInit()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md#void-mlvoiceintentsettingsinit) before use.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this settings. 





-----------

### app_intent {#const-char-app-intent}

```cpp
const char * app_intent;
```

The C string carrying app intent made by JSON format, which is UTF-8 and null terminated. 

The app intent should contain pre-defined fields, names, and values. Memory of this variable is managed by user. 





-----------


