---
title: Configure Unity Settings
sidebar_position: 3
date: 06/27/2022
tags: [Unity, Getting Started, Walkthroughs]
keywords: [Unity, Getting Started, Walkthroughs]
---

You will need to configure a few Unity Settings for the simulator to run properly. This section describes how to configure your Unity Project settings so that you can test your application inside the Magic Leap App simulator.

## Assign Magic Leap SDK Path

The Magic Leap SDK Path setting will only show once the Magic Leap XR package is imported. If the Magic Leap SDK path setting is not visible, make sure that the `com.magicleap.xr` package was correctly imported.

1. Open **Edit > Preferences** on Windows (or macOS: **Unity > Settings**), then navigate to **External Tools > Magic Leap**.

- Set the MLSDK path to the Magic Leap SDK you downloaded from the ML Hub earlier. For example:
  - Mac: `$HOME/MagicLeap/mlsdk/<Version>/`
  - Windows: `%USERPROFILE%/MagicLeap/mlsdk/<Version>/`

2. In the same window, if the path to the Application Simulator Runtime does not get populated automatically, check the 'Override' box and select the path to the latest version of the App Simulator Runtime package. This location can be found by clicking the 'Open folder' link underneath the package's name inside ML Hub's Package manager.

:::note
To locate the Magic Leap C SDK, open the ML Hub application and go to **Package Manager> My Tools**, under **Common Packages** expand **Magic Leap C SDK** and select the **Open Folder** or **Open Shell**. Note the path in the file explorer or shell.
:::

## XR Plugin Management

The Magic Leap XR Provider needs to be enabled before using Magic Leap's platform features. To do this:

1. Go to **File > Build Settings > Player Settings > XR Plug-in Management** and enable **Magic Leap** as a Plug-in Provider on the **Android** platform.

2. In the **Windows, Mac, Linux settings** tab, select **Magic Leap App Simulator** (formerly known as Zero Iteration). This step is required for App Simulator to run properly.

:::note
If you are having any issues applying these changes, restart the Unity Editor. An editor restart may also be required for App Simulator to run correctly.
:::

## Player Settings

For virtual content to appear in both the Unity Editor and App Simulator Device view, you will need to configure your project's graphic settings. The following instructions provide information on how to correctly configure your Unity Editor:

1. Open the Player Settings Window (**Edit > Project Settings > Player**) section, then select the 'Standalone' tab.
2. In the **Resolution and Presentation** settings, enable **Run In Background** ( **Resolution and Presentation > Resolution**).
3. Expand the **Other Settings** and under **Rendering** adjust the following graphics APIs:
   1. Uncheck – Auto Graphics API for Windows, then add **OpenGLCore**. Once added remove any other Graphics APIs. Changing this setting may restart the Unity Editor.
   2. Uncheck – Auto Graphics API for Mac, then add **Metal** (If you are using an Apple M chip) OR **OpenGLCore** (If you are using an Apple computer with an Intel Chip). Once added remove other Graphics APIs. Changing this setting may restart the Unity Editor.

