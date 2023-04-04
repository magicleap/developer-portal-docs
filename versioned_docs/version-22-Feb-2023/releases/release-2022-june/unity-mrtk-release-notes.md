---
id: mrtk-sdk-release-notes
title: 0.52.2 - Unity MRTK Magic Leap Release Notes
sidebar_position: 3
date: 06/07/2022
---

* Lumin SDK Version 0.52.2
* Unity® Version: 2022.2 (custom)
* MRTK Foundations v2.8
* MRTK Examples v2.8

This software is an Early Access Product.

## Release Focus

Initial Update to 0.52.2

## Features

* Voice Intents - Refer to SpeechCommandsDemoMagicLeap scene for usage.
* Control - Refer to ControlMagicLeapDemo scene for usage.
* HandTrackling - Refer to HandInterationExamplesMagicleap for usage. Only Partially implemented on platform currently
* EyeTracking - Refer to EyeTrackingDemoMagicLeap for usage.
* AllInteractions - Refer to InteractionsDemoMagicLeap for Handtracking, Control, EyeTracking, and Voice usage together.

## 0.52.2 Version 1 Updates

* Updated to MRTK 2.8
* Upgraded to Unity 2022.2 where Magic Leap builds are now Pure Android and no longer "Relish"
* Added Magic Leap Camera Settings
* Resolved issue with Controller Events on a Canvas
* Added base controller haptics implementation, will be expanded on in future releases
* Adjusted Handtracking Pointer position based on aligning with other platforms
* Added logic to Handtracking to improve smoothness

## Known Issues Being Worked On

* Handtracking Performance issues when interacting with other objects, recent updates should have improved this.
* To use the simulator when running MRTK, you must set the **Script Changes While Playing** setting to **Stop Playing and Recompile** or **Recompile and Conintue Playing** in the Unity **Preferences**
* When playing in Editor errors with ImageTracking on start and Configuring HandTracking on stop show in the logs, these do not cause issues and will be removed in future releases

## Deprecations & Removals

* Deprecated Configuration Files have been fully removed

## Important Notes

* Instead of copying a configuration file, clone the DefaultMixedReality version and make adjustments. We have found copying an MRTK configuration file can cause issues such as Input Data Providers not loading or visualizers not attaching properly
* Controller Visualizer sometimes stops positioning and the logs say: Left_ControllerModel(Clone) is missing a IMixedRealityControllerVisualizer component! This happens sporadically, we have found adding the MixedRealityControllerVisualizer component to the model itself resolves this.
* If you application builds and results in a blank/empty scene, you must adjust your projects quality settings. (Known issue in editors 2022.2.a16 and older) To resolve this, remove all but one of the quality presets in your projects quality settings (**Edit>Player Settings>Quality**)
* Developers can remove the feature by commenting out line 276 in the MagicLeapMRTKController.cs script.

