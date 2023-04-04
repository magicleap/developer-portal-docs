---
id: sdk-release-notes
title: 0.52.0 - SDK Release Notes
sidebar_position: 3
date: 4/05/2022
---


# 0.52.0 SDK Release Notes

This document contains the Lumin SDK release notes including the notes for the core SDK and Unity® integration.

This software is an Early Access Product.

## **Features**

-   SDK package includes a comprehensive set of headers files, at this time only the following headers have been cleared for ML2:

-   `ml_graphics.h`
-   `ml_perception.h`
-   `ml_head_tracking.h`
-   `ml_input.h`
-   `ml_controller.h`
-   `ml_camera_v2.h`
-   `ml_native_surface.h`
-   `ml_media_codec.h`
-   `ml_media_player.h`
-   `ml_media_muxer.h`
-   `ml_media_recorder.h`
-   `ml_camera_metadata_v2.h`
-   `ml_eye_tracking.h`
    - Renamed fixation to vergence
    -   Removed pupil size data
    -   Removed calibration status data
-   `ml_gaze_recognition.h`
    -   Removed Push, Pull and Winks behaviors
-   `ml_marker_tracking.h`
    -   Support for Aruco, QR code, and AprilTag markers
    -   Experimental support for EAN13 and UPC-A codes
    -   `MLMarkerTrackinFpsHint` added to control tracking framerate
-   `ml_spatial_anchor.h`
-   `ml_planes.h`
-   `ml_cv_camera.h`
-   `ml_voice.h`
-   `ml_hand_tracking.h`
    -   Support for hand key points tracking only
    -   Only 21 out of 24 key points are being tracked. Key points for Wrist Ulnar, Wrist Radial, and Hand Center are not calculated.

-   New Sample Apps:
    -   Spatial Anchor App
    -   Hand Tracking App
    -   Marker Tracker App (support for April Tags added)

-   Android SDK support:
    -   Haptics API for Controller
    -   Bluetooth API
        -   GATT Server API not supported

# **Unity® Package 0.52.0**

-   Lumin SDK Version 0.52.0
-   Unity® Version: 2022.1 (custom)

This software is an Early Access Product.

## **Features**

-   Exposed Anchors API. Refer to the Anchors sample scene in the MagicLeapUnityExamples project for usage.
-   Exposed Voice Intents API. Refer to the VoiceIntents sample scene in the MagicLeapUnityExamples project for usage.
-   Added support for AprilTags under the MLMarkerTracker API. BREAKING CHANGE: `MLMarkerTracker.MarkerType.Aruco`, was changed to `MLMarkerTracker.MarkerType.Aruco_April`.
-   Re-enabled WebRTC support in Unity. We have also added support for `FPSHint`.
-   Hand tracking has been updated to only start when an app calls `GestureSubsystem.Extensions.MLHandTracking.SetConfiguration()`. This is done to save on resources and only enable tracking if the app is using the feature.
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
-   `MLMarkerTrackerDecodedBinaryData` restricts data size to 100.

