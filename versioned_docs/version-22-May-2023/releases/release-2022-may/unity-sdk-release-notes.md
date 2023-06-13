---
id: unity-sdk-release-notes
title: 0.52.1 - Unity SDK Release Notes
sidebar_position: 3
date: 05/10/2022
---

## SDK Delivered via The Lab 2.0

- Unity Example Project
- Magic Leap 2 Unity SDK Package

### Delivered via secure email share

- Unity Installer

## Features

- Exposed gaze recognition API.
- MediaPlayer support has been re-enabled in the SDK package. Only basic playback has been tested yet, support for DRM, subtitles, stereo videos etc needs to be verified.
- Added a new function to `MLMedia.Player.Track.DRM` class to generate a signature using the provided algorithm and message data.
- Added support for TTML subtitles to `MLMedia.Player`.
- Controller touchpad gestures have been added to the MagicLeAPInput action map and also exposed via the XR Gesture Subsystem extensions.
- `MLMediaFormat` API integration has been updated to no longer be a singleton but instead be a regular C# class with different factory methods like `CreateVideo()`, `CreateAudio()`, `CreateSubtitle()` and `CreateEmpty()`. The format key specific functions have been removed in favor of general key-value getters and setter with overloads for each possible data type. All possible media format keys have been exposed in the `MLMediaFormatKey` class.
- ArucoTracker & BarcodeScanner APIs have been combined into a single `MLMarkerTracker` API. This API is currently only in preview mode as, at the time of cutting EC6, there were platform issues preventing end-to-end testing of this API.
- Numerous rendering performance improvements.
- Hand tracking example has been updated to use the gesture subsystem.
- All examples that used `MLInput` for controller interaction have been updated to use the new Input System.
- Eye tracking example has been added which showcases how to use this feature via the new InputSystem, the XR Input Subsystem and the Magic Leap Extensions for the XR Input Subsystem.
- Zero Iteration now works without needing to import the SDK libraries into the Unity project.
- Exposed APIs for `MLCamera` (*includes MRCamera*), `MLCameraMetadata` and `MLMediaRecorder`. `CameraCapture` & `MediaRecorder` scenes have been added in the examples project to showcase the use the new APIs.
- Exposed media events like *play*, *pause*, *stop*, *next* / *prev* track in the `MLAudioOutput` API.
- Namespace for all scripts in the examples project has been changed to `MagicLeap.Examples`.
- `MLMeshing` is now functional under Zero Iteration but is still not enabled on platform.
- Web View example has been added to showcase how to use this feature.
- Voice Intents example has been added to showcase how to use this feature
- Permission enforcement has been enabled (removed always approve workaround)
- `MLTime` API added and existing APIs using `MLTime` have been updated. No example scene for `MLTime` required.
- Added ability to stream any `AudioSource`, and not just the Microphone, to connected peers in `MLWebRTC`. The WebRTC sample scene in the MagicLeapUnityExamples project has been updated to showcase this feature.

## Bug Fixes

- Fixed menu button binding in the `MagicLeAPInput` action map.
- Fixed eye calibration status not being reported correctly.
- Fixed API reference docs.
- Fixed broken references to virtual keyboard in the examples project which prevented Build & Run.
- Fixed exception thrown when attempting to use any head tracking extension functions.
- Fixed settings issue in `MLMeshing` subsystem.
- Fixes scene changes in MagicLeapUnityExamples project for scenes using AR Session objects (Planes, anything using XR Rig Prefab)
- Fixed error where gesture events were dispatched for touchpad, even when the user is not pressing it, after the first press.

## Deprecations & Removals

- `MLHandTracking`, `MLHeadTracking`, `MLMeshing`, `MLPlanes`, `MLInput` APIs have been removed in favor of their respective XR subsystems. MagicLeap specific functionality has been exposed via the extension classes in the `UnityEngine.XR.MagicLeap.Extensions` namespace.
- `MCA` / `MLMA` / `MLMCA` support has been removed from `MLInput` along with removal of touchpad gestures which were specific to it (`LongHold`, `Scroll`, `Pinch`)
- `MLAppIdentifier`, `MLDispatch`, `MLIdentity`, `MLIMU`, `MLLocale`, `MLLocation`, `MLNetworking`, `MLSecureStorage`, `MLTokenAgent` APIs have been removed in favor of their existing Android counterparts.
- `MLAppConnect`, `MLContacts`, `MLConnections`, `MLMediaPlayer Sharing`, `MLController LED`, `MLMusicService` APIs have been removed and will not be supported on the ML2.
- Eye pupil size has been removed from the `MLEyeTracking` API.

## Known Issues

- Image tracking, Anchors (PCFs) & World Raycast support has been temporarily disabled in this release. None of these are currently supported on the device. Once re-enabled, developers can use these on ZI.
- Media player currently only supports playback for web URLs. Support for files packaged in the apk will be added later.
- Eye blinking state is not reported either by the eye tracking API or the gaze recognition API (awaiting platform support).
- WebView platform callbacks are known to trigger twice, `WebViewExample.cs` has TODO: workaround to avoid registering keyboard callbacks twice as a result.
- WebView platform functions `MLWebViewGetScrollSize` and `MLWebViewGetScrollOffset` always return values of (2, 2) regardless of actual webpage size or scroll location
- Under Relish builds `EventSystem.current.IsPointerOverGameObject` does not properly report if the controller pointer is pointing at a UI (This causes Web view screen to react to controller trigger pulls when trying to interact with the virtual keyboard if they are overlapping) - Already has a fix on Pure Android editor.

