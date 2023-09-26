---
title: Unity Debugging via Visual Studio
slug: unity-debugging-via-visual-studio
id: debugging-via-visual-studio
sidebar_position: 4
date: 06/27/2022
tags: [Unity, Debugging, Visual Studio]
keywords: [Unity, Debugging, Visual Studio]
---


This guide only covers Unity C# script debugging. For C/C++ debugging, i.e. debugging custom or third party libraries, see [Unity Native Debugging via Android Studio](/versioned_docs/version-31-Aug-2023/guides/unity/debugging/unity-native-debugging-via-android-studio.md).

## Build Settings

1. Close Visual Studio if its open.
2. In Unity, open the build settings window.
3. Select the **Development Build**, **Script Debugging** and **Wait for Managed Debugger** options.
4. Build the application and launch it on your device or select **Build And Run**.
5. When the app is launched, it will wait for the managed debugger (Visual Studio) to connect before proceeding. Note: once the managed debugger from Visual Studio is connected, press either the Volume Up or Volume Down button on the compute pack to trigger the application to continue to load for debugging.

<Image url= {require("/img/unity/unity-build-settings-vs-debuging.png")} >Unity Build Settings Window configured for VS debugging</Image>

## Debugging your Application

1. In your Unity project, right-click on the Asset folder and select **Open C# project**, to open your project in Visual Studio.

<Image url= {require("/img/unity/unity-open-csharp-project.png")} >Open C# project option</Image>

2. From Visual Studio select **Debug > Attach to Unity Debugger** from the top menu.
3. Pick your device from the **Select Unity Instance** window, then press **OK**.
   - If your device is connected via USB then it will appear in the list of drop-downs projects to attach to.
   - If your device has WiFi, click on **Input IP** and enter the IP address of your device on the default port (56000).

