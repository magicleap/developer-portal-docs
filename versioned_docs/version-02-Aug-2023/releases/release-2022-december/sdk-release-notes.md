---
title: 1.1.0-dev2 - SDK Release Notes
sidebar_position: 2
date: 12/07/2022
---

This document contains the Magic Leap SDK release notes including the notes for the core SDK integration.

## General notes

- MLGraphicsFrameParamsEx.focus_distance being set to 0 will not return MLResult_InvalidParam. Developers should still provide a meaningful focus_distance that is not 0.
- MLMediaCCParserSetDisplayChangedCallback and MLMediaCea708ParserSetEmitEventCallback APIs can now be used to unset the callback by passing NULL.
- ML WebView API was extended to support two new features.
- API to pause and resume individual web view sessions.
- API to create webview with web inspector enabled or disabled at creation time.
- Application framework now provides a new API, KeepScreenOn(), for the applications to acquire a wake lock.
- Lifecycle sample updated to acquire the wake lock.
- A new WebXR launcher sample shows how to build a WebXR content launcher app. The application will start Magic Leap WebXR viewer and follows the app’s life cycle.
- Mixed reality camera sample was updated to allow capture when the app is paused.
- Audio input sample was updated to allow capturing audio when the app is paused.
- Audio output sample was updated to demonstrate the usage of bypass of master volume.

