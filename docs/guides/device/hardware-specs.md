---
id: hardware-specs 
title: Hardware Specs
sidebar_position: 1
date: 02/13/2023
---

# Hardware Overview

This section provides an overview of ML2 hardware specifications, with links to other detailed architecture documentation for more details.

## Magic Leap 2 Core OS 

Magic Leap 2 is built on top of the [Android Open Source Project](https://source.android.com/) (AOSP), Android 10 (Q) API level 29, which means:

- Command line interfacing to the device is managed by [adb](https://developer.android.com/studio/command-line/adb).

- Applications for the device are built as standard APKs.

- Android Studio can now be used to develop for Magic Leap 2, including deployment and debugging.

## Hardware Specifications

### Processors

Changes in the processors are shown in the table below:

| |  |  |
|:-- | --- | --- |
|Architecture ||x86_64 |
|Processor (only part of it will be available for apps)| |4 x86 cores |
|Total Flash Storage| | NVMe 128-256 G|

### Graphics and Display


| | | |
|:-- | --- | --- |
|GPU |  | Navi 2 with 4 WGP (8 CUs) |
|GPU system budget || 2 ms |
|GPU app budget | | 12 ms |
|FoV ||45H x 55V (70D)|
|Resolution||1440 x 1760|


### Controller

The Controller in Magic Leap 2 uses a combination of IR LED tracking and a lightweight SLAM tracker running on the IMU. Controller tracking should still work when there is no direct line of sight.

Because of the new tracking technology used, there are a few things you should pay attention to when building apps for the Magic Leap 2:

- The Controller can lose tracking if it is not in the line of sight and is in an area of low-light, low-texture, or high dynamic scenes. These conditions can break SLAM tracking.
- The Controller tracking will degrade in performance if it is out of line of sight for extended periods of time.

:::info
Magic Leap 2 now supports only one Controller at any given time. 
:::

## Hardware Documentation
Check the other [Device Guides](/docs/guides/device) for more information and troubleshooting tips for the Magic Leap 2 hardware.

