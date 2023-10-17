---
title: 1.4.0-dev2 - OpenXR Release Notes
sidebar_position: 7
date: 10/06/2023
---

## Bug fixes / Improvements

- Dynamic Interaction Profile Rebinding: If the application binds two interaction profiles to an action and one of those is the controller, the runtime will automatically switch off the controller profile if the controller is not in the selected hand or powered off.
- Add Palm Pose to all known interaction profiles.
- When calling `xrEndFrame` with no composition layers the screen now is black.

## Known issues

-  Experimental support for `XR_ML_user_calibration`.
- Experimental support for `XR_EXT_hand_interaction`.
- Currently running the OpenXR samples using the Magic Leap Application simulator is not supported.
- Long file names may cause trouble when building OpenXR samples on Windows. Please install the OpenXR samples in a directory with the shortest path possible.
- Up to one `XrCompositionLayerProjection` is supported.
- Up to 16 `XrCompositionLayerQuads` are supported.
- Maximum of 16 composition layers at one time. Each layer imposes a performance penalty, if you are seeing performance issues consider refraining from using more than one layer.