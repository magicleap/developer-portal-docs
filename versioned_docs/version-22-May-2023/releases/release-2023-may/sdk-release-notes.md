---
title: 1.3.0-dev1 - SDK Release Notes
sidebar_position: 3
date: 05/22/2023
---

# Magic Leap SDK 1.3.0-dev1

## Release notes

- New MLPowerManager API.
- Updated System Notifications sample app to demonstrate how to use MLPowerManager APIs.
- Exposed new APIs to obtain and use predicted display time:
  - MLGraphics: MLGraphicsFrameInfo struct now contains a new predicted_display_time field;
  - MLPerception: new MLPerceptionGetPredictedSnapshot() API to obtain a snapshot for predicted display timestamp;
  - Application framework was updated to use predicted timestamps;
  - Controller sample app was updated to demonstrate advantages of predicted timestamp use. Use the controller bumper button to toggle between modes to see the difference;
  - api_level updated for all sample app manifests to be 27.
- MLWebView: deprecated MLWebViewGetScrollSize() and MLWebViewGetScrollOffset() APIs.
- MLGazeRecognition: MLGazeRecognitionStaticData now has two additional fields (eye_height_max, eye_width_max) to indicate maximum width and height values for eye_left and eye_right vectors.

## Known issues

- MLGazeRecognition API: Closing one eye causes the opposite eye-in-skull position to become zero.
- MLMarkerTracking API: Apriltag pose is upside down.
