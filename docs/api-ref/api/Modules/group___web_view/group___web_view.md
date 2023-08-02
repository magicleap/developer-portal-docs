---
title: WebView
summary: apis for the webview component. 

---

# WebView

APIs for the WebView component.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md)** <br></br>Struct to define the cursor's state.  |
| struct | **[MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md)** <br></br>Event handler for MLWebView callbacks.  |
| struct | **[MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md)** <br></br>Struct to define webview initialization.  |
| struct | **[MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md)** <br></br>Struct to define webview process initialization.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) | **[MLWebViewCursorState](/api-ref/api/Modules/group___web_view/group___web_view.md#struct-mlwebviewcursorstate)** <br></br>Struct to define the cursor's state.  |
| typedef struct [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) | **[MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/group___web_view.md#struct-mlwebvieweventcallbacks)** <br></br>Event handler for MLWebView callbacks.  |
| typedef struct [MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) | **[MLWebViewSettings](/api-ref/api/Modules/group___web_view/group___web_view.md#struct-mlwebviewsettings)** <br></br>Struct to define webview initialization.  |
| typedef struct [MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) | **[MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/group___web_view.md#struct-mlwebviewprocesssettings)** <br></br>Struct to define webview process initialization.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLWebViewTextInputType](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype)** <br></br> { <br></br>[MLWebViewTextInputType_None](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-none) = 0,<br></br> [MLWebViewTextInputType_Text](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-text),<br></br> [MLWebViewTextInputType_Password](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-password),<br></br> [MLWebViewTextInputType_Search](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-search),<br></br> [MLWebViewTextInputType_Email](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-email),<br></br> [MLWebViewTextInputType_Number](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-number),<br></br> [MLWebViewTextInputType_Telephone](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-telephone),<br></br> [MLWebViewTextInputType_URL](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-url),<br></br> [MLWebViewTextInputType_Date](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-date),<br></br> [MLWebViewTextInputType_DateTime](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-datetime),<br></br> [MLWebViewTextInputType_DateTimeLocal](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-datetimelocal),<br></br> [MLWebViewTextInputType_Month](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-month),<br></br> [MLWebViewTextInputType_Time](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-time),<br></br> [MLWebViewTextInputType_Week](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-week),<br></br> [MLWebViewTextInputType_TextArea](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-textarea),<br></br> [MLWebViewTextInputType_ContentEditable](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-contenteditable),<br></br> [MLWebViewTextInputType_DateTimeField](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-datetimefield),<br></br> [MLWebViewTextInputType_Ensure32Bits](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputtype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The type of text entry selected when on_show_keyboard is called.  |
| enum | **[MLWebViewTextInputFlags](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags)** <br></br> { <br></br>[MLWebViewTextInputFlags_None](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-none) = 0,<br></br> [MLWebViewTextInputFlags_AutocompleteOn](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-autocompleteon) = 1 << 0,<br></br> [MLWebViewTextInputFlags_AutocompleteOff](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-autocompleteoff) = 1 << 1,<br></br> [MLWebViewTextInputFlags_AutocorrectOn](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-autocorrecton) = 1 << 2,<br></br> [MLWebViewTextInputFlags_AutocorrectOff](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-autocorrectoff) = 1 << 3,<br></br> [MLWebViewTextInputFlags_SpellcheckOn](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-spellcheckon) = 1 << 4,<br></br> [MLWebViewTextInputFlags_SpellcheckOff](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-spellcheckoff) = 1 << 5,<br></br> [MLWebViewTextInputFlags_AutocapitalizeNone](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-autocapitalizenone) = 1 << 6,<br></br> [MLWebViewTextInputFlags_AutocapitalizeCharacters](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-autocapitalizecharacters) = 1 << 7,<br></br> [MLWebViewTextInputFlags_AutocapitalizeWords](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-autocapitalizewords) = 1 << 8,<br></br> [MLWebViewTextInputFlags_AutocapitalizeSentences](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-autocapitalizesentences) = 1 << 9,<br></br> [MLWebViewTextInputFlags_HaveNextFocusableElement](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-havenextfocusableelement) = 1 << 10,<br></br> [MLWebViewTextInputFlags_HavePreviousFocusableElement](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-havepreviousfocusableelement) = 1 << 11,<br></br> [MLWebViewTextInputFlags_HasBeenPasswordField](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-hasbeenpasswordfield) = 1 << 12,<br></br> [MLWebViewTextInputFlags_Ensure32Bits](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewtextinputflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Flags related to a text entry field passed when on_show_keyboard is called.  |
| enum | **[MLWebViewEventFlags](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags)** <br></br> { <br></br>[MLWebViewEventFlags_None](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-none) = 0,<br></br> [MLWebViewEventFlags_CapsLockOn](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-capslockon) = 1 << 0,<br></br> [MLWebViewEventFlags_ShiftDown](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-shiftdown) = 1 << 1,<br></br> [MLWebViewEventFlags_ControlDown](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-controldown) = 1 << 2,<br></br> [MLWebViewEventFlags_AltDown](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-altdown) = 1 << 3,<br></br> [MLWebViewEventFlags_LeftMouseButton](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-leftmousebutton) = 1 << 4,<br></br> [MLWebViewEventFlags_MiddleMouseButton](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-middlemousebutton) = 1 << 5,<br></br> [MLWebViewEventFlags_RightMouseButton](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-rightmousebutton) = 1 << 6,<br></br> [MLWebViewEventFlags_CommandDown](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-commanddown) = 1 << 7,<br></br> [MLWebViewEventFlags_NumLockOn](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-numlockon) = 1 << 8,<br></br> [MLWebViewEventFlags_IsKeyPad](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-iskeypad) = 1 << 9,<br></br> [MLWebViewEventFlags_IsLeft](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-isleft) = 1 << 10,<br></br> [MLWebViewEventFlags_IsRight](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-isright) = 1 << 11,<br></br> [MLWebViewEventFlags_AltGRDown](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-altgrdown) = 1 << 12,<br></br> [MLWebViewEventFlags_Ensure32Bits](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Flags to set special key states during input.  |
| enum | **[Anonymous Enum 31](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-anonymous-enum-31)** <br></br> { <br></br>[MLResultAPIPrefix_WebView](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlresultapiprefix-webview) = ( 0xebf7  << 16)<br></br>} |
| enum | **[MLWebViewResult](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewresult)** <br></br> { <br></br>[MLWebViewResult_ZoomLimitReached](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewresult-zoomlimitreached) = MLResultAPIPrefix_WebView,<br></br> [MLWebViewResult_Ensure32Bits](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Return values for the WebView API calls.  |
| enum | **[MLWebViewProcessSettingFlags](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewprocesssettingflags)** <br></br> { <br></br>[MLWebViewProcessSettingFlags_None](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewprocesssettingflags-none) = 0,<br></br> [MLWebViewProcessSettingFlags_WebInspectorOn](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewprocesssettingflags-webinspectoron) = 1 << 0,<br></br> [MLWebViewProcessSettingFlags_Ensure32Bits](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewprocesssettingflags-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Flags set for the process using webview.  |
| enum | **[MLWebViewPauseType](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype)** <br></br> { <br></br>[MLWebViewPauseType_Multimedia](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype-multimedia) = 0,<br></br> [MLWebViewPauseType_Timers](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype-timers),<br></br> [MLWebViewPauseType_Discard](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype-discard),<br></br> [MLWebViewPauseType_Ensure32Bits](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>The type of the webview pause.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLWebViewCursorStateInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewcursorstateinit)**([MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) * inout_cursor_state)<br></br>Initializes a [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) with the default parameters.  |
| void | **[MLWebViewEventCallbacksInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebvieweventcallbacksinit)**([MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) * inout_callback)<br></br>Initializes a [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) with the default parameters.  |
| void | **[MLWebViewSettingsInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewsettingsinit)**([MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) * inout_settings)<br></br>Initializes a [MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) with the default parameters.  |
| void | **[MLWebViewProcessSettingsInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewprocesssettingsinit)**([MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) * inout_settings)<br></br>Initializes a [MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) with the default parameters.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewSetProcessSettings](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewsetprocesssettings)**(const [MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) * settings)<br></br>Specify the process settings to be used for webviews.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewCreate](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle, const [MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) * in_settings)<br></br>Create a MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewDestroy](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroy a MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewSetEventCallbacks](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewseteventcallbacks)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, const [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) * callbacks)<br></br>Specify the callbacks for a MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewAcquireNextAvailableFrame](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewacquirenextavailableframe)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, struct AHardwareBuffer ** out_native_buffer)<br></br>Acquires next available frame buffer for rendering.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewReleaseFrame](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewreleaseframe)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, struct AHardwareBuffer * native_buffer)<br></br>Release a frame acquired by [MLWebViewAcquireNextAvailableFrame](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewacquirenextavailableframe).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewGoTo](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoto)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, const char * url)<br></br>Go to a URL with the specified MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewGoBack](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Trigger a "Back" action in the MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewGoForward](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgoforward)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Trigger a "Forward" action in the MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewReload](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewreload)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Trigger a "Reload" action in the MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewGetUrl](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgeturl)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, uint32_t * inout_size, char * inout_url)<br></br>Get the current URL. Set out_url to NULL to get the length of the current URL.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewCanGoBack](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcangoback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, bool * out_can_go_back)<br></br>Checks if the "Back" action is currently valid.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewCanGoForward](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcangoforward)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, bool * out_can_go_forward)<br></br>Checks if the "Forward" action is currently valid.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewInjectMouseMove](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousemove)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) * cursor_state)<br></br>Moves the WebView mouse.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewInjectMouseButtonDown](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousebuttondown)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) * cursor_state)<br></br>Sends a mouse button down/pressed event on a specific location on screen.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewInjectMouseButtonUp](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectmousebuttonup)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) * cursor_state)<br></br>Sends a mouse button up/released event on a specific location on screen.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewInjectChar](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectchar)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, uint32_t char_utf32)<br></br>Sends a printable char keyboard event to MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewInjectKeyDown](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectkeydown)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, int32_t key_code, uint32_t modifier_mask)<br></br>Sends a key down/pressed event to MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewInjectKeyUp](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewinjectkeyup)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, int32_t key_code, uint32_t modifier_mask)<br></br>Sends a key up/release event to MLWebView.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewGetScrollSize](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetscrollsize)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, int32_t * out_width, int32_t * out_height)<br></br>This API is stubbed out and translates to a no-op.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewGetScrollOffset](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetscrolloffset)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, int32_t * out_x, int32_t * out_y)<br></br>This API is stubbed out and translates to a no-op.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewScrollBy](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewscrollby)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, const int32_t x_pixels, const int32_t y_pixels)<br></br>Triggers a mouse "Scroll" event.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewGetZoomFactor](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetzoomfactor)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, double * out_zoom_factor)<br></br>Get the current zoom factor. The default zoom factor is 1.0.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewZoomIn](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewzoomin)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Zoom in one level.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewZoomOut](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewzoomout)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Zoom out one level.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewResetZoom](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresetzoom)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Reset zoom level to 1.0.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewGetFrameTransformMatrix](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewgetframetransformmatrix)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, [MLMat4f](/api-ref/api/Modules/group___common/struct_m_l_mat4f.md) * out_matrix)<br></br>Retrieves the 4x4 texture coordinate transform matrix used by all MLWebView frames.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewRemoveAllCookies](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewremoveallcookies)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Remove all webview cookies.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewClearCache](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewclearcache)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Clear the webview cache.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view, [MLWebViewPauseType](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype) pause_type)<br></br>Pause the webview. Call [MLWebViewResume](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresume) to resume.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLWebViewResume](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresume)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) web_view)<br></br>Resumes a webview after a previous call of the [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause).  |

## Detailed Description

APIs for the WebView component. 



:::note
MLWebView methods use re-entrant JNI monitors to provide a thread-safe API. See: [https://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/functions.html#wp5256](https://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/functions.html#wp5256) for details. 
:::


**Shared Object:**
  * webview.magicleap*




-----------
## Enums Documentation

### MLWebViewTextInputType {#enums-mlwebviewtextinputtype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebViewTextInputType_None |  0| |
| MLWebViewTextInputType_Text | | |
| MLWebViewTextInputType_Password | | |
| MLWebViewTextInputType_Search | | |
| MLWebViewTextInputType_Email | | |
| MLWebViewTextInputType_Number | | |
| MLWebViewTextInputType_Telephone | | |
| MLWebViewTextInputType_URL | | |
| MLWebViewTextInputType_Date | | |
| MLWebViewTextInputType_DateTime | | |
| MLWebViewTextInputType_DateTimeLocal | | |
| MLWebViewTextInputType_Month | | |
| MLWebViewTextInputType_Time | | |
| MLWebViewTextInputType_Week | | |
| MLWebViewTextInputType_TextArea | | |
| MLWebViewTextInputType_ContentEditable | | |
| MLWebViewTextInputType_DateTimeField | | |
| MLWebViewTextInputType_Ensure32Bits |  0x7FFFFFFF| |



The type of text entry selected when on_show_keyboard is called. 




**API Level:**
  * 20




-----------

### MLWebViewTextInputFlags {#enums-mlwebviewtextinputflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebViewTextInputFlags_None |  0| |
| MLWebViewTextInputFlags_AutocompleteOn |  1 << 0| |
| MLWebViewTextInputFlags_AutocompleteOff |  1 << 1| |
| MLWebViewTextInputFlags_AutocorrectOn |  1 << 2| |
| MLWebViewTextInputFlags_AutocorrectOff |  1 << 3| |
| MLWebViewTextInputFlags_SpellcheckOn |  1 << 4| |
| MLWebViewTextInputFlags_SpellcheckOff |  1 << 5| |
| MLWebViewTextInputFlags_AutocapitalizeNone |  1 << 6| |
| MLWebViewTextInputFlags_AutocapitalizeCharacters |  1 << 7| |
| MLWebViewTextInputFlags_AutocapitalizeWords |  1 << 8| |
| MLWebViewTextInputFlags_AutocapitalizeSentences |  1 << 9| |
| MLWebViewTextInputFlags_HaveNextFocusableElement |  1 << 10| |
| MLWebViewTextInputFlags_HavePreviousFocusableElement |  1 << 11| |
| MLWebViewTextInputFlags_HasBeenPasswordField |  1 << 12| |
| MLWebViewTextInputFlags_Ensure32Bits |  0x7FFFFFFF| |



Flags related to a text entry field passed when on_show_keyboard is called. 




**API Level:**
  * 20




-----------

### MLWebViewEventFlags {#enums-mlwebvieweventflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebViewEventFlags_None |  0| |
| MLWebViewEventFlags_CapsLockOn |  1 << 0| |
| MLWebViewEventFlags_ShiftDown |  1 << 1| |
| MLWebViewEventFlags_ControlDown |  1 << 2| |
| MLWebViewEventFlags_AltDown |  1 << 3| |
| MLWebViewEventFlags_LeftMouseButton |  1 << 4| |
| MLWebViewEventFlags_MiddleMouseButton |  1 << 5| |
| MLWebViewEventFlags_RightMouseButton |  1 << 6| |
| MLWebViewEventFlags_CommandDown |  1 << 7| |
| MLWebViewEventFlags_NumLockOn |  1 << 8| |
| MLWebViewEventFlags_IsKeyPad |  1 << 9| |
| MLWebViewEventFlags_IsLeft |  1 << 10| |
| MLWebViewEventFlags_IsRight |  1 << 11| |
| MLWebViewEventFlags_AltGRDown |  1 << 12| |
| MLWebViewEventFlags_Ensure32Bits |  0x7FFFFFFF| |



Flags to set special key states during input. 




**API Level:**
  * 20




-----------

### Anonymous Enum 31 {#enums-anonymous-enum-31}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_WebView |  ( 0xebf7  << 16)| Defines the prefix for [MLWebViewResult](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewresult) codes. |








-----------

### MLWebViewResult {#enums-mlwebviewresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebViewResult_ZoomLimitReached |  MLResultAPIPrefix_WebView| |
| MLWebViewResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Return values for the WebView API calls. 




**API Level:**
  * 20




-----------

### MLWebViewProcessSettingFlags {#enums-mlwebviewprocesssettingflags}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebViewProcessSettingFlags_None |  0| |
| MLWebViewProcessSettingFlags_WebInspectorOn |  1 << 0| The bit to enable (1) or disable (0) web inspector. |
| MLWebViewProcessSettingFlags_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Flags set for the process using webview. 




**API Level:**
  * 22




-----------

### MLWebViewPauseType {#enums-mlwebviewpausetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLWebViewPauseType_Multimedia |  0| Pause all multimedia activities of the webview. |
| MLWebViewPauseType_Timers | | Pause javascript timers of the webview. |
| MLWebViewPauseType_Discard | | Pause and discard the webview rendering process. But keep alive the MLWebView handle. |
| MLWebViewPauseType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



The type of the webview pause. 




**API Level:**
  * 22




-----------


## Types Documentation

### MLWebViewCursorState {#struct-mlwebviewcursorstate}

```cpp
typedef struct MLWebViewCursorState MLWebViewCursorState;
```

Struct to define the cursor's state. 

This structure must be initialized by calling [MLWebViewCursorStateInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewcursorstateinit) before use.



[More Info](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md)


**API Level:**
  * 20




-----------

### MLWebViewEventCallbacks {#struct-mlwebvieweventcallbacks}

```cpp
typedef struct MLWebViewEventCallbacks MLWebViewEventCallbacks;
```

Event handler for MLWebView callbacks. 

This structure must be initialized by calling [MLWebViewEventCallbacksInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebvieweventcallbacksinit) before use.



[More Info](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md)


**API Level:**
  * 24




-----------

### MLWebViewSettings {#struct-mlwebviewsettings}

```cpp
typedef struct MLWebViewSettings MLWebViewSettings;
```

Struct to define webview initialization. 

This structure must be initialized by calling [MLWebViewSettingsInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewsettingsinit) before use.



[More Info](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md)


**API Level:**
  * 24




-----------

### MLWebViewProcessSettings {#struct-mlwebviewprocesssettings}

```cpp
typedef struct MLWebViewProcessSettings MLWebViewProcessSettings;
```

Struct to define webview process initialization. 

This structure must be initialized by calling [MLWebViewProcessSettingsInit](/api-ref/api/Modules/group___web_view/group___web_view.md#void-mlwebviewprocesssettingsinit) before use.



[More Info](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md)


**API Level:**
  * 22




-----------


## Functions Documentation

### MLWebViewCursorStateInit {#void-mlwebviewcursorstateinit}

```cpp
static inline void MLWebViewCursorStateInit(
    MLWebViewCursorState * inout_cursor_state
)
```

Initializes a [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) with the default parameters. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) * |inout_cursor_state|The object to initialize with default values.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLWebViewEventCallbacksInit {#void-mlwebvieweventcallbacksinit}

```cpp
static inline void MLWebViewEventCallbacksInit(
    MLWebViewEventCallbacks * inout_callback
)
```

Initializes a [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) with the default parameters. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) * |inout_callback|The object to initialize with default settings.|
**Required Permissions**:

  * None 





**API Level:**
  * 24




-----------

### MLWebViewSettingsInit {#void-mlwebviewsettingsinit}

```cpp
static inline void MLWebViewSettingsInit(
    MLWebViewSettings * inout_settings
)
```

Initializes a [MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) with the default parameters. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) * |inout_settings|The object to initialize with default settings.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLWebViewProcessSettingsInit {#void-mlwebviewprocesssettingsinit}

```cpp
static inline void MLWebViewProcessSettingsInit(
    MLWebViewProcessSettings * inout_settings
)
```

Initializes a [MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) with the default parameters. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) * |inout_settings|The object to initialize with default settings.|
**Required Permissions**:

  * None 





**API Level:**
  * 22




-----------

### MLWebViewSetProcessSettings {#mlresult-mlwebviewsetprocesssettings}

```cpp
MLResult MLWebViewSetProcessSettings(
    const MLWebViewProcessSettings * settings
)
```

Specify the process settings to be used for webviews. 

**Parameters**

|  |   |   |
|--|--|--|
| const [MLWebViewProcessSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_process_settings.md) * |settings|The settings to be used for webviews.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If settings is null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_NotImplemented|If called after MLWebViewCreate. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If settings is not null. |
**Required Permissions**:

  * None




:::note
Current implementation only supports enabling and disabling web inspector before first call to MLWebViewCreate. If all webviews have been destroyed, it is possible to call this with effect again. Default is to disable.
:::


**API Level:**
  * 22




-----------

### MLWebViewCreate {#mlresult-mlwebviewcreate}

```cpp
MLResult MLWebViewCreate(
    MLHandle * out_handle,
    const MLWebViewSettings * in_settings
)
```

Create a MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|Handle that is ready to use with all other MLWebView API calls. |
| const [MLWebViewSettings](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_settings.md) * |in_settings|The initialization paramaters for the webview.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|out_handle, in_settings, or application_vm pointer was null. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If version >= 2, returns MLResult_Ok for successful start of asynchronous operation, but any eventual failure will be reported through on_service_failed. If version < 2, this indicates that synchronous creation was successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|Missing required permission(s). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Unable to create the MLWebView, MLWebViewCallbacks struct version < 2.|
**Required Permissions**:

  * com.magicleap.permission.WEBVIEW (protection level: normal) 


The MLWebView will be ready to use once this function returns with MLResult_OK.



:::note
In version >= 2 for MLWebViewCallbacks struct, MLWebViewCreate launches a separate thread to create a webview. If creation fails and the on_service_failed callback is not null the MLResult code will be passed into the on_service_failed callback. The on_service_connected callback will be called if it is not null and creation was successful. For version < 2 of MLWebViewCallbacks struct, MLWebViewCallbacks will create in synchronous mode.
:::


**API Level:**
  * 24




-----------

### MLWebViewDestroy {#mlresult-mlwebviewdestroy}

```cpp
MLResult MLWebViewDestroy(
    MLHandle handle
)
```

Destroy a MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|The handle to invalidate.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The MLWebView was destroyed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|An error occurred destroying the MLWebView.|
**Required Permissions**:

  * None 


The MLWebView will be terminated by this function call and the handle shall no longer be valid.




**API Level:**
  * 21




-----------

### MLWebViewSetEventCallbacks {#mlresult-mlwebviewseteventcallbacks}

```cpp
MLResult MLWebViewSetEventCallbacks(
    MLHandle web_view,
    const MLWebViewEventCallbacks * callbacks
)
```

Specify the callbacks for a MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The MLWebView to link the event handler. |
| const [MLWebViewEventCallbacks](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_event_callbacks.md) * |callbacks|The event handler to link to the MLWebView.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|MLWebView event handler was set. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 24




-----------

### MLWebViewAcquireNextAvailableFrame {#mlresult-mlwebviewacquirenextavailableframe}

```cpp
MLResult MLWebViewAcquireNextAvailableFrame(
    MLHandle web_view,
    struct AHardwareBuffer ** out_native_buffer
)
```

Acquires next available frame buffer for rendering. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| struct AHardwareBuffer ** |out_native_buffer|Pointer to an AHardwareBuffer.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The frame is ready. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 




:::note
To use with OpenGL, EGL, and Vulkan please see: [https://developer.android.com/ndk/reference/group/a-hardware-buffer](https://developer.android.com/ndk/reference/group/a-hardware-buffer) for details.
:::


**API Level:**
  * 21




-----------

### MLWebViewReleaseFrame {#mlresult-mlwebviewreleaseframe}

```cpp
MLResult MLWebViewReleaseFrame(
    MLHandle web_view,
    struct AHardwareBuffer * native_buffer
)
```

Release a frame acquired by [MLWebViewAcquireNextAvailableFrame](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewacquirenextavailableframe). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| struct AHardwareBuffer * |native_buffer|The frame being released.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Frame successfully released. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|An error occurred releasing the frame.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewGoTo {#mlresult-mlwebviewgoto}

```cpp
MLResult MLWebViewGoTo(
    MLHandle web_view,
    const char * url
)
```

Go to a URL with the specified MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| const char * |url|The URL that will be loaded.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. [MLWebViewResume](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresume) should be called before this function. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The WebView is attempting to load the specified URL. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 


Note that success with this call only indicates that a load will be attempted. Caller can be notified about issues loading the URL via the event handler on_load_error.




**API Level:**
  * 21




-----------

### MLWebViewGoBack {#mlresult-mlwebviewgoback}

```cpp
MLResult MLWebViewGoBack(
    MLHandle web_view
)
```

Trigger a "Back" action in the MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The WebView Back action was initiated or cannot go back any further. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. [MLWebViewResume](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresume) should be called before this function. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 


Query [MLWebViewCanGoBack](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcangoback) before calling this method. If there is no valid page to go back to, this method will be no-op.




**API Level:**
  * 21




-----------

### MLWebViewGoForward {#mlresult-mlwebviewgoforward}

```cpp
MLResult MLWebViewGoForward(
    MLHandle web_view
)
```

Trigger a "Forward" action in the MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. [MLWebViewResume](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresume) should be called before this function. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The WebView Forward action was initiated or cannot go forward any further. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 


Query [MLWebViewCanGoForward](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcangoforward) before calling this method. If there is no valid page to go forward to, this method will be no-op.




**API Level:**
  * 21




-----------

### MLWebViewReload {#mlresult-mlwebviewreload}

```cpp
MLResult MLWebViewReload(
    MLHandle web_view
)
```

Trigger a "Reload" action in the MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. [MLWebViewResume](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresume) should be called before this function. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The WebView Reload action was initiated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewGetUrl {#mlresult-mlwebviewgeturl}

```cpp
MLResult MLWebViewGetUrl(
    MLHandle web_view,
    uint32_t * inout_size,
    char * inout_url
)
```

Get the current URL. Set out_url to NULL to get the length of the current URL. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| uint32_t * |inout_size|The size that has been allocated in out_url to hold the URL. This will be set to the actual length of URL if inout_size and size needed for the URL are different. |
| char * |inout_url|The URL up to inout_size of characters.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The WebView URL was acquired. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewCanGoBack {#mlresult-mlwebviewcangoback}

```cpp
MLResult MLWebViewCanGoBack(
    MLHandle web_view,
    bool * out_can_go_back
)
```

Checks if the "Back" action is currently valid. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| bool * |out_can_go_back|True if "Back" has a valid page to go to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The status of going "Back" was acquired. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewCanGoForward {#mlresult-mlwebviewcangoforward}

```cpp
MLResult MLWebViewCanGoForward(
    MLHandle web_view,
    bool * out_can_go_forward
)
```

Checks if the "Forward" action is currently valid. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| bool * |out_can_go_forward|True if "Forward" has a valid page to go to.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The status of going "Forward" was acquired. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewInjectMouseMove {#mlresult-mlwebviewinjectmousemove}

```cpp
MLResult MLWebViewInjectMouseMove(
    MLHandle web_view,
    const MLWebViewCursorState * cursor_state
)
```

Moves the WebView mouse. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) * |cursor_state|Information about the mouse movement.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The internal mouse was moved. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 




:::note
Please see MLWebViewInjectMouseButtonDown for behavior.
:::


**API Level:**
  * 21




-----------

### MLWebViewInjectMouseButtonDown {#mlresult-mlwebviewinjectmousebuttondown}

```cpp
MLResult MLWebViewInjectMouseButtonDown(
    MLHandle web_view,
    const MLWebViewCursorState * cursor_state
)
```

Sends a mouse button down/pressed event on a specific location on screen. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) * |cursor_state|Information about the mouse button event.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 




:::note
Behavior: (1) Click behavior: On mouse down, (x, y) is saved and mouse down sent. When mouse up received within 200ms, mouse up sent to previous mouse down (x, y) position so Chromium interprets as click. (2) Drag behavior: On mouse down (x, y) is saved and mouse down sent. When mouse moves within timeout period of 200ms, webview will continue to wait. Otherwise, mouse move sent to current (x, y) location to let Chromium interpret as drag. (3) These click and drag behaviors make it possible to just send mouse events as they are received and the underlying Chromium implementation will work as expected.
:::



-----------

### MLWebViewInjectMouseButtonUp {#mlresult-mlwebviewinjectmousebuttonup}

```cpp
MLResult MLWebViewInjectMouseButtonUp(
    MLHandle web_view,
    const MLWebViewCursorState * cursor_state
)
```

Sends a mouse button up/released event on a specific location on screen. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| const [MLWebViewCursorState](/api-ref/api/Modules/group___web_view/struct_m_l_web_view_cursor_state.md) * |cursor_state|Information about the mouse button event.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If successful. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 




:::note
Please see MLWebViewInjectMouseButtonDown for behavior.
:::



-----------

### MLWebViewInjectChar {#mlresult-mlwebviewinjectchar}

```cpp
MLResult MLWebViewInjectChar(
    MLHandle web_view,
    uint32_t char_utf32
)
```

Sends a printable char keyboard event to MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|Target webview. |
| uint32_t |char_utf32|Printable char utf code.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The key event was injected. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewInjectKeyDown {#mlresult-mlwebviewinjectkeydown}

```cpp
MLResult MLWebViewInjectKeyDown(
    MLHandle web_view,
    int32_t key_code,
    uint32_t modifier_mask
)
```

Sends a key down/pressed event to MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|Target webview. |
| int32_t |key_code|Key code. |
| uint32_t |modifier_mask|Should be one or combination of [MLWebViewEventFlags](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The key event was injected. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewInjectKeyUp {#mlresult-mlwebviewinjectkeyup}

```cpp
MLResult MLWebViewInjectKeyUp(
    MLHandle web_view,
    int32_t key_code,
    uint32_t modifier_mask
)
```

Sends a key up/release event to MLWebView. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|Target webview. |
| int32_t |key_code|Key code. |
| uint32_t |modifier_mask|Should be one or combination of [MLWebViewEventFlags](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebvieweventflags).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The key event was injected. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewGetScrollSize {#mlresult-mlwebviewgetscrollsize}

```cpp
MLResult MLWebViewGetScrollSize(
    MLHandle web_view,
    int32_t * out_width,
    int32_t * out_height
)
```

This API is stubbed out and translates to a no-op. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| int32_t * |out_width|The number representing the entire width of the webview, in pixels. |
| int32_t * |out_height|The number representing the entire height of the webview, in pixels.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_NotImplemented|This API is stubbed out and translates to a no-op.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal.
:::


**API Level:**
  * 21




-----------

### MLWebViewGetScrollOffset {#mlresult-mlwebviewgetscrolloffset}

```cpp
MLResult MLWebViewGetScrollOffset(
    MLHandle web_view,
    int32_t * out_x,
    int32_t * out_y
)
```

This API is stubbed out and translates to a no-op. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| int32_t * |out_x|The number representing the horizontal offset of the webview, in pixels. |
| int32_t * |out_y|The number representing the vertical offset of the webview, in pixels.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_NotImplemented|This API is stubbed out and translates to a no-op.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.2.0. Scheduled for removal.
:::


**API Level:**
  * 21




-----------

### MLWebViewScrollBy {#mlresult-mlwebviewscrollby}

```cpp
MLResult MLWebViewScrollBy(
    MLHandle web_view,
    const int32_t x_pixels,
    const int32_t y_pixels
)
```

Triggers a mouse "Scroll" event. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| const int32_t |x_pixels|The number of pixels to scroll on the x axis. |
| const int32_t |y_pixels|The number of pixels to scroll on the y axis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The MLWebView was scrolled. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewGetZoomFactor {#mlresult-mlwebviewgetzoomfactor}

```cpp
MLResult MLWebViewGetZoomFactor(
    MLHandle web_view,
    double * out_zoom_factor
)
```

Get the current zoom factor. The default zoom factor is 1.0. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| double * |out_zoom_factor|Current numeric value for zoom factor.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The out_zoom_factor parameter was updated with the current zoom value. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to get the zoom factor due to an internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewZoomIn {#mlresult-mlwebviewzoomin}

```cpp
MLResult MLWebViewZoomIn(
    MLHandle web_view
)
```

Zoom in one level. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The MLWebView zoomed in. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to zoom in due to an internal error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLWebViewResult_ZoomLimitReached|if cannot zoom in any further.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewZoomOut {#mlresult-mlwebviewzoomout}

```cpp
MLResult MLWebViewZoomOut(
    MLHandle web_view
)
```

Zoom out one level. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The MLWebView zoomed out. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to zoom out due to an internal error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLWebViewResult_ZoomLimitReached|if cannot zoom out any further.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewResetZoom {#mlresult-mlwebviewresetzoom}

```cpp
MLResult MLWebViewResetZoom(
    MLHandle web_view
)
```

Reset zoom level to 1.0. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The MLWebView zoom was reset. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to reset zoom due to an internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewGetFrameTransformMatrix {#mlresult-mlwebviewgetframetransformmatrix}

```cpp
MLResult MLWebViewGetFrameTransformMatrix(
    MLHandle web_view,
    MLMat4f * out_matrix
)
```

Retrieves the 4x4 texture coordinate transform matrix used by all MLWebView frames. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| [MLMat4f](/api-ref/api/Modules/group___common/struct_m_l_mat4f.md) * |out_matrix|The retrieved matrix.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The constant matrix was retrieved. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2.|
**Required Permissions**:

  * None 


This transform matrix maps 2D homogeneous texture coordinates of the form (s, t, 0, 1) with s and t in the inclusive range [0, 1] to the texture coordinate that should be used to sample that location from the texture. Sampling the texture outside of the range of this transform is undefined.

The matrix is stored in column-major order so that it may be passed directly to OpenGL ES via the glLoadMatrixf or glUniformMatrix4fv functions.




**API Level:**
  * 21




-----------

### MLWebViewRemoveAllCookies {#mlresult-mlwebviewremoveallcookies}

```cpp
MLResult MLWebViewRemoveAllCookies(
    MLHandle web_view
)
```

Remove all webview cookies. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If all cookies removed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Removing all cookies failed due to an internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewClearCache {#mlresult-mlwebviewclearcache}

```cpp
MLResult MLWebViewClearCache(
    MLHandle web_view
)
```

Clear the webview cache. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_IllegalState|WebView was paused. See [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If cache cleared successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If the MLWebView handle is not ready to use if asynchronous creation was used, MLWebViewCallbacks struct version >= 2. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Clearing cache failed due to an internal error.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLWebViewPause {#mlresult-mlwebviewpause}

```cpp
MLResult MLWebViewPause(
    MLHandle web_view,
    MLWebViewPauseType pause_type
)
```

Pause the webview. Call [MLWebViewResume](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewresume) to resume. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed. |
| [MLWebViewPauseType](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype) |pause_type|The webview pause type [MLWebViewPauseType](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype). [MLWebViewPauseType_Multimedia](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype-multimedia) Is a simple pause for all multimedia of the webview. [MLWebViewPauseType_Timers](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype-timers) Intended to stop animation of the webview content. [MLWebViewPauseType_Discard](/api-ref/api/Modules/group___web_view/group___web_view.md#enums-mlwebviewpausetype-discard) Uses to free the webview rendering process but keep alive the MLWebView handle.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle or invalid MLWebViewPauseType value. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If paused successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|MLWebView handle is not ready to use. See an asynchronous mode of the [MLWebViewCreate](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcreate). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Pause failed due to an internal error. |
This method provides a multiple pause types to the webview.




**API Level:**
  * 22




-----------

### MLWebViewResume {#mlresult-mlwebviewresume}

```cpp
MLResult MLWebViewResume(
    MLHandle web_view
)
```

Resumes a webview after a previous call of the [MLWebViewPause](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewpause). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |web_view|The webview being accessed.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Unable to find the specified MLWebView handle. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If resumed successfully. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|MLWebView handle is not ready to use. See an asynchronous mode of the [MLWebViewCreate](/api-ref/api/Modules/group___web_view/group___web_view.md#mlresult-mlwebviewcreate). |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Resume failed due to an internal error. |
Resume webview to the normal operation for all webview pause types.




**API Level:**
  * 22




-----------





