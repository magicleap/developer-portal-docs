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
* To use remote rendering on your Magic Leap headset, you must have a**Enterprise** or **Developer Pro** software license. For more information, refer to [Managing Your Magic Leap 2 License](https://www.magicleap.care/hc/en-us/articles/9356966949389-Managing-Your-Magic-Leap-2-License)
* [Install the Magic Leap Hub](/docs/guides/getting-started/install-the-tools#install-magic-leap-hub)
* [Grant Developer Permissions](/docs/guides/getting-started/granting-permissions)
* [Install the latest OS on Magic Leap 2 (minimum 1.4.0)](/docs/guides/device/updating-the-os/device-flashing-guide#download-the-latest-os-build)

:::note
You can install with an older OS, however the instructions might be slightly different than what's described in this walkthrough.
:::

## System Requirements

|                   |        Minimum         | 
| :---------------- | :--------------------: |
| OS                |      Windows 10+       |
| CPU               |  Intel i7 / AMD Ryzen  |
| CPU Cores         |           4            |
| RAM               |          16GB          |
| VRAM              |          6GB           |
| GPU               |      Any NVIDIA RTX Card      |
| Nvidia driver     | version 495 or later\* |
| Bandwidth         |    100Mbps WiFi 5      |

:::note \* Run `nvidia-smi.exe` in a command prompt to get the Nvidia Driver Version. Remote rendering will not work without an NVIDIA GPU.
:::

### Installing Remote Render

1. Download the Magic Leap Remote Rendering package from the Package Manager within the Magic Leap Hub.

2. Make sure your device is connected to the same network as your computer before continuing. You need to connect via USB or WiFi Bridge to install the Remote Viewer on your headset. (If you've never used WiFi Bridge, you need to connect with USB first, and then switch over to WiFi Bridge.)

3. If you don't see the Remote Rendering (Preview) tile, you need to install it. If you already have the tile, you can skip ahead to **step 11**. Otherwise, search the tiles for **Package Manager** and click on it.

4. Click **All** and use the search bar at the top of the page to look for **Remote Rendering**. Under the Package Name column, you should get back the choice to install Magic Leap Remote Rendering. <Image url= {require("/img/remote-rendering/install-remote-rendering.png")} >Find Remote Rendering Installation Package</Image> 

5. Click the downward pointing black arrow to the right of Magic Leap Remote Rendering. You might have to maximize the window to see it, or scroll to the right. 

6. You are prompted with instructions to review and accept a software licensing agreement. Review the agreement, and accept it to continue with the download. Your download will appear with a status like Pending Install.

7. Next, you'll see the Change Summary panel. All the options for your change are listed. This package only has one item to install, so leave everything as-is. At the bottom of the panel, click **Apply Changes** to start installation. <Image url= {require("/img/remote-rendering/change-summary.png")} >Apply Changes</Image>

8. Walk through the installation wizard for Remote Rendering. You'll be prompted to accept another software agreement, choose a destination folder (leave the default as set), a start menu folder, and finally, install. When the installation completes, click **Finish** to close the wizard. 

9. In the Magic Leap Hub, you'll still be on the Change Summary screen. If everything went as planned, you see the status of Remote Rendering listed as Installed. In the top right of the screen, click **Close Summary**. 

10. Navigate back to the home screen. Remote Rendering (Preview) should be the first tile you see, as you just installed it. Before proceeding, make sure your headset is connected to the same network as your computer.

11. Click **Launch** on the Remote Rendering (Preview) tile from the Magic Leap Hub home screen. <Image url= {require("/img/remote-rendering/remote-rendering-ml-hub-tile.png")} >Remote Render Tile</Image> 

:::note
You must have your Magic Leap headset on and connected to the same network as your computer. The Remote Viewer app needs to be installed. If you don't have it, you meet system requirements, and your device is connected via the device bridge (WiFi or USB), you're prompted to install it. The prompt displays a clickable button that says **Install now**. If you don't meet system requirements, then you get a note saying you need to have Remote Viewer, but no option to install. 
:::

12. If your system meets requirements for remote rendering, and it's your first time using this tool, when you get the prompt to install Remote Viewer, click **Install now**. <Image url= {require("/img/remote-rendering/install-now.png")} >Install Remote Viewer</Image> 
  
13. Next, a prompt asks you to install the Client APK. Click **Yes, Install**.

<Image url= {require("/img/remote-rendering/client-apk.png")} >Install Client APK</Image>

14. When installation completes, you see a QRC prompt labeled Get Started. Put on the Magic Leap 2 and using your controller, open the **QR Reader**.

15. Scan the QRC on your headset by looking at it. <Image url= {require("/img/remote-rendering/remote-render-qrc.png")} >QRC for Remote Render</Image>

16. The QRC launches a screen on your headset showing the link it's connecting to, and prompts you to open the link with Remote Viewer. Click **Continue**.

17. You receive a prompt asking whether you want to allow Remote Viewer to track your eyes and detect gaze behaviors like blinks and fixation and one asking whether to allow Remote Viewer to detect planes and mesh data from the environment around you. For each one, click **Allow**.

18. You may get a notification stating that the app is waiting to be granted permissions, and then a notification indicating that the headset is waiting for the app to start. This notification includes instructions to start the OpenXR app on your PC. To do this, go into the Magic Leap Hub on the Remote Rendering screen, and click the **Remote Rendering** dropdown menu in the upper left corner.

19. (Optional) You can run a demo to test your set up. From the dropdown, click **OpenXR demo app**. The demo launches two places. On your PC, the app launches in its own Window and shows a view of your headset, controller, and hands. In your headset, you see a banner that says 'Magic Leap Remote Rendering.' You can squeeze the trigger on your controller to play a sound. When you are done trying the app, click the **Home** button on your controller to exit, and close the app window on your PC. 

## Device Streaming

### Prevent feedback noise

The Remote Rendering functionality can be used in combination with Device Stream to preview and save what the user sees, however this may cause some audio feedback noise because the audio produced on the host is sent to the device and then back to the host by Device Stream. To prevent audio loopback noise, lower the volume of the Device Stream live preview before starting Remote Rendering.

## Troubleshooting

### Can't Install Remote Viewer

If your system does not have an NVIDIA GPU, you can't use the remote render feature. The system will not automatically install Remote Viewer if this is the case. Try using a computer with an NVIDIA GPU.

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
