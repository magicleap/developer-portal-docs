---
id: sdk-release-notes
title: 0.53.0 - SDK Release Notes
sidebar_position: 2
date: 07/13/2022
---

# 0.53.0 SDK Release Notes

This document contains the Lumin SDK release notes including the notes for the core SDK integration.

This software is an Early Access Product.

## Features

- SDK package includes a comprehensive set of headers files, at this time only the following headers have been cleared for ML2:

- `ml_api.h`
- `ml_graphics.h`
  - Added MLGraphicsFlags_Headlock flag to enable headlocked applications.
- `ml_perception.h`
- `ml_head_tracking.h`
- `ml_input.h`
    - * New set of APIs for controller haptics.
- `ml_controller.h`
- `ml_camera_v2.h`
- `ml_native_surface.h`
- `ml_media_codec.h`
- `ml_media_player.h`
- `ml_media_muxer.h`
- `ml_media_recorder.h`
- `ml_camera_metadata_v2.h`
- `ml_eye_tracking.h`
- `ml_gaze_recognition.h`
- `ml_marker_tracking.h`
- `ml_spatial_anchor.h`
- `ml_snapshot.h`
- `ml_planes.h`
  - com.magicleap.permission.WORLD\_RECONSTRUCTION permission was renamed to com.magicleap.permission.SPATIAL\_MAPPING and protection level was updated from normal to dangerous.
- `ml_cv_camera.h`
- `ml_webview.h`
  - on\_certificate\_error callback change to return a bool.
- `ml_voice.h`
- `ml_hand_tracking.h`
- `ml_time.h`
- `ml_meshing2.h`
  - MLMeshingDestroyClient() interface is updated to take handle (was handle pointer).
  - com.magicleap.permission.WORLD\_RECONSTRUCTION permission was renamed to com.magicleap.permission.SPATIAL\_MAPPING and protection level was updated from normal to dangerous.
- `ml_eye_calibration.h`
  - New APIs to query the eye calibration state.
  - Known issue: eye calibration state may report MLEyeCalibrationStatus\_Fine even when the calibration state is MLEyeCalibrationStatus\_Coarse.
- `ml_headset_fit.h`
  - New APIs to query the headset fit state.
- `ml_gesture_classification.h`
  - New APIs identify specific hand configurations and interaction points.
  
###  Other Notes

- com.magicleap.permission.WORLD\_RECONSTRUCTION permission was renamed to com.magicleap.permission.SPATIAL\_MAPPING and protection level was updated from normal to dangerous.
- Support for headlocked applications.
- New APIs for eye calibration and headset fit.
- New Gesture classification APIs.
- New APIs for controller haptics.
- New meshing sample application.
- Improvements for dangerous permission management in application framework and sample apps.

### Known Issues

- MLInputDestroy() clears callbacks set for other input handles. This impacts Meshing and Planes sample apps where the bumper controller button does not work as described in the readme.

