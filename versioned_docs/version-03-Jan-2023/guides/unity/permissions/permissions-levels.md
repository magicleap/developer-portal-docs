---
id: permissions-levels
title: Permission Levels
description: Learn the differences between Normal and Dangerous permissions.
sidebar_position: 3
date: 06/08/2022
tags: [Permissions, Android]
keywords: [Permissions, Android]
---

# Magic Leap Permission Levels

Magic Leap permissions come in one of two classifications or levels: **Normal** permissions and **Dangerous** permissions. Android refers to these as [**Install-time** and **Runtime** permissions](https://developer.android.com/guide/topics/permissions/overview#types), respectively.

## Normal (Install-time)

Declaring a **normal** permission in your app's AndroidManifest.xml is enough for the app to be granted that permission and have access to the associated feature or functionality.

Consequently, if a "normal" permission is excluded from AndroidManifest.xml, then the permission is implicitly denied and the app will not have access to said features.

Developers can check if a normal permission is granted using the following snippet:

```csharp

  if (MLPermissions.CheckPermission(MLPermission.HandTracking).IsOk)
  {
      //Permissions are available
  }

```

## Dangerous (Runtime)

Like normal permissions, **Dangerous** permissions must be declared in `AndroidManifest.xml`. Additionally, developers must explicitly grant the app the permission at runtime. This is normally done by issuing a **runtime request** of the permission. Note, if a **Dangerous** permission is excluded from AndroidManifest.xml, the app won't be able to request the permission at runtime.

Developers should wait at least a frame after requesting a permission, this makes sure that the request was successfully triggered before enabling a feature.

:::caution

An `Ok` result of Permissions Request does **NOT** mean permission was granted, only that the request was completed.

:::


```csharp
    private IEnumerator Start()
    {
        MLResult result = MLPermissions.RequestPermission(MLPermission.VoiceInput);
        yield return null;
        if (MLPermissions.CheckPermission(MLPermission.VoiceInput))
        {
            Debug.Log("Permission Granted");
        }
    }
```
