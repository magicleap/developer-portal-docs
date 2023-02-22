---
id: granting-permissions
title: Granting Permissions
sidebar_position: 3
date: 06/01/2022
tags: [Permissions, ADB, Android Debug Bridge, Debugging]
keywords: [Permissions, ADB, Android Debug Bridge, Debugging]
---

## Granting Permissions

Dangerous or Runtime permissions can be enabled via the UI graphic that shows at runtime, the system menu **Settings **> Privacy**, or using [adb](/versioned_docs/version-1.1.0-dev2/guides//developer-tools/android-debug-bridge/adb-setup.md)](/versioned_docs/version-1.1.0-dev2/guides//developer-tools/android-debug-bridge/adb-setup.md).

## Permission Manager

Permissions can be allowed or revoked using Android's Permissions manager.

1. To access the permissions manager, open the Settings Application and located the **Privacy** option.


<Image url= {require("/img/settings-permissions/settings-privacy.png")} >Settings application with Privacy option highlighted</Image>

2. Then select **Permissions Manager**.

<Image url= {require("/img/settings-permissions/settings-privacy-privacymanager.png")} >Privacy screen with the Permissions Manager option highlighted</Image>


3. The Permissions Manager Screen shows all the permissions and the number of applications that are utilizing them.

<Image url= {require("/img/settings-permissions/settings-privacy-permission-manager.jpg")} >Permissions Manager Screen</Image>


4. Selecting a permission will show a list of applications that have granted or denied access to the permission.

<Image url= {require("/img/settings-permissions/settings-privacy-privacymanager-camera.png")} >Camera Permission Settings with Media Recorder application selected</Image>


5. Selecting an application allows the user to revoke or allow the selected permission.

<Image url= {require("/img/settings-permissions/settings-privacy-privacymanager-camera-app.png")} >Camera Privacy Settings for the Media Recorder application</Image>

## Runtime Permission Prompt

Dangerous permissions need to be requested at runtime. When an application requests a permission a prompt will show on the applications screen.

<Image url= {require("/img/settings-permissions/aosp-runtime-permission.jpg")} >Runtime Permissions Prompt</Image>
