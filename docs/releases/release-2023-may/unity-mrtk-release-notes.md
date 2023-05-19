---
id: mrtk-sdk-release-notes
title: 1.7.0 Version 1.0 - Unity MRTK Magic Leap Release Notes
sidebar_position: 4
date: 05/22/2023
---

## SDK Delivered via The Magic Leap Hub

- Magic Leap SDK Version 1.3.0-dev1
- Magic Leap Unity SDK Version 1.7.0
- Unity® Version: 2022.2 (custom)
- MRTK Foundations v2.8
- MRTK Examples v2.8

## Release Focus

Initial Update to 1.7.0

## Features

- Voice Intents - Refer to SpeechCommandsDemoMagicLeap scene for usage.
- Control - Refer to ControlMagicLeapDemo scene for usage.
- HandTracking - Refer to HandInterationExamplesMagicleap for usage. Only Partially implemented on platform currently.
- EyeTracking - Refer to EyeTrackingDemoMagicLeap for usage.
- Meshing - Refer to MeshingDemoMagicLeap for usage.
- AllInteractions - Refer to InteractionsDemoMagicLeap for Handtracking, Control, EyeTracking, and Voice usage together.

## 1.7.0 Version 1.0 Updates

- Updated to MagicLeap SDK 1.3.0-Dev1 and MagicLeap Unity SDK 1.7.0.
- Added an additional option in the Hand Tracking Input provider Settings to allow developers to choose between the MRTK or Magic Leap logic for the Hand Ray Pointers.

## Known Issues

- Handtracking Performance issues when interacting with other objects. Continuous Improvements made each Sprint.
- To use the simulator when running MRTK, you must set the **Script Changes While Playing** setting to **Stop Playing and Recompile** or **Recompile and Conintue Playing** in the Unity **Preferences**.
- The Slot Example in the Speech Commands Sample scene will trigger the change color MRTK popup.
- Occationally the controller may not connect properly when launching a new application. Pauseing and resuming the application resolves this.

## Important Notes

- Instead of copying a configuration file, clone the DefaultMixedReality version and make adjustments. We have found copying an MRTK configuration file can cause issues such as Input Data Providers not loading or visualizers not attaching properly.
- Controller Visualizer sometimes stops positioning and the logs say: Left\_ControllerModel(Clone) is missing a IMixedRealityControllerVisualizer component! This happens sporatically, we have found adding the MixedRealityControllerVisualizer component to the model itself resolves this.
- If your application builds and results in a blank/empty scene, you must adjust your projects quality settings. (Known issue in editors 2021.1 and older) To resolve this, remove all but one of the quality presets in your projects quality settings (**Edit>Player Settings>Quality**).
- Users may need to add the tracked pose driver to the camera themselves.