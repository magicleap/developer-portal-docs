---
id: remote-render
title: Remote Render
sidebar_label: Remote Render Getting Started
sidebar_position: 1
date: 03/13/2023
tags: [Render, Servers, Remote]
keywords: [Render, Servers, Remote]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Magic Leap Remote Render is a first-party tool, created by Magic Leap, designed to allow for rendering content onto a Magic Leap 2 device from a more-powerful, non-mobile Windows computer.

## Prerequisites
- **Enterprise** or **Developer Pro license**
- [Install the Magic Leap Hub](/docs/guides/getting-started/install-the-tools#install-magic-leap-hub)
- [Grant Developer Permissions](/docs/guides/getting-started/granting-permissions)
- [Install the latest OS on Magic Leap 2 (minimum 1.1.0)](/docs/guides/device/updating-the-os/device-flashing-guide#download-the-latest-os-build)

## System Requirements

|               |        Minimum         |          Recommended          |
| :------------ | :--------------------: | :---------------------------: |
| OS            |      Windows 10+       |          Windows 10+          |
| CPU           |  Intel i7 / AMD Ryzen  |     Intel i7 / AMD Ryzen      |
| CPU Cores     |           4            |               8               |
| RAM           |          16GB          |             32GB              |
| VRAM          |          6GB           |             24GB              |
| Storage       |         512GB          |             512GB             |
| GPU           |      Any RTX Card      | 2x GeForce RTX 3090 or higher |
| Nvidia driver | version 495 or later\* |    version 495 or later\*     |
| Bandwidth     |     100Mbps WiFi 5     |        500+Mbps Wifi 6        |

:::note \* Run `nvidia-smi.exe` in a command prompt to get the Nvidia Driver Version.
:::

## Setup

### Installing Magic Leap Remote Rendering

1. Download the Magic Leap Remote Render package from the Package Manager within the Magic Leap Hub.
2. Enable Wifi Bridge in the “Device Bridge”
3. After installing **Magic Leap Remote Render**, the Hub will automatically update to display a Remote Render
tile on the home screen. (If you don't see Remote Rendering at first, restart The Hub.)
4. Click **Launch** on the Remote Rendering (Preview) tile from the Magic Leap Hub home screen.

![Remote Rendering Tile](/img/remote-rendering/remote-rendering-ml-hub-tile.png)

5. A prompt will ask to install the Client APK. Click "Yes, Install."

![Install Client APK](/img/remote-rendering/client-apk.png)

6. Click the **Start Remote Render** button.

![Start Remote Render Button](/img/remote-rendering/remote-rendering-ml-hub-button.png)

7. Put on the Magic Leap 2
8. Launch the **Remote Viewer** application
9. Make sure that the top dialogue box indicates that the device is connected to the host
   computer.

## Prevent feedback noise when combined with Device Streaming

The Remote Render functionality can be used in combination with Device Stream to preview and save what the user sees, however this may cause some audio feedback noise because the audio produced on the host is sent to the device and then back to the host by Device Stream. **To prevent audio loopback noise,** lower the volume of the Device Stream live preview before starting Remote Render.
