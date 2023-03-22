---
id: os-release-notes
title: December 2022 - OS Release Notes
sidebar_position: 0
date: 12/07/2022
---

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on `B3E.220619.07-R.107_user` (build order #4), you **MUST** flash `B3E.220619.07-R.124_user` (build order #5) then `B3E.220721.07-R.026_user` (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
| 9           | B3E.220818.12-R.417_user |
| 8           | B3E.220818.12-R.085_user |
| 7           | B3E.220721.07-R.027_user |
| 6           | B3E.220721.07-R.026_user |
| 5           | B3E.220619.07-R.124_user |
| 4           | B3E.220619.07-R.107_user |

We recommend you to use ML Hub flashing capability to flash the OS. Contact your Magic Leap customer care representative for any additional support with regards to flashing your device.

## New Features

- Hand tracking is significantly improved compared to previous releases, including improved accuracy, more robust gesture recognition, reduced latency, and greater ability to operate in a variety of lighting and physical environments.
- Applications using MRTK are better supported, and developers should be able to begin application porting and development.
- An improved Home gesture is now available. With this gesture, the user can open, reposition or dismiss the Home menu without using the controller. In this version, UI feedback was added to indicate the length of time the gesture needs to be held before triggering a change in the Home menu.
- OS Navigation with the hands can now be enabled via Settings
  - Ability to enable / disable Hand Tracking in the core OS
  - Ability to enable / disable the Hand Home Gesture in the core OS
- OS Navigation with Hands (Beta), After enabling this feature in Settings, users will be able to:
  - Interact with the Magic Leap OS with their hands using raycast and the Pinch gesture
  - Scroll the list of applications in the Home menu, select one, launch it and close it
  - Interact with system dialogs and notifications
  - Unlock the device using Android Pin Lock
  - Select a WiFi network and use the virtual keyboard to enter a WiFi password
  - Use the Home gesture to return to the Home menu.
  - NOTE: Some OS applications are not yet supported by this feature and should be used with the controller:
    - First-time setup
    - MDM
    - Custom Fit
    - Capture
    - Display Calibration
    - Spaces
    - Web Browser (Beta)
  - NOTE: User interface improvements and broader support is planned for future releases.
- Web Browser (Beta)
  - Single window web browser.
  - Supports WebXR
  - Has Third-Eye camera available to websites.
  - Support for Google Meet and Microsoft Teams.
- 50Hz alternating current (AC) electric grid frequency support
  - The alternating current (AC) electric grid frequency varies throughout the world (50 Hz or 60Hz). Indoor lighting flickers in accordance with the AC mains frequency. Since ML2 camera systems capture frames at specified frequencies, when the frequency of camera frame capture is not aligned with the rate of indoor lighting flicker, artifacts can appear in the captured images and degrade the performance of the ML2 device.
  - This feature exposes a user setting that allows for the selection of either a country or a specified AC grid frequency (50 Hz or 60Hz).
  - At this time, all ML2 devices will be shipped in 60 Hz mode.
  - If a user is in a 50 Hz AC region of the world and banding artifacts are noticed when using the RGB camera, particularly in video capture mode, the user should go to Settings | System | Capture & Device Streaming | Power Grid Frequency or Settings | Battery | Power Grid Frequency and select either a 50 Hz country or the explicit 50 Hz setting.
- Power State Management
  - To increase battery life, this release adds the Standby state to the Compute Pack’s power state machine.
  - The Compute Pack will transition from the Normal Operation to Standby power state when the ML2 Headset is off-head and the Compute Pack and Controller are at rest.
  - The Compute Pack will transition from Standby to Normal Operation in response to the donning of the ML2 Headset (eye detection) or a short (0.5 second) press of the Compute Pack’s power button.
  - User power management settings have been expanded to include Compute Pack Standby and Controller Standby enable/disable switches. By default, these switches will be in the ‘disabled’ position.
- Eyetracking
  - The accuracy of the eyetracker has been improved, but you will need to re-calibrate in the Custom Fit app to get the improved performance.

## Known Issues

- Concurrent use of Hand Tracking and Controller in the Core OS is a work in progress, we advise using one or the other during the beta phase of the hand tracking feature for the best user experience.
- After (re)boot, reconnect or waking up from standby, the controller can fail to respond
  - Temporary workaround: Reboot the controller
- Change in the serialization scheme for this OS release interrupts backward compatibility of maps
  - ML2 base version: All maps stored on the device with a build prior to this are not compatible. When updating to this OS, maps stored on the device will need to be removed, and previously mapped spaces will need to be remapped.
  - ML2 Developer and Enterprise version: OS releases prior to this are not compatible anymore with AR Cloud. Maps stored in AR Cloud deployments created with OS releases prior to this will not be compatible, and will need to be replaced by new maps.
- When dismissing the Voice Input help dialog, System UI may go down. The help dialog will disappear, and when SystemUI restarts, the user will be presented with a message indicating that the controller is connected.
- When upgrading from an older release, the device may require a device reset operation (see Device reset/recovery)
- When switching language settings to Arabic, App-specific voice intents with US English may halt from working.
- If a device locks down just after enrolling with an MDM provider, unlocking with the controller Home button may not work.
- System UI may crash after dismissing voice help dialog
- Wacom touch rings may not work with device
- If Standby mode is turned on, the device may enter Standby mode if the user is wearing Rx inserts.
- When creating a PIN for the first time, delete character won't work
- Playing transcoded media files may occur with low frame rates.
- Capturing microphone feed with 'adb shell mlcapture raw -t 200' may slow the system down.
- Content captured from the third eye camera may have some of its color information lost.
- Using remote viewer may result in display artifacts up to a permanent display freeze
- Home menu appearance may be wrong when recording video content
- Device may not properly unlock from Standby mode and require a reboot
- 6DoF may not recover after exiting an App and interacting with Home Menu. If this occurs, place the Controller on a desk for ~30 seconds to recover.
- Browser video feeds (such as with MS Teams) may not resume after launching yarn starit, then launching an App, then resuming the video feed.
- If the device is locked after a time out and if the user enters the PIN to unlock , the lock screen may be shown again

