---
title: 1.1.0-dev1 - OpenXR Release Notes
sidebar_position: 3
date: 11/09/2022
---

## General notes

* Controller will auto-detect the left vs right hand.
* Added support for XR_KHR_convert_timespec_time.
* One XrCompositionLayerProjection is supported.
* Up to 16 XrCompositionLayerQuads are supported.
* A maximum of 16 composition layers at one time. Each layer imposes a performance penalty, if you are seeing performance issues consider refraining from using more than one layer.
* Performance improvements.

## Bug fixes

* The dimmer is flipped in the “Y” direction when the OS dimmer is enabled and Vulkan is used as the graphics system.
* The blend mode is not honored when the OS segmented dimmer is enabled. It is always treated as XR_ENVIRONMENT_BLEND_MODE_ALPHA_BLEND.

## Known Issues

* Currently running the OpenXR samples using the Magic Leap Application simulator is not supported.
* Long file names may cause trouble when building OpenXR samples on Windows. Please install the OpenXR samples in a directory with the shortest path possible.
