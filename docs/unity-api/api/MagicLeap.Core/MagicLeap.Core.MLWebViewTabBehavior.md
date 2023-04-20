---
title: MLWebViewTabBehavior

---

# MLWebViewTabBehavior



**NameSpace:** 
[Core](/unity-api/api/MagicLeap.Core/MagicLeap.Core.md) 





Inherits from: <br></br>MonoBehaviour




## Public Fields

### tabUrl {#string-taburl}

```csharp

public string tabUrl { get; set; }

```






-----------

### WebView {#mlwebview-webview}

MLWebView instance that this tab is associated with. 

```csharp

public MLWebView WebView { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) | API for [MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events).  |





-----------

## Public Methods

### void UpdateTabLabel {#void-updatetablabel}

```csharp
public void UpdateTabLabel()
```






-----------

### void UnselectTab {#void-unselecttab}

```csharp
public void UnselectTab()
```






-----------

### void SelectTab {#void-selecttab}

```csharp
public void SelectTab()
```






-----------

### void Resume {#void-resume}

```csharp
public void Resume()
```






-----------

### void Pause {#void-pause}

```csharp
public void Pause()
```






-----------

### void GoToUrl {#void-gotourl}

```csharp
public void GoToUrl(
    string url
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |url||






-----------

### void DestroyTab {#void-destroytab}

```csharp
public void DestroyTab()
```






-----------

### bool CreateTab {#bool-createtab}

```csharp
public bool CreateTab(
    MLWebViewTabBarBehavior tabBar,
    MLWebViewScreenBehavior webViewScreen,
    InputField addressBar
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLWebViewTabBarBehavior](/unity-api/api/MagicLeap.Core/MagicLeap.Core.MLWebViewTabBarBehavior.md) |tabBar||
| [MLWebViewScreenBehavior](/unity-api/api/MagicLeap.Core/MagicLeap.Core.MLWebViewScreenBehavior.md) |webViewScreen|This class is used to Render Web View on the texture and propagate input to Web View. |
| InputField |addressBar||






-----------

## Public Attributes

### IsPaused {#bool-ispaused}

```csharp

public bool IsPaused => isPaused;

```






-----------

## Public Events

### OnTabSelected {#action-ontabselected}

```csharp
public Action< MLWebViewTabBehavior > OnTabSelected()
```






-----------

