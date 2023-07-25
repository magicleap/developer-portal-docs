---
id: unity-meshing-subsystem-component
title: Meshing Subsystem Component Overview
description: Learn how the Meshing Subsystem component works and it's features.
sidebar_position: 1
date: 06/08/2022
tags: [Unity, Perception, Meshing, Surfaces]
keywords: [Unity, Perception, Meshing, Surfaces]
---

This page provides an overview of the Magic Leap Meshing Subsystem component and the settings that can be altered by developers.

<Image url= {require("/img/unity/meshing-subsystem-component-default.png")} >Default Meshing Configuration</Image>

- **Mesh Prefab**
  - The prefab used to generate a new mesh block when the mesh blocks are returned from the Meshing Subsystem. Can optionally include a mesh collider to interact with rigidbodies.
- **Compute Normals**
  - Flag to determine if normals should be computed and returned along with mesh vertex data.
- **Density**
  - [0-1] float value to determine how "dense" the mesh vertex or point cloud data is that is returned. This maps to the Level of Detail enum settings of the Magic Leap C SDK `ml_meshing2.h` API.
- **Mesh Parent**
  - The Game Object to instantiate the generated mesh blocks under. In the case of the image above it is the top level Examples object.
- **Requested Mesh Type**
  - An enumeration to choose what kind of mesh data is returned, either Triangulated meshes or Point cloud data.
- **Fill Hole Length**
  - The size of a hole to fill with mesh data (only relevant to Triangulated mesh data).
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

:::caution
This feature requires the `WORLD_RECONSTRUCTION` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

:::info
Surfaces that are reflective or have little texture may not be detected properly.
:::

## See also

- [`UnityEngine.XR.MagicLeap.MeshingSubsystemComponent`](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md)
  - API Reference for the MeshingSubsystemComponent.
