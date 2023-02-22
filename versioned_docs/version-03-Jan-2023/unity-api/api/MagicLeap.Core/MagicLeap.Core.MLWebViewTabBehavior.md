---
title: MLWebViewTabBehavior

---

# MLWebViewTabBehavior



**NameSpace:** 
[Core](/versioned_docs/version-03-Jan-2023/unity-api/api/MagicLeap.Core/MagicLeap.Core.md) 





Inherits from: <br></br>MonoBehaviour




## Public Fields

### WebView {#mlwebview-webview}

MLWebView instance that this tab is associated with. 

```csharp

public MLWebView WebView { get; set; }

```

| Type | Description  | 
|--|--|
| [MLWebView](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) | API for [MLWebView](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events).  |





-----------

### tabUrl {#string-taburl}

```csharp

public string tabUrl { get; set; }

```






-----------

## Public Methods

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
| [MLWebViewTabBarBehavior](/versioned_docs/version-03-Jan-2023/unity-api/api/MagicLeap.Core/MagicLeap.Core.MLWebViewTabBarBehavior.md) |tabBar||
| [MLWebViewScreenBehavior](/versioned_docs/version-03-Jan-2023/unity-api/api/MagicLeap.Core/MagicLeap.Core.MLWebViewScreenBehavior.md) |webViewScreen|This class is used to Render Web View on the texture and propagate input to Web View. |
| InputField |addressBar||






-----------

### void DestroyTab {#void-destroytab}

```csharp
public void DestroyTab()
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

### void SelectTab {#void-selecttab}

```csharp
public void SelectTab()
```






-----------

### void UnselectTab {#void-unselecttab}

```csharp
public void UnselectTab()
```






-----------

### void UpdateTabLabel {#void-updatetablabel}

```csharp
public void UpdateTabLabel()
```






-----------

