---
title: 1.2.0-dev1 - SDK Release Notes
sidebar_position: 2
date: 02/22/2023
---

# 1.2.0-dev1 SDK Release Notes

This document contains the ML C SDK release notes, including the notes for the core SDK integration.

## General Notes

- New Systems Notification Manager API to enable and disable system notifications. This API is only supported for select device SKUs.
- ML Voice API is extended to support voice intent slots.
- ML Gaze Recognition API is extended to support left and right eye blink behaviors.
- Enabled a way to determine device SKU type by using standard Android PackManager hasSystemFeature() API.

## Bug fixes

- Fixed a bug preventing acquisition of accelerometer sensor data for compute pack and headset via standard Android SDK/NDK APIs.
- Fixed a bug where ML Depth Camera API was reporting pose with incorrect orientation.
- Updated API documentation for MLAudioGetMasterVolume() to reflect the correct volume range.

## Known issues

- MLGetResultString() returns “Unknown” for MLResult_IncompatibleSKU error code.
- MLGazeRecognition: Closing one eye causes the opposite eye-in-skull position to become zero.

