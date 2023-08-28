---
id: unity-planes-query
title: Query Planes
description: Learn how to query planes Magic Leap  that were detected by the Magic Leap.
sidebar_position: 2
date: 06/08/2022
tags: [Unity,Perception, Planes, Surfaces]
keywords: [Unity,Perception, Planes, Surfaces]
---

Depending on your application's use case, you may need the Magic Leap to query planes with different characteristics. For example, you may decide to only detect vertical surfaces or planes that only have 4 edges.

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

## MLPlanes Query Flag Definitions

| MLPlanesQueryFlags | Description |
|---|---|
| None | Include no planes. |
| Vertical | Include planes whose normal is perpendicular to gravity. |
| Horizontal | Include planes whose normal is parallel to gravity. |
| Arbitrary | Include planes with arbitrary normals. |
| AllOrientations | Include all plane orientations. `Vertical \|                                    Horizontal \|                                    Arbitrary` |
| OrientToGravity | For non-horizontal planes, setting this flag will result in the top of the plane rectangle being perpendicular to gravity. |
| Inner | If this flag is set, inner planes will be returned; if it is not set, outer planes will be returned. |
| Semantic_Ceiling | Include planes semantically tagged as ceiling. |
| Semantic_Floor | Include planes semantically tagged as floor. |
| Semantic_Wall | Include planes semantically tagged as wall. |
| Semantic_All | Include all planes that are semantically tagged. `Semantic_Ceiling \|                                    Semantic_Floor \|                                    Semantic_Wall` |
| Polygons | Include polygonal planes. |

:::note
Inner planes are the largest rectangular planes that can fill a boundary region (there can be multiple). Outer plane is the smallest rectangular plane that can encompass a boundary (there can be only one)
:::

## Detect Vertical Planes Example

This the example below demonstrates how to set the query flags to detect all vertical planes that are within 10 meters of the origin.

```csharp
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class PlaneExample : MonoBehaviour
{
    void Start()
    {
        PlanesSubsystem.Extensions.Query = new PlanesSubsystem.Extensions.PlanesQuery
        {
            Flags = PlanesSubsystem.Extensions.MLPlanesQueryFlags.Polygons | PlanesSubsystem.Extensions.MLPlanesQueryFlags.Vertical,
            BoundsCenter = Vector3.zero,
            BoundsRotation = Quaternion.identity,
            BoundsExtents = Vector3.one * 10f,
            MaxResults = 100,
            MinPlaneArea = 0.04f
        };
    }
}
```

## Detect Walls, Floors, or Ceilings Example

To detect only planes that have semantic labels, such as walls or floors. Developers should replace the default `MLPlanesQueryFlags.Vertical` and `MLPlanesQueryFlags.Vertical` flags with the target semantic labels. The example below shows how to use the Planes API to only detect planes that are semantically tagged as walls. Currently, the Magic Leap can label ceilings, floors, and walls.

```csharp
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class PlaneExample : MonoBehaviour
{
    void Start()
    {
        PlanesSubsystem.Extensions.Query = new PlanesSubsystem.Extensions.PlanesQuery
        {
            Flags = PlanesSubsystem.Extensions.MLPlanesQueryFlags.Polygons | PlanesSubsystem.Extensions.MLPlanesQueryFlags.Semantic_Wall,
            BoundsCenter = Vector3.zero,
            BoundsRotation = Quaternion.identity,
            BoundsExtents = Vector3.one * 10f,
            MaxResults = 100,
            MinPlaneArea = 0.04f
        };
    }
}
```
