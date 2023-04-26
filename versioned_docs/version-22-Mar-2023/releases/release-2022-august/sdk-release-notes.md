---
id: sdk-release-notes
title: 0.53.2 - SDK Release Notes
sidebar_position: 2
date: 08/09/2022
---

# 0.53.2 SDK Release Notes

This document contains the Lumin SDK release notes including the notes for the core SDK integration.

This software is an Early Access Product.

## Features

SDK package includes a comprehensive set of headers files, at this time the following headers have been cleared for ML2:

- `ml_audio.h`
- `ml_api.h`
- `ml_graphics.h`
- `ml_perception.h`
- `ml_head_tracking.h`
- `ml_input.h`
- `ml_controller.h`
- `ml_camera_v2.h`
- `ml_native_surface.h`
- `ml_media_codec.h`
  - Added APIs to create and release `MLMediaCodecCryptoInfo`.
- `ml_media_player.h`
- `ml_media_muxer.h`
- `ml_media_recorder.h`
- `ml_camera_metadata_v2.h`
  - Added support for camera auto focus.
  - Improved support for camera frame intrinsics. Intrinsics will be delivered each frame as a part of `MLCameraResultExtras`. This will be adjusted for the frame resolution that the camera stream is configured for. Note that `MLCameraGetIntrinsicCalibrationParameters` is marked as deprecated and will be removed in a future release.
  - Renamed `MLCameraCaptureStreamConfig.media_recorder_surface_handle` to `MLCameraCaptureStreamConfig.native_surface_handle`.
- `ml_eye_tracking.h`
- `ml_gaze_recognition.h`
- `ml_marker_tracking.h`
  - Added `MLMarkerTrackerSettings.MLMarkerTrackingResolutionHint`. This field along with the existing `MLMarkerTrackingFpsHint` can be used to configure the marker tracker system as needed.
- `ml_spatial_anchor.h`
- `ml_snapshot.h`
- `ml_planes.h`
- `ml_cv_camera.h`
- `ml_webview.h`
- `ml_voice.h`
- `ml_hand_tracking.h`
  - Added a timestamp for `MLHandTrackingHandState`. This provides the timestamp of the last measurement in nanoseconds.
- `ml_time.h`
- `ml_meshing2.h`
- `ml_eye_calibration.h`
- `ml_headset_fit.h`
- `ml_gesture_classification.h`

### Other Notes

- Improvements for dangerous permission management in application framework and sample apps.
- New auto focus sample application.

### Known Issues

- `ml_webview` api issues multiple errors on startup and while browsing, can lead to slowdown or crash of the

