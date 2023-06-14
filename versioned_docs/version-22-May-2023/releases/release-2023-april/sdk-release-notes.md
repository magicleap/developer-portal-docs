---
title: 1.2.0 - SDK Release Notes
sidebar_position: 3
date: 04/24/2023
---

# 1.2.0 SDK Release Notes

This document contains the ML C SDK release notes, including the notes for the core SDK integration.

## General Notes

- ML Head Tracking API deprecations:
  - Deprecated MLHeadTrackingError, replaced with MLHeadTrackingErrorFlag;
  - Deprecated MLHeadTrackingMode, replaced with MLHeadTrackingStatus;
  - Deprecated MLHeadTrackingState, replaced with MLHeadTrackingStateEx;
  - Deprecated MLHeadTrackingGetState, replaced with MLHeadTrackingGetStateEx.
- New API to access Eye Camera data.
- New Eye Camera sample application.
- New API to manage Magic Leap Spaces.
- Added three new options for spectral analysis in ML Audio API:
  - MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumBark;
  - MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumMel;
  - MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumThirdOctave.
- Added experimental support for Code 128 to Marker Tracking API.
- Added eye openness data to ML Eye Tracking API (please see below for the known issue).
- Added support for depth data with IR projector enabled to ML Depth Camera API.
- Altimeter sensor data is now available via Android SDK and NDK APIs.

## Bug Fixes

- Fixed a bug preventing acquisition of accelerometer sensor data for compute pack and headset via standard Android SDK/NDK APIs.
- Fixed a bug where ML Depth Camera API was reporting pose with incorrect orientation.
- Updated API documentation for MLAudioGetMasterVolume() to reflect the correct volume range.

## Known issues

- ML Gaze Recognition API: Closing one eye causes the opposite eye-in-skull position to become zero.
- ML Eye Tracking API: Eye openness values return with 0 or 1.
- ML Marker Tracking API: Apriltag pose is upside down.

