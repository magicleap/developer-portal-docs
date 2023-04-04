---
id: sdk-release-notes
title: 0.52.1 - SDK Release Notes
sidebar_position: 3
date: 05/10/2022
---


# 0.52.1 SDK Release Notes

This document contains the Lumin SDK release notes including the notes for the core SDK and Unity® integration.

This software is an Early Access Product.

## Features

* SDK package includes a comprehensive set of headers files, at this time only the following headers have been cleared for ML2:

* `ml_audio.h`
  * API updates for sound events, sound looping, spatial sound and acoustic scene
* `ml_graphics.h`
* `ml_perception.h`
* `ml\_head\_tracking.h`
* `ml_input.h`
* `ml_controller.h`
* `ml\_camera\_v2.h`
  * vcam_timestamp updated to be MLTime
* `ml\_native\_surface.h`
* `ml\_media\_codec.h`
* `ml\_media\_player.h`
* `ml\_media\_muxer.h`
* `ml\_media\_recorder.h`
* `ml\_camera\_metadata_v2.h`
  * new APIs for anti-banding and sensor sensitivity
* `ml\_eye\_tracking.h`
  * MLEyeTrackingStateEx::timestamp updated to be MLTime
* `ml\_gaze\_recognition.h`
  * Removed Push, Pull and Winks behaviors
* `ml\_marker\_tracking.h`
* `ml\_spatial\_anchor.h`
* `ml_planes.h`
* `ml\_cv\_camera.h`
  * `MLCVCameraGetFramePose(): camera_timestamp` updated to be `MLTime`
* `ml_webview.h`
* `ml_voice.h`
* `ml\_hand\_tracking.h`
  * support for hand key points tracking only
* `ml_time.h`
* Other Notes:
  * Marker Tracking APIs require normal permission (was dangerous)
  * Apple M1 chip support for Android Studio Addon
  * API level enforcement for ML APIs via entry in app manifest:
  * `<uses-feature android:name="com.magicleap.api_level" android:version="20">;`
* Manifest permissions updates for all sample apps
* Bug Fixes:
  * Fixed Anchor Query API with bounded radius to return correct results
  * Fixed resolution info for mixed reality image capture

