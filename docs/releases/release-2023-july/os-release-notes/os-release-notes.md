---
id: os-release-notes
title: 1.3.1 OS Release Notes
sidebar_position: 0
date: 08/02/2023
---

## Magic Leap OS - 1.3.1 

The features in this release build upon OS [1.3.0-dev2](/docs/releases/release-2023-june/june-release-notes).
## New Features

### Iris ID

Enables the user to seamlessly unlock the device hands-free without having to enter a PIN after the device is locked or goes into standby while ensuring the security of the user's biometric data. This feature is a Preview feature with more enhancements to come in future releases.

### Android Audio APIs

Performance and stability improvements to Android Audio APIs (AAudio, OpenSL ES). Support for multiple capture types for NDK APIs through device id selection:

| Capture Type | Device id |
| --- | --- |
| Voice | 5 |
| Voice Comm | 7 |
| Mixed (Virtual + Voice) | 11 |
| World | 13 |
| Virtual | 15 |

- Available for NDK functions like: `MediaRecorder::setInputDevice()` from libmedia.
- `AudioSource::setInputDevice()` and similar functions available through stagefright.
- `AAudioStreamBuilder_setDeviceId` for `AAudio` and low level.
- `AudioRecord::AudioRecord()` and `AudioRecord::set()`.

### Web Browser

- Implemented Downloads page.
- Browser window is moved in front of the user when resuming the browser application.
- Initial click on URL bar selects full url.

## Enhancements/Feature Improvements

- Resolved visual flicker that can occur on slower networks.
- Added support for 2 new languages to TTS: Spanish and French.

### Dual Role Port Support

The ML2 now supports dual role USB port functionality as defined by the USB Type-C specification (section 4.5.1.3.3). This means that when a USB device is connected to the beltpack, a dialog is displayed that asks the user what data transfer protocol they intend to use.

![USB Device Detected](/img/releases/usb-device-detected.png)

However this creates a point of friction when trying to develop on the device, as this dialog will appear every time the device is rebooted or if the USB port momentarily loses and regains connection. To resolve this problem, developers can disable this dialog from appearing, and the beltpack will default to File Transfer / ML Hub Connectivity.

To disable the USB Dual Role dialog, go to *Settings → System → Advanced → Developer Options* and enable the **Disable USB Detection Dialog** setting.

### Marker Tracker

- Improved pose jitter of static markers significantly.

### Power Management

- Sleep Mode: This release exposes the Sleep power state. The Sleep power state may be entered: (a) automatically, from the Standby power state following the expiration of a user configurable timer or (b) directly, from the Device Modal via a press of the Sleep button. In this release, the Sleep power state is disabled by default.
  - Automatic Power-Off:  This feature automatically powers off the device from the Sleep power state following the expiration of a user configurable timer.  This feature is disabled by default.
  - Battery Saver mode - The release exposes the Battery Saver mode to reduce average power consumption and extend battery life. In this release, the Battery Saver feature is disabled by default.
- April tag rotation has been changed by 180° around the z-axis making April tag poses consistent with ArUco marker and QR code poses.

### Web Platform

- Start Page Implementation: The browser now features a start page to enhance the initial browsing experience.
- New Language Support: Added support for French and Spanish languages across the web platform.
- Chromium Rebase: Chromium has been rebased to the latest available stable upstream version, Chromium 112.

### Capture App

- New Language Support: Added support for French and Spanish languages in the Capture app.

### System Apps

- 3D Model Viewer Integration: A 3D Model Viewer using MRTK/XRI MVP has been integrated into the OS build. The viewer now supports opening and loading multiple 3D files simultaneously.
- Language Display Fix: Spanish and French languages are now displayed correctly across the ManagedProvisioning app.

### APPFW

- TTS Language Support: Added middleware Service support for Text-To-Speech (TTS) in Spanish and in French.

### VBK

- New Language Support: Spanish language support has been added to the MLDK Virtual Keyboard.

### Gamma Correction

- The release includes improvements to the display’s gamma accuracy which improves D65 white point tracking across the entire luminance range of the display. Colors will look slightly warmer with this correction.

### Assist Version 171

- A new version of Assist that now supports Arabic, Japanese & German is available.

### OOBE

- Users can now select Spanish and French as language options during the initial setup process.
- Improved user interface for language selection.
- Resolved various bugs for enhanced user experience.

### Settings

- Added support for new languages in the settings menu.
- Addressed several bugs to ensure smoother functionality.

### Capture

- Capture App:
  - Introducing a live preview feature in the advanced settings, allowing users to see real-time previews while capturing media.
  - Enhanced user experience for a more intuitive capture process.
- QR Reader App:
  - Improved functionality by disabling the global dimmer during scanning, resulting in better scanning performance and accuracy.

## Known Issues

- On first boot after flashing or setup out the box, if ML2 is connected to a USB host device (e.g. PC or Mac), the USB Device Detected dialog will be shown. Please disconnect ML2 from the USB host device and follow the instructions to proceed with device setup.
- The magnetometer data will be presented with hard-iron calibration values that come from a singular test device and are not device-specific. The developers need to test if the reference hard-iron calibration values are good enough for their purposes. Otherwise, they will need to calculate the hard-iron calibration values for their device specifically.
- Upgrade will reset time to current time if the time was changed prior to upgrade.
- Control LED may not blink during a firmware update.
- Empty buffer at the beginning of Android Audio capture adds marginal latency.  No workaround, resolved for following release.
- Only the left or right display turns on after waking from Standby on rare occasions. Workaround by entering/exiting Standby again.
- When a user utilizes more graphics memory (by opening applications, running capture, etc) visual corruption of virtual content can be seen. The recommendation would be for users to make sure only the necessary app they are currently using is open. App developers should be careful to only use the memory necessary, and heavy usage of graphics memory in a single app may still cause this issue.
- Web RTC session disconnects after returning from Standby power state.  Workaround is when using an application that includes Web RTC functionality, disable the Standby power state in Settings before launch.
- After enabling the "Sleep Mode" option under Settings -> Battery, the additional Sleep option will appear Device Modal on the Home screen.  If this option is selected after power up and and before Standby is entered once, the device will show a blank screen and not enter sleep.  To avoid the issue, enter and exit Standby at least once after device powers up.
- Multi-user: Administrator setting controls the secondary user and guest settings for the following: standby, hand tracking.
- We recently identified a software incompatibility issue in our Assist and Wildfire Demo applications, which has resulted in an increase in the transparency of dialog boxes and other images.  The workaround is to stay on OS 1.3.0-dev1 or earlier.  We understand the significance of this issue and the inconvenience it has caused our customers, and we are fully committed to resolving it in the next sprint/release.
- Web RTC session disconnects after returning from Standby power state.  Workaround is when using an application that includes Web RTC functionality, disable the Standby power state in Settings before launch.
- Compute pack may reboot while in Sleep mode
- After device upgrade without erasing user data, sleep mode toggling to ON from setting does not get enabled first time stays OFF, do switching the toggle again to ensure it is toggled ON.
- During controller firmware upgrade from R6 (1.2.0), an incorrect LED pattern will be played on the control
- Administrator setting controls the secondary user and guest settings for the following: standby, hand tracking, voice commands

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on B3E.220619.07-R.107_user (build order #4), you MUST flash B3E.220619.07-R.124_user (build order #5) then B3E.220721.07-R.026_user (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
| 17          | B3E.230616.02-R.121      |
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
