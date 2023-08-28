---
title: 1.2.0 - Unity SDK Release Notes
sidebar_position: 3
date: 12/07/2022
---

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Magic Leap SDK Version 1.1.0-dev2
- Unity Version: 1.2.0

## Features

- Added GetData method to AudioInputBufferClip that does not automatically wrap the audio data and instead sends you exactly what is in the audio buffer.
- Added MLCamera.FlipCameraVertically method to allow easily flipping camera frames instead of needing to invert Unity Renderer.
- Added Pause and Resume capability to MLWebView.
- Added new result code MLResult.Code.IllegalState.
- Added new struct MLMarkerTracker.TrackerSettings that introduces tracker profiles to MLMarkerTracker as a more modular way to configure the marker tracker hints.
- MLMarkerTracker.MarkerData objects now have their pose correctly rotated before being given to the developer.
- Exposed system intents in MLVoiceIntentsConfiguration. This is curretly an experimental feature on the OS.
- Exposed funcs in MLAudioOutput to allow bypassing device's master volume. These functions will only work on 60601 compliant devices.

## Bug Fixes

- MagicLeapHandDevice is no longer derived from XRController.
- Fixed AccessRenderBufferTexture bug in MLWebRTCVideoSinkBehavior which occasionally prevented frame from rendering correctly.
- Fixed UnspecifiedFailure in MLMarkerTracker API caused by change in MLMarkerTrackerSettings structure.
- Fixed bug in MLMediaPlayer where Reset() was being incorrectly called in place of Stop().
- Fixed MLMediaPlayer blocking main thread with Reset() and Destroy() methods. These now execute on a separate detatched thread.
- Fixed a crash in MLMediaPlayer when switching scenes.
- Fixed bug in MRCamera RGBA image format rendering.

## Deprecations & Removals

- MeshingSubsystemComponent.LevelOfDetail, MeshingSubsystemComponent.LevelOfDetailToDensity(), and MeshingSubsystemComponent.LevelOfDetailToDensity() have been marked Obsolete and will be removed in a future release in favor of MeshingSubsystem.Extensions.MLMeshing.LevelOfDetail, MeshingSubsystemComponent.FromDensityToLevelOfDetail(), and MeshingSubsystemComponent.FromLevelOfDetailToDensity().

## Known Issues

- Hand Center and Interaction Point are not valid in the Gesture Classification API.

