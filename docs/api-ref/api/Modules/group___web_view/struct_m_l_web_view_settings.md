---
title: MLWebViewSettings
summary: struct to define webview initialization. 

---

# MLWebViewSettings

**Module:** **[WebView](/api-ref/api/Modules/group___web_view/group___web_view.md)**



Struct to define webview initialization.  [More...](#detailed-description)


`#include <ml_webview.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md#uint32-t-version)**  |
| uint32_t | **[width](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md#uint32-t-width)**  |
| uint32_t | **[height](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md#uint32-t-height)**  |
| void * | **[application_vm](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md#void-application-vm)**  |
| void * | **[context](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md#void-context)**  |
| [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) | **[callbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md#mlwebvieweventcallbacks-callbacks)**  |
| bool | **[is_popup](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md#bool-is-popup)**  |
| uint64_t | **[popup_id](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md#uint64-t-popup-id)**  |

## Detailed Description

```cpp
struct MLWebViewSettings;
```

Struct to define webview initialization. 

This structure must be initialized by calling [MLWebViewSettingsInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewsettingsinit) before use.




**API Level:
 24**
  * 




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### width {#uint32-t-width}

```cpp
uint32_t width;
```


Horizontal size of webview in pixels. 





-----------

### height {#uint32-t-height}

```cpp
uint32_t height;
```


Vertical size of webview in pixels. 





-----------

### application_vm {#void-application-vm}

```cpp
void * application_vm;
```


JavaVM pointer to use for Android up-calls. 





-----------

### context {#void-context}

```cpp
void * context;
```


Android jobject to android.content.Context instance for Android up-calls. 





-----------

### callbacks {#mlwebvieweventcallbacks-callbacks}

```cpp
MLWebViewEventCallbacks callbacks;
```



| Type | Description |
|--|--|
| [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) | Event handler for MLWebView callbacks.  |


Event callbacks for interacting with webview. 





-----------

### is_popup {#bool-is-popup}

```cpp
bool is_popup;
```


Is this a popup? 





-----------

### popup_id {#uint64-t-popup-id}

```cpp
uint64_t popup_id;
```


Popup identifier used to create a webview. 





-----------

