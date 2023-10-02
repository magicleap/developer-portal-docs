---
id: os-release-notes
title: 1.4.0-dev1 OS Release Notes
sidebar_position: 0
date: 08/30/2023
---

## Magic Leap OS - 1.4.0-dev1

The features in this release build upon OS [1.3.1](/docs/releases/release-2023-july/july-release-notes).

## Features and Enhancements

### On-Device Localization (ODL)

Improved stability and robustness: Cases where AR content or spatial anchors are displayed at incorrect positions significantly reduced. Cases where AR content or spatial anchors jump to incorrect positions after localization events significantly reduced.

### AR Cloud Localization and Mapping Services

Version update of the localization and mapping services to version 2.0.0.

Version 2.0.0. feature improvements:

- Significantly faster loading times for maps when starting a localization session.

- Significantly faster processing of localization requests.

- Significantly faster processing of map merge events.

### Device configured as a “fixed volume” device

To avoid volume inconsistencies, ML2 is now configured as a “fixed volume” device. This means that stream volume changes in Android are ignored, and device volume is handled in the ML Audio service through the settings and volume buttons. See AudioManager::isVolumeFixed() in the Android documentation.

### Improved Low-FPS Interactions

Previously, applications that were running in low-fps scenarios would have extra jitter visible on-display. New changes to the composition of these applications allows these applications to run more smoothly.

### Improved MLCapture Virtual Content

In some cases virtual content can appear cropped in the captured frames. New improvements should greatly reduce this artifact.

When using MLCapture on OpenXR quad content only, there were issues with green flashes or grainy capture. This is now fixed.

### RenderDoc Released

A version of RenderDoc for use on ML2 has been released for Windows. This should allow for debugging of graphical applications. The new release contains support for OpenXR and bug fixes.

### MultiUser Support for mixed reality camera

Mixed Reality Camera API now supports guest and non admin users.

### Eye Tracking sampling rate change

In this release we are previewing a change of the eye tracker from its previous dual exposure mode to a single exposure system at 60Hz. This change is being made to improve the consistency of eye motion estimates that our healthcare customers are interested in. Developers using the gaze vectors or eye positions should not notice a change other than the rate.

**Don’t forget:** Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

Before flashing make sure to power cycle your device without the cable plugged in. Hold down the power button for 20 seconds to do so.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on B3E.220619.07-R.107_user (build order #4), you MUST flash B3E.220619.07-R.124_user (build order #5) then B3E.220721.07-R.026_user (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint        |
| ----------- | ------------------------ |
| 18          | B3E.230810.09-R.028      |
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
