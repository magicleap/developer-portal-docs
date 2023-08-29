---
title: 1.10.0 - Unity SDK Release Notes
sidebar_position: 3
date: 08/30/2023
---

## SDK Delivered via The Magic Leap Hub

# Unity® Package 1.10.0

## Features

- Added MLOcclusion API.
- Added public properties MagicLeapCamera.EnforceFarClip and MagicLeapCamera.RecenterXROriginAtStart

## Bug Fixes

- MLSegmentedDimmer: Fixed crash when playing scene twice in editor.
- MLMediaPlayerBehavior: Fixed unresponsive UI after pressing stop button in MediaPlayer example.
- Added missing dropdown for short-range depth camera in DepthCamera example.
- MLCamera: Fixed error on sleep mode and doze mode.
- MLCameraBase: Fixed failure to render preview capture more than once.
- MLNativeSurface: Fixed AccessRenderBufferTexture() rendering failure when reusing same player.
- MLMediaPlayer: Fixed erroneuous error logging on pending result from Streaming Assets path prepare.
- Fixed MLMeshing on map reset.
- MLMeshing: Fixed Null Reference Exception on Meshing example scene start up.
- Fixed second disconnect attempt in WebRTC example.
- HandTrackingExample: Fixed PoseNotFound errors that might occur after HandTracking scene changes.
- MLGestureClassification: Fixed errors thrown when hands not detected.
