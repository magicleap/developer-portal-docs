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
Magic Leap 1 used the term PCF (Persistent Coordinate Frame) to describe our previous system of anchoring virtual content. Differences between PCFs and Spatial Anchors can be found on the [Spatial Anchors Overview Page](/versioned_docs/version-1.1.0-dev2/guides/unity/perception/anchors/spatial-anchors-overview.md)
:::

Spatial Anchors enable developers to create persistent and multi-user content. These anchors can be used to create shared experiences, such as multiplayer gaming, collaborative work, or interactive exhibits. Developers can create anchors inside their applications using Magic Leap's Spatial Anchors API. Once created, you can use the Spaces application to visualize all of the anchors that were created in your map.

If you are using Magic Leap's AR Cloud. Anchors will be shared between devices automatically. Meaning that no additional networking is required to have the anchors appear across all of the connected devices.

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
  - A: Your application is able to launch the map tool using [Android Intents](docs/guides/features/android-intents-overview.md).
