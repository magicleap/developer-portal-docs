---
id: hololens-porting 
title: HoloLens to Magic Leap 2 Porting Guide
sidebar_position: 3
date: 02/13/2023
---

# HoloLens to Magic Leap 2 Unity Porting Guide

Porting your MRTK-based HoloLens project to Magic Leap 2 requires only a few adjustments to your Unity project environment. Using the Magic Leap 2 Unity SDK and MRTK Magic Leap 2 plugin according to this guide will get your project running on the Magic Leap 2 with minimal effort.

:::note
The MRTK Magic Leap 2 plugin currently only supports MRTK v2.8
:::

## Platform Overview

There are several key differences between the HoloLens 2 and Magic Leap 2 MRTK development environment:

| | HoloLens 2 | Magic Leap 2 |
|:-- | --- | --- |
|Architecture | ARM64 |x86_64 |
|Unity editor version| 2021.3 LTS | 2022.2.x or newer |
|Render Pipeline| Lightweight Render Pipeline| Universal Render Pipeline|
|Build Target|Universal Windows Platform |Android |
|Interaction method|Hand tracking |Controller, Hand tracking |
|Unity Input System|Legacy |New |

## MRTK Feature Support

| | HoloLens 2 | Magic Leap 2 |
|:-- | --- | --- |
|Controller |  | x |
|Spatial Mapping| x | x |
|Hand Tracking| x | x |
|Voice| x | x |
|Eye Tracking| x | x |

## Porting Prerequisites

- Your project must use [Microsoft MRTK v2.8](https://github.com/Microsoft/MixedRealityToolkit-Unity/releases)
- You have downloaded and installed the latest compatible versions of the **Magic Leap Unity SDK**, **MRTK Magic Leap 2 package**, and **Unity editor** as outlined in the guides below.

## Update your Unity Project for Magic Leap 2

### Part 1: Update and configure your Unity project settings

1. [Update your Unity editor](/docs/guides/unity/getting-started/install-the-tools#install-unity-editor) version to **2022.2.0b7 or higher**.
2. [Download and install](/docs/guides/unity/getting-started/install-the-tools#downloading-the-unity-bundle) the latest compatible versions of the Magic Leap OS and Magic Leap SDK (v1.1.0-dev1 or newer). Use this [compatibility matrix](/docs/releases/version-matrix.md) to check version compatibility.
3. Open your Unity project in the new version of the Unity editor and complete the steps in the [Configure Project Settings](/docs/guides/unity/getting-started/configure-unity-settings.md) Unity guide.
4. Follow the [Render Pipeline Settings](/docs/guides/unity/getting-started/graphics-settings) Unity guide to change your render pipeline settings to the Universal Render Pipeline .

### Part 2: Implement the MRTK - Magic Leap 2 plugin

1. Follow the [Set Up MRTK for Magic Leap 2](/docs/guides/third-party/mrtk/mrtk-setup.md) guide to configure MRTK to work with the MRTK Magic Leap 2 plugin.

## Further resources

- [Magic Leap 2 Unity Getting Started](/docs/guides/third-party/mrtk/mrtk-setup.md)
- [Setting Up MRTK with Magic Leap 2](/docs/guides/third-party/mrtk/mrtk-setup.md)
- [Known issues with MRTK for Magic Leap 2](/docs/guides/third-party/mrtk/mrtk-overview.md)
