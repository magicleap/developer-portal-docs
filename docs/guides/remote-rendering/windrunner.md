---
id: remote-rendering-windrunner
title: Remote Rendering with Windrunner
sidebar_label: Windrunner
date: 03/13/2023
tags: [Rendering, Servers, Windrunner]
keywords: [Rendering, Servers, Windrunner]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Windrunner is a first-party tool, created by Magic Leap, designed to allow for rendering content onto a Magic Leap 2 device from a more-powerful, non-mobile Windows computer.

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows" default>

## Prerequisites

- [Install the Magic Leap Hub](/docs/guides/getting-started/install-the-tools#install-magic-leap-hub)
- [Grant Developer Permissions](/docs/guides/getting-started/granting-permissions)
- [Install the latest OS on Magic Leap 2 (minimum 1.1.0)](/docs/guides/device/updating-the-os/device-flashing-guide#download-the-latest-os-build)
- [Setup ADB](/docs/guides/developer-tools/android-debug-bridge/adb-setup)

## System Requirements

|                   |        Minimum        |          Recommended          |
| :---------------- | :-------------------: | :---------------------------: |
| OS                |      Windows 10+      |          Windows 10+          |
| CPU               | Intel i7 / AMD Ryzen  |     Intel i7 / AMD Ryzen      |
| CPU Cores         |           4           |               8               |
| RAM               |         16GB          |             32GB              |
| VRAM              |          6GB          |              24               |
| Storage           |         512GB         |             512GB             |
| GPU               |     Any RTX Card      | 2x GeForce RTX 3090 or higher |
| Nvidia driver     | version 495 or later* |     version 495 or later*     |
| Bandwidth up/down |      1 GB Wifi 6      |          1 GB Wifi 6          |

:::note
\* Run `nvidia-smi.exe` in a command prompt to get the Nvidia Driver Version.
:::

## Setup

### Remote Viewer Thin Client

:::info
You must have `adb` installed to perform this step. [Learn how to install `adb`](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/android-debug-bridge/adb-setup).
:::

1. Locate `magicleap.remote_viewer_app.zip` in the shared folder
2. Unzip the folder
3. Install the the **Remote Viewer** apk onto the Magic Leap 2 device
- [Learn how to install applications](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/ml-hub/ml-hub-device-bridge#use-device-bridge)

### Installing Windrunner (Remote Rendering Service)

1. Locate [Windrunner-0.1.0-win64.exe](TODO). in the shared folder
2. Run the executable

![Windrunner Installation](/img/remote-rendering/windrunner-installation.png)

1. Follow the setup wizard prompts and accept all defaults

### Setup the Remote Rendering Service

#### Running on The Magic Leap Hub

:::caution
Before starting the Remote Rendering service, make sure to enable Wifi
Bridge.
:::

After installing **Windrunner**, the ML Hub will automatically update to display a Remote Rendering
tile on the home screen.
1. Click <kbd>Launch</kbd> on the Remote Rendering (Preview) tile from the Magic Leap Hub
   
![Remote Rendering Tile](/img/remote-rendering/remote-rendering-ml-hub-tile.png)

1. Click the <kbd>Start Remote Render</kbd> button.
   
![Start Remote Render Button](/img/remote-rendering/remote-rendering-ml-hub-button.png)

1. Put on the Magic Leap 2
2. Launch the **Remote Viewer** application
3. Make sure that the top dialogue box indicates that the device is connected to the host
computer

#### Running using PowerShell

:::note
You do not have to complete this step if you successfully connect using the
Magic Leap Hub.
:::

If you have difficulty connecting your device with the host, please try the following steps:
1. Turn off Wifi Bridge
2. Exit Magic Leap Hub
3. Open Explorer and navigate to `C:\Program Files\Windrunner 0.1.0\bin`
4. Right click on `windrunner-service.exe` and select **Run as administrator**
– A terminal window should open showing the status of the server
5. Open Terminal or **PowerShell** as an administrator
6. Navigate to the **Windrunner** directory by running: `cd "C:\Program Files\Windrunner 0.1.0\"`
7. Connect the device to the host by running `./SetupRemoteViewerIP.ps1`
– The **Remote Viewer** application should auto launch on the Magic Leap 2
8. Put on the Magic Leap 2
9. Make sure that the top dialogue box indicates that the device is connected to the host computer

## Running an Application

Only applications developed for Remote Rendering are able to be streamed to the device.
1. Locate the `MotorcycleDemo_Windows.zip` in the shared folder
2. Unzip the contents into a desired folder
3. Navigate to the content folder
4. launch `RemoteRenderingDemo.exe`
5. Allow the app to access the internet

## Troubleshooting

### Magic leap Hub Issues

#### Remote Rendering says it’s connected but content does not show.

Run the Magic Leap Hub as an administrator.

#### Cannot start remote render services

Navigate to `C:\Program Files\Windrunner 0.1.0\bin` and run `windrunner-service.exe` as an administrator.

### PowerShell Issues

#### Multiple devices found

Resolve the issue by following these steps:
1. Open **PowerShell** and run `adb devices`
2. Copy down the device serial number that you want to use
3. Navigate to the **Windrunner** directory by running: `cd "C:\Program Files\Windrunner 0.1.0\"`
4. Pass in the device serial number when running `./SetupRemoteViewerIP.ps1 -Device DEVICE-SN-HERE`

#### "No reachable IP addresses found. Ensure device is on same WiFi as Host PC"

Resolve the issue by following these steps:
1. Open **PowerShell** and run `(Get-NetIPAddress -AddressFamily IPv4 -SuffixOrigin Dhcp).IPAddress`
2. Copy down the IP address
3. Navigate to the **Windrunner** directory by running: `cd "C:\Program Files\Windrunner 0.1.0\"`
4. Pass in the IP address when running `./SetupRemoteViewerIP.ps1 -Ip YOUR-IP-HERE`

### Audio Issues

#### No audio playback

Audio on Windows only works in "mirror mode" (same audio heard on both host and device) and only if the default audio device on the host is configured with `{Sample rate = 48000, Audio depth = 16 bit}`.

</TabItem>
</Tabs>
