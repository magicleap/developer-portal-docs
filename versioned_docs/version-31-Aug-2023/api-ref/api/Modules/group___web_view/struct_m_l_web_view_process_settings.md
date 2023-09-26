---
title: MLWebViewProcessSettings
summary: struct to define webview process initialization. 

---

# MLWebViewProcessSettings

**Module:** **[WebView](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md)**



Struct to define webview process initialization.  [More...](#detailed-description)


`#include <ml_webview.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md#uint32-t-version)**  |
| uint32_t | **[flags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md#uint32-t-flags)**  |

## Detailed Description

```cpp
struct MLWebViewProcessSettings;
```

Struct to define webview process initialization. 

This structure must be initialized by calling [MLWebViewProcessSettingsInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewprocesssettingsinit) before use.




**API Level:**
  * 22




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### flags {#uint32-t-flags}

```cpp
uint32_t flags;
```


Flags to be set for the process using the webview. 





-----------


