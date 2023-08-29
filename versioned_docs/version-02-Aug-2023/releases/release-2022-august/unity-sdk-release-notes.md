---
id: unity-sdk-release-notes
title: 0.53.2 - Unity SDK Release Notes
sidebar_position: 3
date: 08/09/2022
---

## SDK Delivered via The Lab 2.0

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Lumin SDK Version 0.53.2

## Features

- Reorganized package structure to more align with Unity conventions.
- Added support for Eye Fit and Calibration API.
- Renamed LuminUnity asmdef to MagicLeap.SDK.
- Moved WorldScale to MagicLeapCamera.cs and now ensures it is updated if the main camera parent transform changes.
- Updated to support 2022.2 a19 editor and render pipeline 14.0.3.
- Added WebRTCSendNativeFrameError result code.
- Post build step now checks for XR Loader toggle to determine if build is for ML2.
- Changed input device name from MagicLeapLightwear to MagicLeapHeadset.
- Updated XRRig prefab to use action-based controllers.
- Refactored MLCamera to support per-frame camera intrinsics parameters as callbacks.
- Added support for getting audio data and position data for MLAudioInput.
- Added support to MLAudioInput to create non-streamed audio clip.
- Added AudioInput.Clip class to record an AudioClip from the Microphone.
- Added EyeCalibration and HeadsetFit APIs.
- Added API for client to call MLCameraDeinit() as needed.
- Updated MagicLeapInput action map to rename Touchpad1 to Touchpad.

## Bug Fixes

- No longer receive warnings about camera transform if its not set to identity now that XRRig is recommended.
- MLDevice no longer derives from TrackedPoseDriver as it was unnecessary.
- MLPermissions handles logging errors internally and no longer errors on pending requests.
- Fixed cleanup errors of MLDevice under Zero Iteration.
- SDK Loader now uses compile time constructed library names.
- Fixed meshing collider generation caused by incorrect current mesh type value override in session subsystem.
- Fixed platform wrappings for MLAudioInputClip.
- Fixed release of render target when YcbcrRenderer cleanup is complete.
- Marked IsBuffering, IsSeeking & Duration as c# properties to make them read-only in MLMediaPlayer class.
- Set near clip plane on Main Camera prefab to remove warning about clip plane being too close.
- Fixed inner planes tracker id and boundary generation.
- Fixed rectangular boundary generation.
- Added epsilon check to convex hull generation point on left hand side check to avoid infinite loops on straight edges.
- Fixed permission prompts to no longer hang UI when using Zero Iteration Frontend.
- Fixed SDK loader library path sent to xr package.
- Fixed MLCamera VirtualOnly camera mode orientation in WebRTC.
- Fixed browse button for picking ML SDK.
- Renamed The Lab launch method and comments.
- Fixed The Lab launch root option and arguments.
- Added additional comment to MLCamera.CreateAndConnect method.
- Added more information to MLCamera.GetStreamCapabilities function.
- Fixed performance hit in MLTime by removing inheritance of MLAPIBase.

## Deprecations & Removals

- Removed deprecated MLSceneOptimizerBehavior.cs as this has been merged into MagicLeapCamera.cs as of 0.53.0.
- Removed deprecated MLPermissionsRequesterBehavior.cs as this is no longer the recommended permissions requesting method.
- Removed AndroidTargetDevices.RelishDevicesOnly, using MagicLeapLoader toggle instead.
- Remove MLTime inheritance to MLAPIBase and fix audio function call.
- Moved WorldScale to MagicLeapCamera.cs from MLDevice and removed unnecessary references.

## Known Issues

- Image tracking, Cloud Anchors & World Raycast & Hand Meshing support has been temporarily disabled in this release. None of these are currently supported on the device. Once re-enabled, developers can use these on ZI.
- Eye blinking state is not reported either by the eye tracking API or the gaze recognition API (awaiting platform support).
- Eye pupil size is always reported as 4.0 (awaiting platform support).
- WebRTC LocalAppDefinedAudioSourceBehavior is restricted to 1 audio channel.
- Projects built with MSA plugin fail to build with linker errors if Strip Engine Code setting is enabled. We force this to be disabled in post build.
- Shaders using compute shader passes cause Vulkan exception in Unity player (meshing wireframe shader specifically).
- Frame rate can deteriorate after pausing and resuming an app multiple times. Eventually will cause crash.
- Detecting simultaneous controller input buttons does not work in Unity Input System 1.2.
- Marker tracker transforms are upside down requiring users to rotate them by 180 degrees about the forward vector.
- Marker tracker issues errors on exiting play mode in Zero Iteration.
- Camera capture can freeze app after multiple captures.
- MLCamera.CaptureVideoStop fails with UnspecifiedFailure when called by WebRTC CameraVideoSource.
- MLCamera capture operations can crash in developer builds due to change in per frame camera intrinsics.
- MLCamera capture of YUV frame data can lead to an application crash.
- Spatial anchors report incorrect location for a single frame.
- Some configurations of camera capture can produce distorted images.
- WebRTC video sync rendering fails when non-white material is assigned.
- WebRTC video can freeze if device is left idle for more than a minute.
- WebRTC fails to recover from pause and resume.
- WebRTC toggling remote audio checkbox does not affect audio from remote client.
- MLGestureClassification's GestureTransformRotation and GestureInteractionRotation are not implemented yet and data will not be guaranteed accurate. Currently only the Positions of the Hand Transform and Interaction Point will be recommended to use.
- WebView issues multiple errors on startup and while browsing, can lead to slowdown or crash of the application.
- Planes issues warnings and errors, but should still detect planes in the scene.
- Action based input now maps controller to generic XR right hand controller and in doing so can cause controller to not be detected when using hand tracking.
- Action based input has issue with detecting the menu button and touch pad swipe actions.

