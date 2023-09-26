---
id: unity-sdk-release-notes
title: 0.52.0 - Unity SDK Release Notes
sidebar_position: 3
date: 4/05/2022
---

# 0.52.0 Magic Leap Unity SDK Release Notes

## SDK Delivered via The Lab 2.0

- Unity Example Project
- Magic Leap 2 Unity SDK Package

## Delivered via secure email share

- Unity Installer


## **Features**

-   Exposed Anchors API. Refer to the Anchors sample scene in the MagicLeapUnityExamples project for usage.
-   Exposed Voice Intents API. Refer to the VoiceIntents sample scene in the MagicLeapUnityExamples project for usage.
-   Added support for AprilTags under the MLMarkerTracker API. BREAKING CHANGE: `MLMarkerTracker.MarkerType.Aruco`, was changed to `MLMarkerTracker.MarkerType.Aruco_April`.
-   Re-enabled WebRTC support in Unity. We have also added support for FPSHint.
-   Hand tracking has been updated to only start when an app calls 'GestureSubsystem.Extensions.MLHandTracking.SetConfiguration()'. This is done to save on resources and only enable tracking if the app is using the feature.
-   Timestamp data is now provided as part of the gaze recognition state.
-   Added MLCamera preview rendering support.
-   Added a utility UI under **Project Settings > Magic Leap > Manifest Settings** to help include required permissions in the app's AndroidManifest.xml file.
-   All native libs shipped with the SDK package have been marked to work on the Android x86_64 target and all platform code wrapped under `#if UNITY_MAGICLEAP || UNITY_ANDROID` in preparation for bringing Relish under the Unity Android platform umbrella. Developers building their own native libs for Relish or using the `UNITY_MAGICLEAP` preprocessor flag are advised to update their library setup and code accordingly.

## **Bug Fixes**

-   Fixed issue with Manifest Settings throwing error on first access.
-   Fixed MediaPlayer Stop functionality.
-   Fixed MediaPlayer local playback.
-   Fixed C-API enum mismatch in GazeRecognition API.
-   Updated WebRTC API to support deprecation of distinct `MLMRCamera` class.
-   Updated `MagicLeapController/isTracked` input action binding to be a passthrough instead of a button for better detection of connection status at scene startup.
-   Fixed using the PlayerInput component for Magic Leap Controller events.

## **Deprecations & Removals**

-   Eye tracking calibration status has been removed.
-   `WinkLeft`, `WinkRight`, `Push` & `Pull` behaviors have been removed from the MLGazeRecognition API.

## **Known Issues**

-   WebRTC: local video rendering does not work when using native buffers.
-   WebRTC: using app-defined video source with CPU buffers and YUV frame format sends black-and-white frames (awaiting platform support).
-   Eye blinking state is not reported either by the eye tracking api or the gaze recognition api (awaiting platform support).
-   Eye pupil size is always reported as 4.0 (awaiting platform support).
-   Labdriver is run even when MagicLeapLoader is not selected in XR Plugin Management.
-   Launching / terminating ZI after having played 1 editor session already, is not picked up by Unity and it continues to assume the original state of ZI for subsequent plays.
-   Media player render with a small grey-block at the bottom.
-   MLMarkerTrackerDecodedBinaryData restricts data size to 100.

