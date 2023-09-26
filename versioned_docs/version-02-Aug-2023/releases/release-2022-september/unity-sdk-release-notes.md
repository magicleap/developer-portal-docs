---
title: 0.53.3 - Unity SDK Release Notes
sidebar_position: 3
date: 09/12/2022
---

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Lumin SDK Version 0.53.3

## Features

- Added support for camera auto focus API.
- Added support for `MLHaptics` API.
- Added async support to `MLCamera` API to allow developers to avoid blocking on Camera operations.
- Added `MLCameraIntrinsics` `OnPreviewBufferAvailable` callback.
- Added better support for `OnApplicationPause` in `MLWebRTCCameraVideoSource` to manage camera resources during pause and resume.
- Added Trigger Hold action to MagicLeap input actions.
- Updated `LuminXrProvider` with normal permission checks.
- Added boot settings for OpenXR.
- Added support for high precision marker tracking.
- Added `MediaPlayer.VideoRenderer.OnFrameRendered` callback to media player renderer.
- Added Magic Leap 2 interaction profile for OpenXR.
- Added `TargetSpaceOrigin` to `MLAnchor.LocalizationInfo`.
- Added support for indefinite `MLAnchor` duration registration.
- Updated integration branding with the Magic Leap Hub (formerly The Lab 2.0) and Magic Leap App Simulator (formerly Zero Iteration).

## Bug Fixes

- Fixed `OnSourceEnabled` when not using native buffers for WebRTC.
- Fixed hand tracking keypoint detection under ML App Sim.
- Fixed native platform error logging.
- Fixed event delegate initialization in `MLCamera`.
- Fixed excessive Audio Playback allocations.
- Fixed developer build crashes caused by `WorldScale` computations.
- Fixed memory leak when pausing/resuming unity applications (requires Unity XR Package update).
- Fixed collision mesh generation on mesh blocks generated from `MeshingSubsystemComponent` + Mesh prefab.
- Fixed Voice Intents configuration asset creation (fixed in 2022.2.0b4 of Unity Engine).
- Fixed crash caused by `MLDevice` instance race condition.
- Refactored `MLWebView` mouse input functions to simplify parameters.
- Fixed `MLWebView` mouse drag support.
- Fixed `MLWebView` component null reference checks.
- Fixed `MLAnchor` duration checks and updated documentation.
- Fixed controller Menu button and touchpad actions.
- Refactored controller action layout to remove touch point 2 and cleanup supported actions.
- Fixed `YcbcrRenderer.Cleanup()` not fully cleaning up resources.
- Fixed `UnityEngine.XR.Hand.TryGetFingerBones` returning a 5th invalid Bone when only 4 are supported.

## Deprecations & Removals

- Removed `MLAutoAPISingleton` inheritance from `MLAudioPlayback`. Uses normal singleton pattern. Callers still need to drive its lifecycle functions.
- Removed automatic disabling of Strip Engine Code, this has been fixed in the 2022.2.0b4 Unity Engine.
- Removed permissions for `HEAD_POSE` and `CONTROLLER_POSE`, these are no longer required.
- Removed remaining references to Lumin platform. Magic Leap 2 is a full AOSP based platform.

## Known Issues

- Image tracking, World Raycast & Hand Meshing support has been temporarily disabled in this release. None of these are currently supported on the device. Once re-enabled, developers can use some of these in ML App Sim.
- Eye blinking state is not reported either by the eye tracking API or the gaze recognition API (awaiting platform support).
- WebRTC `LocalAppDefinedAudioSourceBehavior` is restricted to 1 audio channel.
- To use Geometry Shaders, Force Multipass must be set in **Project Settings -> XR Plug-in Management -> Magic Leap Settings -> Force Multipass**. Otherwise geometry shader passes cause vulkan exception in Unity player.
- Keypoint mask values in ML App Sim are temporarily ignored and overridden to true.
- XR Framework Meshing subsystem crashes when attempting to load mesh blocks for rendering.
- Detecting simultaneous controller input buttons does not work in Unity Input System 1.2.
- Marker tracker transforms are upside down requiring users to rotate them by 180 degrees about the forward vector.
- Camera capture can freeze app after multiple captures.
- `MLCamera.CaptureVideoStop` fails with `UnspecifiedFailure` when called by WebRTC `CameraVideoSource` using `NativeBuffers`. When using `YUV CaptureVideoStop` returns successfully.
- Some configurations of camera capture can produce distorted images.
- WebRTC video sink rendering fails when non-white material is assigned.
- `MLGestureClassification's GestureTransformRotation` and `GestureInteractionRotation` are not implemented yet and data will not be guaranteed accurate. Currently only the Positions of the Hand Transform and Interaction Point will be recommended to use.
- `MLWebView` first tab creation causes framerate drop.
- `MLWebView` has challenges clicking on web links on page due to noisy controller position cancelling click operations (treats it as a drag operation).
- If `HandTracking` is enabled, the Controller position/rotation actions fail to work properly when binding with the generic XRController and Right XRController input devices. The work around is to have your actions bind to the `MagicLeapController` input device instead. The `MagicLeapInputs` input asset already does this with it's action fallbacks.
- `MLAudio` is not fully supported in the 2022.2.0b5 version of the Unity Engine, make sure you don't check the "MLAudio" check box in Magic Leap XR settings (to utilize the Java AudioTrack fallback). Also use the following audio settings: Sample rate to 48000, buffer size to Good Latency.
- When changing audio settings Unity crashes often or starts making noises.
- Unity applications currently experience aproximately 190 MB/hr memeory leak.
- `MLAudioInput` delayed capture and "parroting" is not functioning.

