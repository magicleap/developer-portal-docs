---
id: plane-detection-feature
title: Plane Detection
sidebar_position: 5
date: 06/08/2022
tags: [Features, Planes, Perception, Overview]
keywords: [Features, Planes, Perception, Overview]
---

Plane Extraction enables users to extract rectangular planar regions of the world reconstruction model. Plane candidates are returned as simple geometric rectangles.

### Features

- **Bounding Box**
  - Plane extraction is limited to a user-specified bounding box volume for efficiency and only planes intersecting this bounding box will be returned.
- **Filtering**
  - The types of planes returned may be filtered based on plane orientation
    - **Horizontal**: Perpendicular to gravity
    - **Vertical**: Parallel to gravity
    - **Arbitrary**: All other orientations, excluding horizontal and vertical
    - **All Orientations**: Including horizontal, vertical and arbitrary orientations
- **Inner Planes**
  - Controls whether **Inner Planes** or **Outer Planes** are requested.
    - **Outer Plane**: (inner flag set false) A rectangle around the bounds of the flat region. There will be one outer rectangular plane per flat region.
    - **Inner Plane**: A list of rectangles (starting with the largest rectangle, area-wise) inside of a flat area.
- **Orient To Gravity**
  - For non-horizontal planes, setting this flag will result in the top of the plane rectangle being perpendicular to gravity.
- **Ignore Holes**
  - This flag and the minimum hole length are deprecated in this release. As long as a hole is big enough (diameter of hole ~16cm), the inner planes will avoid covering the holes. The outer planes by definition will cover all the holes.
- **Semantic Labelling**
  - Planes identified as belonging to feature groups:
    - **Walls**
    - **Ceiling**
    - **Floors**
    - **All groups**: Including walls, ceilings and floors
- **Plane ID**
  - In static environments and within the same device session, this ID will be consistent between queries, except following major head tracking events such as map merging or localization into a different tracking map.

### Best Practices

The user should think carefully about how they want planes to be returned

- On a cluttered desktop, the **Outer Plane** is the whole desktop, while the **Inner Planes** are the planar areas of the desktop between the clutter. So, for example, to place a mini avatar on the desktop between objects, setting the **Inner Plane** flag would likely provide many small empty small planar regions between the objects.
- **Outer Planes** would provide a single plane for a rectangular table with or without objects on it. However, **Outer Planes** do not guarantee that plane boundaries that will be aligned with or inside a real object - they may overhang beyond the edges of a real object and intersect with other **Outer Planes**.
- For an L-shaped desk, requesting the **Outer Plane** would return a single rectangular plane around the outer boundary of the L, obviously including areas which are not actually desk. In that case, using the **Inner Planes**  would likely provide the best results.
- Planes are initially detected on larger areas of the internal model and then refined to add in surrounding flat areas. In the worst case, the resolution of the plane extraction is about 16cm and smaller planar areas may not be detected.
- When a user is exploring new areas, it is possible that the plane query returns a number of smaller/fragmented planes instead of large planes in the new explored area. These smaller planes may be merged to larger planes over time.
- Plane splitting when objects or surfaces move apart can only be detected when the sensors detect background surfaces within around 5m, through the gap between the planes to be split. This gap width needs to be at least 16cm for a split to occur.
- Aim to scan an area thoroughly (covering floors, ceiling, and walls) to ensure stable and correct results before querying for semantic labelled wall planes, as wall labelling may occasionally be inconsistent on repeated queries if there is a change in vertical planes pose, or a split in vertical planes, or if a better vertical plane is detected for a wall plane etc.
- Ceiling and wall detection requires a minimum amount of floor area (> 0.5 m^2) to be reconstructed and detected. A wall will only be detected from a vertical plane if the highest part of the plane (or overlapped vertical planes on one surface) is between 1.75m and the detected ceiling height. Further, a wall is only detected if the plane has a minimum width of 1.8m.
- Downward-facing planes (i.e. normal pointing vertically down with gravity, to normal pointing 45 degrees to gravity) will be detected as a ceiling if the center of the plane is close to the detected ceiling height.
- Semantically labelled planes filtering is in addition to any filtering you set on plane orientations. For example, if you request only horizontal orientation planes, and also wall planes (which are vertical), you would actually get both in the results.

## Learn More

- [Unity Meshing Overview](/versioned_docs/version-31-Aug-2023/guides/unity/perception/plane-detection/unity-planes-overview.md)
  - Learn how to implement Meshing inside your Unity Application.
- [Native Meshing API](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___meshing2/group___meshing2.md)
  - C++ API documentation for Magic Leap's Meshing feature.

