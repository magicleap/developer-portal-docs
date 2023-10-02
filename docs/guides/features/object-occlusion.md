---
title: Occlusion
sidebar_position: 6
date: 08/10/2023
tags: [Overview, Occlusion, Meshing, Planes]
keywords: [Overview, Occlusion, Meshing, Planes]
---

# Magic Leap Occlusion API

Magic Leap 2's Occlusion API offers developers a way to enhance immersion in mixed reality applications by generating a mesh representation of nearby physical objects. This allows virtual objects to interact with the real world in a more believable way by appearing to be occluded (or "masked") by real-world objects.

The Magic Leap Occlusion API enables you to create a mesh representation of near field objects, so they can be used for occlusion of virtual objects for a better immersion experience.

:::caution Experimental API

The Occlusion API is an experimental API that could be changed or removed at any time.

:::

## Permissions

To access the Occlusion API, Developers must declare the `com.magicleap.permission.SPATIAL_MAPPING` (level: Dangerous) permission in their application's Manifest and request the permissions at runtime.

## Features of the Occlusion API

### Distance Settings

The Occlusion API provides settings to specify the distance range within which objects will contribute to the occlusion mesh:

**Minimum Distance**: his setting allows developers to specify the closest distance (in meters) at which objects will start to be occluded. The possible range for this setting is from 0.3 meters to 7.5 meters.

**Maximum Distance**: This defines the furthest distance (in meters) up to which objects will be occluded. Like the minimum distance, the possible range is also from 0.3 meters to 7.5 meters.

### Occlusion Mesh

An occlusion mesh is a representation of the real-world environment, which helps the system understand which parts of the virtual objects should be visible and which parts should be hidden behind real-world objects.

**Update Rate**: For long range occlusion, the Occlusion mesh is updated at an interval of 5 frames per second. This allows the system to occlude Virtual content in static environments. For real-world objects in close range, the Occlusion mesh dynamically updates at 30 frames per second. 

**Data Components**:

    - The mesh contains data about the number of vertices and indices.
    - Vertices represent points in the 3D space concerning the world origin.
    - Indices, organized in sets of three, define triangles. The order of indices is Clockwise (CW).

## API Resources

You can read more about what the Object Occlusion API offers in the MagicLeap documentation: [Occlusion](/docs/api-ref/api/Modules/group___occlusion/group___occlusion.md).
