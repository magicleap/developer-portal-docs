---
title: 1.3.0-dev2 - SDK Release Notes
sidebar_position: 3
date: 06/14/2023
---

# Magic Leap SDK 1.3.0-dev2

## Release notes

- New MLOcclusion API (experimental).
- MLSpace API: updates to include CFUID in the MLSpaceLocalizationResult to provide pose data.
- MLSpatialAnchor API: deprecated MLSpatialAnchorGetLocalizationInfo(), replaced with MLSpaceGetLocalizationResult().
- MLHandTracking API: added support for unfiltered keypoints.
- MLHandTrakcing API: deprecated MLHandTrackingCreate(), replaced with MLHandTrackingCreateEx().
- Updated CAPI Application Framework and CAPI Samples apps to remove the usage of deprecated APIs.

## Bug fixes

- MLMarkerTrakcing API: update to fix the marker orientation for April tags.
- MLGazeRecognition API: Closing one eye causes the opposite eye-in-skull position to become zero.