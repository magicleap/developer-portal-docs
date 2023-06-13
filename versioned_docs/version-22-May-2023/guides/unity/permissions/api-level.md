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

The minimum API level is an important setting indicating to the platform which APIs are expected to be implemented. This is for backwards compatibility of newer APKs installed on older versions of the Magic Leap Android Operating system. By telling the operating system which minimum version your application supports, the operating system can determine if your APK will be compatible with its APIs.

The minimum API level for all Magic Leap 2 projects should be set to at least level 20.

The Manifest Settings panel will filter the permissions that are associated with the selected version. Anything not supported by that version will not be displayed. This version only needs to be updated when you plan on upgrading your project to take advantage of newer features as they appear on the platform.

### Android Minimum API Level

Like the Magic Leap minimum API level, Android also has a minimum API level setting. For the Magic Leap platform, this should be set to level 29 explicitly. Any other setting could cause issues with some of our platform's subsystems. The setting exists in **Project Settings > Player Settings > Android Platform (Android Icon) > Other Settings**  as shown:

![Min API Level](/img/unity/MinAPILevelPermissions.png)

