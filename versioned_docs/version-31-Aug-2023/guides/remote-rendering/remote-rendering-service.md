---
id: remote-rendering
title: Remote Render Setup
sidebar_label: Getting Started
sidebar_position: 2
date: 03/13/2023
tags: [Render, Servers, Remote]
keywords: [Render, Servers, Remote]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Magic Leap Remote Rendering is a first-party tool, created by Magic Leap, designed to allow for rendering content onto a Magic Leap 2 device from a more-powerful, non-mobile Windows computer.

## Prerequisites

- **Enterprise** or **Developer Pro license**
- [Install the Magic Leap Hub](/versioned_docs/version-31-Aug-2023/guides/getting-started/install-the-tools#install-magic-leap-hub)
- [Grant Developer Permissions](/versioned_docs/version-31-Aug-2023/guides/getting-started/granting-permissions)
- [Install the latest OS on Magic Leap 2 (minimum 1.1.0)](/versioned_docs/version-31-Aug-2023/guides/device/updating-the-os/device-flashing-guide#download-the-latest-os-build)

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
| Bandwidth         |    100Mbps WiFi 5      |          500+Mbps Wifi 6          |

:::note \* Run `nvidia-smi.exe` in a command prompt to get the Nvidia Driver Version.
:::

### Installing Remote Render

1. Download the Magic Leap Remote Rendering package from the Package Manager within the Magic Leap Hub.
2. Enable Wifi Bridge in the “Device Bridge”
3. After installing **Magic Leap Remote Rendering**, the Hub will automatically update to display a Remote Rendering
tile on the home screen. (If you don't see Remote Rendering at first, restart The Hub.)
4. Click **Launch** on the Remote Rendering (Preview) tile from the Magic Leap Hub home screen.

<Image url= {require("/img/remote-rendering/remote-rendering-ml-hub-tile.png")} >Remote Rendering Tile</Image>

5. A prompt will ask to install the Client APK. Click "Yes, Install."

<Image url= {require("/img/remote-rendering/client-apk.png")} >Install Client APK</Image>

6. Click the **Start Remote Render** button.

<Image url= {require("/img/remote-rendering/remote-rendering-ml-hub-button.png")} >Start Remote Rendering Button</Image>

7. Put on the Magic Leap 2
8. Launch the **Remote Viewer** application
9. Make sure that the top dialogue box indicates that the device is connected to the host
   computer.

## Device Streaming

### Prevent feedback noise

The Remote Rendering functionality can be used in combination with Device Stream to preview and save what the user sees, however this may cause some audio feedback noise because the audio produced on the host is sent to the device and then back to the host by Device Stream. **To prevent audio loopback noise,** lower the volume of the Device Stream live preview before starting Remote Rendering.

## Troubleshooting

### Debug Logs

If an issue occurs with the Remote Rendering service, logs will be requested for support purposes. To receive these logs, in a PowerShell window, execute the following:

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```powershell
powershell.exe -ExecutionPolicy Bypass -File "C:\Program Files\Magic Leap Remote Rendering\DebuggerScript.ps1"
```

The logs will be saved, by default to:

`%USERPROFILE%\AppData\Roaming\MagicLeap\Windrunner\logs`

  </TabItem>
</Tabs>

