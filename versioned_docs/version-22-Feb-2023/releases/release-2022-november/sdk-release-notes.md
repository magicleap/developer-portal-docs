---
title: 1.1.0-dev1 - SDK Release Notes
sidebar_position: 2
date: 11/09/2022
---

This document contains the Magic Leap SDK release notes including the notes for the core SDK integration.

## General notes

* ML Hand Tracking API was extended to support additional 4 key points. The API now supports 28 key points total.
* ML Graphics API now contains additional blending modes MLGraphicsEnvironmentBlendMode_Additive and MLGraphicsEnvironmentBlendMode_Alpha_Blend. Developers shall use MLGraphicsEnvironmentBlendMode_Alpha_Blend blending mode if they want to utilize segmented dimming in their applications.
* ML WebView API was extended to support asynchronous creation.
* ML Audio API was extended to support bypass of master volume for certain SKUs.
* ML Camera API is extended to support per frame intrinsics functionality for MLCameraConnectFlag_MR and MLCameraConnectFlag_VirtualOnly capture.
* ML Marker Tracking API was extended to support predefined tracking profiles. Developers can still create their own custom tracking profile if required.
* ML Controller API is now supporting raw controller pose in addition to filtered pose.
* ML Input API can now be used to determine which hand is holding the controller. 
* C API Application Framework was extended to provide information about the controller battery.
* C API Sample apps were updated to accommodate for the API changes.

## Bug fixes

* Fixed Marker Tracking Service not releasing camera when a client gets disconnected.

## Breaking changes and deprecations

* Developers need to update their apps to set MLGraphicsEnvironmentBlendMode_Alpha_Blend to enable segmented dimmer.
* Please pay attention to the headers below as some of the APIs were deprecated.
  * ml_input.h
  * ml_controller.h

## Known issues

* Global dimmer resets to default global dimmer value set in system settings if no content is rendered in the field of view.
