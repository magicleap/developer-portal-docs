---
title: Plane Raycast
description: Learn how to query planes Magic Leap that were detected by the Magic Leap.
sidebar_position: 2
date: 06/08/2022
tags: [Unity,Perception, Planes, Surfaces]
keywords: [Unity,Perception, Planes, Surfaces, Raycast]
---

This section includes information on how to Raycast against the planes detected by the Magic Leap 2's Planes API, without the use of colliders.



Ray casting, also known as hit testing, allows you to determine where a ray (defined by an origin and direction) intersects with a trackable. Traditionally, developers use Unity's physics module but since AR Planes are not always present in the physical world, AR Foundation provides a separate interface.

The raycast manager serves two purposes:

Provides an API to perform single raycasts.
Allows you to create a persistent ARRaycast. An ARRaycast is a type of trackable and is updated automatically until you remove it. Conceptually, it is similar to repeating the same raycast query each frame, but platforms with direct support for this feature can provide better results.


:::caution
This feature requires the `WORLD_RECONSTRUCTION` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

## Updating the Plane Query Settings

Developers should set the `PlanesSubsystem.Extensions.Query` to modify the settings used in the plane's subsystem query. This can be done once or modified in the `Update()` loop.

```csharp
        PlanesSubsystem.Extensions.Query = new PlanesSubsystem.Extensions.PlanesQuery
        {
            /// The flags to apply to this query.
            Flags = PlanesSubsystem.Extensions.MLPlanesQueryFlags.Polygons 
                    | PlanesSubsystem.Extensions.MLPlanesQueryFlags.Semantic_All,
            /// The center of the bounding box which defines where planes extraction
            // should occur.
            BoundsCenter = Vector3.zero,
            /// The rotation of the bounding box where planes extraction will occur.
            BoundsRotation = Quaternion.identity,
            /// The size of the bounding box where planes extraction will occur.
            BoundsExtents = Vector3.one * 20f,
            /// The maximum number of results that should be returned.
            MaxResults = 100,
            // The minimum area (in squared meters) of planes to be returned. This
            // value cannot be lower than 0.04 (lower values will be capped to this
            // minimum).
            MinPlaneArea = 0.25f
        };
```
