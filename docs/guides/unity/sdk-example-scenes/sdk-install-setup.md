---
id: sdk-install-setup
title: Install and Setup SDK Examples
sidebar_position: 0
date: 04/29/2022
tags: [Unity, Walkthroughs, Examples, Samples]
keywords: [Unity, Walkthroughs, Examples, Samples]
---

This section describes how to download and configure the Magic Leap Unity Example project.

## Prerequisites

- Installed the [ML Hub](/docs/guides/getting-started/install-the-tools.md)
- [Unity Editor in the range of **2022.2.x**](/docs/guides/unity/getting-started/install-the-tools.md#install-unity-editor)

## Downloading the Examples

This section will walk you through downloading the Magic Leap Examples Unity project using the Package Manager inside [ML Hub](/docs/guides/getting-started/install-the-tools.md).

### Open The Package Manager

To access the Package manager in ML Hub

1. Open **ML Hub**.

<Image url= {require("/img/ml-hub/ml_hub.png")} >ML Hub Home Window</Image>

2. Select **Package Manager** from the home screen.

<Image url= {require("/img/ml-hub/package_manager_link.jpg")} >Package Manager option outlined</Image>

Next you can either download the examples project using the [Package Bundles](#download-using-package-bundles), or as an [individual package](#download-individual-package).

### Download using Package Bundles

To download the Unity Magic Leap Examples Project from the bundle section

1. Select the **Unity - 3D Creation Bundle**
2. Next, select the **Unity Examples** item from the **Change Summary** section.
3. Click **Apply Changes**.

<Image url= {require("/img/ml-hub/unity_bundle_examples.png")} >ML Hub Bundle Selection screen with Unity Examples option outlined</Image>

### Download Individual Package

To download the Unity Magic Leap Examples Project as an individual package

1. Navigate to the **All** tab
2. Next, select the **Unity Examples** item from the **Unity Packages** section.
3. Lastly, click **Apply Changes** from the summary section.

<Image url= {require("/img/ml-hub/unity_examples.png")} >ML Hub All Packages screen with the Unity Examples option outlined</Image>

## Open the Example Project

Once the project has been downloaded, open the project using the Unity Hub.

1. Open the Unity Hub application
2. Click **Open** in the upper right corner of the home page and navigate to the MagicLeap_Examples project inside your `MagicLeap/tools/unity/<SDK_VERSION>/` directory.
   - Example: `%USERPROFILE%\MagicLeap\tools\unity\<Version>\MagicLeap_Examples`
3. Make sure the project is opened using the **Magic Leap 2 compatible editor version** that you installed in [Getting Started](/docs/guides/unity/getting-started/install-the-tools.md#install-unity-editor).
4. Select the MagicLeap_Examples folder and click **Open**.

:::info
When opening the project, unity may prompt you to open the project in safe mode. Select ignore.
:::

## Building to Device

1. Once the project is open, make sure that Magic Leap is enabled in the Android inside the project **XR Plug-in Management** settings (**File > Build Settings > Player Settings > XR Plug-in Management**).
2. Open the build menu under **File > Build Settings** and select any or all of the scenes you wish to demo. The scenes will allow you to switch between examples from within the app, so feel free to include all of the examples.
3. Make sure your build target is set to **Android**.
4. Turn on and connect your Magic Leap 2 via USB, then select the device under **Run Device**.
5. Build and Run!

:::info
For information on which of these examples work in App Simulator refer to the [App Simulator Key API Features](/docs/guides/developer-tools/app-sim/app-simulator.md) guide.
:::
