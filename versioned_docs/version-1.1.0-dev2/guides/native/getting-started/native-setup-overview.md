---
id: native-setup-overview
title: Native Setup Overview
sidebar_position: 1
date: 06/23/2022
tags: [Android, Native, Getting Started, C-API, Magic Leap C SDK 0.52.2, Android Studio, Command Line]
keywords: [Android, Native, Getting Started, C-API, Magic Leap C SDK 0.52.2, Android Studio, Command Line]
---


## Overview

There are two main ways of building Native applications, a [command line workflow](/versioned_docs/version-1.1.0-dev2/guides/native/getting-started/command-line-workflow.md) and an [Android Studio workflow](/versioned_docs/version-1.1.0-dev2/guides/native/getting-started/android-studio-workflow.md). Use whichever you prefer, however both require the following prerequisite downloads.

## Prerequisites

1. Install the *Chipmunk* version of [Android Studio](https://developer.android.com/studio/archive).

:::note
Make sure you have installed Android SDK Tools 31, Android SDK Command Line, and Android SDK Platform Tools in Android Studio if they did not automatically download.
:::

2. Open the SDK Manager

You can find the SDK Manager by either selecting **More Actions** on the landing screen, or from the **Tools** dropdown from within a project.

![SDK Manager Option in More Actions Dropdown](/img/native/getting-started/android-studio-sdk-manager.png)

![SDK Manager Option in Tools Dropdown](/img/migration-images/a_showSDK.png)

3. Install [Android SDK 10 (Q) API Level 29](https://developer.android.com/about/versions/10/setup-sdk) under **SDK Platforms**.

![Android SDK option in Android Studio](/img/migration-images/b_showSDK.png)

4. Install [Android NDK](https://developer.android.com/ndk) *version 25.0.8775105* under **SDK Tools**.

:::tip
If you don't see different version options, check **Show Package Details** at the bottom right.
:::

![Android NDK option in Android Studio](/img/migration-images/c_showNDK.png)

5. Install [Cmake](https://cmake.org/) *version 3.22.1* under **SDK Tools**.

![CMake Option in Android Studio](/img/migration-images/d_showCmake.png)

:::note
If you don't already have [Vulkan](https://www.lunarg.com/vulkan-sdk/) installed, you'll need that as well.
:::

:::note
You may need to install Ninja if you are getting errors that CMake can't find it:

```shell
"CMake Error: CMake was unable to find a build program corresponding to "Ninja"."
```

Please see [here](https://ninja-build.org) for details on how to install Ninja.
:::
