---
id: declaring-permissions
title: Declaring Permissions
description: Learn how to declare permissions to access normal features or request access to dangerous ones.
sidebar_position: 2
date: 06/08/2022
tags: [Permissions, Android]
keywords: [Permissions, Android]
---

# Declaring Permissions 

To declare permissions in your Unity app, you must list them in your **AndroidManifest.xml** file.

## Magic Leap Permissions

The `com.magicleap.unitysdk` package includes an editor tool that allows developers to declare permissions using an in-editor tool. This tool can be found under **Project Settings > Magic Leap > Manifest Settings.**

By default this page will appear as follows:

<Image url= {require("/img/unity/PermissionsSettingsManifest.png")} >Permissions Settings</Image>

:::caution

The warning at the bottom of the page indicates that a custom AndroidManfiest.xml file was not found within the project. This is required to include Magic Leap custom permissions as part of the manifest that is ultimately generated and packaged with your APK.

:::

To generate a custom AndroidManifest follow the instructions listed by going to **Project Settings > Player Settings > Android Platform (Android Icon) > Publishing Settings** and selecting the option Custom Main Manifest as shown:

<Image url= {require("/img/unity/CustomMainManifest.png")} >Custom Main Manifest</Image>

This will generate a file within the project under **Assets/Plugins/Android/AndroidManifest.xml** which will be a standard Android Manifest definition file. This file can be manually updated or via the Manifest Settings.

<Image url= {require("/img/unity/ManifestSettingsPermissions.png")} >Default Manifest Settings Window</Image>

### Manifest template

The manifest template does not need to be a complete AndroidManifest.xml. Instead, any XML tags you add will be _merged_ into the default AndroidManifest.xml that Unity normally generates at build time in the gradle project.

Example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.unity3d.player" xmlns:tools="http://schemas.android.com/tools">
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="com.magicleap.permission.EYE_TRACKING" />
  <uses-permission android:name="com.magicleap.permission.WEBVIEW" />
</manifest>
```

## Determining Which Permissions Are Required

You only need to include permissions for features that your application is actively using. To determine which permission is required for which feature, refer to the documentation on the developer portal here: [https://developer.magicleap.cloud/learn/docs/api-ref/Pages/permissions](/versioned_docs/version-31-Aug-2023/api-ref/api/Pages/permissions.md). Additionally, the MagicLeapUnityExamples project, each sample scene lists which permissions are required for the feature to run.

For example, if you want to use the Meshing or the Planes API, the permission **com.magicleap.permission.WORLD_RECONSTRUCTION** would be required.

