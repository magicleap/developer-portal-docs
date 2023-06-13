---
id: os-release-notes
title: February 2022 - OS Release Notes
sidebar_position: 0
date: 12/21/2021
---

# February 2022 OS Release Notes

## Features

- System Notifications - User is informed when devices or controllers are connected / disconnected. Also warnings added for low battery, low storage and low memory conditions.
- Laser Pointer, Notifications and Dialogs have received visual updates.
- Orion Warp - late warp now enabled in ML2. Greatly improves pixel stick performance

## Key ML2 vs ML1 Differences

- ML2 OS is now based on AOSP, alongside its development toolchain
- Only immersive applications are supported
- ML2 Controller: Now based on an optical concept instead of EM
- ML2 Controller: Now has a dedicated button to bring user back to Home Menu
- Reality button is no longer available on wearable
- Updated LED patterns

## Known Issues

- Soft Reboot:
  - Device may fail to boot during a reset/soft boot.  If the condition occurs, remove USB/charger cable, press power button for ~25seconds.  Then release power button.  Press power button to boot up again.  USB/charger cable may be reinserted again.
- Audio
  -Occasional left and right sample swap
  - When playing back 3rd eye camera recording, audible noises may be heard from background
- Camera
  - Recording of video content at 480p 30FPS is not supported
- Display
  - You may see a color separated screen at power up and at power down for a few seconds. This will be addressed in a future update.
- 6DoF Control
  - On some power ups, you may not obtain 6dof control and not see the ray from the control. If this persists at powerup, please restart the device.
- Settings
  - Enable/Disable Wi-Fi from UI multiple times in quick fashion puts Wi-Fi into bad state. If that happens, reboot the device to fix the issue.
  - The Settings → General → Auto Time & Date, when enabled, retrieves and displays the current network time in GMT.  It does not automatically determine the time zone.  The automatically retrieved time/date will override any previous setting.
  - The date and time can be manually specified using the following adb commands:

```shell
adb shell date MMDDhhmmYYYY.00
```

Note:

- MM: is the month
- DD: is the day of the month
- hh: is the hour in 00-24
- mm: is the minute
- YYYY: is the year

```shell
adb shell am broadcast -a android.intent.action.TIME_SET
```

