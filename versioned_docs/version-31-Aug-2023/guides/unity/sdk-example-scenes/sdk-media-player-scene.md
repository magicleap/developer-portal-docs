---
id: sdk-media-player-scene
title: Media Player
description: An overview of the media player demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 15
date: 3/21/2022
keywords: [Unity, Examples, Samples, XR Interaction Toolkit, Media, Player]
tags: [Unity, Examples, Samples, XR Interaction Toolkit, Media, Player]
---


## Overview

This example demonstrates and prescribes preferred methods for using the Media Player API to render a standard monoscopic video as well as side-by-side or over-under stereoscopic videos. The standard video will be streamed from an Internet source and the two stereoscopic videos will play and loop automatically. Only one video will play at a time, user can cycle through the different media with the controller's bumper button.

:::note
For instructions on installing the SDK Examples Project and building this scene, follow the [**Examples Project Install Guide**](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md).
:::

### Notes

- In order for stereo rendering to function the shader used as the video render material must support the "Video Stereo Mode" property. An example of this functionality is provided in the "Magic Leap/Stereo Video Render" shader.
- The included stereo video examples of an orbiting rocket have no audio.
- If you use a DRM protected video, you must supply the corresponding license server for it.
- If you use a DRM-free video, the license server must be left blank.
- For online media, enter the URL of the video.
- For local media, the video should be placed inside a StreamingAssets folder and the URL should be relative to StreamingAssets
See `MediaPlayerExample.cs` for more information.

## Requirements

Mandatory privileges required by this feature:

- ControllerPose
- Internet

Privileges required by this example:

- Internet Connection

