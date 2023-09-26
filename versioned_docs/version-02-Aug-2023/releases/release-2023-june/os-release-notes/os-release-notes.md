---
id: os-release-notes
title: June 2023 - OS Release Notes
sidebar_position: 0
date: 06/14/2023
---

## Magic Leap OS - June 2023 - B3E.230526.01-R.026

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so. 

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on B3E.220619.07-R.107_user (build order #4), you MUST flash B3E.220619.07-R.124_user (build order #5) then B3E.220721.07-R.026_user (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
| 16          | B3E.230526.01-R.026      |
| 15          | B3E.230427.10-R.023      |
| 14          | B3E.230330.11-R.043      |
| 13          | B3E.230302.12-R.024      |
| 12          | B3E.230202.11-R.036      |
| 11          | B3E.221020.13-R.039      |
| 10          | B3E.221117.04-R.028      |
| 9           | B3E.220818.12-R.417_user |
| 8           | B3E.220818.12-R.085_user |
| 7           | B3E.220721.07-R.027_user |
| 6           | B3E.220721.07-R.026_user |
| 5           | B3E.220619.07-R.124_user |
| 4           | B3E.220619.07-R.107_user |

We recommend you to use ML Hub flashing capability to flash the OS. Contact your Magic Leap customer care representative for any additional support with regards to flashing your device.

## Device Reset (hardware recovery)

When device (wearable and/or compute pack appear frozen or unresponsive), use the following sequence to restart:

1. Remove USB-C cable from the device
2. Press and Hold the power button for at least 20 seconds
3. Release the power button
4. Wait a few seconds, then restart the device by tapping/releasing power button again

## New Features

### Android Audio APIs
- Performance and stability improvements to Android Audio APIs (AAudio, OpenSL ES).
Support for multiple capture types for NDK APIs through device id selection:

| Capture Type	| Device id |
| ------------- | --------- |
| Voice	        | 5         |
| Voice Comm	  | 7         |
| Mixed (Virtual and Voice) |	11  |
| World	| 13 |
| Virtual |	15 |

- Available for NDK functions like: MediaRecorder::setInputDevice() from libmedia,
- AudioSource::setInputDevice() and similar functions available through stagefright,
- AAudioStreamBuilder_setDeviceId for AAudio and low level
- AudioRecord::AudioRecord() and AudioRecord::set().

## Enhancements/Feature Improvements

- April tag rotation has been changed by 180° around the z-axis making April tag poses consistent with ArUco marker and QR code poses.
- World Platform
  - Start Page Implementation: The browser now features a start page to enhance the initial browsing experience.
  - New Language Support: Added support for French and Spanish languages across the web platform.
  - Chromium Rebase: Chromium has been rebased to the latest available stable upstream version, Chromium 112.
- Capture App
  - New Language Support: Added support for French and Spanish languages in the Capture app.
- System Apps
  - 3D Model Viewer Integration: A 3D Model Viewer using MRTK/XRI MVP has been integrated into the OS build. The viewer now supports opening and loading multiple 3D files simultaneously.
  - Language Display Fix: Spanish and French languages are now displayed correctly across the ManagedProvisioning app.
- APPFW
  -  TTS Language Support: Added middleware Service support for Text-To-Speech (TTS) in Spanish and in French.
- VBK
  - New Language Support: Spanish language support has been added to the MLDK Virtual Keyboard.
- Gamma Correction
  - The release includes improvements to the display’s gamma accuracy which improves D65 white point tracking across the entire luminance range of the display. Colors will look slightly warmer with this correction.
- Power Management
  - Sleep Mode: This release exposes the Sleep power state. The Sleep power state may be entered: (a) automatically, from the Standby power state following the expiration of a user configurable timer or (b) directly, from the Device Modal via a press of the Sleep button. In this release, the Sleep power state is disabled by default.
  - Automatic Power-Off: This feature automatically powers off the device from the Sleep power state following the expiration of a user configurable timer. This feature is disabled by default.
  - Battery Saver mode - The release exposes the Battery Saver mode to reduce average power consumption and extend battery life. In this release, the Battery Saver feature is disabled by default.

## Known Issues

- We recently identified a software incompatibility issue in our Assist and Wildfire Demo applications, which has resulted in an increase of transparency of dialog boxes and other images. The workaround is to stay on OS 1.3.0-dev1 or earlier. We understand the significance of this issue and the inconvenience it has caused our customers, and we are fully committed to resolving it in the next sprint/release.
- When creating Marker Tracker or updating its settings, an error message like this ERR: MarkerTracking: Version: 5 is being printed. It should be ignored when debugging.
- Web RTC session disconnects after returning from Standby power state. Workaround is when using an application that includes Web RTC functionality, disable the Standby power state in Settings before launch.
- Compute pack may reboot while in Sleep mode
- Controller may not automatically reconnect when the Compute pack exits Sleep mode.
- During controller firmware upgrade from R6 (1.2.0), an incorrect LED pattern will be played on the control
- A dministrator setting controls the secondary user and guest settings for the following: doze, hand tracking, voice commands

## Adding New Entitlements

### Adding new entitlements to existing license keys

As part of the April release plan, new entitlements were added to the ML Developer Pro, ML Enterprise (Subscription) and ML Enterprise (Perpetual) licenses: Local Multi User Login, Manage App Signing Certificates, and Remote Render Client Access.

If you have already activated one of the above mentioned licenses on your device, please follow these steps to access new features:

 1. Existing license was activated in Online mode  
 a. Upgrade OS to April's build 1.2.0 (build number B3E.230330.11-R.043)  
 b. Reboot device  

 2. Existing license was activated in Offline mode  
  a. Upgrade OS to April's build 1.2.0 (build number B3E.230330.11-R.043)  
  b. Return the license and reactivate it with the same key  
  c. Reboot device

### Feature description:

Local multi-user is the ability for the device to have more than one user. There can be up to 8 users to include a guest user. Benefits to creating a user profile are saving eye calibration data and iris unlock data (when available).

