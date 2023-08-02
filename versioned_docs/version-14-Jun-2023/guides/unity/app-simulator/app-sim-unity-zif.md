---
id: app-sim-unity-zif
title: Application Simulator for Unity
sidebar_position: 10
date: 09/13/2022
tags: [Application Simulator, Unity]
keywords: [Application Simulator, Unity]
---

:::tip Disambiguation and Performance Explanation
The **App Sim** (short for "**Application Simulator**) **for Unity** is an offering that is separate, but related to the App Sim. Previously, it was recommended to use the App Sim (through the Magic Leap Hub), but due to performance and compatibility reasons, it is now recommended following the steps outlined on this page and not using the pattern involving strating the App Sim in the ML Hub, switching to Unity, and clicking Play.
:::

Application Simulator can now be used from within Unity as a native plugin without having to open ML Hub. This is enabled using the Magic Leap Application Simulator for Unity package. Note: this package still requires that both the ML Hub and Application Simulator Runtime are installed.

## System Requirements

[System Requirements for the App Sim](/docs/guides/developer-tools/app-sim/app-sim-setup#system-requirements)

## Prerequisites

- Installed the [ML Hub](/docs/guides/getting-started/install-the-tools.md).
- Installed [App Simulator](/docs/guides/developer-tools/app-sim/app-sim-setup.md).
- [Configured Unity Settings](/docs/guides/unity/getting-started/configure-unity-settings.md) for Magic Leap.
- [Configured Unity Settings](/docs/guides/unity/app-simulator/configure-unity.md) for App Simulator.

## Downloading Application Simulator for Unity

<Image url= {require("/img/app-sim/zif/st-lab01-zif.png")} >Installing the Application Simulator for Unity Package through The ML Hub's Package Manager</Image>

1. Start the **ML Hub**, open the **Package Manager**, and go to the **All** tab.
2. Select the latest version of the **Magic Leap Application Simulator for Unity**, and click on the Download button.
3. Click on **Apply Changes**.

:::tip
After installing the package, search for it in the **Package Manager**, and click on **Open Folder**. This will help you with the next step of the process.

<Image url= {require("/img/app-sim/open_folder_unity_appsim.png")} >Locating the Application Simulator for Unity package through the ML Hub's Package Manager</Image>
:::

## Installing Application Simulator for Unity

1. In **Unity**, go to **Window > Package Manager**, then click on the **+** icon and select **Install Package from Tarball**.

<Image url= {require("/img/app-sim/asu/st-pac01.png")} >Install Package from Tarball through Unity's Package Manager</Image>

2. Navigate to where the package is located, and open the `com.magicleap.appsim.tgz` file.

<Image url= {require("/img/app-sim/package_location.png")} >Locate the Application Simulator for Unity Package</Image>

3. After a quick installation, the package should now be visible under the name **Magic Leap App Simulator** in the Package Manager.

<Image url= {require("/img/app-sim/app_sim_unity_package_window.png")} >The Application Simulator for Unity package is now visible</Image>

:::caution
Make sure you select **Install package from Tarball**, as otherwise, you will fail to find the package.
:::

## Running Application Simulator for Unity

A new **Magic Leap** menu will now appear under Unity's **Windows** tab. If you do not see it, restart the Unity editor.

1. Go to **Windows > Magic Leap App Simulator > Load Default Layout**.

<img src="/img/app-sim/app-sim-load-default-layout.png" width="300px" />

2. The **Target Selector** panel will now appear in the upper-left portion of your Unity editor. You can now select your Target.

<Image url= {require("/img/app-sim/asu/st-tar02.png")} >Application Simulator Target Tab - Target Selection</Image>

3. Click on the **Play** button next to your Target.

:::caution Play Buttons Explanation
With the App Sim for Unity, there are now two identical-in-appearance "Play" buttons. One is for selecting your Target and the other for playing your Scene.

<Image url= {require("/img/app-sim/app-sim-play-buttons.png")} >App Sim for Unity Play Buttons</Image>
:::

4. Click on the **Play** button in the top-center of the Unity editor window.

Once a new session has been started, you should now be able to use the Application Simulator from within the Unity editor.

### Arranging the Workspace

From the same dropdown menu, you can open panels with other Application Simulator tabs, such as **Device View**, **Hand Tracking**, and more.

Those panels offer the same functionalities as other **Unity Editor** panels — they can be positioned, scaled, arranged, and docked to your workspace to suit your preferences.

<Image url= {require("/img/app-sim/unity_editor_app_sim_view.png")} >A Unity Editor Workspace with Several Magic Leap Application Simulator Panels Docked to it</Image>
