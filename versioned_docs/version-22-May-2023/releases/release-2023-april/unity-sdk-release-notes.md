---
title: 1.6.1 - Unity SDK Release Notes
sidebar_position: 3
date: 05/17/2023
---

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Magic Leap SDK Version 1.2.0
- Unity Version: 1.6.1

# Unity® Package 1.6.1

## Update

- A prior release inadvertently allowed developers to bypass the minimum clipping plane in Unity. We have restored the enforcement of the minimum clipping plane to 37cm.

# Unity® Package 1.6.0

## Features

- Added MLNotifications API to suppress default notifications in medical SKUs.
- Added support for handling and selecting multiple language tracks for subtitles.
- MLWebView: added open and close callbacks for popup tabs.

## Bug Fixes

- Fixed the controller ray not following the totem right after starting Unity app.
- Fixed broken link in README (#8).
- Fixed issue with MLMediaPlayerBehavior where calling StopMLMediaPlayer() would make videos unplayable.
- Fixed camera errors after the device enters sleep mode.
- Fixed issue with MLMarkerTracker not working after device enters sleep mode.
- Fixed issue with creating spatial anchors with an expiration value of 0 causing errors.

## Known Issues

- MLWebRTC: When disconnecting from a session, the camera does not shut down cleanly if the NativeSurface buffer format was used, causing the application to hang for as much as 30 seconds.
- MLAnchors API returns the same anchor poses after a headpose reset

