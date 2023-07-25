---
id: ml-hub-os-installer
title: OS Installer
sidebar_position: 2
date: 08/29/2022
tags: [Magic Leap C SDK 0.52.1, MLSDK, ML Hub, Install, Setup]
keywords: [Magic Leap C SDK 0.52.1, MLSDK, ML Hub, Install, Setup]
---

The ML Hub's OS Installer allows you to install an OS image to your device. OS images are now released via The ML Hub's Package Manager. You can download them from the [Package Manager](/docs/guides/developer-tools/ml-hub/ml-hub-package-manager.md) and [flash](/docs/guides/device/updating-the-os/device-flashing-guide.md) them via the command line, or you can download and install with **one click** by using this tool.

<Image url= {require("/img/ml-hub/os-module-1.png")} >OS Installer Module Page after Connecting Device</Image>

:::caution

Before flashing make sure to power cycle your device:

1. Unplug the device from the if connected to the computer.
2. Hold down the power button for 20 seconds.
3. Once the device is powered down, press the power button and wait for the device to boot.
4. Connect the device to your computer.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on `B3E.220619.07-R.107_user` (build order #4), you **MUST** flash `B3E.220619.07-R.124_user` (build order #5) then `B3E.220721.07-R.026_user` (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint |
|---|---|
| 6 | B3E.B3E.220818.12.12-R.417_user |
| 5 | B3E.220818.12-R.085_user |
| 4 | B3E.220721.07-R.027_user |
| 3 | B3E.220721.07-R.026_user |
| 2 | B3E.220619.07-R.124_user |
| 1 | B3E.220619.07-R.107_user |

:::

## Device Selection

Use the **Device** dropdown to select the device you want to install the OS on. Note that OS installation requires a USB connection to the device. The OS version installed on the selected device will be displayed below the device selector.

## Image Selection

Use the **OS Version to Install** dropdown to select the OS image to install. This lists all released OS images compatible with the selected device. The list is sorted with the newest version at the top. It will notify you if the version needs to be downloaded to your computer first. If so, the download will begin when you click the **Install OS** button. Once the download is complete, OS installation will begin automatically.

There is also an option to select an OS image from a local directory. If you have already downloaded an OS image tarball and have extracted it, you can select that directory.

<Image url= {require("/img/ml-hub/os-module-2.png")} >OS Version Dropdown</Image>

## Reset Device to Factory Settings

Check this box to **factory reset** the device. This will erase all user data. It is recommended to check this when installing *userdebug* images.

:::warning
You **must** check the factory reset box when downloading releases after 05/11/22. This will not be the case in future releases, but for now, the factory reset prevents some issues regarding loss of head pose on newly flashed devices.
:::

:::caution
It is required to check this when downgrading versions because data is forwards compatible but not backwards compatible.
:::

## Install

Click the **Install OS** button to begin installation. If the OS image needs to be downloaded first, you will see a progress dialog of the download. Otherwise you will see the output of the OS installation. Once flashing is complete and the green checkmark appears, you can click the **Dismiss** button to return to the previous screen.

<Image url= {require("/img/ml-hub/os-module-3.png")} >Installation Window: In-Progress</Image>

<Image url= {require("/img/ml-hub/os-module-4.png")} >Installation Window: Complete</Image>

:::tip
If you run into any issues with flashing, check the [**troubleshooting**](/docs/guides/device/updating-the-os/device-flashing-guide.md#troubleshooting) section of the manual flashing guide for assistance.
:::
