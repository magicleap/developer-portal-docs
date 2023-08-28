---
id: mrtk-sdk-release-notes
title: 0.53.0 - Unity MRTK Magic Leap Release Notes
sidebar_position: 3
date: 07/13/2022
---


* Lumin SDK Version 0.53.0
* Unity® Version: 2022.2 (custom)
* MRTK Foundations v2.8
* MRTK Examples v2.8

This software is an Early Access Product.

## Release Focus

Initial Update to 0.53.0

## Features

* Voice Intents - Refer to SpeechCommandsDemoMagicLeap scene for usage.
* Control - Refer to ControlMagicLeapDemo scene for usage.
* HandTrackling - Refer the HandInterationExamplesMagicleap scene for usage. Only Partially implemented on platform currently
* EyeTracking - Refer to EyeTrackingDemoMagicLeap for usage.
* AllInteractions - Refer to InteractionsDemoMagicLeap for Handtracking, Control, EyeTracking, and Voice usage together.

## 0.53.0 Version 1 Updates

* Updated to MagicLeap SDK 0.53.0
* Fixed issue where trigger would also cause vibration.
* Permission Logic Updated to use Callbacks.
* MagicLeapCameraSettings have changed as MLCamera has moved from the XR package into the SDK package and some features have been altered or removed.

## Known Issues Being Worked On

* Handtracking Performance issues when interacting with other objects, recent updates should have improved this.
* To use the simulator when running MRTK, you must set the **Script Changes While Playing** setting to **Stop Playing and Recompile** or **Recompile and Conintue Playing** in the Unity **Preferences**
* When playing in Editor errors with ImageTracking on start and Configuring HandTracking on stop show in the logs, these do not cause issues and will be removed in future releases

## Important Notes

* Instead of copying a configuration file, clone the DefaultMixedReality version and make adjustments. We have found copying an MRTK configuration file can cause issues such as Input Data Providers not loading or visualizers not attaching properly
* Controller Visualizer sometimes stops positioning and the logs say: Left_ControllerModel(Clone) is missing a IMixedRealityControllerVisualizer component! This happens sporadically, we have found adding the MixedRealityControllerVisualizer component to the model itself resolves this.
* If your application builds and results in a blank/empty scene, you must adjust your projects quality settings. (Known issue in editors 2021.1 and older) To resolve this, remove all but one of the quality presets in your projects quality settings (**Edit>Player Settings>Quality**)
* Users may need to add the tracked pose driver to the camera themselves.

