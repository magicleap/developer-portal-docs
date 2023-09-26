---
id: hololens-porting 
title: HoloLens 2 to Magic Leap 2 Porting Guide
sidebar_position: 3
date: 02/13/2023
---

Porting your MRTK-based HoloLens 2 application to Magic Leap 2 requires only a few adjustments to your Unity project environment. Using the Magic Leap 2 Unity SDK and MRTK Magic Leap 2 plugin according to this guide will get your project running on the Magic Leap 2 with minimal effort.

:::note
The MRTK Magic Leap 2 plugin currently only supports MRTK v2.8.
:::

## Platform Overview

There are several key differences between the HoloLens 2 and Magic Leap 2 MRTK development environment:

|                      |         HoloLens 2          |       Magic Leap 2        |
| :------------------- | :-------------------------: | :-----------------------: |
| Architecture         |            ARM64            |          x86_64           |
| Unity editor version |         2021.3 LTS          |     2022.2.x or newer     |
| Render Pipeline      | Lightweight Render Pipeline | Universal Render Pipeline |
| Build Target         | Universal Windows Platform  |          Android          |
| Interaction method   |        Hand tracking        | Controller, Hand tracking |
| XR Plugin Managment   |           OpenXR           |          Magic Leap       |

## MRTK Feature Support

|                 | HoloLens 2 | Magic Leap 2 |
| :-------------- | :--------: | :----------: |
| Spatial Mapping |  &check;   |   &check;    |
| Hand Tracking   |  &check;   |   &check;    |
| Voice           |  &check;   |   &check;    |
| Eye Tracking    |  &check;   |   &check;    |
| Controller      |            |   &check;    |
| System Keyboard |  &check;   |              |
| Plane Detection |  &check;   |              |
| Hand Mesh       |  &check;   |              |

## Porting Prerequisites

- Your project must use [Microsoft MRTK v2.8](https://github.com/Microsoft/MixedRealityToolkit-Unity/releases)
- You have downloaded and installed the latest compatible versions of the **Magic Leap Unity SDK**, **MRTK Magic Leap 2 package**, and **Unity editor** as outlined in the guides below.
- If your project uses the Hololens System keyboard, you will need to replace the system keyboard calls with MRTK's `NonNativeKeyboard` alternative.

## Update your Unity Project for Magic Leap 2

### Part 1: Update and configure your Unity project settings

1. [Update your Unity editor](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/install-the-tools#install-unity-editor) version to **2022.2.0b7 or higher**.
2. [Download and install](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/install-the-tools#downloading-the-unity-bundle) the latest compatible versions of the Magic Leap OS and Magic Leap SDK (v1.1.0-dev1 or newer). Use this [compatibility matrix](/versioned_docs/version-31-Aug-2023/releases/overview.md) to check version compatibility.
3. Open your Unity project in the new version of the Unity editor and complete the steps in the [Configure Project Settings](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings.md) Unity guide.
4. Follow the [Render Pipeline Settings](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/graphics-settings) Unity guide to change your render pipeline settings to the Universal Render Pipeline.

### Part 2: Implement the MRTK - Magic Leap 2 plugin

1. Follow the [Set Up MRTK for Magic Leap 2](/versioned_docs/version-31-Aug-2023/guides/third-party/mrtk/mrtk-setup.md) guide to configure MRTK to work with the MRTK Magic Leap 2 plugin.

### Part 3: Taking Advantage of Magic Leap 2 Features

#### [Controller](/versioned_docs/version-31-Aug-2023/guides/features/controller-features)

An often-overlooked input modality, the Controller offers interaction options beyond standard [HandTracking](/versioned_docs/version-31-Aug-2023/guides/unity/input/hand-tracking/unity-hand-tracking-overview). Usage of a Controller in an AR application can lead to better end-user comfort over a longer period of time, eliminating the fatigue of a typical hand-tracking-exclusive application.

#### [Expanded Field of View](/versioned_docs/version-31-Aug-2023/guides/device/fov)

With an increased horizontal and vastly-expanded vertical field of view, an AR app benefits by being able to see human-sized virtual content from just a few feet away. Moving from the Hololens 2 to a Magic Leap 2, the difference will be noticeable immediately.

#### [Compute power](/versioned_docs/version-31-Aug-2023/guides/device/hardware-specs)

The Magic Leap 2 uses an `x86_64`-based architecture, with processors that are able to compute far more complex geometry, shaders, and textures at smoother framerates than previous-generation AR devices.

## Further resources

- [Magic Leap 2 Unity Getting Started](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/unity-getting-started)
- [Setting Up MRTK with Magic Leap 2](/versioned_docs/version-31-Aug-2023/guides/third-party/mrtk/mrtk-setup.md)
- [Known issues with MRTK for Magic Leap 2](/versioned_docs/version-31-Aug-2023/guides/third-party/mrtk/mrtk-overview.md)

