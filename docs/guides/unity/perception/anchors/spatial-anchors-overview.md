---
id: spatial-anchors-overview
title: Spatial Anchors Overview
description: Learn how to link objects to Spatial anchors and use them to create persistent content.
sidebar_position: 1
date: 4/14/2022
tags: [Unity, Perception, Anchors, Persistence]
keywords: [Unity, Perception, Anchors, Persistence]
---

A Spatial Anchor is a shared reference point for tethering virtual content to a persistent physical location. (For more details about this feature, see the [Spatial Anchors](docs/guides/features/spaces/spatial-anchors/) page.) This common reference allows you to place content in the physical world and have it stay in the same place and orientation without any drift across multiple user sessions, and to have co-located content aligned across multiple networked devices.


:::note
Users must localize into a Space before creating spatial anchors. Use the [Spaces](docs/guides/features/spaces/spaces-tool.md) application to map and save new Spaces.
:::

:::caution
This feature requires the `SPATIAL_ANCHORS` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

## How Magic Leap 1's PCFs are different from Anchors

This section is for users transitioning from Magic Leap 1 to Magic Leap 2 devices. While the Magic Leap 1's anchor system ([Persistent Coordinate Frames, or PCFs](https://ml1-developer.magicleap.com/en-us/learn/guides/persistent-coordinate-frames)) was automatic, anchors on Magic Leap 2 have to be created explicitly.

| Magic Leap 1 PCFs               | Magic Leap 2 Spatial Anchors                 |
| ---------------------- | ----------------------------------- |
| SingleUserMultiSession | MLSpatialAnchorMappingMode_OnDevice |
| MultiUserMultiSession  | MLSpatialAnchorMappingMode_ARCloud  |

## Spaces

The [Spaces](docs/guides/features/spaces/spaces-tool.md) application allows you to create new spaces and localize into them. It also allows you to visualize all of the spatial anchors associated with a given Space.

:::info
Without AR Cloud, Magic Leap 2 allows users to save up to 5 Spaces locally on the device.
:::

:::note
Spatial Anchors can be created from inside your application. See [Spatial Anchors API](/docs/guides/unity/perception/anchors/spatial-anchors-api.md) for more details.
:::
