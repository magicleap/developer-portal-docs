---
title: Mixed Reality ToolKit 3 Overview
description: Instructions on how to add Magic Leap support inside when using MRTK3
sidebar_position: 1
tags: [Unity, MRTK3, Input,UI]
keywords: [Unity,Samples, MRTK3, UI]
---
# Magic Leap MRTK3 Package

This guide demonstrates how to get started developing on Magic Leap 2 with MRTK3.
​
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
- Unity Editor v2022.2.17f1 (or later)

## Quick Start Template Project

The fastest way to get started with MRTK3 on Magic Leap 2 is to use the Magic Leap MRTK3 Template Project. This Unity project is pre-configured for Unity and contains contains the MRTK3 and Magic Leap packages in addition to some sample scenes. You can download the `mrtk3_MagicLeap2` branch from [Magic Leap's forked MRTK3 repository](https://github.com/magicleap/MixedRealityToolkit-Unity/tree/mrtk3_MagicLeap2).

1. If you are familiar with Git and are using the command line, you can clone the repo and specify the `mrtk3_MagicLeap2`  branch with the following command: `git clone --branch mrtk3_MagicLeap2 https://github.com/magicleap/MixedRealityToolkit-Unity.git`

2. Once downloaded, open the Unity Hub
3. Open the MRTK Dev Template Project (Located inside the `MixedRealityToolkit-Unity/UnityProjects/MRTKDevTemplate` directory)
4. Once the project is opened, make sure to change the target platform to Android inside **Build Settings**
5. Once complete, you can start developing Magic Leap 2 applications using MRTK3

<details>
  <summary>Windows Only: <code> Failed to load ... one or more of its dependencies could not be loaded.</code></summary>

If importing the plugin results in Unity showing an error similar to the one below in the console, you may be missing additional runtimes ("Workloads"). This dependency can be installed is supplied by Microsoft: [Microsoft Visual C++ Redistributable latest supported downloads](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).

```plaintext
Plugins: Failed to load 'C:/AppDirectory/Library/PackageCache/com.magicleap.soundfield@3.4.0-230405.66.cf20c31/Plugins/x86_64/AudioPluginMSASpatializer.dll' because one or more of its dependencies could not be loaded.
```

</details>

## Creating a New MRTK3 Project

Before importing the Magic Leap MRTK3 Integration Package, configure your project for MRTK3. This section offers general guidance on downloading and installing MRTK3 packages using the Mixed Reality Feature tool or the MRTK3 Template Project.

1. Use the Mixed Reality Feature tool to integrate MRTK3 into an existing Magic Leap 2 project. We recommend using the Magic Leap Examples Project.
2. Download MRTK dependencies using one of the two methods: Using the [Mixed Reality Feature Tool](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/welcome-to-mr-feature-tool) (Windows Only) or manually downloading and importing packages from [GitHub](https://github.com/microsoft/MixedRealityToolkit-Unity/tree/mrtk3).

### Option 1: Using the Mixed Reality Feature Tool

Ensure that you have a Unity project configured for Magic Leap 2 development. If you have not configure a project for Magic Leap 2, follow the [Configure Unity Settings instructions](https://developer.magicleap.cloud/learn/docs/guides/unity/getting-started/configure-unity-settings). Then, use these instructions to install MRTK3 dependencies into your existing Magic Leap 2 project using the [Mixed Reality Feature tool](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/welcome-to-mr-feature-tool). Note that the Mixed Reality Feature Tool is only available for Windows.

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

### Option 2: Default MRTK3 Template Project

Another way to get started with MRTK3 is to use the MRTK3 Template Project. This Unity project already contains the MRTK3 packages and some sample scenes. You can download it from the `mrtk3` branch in the [MRTK Github repository](https://github.com/microsoft/MixedRealityToolkit-Unity/tree/mrtk3). To do this, clone the MRTK repository and switch to the `mrtk3` branch.
​
If you are familiar with Git and are using the command line, you can clone the repo and specify the mrtk3 branch with the following command: `git clone --branch mrtk3 https://github.com/microsoft/MixedRealityToolkit-Unity.git`
​
After downloading the MRTK3 Template Project, update some project settings to make it compatible with Magic Leap 2.

#### Configure MRTK3 for Magic Leap 2

The step by step instructions below will walk you through updating the MRTK Dev Template project to Unity v2022.2.x and configuring the project settings for Magic Leap 2 development.

1. Using the Unity Hub, open the `MRTKDevTemplate` project using Unity version 2022.2.x
    1. On the **Opening Project in Non-Matching Editor Installation** popup, select **Continue**.
    2. On the **Script Updating Consent** popup, select **Yes, for these and other files that might be found later**.
    3. On the **Enter Safe Mode?** popup, select **Ignore**.
2. Open the package manager (Window > Package Manager) and remove the following packages:
    1. **Project Auditor**
    2. **Mixed Reality OpenXR Plugin**
    3. **Google ARCore XR Plugin**
3. Clear any errors that appear as a result of a missing dependency from a prefab of XR provider.
    1. If errors are still present, close the project and delete the project's Library folder, and re-open Unity to reimport the existing packages.
4. Download and Install the [Magic Leap Setup Tool](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780) from the Unity Asset store.
5. Open the Project Setup window (**Window > Magic Leap > Project Setup**).
6. Complete all of the setup steps in the Project Setup Window.

### Import MRTK3 Magic Leap

Once the project is configured for ML2 and has the required MRTK3 packages, import the MRTK3 Magic Leap package into the project.

1. Download the MRTK3 Magic Leap package using the Magic Leap Hub's Package Manager.
2. Open the Package Manager (**Window** > **Package Manager**), select the **＋** icon, then select **Add package from tarball...**.
3. Import the `com.magicleap.mrtk3-[VERSION].tgz` package from `MagicLeap/tools/unity/mrtk3/`.
4. In MRTK3's Project settings (**Edit** > **Project Settings** > **MRTK3**), set the **Profile** to **MRTKProfile - MagicLeap**.
   1. If the profile does not appear in the asset window, click the small "eye" icon located at the top-right corner of the menu to reveal hidden items in the list of assets.

### Configure Scene

MRTK 3 uses some input actions that are not currently supported by Magic Leap. This limitation requires developers to replace or edit the existing MRTK XR rig with one that is compatible with Magic Leap 2. To create or configure a new scene, perform the following steps:

1. Delete the existing MRTK XR Rig if one exists.
2. Navigate to the `/MagicLeap/Prefabs/MRTK_Variants/` directory inside your `/Assets/` folder
3. Add the `MRTK XR Rig - MagicLeap` prefab to your scene.
​

<details>
  <summary>Learn how to edit the default MRTK XR Rig instead of replacing it.</summary>

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

</details>

### Permissions

Hand Tracking Requires developers to enable the Hand Tracking permissions in the Manifest Settings. To add Hand tracking permissions follow the steps below:

1. Go to the Magic Leap Permissions Settings (**Edit** > **Project Settings** > **Magic Leap** > **Permissions**)
2. Enable **com.magicleap.permissions.HAND_TRACKING**

For more information, refer to the Magic Leap 2 [permissions guide](https://developer-docs.magicleap.cloud/docs/guides/unity/permissions/declaring-permissions).

## FAQ

Why do I need to replace or re-configure the default MRTK XR Rig rig?
Replacing or configuring the rig is a temporary requirement to make sure the Magic Leap input bindings target the ones used by MRTK3. We plan to eliminate this step in the future.
