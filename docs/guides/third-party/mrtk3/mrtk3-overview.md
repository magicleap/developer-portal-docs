---
title: Mixed Reality ToolKit 3 Overview
description: Instructions on how to add Magic Leap support inside when using MRTK3
sidebar_position: 1
tags: [Unity, MRTK3, Input,UI]
keywords: [Unity,Samples, MRTK3, UI]
---
# Magic Leap MRTK3 Package

This guide demonstrates how to integrate MRTK3 features into your Magic Leap 2 project. Ensure that you have a Unity project configured for Magic Leap 2 development. If you don't, follow the instructions on [this page](https://developer.magicleap.cloud/learn/docs/guides/unity/getting-started/configure-unity-settings).
​
:::tip
You can also pull a pre-configured MRTK3 project from Magic Leap's MRTK3 forked repository under the [`mrtk3_MagicLeap2` branch](https://github.com/magicleap/MixedRealityToolkit-Unity/tree/mrtk3_MagicLeap2).
:::

## Supported Features

The table below displays the current status of MRTK3 features compatible with Magic Leap 2:

| Feature | Status |
|--|--|
| Controller | Pre-Release |
| Hand Tracking | Pre-Release |
| Eye Tracking | Pre-Release |

:::caution

This package is an early-access version. This means features are still in active development and subject to changes or even having their implementation completely removed and done differently.

:::

## Prerequisites

Before starting, download and install the following packages from the Magic Leap Hub:

- Magic Leap SDK v1.2.0 (or later)
- Magic Leap Unity SDK v1.6.0 (or later)

## Creating a New MRTK3 Project

Before importing the Magic Leap MRTK3 Integration Package, configure your project for MRTK3. This section offers general guidance on downloading and installing MRTK3 packages using the Mixed Reality Feature tool or the MRTK3 Template Project.

1. Use the Mixed Reality Feature tool to integrate MRTK3 into an existing Magic Leap 2 project. We recommend using the Magic Leap Examples Project.
2. Download MRTK dependencies using one of the two methods: Using the [Mixed Reality Feature Tool](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/welcome-to-mr-feature-tool) (Windows Only) or manually downloading and importing packages from [GitHub](https://github.com/microsoft/MixedRealityToolkit-Unity/tree/mrtk3).

### Option 1: Using the Mixed Reality Feature Tool

Follow these instructions to install MRTK3 dependencies into an existing project using the [Mixed Reality Feature tool](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/welcome-to-mr-feature-tool). Note that this tool is only available for Windows.

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

#### Configure Project Settings

To configure your project's settings to be compatible with Magic Leap 2, follow these steps:

1. Download and install the [Magic Leap Setup Tool](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780) from the Unity Asset store.
2. Open the Project Setup window (**Window > Magic Leap > Project Setup**).
3. Complete all of the setup steps in the Project Setup Window.

### Option 2: Using the MRTK3 Template Project

Another way to get started with MRTK3 is to use the MRTK3 Template Project. This Unity project already contains the MRTK3 packages and some sample scenes. You can download it from the `mrtk3` branch in the [MRTK Github repository](https://github.com/microsoft/MixedRealityToolkit-Unity/tree/mrtk3). To do this, clone the MRTK repository and switch to the `mrtk3` branch.
​
If you are familiar with Git and are using the command line, you can clone the repo and specify the mrtk3 branch with the following command: `git clone --branch mrtk3 https://github.com/microsoft/MixedRealityToolkit-Unity.git`
​
After downloading the MRTK3 Template Project, update some project settings to make it compatible with Magic Leap 2.

## Configuring MRTK3 for Magic Leap 2

To configure your project for Magic Leap 2, follow these steps:

1. Using the Unity Hub, open the `MRTKDevTemplate` project using Unity version 2022.2.x
    1. On the **Opening Project in Non-Matching Editor Installation** popup, select **Continue**.
    2. On the **Script Updating Consent** popup, select **Yes, for these and other files that might be found later**.
    3. On the **Enter Safe Mode?** popup, select **Ignore**.
2. Open the package manager (Window > Package Manager) and remove the following packages:
    1. **Project Auditor**
    2. **Mixed Reality OpenXR Plugin**
    3. **Google ARCore XR Plugin**
    4. **OpenXR Plugin**
3. Clear any errors that appear as a result of a missing dependency from a prefab of XR provider.
    1. If errors are still present, close the project and delete the project's Library folder, and re-open Unity to reimport the existing packages.
4. Download and Install the [Magic Leap Setup Tool](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780) from the Unity Asset store.
5. Open the Project Setup window (**Window > Magic Leap > Project Setup**).
6. Complete all of the setup steps in the Project Setup Window.

## Importing MRTK3 Magic Leap

Once the project is configured for ML2 and has the required MRTK3 packages, import the MRTK3 Magic Leap package into the project.

1. Download the MRTK3 Magic Leap package using the Magic Leap Hub's Package Manager.
2. Open the Package Manager (**Window** > **Package Manager**), select the **＋** icon, then select **Add package from tarball...**.
3. Import the `com.magicleap.mrtk3-[VERSION].tgz` package from `MagicLeap/tools/unity/mrtk3/`.
4. In MRTK3's Project settings (**Edit** > **Project Settings** > **MRTK3**), set the **Profile** to **MRTKProfile - MagicLeap**.
   1. If the profile does not appear in the asset window, click the small "eye" icon located at the top-right corner of the menu to reveal hidden items in the list of assets.
5. Remove and replace the standard XR Rig from the Scene with the `MRTK XR Rig - MagicLeap` prefab variant located in `Assets/MagicLeap/Prefabs/MRTK_Variants/`.
​
*See the [Configure Existing Rig](#configuring-existing-mrtk3-xr-rig) section below for information on how to edit the default MRTK rig instead of replacing it.*

## Permissions

Hand Tracking Requires developers to enable the Hand Tracking permissions in the Manifest Settings. To add Hand tracking permissions follow the steps below:

1. Go to the Magic Leap Permissions Settings (**Edit** > **Project Settings** > **Magic Leap** > **Permissions**)
2. Enable **com.magicleap.permissions.HAND_TRACKING**
​
For more information, refer to the Magic Leap 2 [permissions guide](https://developer-docs.magicleap.cloud/docs/guides/unity/permissions/declaring-permissions).

### Configuring existing MRTK3 XR Rig

This section describes how to configure the original MRTK XR Rig, instead of replacing it with the pre-configured "MRTK XR Rig - MagicLeap" variant.

1. Select the **MRTK XR Rig** in the scene. Add the **MagicLeapInputs** and **MagicLeapHandAuxiliaryInputs** input action assets to the **Input Action Manager**.
2. Expand the object so that the MRTK RightHand and MRTK LeftHand Controllers are visible (`MRTK XR Rig/ Camera Offset/`).
3. Add the `Packages/Magic Leap MRTK3/Runtime/MagicLeap/Prefabs/MRTK_Variants` to add support for MagicLeap controller input.
4. Select each of the Hand Controller objects and update the following components:
   1. Update the **Articulated Hand Controller** to use equivalent `MagicLeapHandAuxiliaryInputs` inputs instead of the generic MRTK bindings. For example, the left hand bindings would be the following in order:
      1. `Aux LeftHand/DevicePosition`
      2. `Aux LeftHand/DeviceRotation`
      3. `Aux LeftHand/TrackingState`
      4. `Aux LeftHand/Select`
      5. `Aux LeftHand/Select Value`
   2. Remove actions that do not have matching values. For the left hand, these values would be:
       1. `MRTK LeftHand/Activate`
       2. `MRTK LeftHand/UI Press`
       3. `MRTK LeftHand/Rotate Anchor`
       4. `MRTK LeftHand/Translate Anchor`
5. Replace the input binding on each of the hand's child objects so they target the `MagicLeapHandAuxiliaryInputs` input actions.
   1. Select the **IndexTip PokeInteractor** then expand the Poke Pose Source/Pose Source List.
      Replace Element 1, to use Tracking State and PointerPosition/Rotation actions.
   2. Select the **Far Ray** then select the Aim Pose Source Pose / Source List. Replace Element 0, to use Tracking State and PointerPosition/PointerRotation actions.
   3. Select the **Far Ray** then select the Device Pose Source / Pose Source List. Replace Element 0 to use Tracking State and DevicePosition/DeviceRotation actions.
   4. Select **GrabInteractor** then select the Pinch Pose Source / Pose Source List. Replace Element 1 Tracking State and PointerPosition/PointerRotation actions.
   5. Select the **GazePinchInteractor** and Replace the **Device Pose Source** (DevicePosition/Rotation), and **Aim Pose Source** (PointerPosition/Rotation).
6. Finally, select the **Main Camera**, then add the **MagicLeap Camera** component. *(Optional)*

## FAQ

Why do I need to replace or configure the rig?
Replacing or configuring the rig is a temporary requirement to make sure the Magic Leap input bindings target the standard MRTK inputs.
