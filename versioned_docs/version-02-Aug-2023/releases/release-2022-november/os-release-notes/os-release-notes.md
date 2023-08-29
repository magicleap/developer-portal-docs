---
id: os-release-notes
title: November 2022 - OS Release Notes
sidebar_position: 0
date: 11/09/2022
---

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on `B3E.220619.07-R.107_user` (build order #4), you **MUST** flash `B3E.220619.07-R.124_user` (build order #5) then `B3E.220721.07-R.026_user` (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint |
|---|---|
| 9 | B3E.220818.12-R.417_user |
| 8 | B3E.220818.12-R.085_user |
| 7 | B3E.220721.07-R.027_user |
| 6 | B3E.220721.07-R.026_user |
| 5 | B3E.220619.07-R.124_user |
| 4 | B3E.220619.07-R.107_user |

We recommend you to use ML Hub flashing capability to flash the OS. Contact your Magic Leap customer care representative for any additional support with regards to flashing your device.

## New Features

- OS Navigation with Hand Gestures
  - This version includes an early, partial implementation of OS Navigation with indirect (long distance) hand gestures as an alternative to use of the controller. (See Known Issues below.)

- Home Gesture
  - Performing the Home gesture with the hand may be used as an alternative to the Home button on the controller to open or reposition the Home menu. The Home gesture starts with an open hand, palm facing the user, then switch quickly to fist, then hold the fist closed for one second. (See Known Issues below.)

![Home Gesture](/img/releases/home-gesture.gif)

- Text-To-Speech support for Arabic language

## Known Issues

- Segmented Dimmer
  - If you're experiencing segmented dimmer issues with your previously built app, see Developer release notes for how to update your App.

- OS Navigation with Hand Gestures
  - At this time, it enables using the hands for system settings and notifications only. Navigation of the Home menu is not yet available.

- Home Gesture
  - The Home gesture is currently always enabled and may be unintentionally interpreted while performing other non-related tasks with the hands.

- Volume Modal
  - Volume modal window may not change the volume value via the slider. Users can change volume in settings.

- Home Menu
  - Home Menu may swim or oscillate when looking away and back to Home menu content.

- Focus Distance
  - An update to focus_distance in the `<BeginFrame>` function now ensures the focus distance value is used properly. However, this may have some side effects visually of jittery visuals, especially text. Work around is to set focus_distance to the far clip distance, or to accurately find the distance where the user is looking and set the value accordingly per frame.

- Global Dimmer
  - If the user looks away from content, the global dimmer value in settings will be used.

- Android Applications are Behind By One Frame
  - The visual outputs from Android applications are one frame behind. In the case of Android UI, this means some updates may not be visible until further input is received to cause updates.

- Controller
  - Connecting the Controller to ML2 may trigger repeated displays of 'Controller updating'.
  - Controller may take a long time to initialize 6DoF and reboot.
  - Controller may get into a state where it will not power up and stay on, unless plugged into the charger.  Please keep the Controller charged to avoid getting into this state.

- Nonius App
  - Menu buttons may not be displayed correctly in Arabic.

- Spaces App
  - Jitter of virtual content may occur while walking with the Spaces App

- Date & Time
  - When using Date & Time under Settings → System, if a user disables 'Use network provided time', the previously selected date will be displayed.

- Headpose
  - Headpose may take time to pixel-stick virtual content after picking up the device from the desk.
  - Virtual content may shake/swim when the user moves away from it.

- Virtual Keyboard
  - On English versions of the keyboard, the shift key operates in the same manner as the caps lock key.

- A blinking red display may occur after flashing the device to this OS release. If it happens, reboot the device.
