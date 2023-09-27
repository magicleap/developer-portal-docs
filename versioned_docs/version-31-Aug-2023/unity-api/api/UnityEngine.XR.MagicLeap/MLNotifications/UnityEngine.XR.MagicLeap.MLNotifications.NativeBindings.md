---
title: NativeBindings
summary: see ml-system-notification-manager.h for additional comments. 

---

# NativeBindings




See ml&#95;system&#95;notification&#95;manager.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSystemNotificationManagerCreate {#mlresultcode-mlsystemnotificationmanagercreate}

Create System Notification manager client. 

```csharp
public MLResult.Code MLSystemNotificationManagerCreate(
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSystemNotificationManagerDestroy {#mlresultcode-mlsystemnotificationmanagerdestroy}

Destroy System Notification manager client. 

```csharp
public MLResult.Code MLSystemNotificationManagerDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLSystemNotificationManagerSetNotifications {#mlresultcode-mlsystemnotificationmanagersetnotifications}

Suppress/Unsuppress System Notifications. 

```csharp
public MLResult.Code MLSystemNotificationManagerSetNotifications(
    ulong handle,
    bool suppress
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| bool |suppress||






-----------


