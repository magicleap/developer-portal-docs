---
id: os-release-notes
title: July 2022 - OS Release Notes
sidebar_position: 0
date: 07/13/2022
---

**ML2 OS Release B3E.220619.07-R.107**

Don’t forget: Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Install Instructions

This OS can be installed on your device via the [ML Hub](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-os-installer.md)/ or using [Android Debug Bridge](/versioned_docs/version-31-Aug-2023/guides/device/updating-the-os/device-flashing-guide.md).

## New Features

- Voice Input: support ML system voice commands (w/ wake-word “Hey Lumin”) along with in-app voice commands (w/o wake-word) simultaneously. The active ML system voice commands are selected by the app when an app is launched. ATTN: Voice commands are disabled by default and only support EN-US.
- Audio Output: we are now applying additional output speaker conditioning to ensure device speakers play back at equal levels, as well as present audio content more faithfully to the listener. A slight decrease in total perceived level may be observed. We will continue to fine-tune this speaker conditioning to deliver the best quality sound at the user’s ears.
- Spatial Mapping: command-line support has been added for common mapping functionality as well as exporting an on-device map and spatial anchors from one device and importing it on another device. A list of commands and options can be seen via $ adb shell mlmapping

## Known Issues

- Captive Portal/OAuth Windows: the cursor and raycast are not conformant to UX spec BROW-6607.
- User will ONLY be able to invoke "hey lumin" and voice commands in English even if the language is set to different language from US-EN SET-4368.
- The Settings - Connected Devices options for USB shows up as Disabled. As a workaround, user can go to System->Developer Options -> Default USB Configuration.
- Some of the Developer Options in Settings may not work properly.
- The following options under Network - Wi-Fi preferences do not work: Turn on Wi-fi automatically when near high-quality saved networks, Wi-Direct, Network rating provider.
- The device may hang on a black screen (or reboot) if one attempts to capture video with controller.
- User must not be able to invoke "hey lumin" and give voice commands if language is set to anything other than US-EN.
- Hand Tracking quality may decrease if user's hands start interacting with one another.
- Headpose might lose track slightly more often than in previous releases. Especially in areas with limited texture or close to a wall.
- Picking the device from a desk in low environment scenarios can cause menus and content to fly away.
- Dynamic dimmer may visibly fluctuate between dark and light. The intensity of the effect depends on the Maximum Dimmer setup in Settings.
- Low FPS on capture preview for 4k videos.
- Developer mode is enabled on by default.

