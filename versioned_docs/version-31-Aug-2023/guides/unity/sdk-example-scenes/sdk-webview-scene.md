---
id: sdk-webview-scene
title: WebView
description: An overview of the WebView scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 22
date: 06/07/2022
tags: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, WebView, Browser, Input, Internet]
keywords: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, WebView, Browser, Input, Internet]
---

## Overview

This example demonstrates usage of the **WebView API**.

Point the controller to the WebView window to interact with the browser.

## Project Setup

:::tip
For instructions on installing the SDK Examples Project and building this scene, follow the [**Examples Project Install Guide**](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md). The WebView scene is located under `Assets/MagicLeap/Examples/Scenes/WebView.unity`.
:::

### Requirements

- Unity Editor 2022.2 (Pure Android) or newer
- Magic Leap XR Package 7.0.0 preview or newer
- MagicLeap.unitypackage 0.53.0 or newer
- Magic Leap OS from 04/27/2022 or newer

1. Meshing requires the following settings, under *Edit > Project Settings > Magic Leap > Manifest Settings*
   1. API Level set to 20 (or greater)
   2. **WEBVIEW** permission enabled

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-permissions.png")} >Magic Leap Manifest Settings under Project Settings</Image>

2. Go to *Edit > Project Settings > Player > Android Platform (Android Icon) > Other Settings > Configuration (subsection)* and ensure that **Internet Access** is set to **Required**.

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-internet.png")} >Internet Access Setting under Player Settings</Image>

## Scene Layout

The example Web View scene has the following layout. If you are starting from scratch you will want to set up your scene similarly. We will cover each of the major components of the scene and how they are configured.

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-a-layout.png")} >Scene Hierarchy Layout</Image>

### XR Rig

Like all other example scenes, this scene utilizes the XR Rig prefab which is available within the [Magic Leap Unity SDK Package](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings.md). It provides both the Main Camera and Controller GameObjects (among other important AR Session components). The controller is the primary input for users interacting with the screen.

### VirtualKeyboard

The **VirtualKeyboard prefab** is used to provide text input to both the AddressBar Input Field as well as for interacting with text fields within the WebView screen itself. The same prefab is used for both purposes and is available within the [Magic Leap Unity SDK Package](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings.md). Make sure that the VirtualKeyboard GameObject starts **disabled** in the project as it should only be enabled when an Input Field is selected or when the WebView indicates that the webpage wants to make the keyboard visible.

### WebViewExample

Like many other example scenes, this scene utilizes a top level **WebViewExample GameObject** to coordinate the behavior and functionality of the scene. The WebViewExample object has a **WebViewExample mono behavior script** attached to it. This script is available within the MagicLeapUnityExamples project. Custom projects will need to write their own or copy from this to handle the various WebView functions. The fields of this script can be seen here:

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-b-example.png")} >WebViewExample GameObject and Script Component</Image>

Primarily this holds the references to the **UI controls** displayed within the scene. Those can be seen as children of the Toolbar component of the Canvas. More importantly, there are references to the **WebViewScreenBehavior** and **VirtualKeyboard** GameObjects. These are used by the script to start and control the Web View Screen and to bind and toggle the virtual keyboard prefab when the web view screen indicates that the webpage wants to make the keyboard visible.

### WebViewScreen

The **WebViewScreen** is the core component of the **WebView System**. It is where the webpage content will actually be rendered. This is expected to be a mesh of some form, usually a quad. It also utilizes a **material** that uses the URP standard Unlit shader. A **mesh collider** is necessary to be able to receive `Physics.Raycast` hit results when using the controller pointer. The mesh components are configured as follows:

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-c-screen.png")} >WebViewScreen GameObject and Components</Image>

Additionally, there is a **WebViewScreenBehavior script** attached to this object, which provides the necessary functionality to allow rendering and interaction within the Web View screen. This class is included in the [Magic Leap Unity SDK Package](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings.md) to make it easier to setup a functioning Web View screen. It is configured as follows:

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-d-screen-behavior.png")} >WebViewScreen Behavior Script Component</Image>

The **Web View Width/Height** define the resolution of the texture in which the web page content will be rendered. The **Web View Mesh Renderer** should point to the WebViewScreen itself, as this is the mesh that it will supply the rendered texture to.

The **Point Ray Transform** should reference the controller prefab you are using in the scene. Here we are using the Game Controller located under the XR Rig prefab provided by the [Magic Leap Unity SDK Package](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings.md).

**Scrolling Mode** defines the scrolling behavior of the Web View content and provides two options currently.

- *Touchpad* allows for scrolling using the touchpad of the controller. Sliding your thumb up and down provides vertical scrolling, left and right provides horizontal scrolling.
- *TriggerDrag* allows for using the trigger to "grab" the web page and dragging it around will scroll the page based on the pointer location.

**Web View Handle** is used by the web view tabs to assign the current webview handle to be used when rendering the current page. Do not change this setting.

:::caution
TriggerDrag can make it difficult to interact with content on the web page that uses the trigger to select, such as links and text fields. It might however be more useful for purely informational websites.
:::

### WebView Frame Canvas

The **web view frame canvas** GameObject is a standard Unity UI canvas set to *world space*. It also has two additional behaviors attached to it. It is configured as follows:

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-e-canvas.png")} >Unity UI Canvas Game Object and Components</Image>

The first behavior is the **Graphic Raycaster** behavior. The [Graphic Raycaster](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/script-GraphicRaycaster.html) is a standard Unity UI system object used to allow for interaction with the Event System for UI components.

The second behavior is the **Tracked Device Graphic Raycaster**. This is a custom implementation of the [Graphic Raycaster](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/api/UnityEngine.XR.Interaction.Toolkit.UI.TrackedDeviceGraphicRaycaster.html) in Unity's XR Interaction Toolkit.

:::note
You may not need both the Graphic Raycaster and the Tracked Device Graphic Raycaster. For now both are included in this implementation. The Tracked Device Graphic Raycaster is required for interaction with our controller.
:::

### UI Buttons

The **Buttons** within the Canvas object are standard Unity UI Buttons, which are linked to the **WebViewExample GameObject** to drive the functionality of the sample. They are connected using the `OnClick()` event handler as follows:

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-f-ui.png")} >Unity UI Button Children</Image>

### Tab Bar

The **TabBar object** within the WebViewFrameCanvas object is an empty container object that is assigned a Horizontal Layout Group and Toggle Group behaviors (both of which are standard Unity UI classes). It is also assigned an MLWebViewTabBehavior that is used to handle creating, tracking and destroying tabs. It has 3 components that need to be assigned:

**Tab Prefab** is the prefab that defines the tab behavior itself. A simple default tab prefab is provided in the MagicLeapUnityExamples package and will be discussed later on.

**Web View Screen** is the WebViewScreen object discussed above.

**Address Bar** is the AddressBar object that is also a child of the WebViewFrameCanvas and will be discussed later on.

It also has two child buttons pre-assigned for Creating/Destroying tabs (+/- buttons respectively in the UI). These buttons OnClick actions are mapped back to functions of the TabBar itself.

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-tabbar.png")} >TabBar</Image>

### WebView Tab Prefab

The **WebViewTab prefab** is a pre-constructed MLWebViewTabBehavior object attached to a standard Unity Toggle with some modifications to remove the checkmark and make the background color change when the toggle is selected. No additional configurations need to be made to make the tab work. The code does expect there to be a text label associated with the Tab UI, which Unity UI Toggle already provides.

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-tab.png")} >Tab Prefab</Image>

### AddressBar

The **AddressBar GameObject** within the Canvas GameObject is a standard Unity UI InputField. This is mapped to the `GoToUrl` function of the **WebViewExample object** to trigger navigating to a new web page once editing of the field is done. It is connected through the `OnEndEdit()` event handler. It also has an **EventTrigger behavior** attached to it, which is mapped to the Open function of the **VirtualKeyboard object** using the `PointerClick()` event handler. The [Event Trigger](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/script-EventTrigger.html) is a standard Unity UI class. These are configured as follows:

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-g-addressbar.png")} >AddressBar UI Child Input Field</Image>

### UIEventSystem

The **UIEventSystem object** is a prefab provided by the MagicLeapUnityExamples project to make it easy to add a pre-configured EventSystem object that is compatible with the XR Interaction Toolkit. Custom projects will need to either copy the one from the MagicLeapUnityExamples project or create their own. All of the behaviors attached are Unity provided classes. The UIEventSystem is configured as follows:

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/webview/webview-h-uievent.png")} >UIEventSystem Prefab</Image>

### Additional Information

- [Unity Event System](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/api/UnityEngine.EventSystems.EventSystem.html?q=EventSystem)
- [XRUIInputModule](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/api/UnityEngine.XR.Interaction.Toolkit.UI.UIInputModule.html)
- [XRInteractionManager](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/manual/xr-interaction-manager.html?q=XR%20interaction%20Manager)

## Scene Source Code

The Web View source code is broken into three separate classes that are useful to understand. Each will be covered at a high level, not every function will be discussed, only those parts that illustrate a unique concept used in the project.

### MLWebView.cs

The MLWebView.cs file is included in the [Magic Leap Unity SDK Package](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings.md) and is the primary class for wrapping the `ml_web_view.h` api header from the Magic Leap C SDK. This follows the `MLAutoAPISingleton` model so only one instance can be accessed. All API functions are static and are intended to be called on the class itself.

:::info
Currently the `MLWebView` class is an API singleton. As a short term solution, the web view handle that the CAPI header returns is passed to the WebViewTabBehavior objects and those then pass back the handle to the WebViewScreenBehavior. We would like to refactor this a bit to make MLWebView a non-singleton and wrap up the handle management within. When that change happens, the usage pattern of `MLWebView` will change.
:::

The **creation pattern** for `MLWebView` follows from these two functions:

```csharp
public static MLResult Create(IntPtr userData, uint width, uint height, out ulong webViewHandle);
public static MLResult Destroy(ulong webViewHandle);
```

To **navigate the internet** through a running Web View (once it has been created and the WebViewRenderer has been initialized), there are the following series of functions:

```csharp
public static MLResult GoTo(ulong webViewHandle, string url);
public static MLResult Reload(ulong webViewHandle);
public static MLResult GoBack(ulong webViewHandle);
public static MLResult GoForward(ulong webViewHandle);
```

Additionally there are some **status functions** that can be polled to get information about the current Web View:

```csharp
public static string GetURL(ulong webViewHandle);
public static bool CanGoBack(ulong webViewHandle);
public static bool CanGoForward(ulong webViewHandle);
```

Finally there are a set of functions which allow for **input** to be passed to the Web View:

```csharp
public static MLResult InjectMouseMove(ulong webViewHandle, uint xPosition, uint yPosition, EventFlags modifiers);
public static MLResult InjectMouseButtonDown(ulong webViewHandle, uint xPosition, uint yPosition, EventFlags modifiers, MouseButtonType buttonType);
public static MLResult InjectMouseButtonUp(ulong webViewHandle, uint xPosition, uint yPosition, EventFlags modifiers, MouseButtonType buttonType);
public static MLResult InjectChar(ulong webViewHandle, char charUtf);
public static MLResult InjectKeyDown(ulong webViewHandle, MLWebView.KeyCode keyCode, uint modifierMask);
public static MLResult InjectKeyUp(ulong webViewHandle, MLWebView.KeyCode keyCode, uint modifierMask);
public static MLResult ScrollBy(ulong webViewHandle, uint xPixels, uint yPixels);
```

There are other status functions to get other useful information, as well as functions to interact with and control other typical web browser functionality. The full API can be found in the MLWebView.cs file along with documentation on each of the functions and it's parameters.

### MLWebViewScreenBehavior.cs

The WebViewScreenBehavior.cs file is included in the [Magic Leap Unity SDK Package](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings.md). It is derived from Monobehavior and as such is intended to be attached to a GameObject in the scene. This was covered in the [Scene Layout](#scene-layout) section above. It is intended to be used as is without extensions, we will cover some of the implementation details here to provide clarity on its function.

The WebViewScreenBehavior has a `CreateWebViewWindow` function that handles **creating and initializing the necessary components** for the web view screen, including the `YcbcrRenderer` of the `MLWebView` class. It is called by the WebViewExample code to **start the web view service**. Its implementation is as follows:

```csharp
public bool CreateWebViewWindow()
{
    if (!isInitialized)
    {
        if (MLWebView.Create(webViewWidth, webViewHeight).IsOk)         {
            CreateTexture((int)webViewWidth, (int)webViewHeight);
            isInitialized = true;
            return true;
        }
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
 
    MLWebView.WebViewRendererwebViewRenderer = new MLWebView.Renderer(ColorSpace.Linear);
    MLWebViewwebViewRenderer.WebViewRenderer.SetRenderBuffer(this.webViewTexture);
}
```

Additionally there is a matching `DestroyWebViewWindow` function that can be called to **stop the service**.

To allow the web view to render, MLWebViewScreenBehavior.cs exposes a `MLWebView.Renderer` member which extends from the `YcbcrRenderer` class:

```csharp
private MLWebView.Renderer webViewRenderer;
```

This needs to be created and configured with a RenderTexture to use for rendering.

There is a `SetServiceConnected` function that is also called from the `WebViewExample` class to indicate that the **service connected callback has been received**. Its implementation is trivial:

```csharp
public void SetServiceConnected(bool connected)
{
    isConnected = connected;
}
```

The `WebViewScreenBehavior` handles registering for various **controller actions** which will be used to interact with the running Web View, as can be seen in its `Enable` function:

```csharp
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

The `OnDisable` function **unregisters** these action handlers.

The various input handlers respond to interaction with the controller, their implementations will not be listed here. Additionally there is a `ProcessInput` function which is responsible for processing pointer raycasts against the mesh collider of the web view screen, or to process the deltas of the touchpad. It also will not be listed here.

### WebViewExample.cs

The WebViewExample.cs file is part of the MagicLeapUnityExamples project. This means that custom projects will need to implement their own version or copy the implementation provided by the examples project. It is derived from MonoBehavior and as such is intended to be attached to a GameObject in the scene. This was covered in the [Scene Layout](#scene-layout) section above.

Its primary responsibility is to **start** the `WebViewScreenBehavior`, in this case we trigger this when the MonoBehavior's `Start` function is called. It first registers for the various `MLWebView` callback delegates so it can know when the service has started and when other events happen as the web view session is running. Its relevant implementation is as follows:

```csharp
private void Start()
{
    MLWebView.OnLoadEnded += OnLoadEnded;
    MLWebView.OnBeforeResourceLoaded += OnBeforeResourceLoaded;
    MLWebView.OnServiceConnected += OnServiceConnected;
    MLWebView.OnServiceDisconnected += OnServiceDisconnected;
    MLWebView.OnKeyboardShown += OnKeyboardShown;
    MLWebView.OnKeyboardDismissed += OnKeyboardDismissed;
    MLWebView.OnErrorLoaded += OnErrorLoaded;
    MLWebView.OnCertificateErrorLoaded += OnCertificateErrorLoaded;
 
    CreateWebViewWindow();
}
```

The `OnDestroy` function likewise **unregisters** from the MLWebView callbacks.

The most important of these callbacks are `OnServiceConnected`/`OnServiceDisconnected`. These need to call into the `WebViewScreenBehavior` to notify the system that it is **ready to start rendering content**. It maintains its own local `serviceConnected` flag to assist in knowing if it should allow for other functions to issue their commands. Their implementations are as follows:

```csharp
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

The other callbacks issue typical **web browser result status** based on if the web page loaded successfully or not. These receive a `userData` field which in the current architecture is a GCHandle reference to the MLWebViewTabBehavior object that is associated with the WebView tab. It is used as such in the `OnLoadEnded` to trigger an update to the tab's label.

```csharp
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
    loadStatus = String.Format("Success - {0}", httpStatusCode.ToString());
}
```

Additionally the `OnKeyboardShown` and `OnKeyboardDismissed` calls handle configuring the **virtual keyboard** to provide input to the `WebViewScreenBehavior`. Their implementations are as follows:

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

The various functions that expose the `MLWebView` functionality to the buttons and input field of the UI are very trivial so only the `GoToURL` function will be shown here. This is used to issue the **request to go to a url address** from various locations in the code and on the `OnEndEdit` event handler of the Address Bar input field as was covered in the [Scene Layout](#scene-layout) section above. Its code is as follows:

```csharp
public void GoToUrl(String url)
{
    if (!MLWebView.GoTo(url).IsOk)
    {
        Debug.LogError("Failed to navigate to url " + url);
    }
}
```

### MLWebViewTabBarBehavior.cs

MLWebViewTabBarBehavior handles creating and managing tabs associated with an MLWebViewScreenBehavior objects. The public API for this object is as follows:

```csharp
public void CreateTab()
public void SelectTab(MLWebViewTabBehavior tab)
public MLWebViewTabBehavior[] GetAllTabs()
public MLWebViewTabBehavior GetTab(ulong webViewHandle)
public void DestroyCurrentTab()
```

### MLWebViewTabBehavior.cs

MLWebViewTabBehavior handles maintaining ownership of the WebView Handle that is returned by the WebView API. The public API for this object is as follows:

```csharp
public bool CreateTab(MLWebViewTabBarBehavior tabBar, MLWebViewScreenBehavior webViewScreen)   // called by MLWebViewTabBarBehavior and should not be called otherwise
public void SelectTab()
public void UnselectTab()
public void DestroyTab()
public void GoToURL(string url)
public void UpdateTabLabel()
```

