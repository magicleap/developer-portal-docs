---
title: Unity Overview
sidebar_position: 1
date: 12/21/2021
tags: [Android,Unity,Getting Started]
keywords: [Android,Unity,Getting Started]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

This section includes information about developing Unity applications for Magic Leap 2.

## Android SDK Features

The following features can be accessed on the Magic Leap 2 using Android APIs.

|          Feature         |                                   Notes                                   |
|------------------------|-------------------------------------------------------------------------|
|          Battery         |             [SystemInfo.batteryLevel](https://docs.unity3d.com/ScriptReference/SystemInfo-batteryLevel.html)<br /> [SystemInfo.batteryStatus](https://docs.unity3d.com/ScriptReference/SystemInfo-batteryStatus.html)             |
|  App / Device Identifier |                     [SystemInfo.deviceUniqueIdentifier](https://docs.unity3d.com/ScriptReference/SystemInfo-deviceUniqueIdentifier.html)                     |
|     Language / Locale    |                         [Application.systemLanguage](https://docs.unity3d.com/ScriptReference/Application-systemLanguage.html)                        |
|      Internet status     |                      [Application.internetReachability](https://docs.unity3d.com/ScriptReference/Application-internetReachability.html)                     |
|  Manifest Customization  |             Place [AndroidManifest.xml](https://docs.unity3d.com/Manual/android-manifest.html) in `Assets/Plugins/Android`            |
|        Permissions       |                          [Unity Android Permissions](https://docs.unity3d.com/Manual/android-RequestingPermissions.html)                         |
|      Android Intents     | Unity apps can send and receive intents with other Android apps on device |
|      Unity Profiler      |          [Unity profiler](https://docs.unity3d.com/Manual/profiler-profiling-applications.html) info for Android is valid for ML2 as well         |
| Android Logcat in Editor |                           [Android Logcat Package](https://docs.unity3d.com/Packages/com.unity.mobile.android-logcat@1.2/manual/index.html)                          |


## More Information

<DocCardList items={useCurrentSidebarCategory().items}/>

