---
id: headset-fit
title: Headset Fit
sidebar_position: 7
date: 08/16/2022
tags: [Headset, Headset fit, Design guidelines, Comfort, Best Practices]
keywords: [Headset, Headset fit, Design guidelines, Comfort, Best Practices]
---

# Headset Fit

**We strongly recommend that users complete Custom Fit to ensure proper device fit**

Completing the **Custom Fit app** will help maximize Magic Leap 2 performance by fitting the device to each user’s unique facial dimensions and features. Use [Headset Fit API](#headset-fit-api) to determine if Custom Fit was completed and the fit is good. If fit is not good, alert app users and send them to the Custom Fit app to complete the fit procedure.  If your users have completed the Custom Fit app, then the device should be able to see the user’s eyes.

Encourage your users to launch the Custom Fit app from the main menu to position the back and side bands to rest above the ears and choose suitable nose and forehead pads from the Fit Kit. Keep in mind that when multiple users are sharing a device, the Custom Fit app should be re-launched for each user.

## Poor Eye-Fit

- Eye strain and headaches as a result of vertical and/or horizontal vergence discrepancy
- Segmented dimmer misalignment
- Mismatched content depth placement
- Poor Iris ID performance
- Poor Gaze Tracking performance
- Poor iris or pupil measurement performance
- Significantly reduced virtual display FOV

Virtual display FOV of a worst-case scenario user that has not completed Custom Fit (Vertical: 39°/55°; Horizontal: 33°/45°; Diagonal: 37°/71°)

<Image url= {require("/img/human-interface-guidelines/Worst-Case-Scenario.png")} >Worst-case scenario</Image>

## Headset Fit API

**Developers can use the Headset Fit API to check whether the device is correctly fitted to the user or if users need to complete Custom Fit again.**

The ML2 device is constantly checking for headset fit and developers can obtain the current state by using the Headset Fit API. If you’d like to check device fit while running your application, call up the Headset Fit API, which will make sure the user’s eyes are seen.

The Headset Fit API returns one of four options:

- **Unknown**: device needs to be rebooted.
- **Not Worn**: eyes are not visible for 2 consecutive seconds; Either the headset was taken off or the fit is so bad that the user’s eyes aren’t visible at all.
- **Good Fit**: eyes are visible and the device is properly fitted to the user.
- **Bad Fit**: eyes are not in the correct location. Eye Tracking will not be functional.

The Headset Fit API judges fit in five second cycles. It is recommended to check for the Headset Fit API 5-10 seconds into your application and prompt the user to launch the Custom Fit app if the Custom Fit API returns a “Bad Fit” state. The Custom Fit App can be launched using the standard Android intent mechanism. Please refer to [this article](/docs/guides/unity/intents/unity-intents-overview.md) for more details.
