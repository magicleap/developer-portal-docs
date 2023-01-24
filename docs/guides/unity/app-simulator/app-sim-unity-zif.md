---
id: app-sim-unity-zif
title: Application Simulator for Unity
sidebar_position: 10
date: 09/13/2022
tags: [Application Simulator, Unity]
keywords: [Application Simulator, Unity]
---

Application Simulator can now be used from within Unity as a native plugin without having to open ML Hub. This is enabled using the Magic Leap Application Simulator for Unity package. Note: this package still requires that both the ML Hub and Application Simulator Runtime are installed.

## Prerequisites

- Installed the [ML Hub](/docs/guides/getting-started/install-the-tools.md).
- Installed [App Simulator](/docs/guides/developer-tools/app-sim/app-sim-setup.md).
- [Configured Unity Settings](/docs/guides/unity/getting-started/configure-unity-settings.md) for Magic Leap.
- [Configured Unity Settings](/docs/guides/unity/app-simulator/configure-unity.md) for App Simulator.

## Downloading Application Simulator for Unity

![Installing the Application Simulator for Unity Package through The ML Hub's Package Manager](/img/app-sim/zif/st-lab01-zif.png)

1. Start the **ML Hub**, open the **Package Manager**, and go to the **All** tab.
2. Select the latest version of the **Magic Leap Application Simulator for Unity**, and click on the Download button.
3. Click on **Apply Changes**.

:::tip
After installing the package, search for it in the **Package Manager**, and click on **Open Folder**. This will help you with the next step of the process.

![Locating the Application Simulator for Unity package through the ML Hub's Package Manager](/img/app-sim/open_folder_unity_appsim.png)
:::

## Installing Application Simulator for Unity

1. In **Unity**, go to **Window > Package Manager**, then click on the **+** icon and select **Install Package from Tarball**.

![Install Package from Tarball through Unity's Package Manager](/img/app-sim/asu/st-pac01.png)

1. Navigate to where the package is located, and open the `com.magicleap.appsim.tgz` file.

![Locate the Application Simulator for Unity Package](/img/app-sim/package_location.png)

3. After a quick installation, the package should now be visible under the name **Magic Leap App Simulator** in the Package Manager.

![The Application Simulator for Unity package is now visible](/img/app-sim/app_sim_unity_package_window.png)

:::caution
Make sure you select **Install package from Tarball, as otherwise, you will fail to find the package.
:::

## Running Application Simulator for Unity

A new **Magic Leap** menu will now appear under Unity's **Windows** tab. If you do not see it, restart the Unity editor.

1. Go to **Windows > Magic Leap App Simulator > App Sim Target**.

![Loading the Application Simulator Target tab](/img/app-sim/app_sim_unity_menu.png)

2. The **Target Selector** panel will now appear, which works the same way it does in the **ML Hub**'s Application Simulator. You can now select your target.

![Application Simulator Target Tab - Target Selection](/img/app-sim/asu/st-tar02.png)

3. Click on the **Play** button, and start a new Application Simulator Session.

Once a new session has been started, you should now be able to use the Application Simulator from within the **Unity Editor** with the same workflow as if **Application Simulator** was started from the **ML Hub**.

:::note
Application Simulator in the **ML Hub** and **Unity** can run simultaneously, but this workflow is not recommended.
:::

### Arranging the Workspace

From the same dropdown menu, you can open panels with other Application Simulator tabs, such as **Device View**, **Hand Tracking**, and more.

Those panels offer the same functionalities as other **Unity Editor** panels — they can be positioned, scaled, arranged, and docked to your workspace to suit your preferences.

![A Unity Editor Workspace with Several Magic Leap Application Simulator Panels Docked to it](/img/app-sim/unity_editor_app_sim_view.png)
