---
id: marker-tracker-overview
title: Marker Tracker Overview
description: Learn how to detect Fiducial Markers ie. Aruco/QR Codes
sidebar_position: 0
date: 2/24/2022
tags: [UnityPerception, Marker, Tracking, ArUco, QR Codes,Fiducial]
keywords: [UnityPerception, Marker, Tracking, ArUco, QR Codes,Fiducial]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

The Magic Leap allows you to detect two-dimensional icons from a marker dataset and then continuously track the targets' locations and orientations as you or the markers move through the environment. You can also place and anchor digital content based on the presence and dimensions of a physical marker.

:::note
Magic Leap devices track fiducial markers, using a tracking system separate from the image tracking system. You can only have one type of active tracker at a time, however the Marker Tracker allows you to track multiple types of markers at once.
:::

:::info
The `MLBarcodeScanner` and `MLArucoTracker` APIs on the Magic Leap 1 have been unified into a single `MLMarkerTracker` API for Magic Leap 2.
:::

:::caution
This feature requires the `MARKER_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

## Supported Fiducial Markers

- QR
- Aruco
- EAN_13 (experimental)
- UPC_A (experimental)

:::caution

Due to the 4X4 and the 'Aruco Original' dictionaries suffering from frequent false detections, we discourage their use.

:::

## Troubleshooting and FAQ

- Make sure the target markers are well-lit, whether physically printed or digitally displayed, or else the camera may not detect the marker. At the same time, make sure there isn't too much light reflecting off the marker that may obscure its features.
- Print your markers in black and white. High contrast is important to detect the marker and poses.
- To aid detection, include a white border around your marker. The white border must be large enough to be clearly visible on the camera.

## Learn More

<DocCardList items={useCurrentSidebarCategory().items}/>

