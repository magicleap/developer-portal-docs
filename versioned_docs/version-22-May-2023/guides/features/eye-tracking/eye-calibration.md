---
id: eye-calibration
title: Eye Calibration
sidebar_position: 6
date: 08/16/2022
tags: [Eyes, Calibration, Eye Calibration, Fit, Design guidelines, Best Practices]
keywords: [Eyes, Calibration, Eye Calibration, Fit, Design guidelines, Best Practices]
---

# Eye Calibration API

Developers can use the Eye Calibration API to determine the current status of the eye calibration system.

:::note
If your Application collects, stores, transfers or otherwise uses data off the Magic Leap 2 device that is received via this API, then you must comply with the [Magic Leap 2 Eye Tracking Data Transparency Policy](https://www.magicleap.com/eye-tracking).
:::

## The Eye Calibration API returns one of three outputs

- **Fine** - eye-tracking is precise enough to use as input for selecting buttons or icons.
- **Coarse** - eye-tracking is usable for basic interactions such as scrolling, but not precise enough to use for selecting buttons or icons.
- **None** - Eye calibration did not run or was not completed successfully.

### The success of eye calibration depends on several things

- Most importantly, the success of fit; if the eyes are not seen via the Headset Fit API then they won’t be tracked via the Eye Calibration API.
- Prescription (if the user needs prescription but isn’t wearing it).
- Eye conditions.

