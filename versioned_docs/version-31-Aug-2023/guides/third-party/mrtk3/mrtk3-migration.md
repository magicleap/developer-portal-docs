---
title: Configure Existing Project
description: Instructions on how to add Magic Leap support to an existing MRTK 3 Project
sidebar_position: 2
tags: [Unity, MRTK3, Input,UI]
keywords: [Unity, MRTK3, Migrate]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Existing MRTK 3 Project

This guide demonstrates how to add Magic Leap 2 support to an existing MRTK 3 Project. Visit the [Magic Leap MRTK 3 Overview](./mrtk3-overview.md) page to learn about the features currently supported on Magic Leap 2.
​
## Prerequisites

Before starting, download and install the following packages from the Magic Leap Hub:

- Magic Leap SDK v1.2.0 (or later)
- Magic Leap Unity SDK v1.6.0 (or later)
- Unity Editor v2022.2.17f1 (or later)
- Magic Leap MRTK 3 1.0.0-pre.5 (or later)

## Template Project

This guide references the [MRTK 3 Template Project](https://github.com/MixedRealityToolkit/MixedRealityToolkit-Unity). However, you can apply these instructions to any project that is configured for MRTK 3. If you want to follow along using the Template Project, refer to the steps below for downloading it from GitHub.

### Download the Template Project

The MRTK 3 template project includes MRTK3 packages and sample scenes. You can download the project from [MRTK's Github repository](https://github.com/MixedRealityToolkit/MixedRealityToolkit-Unity). 

If you are familiar with Git and prefer to use the command line, clone the repo following command:

```bash
git clone https://github.com/MixedRealityToolkit/MixedRealityToolkit-Unity.git
```

## Configure MRTK3 for Magic Leap 2

Follow the step-by-step instructions below to update the MRTK Dev Template project to Unity v2022.2.x and configure the project settings for Magic Leap 2 development.

### Update Unity Version

1. Using the Unity Hub, open the `MRTKDevTemplate` project using Unity version 2022.2.x
2. On the **Opening Project in Non-Matching Editor Installation** popup, select **Continue**.
3. On the **Script Updating Consent** popup, select **Yes, for these and other files that might be found later**.
4. On the **Enter Safe Mode?** popup, select **Ignore**.

### Remove conflicting packages

1. Open the package manager (Window > Package Manager) and remove the following packages:
    1. **Google ARCore XR Plugin**
    2. **Mixed Reality OpenXR Plugin**
    3. **OpenXR Plugin**
2. Clear any Error that appear in the Unity Console as a result of the removal of the packages.
    1. If errors are still present, close the project and delete the project's Library folder, and re-open Unity to reimport the existing packages.

### Configure Project Settings for Magic Leap

1. Download and Install the [Magic Leap Setup Tool](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780) from the Unity Asset store.
2. Open the Project Setup window (**Window > Magic Leap > Project Setup**).
3. Complete all of the setup steps in the Project Setup Window.


<Image url= {require("/img/unity/setup/setup-tool.jpg")} >Magic Leap Project Setup Tool window</Image>


## Import MRTK3 Magic Leap

After importing the MRTK3 packages, import the MRTK3 Magic Leap package into the project.

1. Download the MRTK3 Magic Leap package using the Magic Leap Hub's Package Manager.
2. Open the Package Manager (**Window** > **Package Manager**), select the **＋** icon, then select **Add package from tarball...**.
3. Import the `com.magicleap.mrtk3-[VERSION].tgz` (version 1.0.0-pre.5 or higher) package from `MagicLeap/tools/unity/mrtk3/`.

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

For more information, refer to the Magic Leap 2 [permissions guide](https://developer-docs.magicleap.cloud/docs/guides/unity/permissions/declaring-permissions).

## Configure the MRTK XR Rig Prefab

<Tabs queryString="xr-rig">
  <TabItem value="run-time-configuration" label="Runtime Configuration" default>

#### Enable Runtime Configuration

To support the standard rig, the MRTK Magic Leap package includes a feature that automatically configures the **MRTK XR Rig** prefab. This section includes information on how to enable the Runtime configuration feature. To learn more about the Magic Leap specific settings, visit the [MRTK 3 Magic Leap Settings](./mrtk3-magic-leap-settings.md) guide.

1. Navigate to the Magic Leap Settings Window by going to **Edit > Project Settings** then **MRTK3 > Magic Leap Settings**.
2. Enable the **Runtime Config Enabled** setting.

<Image url= {require("/img/third-party/mrtk3/mrtk3-magicleap-runtime-config.jpg")} >MRTK3 Magic Leap Settings with the Runtime Config option selected</Image>

  </TabItem>
  <TabItem value="mrtk-xr-rig-prefab" label="MRTK XR Rig Prefab">

#### Using the MRTK XR Rig - MagicLeap prefab

This section includes instructions on creating a new scene using the **MRTK XR Rig - MagicLeap** prefab. This prefab is pre-configured required to support Magic Leap Input such as hands, controller and gaze. Alternatively, you can use the [runtime configuration feature](?xr-rig=run-time-configuration#creating-a-new-scene-with-mrtk3) which will allow you to use the standard MRTK3 rig.

1. Create a new Unity scene.
2. Remove the **MRTK XR Rig** Game Object it one exists as it will be replaced with the one supported by Magic Leap,
3. Add the **MRTK XR Rig - MagicLeap** prefab.
   1. The prefab can be found in your Project folder in the `Packages/com.magicleap.mrtk3/Runtime/MagicLeap/Prefabs/MRTK_Variants/` directory.

<Image url= {require("/img/third-party/mrtk3/mrtk3-magicleap-rig.jpg")} >The MRTK XR Rig - MagicLeap added to the Scene Hierarchy</Image>

  </TabItem>
</Tabs>


