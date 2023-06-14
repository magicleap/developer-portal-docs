---
id: mrtk-overview
title: Mixed Reality ToolKit Overview
description: Overview of Microsoft's Mixed Reality ToolKit
sidebar_position: 1
date: 05/17/2022
tags: [Unity, Samples, MRTK, Input, UI]
keywords: [Unity,Samples, MRTK, Input, UI]
---

Microsoft's [Mixed Reality ToolKit](https://docs.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/?view=mrtkunity-2021-05)(MRTK) offers a robust package of UI frameworks, input systems, and other tools that assist with developing augmented reality Unity applications.

Here you can find demo scenes and other package tools that allow you to use MRTK within your Magic Leap 2 Unity projects.

## Features and Demo Scenes

The following features have demo scenes included in the official MRTK Examples Project:

- Voice Intents
  - Refer to SpeechCommandsDemoMagicLeap scene for usage.
- Control
  - Refer to ControlMagicLeapDemo scene for usage.
- HandTracking
  - Refer to HandInteractionExamplesMagicLeap for usage.
  - Only Partially implemented on platform currently
- EyeTracking
  - Refer to EyeTrackingDemoMagicLeap for usage.
- AllInteractions
  - Refer to InteractionsDemoMagicLeap for Handtracking, Control, EyeTracking, and Voice usage together.

## Known Issues Being Worked On

- Handtracking Performance has issues when interacting with other objects.
- To use the simulator when running MRTK, you may need to set the Script Changes While Playing setting to *Stop Playing and Recompile* or *Recompile and Continue Playing* in the Unity Preferences
- When playing in Editor errors with ImageTracking on start and Configuring HandTracking on stop show in the logs, these do not cause issues and will be removed in future releases.
- Permissions are requested incorrectly when running the application in the Unity Editor.

