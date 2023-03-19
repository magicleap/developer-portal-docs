---
title: 0.53.3 - SDK Release Notes
sidebar_position: 2
date: 09/12/2022
---

# 0.53.3 SDK Release Notes

This document contains the Magic Leap SDK release notes including the notes for the core SDK integration.

## Features

SDK package includes a comprehensive set of headers files, at this time only the following headers have been cleared for ML2:

* `ml_audio.h`
  * Added `MLAudioSetSoundBypassesMasterVolume()` and `MLAudioGetSoundBypassesMasterVolume()` APIs. This API will only work on select product SKUs.
  * Removed support for `MLAudioMicCaptureType::MLAudioMicCaptureType_FrontMics` and `MLAudioMicCaptureType::MLAudioMicCaptureType_SideMics.`
* `ml_api.h`
* `ml_graphics.h`
  * Removed all marked deprecated (i.e. `MLGraphicsSetFrameTimingHint()` API and `MLGraphicsFrameParamsEx::stabilization_depth` parameter).
* `ml_perception.h`
* `ml_head_tracking.h`
  * No permissions required to obtain head pose data.
* `ml_input.h`
* `ml_controller.h`
  * No permissions required to obtain controller pose data.
* `ml_camera_v2.h`
  * Added APIs to support Auto Focus Regions.
  * Added const qualifier for Auto Focus setter APIs.
* `ml_native_surface.h`
* `ml_media_codec.h`
  * Changed `buffer_handle` to `buffer_index`.
* `ml_media_player.h`
* `ml_media_muxer.h`
* `ml_media_recorder.h`
* `ml_camera_metadata_v2.h`
* `ml_eye_tracking.h`
* `ml_gaze_recognition.h`
* `ml_marker_tracking.h`
  * New setting to support accurate marker tracking for Aruco and AprilTag markers.
  * Three World Cameras are now used to track Aruco and AprilTag markers which increases detection field of view.
* `ml_spatial_anchor.h`
  * Added `MLSpatialAnchorLocalizationInfo::target_space_origin` field.
  * Default expiration behavior (i.e. `MLSpatialAnchorCreateInfo.expiration_timestamp_s == 0`) for anchors changed from “1 year” to “Never expire”.
* `ml_snapshot.h`
* `ml_planes.h`
* `ml_cv_camera.h`
* `ml_webview.h`
  * Simplified WebView Mouse API.
* `ml_voice.h`
* `ml_hand_tracking.h`
* `ml_time.h`
* `ml_meshing2.h`
* `ml_eye_calibration.h`
* `ml_headset_fit.h`
* `ml_gesture_classification.h`

## Other Notes

* New OpenXR Samples package is available in the Magic Leap Hub (aka The Lab 2.0).
* Removed permission requirement to obtain head and controller pose data.
* Build scripts updates, setting`ANDROID_NDK_ROOT` environment variable is not required.
* Update to NDK 25.0.8775105.
* Sample apps updated to reflect the changes in the APIs and build system.

