---
id: remote-rendering-service
title: Remote Rendering
sidebar_label: Remote Rendering Service
date: 03/13/2023
tags: [Rendering, Servers, Remote]
keywords: [Rendering, Servers, Remote]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Magic Leap Remote Rendering is a first-party tool, created by Magic Leap, designed to allow for rendering content onto a Magic Leap 2 device from a more-powerful, non-mobile Windows computer.

## Prerequisites

- [Install the Magic Leap Hub](/docs/guides/getting-started/install-the-tools#install-magic-leap-hub)
- [Grant Developer Permissions](/docs/guides/getting-started/granting-permissions)
- [Install the latest OS on Magic Leap 2 (minimum 1.1.0)](/docs/guides/device/updating-the-os/device-flashing-guide#download-the-latest-os-build)
- [Setup ADB](/docs/guides/developer-tools/android-debug-bridge/adb-setup)

## System Requirements

|                   |        Minimum         |          Recommended          |
| :---------------- | :--------------------: | :---------------------------: |
| OS                |      Windows 10+       |          Windows 10+          |
| CPU               |  Intel i7 / AMD Ryzen  |     Intel i7 / AMD Ryzen      |
| CPU Cores         |           4            |               8               |
| RAM               |          16GB          |             32GB              |
| VRAM              |          6GB           |              24               |
| Storage           |         512GB          |             512GB             |
| GPU               |      Any RTX Card      | 2x GeForce RTX 3090 or higher |
| Nvidia driver     | version 495 or later\* |    version 495 or later\*     |
| Bandwidth         |    100Mbps WiFi 5      |          500+ Wifi 6          |

:::note \* Run `nvidia-smi.exe` in a command prompt to get the Nvidia Driver Version.
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

### Installing Magic Leap Remote Rendering Service

1. Download the Magic Leap Remote Rendering Service from the Package Manager within the Magic Leap Hub.
2. Run the executable.

![Magic Leap Remote Rendering Service Installation](/img/remote-rendering/magic-leap-remote-rendering-installation.png)

1. Follow the setup wizard prompts and accept all defaults

### Setup the Remote Rendering Service

#### Running on The Magic Leap Hub

:::caution
Before starting the Remote Rendering service, make sure to enable Wifi
Bridge.
:::

After installing **Magic Leap Remote Rendering Service**, the Hub will automatically update to display a Remote Rendering
tile on the home screen.

1. Click **Launch** on the Remote Rendering (Preview) tile from the Magic Leap Hub

![Remote Rendering Tile](/img/remote-rendering/remote-rendering-ml-hub-tile.png)

1. Click the **Start Remote Render** button.

![Start Remote Render Button](/img/remote-rendering/remote-rendering-ml-hub-button.png)

1. Put on the Magic Leap 2
2. Launch the **Remote Viewer** application
3. Make sure that the top dialogue box indicates that the device is connected to the host
   computer.