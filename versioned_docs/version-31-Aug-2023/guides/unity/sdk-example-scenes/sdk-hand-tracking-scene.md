---
id: sdk-hand-tracking-scene
title: Hand Tracking
description: An overview of the hand tracking demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 11
date: 3/21/2022
keywords: [Unity, Examples, Samples, XR Interaction Toolkit, Hand, Tracking, Input]
tags: [Unity, Examples, Samples, XR Interaction Toolkit, Hand, Tracking, Input]
---

## Overview

This example demonstrates and prescribes preferred methods for using **Hand Tracking**.

The images above the main UI depict all the recognized hand key poses. As you perform these key poses, the example highlights the images of the poses that are detected and prints both the name of the key pose and the confidence percentage. The confidence percentage specifies how confident we are that the key pose you are performing is the key pose that is detected.

The image mapped to the hand key pose being performed will rotate to match the specific hand performing the key pose.

When both hands perform the same key pose, the image will spin.

In addition to this, as you examine your hands, you will see various key points.

:::note
For instructions on installing the SDK Examples Project and building this scene, follow the [Examples Project Install Guide](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md).
:::

## Requirements

Mandatory privileges required by this feature:

- **GesturesSubscribe**
- **GesturesConfig**

Privileges required by this example:

- **ControllerPose**

:::note **Gestures**

Gestures are in the **Gesture Classification API**, not in **HandTracking**.

:::

## Prerequisites

- **Unity Editor 2022.2**
- **Magic Leap XR Package 7.0.0-preview.3**
- Latest **MagicLeap.unitypackage** from [here](https://thelab.magicleap.cloud/installers/ML_Hub_Installer.dmg)

### Project Setup

1. Follow the steps given in the [Examples Project Install Guide](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md) to setup the Unity project.

2. When you import the **Magic Leap Unity Package** from the above mentioned link, you'll see the **HandTracking Example** scene located in **MagicLeap/Examples/Scenes**.

3. Go to **Edit > Project Settings > Magic Leap > Manifest Settings** and check **Hand_Tracking**.

<Image url= {require("/img/unity/project-setup.png")} >Example of checking Hand_Tracking</Image>

4. Add the **HandTracking** scene to the list of scenes to build, build the APK, then install on-device.

### How to Use

The **HandTracking API** provides access to the left and right hand positions, keyposes, bones, and confidence values.

Examples Scripts to reference:

- **HandTrackingExample.cs**
- **HandVisualizer.cs**
