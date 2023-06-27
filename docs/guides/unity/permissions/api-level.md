---
id: api-level
title: API Level
description: Learn how to declare the minimum API level so that your application can indicate which APIs are expected to be implemented. 
sidebar_position: 6
date: 06/08/2022
tags: [Permissions, Android]
keywords: [Permissions, Android]
---

## Minimum API Level

### Magic Leap Minimum API Level

The minimum API level is an important setting that tells the platform which APIs your application expects to use. It ensures compatibility of newer APKs with older versions of the Magic Leap Android Operating System. By specifying the minimum version supported by your application, the operating system can check if your APK will work with its APIs.

:::tip

All Magic Leap 2 projects should set their Magic Leap Minimum API level to at least API level 20 (**Edit** > **Project Settings...**, then select  **MagicLeap** > **Permissions** from the sidebar).

:::

The Manifest Settings panel will filter the permissions that are associated with the selected API Level. Any permission not supported by that version will not be displayed. If you plan to use newer features as they become available, update the version accordingly.

### Android Minimum API Level

In addition to the Magic Leap minimum API level, there's also a minimum API level setting for Android. For the Magic Leap platform, set it explicitly to level 29 to avoid potential issues with certain platform subsystems. You can find this setting under **Project Settings > Player Settings > Android Platform (Android Icon) > Other Settings**

<Image url= {require("/img/unity/MinAPILevelPermissions.png")} >Min API Level</Image>
