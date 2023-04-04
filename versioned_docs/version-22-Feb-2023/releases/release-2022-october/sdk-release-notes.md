---
title: 1.0.0 - SDK Release Notes
sidebar_position: 2
date: 10/03/2022
---

# 1.0.0 SDK Release Notes

This document contains the Magic Leap SDK release notes including the notes for the core SDK integration.

## General notes

*   All the headers distributed with via Magic Leap Hub are now officially supported.
*   Update build system to use CMake 3.21.1 and ANDROID\_HOME environment variable.
*   Build system does not require setting ANDROID\_NDK\_ROOT environment variable anymore.
*   Sample apps updated to reflect the changes in the APIs and build system.
*   Additional error codes for MLPlanesQueryGetResultsWithBoundaries(): MLResult\_Timeout and MLResult\_UnspecifiedFailure.
*   New API to stringify error codes MLGlobalGetResultString().
*   Removed previously deprecated MLCameraGetIntrinsicCalibrationParameters() API.
*   Removed support for MLControllerMode\_Imu3Dof and MLControllerMode\_Em6Dof modes in ml\_controller.h.
*   New error code for perception APIs: MLResult\_PerceptionSystemNotStarted.
*   Audio output sample app: Enable spatial audio with controller tracking.
*   Sample apps updated to reflect the changes in the APIs and build system.
*   Spatial Anchor Sample app: Introduced indefinite ttl for spatial anchors.
*   OpenXR samples: Create Depth Chain using XrCreateSwapChainImage.
*   OpenXR samples: Simple Example now uses intent information to run in OpenGLES or Vulkan mode.
*   Various documentation updates.

## Bug fixes

* Spatial Anchor Sample app: Clear old nodes when pausing.
* Hand tracking sample app: Fixes to support backward compatibility.
* OpenXR samples: Decreased build path length to improve building on Windows.
* OpenXR samples: Fixed Vulkan validation warnings.
