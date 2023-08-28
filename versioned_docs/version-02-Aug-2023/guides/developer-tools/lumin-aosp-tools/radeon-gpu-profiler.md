---
id: radeon-gpu-profiler
title: Radeon GPU Profiler
sidebar_position: 1
date: 06/07/2022
engine: All
tags: [AOSP, Profiling, RGP, Radeon, AMD]
keywords: [AOSP, Profiling, RGP, Radeon, AMD]
---


## Overview

Radeon GPU Profiler (RGP) is a **GPU profiling tool** developed by AMD. This document is a how-to for installing the tool and using it with a Magic Leap 2 device. Extensive documentation for RGP in general exists [here](https://radeon-gpuprofiler.readthedocs.io/en/latest/). This document is just a primer for getting up and running with RGP, targeting Magic Leap OS.

This version of RGP has the following limitations:

- only works on *userdebug* lumin-aosp (*user* not yet supported)
- requires that you disable *SELinux* (shown below)

RGP only supports **Vulkan**; it does not support OpenGL. You can successfully target an OpenGL app and profile a frame, but that's only because the Magic Leap graphics pipeline ultimately ends up doing Vulkan activity, regardless of whether the app is making OpenGL calls or Vulkan. That said, the insight gathered from profiling an OpenGL app is not really meaningful. Really, this is a tool meant for use on Vulkan apps.

### About RGP

RGP is a single-frame profiler. That means that each capture operation profiles one and only one frame, whichever frame is being rendered at the time you initiate the capture. You can profile as many frames as you want, but each one is an independent operation and resulting file.

RGP, unlike other profiling tools, doesn't allow you to launch an application from the tool, for the sake of profiling it. The application needs to be launched independently (e.g., via the home menu or adb). And while the process need not be launched in any special way, RGP does require that you have the Radeon Developer Panel (RDP) up and running and connected to the device before you launch the target application. RGP discovers newly launched graphical processes and then gives you the ability to profile it.

## General Setup

Ensure you have **adb** in your PATH. Follow our [ADB Setup Guide](/versioned_docs/version-02-Aug-2023/guides/developer-tools/android-debug-bridge/adb-setup.md) for more info.

Ensure your Magic Leap 2 device has joined a network and that your PC and device can interact on that network. Furthermore, the network has to support peer to peer connections (most public networks like wifi-guest and the network at, say, Starbucks, typically do not allow this activity, for security reasons).

All this can be verified as follows:

```shell
$ adb shell whoami  # should return 'root'. If not, do 'adb root'
$ adb shell ifconfig wlan0   # will reveal the IP address of your device
$ ping <device-ip-addr>
```

If the ping fails, then your device and PC are not accessible to each other on the network (e.g., your device is probably on wifi-demo but your PC is on Discovery or on Ethernet). You'll need to make your device join wifi-demo or Discovery.

Validating the ability to make peer to peer connections is a little trickier. One way to do that is to try to use adb over Wi-Fi. If that works, then you know the network configuration will allow RGP to work. Setting up ADB over Wi-Fi is outside the scope of this document, but there are many articles on the Internet on that topic. Note that using RGP does not require ADB to use Wi-Fi; USB is fine and in fact makes running the RGP startup script easier. So, if you set up ADB over Wi-Fi to determine if peer to peer connections are possible, your best bet is to undo that setup before using RGP. Simply do `adb -d usb`. At that point, ADB will use only USB.

Finally, make the device's system partition writable:

```shell
$ adb remount
```

Temporary: you also now need to disable *SELinux*:

```shell
$ adb shell setenforce 0
```

## RGP Setup

1. Download RGP from the [ML Hub Package Manager](/versioned_docs/version-02-Aug-2023/guides/developer-tools/ml-hub/ml-hub-package-manager.md).
2. Extract the RGP zip or tarball.
3. In a terminal with adb access, `cd` to the extracted directory.

## Launch RGP

In a terminal, at the root of the extracted layout:

```shell
$ ./rdp_android.py --target <device-ip-addr>
```

Additionally specify `-i` if you are using ADB over TCP/IP (instead of USB).

You should now see the **Radeon Developer Panel (RDP)**. You should see a green dot next to the Connection Tab. Click on the tab. You should see `Connected to Remote <ipaddr>` in the top left corner.

<Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp-remote.png")} >Radeon Developer Panel Connection Tab</Image>

If you see this, it means several things have gone right:

- the Radeon Device Server (RDS) has been started (device program)
- the Radeon Developer Panel (RDP) has been started (host program)
- the two are communicating over the network
- RDP is ready to discover the next graphical application that's launched

## Profile an APK

Let's profile a Magic Leap 2 Vulkan app (native-activity APK).

1. Download the `gears-debug.apk` if you didn't already download it as part of the RGP package.
2. Open another terminal, one that also has adb in PATH
3. Install and launch the apk as follows:

```shell
$ adb install /home/jcortell/Downloads/gears-debug.apk
$ adb shell am start de.saschawillems.vulkanGears/de.saschawillems.vulkanSample.VulkanActivity
```

4. Verify that the app is rendering on the monitor or headset.
5. Return to RDP. The UI should have automatically switched to the *APPLICATIONS* tab and should show that it has discovered the process you just launched.

<Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp-capture.png")} >Radeon Developer Panel Capture Profile Button</Image>

6. Click the **Capture profile** button. You should shortly see a progress bar. When it completes, you'll have a profile you can double click.

<Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp-profiling.png")} >Profiling Progress Bar</Image>

<Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp-profile.png")} >Collected Profile</Image>

7. Double click on the profile. It will launch RGP itself (you've been working with RDP until now).

<Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp-launch.png")} >RGP Overview Panel</Image>

## Troubleshooting

Please contact Customer Care if you encounter any issues. RGP is a proprietary AMD tool, but our Dev Tools team provides tier 1 support. They'll open a ticket with AMD as needed. Please provide the RGP log file when reporting an issue:

- windows: `C:\Users\<name>\AppData\Roaming\RadeonDeveloperPanel\log.txt`
- linux: `~/.local/share/RadeonDeveloperPanel/log.txt`

