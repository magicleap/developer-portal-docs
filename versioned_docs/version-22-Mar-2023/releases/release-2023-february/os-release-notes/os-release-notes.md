---
id: os-release-notes
title: February 2023 - OS Release Notes
sidebar_position: 0
date: 02/22/2023
---

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on `B3E.220619.07-R.107_user` (build order #4), you **MUST** flash `B3E.220619.07-R.124_user` (build order #5) then `B3E.220721.07-R.026_user` (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
| 13          | B3E.230202.11-R.036      |
| 12          | B3E.221020.13-R.039      |
| 11          | B3E.221117.04-R.028      |
| 10          | B3E.221020.13-R.039      |
| 9           | B3E.220818.12-R.417_user |
| 8           | B3E.220818.12-R.085_user |
| 7           | B3E.220721.07-R.027_user |
| 6           | B3E.220721.07-R.026_user |
| 5           | B3E.220619.07-R.124_user |
| 4           | B3E.220619.07-R.107_user |

We recommend you to use ML Hub flashing capability to flash the OS. Contact your Magic Leap customer care representative for any additional support with regards to flashing your device.

## New Features

- Sticky Localization for On-Device Improved
  - Based on developer feedback we have made an improvement in our On-Device localization to stick to the last localized Space (similar to AR Cloud), allowing for a more seamless and efficient user experience. This change means that the selected Space will persist across device reboots, eliminating the need for developers and users to repeatedly open the Spaces tool for each physical location.
- The In-App Voice Intents now support “slots”, which is the ability to add variable wording to the intent (which before was only static). (reference)
- Text To Speech: Allow the App (that uses Android’s standard TTS APIs) to configure the Speech Rate and the Pitch (reference)
- Browser:
  - VKB usability improvements
  - URLs are easier to edit
  - Controllerless interaction support
  - Allow web developers to target the ML2 device
    - SEC-CH-UA-PLATFORM will be: Magic Leap
    - SEC-CH-UA-PLATFORM-VERSION will be equal to the OS version ex: 1.10
- German Language Support for OAuth Window and Captive Portal Login
- AR Cloud Release 1.13.22
  - Download map progress indicator
  - Enhanced events filtering
  - Localization (Arabic and Japanese) bug fixes and login integration
  - Ability to merge multiple maps (map merge) in the same space resulting in better maps and support for bigger maps.  
![AR Cloud - Merge multiple scans.](/img/releases/merge-scans.png)

## Known Issues

- Browser Feed
  - Downloading PDF files could crash the browser
  - Browser can not relocate in front with Bumper button
- Controller
  - Compute pack may not go into standby after connecting the Controller via USB.
  - Controller raycast may on occasion not appear after updating the Controller.  Reboot the Compute Pack to recover the raycast.
  - When the lock option is selected by the user, the 6Dof is lost, and the ray gets head stuck.The solution is to move the controller, with LEDs visible to the lightwear.
- Display
  - The first boot after upgrading firmware, the display will occasionally get stuck with a flickering red image. The device recovers after a device reset.
  - Device occasionally reboots after taking device off, idling it on the desk, and putting it back on
  - The lock screen does not recover the device from standby normally after the user resumes wearing the device. Device resumes after the power button is pressed on compute pack
- System/Settings
  - If headpose or other perception services stop working, recovery is less reliable and the user may need to reboot the device to restore functionality.
  - Clicking on SystemUI notifications on the network details page during first-time device setup after entering an incorrect password will result in a missing ‘Continue’ button. Users won’t be able to finish user-setup. Users should not click on any system UI notifications during first-time setup.
  - After running Custom Fit, if the user minimizes the application and then modifies the Hand Gesture setting under Settings > Input, the change in setting will not occur in Custom Fit until the application is closed and relaunched.
  - Device will sometimes reboot with Magic Leap logo for splash rendering seen in wearable. User either has to perform a forced shutdown of 10 seconds or more power button press in order to power down device or reattempt 4 to 10 seconds power button press for shutdown after Home Menu is seen in wearable.
  - Manually configured dates/times set in the past are not preserved after update/upgrade. Date will be set to the current date as expected.
  - Magic Leap license agreement is not translated into German
  - Sound effect missing when launching Home Menu after another application
- Virtual Keyboard
  - Japanese: Suggestions are applied when user hovers over them. Initial input is substituted with suggestion and not available anymore. Suggestions list closes only when user clicks on another option.

