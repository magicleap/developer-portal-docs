---
title: 1.5.0 - Unity SDK Release Notes
sidebar_position: 3
date: 03/22/2023
---

# 1.5.0 - Unity SDK Release Notes

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Magic Leap SDK Version 1.2.0-dev2
- Unity Version: 1.5.0

# Unity® Package 1.5.0

## Features

- Added support for XRHandSubsystem
- Added slots to MLVoiceIntents
- Update Magic Leap XR Plugin requirement to version 7.0.0

## Bug Fixes

- Fixed enforcement of Main Camera's near clip distance to respect user setting.
- Fixed a NullReferenceException being thrown when stopping and replaying video with MLMediaPlayer
- Fixed invalid handle check with MLMeshing subsystem

## Deprecations & Removals

## Known Issues

- MLWebRTC: When disconnecting from a session, the camera does not shut down cleanly if the NativeSurface buffer format was used, causing the application to hang for as much as 30 seconds.

