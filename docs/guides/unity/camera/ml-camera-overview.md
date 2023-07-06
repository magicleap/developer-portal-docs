---
title: MLCamera Overview
sidebar_position: 0
date: 10/09/2022
tags: [Unity, Overview, Camera]
keywords: [Unity, Overview, Camera]
---

The Magic Leap 2 `MLCamera` API allows developers to capture real and virtual content inside their applications.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

## Logical Cameras

Magic Leap 2 allows developers to access two Logical Cameras from the same physical camera. The camera streams are accessed as devices in the Unity API and have the following identifiers:

- `MLCamera.Identifier.Main` - provides access to compressed video and still images. This device allows you to capture virtual, real-world, mixed reality content and is the performed choice if you are not performing computer vision tasks on the output or if it is being used for streaming, broadcasting, or images.
  
- `MLCamera.Identifier.CV` - best used for Computer vision scenarios, uncompressed, raw frames.

If you use this device to do CV in you application, you will be able to use the record/stream gameplay using the Capture Service, but you will not be able to perform Image or marker tracking using the SDK.

:::caution
This features requires the `CAMERA` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

## Capture Output

| Format | Camera | Mode | Capture Type |
|---|---|---|---|
| YUV | **Main** | Real | Preview/Video/Image |
| YUV | **CV** | Real | Video/Image |
| RGBA | **Main** | MR/Virtual | Video/Image |
| RGBA | **CV** | Real | Video |
| JPEG | **Main** | Real/MR/Virtual | Image |


- `MLCameraCaptureType_Image` - Capture an Image
- `MLCameraCaptureType_Video` - Capture Video
- `MLCameraCaptureType_Preview` - Capture a video and and access the raw buffer of the frames

## Guides

<DocCardList items={useCurrentSidebarCategory().items}/>
