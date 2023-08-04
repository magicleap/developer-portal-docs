---
title: Configure Existing MRTK 3 Project
description: Instructions on how to add Magic Leap support to an existing MRTK 3 Project
sidebar_position: 2
tags: [Unity, MRTK3, Input,UI]
keywords: [Unity, MRTK3, Migrate]
---

# Configure Existing MRTK 3 Project

This guide demonstrates how to add Magic Leap 2 support to an existing MRTK 3 Project. Visit the [Magic Leap MRTK 3 Overview](./mrtk3-overview.md) page to learn about the features currently supported on Magic Leap 2.
​
## Prerequisites

Before starting, download and install the following packages from the Magic Leap Hub:

- Magic Leap SDK v1.2.0 (or later)
- Magic Leap Unity SDK v1.6.0 (or later)
- Unity Editor v2022.2.17f1 (or later)

## Template Project

This guide references the [MRTK 3 Template Project](https://github.com/microsoft/MixedRealityToolkit-Unity/tree/mrtk3). However, you can apply these instructions to any project that is configured for MRTK 3. If you want to follow along using the Template Project, refer to the steps below for downloading it from GitHub.

### Download the Template Project

The MRTK 3 template project includes MRTK3 packages and sample scenes. You can download it from the `mrtk3` branch in the [MRTK Github repository](https://github.com/microsoft/MixedRealityToolkit-Unity/tree/mrtk3). To do this, clone the MRTK repository and switch to the `mrtk3` branch.

If you are familiar with Git and prefer to use the command line, clone the repo and specify the `mrtk3` branch with the following command: `git clone --branch mrtk3 https://github.com/microsoft/MixedRealityToolkit-Unity.git`

## Configure MRTK3 for Magic Leap 2

Follow the step-by-step instructions below to update the MRTK Dev Template project to Unity v2022.2.x and configure the project settings for Magic Leap 2 development.

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

## Import MRTK3 Magic Leap

Once the project is configured for ML2 and has the required MRTK3 packages, import the MRTK3 Magic Leap package into the project.

1. Download the MRTK3 Magic Leap package using the Magic Leap Hub's Package Manager.
2. Open the Package Manager (**Window** > **Package Manager**), select the **＋** icon, then select **Add package from tarball...**.
3. Import the `com.magicleap.mrtk3-[VERSION].tgz` package from `MagicLeap/tools/unity/mrtk3/`.
4. In MRTK3's Project settings (**Edit** > **Project Settings** > **MRTK3**), set the **Profile** to **MRTKProfile - MagicLeap**.
   1. If the profile does not appear in the asset window, click the small "eye" icon located at the top-right corner of the menu to reveal hidden items in the list of assets.

## Permissions

Hand Tracking Requires developers to enable the Hand Tracking permissions in the Manifest Settings. To add Hand tracking permissions follow the steps below:

1. Go to the Magic Leap Permissions Settings (**Edit** > **Project Settings** > **Magic Leap** > **Permissions**)
2. Enable **com.magicleap.permissions.HAND_TRACKING**

For more information, refer to the Magic Leap 2 [permissions guide](https://developer-docs.magicleap.cloud/docs/guides/unity/permissions/declaring-permissions).

## FAQ

Why do I need to replace or re-configure the default MRTK XR Rig rig?
Replacing or configuring the rig is a temporary requirement to make sure the Magic Leap input bindings target the ones used by MRTK3. We plan to eliminate this step in the future.
