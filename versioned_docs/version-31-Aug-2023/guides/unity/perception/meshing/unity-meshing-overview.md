---
id: unity-meshing-overview
title: Meshing
description: Learn how to create meshes from surfaces detected by the Magic Leap. 
sidebar_position: 0
date: 06/08/2022
tags: [Unity, Perception, Meshing, Surfaces]
keywords: [Unity, Perception, Meshing, Surfaces]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Meshing is the creation of triangle-based meshes surfaces detected by Magic Leap devices. The mesh is used for real-time occlusion rendering and collision detection with digital content. Unlike Plane Detection, which only detects planar surfaces, Meshing can detect a variety of surfaces.

## Mesh Blocks

Mesh Blocks are sections of the mesh that spatially subdivide the real world into a set of cubic blocks that are updated from the internal reconstruction model. The geometry contained in these cubical regions of the reconstruction is represented as a connected triangle mesh (i.e. a mesh where vertices are shared by multiple triangles).

- **Local Updates**
  - Meshes between blocks are not connected. This enables fast, localized mesh updates when changes occur in one area of the environment. This also helps when objects move to new locations.
- **Mesh Block Skirt**
  - A small "skirt" region is added to Mesh Blocks so that they overlap neighboring blocks by a small amount. This provides continuity, fills small cracks, and provides a more visually continuous surface for occlusion and physics.

Developers are strongly recommended to use the **Meshing Subsystem component** to obtain mesh information. This component manages all the necessary calls between Magic Leap Meshing and Unity's `XRMeshSubsystem`.

:::caution
This feature requires the `WORLD_RECONSTRUCTION` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

:::info
Surfaces that are reflective or have little texture may not be detected properly.
:::

<DocCardList items={useCurrentSidebarCategory().items}/>

## See also

- [`UnityEngine.XR.XRMeshSubsystem`](https://docs.unity3d.com/ScriptReference/XR.XRMeshSubsystem.html)
  - XRMeshSubsystem API to which Magic Leap provides it's meshing information.
- [`UnityEngine.XR.MagicLeap.MeshingSubsystemComponent`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md)
  - API Reference for the MeshingSubsystemComponent.

