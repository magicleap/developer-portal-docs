---
id: sdk-camera-capture-scene
title: Camera Capture
description: An overview of the camera capture demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 3
date: 3/21/2022
keywords: [Unity, Examples, Samples, XR Interaction Toolkit, Camera]
tags: [Unity, Examples, Samples, XR Interaction Toolkit, Camera]
---


## Overview

This example demonstrates the functionality of using the camera capturing in one the 3 modes:

- CamOnly
- VirtualOnly
- MR

Use `Camera Flag` to connect with the desired Camera mode

Use the `StreamCapabilities` dropdown to select the desired stream to be captured.

The data received from the camera is processed with a posterization algorithm and then rendered to a texture for example purposes. Intrinsic properties of the camera are shown on the side when recording starts.

:::note
For instructions on installing the SDK Examples Project and building this scene, follow the [**Examples Project Install Guide**](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md).
:::

## Requirements

Mandatory privileges required by this feature:

- CameraCapture
- Computer Vision

Privileges required by this example:

- AudioCaptureMic
- ControllerPose

