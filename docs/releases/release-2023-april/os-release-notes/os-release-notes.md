---
id: os-release-notes
title: April 2023 - OS Release Notes
sidebar_position: 0
date: 04/24/2023
---

## Magic Leap OS - 1.2.0

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so. 

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on B3E.220619.07-R.107_user (build order #4), you MUST flash B3E.220619.07-R.124_user (build order #5) then B3E.220721.07-R.026_user (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
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

## New Features

- German is available as a language selection in Settings as well as during OOBE. This covers the majority of text translations in the OS and 1st party Magic Leap application in device. German Voice services (voice intent and TTS) will be added in a future release.
- Modern Standard Arabic is supported in Voice Intent. The supported system voice intents are listed in the "Help" menu (can be opened up by a ML system voice intent “Hey Magic Leap, مساعدة.")
- Standby Power State - Default ON or OFF: Settings changed to support Standby ON by default for 'clean' (erase userdata) flashing of the latest software build and for factory reset use case. For upgrade use cases (e.g., upgrading from a prior software release without erasing user data), the existing Standby setting will be retained.
- Local multi-user enabled with Enterprise or Developer Pro License: Additional users are able to create user profiles for up to 8 users (this includes the guest user) can be created. Please see Appendix A - Adding Entitlements.
  - Profiles include eye calibration data
  - This is a Preview feature and there are some known issues (identified below) that will be fixed in the upcoming release.
  - Note: Admin re-calibration is required if the device was calibrated.
- Password is supported and can be enabled from Settings.
- AR Cloud
  - Support for German in the Enterprise Console.
  - Spaces have Geo Coordinates.
  - Easier getting started using the Virtual Machine on the Developer Portal (OVA & UTM).
- A QR code scanning app has been added.
- Browser
  - Users can use the QR Code button to easily scan urls via qr code.
  - Users can view and navigate to their history page.
- Progressive Web Apps: (Preview) Web pages can be compiled into apks and can be launched from the home menu. They follow their own lifecycle separate from the Browser. Locked task mode is not supported for PWAs at this time.
- New Battery status (Compute Pack) LED pattern which is played as a response to the user's short press on the power button. This new feature works in Standby (Doze) mode and active (On) mode.
- When the user side loads an APK, the device will play a distinct LED pattern.
- Bluetooth: Support for Android-compliant Bluetooth and A2DP Bluetooth hearing aids.
- While holding the controller, duplicate raycast inputs from the controller and hand tracking will no longer be generated. If the controller is connected and in motion for more than a few seconds, hand tracking will be disabled. Hand tracking will be enabled if the controller is disconnected or motionless for a few seconds (see Known Issues).
- Automatic Display Mode preview
  - Users can set the display to automatically control dimming and brightness depending on the ambient light.
  - Accessible from the Home Menu and settings under "Display."

## Enhancements/Feature Improvements

- Direct Hand interaction (Preview) in the os has been enabled and is available from the settings menu.
- Hand tracking shows greater stability of identified keypoints, resulting in smoother hand tracking operation.
- Space selection is now "sticky" for both cloud and local spaces and can be performed programmatically with a new C-API if you wish to not use the Spaces tool. The device will automatically attempt to localize to the last selected space without having to launch the Spaces app.
- Capture settings have been added to the capture app and the hub. Users can now adjust capture settings from the ui instead of just the command line.