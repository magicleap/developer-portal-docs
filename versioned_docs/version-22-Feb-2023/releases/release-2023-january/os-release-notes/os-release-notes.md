---
id: os-release-notes
title: January 2023 - OS Release Notes
sidebar_position: 0
date: 01/04/2023
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

## Known Issues

- Controller
  - Status Bar is showing the incorrect percentage values for plugged and unplugged totem
- Voice Command
  - Dismissing of "Magic Leap Help" can cause the systemUI to crash
- Mapping
  - Mapping tool creates anchors with past date anchors 1/1/1970, causing indefinite TTL
- Remote Viewer
  - Remote viewer causes "display artifacts" and potentially freezes display; requires a hard reboot
- Lock Screen
  - The lock screen does not recover the device from standby normally after the user resumes wearing the device. Device resumes after the power button is pressed on compute pack
- Display
  - After upgrading, the device may get hung on the Magic Leap logo screen. A reboot is required
- Browser Feed
  - While using the browser, opening a 2nd app from the Home Menu can cause the camera feed to freeze. Reboot is required to recover session
- Settings
  - Manually configured dates/times set in the past are not preserved after update/upgrade. Date will be set to the current date as expected.
- Hand Tracking
  - Excessive telemetry messages from hand tracking at sites that are using telemetry in an enterprise cloud. In sites that are using telemetry in an enterprise cloud, hand tracking will report warnings many times per second, and may prevent telemetry from other systems from being reported
- Change in the serialization scheme for this OS release interrupts backward compatibility of maps
  - ML2 Base version: All maps stored on the device with a build version prior to this sprint release are not compatible. When updating to this OS, maps stored on the device will need to be removed, and previously mapped spaces will need to be remapped.
  - ML2 Developer and Enterprise version: OS releases prior to this sprint release are not compatible anymore with AR Cloud. Maps stored in AR Cloud deployments created with OS releases prior to this will not be compatible, and will need to be replaced by new maps.

