---
title: Unity Platform Defines
sidebar_position: 5
date: 09/07/2022
tags: [Unity, Getting Started, Walkthrough, Platform, Defines, Define]
keywords: [Unity, Getting Started, Walkthrough, Platform, Defines, Define]
---

Unity does not contain a specific Platform Defines for Magic Leap 2. Instead, developers are required to create and edit custom defines symbols if they wish to use them when developing their applications. This topic describes how to create a custom directive to identify code you wish to include or exclude from your application. For example, you can choose code that will only be compiled when deploying to the Magic Leap 2.

## Prerequisites

- Magic Leap SDK and Magic Leap Unity Package Installed via the [Magic Leap Hub](/versioned_docs/version-31-Aug-2023/guides/getting-started/install-the-tools.md)

:::info
Custom platform defines are only necessary if you are developing an application for multiple platforms. The Unity engine only provides a single UNITY_ANDROID platform symbol as it does not have distinct build targets for every Android device.
:::

## Create a custom platform define in the project

Follow these instructions to add a MAGIC_LEAP_2 platform define to your application:

1. Open the Project Settings window ( **Edit > Project Settings**).
2. Select the **Player** heading on the left side.
3. Expand **Other Settings** on the right pane, and scroll until you find the **Script Compilation** section.
4. Under **Scripting Define Symbols** you'll see a list of the current define symbols that your project is using.
5. To create a new define, hit the **+** symbol.
6. In the new blank, type in a custom define symbol. For this example, we'll be using **MAGIC_LEAP_2**.
7. Press **Apply** to rebuild the project scripts.

<Image url= {require("/img/unity/ProjectSettingsPlayerDefines.png")} >Add custom scripting define symbol</Image>

## Use the new define in your code

To use the new scripting define in your code, you can simply add a `#if` statement anywhere you'd like the code to apply:

```csharp
#if MAGIC_LEAP_2
    //do things here only on the magic leap 2
#endif 
```

If you would like to build for another device and don't wish to include the MAGIC_LEAP_2 specific code, simply remove the definition from your project settings window. Any code within your MAGIC_LEAP_2 define will not be used. To learn more see Unity's [Platform Dependent Compilation](https://docs.unity3d.com/Manual/PlatformDependentCompilation.html) guide.

