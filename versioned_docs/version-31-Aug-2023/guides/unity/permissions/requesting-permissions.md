---
id: requesting-permissions
title: Requesting Permissions
sidebar_position: 4
description: Learn how to request or check Magic Leap permissions at runtime.
date: 06/08/2022
tags: [Permissions, Android]
keywords: [Permissions, Android]
---

# Requesting Permissions

Permissions in Magic Leap applications can be categorized under two classes: **Normal** permissions (also referred to as **Install-time** permissions) and **Dangerous** permissions (also known as **Runtime** permissions). These classifications are analogous with the Android permission system.

The Magic Leap SDK includes helper functions designed to streamline the permission request process and verification for Magic Leap-specific functionalities. You can access these functions via the `MLPermissions` API. It's recommended to use these functions to verify permissions before activating any restricted feature to avoid runtime errors.

:::tip
You can view a list of Magic Leap permissions and their corresponding security level by navigating to **Edit** > **Project Settings...** and then selecting **MagicLeap** > **Permissions** from the sidebar.

<Image url= {require("/img/unity/magicleap_permissions.jpg")} >MagicLeap Permissions</Image>
:::

## Requesting Normal (Install-time) Permissions

**Normal** permissions, also known as **Install-time** permissions, are granted automatically upon installation if [declared in your app's `AndroidManifest.xml`](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md). These permissions typically provide access to isolated, non-sensitive user data or device functionalities, such as `com.magicleap.permission.HAND_TRACKING`. Consequently if the permission is not included in your apps `AndroidManifest.xml`, they are implicitly denied.

The example below verifies if the `HAND_TRACKING` permission is declared in the Manifest, and disables its functionality if the permission wasn't declared.

```csharp
void Start()
{
    if(MLPermissions.CheckPermission(MLPermission.HandTracking).IsOk)
    {
       // continue as planned
    }
    else
    {
      this.enabled = false;
    }
}
```

Note that the function `CheckPermission()` will return:

- `MLResult.Code.Ok` if the permission has been granted.
- `MLResult.Code.PermissionDenied` if the permission has been denied.
- `MLResult.Code.InvalidParam` if the input string is null or empty.

## Requesting Dangerous (Runtime) Permissions

**Dangerous** permissions need to be [declared in the AndroidManifest.xml](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md) and also require to be explicitly **[requested at runtime](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/requesting-permissions.md#requesting-normal-install-time-permissions)**. Since these permissions offer access to potentially sensitive data, users can decide whether they want to allow these permissions or not. If the permission is denied, your application should adapt its behavior according.

Note that if a **Dangerous** permission is not included in the `AndroidManifest.xml`, your application won't have the ability to request this permission at runtime.

:::warning
The `MLResult` that gets returned upon calling the `RequestPermission()`  API reflects the status of the request, not the status of the permission (granted or denied).
:::

The following sample script initiates a request for the dangerous permission **com.magicleap.permission.EYE_TRACKING**, then saves the permission state to the `permissionGranted` variable for future reference.

```csharp
// Variable to check if EyeTracking permission has been granted by the user
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
    Debug.Log($"{permission} denied. The example will not function as expected.");
}

private void OnPermissionGranted(string permission)
{
    permissionGranted = true;
    Debug.Log($"{permission} granted. The example will function as expected.");
}
```

