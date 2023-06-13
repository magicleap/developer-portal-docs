---
id: hardware-tips
title: Hardware Tips
sidebar_position: 11
date: 04/26/2022
tags: [Hardware, Headstrap, Lenses, Mask, Reset, Boot]
keywords: [Hardware, Headstrap, Lenses, Mask, Reset, Boot]
---

## How to Determine Device Edition

To determine whether your device is a Medical or Enterprise edition, use the standard Android SDK API call [hasSystemFeature(featureName)](https://developer.android.com/reference/android/content/pm/PackageManager#hasSystemFeature(java.lang.String)). The actual call will be `hasSystemFeature("com.magicleap.hardware.medical")` and will return `True` if it is a Medical edition.

## Headstrap for Extended Wear

- The device package comes with a thin black strap that can be attached to the two upward-facing loops on each side of the headset. This strap should be used for extra head support during extended device wear.

## Fogged Up Lenses

- Fogged lenses may occur as a result of wearing a mask while using the headset. We recommend the use of defogging sprays to reduce the amount of fog accumulation, specifically [Zeiss Fog Defender](https://www.zeiss.com/vision-care/int/spectacle-lenses-from-zeiss/lens-cleaning-solution-for-glasses/antifog-spray.html) and [Bausch & Lomb](https://www.bausch.com/our-products/safety-and-industrial-cleaning-products/pre-moistened-cleaning-tissues/fogshield-xp-pre-moistened-lens-cleaning-tissues).

## Mask Wearing with Headset

- Use tape to secure the top of the mask to the nose bridge and cheeks in order to prevent hot air from fogging up the lenses while wearing a medical mask.

## Device Getting Stuck in Boot Loop

- If the device runs into an error during flashing resulting in a boot loop, it needs to be put into Fastboot mode.

  - While the Compute Pack is cycling through continuous reboots, hold down the _volume down_ key. This will cause the device to enter Fastboot mode.

## Performing a Hard Reset

1. Make sure the USB-C cable is not connected to the Magic Leap 2. (**This is mandatory for the hard reset to work**).
2. Press and hold the power button for at least 20 seconds and then release the button. No LEDs should be on at this point.
3. Now the device is ready to be powered up. Plug in the cable if desired and press power button to turn on the Magic Leap 2 PEQ.

