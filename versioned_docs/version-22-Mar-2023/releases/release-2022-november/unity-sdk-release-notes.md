---
title: 1.1.0-dev1 - Unity SDK Release Notes
sidebar_position: 3
date: 11/09/2022
---

## SDK Delivered via The Magic Leap Hub

- Unity Example Project
- Magic Leap 2 Unity SDK Package
- Magic Leap SDK Version 1.1.0-dev1
- Unity Version: 2022.2.x

## Features

- Unity Magic Leap XR Plugin dependency updated to 7.0.0-pre.1
- Using Segmented Dimmer now requires an explicit MLSegmentedDimmer.Activate() call in order to request the Graphics API provide AlphaBlend frames.
- Per-frame intrinsics via for Mixed Reality Configured MLWebRTC/MLCamera are now available.
- Controller 6dof state filtering is now available.
- Unity XRI haptics now supported.
- SettingsIntentsLauncher can be used to open certain Android Settings views directly from Unity.
- Added new MLMediaPlayer OnVideoRendererInitialized callback for when video renderer is fully initialized.
- Added GetData function to AudioInputBufferClip that does not automatically wrap the audio data and instead sends you exactly what is in the audio buffer.
- Added fifth key point for the four fingers not including the thumb.
- Key points now have rotational data

## Bug Fixes

- Fixed bug in WebRTC where toggling local video off and then back on during a connected session did not work.
- Fixed bug in WebRTC which prevented a session from persisting between scene changes.
- Fixed bug in WebRTC where Mixed Reality capture showed a transparent vertical bar on the side of the image.
- Fixed MLSegmentedDimmer behavior where disabling dimmers using the IsEnabled property did not work as expected. The property has been marked Obsolete and replaced with a SetEnabled() method which turns on and off the MeshRenderers for objects on your Segmented Dimmer layer.
- Fixed issue with WebView's first tab loading before service is connected.
- Fixed Meshing Subsystem using invalid handles if device headpose gets reset.
- Corrected some MLCamera event delegates being incorrectly defined.
- Fixed issue in WebView where adding too many tabs caused them to begin rendering outside of UI bounds.
- MagicLEapHandDevice is no longer derived from XRController.

## Deprecations & Removals

- Numerous MLSegmentedDimmer API properties have been marked Obsolete as they are non-functional and will be removed in a future release.

## Known Issues

- Marker Tracker's marker rotations upside down.
- Headset reports position at 0,0,0 on Start().
- Wacom touch ring appears to not be working.
