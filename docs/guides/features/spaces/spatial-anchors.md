---
title: Spatial Anchors
description: Learn about Spatial anchors and how they can be used inside your application.
sidebar_position: 5
date: 2/24/2022
tags: [Perception, Anchors, Persistence]
keywords: [Perception, Anchors, Persistence]
---

This section will guide you on how to use Spatial Anchors, a shared reference point for tethering virtual content to a persistent physical location.

:::note
Magic Leap 1 used the term PCF (Persistent Coordinate Frame) to describe our previous system of anchoring virtual content. Differences between PCFs and Spatial Anchors can be found on the [Spatial Anchors Overview Page](/docs/guides/unity/perception/anchors/spatial-anchors-overview.md)
:::

Spatial Anchors enable developers to create persistent and multi-user content. These anchors can be used to create shared experiences, such as multiplayer gaming, collaborative work, or interactive exhibits. Developers can create anchors inside their applications using Magic Leap's Spatial Anchors API. Once created, you can use the Spaces application to visualize all of the anchors that were created in your map.

If you are using Magic Leap's AR Cloud. Anchors will be shared between devices automatically. Meaning that no additional networking is required to have the anchors appear across all of the connected devices.

**Spatial Anchor Feature Overview**

The Spatial Anchor API is a powerful tool that allows you to anchor virtual objects in the physical world across multiple sessions and devices. This is extremely useful for augmented reality (AR) applications where persistency and consistency in the virtual-physical alignment are crucial.

**1. Two Modes of Operation**

The Spatial Anchor API supports two modes:

   * **On-Device Mode**: In this mode, the anchors are stored locally on the device. They are available for multiple sessions as long as they are accessed from the same space they were created in.

   * **AR Cloud Mode**: In this mode, anchors are stored in the cloud. They can be accessed from different devices in multiple sessions, provided the devices are localized to the same space where the anchors were published.

**2. Spatial Anchor Properties**

A spatial anchor has various properties including a unique ID, an expiration timestamp suggesting how long the anchor should be considered valid, and a space ID indicating the space to which the anchor belongs.

**3. Anchor Management**

Through the API, you can:

   * **Create New Anchors**: This allows you to define a new anchor at a specific location.

   * **Publish Anchors**: Once an anchor is created, it can be published for persistence. Depending on the mode of operation, the anchor will be stored either locally on the device or in the cloud.

   * **Update Anchors**: The properties of an existing anchor, such as its expiration timestamp, can be updated as needed.

   * **Delete Anchors**: If an anchor is no longer needed, it can be removed from persistent storage.

## Anchor Queries

The API also allows you to query for existing anchors. This can be based on various criteria like the center point of a spatial query, a radius for the spatial query, a list of anchor IDs to look for, or the maximum number of expected results. The results can also be sorted by their distance from the center point of the query.

## Error and Status Reporting**

The API includes status and error codes to guide developers in managing spatial anchors effectively. These codes provide information about the current state of the device (like whether it's localized or not) and potential issues that might occur (like exceeding the maximum number of anchors for a space).

Remember, effective use of spatial anchors can significantly improve the user experience in AR applications by providing a consistent and persistent alignment between the virtual and physical worlds.

## Q&A

- Q: Is there a way to force the mapping mode on an Magic Leap 2 inside of my application?
  - A: The mapping mode can only be queried via the `MLSpatialAnchorLocalizationInfo` structure. Right now the user needs to launch the Spaces application to localize into a space.
- Q: Is it possible to be notified that a certain set of anchors has changed (Created/Removed/Modified)?
  - A: The current API design does not provide any callback/event based updates for CRUD operations. Use the `MLSpatialAnchorQueryGetResult` API to query when a change was made.
- Q: When submitting a new anchor to a map, what is the default value for the expiration timestamp and what happens if I don't provide any expiration timestamp?
  - A: The default value is 0. If the value is 0, then the system will keep the anchor there indefinitely.
- Q: How do on-device maps get updated?
  - A: Maps do not get updated automatically, think of mapping as starting from a blank canvas each time. If you are unhappy with that map you effectively “remap” the space. You can have as many (5) maps of the same space as you want -- which is why the tool is important, you can choose which map is most relevant.
- Q: Can maps get merged together?
  - A: Map merge is possible when using AR Cloud. For On Device Mapping and On Device Localization there is no map-merge.
- Q: Is there an API to know in which map we re-localized?
  - A: The use has to always explicitly choose the map (using the system tool) into which the device should localize. From then on, the device will only try to localize into that map. If the devices loses tracking then it’ll attempt to re-localize into the same map that was selected in the system. It won’t try to localize into any other map in that space. In the event that a user localizes into a new space while your app is running, you can query the localization info and use `MLSpatialAnchorLocalizationInfo.space_name`  and `MLSpatialAnchorLocalizationInfo`.space_id to identify which map into which the device is localized.
- Q: Is there an API to check in which map my anchor was created?
  - A: You can use `MLSpatialAnchor.space_id` to determine the map the anchor was created in.
- Q: Is it possible to re-localize to multiple maps at the same time?
  - A: No because we only localize to the space you choose.
- Q: Can the map tool be part of a start-up procedure?
  - A: Your application is able to launch the map tool using [Android Intents](/docs/guides/features/android-intents-overview.md).
