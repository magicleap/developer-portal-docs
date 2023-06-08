---
title: 1.7.0 - Unity SDK Release Notes
sidebar_position: 3
date: 05/22/2023
---

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Magic Leap SDK Version 1.3.0-dev1
- Unity Version: 1.7.0

# Unity® Package 1.7.0

## Features

- Minimum ML API level updated to 27.

## Bug Fixes

- A prior release inadvertently allowed developers to bypass the minimum clipping plane in Unity. We have restored the enforcement of the minimum clipping plane to 37cm.
- Fixed compiler errors when the package com.unity.xr.openxr is also installed.
- Fixed MLDepthCamera errors when closing the application.
- Improved performance of MLWebRTC.MLCameraVideoSource by making it start the video capture asynchronously.
- Fixed enforcement of MLCamera’s near clip distance when “Fix problems on startup” is enabled.
- Fixed occasional crash when changing scenes while MLMediaPlayer is playing local video file.
- Addressed MLAnchors query timing to reduce likelihood of missing pose errors.
- Fixed CV camera errors when resuming from sleep mode.
- Fixed CV camera errors when resuming from menu.
- Fixed MLWorldCamera Invalid Parameter error spams.
- Renamed Tests assembly definition.
- Fixed caching logic for CustomHapticsPatterns to avoid using incorrect cached patterns.
- Fixed MLVoice.IntentEvent’s EventSlotsUsed list within the OnVoiceEvent so it properly lists all Slots used in the voice command.
- Optimized MLMeshing API and components to reduce memory usage.
- Fixed spamming errors caused by not detecting eyes in the eye tracking example.

## Deprecations & Removals

- The MLMediaDRM API has been marked as obsolete and will be removed in a future release.
- MLWebView.GetScrollSize() and MLWebView.GetScrollOffset() have been marked as obsolete and will be removed in a future release.

## Known Issues

- MLWebRTC: When disconnecting from a session, the camera does not shut down cleanly if the NativeSurface buffer format was used, causing the application to hang for as much as 30 seconds.
- WebRTC can take a very long time to connect.
- CV camera throws errors after background/doze modes.
- CEA608, TTML, and WebVTT video sources are not displaying any subtitle/closed caption text in the test scene for media player
