---
id: os-release-notes
title: May 2023 - OS Release Notes
sidebar_position: 0
date: 05/22/2023
---

## Magic Leap OS - 1.3.0-dev1 

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so. 

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on B3E.220619.07-R.107_user (build order #4), you MUST flash B3E.220619.07-R.124_user (build order #5) then B3E.220721.07-R.026_user (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
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

- Standard Android audio API supported
  - Web Browser:
  - Implemented Downloads page

## Enhancements/Feature Improvements

- Assist Version 171 available: A new version of Assist that now supports Arabic, Japanese & German is available on the Solution page on magicleap.com.
- Resolved visual flicker that can occur on slower networks.
- Added support for 2 new languages to TTS: Spanish and French.
- Web Browser:
  - Browser window is moved in front of the user when resuming the browser application.
  - Initial click on URL bar selects full url.
- Out of Box Experience:
  - Users can now select Spanish and French as language options during the initial setup process.
  - Improved user interface for language selection.
  - Resolved various bugs for enhanced user experience.
- Settings:
  - Added support for new languages in the settings menu.
  - Addressed several bugs to ensure smoother functionality.
- Capture:
  - Capture App:
    - Introducing a live preview feature in the advanced settings, allowing users to see real-time previews while capturing media.
    - Enhanced user experience for a more intuitive capture process.
  - QR Reader App:
    - Improved functionality by disabling the global dimmer during scanning, resulting in better scanning performance and accuracy.

## Known Issues

- Upgrade will reset time to current time if the time was changed prior to upgrade.
- Control LED may not blink during a firmware update.
- Empty buffer at the beginning of Android Audio capture adds marginal latency.  No workaround, resolved for following release.
- Only the left or right display turns on after waking from Doze on rare occasions. Workaround by entering/exiting Doze again.
- When a user utilizes more graphics memory (by opening applications, running capture, etc) visual corruption of virtual content can be seen. The recommendation would be for users to make sure only the necessary app they are currently using is open. App developers should be careful to only use the memory necessary, and heavy usage of graphics memory in a single app may still cause this issue.
- Web RTC session disconnects after returning from Standby power state.  Workaround is when using an application that includes Web RTC functionality, disable the Standby power state in Settings before launch.
- Multi-user:
  - Any currently logged in secondary user and guest user are not able to delete a user IF active (causes reboot)
  - If the Guest user creates a PIN and starts a new session, the devices will reboot
  - Administrator setting controls the secondary user and guest settings for the following: doze, hand tracking.

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
