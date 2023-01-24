---
id: ml2-overview 
title: Magic Leap 2 Overview
sidebar_position: 0
date: 08/20/2022
---

# Magic Leap 2 Overview

This section discusses all the hardware and software differences between Magic Leap 1 and Magic Leap 2, with links to other detailed architecture documentation for more details.

|     |                                                               |
|-----|---------------------------------------------------------------|
| Magic Leap 1 | Refers to the Magic Leap 1 hardware and related software.     |
| Magic Leap 2 | Refers to the new Magic Leap 2 hardware and related software. |

## Magic Leap 2 Core OS Changes

Magic Leap 2 is built on top of the [Android Open Source Project](https://source.android.com/) (AOSP), Android 10 (Q) API level 29, whereas Magic Leap 1 was built on top of a Linux derived in-house OS. This has a few consequences for software development:

- [mldb](https://ml1-developer.magicleap.com/en-us/learn/guides/magic-leap-device-bridge-reference) is replaced by [adb](https://developer.android.com/studio/command-line/adb)
- [mabu](https://ml1-developer.magicleap.com/en-us/learn/guides/magic-leap-builder-overview) is no longer supported and is replaced by the official Android SDK/NDK toolchain using gradle & cmake.
- MPKs are no longer supported and are replaced with standard APKs.
- Some API’s that are natively supported by the Android SDK and NDK have been removed from the Magic Leap API. Examples of this are:
  - [Logging](https://developer.android.com/ndk/reference/group/logging)(NDK)
  - [Sensor Data](https://developer.android.com/ndk/reference/group/sensor) (NDK)
  - [Keyboard](https://developer.android.com/ndk/reference/group/input) (NDK)
  - [Mouse](https://developer.android.com/ndk/reference/group/input) (NDK)
  - [Permissions](https://developer.android.com/guide/topics/permissions/overview) (SDK)
  - [Battery](https://developer.android.com/reference/android/os/BatteryManager) (SDK)
  - Lifecycle ([NDK Android Native App Glue](https://developer.android.com/reference/games/game-activity/group/android-native-app-glue), [SDK](https://developer.android.com/guide/components/activities/activity-lifecycle))

- Android Studio can now be used to develop for Magic Leap 2, including deployment and debugging.

## Hardware Comparison

This section discusses all the hardware and software differences between Magic Leap 1 and Magic Leap 2, with links to other detailed architecture documentation for more details. If you’re interested purely in porting apps from Magic Leap 1 to Magic Leap 2, you can skip ahead to Development Guides.

### Processors

Changes in the processors are shown in the table below:

| | Magic Leap 1 | Magic Leap 2 |
|:-- | --- | --- |
|Architecture | ARM |x86_64 |
|Processor (only part of it will be available for apps)| 2xDenver2 @1.7Ghz 4xA57 @ 1.7 Ghz |4 x86 cores |
|Total Flash Storage| UFS 64GB/128GB| NVMe 128-256 G|

### Graphics and Display

Changes to the graphics and display pipeline are shown in the table below:

| | Magic Leap 1 | Magic Leap 2 |
|:-- | --- | --- |
|GPU | Pascal 256x CUDA cores | Navi 2 with 4 WGP (8 CUs) |
|GPU system budget | 1.5 ms | 2 ms |
|GPU app budget | 12 ms | 12 ms |
|FoV |40H x 30V (50D)|45H x 55V (70D)|
|Resolution|1280 x 960|1440 x 1760|

- All Magic Leap 1 apps re-compiled for Magic Leap 2 should work from a graphics and display perspective. Depending on an app’s UX design the UX design may need to be re-evaluated to take into consideration the new FoV. All world locked content should work without issues.

- Time warping is now done with dedicated hardware and frees up the GPU. Compared to Magic Leap 1, Magic Leap 2 provides more GPU budget to the apps.

### Controller

Controller tracking technology has been significantly changed. Magic Leap 1 uses a combination of EM and IMU sensors to track the 6DOF pose of the Controller. The Controller in Magic Leap 2 uses a combination of IR LED tracking and a lightweight SLAM tracker running on the IMU. Controller tracking should still work when there is no direct line of sight.

Because of the new tracking technology used, there are a few things you should pay attention in relation to when porting apps to Magic Leap 2:

- The Controller lacks the 12 visible LEDs arranged around the touchpad. All apps using this feature will need to alter the UX where necessary. The display LED is now replaced by a single status LED.
- The Controller can lose tracking if it is not in the line of sight and is in an area of low-light, low-texture, or high dynamic scenes. These conditions can break SLAM tracking.
- The Controller tracking will degrade in performance if it is out of line of sight for extended periods of time.

:::info
Magic Leap 2 now supports only one Controller at any given time. Magic Leap 1 had unofficial support for two Controllers. The Magic Leap 2 APIs will be updated to remove this functionality and force developers to use only one Controller.
:::
