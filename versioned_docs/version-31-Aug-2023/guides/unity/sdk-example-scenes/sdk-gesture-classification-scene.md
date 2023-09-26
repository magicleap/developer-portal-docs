---
id: sdk-gesture-classification-scene
title: Gesture Classification
description: An overview of the gesture classification demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 9
date: 06/30/2022
keywords: [Unity, Examples, Samples, XR Interaction Toolkit, Hand, Tracking, Gesture, Classification, Input]
tags: [Unity, Examples, Samples, XR Interaction Toolkit, Hand, Tracking, Gesture, Classification, Input]
---

## Prerequisites

- Unity Editor 2022.2
- Magic Leap XR Package 7.0.0-preview
- Latest `MagicLeap.unitypackage` (installable via the [App Sim](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-package-manager.md))

## Project Setup

:::note
For instructions on installing the SDK Examples Project and building this scene, follow the [Examples Project Install Guide](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md).
:::

1. Follow our [Unity Getting Started Guides](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/unity-getting-started.md) to set up your development environment and ensure Unity is configured correctly.
2. When you import the Magic Leap Unity Package, you'll see the **GestureClassification Example scene** located under *MagicLeap/Examples/Scenes*.
3. Go to **Edit > Project Settings > Magic Leap > Manifest Settings** and enable permissions for **Hand_Tracking**.
4. Add the GestureClassification scene to the list of scenes to build, build the APK, and install to the device.

## How to Use

### During Runtime

While the app is running, if Gestures are used, the user must have visible hands for data to populate.

## Additional Info

Refer to the [Gesture Classification API](docs/guides/unity/input/gesture-classification/unity-gesture-classification-overview.md) for more information.

