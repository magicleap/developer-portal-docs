---
id: mrtk-sdk-release-notes
title: 1.4.0 Version 1.0 - Unity MRTK Magic Leap Release Notes
sidebar_position: 4
date: 02/22/2023
---

## SDK Delivered via The Magic Leap Hub

This Package Supports Magic Leap Unity SDK Version 1.3.0 as well.

- Magic Leap SDK Version 1.2.0-Dev1
- Magic Leap Unity SDK Version 1.4.0
- Unity® Version: 2022.2 (custom)
- MRTK Foundations v2.8
- MRTK Examples v2.8

## Release Focus

Initial Update to 1.4.0

## Features

- Voice Intents - Refer to SpeechCommandsDemoMagicLeap scene for usage.
- Control - Refer to ControlMagicLeapDemo scene for usage.
- HandTracking - Refer to HandInterationExamplesMagicleap for usage. Only Partially implemented on platform currently.
- EyeTracking - Refer to EyeTrackingDemoMagicLeap for usage.
- Meshing - Refer to MeshingDemoMagicLeap for usage.
- AllInteractions - Refer to InteractionsDemoMagicLeap for Handtracking, Control, EyeTracking, and Voice usage together.

## 1.4.0 Version 1 Updates

- Updated to MagicLeap SDK 1.2.0-dev1 and MagicLeap Unity SDK 1.4.0.
- Important: HandTracking Smoothing has been removed as smoothing is now done on the platform and no longer needed in the MRTK layer.
- In the Magic Leap HandTracking Input Data Provider if Both or MRTK KeyPoints are selected as the Gesture Interaction Type, the MRTK Pinch values to trigger or maintain a pinch gesture are customizable.
- Added a Wireframe General Rendering option to the MagicLeap Spatial Mesh Observer.
- Additional Logic to better support the "Air-Tap" Gesture.
- Added Support for System Voice Commands in the Speech Input Profile Important: Scenes using Speech Commands will need to update their profiles from the DefaultmixedRealitySpeechCommandsProfile to the Magic Leap Speech profile located at Assets/Create/Mixed Reality/Toolkit/Profiles

## Known Issues

- Handtracking Performance issues when interacting with other objects. Continuous Improvements made each Sprint.
- To use the simulator when running MRTK, you must set the Script Changes While Playing setting to Stop Playing and Recompile or Recompile and Continue Playing in the Unity Preferences.
- The logs may show a single false Permission Denied error when running meshing.

## Important Notes

- Instead of copying a configuration file, clone the DefaultMixedReality version and make adjustments. We have found copying an MRTK configuration file can cause issues such as Input Data Providers not loading or visualizers not attaching properly.
- Controller Visualizer sometimes stops positioning and the logs say: Left_ControllerModel(Clone) is missing a IMixedRealityControllerVisualizer component! This happens sporatically, we have found adding the MixedRealityControllerVisualizer component to the model itself resolves this.
- If your application builds and results in a blank/empty scene, you must adjust your projects quality settings. (Known issue in editors 2021.1 and older) To resolve this, remove all but one of the quality presets in your projects quality settings (Edit>Player Settings>Quality).
- Users may need to add the tracked pose driver to the camera themselves.

