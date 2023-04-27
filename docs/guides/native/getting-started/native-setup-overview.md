---
id: native-setup-overview
title: Native Setup Overview
sidebar_position: 1
date: 06/23/2022
tags: [Android, Native, Getting Started, C-API, Magic Leap C SDK 0.52.2, Android Studio, Command Line]
keywords: [Android, Native, Getting Started, C-API, Magic Leap C SDK 0.52.2, Android Studio, Command Line]
---


## Overview

There are two main ways of building Native applications, a [command line workflow](/docs/guides/native/getting-started/command-line-workflow.md) and an [Android Studio workflow](/docs/guides/native/getting-started/android-studio-workflow.md). Use whichever you prefer, however both require the following prerequisite downloads.

## Prerequisites

1. Install the latest version of the [Vulkan SDK](https://www.lunarg.com/vulkan-sdk/).

2. Install the latest *Electric Eel* version of [Android Studio](https://developer.android.com/studio/archive). (2022.1.1 Patch 2 at time of writing)

:::note
Make sure you have installed the Android SDK Tools, Android SDK Command Line, and Android SDK Platform Tools in Android Studio if they did not automatically download.
:::

3. Open the SDK Manager

You can find the SDK Manager by either selecting **More Actions** on the landing screen, or from the **Tools** dropdown from within a project.

![SDK Manager Option in More Actions Dropdown](/img/native/getting-started/android-studio-sdk-manager.png)

![SDK Manager Option in Tools Dropdown](/img/migration-images/a_showSDK.png)

4. Install [Android SDK 10 (Q) API Level 29](https://developer.android.com/about/versions/10/setup-sdk) under **SDK Platforms**.

![Android SDK option in Android Studio](/img/migration-images/b_showSDK.png)

5. Install [Android NDK](https://developer.android.com/ndk) *version 25.0.8775105* under **SDK Tools**.

:::tip
If you don't see different version options, check **Show Package Details** at the bottom right.
:::

![Android NDK option in Android Studio](/img/migration-images/c_showNDK.png)

6. Install [Cmake](https://cmake.org/) *version 3.22.1* under **SDK Tools**.

![CMake Option in Android Studio](/img/migration-images/d_showCmake.png)

:::note
You may need to install Ninja if you are getting errors that CMake can't find it:

```shell
"CMake Error: CMake was unable to find a build program corresponding to "Ninja"."
```

Please see [here](https://ninja-build.org) for details on how to install Ninja.
:::
