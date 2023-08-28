---
title: 1.2.0-dev2 - OpenXR Release Notes
sidebar_position: 5
date: 02/22/2022
---

## General notes

- Added support for vulkan_enable2.
- Restored native_surface compatibility with AOSP.
- Improved Vulkan validation layer.

## Known issues

- Currently running the OpenXR samples using the Magic Leap Application simulator is not supported.
- Long file names may cause trouble when building OpenXR samples on Windows. Please install the OpenXR samples in a directory with the shortest path possible.
- Up to one XrCompositionLayerProjection is supported.
- Up to 16 XrCompositionLayerQuads are supported.
- Maximum of 16 composition layers at one time. Each layer imposes a performance penalty, if you are seeing performance issues consider refraining from using more than one layer.
