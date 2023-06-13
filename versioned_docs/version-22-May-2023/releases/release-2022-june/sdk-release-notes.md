---
id: sdk-release-notes
title: 0.52.2 - SDK Release Notes
sidebar_position: 2
date: 06/07/2022
---

# 0.52.2 SDK Release Notes

This document contains the Lumin SDK release notes including the notes for the core SDK integration.

This software is an Early Access Product.

## Features

- SDK package includes a comprehensive set of headers files, at this time only the following headers have been cleared for ML2:

- `ml_api.h`
- `ml_audio.h`
  - Support for new return error code MLResult_PoseNotFound
- `ml_graphics.h`
  - New for global dimmer API - `MLGraphicsSetGlobalDimmer()`
  - `MLGraphicsCreateClientGL()` and `MLGraphicsCreateClientVk()` require `com.magicleap.permission.HEAD_POSE` normal permission
- `ml_perception.h`
- `ml_head_tracking.h`
- `ml_input.h`
- `ml_controller.h`
- `ml_camera_v2.h`
- `ml_native_surface.h`
- `ml_media_codec.h`
- `ml_media_player.h`
- `ml_media_muxer.h`
- `ml_media_recorder.h`
  - Support for new return error code `MLMediaResult_InvalidCodecParam`
- `ml_camera_metadata_v2.h`
- `ml_eye_tracking.h`
- `ml_gaze_recognition.h`
- `ml_marker_tracking.h`
- `ml_spatial_anchor.h`
- `ml_snapshot.h`
  - Removed support for error code `MLSnapshotResult_PoseNotFound`
  - Support for new return error code `MLResult_PoseNotFound`
- `ml_planes.h`
- `ml_cv_camera.h`
  - Support for new return error code `MLResult_PoseNotFound`
- `ml_webview.h`
- `ml_voice.h`
- `ml_hand_tracking.h`
  - Refactored to only expose key point tracking info, key pose and other data will be exposed via separate APIs in the later releases
- `ml_time.h`
- `ml_meshing2.h`
  - `MLMeshingCreateClient()` requires `com.magicleap.permission.WORLD_RECONSTRUCTION` normal permission
- Other Notes:
  - Meshing API support
  - All ML APIs permissions are now enforced, refer to the documentation in header files and developer portal for details on required permissions and protection level . All normal permissions require declaration in the app manifest (e.g. `com.magicleap.permission.HEAD_POSE`) and dangerous permissions (e.g. `android.permission.CAMERA`) additionally require user’s consent. Please check sample apps regarding implementation details for normal and dangerous permissions.
  - Error code `MLResult_PrivilegeDenied` is renamed to `MLResult_PermissionDenied`
  - Dimmer sample app exposed to showcase use of the global dimmer API
  - Improvements to Webview Sample app
  - New Voice Intents Sample app

