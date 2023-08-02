---
id: unity-building-simple-app
title: Building a Simple App
sidebar_position: 4
date: 4/29/2022
tags: [Unity, Overview, Getting Started, Hello Cube]
keywords: [Unity, Overview, Getting Started, Hello Cube]
---


This document describes how to build a Magic Leap 2 application using Unity.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

- [Configured Unity Settings](/docs/guides/unity/getting-started/configure-unity-settings.md)

## Creating a Scene

After setting up your project for the Magic Leap 2, create a scene for our app.

1. Create a new Scene **File > New Scene**.
2. Select "Basic (URP)" from the four templates displayed onscreen.
3. Delete the **Main Camera** from the scene.
4. Locate the **XR Rig** prefab in `Packages/Magic Leap SDK/Runtime/Tools/Prefabs` and drag it into the scene.
5. In the Unity menu, go to **GameObject > 3D Object > Cube**. This will add a cube to the scene.
6. Click on the **Cube** in the **Hierarchy**, then find the Transform properties in the **Inspector Panel**.
7. Set the cube's transform properties to:
   - Position at 0, 0, 1
   - Rotation at 0, 65, 0
   - Scale at 0.25, 0.25, 0.25
8. Using the top menu select: **File > Save As.**


## Testing using Magic Leap App Simulator

Using the Magic Leap App Simulator, you can test some of your application's features without having to build and deploy it to your device. See the [Unity Application Simulator](/docs/guides/unity/app-simulator/unity-app-simulator.md) section for details on how to [configure your Unity settings](/docs/guides/unity/app-simulator/configure-unity.md) to run the Application Simulator.


## Building to Device

When you are ready to deploy your application to the device, you can use the **Build And Run** feature of Unity. Make sure you've followed all the setup instructions in the [Configure Unity Settings](/docs/guides/unity/getting-started/configure-unity-settings.md) guide. Follow the steps below to deploy your application to the device.

1. Connect and power on the device.
2. Open the Build Settings, **File > Build Settings**.
3. Add your current scene by dragging the scene from the Project panel to the **Scenes in Build** or clicking on **Add Open Scenes**.
4. If you have more than one scene in the list, uncheck all except the one you want to build.
5. Press **Build And Run** and select a location and name for the application (.apk)
6. Wait for Unity to deploy the application.
7. Put on the device and look around to find the cube.
    - Note: The cube may be behind you depending on the orientation of the device on boot.

<details> 

<summary> You may encounter the following pop-up regarding the Android SDK while building:</summary>

<Tabs
  defaultValue="windows"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'MacOS', value: 'macos'},
  ]}>
<TabItem value="windows">

:::info "Android SDK is outdated" Pop-up

You may get a pop-up that shows that the Android SDK is outdated when clicking **Build**. Select **Use Highest Installed**.

<img src="/img/unity/unity-android-sdk-is-outdated-windows.png" width="900"/>

:::

</TabItem>
<TabItem value="macos">

:::info "Android SDK is outdated" Pop-up

You may get a pop-up that shows that the Android SDK is outdated when clicking **Build**. Select Use **Highest Installed**.

<img src="/img/unity/unity-android-sdk-is-outdated-macos.png" width="400"/>

:::

</TabItem>
</Tabs>

</details> 

## Next Steps

import Link from '@docusaurus/Link';

<h3><Link to="/docs/guides/unity/sdk-example-scenes/sdk-install-setup"> Unity Examples Project</Link> </h3>

After successfully creating a new application, check out the pre-configured Magic Leap Unity Examples Project to see some of Magic Leap's unique platform features.

<h3><Link to="/docs/guides/unity/app-simulator/unity-app-simulator"> Magic Leap App Simulator</Link> </h3>

The Magic Leap App Simulator can be used to test applications much faster, without deploying them to the physical device. See our Magic Leap App Simulator for Unity section to learn how to configure your unity settings to run applications in the Simulator.

<h3><Link to="/docs/guides/third-party/mrtk/mrtk-setup"> MRTK for Magic Leap</Link> </h3>

Developers can quickly build or upgrade applications using Magic Leap's MRTK support package. See the MRTK for Magic Leap guide to learn how to use the MRTK for Magic Leap package in your project.
