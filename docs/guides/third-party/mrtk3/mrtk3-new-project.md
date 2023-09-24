---
title: Create a New Project
description: Instructions on how to create a new MRTK 3 project compatible with Magic Leap 2
sidebar_position: 2
tags: [Unity, MRTK 3, Input]
keywords: [Unity, Getting Started, Magic Leap, MRTK 3]
---

# Creating a New MRTK3 Project

This guide provides instructions on how to create a new Magic Leap 2 project that uses MRTK 3. See the [Magic Leap MRTK 3 Overview](./mrtk3-overview.md) page for information on which features are currently supported on Magic Leap 2.

## Prerequisites

Before starting, download and install the following packages from the Magic Leap Hub:

- Magic Leap SDK v1.2.0 (or later)
- Magic Leap Unity SDK v1.6.0 (or later)
- Unity Editor v2022.2.17f1 (or later)

## Create a Magic Leap 2 Project

Ensure that you have a Unity project configured for Magic Leap 2 development. If you have not configure a project for Magic Leap 2, follow the [Configure Unity Settings instructions](https://developer.magicleap.cloud/learn/docs/guides/unity/getting-started/configure-unity-settings).

## Import Standard MRTK 3 Packages

Before importing the Magic Leap MRTK3 Integration Package, make sure to configure your project for MRTK3. This section offers general guidance on downloading and installing MRTK3 packages using the Mixed Reality Feature tool or microsoft's NPM web portal.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="mixed-reality-feature-tool" label="Mixed Reality Feature Tool" default>

Use these instructions to install MRTK3 dependencies into your existing Magic Leap 2 project using the [Mixed Reality Feature tool](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/welcome-to-mr-feature-tool). Note that the Mixed Reality Feature Tool is only available for Windows.

<Image url= {require("/img/third-party/mrtk3/mrtk3-feature-tool.jpg")} >Mixed Reality Feature Tool Welcome Screen</Image>


:::caution
Close the Unity project before using the Mixed Reality Feature tool.
:::

1. Open the **Mixed Reality Feature Tool**.
2. Target your Unity project and select **Discover Features**
3. At a minimum, install the following required packages:
    - MRTK3 / MRTK Input
    - MRTK3 / MRTK UX Components
​
*Note: If you do not see MRTK3, you may need to select the **Show preview releases** option located at the bottom of the window.*
​
4. After choosing the packages to install, click **Get Features**. This will display the package dependencies.
5. Add the packages to your project by pressing **Import** then **Approve**.
6. Finally, select **Exit** to close the **Mixed Reality Feature Tool**.
​
For more information, see Microsoft's [Starting from a new project](https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/getting-started/setting-up/setup-new-project) guide.

## Open the Unity project

1. Open the Unity project and wait for Unity to finish importing newly added packages.
2. Clear any errors that appear due to missing dependencies from a prefab or XR provider.


  </TabItem>
  <TabItem value="web-portal" label="NPM Web Portal">

If your development environment does not support the Mixed Reality Feature Tool, you can download the required packages via [Microsoft's NPM Web Portal](https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages).


:::caution
Microsoft's NPM does not support being added to the Unity Package Manager as a registry and requires you to download the packages online manually.
:::

<Image url= {require("/img/third-party/mrtk3/mrtk3-npm-portal.jpg")} >Microsoft's NPM Website</Image>



#### Downloading the Packages

This section provides instructions on how to download and import the MRTK 3 packages without the Mixed Reality Feature Tool.

1. At a minimum download the required MRTK3 Packages. (**Required packages are listed in bold.**)

:::tip
We recommend placing the packages in your projects root directory to more easily track your project's dependencies and to make your project more compatible with version control systems.
:::



|Name           |Download Link                       |
|---------------|------------------------------------|
|MRTK Accessibility Early Preview| https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.accessibility/overview/|
|MRTK Audio Effects | https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.audio/overview/ |
|**MRTK Core Definitions**| https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.core/overview/|
|MRTK Diagnostics| https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.diagnostics/overview/ |
|MRTK Extended Assets|https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.extendedassets/overview/ |
|**MRTK Graphics Tools**|https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.graphicstools.unity/overview/ |
|**MRTK Input**|https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.input/overview/ |
|**MRTK Spatial Manipulation** |https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.spatialmanipulation/overview/ |
|**MRTK Standard Assets**|https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.standardassets/overview/ |
|MRTK Tools| https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.tools/overview/ |
|**MRTK UX Components** | https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.uxcomponents/overview/ |
|MRTK UX Components (Non Canvas)| https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.uxcomponents.noncanvas/overview/ |
|**MRTK UX Core**| https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.uxcore/overview/ |
|MRTK Visual Profiler| (Downloaded via git, can be added via package manager ) https://github.com/microsoft/VisualProfiler-Unity.git#v2.2.0 |
|MRTK3 Data Binding and theming (experimental) |  https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages/Npm/com.microsoft.mrtk.data/overview |


2. Open the Package Manager inside your project (**Window > Package Manager**)
3. Select the **+** icon, then **Add package from tarball...**
4. Select and import each of the packages downloaded in Step 1 in this order
   1. `
com.microsoft.mrtk.core-VERSION.tgz`
   2. `
com.microsoft.mrtk.input-VERSION.tgz`
   3. `
com.microsoft.mrtk.graphicstools-VERSION.tgz`
   4. `
com.microsoft.mrtk.uxcore-VERSION.tgz`
   5. `
com.microsoft.mrtk.spatialmanipulation-VERSION.tgz`
   6. `
com.microsoft.mrtk.standardassets-VERSION.tgz`
   7. `
com.microsoft.mrtk.uxcomponents-VERSION.tgz`


:::note
For more information on MRTK 3 packages and their dependencies, see Microsoft's [package overview page](https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/packages/packages-overview).
:::

  </TabItem>
</Tabs>


## Import MRTK3 Magic Leap

After importing the MRTK3 packages, import the MRTK3 Magic Leap package into the project.

1. Download the MRTK3 Magic Leap package using the Magic Leap Hub's Package Manager.
2. Open the Package Manager (**Window** > **Package Manager**), select the **＋** icon, then select **Add package from tarball...**.
3. Import the `com.magicleap.mrtk3-[VERSION].tgz` package from `MagicLeap/tools/unity/mrtk3/`.

<Image url= {require("/img/third-party/mrtk3/mrtk3-import-tarball.jpg")} >Unity Package Manager with the "Add package from tarball..." option selected</Image>


## Configure MRTK profile

To support Magic Leap 2 input set the MRTK3 profile to **MRTKProfile - MagicLeap**. This profile adds Magic Leap 2 support to the MRTK XR Subsystems.

1. Navigate to **Edit > Project Settings**.
2. Select **MRTK3** then select the Android tab.
3. set the **Profile** to **MRTKProfile - MagicLeap**.
   1. If the profile does not appear in the asset window, click the small "eye" icon located at the top-right corner of the menu to reveal hidden items in the list of assets.
   2. You can find the profile under `Packages/com.magicleap.mrtk3/Configuration/Default Profiles/MRTKProfile-MagicLeap.asset`.

<Image url= {require("/img/third-party/mrtk3/mrtk-magicleap-profile.jpg")} >MRTK3 Settings with Profile option selected</Image>

## Permissions

Hand Tracking and Eye Tracking requires developers to add additional permissions to your project's Manifest. To add the additional permissions follow the steps below:

1. Go to the Magic Leap Permissions Settings (**Edit** > **Project Settings** > **Magic Leap** > **Permissions**)
2. Enable **com.magicleap.permissions.HAND_TRACKING**
3. Enable **com.magicleap.permissions.EYE_TRACKING**

For more information, refer to the Magic Leap 2 [permissions guide](/docs/guides/unity/permissions/declaring-permissions).

## Creating a new scene with MRTK3

The following section includes information about creating a Magic Leap ready scene using MRTK3.


<Tabs queryString="xr-rig">
  <TabItem value="run-time-configuration" label="Runtime Configuration" default>

#### Enable Runtime Configuration

To support the standard rig, the MRTK Magic Leap package includes a feature that automatically configures the **MRTK XR Rig** prefab. This section includes information on how to enable the Runtime configuration feature. To learn more about the Magic Leap specific settings, visit the [MRTK 3 Magic Leap Settings](./mrtk3-magic-leap-settings.md) guide.

1. Navigate to the Magic Leap Settings Window by going to **Edit > Project Settings** then **MRTK3 > Magic Leap Settings**.
2. Enable the **Runtime Config Enabled** setting.

<Image url= {require("/img/third-party/mrtk3/mrtk3-magicleap-runtime-config.jpg")} >MRTK3 Magic Leap Settings with the Runtime Config option selected</Image>



#### Using the MRTK XR Rig in a New Scene

This section includes instructions on how to create a new scene using the standard **MRTK XR Rig**. This rig will be configured to support Magic Leap input when deployed to the device.

1. Create a new Unity scene.
2. Remove the **Main Camera** Game Object as it will be replaced with the one supported by MRTK3,
3. Add the **MRTK XR Rig** prefab.
   1. The prefab can be found in your Project folder in the `Packages/com.microsoft.mrtk.input/Assets/Prefabs/` directory.

<Image url= {require("/img/third-party/mrtk3/mrtk3-standard-rig.jpg")} >The MRTK XR Rig added to the Scene Hierarchy</Image>

4. (Optionally) Add the MRTK Input Simulator prefab to your scene for in-editor input simulation.

<Image url= {require("/img/third-party/mrtk3/mrtk3-standard-simulator.jpg")} >The MRTKInputSimulator added to the Scene Hierarchy</Image>


  </TabItem>
  <TabItem value="mrtk-xr-rig-prefab" label="MRTK XR Rig Prefab">

#### Using the MRTK XR Rig - MagicLeap prefab

This section includes instructions on creating a new scene using the **MRTK XR Rig - MagicLeap** prefab. This prefab is pre-configured required to support Magic Leap Input such as hands, controller and gaze. Alternatively, you can use the [runtime configuration feature](?xr-rig=run-time-configuration#creating-a-new-scene-with-mrtk3) which will allow you to use the standard MRTK3 rig.

1. Create a new Unity scene.
2. Remove the **Main Camera** Game Object as it will be replaced with the one supported by MRTK3,
3. Add the **MRTK XR Rig - MagicLeap** prefab.
   1. The prefab can be found in your Project folder in the `Packages/com.magicleap.mrtk3/Runtime/MagicLeap/Prefabs/MRTK_Variants/` directory.

<Image url= {require("/img/third-party/mrtk3/mrtk3-magicleap-rig.jpg")} >The MRTK XR Rig - MagicLeap added to the Scene Hierarchy</Image>

4. (Optionally) Add the MRTK Input Simulator prefab to your scene for in-editor input simulation outside of the Magic Leap [Application Simulator](../../unity/app-simulator/unity-app-simulator.md).

<Image url= {require("/img/third-party/mrtk3/mrtk3-magicleap-rig-simulator.jpg")} >The MRTKInputSimulator added to the Scene Hierarchy</Image>


  </TabItem>
</Tabs>