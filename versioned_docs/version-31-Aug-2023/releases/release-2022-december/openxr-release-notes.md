---
title: 1.1.0-dev2 - OpenXR Release Notes
sidebar_position: 3
date: 12/07/2022
---

## General notes

- One XrCompositionLayerProjection is supported.
- Up to 16 XrCompositionLayerQuads are supported.
- A maximum of 16 composition layers at one time. Each layer imposes a performance penalty, if you are seeing performance issues consider refraining from using more than one layer.
- Added Global Dimmer Extension (addon_headers/XR_ML_global_dimmer.h).
- Added Frame End Info Extension ( addon_headers/XR_ML_frame_end_info.h).
- Added Compat Extension ( allows sharing of CFUID’s with OpenXR ).

## Bug fixes

- Fixed CTS failure for action spaces.

## Known issues

- Currently running the OpenXR samples using the Magic Leap Application simulator is not supported.
- Long file names may cause trouble when building OpenXR samples on Windows. Please install the OpenXR samples in a directory with the shortest path possible.
- addon_headers/XR_ML_compat.h defines a function “xrGetSessionStateML” which will be removed in the next release.

