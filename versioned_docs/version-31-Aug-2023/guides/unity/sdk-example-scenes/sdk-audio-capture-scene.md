---
id: sdk-audio-capture-scene
title: Audio Capture
description: An overview of the audio capture demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 2
date: 3/21/2022
keywords: [Unity, Examples, Samples, Input, XR Interaction Toolkit, Audio, Microphone]
tags: [Unity, Examples, Samples, Input, XR Interaction Toolkit, Audio, Microphone]
---


## Overview

This example demonstrates the functionality of using the microphone for audio recording and playback through the device speakers. Once audio capture has started, the parrot in the scene will repeat what the microphone detects. The spatial audio playback will come from the location of the parrot.

:::note
For instructions on installing the SDK Examples Project and building this scene, follow the [**Examples Project Install Guide**](/versioned_docs/version-31-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md).
:::

## Options

- Realtime Playback, the audio will playback immediately and without any pitch modifications to the audio clip.

- Delayed Playback, the audio will playback with a slightly higher pitch once it detects that you have finished speaking.

## Requirements

Mandatory privileges required by this feature:

- AudioCaptureMic

Privileges required by this example:

- ControllerPose

