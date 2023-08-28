---
id: os-release-notes
title: March 2023 - OS Release Notes
sidebar_position: 0
date: 03/22/2023
---

## Magic Leap OS - March 2023 - B3E.230302.12-R.024

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on `B3E.220619.07-R.107_user` (build order #4), you **MUST** flash `B3E.220619.07-R.124_user` (build order #5) then `B3E.220721.07-R.026_user` (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
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

## New Features

- The Browser can set an alternate UserAgent that can also be customized.
- There is a new Home Gesture (an addition to the one already exists). It requires a two-hand Wrist Tap. Now Home Gestures are enabled by default in User's Settings.

## Enhancements/Feature Improvements

- Standby Power State - Default ON or OFF: Settings changed to support Standby ON by default for 'clean' (erase userdata) flashing of the latest software build and for factory reset use case. For upgrade use case (e.g., upgrading from a prior software release without erasing user data), the existing Standby setting will be retained.
- The Browser window is curved.
- Users can reposition the Browser window.

## Known Issues

- Audio
  - Bluetooth hearing aids are supported, as are Bluetooth A2DP earbuds. However after using Bluetooth A2DP earbuds, the connection to Bluetooth hearing aids won't work within the same session (but will work after a reboot).
  - The In-App Voice Intents failing for Arabic speakers when launching the Voice Commands app
- Browser Feed
  - Downloading PDF files could crash the browser.
- System/Settings
  - Sound effect missing when launching Home Menu after another application.
  - Manually configured dates/times set in the past are not preserved after update/upgrade. Date will be set to the current date as expected.
  - User can switch to guest user from lock screen even if the user doesn’t have multi-user entitlement in license or a license on device.
  - In the Custom Fit application, when Arabic is the selected system language, specific screens may have a layout where the upper tabs overlap the "X" button, preventing the use of that button to exit the app. Workaround: press the Home button on the controller, and once minimized, the Custom Fit app can be closed by using the "X" button next to the app name in the launcher.
  - 6DoF tracking may not work after control flashing or restart. To correct the issue press and hold the control home button until control restarts.
  - Magic Leap license agreement is not translated into German.
  - Clicking on SystemUI notifications on the network details page during first-time device setup after entering an incorrect password will result in a missing 'Continue' button. Users won’t be able to finish user-setup. Users should not click on any system UI notifications during first-time setup.
- Virtual Keyboard
  - Japanese: Suggestions are applied when a user hovers over them. Initial input is substituted with suggestion and not available anymore. Suggestions list closes only when the user clicks on another option.
  - Virtual keyboard doesn’t appear if the user enters an incorrect password when trying to change or remove password. Workaround: Press back and unlock with the correct password.
- Video Capture
  - When capture is taking video, this takes extra resources from the device. At times when the load on the GPU is too much, this may cause corrupted frames to be seen in both the capture and on screen. If these artifacts are noticed, it is recommended that the capture be retaken after closing all unnecessary applications to limit the used resources of the device.
  - Advanced Capture does not stop Video Capture upon clicking "stop" and is followed by "adb" error.
- Virtual Keyboard
  - When running Renderdoc for applications using the C-API, you may see an error causing the application to crash. This seems to be due to interactions with the other layers on the device, so turning off all validation layers can help fix this issue.

