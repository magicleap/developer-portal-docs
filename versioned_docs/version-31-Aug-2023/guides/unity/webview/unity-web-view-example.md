---
id: unity-web-view-example
title: Web View Example
description: Learn how to interact with Magic Leap's Web View API.
sidebar_position: 1
date: 06/08/2022
tags: [Unity, WebView, Web, View]
keywords: [Unity, WebView, Web, View]
---

This section provides general examples of how to interact with the Magic Leap's WebView API inside Unity.

:::caution
This feature requires that both `WEBVIEW` permissions are enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**) and that `Internet Access` is set to **Required** in your project's settings. (**Edit > Project Settings > Player > Android Platform (Android Icon) > Other Settings > Configuration(subsection)**)
:::

## WebView Events

The Web View API provides various events that can be used to know when the service has started and when other events happen as the web view session is running. The `OnDestroy` function should un-registers from the MLWebView callbacks.

```csharp

public MLWebViewScreenBehavior webViewScreenBehavior;

    private void Start()
    {
        MLWebView.OnServiceConnected += OnServiceConnected;
        MLWebView.OnServiceDisconnected += OnServiceDisconnected;
        MLWebView.OnLoadEnded += OnLoadEnded;
        MLWebView.OnBeforeResourceLoaded += OnBeforeResourceLoaded;
        MLWebView.OnKeyboardShown += OnKeyboardShown;
        MLWebView.OnKeyboardDismissed += OnKeyboardDismissed;
        MLWebView.OnErrorLoaded += OnErrorLoaded;
        MLWebView.OnCertificateErrorLoaded += OnCertificateErrorLoaded;
 
        webViewScreenBehavior.CreateWebViewWindow()
    }
```

### Service Connection Callbacks

The most important of the MLWebView callbacks are the OnServiceConnected/OnServiceDisconnected. These need to call into the WebViewScreenBehavior to notify the system that it is ready to start rendering content. Developers can choose to maintain a local `serviceConnected` flag to know if they should allow other functions to issue their commands.

```csharp
[SerializeField, Tooltip("Home page URL address.")]
private String homeUrl = "https://www.magicleap.com/en-us";
private bool serviceConnected = false;
private uint serviceConnectionCount = 0;

private void OnServiceConnected(IntPtr userData)
{
    if (serviceConnectionCount == 0)
    {
        webViewScreenBehavior.SetServiceConnected(true);
        serviceConnected = true;
    }
    ++serviceConnectionCount;
 
    if (userData == IntPtr.Zero)
    {
        GoToUrl(homeUrl);
    }
    else
    {
        var tabGCHandle = GCHandle.FromIntPtr(userData);
        var tab = tabGCHandle.Target as MLWebViewTabBehavior;
        tab.GoToURL(homeUrl);
    }
}
 
private void OnServiceDisconnected(IntPtr userData)
{
    // Don't check user data here as the tab will already be destroyed
    if (--serviceConnectionCount == 0)
    {
        webViewScreenBehavior.SetServiceConnected(false);
        serviceConnected = false;
    }
}
```

### On Load Callbacks

The other callbacks issue typical web browser result status based on if the web page loaded successfully or not. These receive a `userData` field which in the current architecture is a `GCHandle` reference to the `MLWebViewTabBehavior` object that is associated with the `WebViewTabBehavior`. It is used as such in the OnLoadEnded to trigger an update to the tab's label.

```csharp
[SerializeField, Tooltip("Input field with current URL.")]
private InputField urlBar;

private void OnLoadEnded(IntPtr userData, bool isMainFrame, int httpStatusCode)
{
    if (userData == IntPtr.Zero)
    {
        if (MagicLeapNativeBindings.MLHandleIsValid(webViewScreenBehavior.webViewHandle))
        {
            urlBar.text = MLWebView.GetURL(webViewScreenBehavior.webViewHandle);
        }
    }
    else
    {
        var tabGCHandle = GCHandle.FromIntPtr(userData);
        var tab = tabGCHandle.Target as MLWebViewTabBehavior;
        tab.UpdateTabLabel();
 
        if (webViewScreenBehavior.webViewHandle == tab.webViewHandle)
        {
            urlBar.text = MLWebView.GetURL(webViewScreenBehavior.webViewHandle);
        }
    }
}
```

### Keyboard Callbacks

Additionally the `OnKeyboardShown` and `OnKeyboardDismissed` calls handle configuring the virtual keyboard to provide input to the WebViewScreenBehavior. Note, a basic virtual keyboard is provided in the Magic Leap SDK Unity Package.

```csharp
private void OnKeyboardShown(MLWebView.InputFieldData keyboardShowData)
{
    if (virtualKeyboard != null)
    {
        // TODO there is an issue where we are receiving this callback twice so remove
        // listener before adding it again
        virtualKeyboard.OnCharacterAdded.RemoveListener(OnCharacterAdded);
        virtualKeyboard.OnCharacterAdded.AddListener(OnCharacterAdded);
        virtualKeyboard.OnCharacterDeleted.RemoveListener(OnCharacterDeleted);
        virtualKeyboard.OnCharacterDeleted.AddListener(OnCharacterDeleted);
        virtualKeyboard.Open();
    }
}
 
private void OnKeyboardDismissed()
{
    if (virtualKeyboard != null)
    {
        virtualKeyboard.OnCharacterAdded.RemoveListener(OnCharacterAdded);
        virtualKeyboard.OnCharacterDeleted.RemoveListener(OnCharacterDeleted);
        virtualKeyboard.Cancel();
    }
}
 
private void OnCharacterAdded(char character)
{
    MLWebView.InjectChar(character);
}
 
private void OnCharacterDeleted()
{
    MLWebView.InjectKeyDown(MLWebView.KeyCode.Delete, (uint)MLWebView.EventFlags.None);
    MLWebView.InjectKeyUp(MLWebView.KeyCode.Delete, (uint)MLWebView.EventFlags.None);
}
```

## Go To Url

The various functions that expose the MLWebView functionality to the buttons and input field of the UI are trivial so only the GoToURL function will be shown here. This is used to issue the request to go to a URL address from various locations in the code and can be extended to listen to an `OnEndEdit` event from an input field

```csharp
      public void GoToUrl(String url)
        {
            if (MagicLeapNativeBindings.MLHandleIsValid(webViewScreenBehavior.webViewHandle))
            {
                if (!MLWebView.GoTo(webViewScreenBehavior.webViewHandle, url).IsOk)
                {
                    Debug.LogError("Failed to navigate to url " + url);
                }
            }
        }
```

