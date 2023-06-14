---
title: 1.8.0 - Unity SDK Release Notes
sidebar_position: 3
date: 06/14/2023
---

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Magic Leap SDK Version 1.3.0-dev2
- Unity Version: 1.8.0

# Unity® Package 1.8.0

## Features

- Minimum ML API level updated to 28.

## Bug Fixes

- MLEyes: Updated leftEyeOpenAmount and rightEyeOpenAmount on UnityEngine.InputSystem.XR.Eyes to return values between 0.0 and 1.0.
- Added support for EyeHeightMax and EyeWidthMax in MLGazeRecognitionStaticData.
- MLSpace: Added a new API for importing and exporting spaces without the need for scanning the environment.
- MLDepthCamera: Added RawDepthImage to support raw camera stream with IR Projector ON.
- Added MLEyeCamera API.
- MLPowerManager: Added a new API to obtain current controller state and control controller state transitions.
- MLHeadTracking: Modified headpose lost notifications with new API for MLHeadTrackingStateEx..

## Deprecations & Removals

- MLHeadTracking: MLHeadTrackingState and related dependencies marked Obsolete.

## Known Issues

- MLWebRTC: When disconnecting from a session, the camera does not shut down cleanly if the NativeSurface buffer format was used, causing the application to hang for as much as 30 seconds.
