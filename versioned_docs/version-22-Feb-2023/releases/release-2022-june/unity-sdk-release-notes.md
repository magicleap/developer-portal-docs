---
id: unity-sdk-release-notes
title: 0.52.2 - Unity SDK Release Notes
sidebar_position: 3
date: 06/07/2022
---

## SDK Delivered via The Lab 2.0

- Unity Example Project
- Magic Leap 2 Unity SDK Package

### Delivered via secure email share

- Unity Installer

## Features

- Exposed gaze recognition API.
- Exposed WebView API multi-tab support.
- Exposed Meshing API.
- Exposed Global Dimmer API.
- Added support to stream any Unity AudioSource via WebRTC.
- MediaPlayer support has been re-enabled in the SDK package. Only basic playback has been tested yet, support for DRM, subtitles, stereo videos etc needs to be verified.
- Added a new function to `MLMedia.Player.Track.DRM` class to generate a signature using the provided algorithm and message data.
- Added support for TTML subtitles to `MLMedia.Player`.
- Controller touchpad gestures have been added to the MagicLeapInput action map and also exposed via the XR Gesture Subsystem extensions.
- `MLMediaFormat` api integration has been updated to no longer be a singleton but instead be a regular C# class with different factory methods like `CreateVideo()`, `CreateAudio()`, `CreateSubtitle()` and `CreateEmpty()`. The format key specific functions have been removed in favor of general key-value getters and setter with overloads for each possible data type. All possible media format keys have been exposed in the `MLMediaFormatKey` class.
- `ArucoTracker` & `BarcodeScanner` apis have been combined into a single `MLMarkerTracker` api.
- Numerous rendering performance improvements.
- Hand tracking example has been updated to use the gesture subsystem.
- All examples that used MLInput for controller interaction have been updated to use the new Input System.
- Eye tracking example has been added which showcases how to use this feature via the new `InputSystem`, the XR Input Subsystem and the Magic Leap Extensions for the XR Input Subsystem.
- Zero Iteration now works without needing to import the SDK libraries into the Unity project.
- Exposed apis for `MLCamera` (includes `MRCamera`), `MLCameraMetadata` and `MLMediaRecorder`. `CameraCapture` & `MediaRecorder` scenes have been added in the examples project to showcase the use the new apis.
- Exposed media events like play, pause, stop, next / prev track in the `MLAudioOutput` api.
- Namespace for all scripts in the examples project has been changed to MagicLeap.Examples.
- Update to Unity 2022.2 (Uses Android build target) Developers now deploy Android apps to ML2 by setting Target Devices to "Relish Devices Only" under Player Settings.
- Update XR Plugin dependency to v7.0.0-preview.1.
- Exposed `MLSegmentedDimmer` API, which provides basic functions to manipulate the Segmented Dimmer URP feature in scenes.
- Added permission checks within some API calls.
- Added permission checks to input subsystem.
- Hand tracking api has been updated to match what is offered by the platform i.e. static gesture detection has been removed and only hand keypoints are offered via this api now. To enable hand tracking, make sure to add the `com.magicleap.permission.HAND_TRACKING` permission to your project's AndroidManifest.xml and call "InputSubsystem.Extensions.MLHandTracking.StartTracking()" before using the feature.
- Eye tracking is protected under a dangerous level permission. To enable eye tracking, make sure to add the `com.magicleap.permission.EYE_TRACKING` permission to your project's AndroidManifest.xml, request the said permission at runtime, and then call "InputSubsystem.Extensions.MLEyes.StartTracking()" once the permission has been granted before using the feature. The eye tracking example in the MagicLeapExamples project has been updated to reflect this required workflow.
- Gaze recognition is protected under a dangerous level permission. To enable gaze recognition, make sure to add the `com.magicleap.permission.EYE_TRACKING` permission to your project's AndroidManifest.xml, and request the said permission at runtime. Make sure the permission has been granted before using the feature.
- MLCamera class now offers utility methods like `GetImageStreamCapabilitiesForCamera()` and `GetBestFitStreamCapabilityFromCollection()`.
- MLAudioInput and MLAudioOutput classes are now `MLAutoAPISingletons`. Developers no longer need to explicitly call `Start()` and `Stop()` on these apis.

## Bug Fixes
  
- Fixed menu button binding in the MagicLeapInput action map.
- Fixed eye calibration status not being reported correctly.
- Fixed api reference docs.
- Fixed broken references to virtual keyboard in the examples project which prevented Build & Run.
- Fixed exception thrown when attempting to use any head tracking extension functions.
- Renamed some MLResults to match what they're now called for ML2.
- Fixed workflow involving permissions declaration in AndroidManifest.xml. Permissions are no longer added or removed at build time, and are fully in the developer's control.
- WebRTC: Using MLCamera as AppDefinedVideoSource now allows for displaying local video stream using Preview capture.
- Updated XR Rig prefab to use new XR Origin script.
- Fixed padding bug with marshaling of native struct in MLAnchors API.
- Replaced all remaining instances of Privilege with Permission.
- Renamed CombinedTracker example scene in MagicLeapUnityExamples to MarkerTracker since Image Tracking has been removed.
- Fixed issue in media player where a grey bar rendered at the bottom of the video screen.

## Deprecations & Removals
  
- `MLHandTracking`, `MLHeadTracking`, `MLMeshing`, `MLPlanes`, `MLInput` apis have been removed in favor of their respective XR subsystems. MagicLeap specific functionality has been exposed via the extension classes in the `UnityEngine.XR.MagicLeap.Extensions` namespace.
- MCA / MLMA / MLMCA support has been removed from MLInput along with removal of touchpad gestures which were specific to it (LongHold, Scroll, Pinch)
- `MLAppIdentifier`, `MLDispatch`, `MLIdentity`, `MLIMU`, `MLLocale`, `MLLocation`, `MLNetworking`, MLSecureStorage, MLTokenAgent apis have been removed in favor of their existing Android counterparts.
- `MLAppConnect`, `MLContacts`, `MLConnections`, `MLMediaPlayer` Sharing, MLController LED, MLMusicService apis have been removed and will not be supported on the ML2.
- Raycast, Mobile App, Hand Meshing, Light Tracking samples have been removed from the MagicLeapUnityExamples project as their APIs are not currently supported on the ML2.
- Removed some MLResults that are no longer issued by the Lumin SDK on the ML2.
- Deprecated `MagicLeapManifestSettings.asset` and simplified the manifest interface in Project Settings. Developers now directly add necessary permissions to Assets/Plugins/`AndroidManifest.xml` like in normal Android development.
- `MLAPISingleton` base class has been deprecated and removed.

## Known Issues
  
- Requesting meshing vertex confidence will cause the app to halt.
- Image tracking, Cloud Anchors & World Raycast & Hand Meshing support has been temporarily disabled in this release. None of these are currently supported on the device. Once re-enabled, developers can use these on ZI.
- Media player currently only supports playback for web URLs. Support for files packaged in the apk will be added later.
- Eye blinking state is not reported either by the eye tracking api or the gaze recognition api (awaiting platform support).
- Eye pupil size is always reported as 4.0 (awaiting platform support).
- WebRTC `LocalAppDefinedAudioSourceBehavior` is restricted to 1 audio channel.
- Projects built with MSA plugin fail to build with linker errors if Strip Engine Code setting is enabled.
- XR Framework Meshing subsystem crashes when attempting to load mesh blocks for rendering.
- Meshing collision detection is not functional, issue with mesh colliders not being updated by the Unity meshing subsystem.
- Shaders using compute shader passes cause vulkan exception in Unity player (meshing wireframe shader specifically).
- WebView API still using MLAutoAPISingleton base class, this will be refactored in upcoming sprint to a more OOP based model.
- Running scenes under Zero Iteration can cause some errors to display in the console when stopping the scene.
- Camera Capture can cause a crash after capturing multiple images in a row.
- Frame rate can deteriorate after pausing and resuming an app multiple times.
- Detecting simultaneous controller input buttons does not work in Unity Input System 1.2.
- Projects can have an uninitialized API level in the Project Settings → Magic Leap → Manifest. This should be manually changed to 20 to allow for permissions to become visible.

