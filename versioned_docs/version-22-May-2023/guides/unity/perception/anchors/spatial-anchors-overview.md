---
id: spatial-anchors-overview
title: Spatial Anchors Overview
description: Learn how to link objects to Spatial anchors and use them to creat persistent content.
sidebar_position: 1
date: 4/14/2022
tags: [Unity, Perception, Anchors, Persistence]
keywords: [Unity, Perception, Anchors, Persistence]
---

A Spatial Anchor is a shared reference point for tethering virtual content to a persistent physical location. This common reference allows you to place content in the physical world and have it stay in the same place and orientation without any drift across multiple user sessions, and to have co-located content aligned across multiple networked devices.

**Cloud Anchors** are still under development, however **Local Multi Session Anchors** can be created and persist across multiple sessions on a device.

:::note
Users must use the [Spaces](docs/guides/features/spaces/spaces-tool.md) application for map management, but the anchor API is available to any app.
:::

:::caution
This feature requires the `SPATIAL_ANCHORS` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

## How Ml1's PCFs are different from Anchors

While the Magic Leap One's anchor system (Persistent Coordinate Frames, or PCFs) was automatic, anchors on Magic Leap 2 have to be created explicitly.

| Magic Leap 1 PCFs               | Magic Leap 2 Spatial Anchors                 |
| ---------------------- | ----------------------------------- |
| SingleUserMultiSession | MLSpatialAnchorMappingMode_OnDevice |
| MultiUserMultiSession  | MLSpatialAnchorMappingMode_ARCloud  |

:::tip
For more information, reference the [ML1 PCF documentation](https://developer.magicleap.com/en-us/learn/guides/persistent-coordinate-frames).
:::

## Spaces

The [Spaces](docs/guides/features/spaces/spaces-tool.md) application allows you to localize your Magic Leap into a space and to create anchors within "maps" of that space.

:::info
You can map any spaces you want and have multiple maps of the same location, but the device will only support 5 maps total.
:::

:::note
Anchors can also be created and submitted to the map from inside your application. See [Spatial Anchors API](/versioned_docs/version-22-May-2023/guides/unity/perception/anchors/spatial-anchors-api.md) for more details.
:::

