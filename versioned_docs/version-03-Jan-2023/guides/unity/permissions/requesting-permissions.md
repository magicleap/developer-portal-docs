---
id: requesting-permissions
title: Requesting Permissions
sidebar_position: 4
description: Learn how to request or check Magic Leap permissions at runtime.
date: 06/08/2022
tags: [Permissions, Android]
keywords: [Permissions, Android]
---


The Magic Leap SDK includes helper functions to make requesting and checking Magic Leap specific features easier. These functions can be accessed via the `MLPermissions` API.


## Checking Permissions

Before your app tries to do something that depends on an Android or custom Magic Leap permission, you should first ensure the permission has been granted to the app. Normal permissions are granted by [declaring them in the manifest](/versioned_docs/version-03-Jan-2023/guides/unity/permissions/declaring-permissions.md), while dangerous permissions must be declared, then requested at runtime.

For a simple example, consider the **normal** permission, **com.magicleap.permission.HAND_TRACKING**. Since this is an _install-time_ permission, there is no runtime requesting involved: the permission is either granted by [inclusion in AndroidManifest.xml](/versioned_docs/version-03-Jan-2023/guides/unity/permissions/declaring-permissions.md), or it is considered denied.

So, your script might include something as simple as this:

```csharp
void Start()
{
    if(!MLPermissions.CheckPermission(MLPermission.HandTracking).IsOk)
    {
        enabled = false;
        return;
    }
    else
    {
        // proceed as normal
    }
}
```

This will check when the scene loads if the app has HEAD_POSE permission, and if not, the script is disabled and returns from `Start()` early.

:::info

Some APIs within the Unity SDK include calls to `CheckPermission` for any associated permission at key code paths, but it is recommended that app developers still insert checks in their own scripts, just in case.

:::

## Requesting Permissions

In the case of **dangerous** permissions, permissions must be [declared in AndroidManifest.xml](/versioned_docs/version-03-Jan-2023/guides/unity/permissions/declaring-permissions.md), then your app must issue a **runtime request** to the user for the permission and only proceed if the user granted permission at the prompt. If they denied the permission, how you choose to respond is up to you and how you want to design your app's behavior.

:::caution

The  `MLResult` returned after calling the `RequestPermission()` API refers to the status of the request and does not indicate if the permission was granted or not.

:::

This example script requests and then checks for the dangerous permission **com.magicleap.permission.EYE_TRACKING**:

```csharp
// Was EyeTracking permission granted by user
private bool permissionGranted = false;
private readonly MLPermissions.Callbacks permissionCallbacks = new MLPermissions.Callbacks();

private void Awake()
{
    permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
    permissionCallbacks.OnPermissionDenied += OnPermissionDenied;
    permissionCallbacks.OnPermissionDeniedAndDontAskAgain += OnPermissionDenied;
}

private void OnDestroy()
{
    permissionCallbacks.OnPermissionGranted -= OnPermissionGranted;
    permissionCallbacks.OnPermissionDenied -= OnPermissionDenied;
    permissionCallbacks.OnPermissionDeniedAndDontAskAgain -= OnPermissionDenied;
}

void Start()
{
    MLPermissions.RequestPermission(MLPermission.EyeTracking, permissionCallbacks);
}

private void OnPermissionDenied(string permission)
{
    Debug.Log($"{permission} denied, example won't function.");
}

private void OnPermissionGranted(string permission)
{
    permissionGranted = true;
    Debug.Log($"{permission} granted, example will function.");
}

```

The snippets above are simplified examples. It is recommended that s should be requested as _close_ to the calls to restricted features as possible, which will likely result in more complex check/request patterns throughout your app scripts.

## API Overview

This section includes a description of the functions available to developers through the MLPermissions API.

```csharp
// Query whether or not the specified permission has been granted to the app. 
//Normal level permissions are automatically granted if included in the app manifest.
// If it's missing from the manifest, the permission is not available
public MLResult CheckPermission (string permission){}
```
**Returns**: 
- `MLResult.Code.Ok` if the permission is granted
- `MLResult.Code.PermissionDenied` if the permission has been denied.
- `MLResult.Code.InvalidParam` if the string is empty or null
- `MLResult.Code.Pending` if the permission request is still pending

```csharp
// Queue a system prompt which will pause the app and request access to the specified permission.
public MLResult RequestPermission (string permission, Callbacks callbacks){}
```

**Returns**: 
- `MLResult.Code.Ok` if the permission request was successful
- `MLResult.Code.InvalidParam` if the string is empty or null
- `MLResult.Code.Pending` if the permission request is still pending

```csharp
// Queue requests for multiple permissions at once using a single call.
public MLResult RequestPermissions (params string\[\] permissions, Callbacks callbacks){}
```

**Returns**: 
- `MLResult.Code.Ok` if the permission was successful
- `MLResult.Code.InvalidParam` if the string is empty or null
- `MLResult.Code.Pending` if the permission request is still pending

You can subscribe to the following callbacks to act on permission results:

```csharp

private void OnPermissionGranted(string permission)

private void OnPermissionDenied(string permission)

private void OnPermissionDeniedDontAskAgain(string permission)

```
