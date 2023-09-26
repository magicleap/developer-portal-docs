---
id: android-permissions-unity
title: Android Permissions
description: Learn how to manage Android based Permissions inside your Magic Leap application. 
sidebar_position: 5
date: 06/08/2022
tags: [Permissions, Android]
keywords: [Permissions, Android]
---

# Android Permissions in Unity

This page will cover configuring Permissions within Unity for your application. Permissions are an important aspect of preparing your application for deployment to the device.

The **MLPermissions** API in the Unity SDK is provided as a layer between the ML developer and Unity's built-in Android Permissions API that enables integration with App Simulator, and implements MLResult return codes (consistent with all other ML API) based on permission state.

Before continuing, you should have a very basic grasp of Android's permissions theory, specifically:

1. [Permissions Overview](https://docs.unity3d.com/ScriptReference/Android.Permission.html)
2. [Declaring permissions](https://docs.unity3d.com/Manual/android-permissions-declare.html)
3. [Requesting User Permissions](https://docs.unity3d.com/ScriptReference/Android.Permission.RequestUserPermission.html)
4. [Permissions Callbacks](https://docs.unity3d.com/ScriptReference/Android.PermissionCallbacks.html)

## Android Permissions

Android permissions are not displayed in the Manifest Settings panel, only Magic Leap specific ones. Android permissions can be added manually when required. Unity provides some settings for various Android specific permissions within the **Project Settings > Player Settings > Android Platform (Android Icon) > Other Settings** such as Internet Access and Write Permission as shown:

<Image url= {require("/img/unity/AndroidPermissions.png")} >Android Permissions</Image>

These will not appear in the AndroidManifest.xml but will be automatically added when the APK is generated based on the settings selected. You can also manually add them to the AndroidManifest.xml as needed. Refer to the Android documentation on required permissions for each API. You can see the full list of permissions on [Android's Permission documentation.](https://developer.android.com/reference/android/Manifest.permission)

