---
id: sdk-marker-tracking-scene
title: Marker Tracking
description: An overview of the marker tracking demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 14
date: 06/22/2022
tags: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, Camera, Tracking, Marker Tracking, Aruco Markers, Scanning]
keywords: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, Camera, Tracking, Marker Tracking, Aruco Markers, Scanning]
---


## Overview

This example demonstrates ArUco marker tracking on the Magic Leap 2.

:::info
The example scene help text may contain information on image tracking or barcode scanning, however, those features have not been implemented yet. Pressing the bumper to "change modes" will also have no effect. Currently the only feature is marker tracking.
:::

## Requirements and Setup

:::note
Follow the [SDK Examples Project Setup page](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md) for steps on how to open the SDK Examples Project and build the MarkerTracking example scene, located under `Assets/MagicLeap/Examples/Scenes/Meshing.unity`.
:::

### Permissions

You must enable the `CAMERA` and `MARKER_TRACKING` permissions in the Unity Project Settings. Refer to the [Permissions Guide](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md) for more information.

### Configuration

Open the **MarkerTracking** example scene and select the **CombinedTrackingExample** GameObject in the hierarchy under the Example parent. In the inspector, under the Marker Tracking Example script, enable **Marker Scanning** and select **ArUco** as the marker type.

<Image url= {require("/img/unity/example-projects/marker-tracking/sdk-marker-tracking.png")} >Enable Marker Tracking and Marker Type</Image>

## ArUco Tracking

Show your headset an ArUco marker from a dictionary matching that of the configured marker type on the CombinedTrackingExample object and press the trigger to begin scanning. Logs will appear in the help text box.

You can find markers at [https://chev.me/arucogen/](https://chev.me/arucogen/).

