---
id: os-release-notes
title: June 2022 - OS Release Notes
sidebar_position: 0
date: 5/10/2022
---

# June 2022 - OS Release Notes

**ML2 OS Release B3E.220424.01-R.037**

Don’t forget: Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Install Instructions

More details can be found in the device upgrade guide via [The Lab 2.0](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-os-installer.md)/ or using [Android Debug Bridge](/versioned_docs/version-31-Aug-2023/guides//device/updating-the-os/device-flashing-guide.md).

## New Features

- Acoustic Mapping – The acoustic engine captures audio to measure reverberation properties of the user’s environment, building up an increasingly accurate Acoustic Map over time. Audio clients who use spatial audio can enable Acoustic Mapping in their application, this will automatically populate reverberation properties based on the contents of the Acoustic Map and the user’s current position.
- Controller power management - Standby and Sleep features are enabled. When the controller is still (i.e. resting on a desk) for 5 minutes it will enter “Standby” mode to reduce battery usage. In standby mode the controller will remain connected, but 6DoF tracking will no longer be functional. After another 5 minutes of inactivity the controller will go to “Sleep” mode, further reducing battery usage by disconnecting and shutting down unused peripherals. After another minute of inactivity the controller will turn off completely and require a home key press to turn it back on.

## Known Issues

- Add removing permissions impact on apps like Fit & Eye Calibration, Display Calibration, Nonious.
- Enabling the segmented dimming feature will cause the mapping tool to be globally dimmed after minimizing it. Fully closing the application will remove the dimming.

