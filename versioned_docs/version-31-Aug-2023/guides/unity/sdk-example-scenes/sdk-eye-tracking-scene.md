---
id: sdk-eye-tracking-scene
title: Eye Tracking
description: An overview of the eye tracking demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 8
date: 3/21/2022
keywords: [Unity, Examples, Samples, XR Interaction Toolkit, Eye Tracking, Input]
tags: [Unity, Examples, Samples, XR Interaction Toolkit, Eye Tracking, Input]
---


## Overview

This example demonstrates and prescribes preferred methods for eyes tracking.

The example provides an EyeTrackingExample script that drives parameters of the eye tracking API and displays tracking points and details.

The scene detects where your eyes are pointed and displays cubes in your environment as you look around. Details about eye tracking are displayed above. Bumper is used to switch between tracking modes.

:::note
For instructions on installing the SDK Examples Project and building this scene, follow the [**Examples Project Install Guide**](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md).
:::

### Tracking Modes

- Both Eyes: Tracks each eye separately and displays each eye's focus point.
- Fixation Point: Displays both eyes approximate focus point.

