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

1. Open the Mixed Reality Feature tool.
2. Target your Unity project.
3. At a minimum, install the following required packages:
    - MRTK3 / MRTK Input
    - MRTK3 / MRTK UX Components
​
*Note: If you do not see MRTK3, you may need to select the **Show preview releases** option located at the bottom of the window.*
​
1. After choosing the packages to install, click **Get Features**. This will display the package dependencies.
2. Finally, click **Import** then **Approve**.
3. Clear any errors that appear due to missing dependencies from a prefab or XR provider.
​
For more information, see Microsoft's [Starting from a new project](https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/getting-started/setting-up/setup-new-project) guide.


  </TabItem>
  <TabItem value="web-portal" label="NPM Web Portal">

If your development environment does not support the Mixed Reality Feature Tool, you can download the required packages via [Microsoft's NPM Web Portal](https://dev.azure.com/aipmr/MixedReality-Unity-Packages/_artifacts/feed/Unity-packages).

:::caution
Microsoft's NPM does not support the Unity Package Manager and requires you to download the packages manually.
:::

#### Downloading the Packages

This section provides instructions on how to download and import the MRTK 3 packages without the Mixed Reality Feature Tool.

1. At a minimum download the required MRTK Packages.

:::tip
We recommend placing the packages in your projects root directory to more easily track your project's dependencies and to make your project more compatible with version control systems.
:::

**Required packages are listed in bold.**

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



  </TabItem>
</Tabs>


## Configure Project Settings

Validate your project's settings to ensure Magic Leap 2 compatibility using the Magic Leap Setup Tool.

1. Download and install the [Magic Leap Setup Tool](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780) from the Unity Asset store.
2. Open the Project Setup window (**Window > Magic Leap > Project Setup**).
3. Complete all of the setup steps in the Project Setup Window.

## Import MRTK3 Magic Leap

Once the project is configured for ML2 and has the required MRTK3 packages, import the MRTK3 Magic Leap package into the project.

1. Download the MRTK3 Magic Leap package using the Magic Leap Hub's Package Manager.
2. Open the Package Manager (**Window** > **Package Manager**), select the **＋** icon, then select **Add package from tarball...**.
3. Import the `com.magicleap.mrtk3-[VERSION].tgz` package from `MagicLeap/tools/unity/mrtk3/`.
4. In MRTK3's Project settings (**Edit** > **Project Settings** > **MRTK3**), set the **Profile** to **MRTKProfile - MagicLeap**.
   1. If the profile does not appear in the asset window, click the small "eye" icon located at the top-right corner of the menu to reveal hidden items in the list of assets.

## Permissions

Hand Tracking and Eye Tracking requires developers to add additional permissions to your project's Manifest. To add the additional permissions follow the steps below:

1. Go to the Magic Leap Permissions Settings (**Edit** > **Project Settings** > **Magic Leap** > **Permissions**)
2. Enable **com.magicleap.permissions.HAND_TRACKING**
3. Enable **com.magicleap.permissions.EYE_TRACKING**

For more information, refer to the Magic Leap 2 [permissions guide](https://developer-docs.magicleap.cloud/docs/guides/unity/permissions/declaring-permissions).
