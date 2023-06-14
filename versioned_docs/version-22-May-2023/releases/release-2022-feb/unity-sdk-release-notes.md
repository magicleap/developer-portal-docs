---
id: unity-sdk-release-notes
title: 0.51.0 - Unity SDK Release Notes
sidebar_position: 3
date: 12/21/2021
---

# 0.51.0 Magic Leap Unity SDK Release Notes

## SDK Delivered via The Lab 2.0

- Unity Example Project
- Magic Leap 2 Unity SDK Package

## Delivered via secure email share

- Unity Installer

## Features  

- Exposed gaze recognition API.
- MediaPlayer support has been re-enabled in the SDK package. Only basic playback has been tested yet, support for DRM, subtitles, stereo videos etc needs to be verified.
- Added a new function to `MLMedia.Player.Track.DRM` class to generate a signature using the provided algorithm and message data.
- Added support for TTML subtitles to `MLMedia.Player`.
- Controller touchpad gestures have been added to the `MagicLeapInput` action map and also exposed via the XR Gesture Subsystem extensions.
- `MLMediaFormat` API integration has been updated to no longer be a singleton but instead be a regular C# class with different factory methods like `CreateVideo()`, `CreateAudio()`, `CreateSubtitle()` and `CreateEmpty()`. The format key specific functions have been removed in favor of general key-value getters and setter with overloads for each possible data type. All possible media format keys have been exposed in the `MLMediaFormatKey` class.
- ArucoTracker & BarcodeScanner APIs have been combined into a single `MLMarkerTracker` API.
  - *This API is currently only in preview*.
- Numerous rendering performance improvements.
- Hand tracking example has been updated to use the gesture subsystem.
- All examples that used MLInput for controller interaction have been updated to use the new Input System.
- Eye tracking example has been added which showcases how to use this feature via the new InputSystem, the XR Input Subsystem and the Magic Leap Extensions for the XR Input Subsystem.
- Zero Iteration now works without needing to import the SDK libraries into the Unity project.
- Exposed APIs for `MLCamera`(includes MRCamera), `MLCameraMetadata` and `MLMediaRecorder`. `CameraCapture` & `MediaRecorder` scenes have been added in the examples project to showcase the use the new APIs.
- Exposed media events like play, pause, stop, next / prev track in the `MLAudioOutput` API.
- Namespace for all scripts in the examples project has been changed to `MagicLeap.Examples`.

## Bugfixes  

- Fixed menu button binding in the `MagicLeapInput` action map.
- Fixed eye calibration status not being reported correctly.
- Fixed API reference docs.
- Fixed broken references to virtual keyboard in the examples project which prevented Build & Run.
- Fixed exception thrown when attempting to use any head tracking extension functions.

## Deprecations / Removals  

- `MLHandTrackingm` `MLHeadTracking`, `MLMeshing`, `MLPlanes`, `MLInput` APIs have been removed in favor of their respective XR subsystems. MagicLeap specific functionality has been exposed via the extension classes in the `UnityEngine.XR.MagicLeap.Extensions` namespace.
- MCA / MLMA / MLMCA support has been removed from `MLInput` along with removal of touchpad gestures which were specific to it (LongHold, Scroll, Pinch)
- `MLAppIdentifier`, `MLDispatch`, `MLIdentity`,`MLIMU`, `MLLocale`, `MLLocation`, `MLNetworking`, `MLSecureStorage`, `MLTokenAgent` APIs have been removed in favor of their existing Android counterparts.
- `MLAppConnect`, `MLContacts`, `MLConnections`, `MLMediaPlayer Sharing`, `MLController LED`, `MLMusicService` APIs have been removed and will not be supported on the ML2.

## Known Issues / Limitations  

- Image tracking, Anchors (PCFs) & World Raycast support has been temporarily disabled in this release. None of these are currently supported on the device. Once re-enabled, developers can use these on ZI.
- Media player currently only supports playback for web URLs. Support for files packaged in the APK will be added later.
- Eye blinking state is not reported either by the eye tracking API or the gaze recognition API (awaiting platform support).
- Eye pupil size is always reported as 4.0 (awaiting platform support).

