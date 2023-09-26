---
id: os-release-notes
title: September 2023 - OS Release Notes
sidebar_position: 2
date: 09/26/2023
---
# September 2023 1.4.0-dev2 OS Release Notes
## ML2 OS Release B3E.230907.10-R.033 (user)

## New Features and Enhancements

### Better Perfetto logging
Previously, Perfetto traces on applications would not report all trace data sent by kernel and user processes. We have addressed this issue alongside the security team and now Perfetto captures will show all relevant data.

### Fixed TE capture artifacts
When running a TE capture alongside the remote viewer application on the device, the recording would include the recording controls UI (stop button and frame edges) meant only for the user's eyes. We have fixed this edge case and now the recording should only contain virtual content.

### Changes on how to enable Draw Tracing for GL/GLES apps
We have renamed a system property used to enable draw tracing on ML2 for added clarity. Users should now use adb shell setprop ml.graphics.tracing.gl.enable 1 to enable Draw Tracing for OpenGL and GLES applications run on ML2.

### Radeon GPU Profiler (RGP) released
We have released the latest tested version of Radeon GPU Profiler or RGP via the ML Hub for Windows. This tool allows for fine grained, low-level profiling of Radeon GPUs. The tool is compatible with Vulkan applications run on ML2.

### Fixed Auto Display Brightness levels
The feature that calculates display brightness based on ambient light sensor readings had a bug. It was causing the ML2 to overshoot and keep it at high brightness levels when high brightness levels were not warranted. This was causing blue haze effect on dim environments as well as increasing likelihood for thermal warnings.

### AR Cloud Localization and Mapping Services
Version update of the localization and mapping services to version 2.0.1

- Version 2.0.1. changes:
    - Minimum input map size changed (reduced) to minimum 20 keyrigs per individual uploaded map.
    - Updated frame descriptors for increased localization robustness.

### Fixed Depth Camera Short Range Exposure Control
The ML C-API for the depth camera had a bug where if the user programmed the camera to run in short range mode with a specific exposure, frames returned by the API could be generated using the wrong exposure value. As of Sprint 27, when programming the depth camera to run in short range mode with a specific exposure value, short range frames returned by the API are correctly generated using the programmed exposure.

## Known Issues

**Don't forget**: Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

- Hand Tracking doesn't activate after sleep
    - If hand tracking is enabled, and then the device is put to sleep (or goes to sleep automatically). If the controller is switched off during this period, then when the device wakes up, hand tracking will not work until the controller is turned on. The fix for this bug will be incorporated into Sprint28 / R8 release.
    - Hand Tracking test app intermittently crashes upon launch
    - Virtual contents shakes/swims as user moves away from the content. When user walks and stops later, the content stabilizes with a small jump.

- BT Earbud connection may be lost after sleep
    - If Bluetooth earbuds (or headphones) are connected when the device goes to sleep, upon waking the Bluetooth connection to the earbuds may be lost, causing audio to play out of the device speakers until the earbuds are manually reconnected.

- AR Cloud Localization and Mapping Services
    - "Loading shared spaces" message is shown and doesn't disappear, may require device reboot to clear.
    - Extended localization feedback (error codes and confidence field) is not yet fully used in this release. Specifically, the the error code indicating that the user has left the mapped area is not yet used in this release, and the localization confidence is set to a default value and does not change.
- On-Device Localization
    - Extended localization feedback (error codes and confidence field) is not yet fully used in this release. Specifically, the the error code indicating that the user has left the mapped area is not yet used in this release, and the localization confidence is set to a default value and does not change.
- Remote Rendering
    - Remote Rendering will disconnect from a host computer when going to sleep, or being backgrounded to the Home Menu. When woken/refocused, Remote Rendering may rarely exhibit "Laggy" input. 
    - This can be resolved by returning to the home menu, selecting the "X" button to terminate the Remote Viewer, and reopening the app. The Remote Viewer should immediately reconnect to the host computer without otherwise interrupting an ongoing user session, and a user may continue using it normally.
    - When exiting either doze or sleep modes or relaunching remote viewer; there are visual artifacts around the no laser pointer once reconnected. To workaround, close and reopen remote viewer
    - After flashing, Remote Rendering action tile may not be displayed immediately
- Magnetometer Data
    - The magnetometer data will be presented with hard-iron calibration values that come from a singular test device and are not device-specific. The developers need to test if the reference hard-iron calibration values are good enough for their purposes. Otherwise, they will need to calculate the hard-iron calibration values for their device specifically.
- System
    - Browser history may be lost upon upgrade
    - Helio Prism may exit to Home when waking from Sleep Mode. Workaround is to reenter Google Meet, and login account again
    - Helio Prism loses 6Dof cursor after captured media. Workaround is to press Bumper button to regain 6DoF cursor focus
    - When logged in as Admin account and attempt to install any sdk app to a specific User the app is unavailable. The workaround is to log out as Admin, log in as the desired user and install the SDK app.
- Sleep Mode
    - Device may reboot on attempt to recover from Sleep Mode
    - Display may not resume from Sleep Mode, restart required

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you are on `B3E.220619.07-R.107_user` (build order #4), you **MUST** flash `B3E.220619.07-R.124_user` (build order #5) then `B3E.220721.07-R.026_user` (build order #6) for your device to work properly with that OS.

### Build Order

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
| 19          | B3E.230907.10-R.033      | 
| 18          | B3E.230810.09-R.028      | 
| 17          | B3E.230616.02-R.121      |
| 16          | B3E.230526.01-R.026      |
| 15          | B3E.230427.10-R.023      |
| 14          | B3E.230330.11-R.043      |
| 13          | B3E.230302.12-R.024      |
| 12          | B3E.230202.11-R.036      |
| 11          | B3E.221020.13-R.039      |
| 10          | B3E.221117.04-R.028      |


We recommend you to use ML Hub flashing capability to flash the OS. Contact your Magic Leap customer care representative for any additional support with regards to flashing your device.

## Device Reset (hardware recovery)

When device (wearable and/or compute pack appear frozen or unresponsive), use the following sequence to restart:
Remove USB-C cable from the device
Press and Hold the power button for at least 20 seconds
Release the power button
Wait a few seconds, then restart the device by tapping/releasing power button again