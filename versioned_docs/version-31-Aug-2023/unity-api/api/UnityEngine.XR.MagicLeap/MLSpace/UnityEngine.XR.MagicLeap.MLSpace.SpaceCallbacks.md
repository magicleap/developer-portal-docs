---
title: SpaceCallbacks
summary: a structure containing callbacks for events related to the space. this structure must be initialized by calling #mlspacecallbacksinit before use. application can unregisterstop receiving callbacks at any time by setting the corresponding callback to null. 

---

# SpaceCallbacks




A structure containing callbacks for events related to the [Space](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). This structure must be initialized by calling #MLSpaceCallbacksInit before use. Application can unregister(stop receiving callbacks) at any time by setting the corresponding callback to NULL.   





## Public Methods

### [SpaceCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceCallbacks.md) Create {#spacecallbacks-create}

Initialize default values for #SpaceCallbacks. 

```csharp
public static SpaceCallbacks Create(
    uint version =1u
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### OnLocalizationChangedCallbacks {#mlspacedelegate-onlocalizationchangedcallbacks}

This callback will be invoked whenever there is an update to the localization status. Localization events can occur when the application requests for localization via #MLSpaceRequestLocalization or due to other events outside the control of the app such as head tracking failure, localization loss. 

```csharp

public MLSpaceDelegate OnLocalizationChangedCallbacks;

```






-----------

### Version {#uint-version}

Version of the structure. 

```csharp

public uint Version;

```






-----------


