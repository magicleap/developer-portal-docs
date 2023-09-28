---
id: meshing-overview-feature
title: Meshing
sidebar_position: 4
date: 06/08/2022
tags: [Features, Meshing, Perception, Overview]
keywords: [Features, Meshing, Perception, Overview]
---

Meshing is the creation of triangle-based meshes from the World Reconstruction model created by Magic Leap devices. The mesh is used for real-time occlusion rendering and for collision detection with digital content.

### Mesh Blocks

**Mesh Blocks**  spatially subdivide the real world into a set of cubic blocks that are updated from the internal reconstruction model. The geometry contained in these cubical regions of the reconstruction is represented as a connected triangle mesh (i.e. a mesh where vertices are shared by multiple triangles).

- **Local Updates**
  - Meshes between blocks are not connected. This enables fast, localized mesh updates when changes occur in one area of the environment. This also helps when objects move to new locations.
- **Mesh Block Skirt**
  - A small "skirt" region is added to **Mesh Blocks** so that they overlap neighboring blocks by a small amount. This provides continuity, fills small cracks, and provides a more visually continuous surface for occlusion and physics.

### Features

- **Bounding Box**
  - Meshes are only updated for **Mesh Blocks** that intersect the bounding box specified by the developer.
- **Mesh Block Skirt**
  - If enabled, skirts are generated to avoid cracks between blocks. A developer can disable this feature if not needed.
- **Hole Filling**
  - Attempts to fill small holes completely within blocks and surrounded by other geometry. The maximum hole size can also be specified.
- **Normals**
  - Calculates the vertex normals of the mesh.
- **Confidence**
  - Calculates the normalized confidence in the reconstruction at each vertex.
- **Mesh Planarization**
  - Mostly flat regions of the mesh are smoothed out to be planar.
- **Mesh Level of Detail**
  - Selects the level of detail (i.e. maximum number of triangles) per **Mesh Block**.
- **Remove Disconnected Components**
  - Small disconnected components in the mesh are removed. The developer can specify the minimum size removed based on the app requirements.
- **Point Cloud Only Output**
  - This output is available by setting the point cloud flag in the meshing flags.

### Best Practices

- Only the environment immediate to the user is maintained in active memory. Only blocks within a 10m radius of the user’s current position are returned at any time. Specifying a smaller bounding box enables faster updates when there is change in the real world.
- **Hole Filling**
  - When holes fall on the boundary between two **Mesh Blocks,** the system cannot always fill them.
- **Mesh Planarization**
  - Object geometry and small details close to the surfaces such as picture frames on walls might disappear.
- **Level Of Detail**
  - The reconstruction system works at high resolution to recover detail in the scene and then iteratively simplifies the mesh down to the requested level of detail. While lower levels of detail can help app rendering, the lower triangle count can consume more power, compute, and time to generate. Different levels have different maximum triangle counts:
    - Maximum: 5000 triangles per block
    - Medium: 1000 triangles per block
    - Minimum: 250 triangles per block
- **Remove Disconnected Components**
  - Can cause valid object parts like chair legs and backs or lampshades to be removed if reconstruction does not encompass the thin geometry connecting different parts of the objects

## Learn More

- [Unity Meshing Overview](/versioned_docs/version-31-Aug-2023/guides/unity/perception/meshing/unity-meshing-overview.md)
  - Learn how to implement Meshing inside your Unity Application.
- [C++ Meshing API](docs/api-ref/api/Modules/group___meshing2/group___meshing2.md)
  - Reference the API documentation to implement meshing using Magic Leap's Native API.

