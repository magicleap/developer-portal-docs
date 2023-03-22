---
title: 1.0.0 - Unity SDK Release Notes
sidebar_position: 3
date: 10/03/2022
---

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Magic Leap SDK Version 1.0.0
- Unity Version: 2022.2.x

## Features

- Added controller pose derivative values to Unity Input system.
- Added ability to save Magic Leap diagnostic logs from within Unity.
- Updated license agreements and copyright headers.
- Added Anchors space origin transform.
- Added MLAudioInput support for streaming audio clips.
- Updated WebRTC API struct format and improved memory management.
- Added new Auto Resize Native Renderer option to MLWebRTCVideoSinkBehavior which if enabled will allow the Native Renderer to automatically be adjusted in response to changes in WebRTC stream size.
- Added ability for developers to override VkSamplerYcbcrConversionCreateInfo struct.

## Bug Fixes

- Fixed resource leak in WebViewTabBehavior leaving web view tabs open after changing scenes.
- Fixed cleanup of YcbcrRenderer when MediaPlayer is reset.
- Fixed MLAudioInput capture delay.
- Fixed use of TryGetBestFitStreamCapability.
- Fixed multiple warnings due to unused variables.
- Fixed errors with MLCamera asynchronous APIs by adding locking mechanisms.
- Fixed performance issues with executing LabDriver to get relative paths for Magic Leap App Sim.
- Fixed cleanup of callback handlers on video player teardown.
- Fixed RenderTexture read-write settings and YcbcrRenderer output color space determination.
- Fixed MLWebView link click precision issues.

## Deprecations & Removals

- Removed WorldScale support. This was causing issues with transforms coming from the Magic Leap SDK and was not uniformally applied. Recommended to use custom scaling of objects instead of camera parent scale.
- Removed APIs for deprecated features (Hand Meshing, Raycast, Image Tracking).
- Removed deprecated Planes setting Max Hole Size.

## Known Issues

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
- If `HandTracking` is enabled, the Controller position/rotation actions fail to work properly when binding with the generic XRController and Right XRController input devices. The work around is to have your actions bind to the `MagicLeapController` input device instead. The `MagicLeapInputs` input asset already does this with it's action fallbacks.

