---
title: 1.4.0-dev1 - SDK Release Notes
sidebar_position: 3
date: 08/30/2023
---

# Magic Leap SDK 1.4.0-dev1

## Release notes

- MLOcclusion Experimental API: Enabled 30Hz refresh rate update when MLOcclusionSettings::max_distance set to be less or equal to 90cm.
- Introduced new data type describing geometric relationship between two coordinate frames - MLPose (ml_types.h).
- MLSnapshot API:
  - Introduced new data type MLSnapshotStaticData to obtain static information about the snapshot system and new API to obtain the data - MLSnapshotGetStaticData();
  - Introduced new API to obtain transform between coordinate frame 'base_id' and the coordinate frame `id' as well as any derivatives that have been calculated MLSnapshotGetPoseInBase().
- MLVoice API: Added additional error code for MLVoiceIntentStartProcessing() to indicate voice input is disabled in system settings.
- MLDepthCamera Experimental API: Updated minimum exposure limit for long range (250us).
