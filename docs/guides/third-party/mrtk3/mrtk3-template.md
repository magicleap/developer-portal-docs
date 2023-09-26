---
title: Quick Start
description: Instructions on how to download the Magic Leap MRTK Template Project
sidebar_position: 0
tags: [Unity, MRTK3, Input,UI]
keywords: [Unity, MRTK3, Migrate]
---

# MRTK 3 Magic Leap Quick Start

The fastest way to get started with MRTK3 on Magic Leap 2 is to use the Magic Leap MRTK3 Template Project. The Template project is pre-configured for Magic Leap and contains all of the required MRTK3 and Magic Leap packages in addition to some sample scenes. This guide includes step-by-step instructions on how to download the MAgic Leap 2 MRTK Template Project.

## Prerequisites

Before starting, download and install the following packages from the Magic Leap Hub:

- Magic Leap SDK v1.2.0 (or later)
- Magic Leap Unity SDK v1.6.0 (or later)
- Unity Editor v2022.2.17f1 (or later)

:::note

If updating to Magic Leap Unity SDK 1.10.0 or 1.11.0, there may be a compile issue if your project contains the
Unity OpenXR package. A workaround for this is to remove the OpenXR package from the project in this situation.

:::

## Getting Started

You can download the `mrtk3_MagicLeap2` branch from [Magic Leap's forked MRTK3 repository](https://github.com/magicleap/MixedRealityToolkit-Unity/tree/mrtk3_MagicLeap2).

1. If you are familiar with Git and are using the command line, you can clone the repo and target the `mrtk3_MagicLeap2` branch with following command:

```shell
git clone --branch mrtk3_MagicLeap2 https://github.com/magicleap/MixedRealityToolkit-Unity.git
```

2. Once downloaded, open the **Unity Hub**
3. Open the **MRTK Dev Template Project** (Located inside the `MixedRealityToolkit-Unity/UnityProjects/MRTKDevTemplate` directory)
4. Once the project is opened, make sure to change the target platform to **Android** inside **Build Settings**
5. Once complete, you can start developing Magic Leap 2 applications using MRTK3


<Image url= {require("/img/third-party/mrtk3/template-scene.jpg")} >The Hand Interactions Examples scene inside the Unity Dev Template Project</Image>

<details>
  <summary>Windows Only: <code> Failed to load ... one or more of its dependencies could not be loaded.</code></summary>

If importing the plugin results in Unity showing an error similar to the one below in the console, you may be missing additional runtimes ("Workloads"). This dependency can be installed is supplied by Microsoft: [Microsoft Visual C++ Redistributable latest supported downloads](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).

```plaintext
Plugins: Failed to load 'C:/AppDirectory/Library/PackageCache/com.magicleap.soundfield@3.4.0-230405.66.cf20c31/Plugins/x86_64/AudioPluginMSASpatializer.dll' because one or more of its dependencies could not be loaded.
```

If errors are still present, close the project and delete the project's Library folder, then re-open Unity to reimport the existing packages. Then switch the Build target to Android.

</details>