---
title: MLWebViewEventCallbacks
summary: event handler for mlwebview callbacks. 

---

# MLWebViewEventCallbacks

**Module:** **[WebView](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md)**



Event handler for MLWebView callbacks.  [More...](#detailed-description)


`#include <ml_webview.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#uint32-t-version)**  |
| void * | **[user_data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-user-data)**  |
| void(*)(const char *resource_url, void *user_data) | **[on_before_resource_load](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-before-resource-load)** <br></br>Called to notify when a resource will loadeded.  |
| void(*)(bool is_main_frame, int32_t http_status_code, void *user_data) | **[on_load_end](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-load-end)** <br></br>Called to notify load completion.  |
| void(*)(bool is_main_frame, int32_t http_status_code, const char *error_str, const char *failed_url, void *user_data) | **[on_load_error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-load-error)** <br></br>Called if there was any error during loading. These errors could be due to connectivity, certificate errors etc.  |
| bool(*)(int32_t error_code, const char *url, const char *error_message, const char *details, void *user_data) | **[on_certificate_error](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#bool-on-certificate-error)** <br></br>Called when there is any certificate error.  |
| void(*)(int32_t x, int32_t y, int32_t width, int32_t height, int32_t text_input_flags, MLWebViewTextInputType text_input_type, void *user_data) | **[on_show_keyboard](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-show-keyboard)** <br></br>Called when user selects an input field.  |
| void(*)(void *user_data) | **[on_keyboard_dismiss](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-keyboard-dismiss)** <br></br>Called when user deselects an input field and the keyboard should be dismissed.  |
| void(*)(void *user_data) | **[on_destroy](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-destroy)** <br></br>Called when webview is destroyed.  |
| void(*)(void *user_data) | **[on_service_connected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-service-connected)** <br></br>This callback is used to pass notify user of service connection.  |
| void(*)(void *user_data) | **[on_service_disconnected](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-service-disconnected)** <br></br>This callback is used to notify user that service is disconnect.  |
| void(*)(MLResult result, void *user_data) | **[on_service_failed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-service-failed)** <br></br>This callback is used to notify user that service has failed.  |
| bool(*)(const char *url, void *user_data) | **[on_before_popup](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#bool-on-before-popup)** <br></br>This callback is used to ask the application if is OK to load a URL.  |
| void(*)(uint64_t popup_id, const char *url, void *user_data) | **[on_popup_opened](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-popup-opened)** <br></br>This callback is used to notify application that popup is opened.  |
| void(*)(MLHandle handle, void *user_data) | **[on_popup_closed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md#void-on-popup-closed)** <br></br>This callback is used to notify the application of a closing popup.  |

## Detailed Description

```cpp
struct MLWebViewEventCallbacks;
```

Event handler for MLWebView callbacks. 

This structure must be initialized by calling [MLWebViewEventCallbacksInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebvieweventcallbacksinit) before use.




**API Level:**
  * 24




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### user_data {#void-user-data}

```cpp
void * user_data;
```


User data passed to every callback. 





-----------

### on_before_resource_load {#void-on-before-resource-load}

```cpp
void(*)(const char *resource_url, void *user_data) on_before_resource_load;
```

Called to notify when a resource will loadeded. 


| Type | Description |
|--|--|
| void(*)(const char *resource_url, void *user_data) | )(const char *resource_url, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |resource_url|the url of the resource about to be loaded. |




-----------

### on_load_end {#void-on-load-end}

```cpp
void(*)(bool is_main_frame, int32_t http_status_code, void *user_data) on_load_end;
```

Called to notify load completion. 


| Type | Description |
|--|--|
| void(*)(bool is_main_frame, int32_t http_status_code, void *user_data) | )(bool is_main_frame, int32_t http_status_code, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |is_main_frame|Whether this event was for the main frame. |
|  |http_status_code|The standard http status code. |




-----------

### on_load_error {#void-on-load-error}

```cpp
void(*)(bool is_main_frame, int32_t http_status_code, const char *error_str, const char *failed_url, void *user_data) on_load_error;
```

Called if there was any error during loading. These errors could be due to connectivity, certificate errors etc. 


| Type | Description |
|--|--|
| void(*)(bool is_main_frame, int32_t http_status_code, const char *error_str, const char *failed_url, void *user_data) | )(bool is_main_frame, int32_t http_status_code, const char *error_str, const char *failed_url, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |is_main_frame|If this event was for the main frame. |
|  |http_status_code|Http status code for the URL load failure. |
|  |error_str|The stringified version of the error code. |
|  |failed_url|The url that caused the load error. |




-----------

### on_certificate_error {#bool-on-certificate-error}

```cpp
bool(*)(int32_t error_code, const char *url, const char *error_message, const char *details, void *user_data) on_certificate_error;
```

Called when there is any certificate error. 


| Type | Description |
|--|--|
| bool(*)(int32_t error_code, const char *url, const char *error_message, const char *details, void *user_data) | )(int32_t error_code, const char *url, const char *error_message, const char *details, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |error_code|Error code for ssl error. |
|  |url|The url associated to the certificate error. |
|  |error_message|Certificate error short description. |
|  |details|Certificate error details. |

**Returns**

|  |   |   |
|--|--|--|
| bool(*)(int32_t error_code, const char *url, const char *error_message, const char *details, void *user_data) |Returns|true if should continue loading and false if should stop loading. |




-----------

### on_show_keyboard {#void-on-show-keyboard}

```cpp
void(*)(int32_t x, int32_t y, int32_t width, int32_t height, int32_t text_input_flags, MLWebViewTextInputType text_input_type, void *user_data) on_show_keyboard;
```

Called when user selects an input field. 


| Type | Description |
|--|--|
| void(*)(int32_t x, int32_t y, int32_t width, int32_t height, int32_t text_input_flags, MLWebViewTextInputType text_input_type, void *user_data) | )(int32_t x, int32_t y, int32_t width, int32_t height, int32_t text_input_flags, MLWebViewTextInputType text_input_type, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |x|Horizontal position of the input field. |
|  |y|Vertical position of the input field. |
|  |width|Width of the input field. |
|  |height|Height of the input field. |
|  |text_input_flags|One or combination of [MLWebViewTextInputFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#enum-mlwebviewtextinputflags). |
|  |text_input_type|One of [MLWebViewTextInputType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#enum-mlwebviewtextinputtype). |




-----------

### on_keyboard_dismiss {#void-on-keyboard-dismiss}

```cpp
void(*)(void *user_data) on_keyboard_dismiss;
```

Called when user deselects an input field and the keyboard should be dismissed. 


| Type | Description |
|--|--|
| void(*)(void *user_data) | )(void *user_data) |






-----------

### on_destroy {#void-on-destroy}

```cpp
void(*)(void *user_data) on_destroy;
```

Called when webview is destroyed. 


| Type | Description |
|--|--|
| void(*)(void *user_data) | )(void *user_data) |






-----------

### on_service_connected {#void-on-service-connected}

```cpp
void(*)(void *user_data) on_service_connected;
```

This callback is used to pass notify user of service connection. 


| Type | Description |
|--|--|
| void(*)(void *user_data) | )(void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |user_data|The user data passed in during initialization. |




-----------

### on_service_disconnected {#void-on-service-disconnected}

```cpp
void(*)(void *user_data) on_service_disconnected;
```

This callback is used to notify user that service is disconnect. 


| Type | Description |
|--|--|
| void(*)(void *user_data) | )(void *user_data) |




:::note
Handle can no longer be used. 
:::



-----------

### on_service_failed {#void-on-service-failed}

```cpp
void(*)(MLResult result, void *user_data) on_service_failed;
```

This callback is used to notify user that service has failed. 


| Type | Description |
|--|--|
| void(*)(MLResult result, void *user_data) | )(MLResult result, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |result|The reason for the failure. |
|  |user_data|The user data passed back to the user. |


:::note
Callback on_service_failed is for version >= 2.
:::



-----------

### on_before_popup {#bool-on-before-popup}

```cpp
bool(*)(const char *url, void *user_data) on_before_popup;
```

This callback is used to ask the application if is OK to load a URL. 


| Type | Description |
|--|--|
| bool(*)(const char *url, void *user_data) | )(const char *url, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |result|The application should return true if it accepts the popup and false otherwise. |
|  |user_data|The user data passed back to the user. |


:::note
Callback on_before_popup is for version >= 3.
:::



-----------

### on_popup_opened {#void-on-popup-opened}

```cpp
void(*)(uint64_t popup_id, const char *url, void *user_data) on_popup_opened;
```

This callback is used to notify application that popup is opened. 


| Type | Description |
|--|--|
| void(*)(uint64_t popup_id, const char *url, void *user_data) | )(uint64_t popup_id, const char *url, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |user_data|The user data passed back to the user. |


:::note
Callback on_popup_opened is for version >= 3.
:::



-----------

### on_popup_closed {#void-on-popup-closed}

```cpp
void(*)(MLHandle handle, void *user_data) on_popup_closed;
```

This callback is used to notify the application of a closing popup. 


| Type | Description |
|--|--|
| void(*)(MLHandle handle, void *user_data) | )(MLHandle handle, void *user_data) |


**Parameters**

|  |   |   |
|--|--|--|
|  |handle|the webview handle of the popup being closed |
|  |user_data|The user data passed back to the user. |
This callback is used to notify the application of a popup that is being closed. For example, this can happen if window.close() is used. This is not always called. If the application closes the popup itself, then this function is not called. An application should call MLWebViewDestroy as soon as possible on the popup's handle after receiving this callback.





-----------


