---
id: remote-rendering
title: Remote Render Setup
sidebar_label: Getting Started
sidebar_position: 2
date: 10/11/2023
tags: [Render, Servers, Remote]
keywords: [Render, Servers, Remote]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Magic Leap Remote Rendering is a first-party tool, created by Magic Leap, designed to allow for rendering content onto a Magic Leap 2 device from a more-powerful, non-mobile Windows computer.

## Prerequisites

* You must have a GPU manufactured by NVIDIA, or remote rendering will not work
* **Enterprise** or **Developer Pro license**
* [Install the Magic Leap Hub](/docs/guides/getting-started/install-the-tools#install-magic-leap-hub)
* [Grant Developer Permissions](/docs/guides/getting-started/granting-permissions)
* [Install the latest OS on Magic Leap 2 (minimum 1.1.0)](/docs/guides/device/updating-the-os/device-flashing-guide#download-the-latest-os-build)

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

:::note \* Run `nvidia-smi.exe` in a command prompt to get the Nvidia Driver Version. Remote rendering will not work without an NVIDIA GPU.
:::

### Installing Remote Render

1. Download the Magic Leap Remote Rendering package from the Package Manager within the Magic Leap Hub.

2. Enable Wifi Bridge in the Device Bridge and make sure your device is connected via WiFi to the same network as your computer before continuing.

3. After installing **Magic Leap Remote Rendering**, the Hub will automatically update to display a Remote Rendering
tile on the home screen. (If you don't see Remote Rendering at first, restart The Hub.)

4. If you don't see the Remote Rendering (Preview) tile, you need to install it. Search the tiles for **Package Manager** and click on it.

5. Click **All** and use the search bar at the top of the page to look for **Remote Rendering**. Under the Package Name column, you should get back the choice to install Magic Leap Remote Rendering. <Image url= {require("/img/remote-rendering/install-remote-rendering.png")} >Find Remote Rendering Installation Package</Image> 

6. Click the downward pointing black arrow to the right of Magic Leap Remote Rendering. You might have to maximize the window to see it, or scroll to the right. 

7. You are prompted with instructions to review and accept a software licensing agreement. Review the agreement, and accept it to continue with the download. Your download will appear with a status like Pending Install.

8. Next, you'll see the Change Summary panel. All the options for your change are listed. This package only has one item to install, so leave everything as-is. At the bottom of the panel, click **Apply Changes** to start installation. <Image url= {require("/img/remote-rendering/change-summary.png")} >Apply Changes</Image>

7. Walk through the installation wizard for Remote Rendering. You'll be prompted to accept another software agreement, choose a destination folder, a start menu folder, and finally, install. When the installation completes, click **Finish** to close the wizard. 

8. In the Magic Leap Hub, you'll still be on the Change Summary screen. If everything went as planned, you see the status of Remote Rendering listed as Installed. In the top right of the screen, click **Close Summary**. 

9. Navigate back to the home screen. Remote Rendering (Preview) should be the first tile you see, as you just installed it. Before proceeding, make sure your headset is connected to the same network as your computer.

10. Click **Launch** on the Remote Rendering (Preview) tile from the Magic Leap Hub home screen. <Image url= {require("/img/remote-rendering/remote-rendering-ml-hub-tile.png")} >Remote Render Tile</Image> 

:::note
You must have your Magic Leap headset on and connected to the same WiFi network as your computer. You must also already have Remote Viewer installed. If you don't have it and you meet system requirements, you're prompted to install it, with a clickable button that says **Install now**. If you don't have it and you don't meet system requirements, then you get a note saying you need to have Remote Viewer, but no option to install. 
:::

11. If your system meets requirements for remote rendering, and it's your first time using this tool, when you get the prompt to install Remote Viewer, click **Install now**. <Image url= {require("/img/remote-rendering/install-now.png")} >Install Remote Viewer</Image> 

12. If your system meets the requirements for remote rendering, and it's your first time using this tool, a prompt asks you to install the Client APK. Click **Yes, Install**.

<Image url= {require("/img/remote-rendering/client-apk.png")} >Install Client APK</Image>

13. When installation completes, you see a QRC prompt labeled Get Started. Put on the Magic Leap 2 and scan the QRC. <Image url= {require("/img/remote-rendering/remote-render-qrc.png")} >QRC for Remote Render</Image>

14. The QRC launches the **Remote Viewer** application.

## Device Streaming

### Prevent feedback noise

The Remote Rendering functionality can be used in combination with Device Stream to preview and save what the user sees, however this may cause some audio feedback noise because the audio produced on the host is sent to the device and then back to the host by Device Stream. To prevent audio loopback noise, lower the volume of the Device Stream live preview before starting Remote Rendering.

## Troubleshooting

### adb

If you don't have adb installed, you may not be able to install the APK. Read the [ADB Setup](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/android-debug-bridge/adb-setup/) guide.

### Can't Install Remote Viewer

If your system does not have an NVIDIA GPU, you can't use the remote render feature. Try using a VM, or a different computer.

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
