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

## Spatial Anchors

### Modes of Operation

Spatial Anchor API supports two modes:

   * **On-Device Mode**: Anchors are stored locally on the device and are available for multiple sessions within the same space of creation.
   * **AR Cloud Mode**: Anchors are stored in the cloud and can be accessed from different devices in multiple sessions, provided the devices are localized to the same space where the anchors were published.

### Properties of Spatial Anchors

A Spatial Anchors help maintain the position and orientation of digital content in the physical world over time. Each Spatial anchor hasa unique ID, an expiration timestamp indicating its validity period, and a space ID signifying the space to which the anchor belongs.

#### Anchor Expiration Timestamp

When a new anchor is submitted to a map, its default expiration timestamp is 0. If left at this value, the system will keep the anchor indefinitely.

## Managing Spatial Anchors

Through the API, you can create, publish, update, and delete anchors based on the requirements of your application. You can also query for existing anchors using criteria such as the center point of a spatial query, a radius for the spatial query, a list of anchor IDs.

## Spaces

Localization is a process by which Magic Leap 2 device identifies its position in a space. Before localizing, Magic Leap 2 requires users to map the location and save it as a "Space" using the Spaces application. When Magic Leap 2 successfully localizes into a Space, it will attempt to localize into it anytime a new session starts, even across reboots. This means that if you consistently use your device at the same location, your device will recognize and localize into the Space automatically, without manual selection.

### Mapping

Mapping is a necessary process for device recognition and interaction with the surrounding space. Before localizing into a space you need to map the location and save it locally or to ARCloud. Currently, mapping can only be performed inside the Spaces application.

### Updating Spaces

Unlike localization, Spaces don't update automatically. If you want to update a Space or add additional information, you will need perform the remapping step explicitly inside the Spaces application. This workflow insures that the device will be able to localize into your space efficiently.

:::caution Merging of maps is only possible when using the AR Cloud

Currently, on device maps do not support mergeing or updating existing maps. Instead, you will need to delete and remap the space.

:::

### Localize into a Specific Space

Developers can use the `MLSpace API` to localize into a specific space without leaving their application.

### Localization Updates

Localization data on the device is updated every 10 seconds to correct for drift. This ensures that Spatial Anchors remain accurately placed in your location, even when head pose is lost or interrupted.


## Additional Considerations

It's important to note that Magic Leap 2 doesn't support re-localizing to multiple maps simultaneously. The device only localizes into the space you've chosen.

If the user is not localized when launching your application, it's possible to send them to the Spaces application and start the mapping tool using [Magic Leap's System Intents](/docs/guides/features/android-intents-overview.md). This allows you to integrate the map tool as part of a start-up procedure for your application.
