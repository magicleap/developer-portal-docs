---
id: unity-sdk-release-notes
title: 0.51.1 - Unity SDK Release Notes
sidebar_position: 3
date: 3/7/2022
---

# 0.51.1 Magic Leap Unity SDK Release Notes
## Unity® Package 0.51.1
- This software is an Early Access Product.

## Features
- Exposed marker tracking API for both Aruco and QR codes.
- Exposed gaze recognition API.
- MediaPlayer support has been re-enabled in the SDK package.
- Added a new function to `MLMedia.Player.Track.DRM` class to generate a signature using the provided algorithm and message data.
- Added support for TTML subtitles to `MLMedia.Player`.
- Controller touchpad gestures have been added to the MagicLeapInput action map and also exposed via the XR Gesture Subsystem extensions.
- `MLMediaFormat` API integration has been updated to no longer be a singleton but instead be a regular C# class with different factory methods like `CreateVideo()`, `CreateAudio()`, `CreateSubtitle()` and `CreateEmpty()`. The format key specific functions have been removed in favor of general key-value getters and setter with overloads for each possible data type. All possible media format keys have been exposed in the `MLMediaFormatKey` class.
- ArucoTracker and BarcodeScanner APIs have been combined into a single `MLMarkerTracker` API. This API is currently only in preview mode as, at the time of cutting EC6, there were platform issues preventing end-to-end testing of this API.
- Numerous rendering performance improvements.
- Hand tracking example has been updated to use the Gesture Subsystem.
- All examples that used `MLInput` for controller interaction have been updated to use the new Input System.
- Eye tracking example has been added which showcases how to use this feature via the new InputSystem, the XR Input Subsystem and the Magic Leap - Extensions for the XR Input Subsystem.
- Zero Iteration now works without needing to import the SDK libraries into the Unity project.
- Exposed APIs for `MLCamera` (includes `MRCamera`), `MLCameraMetadata` and `MLMediaRecorder`. CameraCapture & MediaRecorder scenes have been added in the examples project to showcase the use the new apis.
- Exposed media events like play, pause, stop, next / prev track in the `MLAudioOutput` API.
- Namespace for all scripts in the examples project has been changed to `MagicLeap.Examples`.

## Known Issues
- Application crashes during camera capture in 15 FPS.
- Eye pupil size is always reported as 4.0 (awaiting platform support).

