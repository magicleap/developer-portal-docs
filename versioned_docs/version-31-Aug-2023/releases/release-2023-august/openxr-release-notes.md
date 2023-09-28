---
title: 1.4.0-dev1 - OpenXR Release Notes
sidebar_position: 7
date: 08/30/2022
---

## Release notes

- Experimental support for XR_ML_user_calibration.
- Experimental support for XR_EXT_hand_interaction. Please note the following regarding current implementation:
- Currently certain poses are mutually exclusive. This behavior will be modified in the subsequent releases;
- Changes in hand posture can cause noticeable shifts in the position of the pose;
- Certain hand orientations can cause errors in the position of resulting pose and reported values.

## Bug fixes / Improvements

- Fixed projection layer rendering artifact when using a pose offset against space.
- Eye Gaze pose updated to match OpenXR spec more accurately.
- Vulkan validation layer compliance improvements.
- Improved prediction / history time window of xrLocateSpace.

## Known issues

- Currently running the OpenXR samples using the Magic Leap Application simulator is not supported.
- Long file names may cause trouble when building OpenXR samples on Windows. Please install the OpenXR samples in a directory with the shortest path possible.
- Up to one XrCompositionLayerProjection is supported.
- Up to 16 XrCompositionLayerQuads are supported.
- Maximum of 16 composition layers at one time. Each layer imposes a performance penalty, if you are seeing performance issues consider refraining from using more than one layer.
