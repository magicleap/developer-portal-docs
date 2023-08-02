---
title: MLWebViewTabBarBehavior

---

# MLWebViewTabBarBehavior



**NameSpace:** 
[Core](/unity-api/api/MagicLeap.Core/MagicLeap.Core.md) 





Inherits from: <br></br>MonoBehaviour




## Public Fields

### currentTab {#mlwebviewtabbehavior-currenttab}

```csharp

public MLWebViewTabBehavior currentTab { get; set; }

```






-----------

## Public Methods

### void CreatePopupTab {#void-createpopuptab}

```csharp
public void CreatePopupTab(
    MLWebView popupWebView,
    ulong popupID,
    string url
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |popupWebView|API for [MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events). |
| ulong |popupID||
| string |url||






-----------

### void CreateTab {#void-createtab}

```csharp
public void CreateTab()
```






-----------

### void DestroyCurrentTab {#void-destroycurrenttab}

```csharp
public void DestroyCurrentTab()
```






-----------

### [MLWebViewTabBehavior](/unity-api/api/MagicLeap.Core/MagicLeap.Core.MLWebViewTabBehavior.md) [] GetAllTabs {#mlwebviewtabbehavior-getalltabs}

```csharp
public MLWebViewTabBehavior [] GetAllTabs()
```






-----------

### [MLWebViewTabBehavior](/unity-api/api/MagicLeap.Core/MagicLeap.Core.MLWebViewTabBehavior.md) GetTab {#mlwebviewtabbehavior-gettab}

```csharp
public MLWebViewTabBehavior GetTab(
    MLWebView webView
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) |webView|API for [MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events). |






-----------

### void SelectTab {#void-selecttab}

```csharp
public void SelectTab(
    MLWebViewTabBehavior tab
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebViewTabBehavior](/unity-api/api/MagicLeap.Core/MagicLeap.Core.MLWebViewTabBehavior.md) |tab||






-----------

## Public Attributes

### OnTabCreated {#action-ontabcreated}

```csharp

public Action< MLWebViewTabBehavior, string > OnTabCreated;

```






-----------

### OnTabDestroyed {#action-ontabdestroyed}

```csharp

public Action< MLWebViewTabBehavior > OnTabDestroyed;

```






-----------

