---
id: sdk-planes-scene
title: Plane Detection
description: An overview of the planes demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 17
date: 03/21/2022
keywords: [Unity, Examples, Samples, XR Interaction Toolkit, Planes, Plane Detection]
tags: [Unity, Examples, Samples, XR Interaction Toolkit, Planes, Plane Detection]
---


## Overview

This example scene demonstrates and prescribes preferred methods for detecting surfaces and displaying planes.

This example also provides an example use case of the MapEvents functionality, clearing all planes when the map is lost.

The scene detects surfaces and displays the planes in your environment as you look around. Planes can be vertical, horizontal, or diagonals, and the scene textures surfaces differently according to both untagged and semantically tagged planes (floors, walls, ceiling).

The UI text depicts the current number of planes and the maximum number of possible planes.

:::note
For instructions on installing the SDK Examples Project and building this scene, follow the [**Examples Project Install Guide**](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md).
:::

## Requirements

Mandatory privileges required by this feature:

- WorldReconstruction

Privileges required by this example:

- ControllerPose

