---
id: sdk-meshing-scene
title: Meshing
description: An overview of the meshing demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 16
date: 06/07/2022
tags: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, Meshing]
keywords: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, Meshing]
---


## Overview

This example demonstrates and prescribes preferred methods for using the meshing functionality. Provided is a MeshingExample script that drives parameters of the meshing API through the MLSpatialMapper.

This example provides a use case of the MapEvents functionality, clearing all fragments and refreshing the mesh when a new map is detected.

The scene provides several examples of changing the way rendering and physics interact with the meshing results. You can:

- Visualize the mesh results.
- Use the mesh results as occlusion data for virtual objects.
- Toggle the bounds extents between bounded and unbounded (max bounds) and visualize the bounds with a wire frame cube.
- Shoot prefab spheres into the scene for physics interaction.

## Project Setup

:::tip
Follow the [SDK Examples Project Setup page](/docs/guides/unity/sdk-example-scenes/sdk-install-setup.md) for steps on how to open the SDK Examples Project and build the Meshing example scene, located under `Assets/MagicLeap/Examples/Scenes/Meshing.unity`.
:::

### Requirements

- Unity Editor 2022.2 (Pure Android) or newer
- Magic Leap XR Package 7.0.0 preview or newer
- MagicLeap.unitypackage 0.53.0 or newer
- Magic Leap OS from 04/27/2022 or newer

Meshing requires the following settings, under *Edit > Project Settings > Magic Leap > Manifest Settings*:

- API Level set to 20 (or greater)
- **WORLD_RECONSTRUCTION** permission enabled

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/meshing/meshing-permissions.png")} >Magic Leap Manifest Settings under Project Settings</Image>

## Project Layout

The example Meshing scene has the following layout. If you are starting from scratch you will want to set up your scene similarly. We will cover each of the major components of the scene and how they are configured.

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/meshing/meshing-a-layout.png")} >Project Layout and Scene Hierarchy</Image>

### XR Rig

Like all other example scenes, this scene utilizes the **XR Rig prefab** which is available within the [Magic Leap Unity SDK Package](/docs/guides/unity/getting-started/configure-unity-settings.md). It provides both the Main Camera and Controller objects (among other important AR Session components).

### Meshing Example

This scene utilizes a **top-level MeshingExample object** to coordinate the behavior and functionality of the scene. The MeshingExample object has a MeshingExample MonoBehavior script attached to it. This script is available within the MagicLeapUnityExamples project. Custom projects will need to write their own or copy from this to handle the various Meshing functions.

Primarily this holds the references to the Meshing Subsystem Component and Meshing Visualizer to control the settings and visualization of the Meshing data. It also controls the meshing bounds extents and holds a prefab for the MeshingSampleBall prefab that is used to showcase mesh collision. The Controller Status script is used to update the UI with the connection status of the controller.

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/meshing/meshing-b-example.png")} >Meshing example</Image>

### Meshing Visualizer

The MeshingVisualizer is used to control the **shader/material** that is applied to the received mesh data. It handles cycling the materials attached to the mesh components that are generated when the user presses the bumper button.

:::note
There is a known issue with Compute Shaders in Unity on the Magic Leap platform. Thus we do not include a wireframe shader in this list of visualizers in the current release. Instead a Colored Material has been substituted in its place.
:::

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/meshing/meshing-c-visualizer.png")} >Meshing visualizer</Image>

### Meshing Subsystem Component

The MeshingSubsystemComponent object contains the settings that will be configured and sent to the Meshing Subsystem that is responsible for performing meshing queries.

These settings can be modified to produce different meshing results. In this sample the MeshingExample/MeshingVisualizer objects will modify some of these based on user interaction (Requested Mesh Type).

- **Mesh Prefab**
  - The prefab used to generate a new mesh block when the mesh blocks are returned from the Meshing Subsystem.
- **Compute Normals**
  - Flag to determine if normals should be computed and returned along with mesh vertex data.
- **Density**
  - [0-1] float value to determine how "dense" the mesh vertex or point cloud data is that is returned. This maps to the Level of Detail enum settings of the Magic Leap C SDK `ml_meshing2.h` API.
- **Mesh Parent**
  - The Game Object to instantiate the generated mesh blocks under. In this case it is the top level [example](#meshing-example) object.
- **Requested Mesh Type**
  - An enumeration to choose what kind of mesh data is returned, either Triangulated meshes or Point cloud data.
- **Fill Hole Length**
  - The size of a whole to fill with mesh data (only relevant to Triangulated mesh data).
- **Planarize**
  - A flag choosing to smooth mesh data or not.
- **Disconnected Component Area**
  - The size of disconnected mesh components that will be culled from the main mesh block data before it is returned to the application.
- **Mesh Queue Size**
  - The number of mesh blocks that will be generated each update frame.
- **Polling Rate**
  - The interval (in ms) in which meshing requests will be performed.
- **Batch Size**
  - The maximum number of mesh blocks that will be requested each time a request is performed.
- **Request Vertex Confidence**
  - Flag to determine if vertex confidence values should be requested. Use the TryGetConfidence function to retrieve the confidence values of a mesh block using its mesh block ID.
- **Remove Mesh Skirt**
  - Flag to enable culling of overlapping mesh data between mesh blocks, also referred to as a "skirt".

:::note
These settings were ported from the ML1 Meshing Subsystem which was implemented as part of the Unity XR plugin. Some of these settings may be updated in future sprints to better align with the Magic Leap C SDK or to make the system easier to understand and work with. Specifically Density, which maps to 3 enum values and minor changes in value clears meshes but may not change resulting data.
:::

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/meshing/meshing-d-subsystem.png")} >Meshing subsystems</Image>

### Wireframe Cube

The Wireframe Cube object is used to determine the size of the **meshing bounds extents**. The bounds extents is what determines the area of world space surrounding the Head Pose in which mesh blocks will be requested. The MeshingExample script will modify the size of the Wireframe Cube when it updates its bounded state. The size will be modified to `(2, 2, 2)` when it's in "bounded" mode and will be set to `(10, 10, 10)` when it is in "boundless" mode.  In custom applications this object can either be scaled manually between `(0, 0, 0)` and `(10, 10, 10)` (anything outside of this range will be clamped by the Magic Leap C SDK). The position is also set to the head pose by the MeshingExample script in the sample. In custom apps, it can also be manually changed to be relative to the head pose and does not need to be centered on the head pose, however, the Magic Leap C SDK will only retrieve meshing data within a *10 meter radius* of the current head pose.

The bounding volume can be any empty game object that is used to define the bounds. In this example, it has a child mesh that is the wireframe cube model, but is only used to show a visual representation of the area that will be meshed. It is not required for custom applications.

<Image url= {require("/img/unity/example-projects/sdk-example-scenes/meshing/meshing-e-cube.png")} >Meshing cube</Image>
