---
id: unity-web-view-api
title: Web View API Overview
description: Information on how to create your own Web View with the Magic Leap Unity SDK. 
sidebar_position: 0
date: 06/08/2022
tags: [Unity, WebView, Web, View]
keywords: [Unity, WebView, Web, View]
---

# Web View API Overview

Magic Leap 2 allows developers to display web pages directly inside their application and interact with it, similar to an iframe inside a webpage. The Magic Leap Unity SDK includes components that make embedding WebViews inside your application relatively easy. See the WebView Example in the Unity Example project for reference.

:::caution
This feature requires that both `WEBVIEW` permissions are enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**) and that `Internet Access` is set to **Required** in your project's settings. (**Edit > Project Settings > Player > Android Platform (Android Icon) > Other Settings > Configuration(subsection)**)
:::

## MLWebViewScreenBehavior

The `WebViewScreenBehavior` component is included in the `com.magicleap.unitysdk` package. Developers can attach this component to a GameObject in the scene that will render the WebView contents. It is intended to be used as is without extensions, implementation details can be found below to provide clarity on its function.

### Start/Stopping

Developers should call the `CreateWebViewWindow` function to create and initialize the necessary components for the WebView screen. Additionally, there is a matching `DestroyWebViewWindow` function that can be called to stop the service.

```csharp  title="MLWebViewScreenBehavior snippet"
public bool CreateWebViewWindow()
{
    if (!isInitialized)
    {
        CreateTexture((int)webViewWidth, (int)webViewHeight);
        isInitialized = true;
        return true;
    }
    return false;
}
 
private void CreateTexture(int width, int height)
{
    width = Mathf.Max(width, 1);
    height = Mathf.Max(height, 1);
 
    if (webViewTexture != null && (webViewTexture.width != width || webViewTexture.height != height))
    {
        Destroy(webViewTexture);
        webViewTexture = null;
    }
 
    if (webViewTexture == null)
    {
        // Create texture with given dimensions
        webViewTexture = new RenderTexture(width, height, 0, RenderTextureFormat.ARGB32, RenderTextureReadWrite.Linear);
 
        // clear the texture
        RenderTexture rt = RenderTexture.active;
        RenderTexture.active = webViewTexture;
        GL.Clear(true, true, Color.clear);
        RenderTexture.active = rt;
 
        // Set texture on quad
        webViewMeshRenderer.material.mainTexture = this.webViewTexture;
    }
 
    webViewRenderer = new MLWebView.Renderer(ColorSpace.Linear);
    webViewRenderer.SetRenderBuffer(this.webViewTexture);
}
```

### Renderer

To allow the WebView to render, `MLWebViewScreenBehavior.cs` exposes a `MLWebView.Renderer` member which extends from the `YcbcrRenderer` class. It is created and configured with a RenderTexture when `MLWebViewScreenBehavior.CreateWebViewWindow()` is called.

```csharp  title="MLWebViewScreenBehavior Renderer snippet"

private MLWebView.Renderer webViewRenderer;

```

### Input

The `WebViewScreenBehavior` handles registering for various controller actions which will be used to interact with the running WebView as can be seen in its `OnEnable` function.

```csharp title="MLWebViewScreenBehavior OnEnable snippet"


private void OnEnable()
{
   mlInputs = new MagicLeapInputs();
   mlInputs.Enable();
   controllerActions = new MagicLeapInputs.ControllerActions(mlInputs);
 
   controllerActions.Touchpad1Position.performed += HandleOnTouchpadPosition;
   controllerActions.Touchpad1Force.performed += HandleOnTouchpadForceDown;
   controllerActions.Touchpad1Force.canceled += HandleOnTouchpadForceUp;
   controllerActions.Trigger.performed += HandleTriggerDown;
   controllerActions.Trigger.canceled += HandleTriggerUp;
}

```

### Connection

To verify that the WebView Service is connected properly, developers should call the `SetServiceConnected` function. This can be done after receiving the `MLWebView.OnServiceConnected` callback. While `MLWebView.OnServiceDisconnected` can be used to notify the WebView that the service is disconnected .

```csharp title="MLWebViewScreenBehavior connection snippet"

public void SetServiceConnected(bool connected)
{
    isConnected = connected;
}

```

