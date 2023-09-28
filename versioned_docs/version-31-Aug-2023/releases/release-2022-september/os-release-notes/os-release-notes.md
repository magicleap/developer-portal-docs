---
id: os-release-notes
title: September 2022 - OS Release Notes
sidebar_position: 0
date: 09/12/2022
---

**B3E.220818.12-R.085**

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
| 8 | B3E.220818.12-R.085_user |
| 7 | B3E.220721.07-R.027_user |
| 6 | B3E.220721.07-R.026_user |
| 5 | B3E.220619.07-R.124_user |
| 4 | B3E.220619.07-R.107_user |
| 3 | B3E_220523.01-R.041_userdebug |
| 2 | B3E_220424.01-R.037_userdebug |
| 1 | B3E.220321.01-R.068_userdebug |

More details can be found in the device upgrade guide via [The Lab 2.0](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-os-installer.md)/ or using [Android Debug Bridge](/versioned_docs/version-31-Aug-2023/guides/device/updating-the-os/device-flashing-guide.md).

## New Features

- Voice intent
  - Support Japanese besides US English
  - Use the new wake-word “Hey Magic Leap” in US English
- Text-To-Speech
  - Support Android TTS APIs for US English and Japanese.
- Aruco marker and April tags
  - Tracking possible with wcams which allows larger FOV and more robustness
  - Advanced tracking options to balance performance and accuracy of the marker poses (still experimental)
- QR codes and barcodes
  - Resolution hint that let’s the user control RGB camera resolution in order to decode smaller codes

## Known Issues

- WebXR viewer was released with an incorrect application id. Going forward when launching the WebXR Viewer please use the following application ID `com.magicleap.helio_webxrviewer`

- Controller may not go into pairing mode with three button press (home+bumper+trigger), requires a reboot via home button to bring controller under pairing mode.

- adb commands for controller pairing won’t work, so use USB-C-C cable to pair the controller.

- "Allow USB debugging" dialogue doesn't close when "allow" or "cancel" is selected when the device is kept idle on the table for 30 minutes or more. Reboot the device to get out of this issue.

- 2nd Calibration attempt with custom fit app will always succeed unless app storage isn't cleared. As a work around, clear app storage from settings and run the calibration flow again.

- Denying permissions dialog in Custom Fit app will still continue with fit flow

- These settings options have the following issues:

- Toggles: Wait for debug, Verify apps over USB, Disable Bluetooth A2DP hardware offload are disabled.

- Feature flags options are empty.

- Toggle Disable HW overlays not working and freeze the settings need to reboot in order to make it back.

- Headpose may be lost if device is idling on a desk for 15+ minutes

- Switching from wearable → Bluetooth → wearable audio output device caused the audio to sound distorted with the system UYI. As a workaround, switch to another output device from the wearable → Bluetooth → Wearable

- Left / Right channels may reverse after a few minutes of device usage. If this happens rebooting the device addresses the issue.

- If the user exits (pause/stop/kill) the Hand Calibration App before completing the process, the hand calibration algo will run forever, causing unknown behavior with the device. If this happens, reboot the device.

- Clearing Site level permissions for WebXR is not functional ie. this doesn’t work “`adb shell am start -e settings.ar ASK -n com.magicleap.helio_webxrviewer/.WebXRViewerActivity https://immersiveweb.dev`

- The Hand Calibration app has some misleading copy, this will be updated in the next release.

- If the user exits (pause/stop/kill) the Hand Calibration App before completing the process, the hand calibration algo will run forever, causing unknown behavior with the device. If this happens, reboot the device. Workaround is to reboot the device.

- Bug with sound from home menu UI occasionally comes through 'reverby'.

