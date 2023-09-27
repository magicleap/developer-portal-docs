---
id: device-flashing-guide
title: Device Flashing Guide
sidebar_position: 1
date: 08/21/2022
tags: [OS, Flashing, ML Hub]
keywords: [OS, Flashing, ML Hub]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can flash your Magic Leap 2 device to update it to a different version of the Magic Leap Operating System (Magic Leap OS). This Flashing guide works for computers running a recent version of Windows, Mac, or Linux.

:::tip
You can also flash your device using Magic Leap Hub. For more information see [ML Hub Installer](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-os-installer.md) guide.
:::

:::caution
Flashing on MacOS is only supported on devices that have the latest bios. To check your bios version, run:

```shell
fastboot getvar bootloader-version
```

while in fastboot. If it shows 'version: WMN1C10X_020222_PRS_15' - then your BIOS is old and you must update. If you are using a Mac, please [contact support](https://developer.magicleap.cloud/support) for additional guidance.
:::

## Prerequisites

Before you flash your device, make sure the device is charged for approximately 45 minutes or until at least a pattern of 3 lit LEDs are observed on the Compute Pack. Additionally, make sure you have installed all the necessary tools:

1. [ML Hub](https://developer.magicleap.cloud/downloads)
2. [Android Debug Bridge (adb)](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/android-debug-bridge.md)
3. [Magic Leap SDK](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-package-manager.md) via ML Hub.
4. [Android Debug Bridge (adb)](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/android-debug-bridge.md)

After your device is charged and the tools are installed, power-on the Magic Leap 2 and connect it to your computer.

## Download the Latest OS Build

OS Builds can now be downloaded directly from the ML Hub. Follow these steps to download the OS file:

1. Open **ML Hub** and make sure it is **updated** to the latest version by either accepting the update prompts that pop up or clicking **Home > Check For Updates**.
2. Open to the **Package Manager** and select the **"All"** tab.

<Image url= {require("/img/ml-hub/ml_hub_packages_all.png")} >All Packages</Image>

1. Under the "Device OS Versions" section, find the **ML2 OS** item and click the download icon.

:::note _user vs._user_secure builds

<Image url= {require("/img/device/ml2-box-barcodes.png")} >ML2 Box Barcodes</Image>

Relating to the barcode beginning in "P/N":

If your device's part number is either "M90AA004_RA" or "M90AA004_RC" you have a **Secure** device. Otherwise, your device is **Unsecure**.

If your device is **Secure**, download the **_user_secure** version of the OS you want to install.

If your device is **Unsecure**, download the **_user** version of the OS you want to install.

If you do not have access to the barcode, try installing either of the builds using the OS Installer inside ML Hub. You will receive an error if the version doesn't match your device type and will need to download and install the other variation (_user or_user_secure) of that OS version.
:::

<Image url= {require("/img/ml-hub/os_image.png")} >Package Manager OS package selection</Image>

4. Verify that the file is scheduled for download in the panel on the right, then click the **Download** button on the bottom right.
5. The build file will be downloaded to the Magic Leap folder under your user directory. For example, on Windows, the build folder will likely be located under `<User>\MagicLeap\firmware\ml2`.

:::caution

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on OS version `B3E.220619.07-R.107_user` (*build order #4 in the table*), you **MUST** flash to `B3E.220619.07-R.124_user` (*build order #5 in the table*) then to `B3E.220721.07-R.026_user` (*build order #6 in the table*) for your device to work properly with that OS.

| Build Order | Build Fingerprint |
|---|---|
| 5 | B3E.220818.12-R.046-R.417 |
| 4 | B3E.220818.12-R.085 |
| 3 | B3E.220721.07-R.026 |
| 2 | B3E.220619.07-R.124 |
| 1 | B3E.220619.07-R.107 |

:::

## Verify the Device Is Recognized (Enumeration)

Once your device is booted and connected to your computer, it should be recognized by ML Hub under the [Device Bridge](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-device-bridge.md) module or with [ADB](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/android-debug-bridge.md) on the command line.

### Verifying with ADB

To verify that your device is recognized with ADB:

1. Make sure you have ADB installed by following the [ADB](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/adb-setup.md) set up guide.
2. Open a terminal window.
3. Run:

```shell
adb devices
```

4. Check if the device is listed.

### Device Is Not Recognized

If your device is not recognized in ML Hub or with ADB:

- Try a different USB-C cable, or flip the connectors on the current cable.
- Try rebooting your computer and Magic Leap 2 device.

<Tabs groupId="device-flashing-instructions">

<TabItem value="windows" label="Windows">

1. Open the Device Manager.
2. Verify that the Magic Leap device is listed.
3. Uninstall Magic Leap 2 driver under Universal Serial Bus Devices.
4. Disconnect the device from the computer and the USB-C cable from the device.
5. Hold the Power button on the device until all LEDs are off.
6. Reconnect the Device to the computer, then connect the Magic Leap 2 with the USB-C cable.
7. Power on the device.
8. Device enumerates again.

</TabItem>

<TabItem value="macos" label="MacOS">

To detect the Magic Leap 2 when your device is in fastboot mode, `lsusb` is required.

1. Open terminal.
2. Run:

```shell
lsusb
```

If `lsusb` is not a recognized command, install it using [Homebrew](https://brew.sh/):

1. Run:

```shell
brew install lsusb
```

After `lsusb` is installed:

Run:

```shell
lsusb
```

and ensure an entry with a name similar to "ID 0438:0101 Advanced Micro Devices, Inc." appears.

</TabItem>

<TabItem value="linux" label="Linux">

Run:

```shell
lsusb
```

and ensure an entry with a name similar to "ID 0438:0101 Advanced Micro Devices, Inc." appears.

</TabItem>
</Tabs>

If the device is not detected see the [Troubleshooting](#troubleshooting) section.

## Power-Cycle The Device

Before flashing make sure to power-cycle your device:

1. Unplug the device from the if connected to the computer.
2. Hold down the power button for 20 seconds
3. Once the device is powered down, press the power button and wait for the device to boot
4. Connect the device to your computer.

## Flash the Device using OS Installer

After completing the steps above, please use the [ML Hub OS Installer](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-os-installer.md) guide to complete the flashing process.

## Troubleshooting

:::warning
We have temporarily removed instructions for flashing in fastboot mode. As our warning at the top of this and other pages suggest, it is a technical possibility to force your headset into an irrecoverable state if you flash the wrong OS. Read that warning. As we phase out pre-release units ("unsecure" devices), we will only include "secure" image downloads.
:::

### Flashing Process Stalls

If the flashing process hangs on `<<Waiting for any device>>` for over 10 minutes, you can unplug the device from the PC, plug it back in, and watch the device manager to see if it shows up in USB devices. After which the process should continue.

### Recovery Mode

Read the warning at the top of this page, then contact Customer Care at care@magicleap.com for detailed instructions on recovery, if your device fails to boot.

