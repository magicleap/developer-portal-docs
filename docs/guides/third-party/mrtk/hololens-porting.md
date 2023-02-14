---
id: hololens-porting 
title: HoloLens to Magic Leap 2 Porting Guide
sidebar_position: 3
date: 02/13/2023
---

# HoloLens to Magic Leap 2 Unity Porting Guide

Porting your MRTK-based HoloLens project to Magic Leap 2 requires only a few adjustments to your input system and Unity build environment. Using the Magic Leap 2 Unity SDK and MRTK-Magic Leap plugin according to this guide will get your project running on the Magic Leap 2 with minimal effort. 

:::note
The MRTK-Magic Leap plugin currently only supports MRTK v2.8 
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

## Porting Prerequisites:
- Your project must use Microsoft MRTK
- You have downloaded and installed the latest compatible versions of the Magic Leap Unity SDK, MRTK-Magic Leap package, and Unity editor

## Update your Unity Project for Magic Leap 2
Please refer to the Unity Getting Started guides to update your project to be compatible with Magic Leap 2. Most notably:

- You must use Unity editor version 2022.2.x or higher according to the ML2 SDK you are planning to use. Please refer to the OS/SDK compatibility matrix for more information.
- Upon installing the Magic Leap Unity SDK package, you can use the Project Validation tool to help configure your editor settings for Magic Leap 2 development.
- You must be using the Universal Render Pipeline.
- Download and install the MRTK-Magic Leap package according to this guide.


## Configure Unity Input System 
The MRTK- Magic Leap plugin relies on both the legacy and new Unity input system. 
To adjust these settings:
- Go to **Edit > Project Settings > Player > Other Settings** and set **Active Input Handling** to **Both**.

## MRTK Profile configuration for Magic Leap 2
Once you have installed the packages listed above and changed your Unity project settings to build to the Magic Leap 2, make sure to change the following configuration profiles on the Mixed Reality Toolkit prefab to be Magic Leap 2 compatible:

- **Camera system type**: MagicLeap 2 Default Camera Profile
- **Input System type**: MagicLeap 2 InputSystemProfile

You can open the example scenes from the MRTK-Magic Leap Unity package available in Magic Leap Hub to view Mixed Reality Toolkit prefab settings for Controller, Hand Tracking, Eye Gaze and other interaction methods. 

More information on configuring hand tracking for the Magic Leap 2 using MRTK can be found here.

## Further resources
- Magic Leap 2 Unity Getting Started
- Setting Up MRTK with Magic Leap 2
- Known issues with MRTK for Magic Leap 2
