---
id: os-release-notes
title: October 2022 - OS Release Notes
sidebar_position: 0
date: 10/03/2022
---

**B3E.220818.12-R.046-R.417**

Don’t forget: Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Install Instructions

Before flashing make sure to power cycle your device:

1. Unplug the device from the computer.
2. Hold down the power button for 20 seconds.
3. Once the device is powered down, press the power button and wait for the device to boot.
4. Connect the device to your computer.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on `B3E.220619.07-R.107_user` (build order #4), you **MUST** flash `B3E.220619.07-R.124_user` (build order #5) then `B3E.220721.07-R.026_user` (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint |
|---|---|
| 6 | B3E.B3E.220818.12.12-R.417_user |
| 5 | B3E.220818.12-R.085_user |
| 4 | B3E.220721.07-R.027_user |
| 3 | B3E.220721.07-R.026_user |
| 2 | B3E.220619.07-R.124_user |
| 1 | B3E.220619.07-R.107_user |

More details can be found in the device upgrade guide via [The Lab 2.0](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-os-installer.md)/ or using [Android Debug Bridge](/versioned_docs/version-31-Aug-2023/guides/device/updating-the-os/device-flashing-guide.md).

## Known Issues

- Audio

  - The user voice pitch analysis is causing intermittent crash of the audio capture service.

  - Noise produced when manually disconnecting a bluetooth headset via the settings menu

  - Inaccurate reporting of volume on device when first connecting to bluetooth headset

  - inaccurate setting of volume when disconnecting from bluetooth headset

  - extraneous and non-functional 85dB volume warning applied when increasing volume past AVRCP value of 7 while connected to bluetooth headset

- Marker Tracking

  - There may be issues causing crashes with backwards compatibility of the Marker Tracking API. If you’re having issues, we propose upgrading to the newest available SDK version.

  - When using relatively small Aruco markers the 5x5 dictionary works better than the 4x4 dictionary.

  - Using the correct real world marker size in the API is crucial to get correct poses. Using wrong marker sizes can cause tracked poses to jump around.

- WebXR Viewer

  - Android permissions are not shown to the user and are denied. Access to the camera and microphone will not be granted or possible from websites.

  - Error pages are not correctly displayed in Arabic

  - if the user re-enters “AR Mode” or “VR Mode” too many times without closing the WebXR Viewer the application could be close

- Controller

  - If flashing doesn't end and gets stuck, unplug the controller then plug it back in.

  - Status bar showing percentage values in the Home menu may show incorrect values after disconnecting from a charger.

- Home Menu

  - In Networks, with Japanese or Arabic languages selected in Virtual Keyboard, some typed characters may display as squares.

  - Orientation occasionally not regained after switching from Arabic language back to English, or from English back to Arabic.

  - The Spaces tool is labeled as Mapping Tool in the Perception panel.

  - The Bluetooth enable/disable toggle behavior may be inverted (opposite of the actual state).

  - Voice commands are set to off by default.

  - Shift button in Virtual Keyboard works as a Caps Lock button

  - If QR Scanning fails repeatedly, rebooting the device helps improve performance.

  - Running an App that relies on Marker Tracking, then running an app that relies on CV camera may result in App issues. Try rebooting the device in between app launches if this occurs.

  - During First Time experience device setup (OOBE) adding a hidden network will cause OOBE to crash. We recommend users to connect to a regular non-hidden network during OOBE, then going to Settings to add it later.

  - Anchors previewed with the Spaces app that are created with an indefinite TTL are shown as expiring on '1/1/1970' (Unix epoch).

  - If Headpose is irrevocably lost, restart the device.

  - The estimates for charging and discharging times (in Settings) may not reflect user experience, as we are still fine tuning the power consumption

  - Some system apps may still display segmented dimmer, even if dimming is disabled through adb commands.

  - While getting the device into Fastboot Mode, the looping LED pattern on the Light pack might get stuck. The pattern would be reset when rebooting the device after fastboot.

