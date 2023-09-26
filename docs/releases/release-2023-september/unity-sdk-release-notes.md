---
id: unity-sdk-release-notes
title: 1.11.0 - Unity SDK Release Notes
sidebar_position: 2
date: 09/26/2023
---

## Unity® Package 1.11.0

### Features

- Remove requirement to call MLAudioPlayback's CreateAudioBuffer method from the main thread.

## Bug Fixes

- Resolved issue with controller touchpad gestures not working in App Sim.
- MLDevice : Fixed null reference exception.
- Fixed an issue where Vulkan would fail to initialize if Unity's WebRTC package (com.unity.webrtc) is installed in the project.
