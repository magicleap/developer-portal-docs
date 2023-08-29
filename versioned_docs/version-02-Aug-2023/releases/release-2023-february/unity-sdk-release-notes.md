---
title: 1.4.0 - Unity SDK Release Notes
sidebar_position: 3
date: 02/22/2023
---

# 1.4.0 - Unity SDK Release Notes

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Magic Leap SDK Version 1.2.0-dev1
- Unity Version: 1.4.0

# Unity® Package 1.4.0

## Features

- Added MLNativeBindings.MLUnitySdkGetMinApiLevel() method which reports the minimum Magic Leap API level supported by the package.
- Added new MLCameraBase class to the MLCamera API which can be used to make camera API calls synchronously.
- Added suite of automated API marshalling tests in Test Runner.
- Added new public OnReceivedSamples callback to the MLAudioInput API.
- Added new capability to MLSegmentedDimmer to enable using the camera's depth buffer to automatically apply segmented dimming to 3D meshes in a scene, instead of using URP. This feature will require an upcoming update to the com.unity.xr.magicleap package.
- Added WinkLeft and WinkRight values to the MLGazeRecognition.Behavior enum.
- Added Reset() method to the MLMediaPlayerBehavior script.
- Added Controller.State struct to the Input subsystem get state info of the controller, such as handedness. Use InputSubsystem.Extensions.Controller GetState() to query the current state.

## Bug Fixes

- Fixed bug where MLMarkerTracker would not shut down cleanly, causing a "PerceptionSystemNotStarted" error to fill the log output.

## Deprecations & Removals

- Several MLSegmentedDimmer properties which had previously been deprecated have now been removed.
- MLSegmentedDimmer.SetEnabled() has been marked Obsolete and will be removed in a future release.

## Known Issues

- MLWebRTC: When disconnecting from a session, the camera does not shut down cleanly if the NativeSurface buffer format was used, causing the application to hang for as much as 30 seconds.
- Webview: The scene does not automatically start by opening a tab for the user. This requires the user to open a new tab before inserting any URLs (click the '+' button); otherwise, the URL request will not be initiated.
- AppSim Unity UI has issues where reset button in some UI views are not functional.
- Controller Touchpad Gestures are not recognized

