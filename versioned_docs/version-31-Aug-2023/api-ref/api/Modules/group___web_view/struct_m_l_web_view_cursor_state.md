---
title: MLWebViewCursorState
summary: struct to define the cursor's state. 

---

# MLWebViewCursorState

**Module:** **[WebView](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md)**



Struct to define the cursor's state.  [More...](#detailed-description)


`#include <ml_webview.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md#uint32-t-version)**  |
| uint32_t | **[x_position](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md#uint32-t-x-position)**  |
| uint32_t | **[y_position](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md#uint32-t-y-position)**  |
| [MLWebViewEventFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags) | **[modifiers](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md#mlwebvieweventflags-modifiers)**  |

## Detailed Description

```cpp
struct MLWebViewCursorState;
```

Struct to define the cursor's state. 

This structure must be initialized by calling [MLWebViewCursorStateInit](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewcursorstateinit) before use.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```






-----------

### x_position {#uint32-t-x-position}

```cpp
uint32_t x_position;
```


Horizontal position of the cursor. 





-----------

### y_position {#uint32-t-y-position}

```cpp
uint32_t y_position;
```


Vertical position of the cursor. 





-----------

### modifiers {#mlwebvieweventflags-modifiers}

```cpp
MLWebViewEventFlags modifiers;
```



| Type | Description |
|--|--|
| [MLWebViewEventFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags) | Flags to set special key states during input.  |


Should be one or combination of [MLWebViewEventFlags](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___web_view/group___web_view.md#enum-mlwebvieweventflags). 





-----------


