---
id: radeon-gpu-profiler
title: Radeon GPU Profiler
sidebar_position: 1
date: 08/14/2023
engine: All
tags: [AOSP, Profiling, RGP, Radeon, AMD]
keywords: [AOSP, Profiling, RGP, Radeon, AMD]
---

----

## Overview

Radeon GPU Profiler (RGP) is a **GPU profiling tool** developed by AMD. It is a graphics profiling tool, which captures a single frame and tells you where all your time is being spent.This document is a how-to for installing the tool and using it with a Magic Leap 2 device. Extensive documentation for RGP exists [here](https://radeon-gpuprofiler.readthedocs.io/en/latest/). This document is just a primer for getting up and running with RGP, targeting Magic Leap OS.

## Limitations of RGP

This version of RGP has the following limitations:

- only works on *userdebug* lumin-aosp (*user* not yet supported)
- requires that you disable *SELinux* (shown below)

RGP only supports **Vulkan**; it does not support OpenGL. You can successfully target an OpenGL app and profile a frame, but that's only because the Magic Leap graphics pipeline ultimately ends up doing Vulkan activity, regardless of whether the app is making OpenGL calls or Vulkan. That said, the insight gathered from profiling an OpenGL app is not really meaningful. Really, this is a tool meant for use on Vulkan apps.

### About RGP

RGP is a single-frame profiler. That means that each capture operation profiles one and only one frame, whichever frame is being rendered at the time you initiate the capture. You can profile as many frames as you want, but each one is an independent operation and resulting file.

RGP, unlike other profiling tools, doesn't allow you to launch an application from the tool, for the sake of profiling it. The application needs to be launched independently (e.g., via the home menu or adb). And while the process need not be launched in any special way, RGP does require that you have the Radeon Developer Panel (RDP) up and running and connected to the device before you launch the target application. RGP discovers newly launched graphical processes and then gives you the ability to profile it.

## Prerequisites
To use RGP, you'll need the following installed:
* [Magic Leap Hub](https://developer-docs.magicleap.cloud/docs/guides/getting-started/install-the-tools) 
* 

## How to Install RGP (Linux and Windows Only)
This section walks you through installing RGP.

1. Navigate to the Magic Leap Hub. 

2. In Magic Leap Hub, open the Package Manager. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_package_manager.png")} >Download RGP</Image>

3. Click the **All** icon. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_all_icon.png")} >Click All Icon</Image> 

4. Find Radeon GPU Profiler package within the Common Packages category. Download the latest one. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_download_screen.png")} >Download RGP</Image>

5. You need to get access to adb to communicate with the device. The tool is part of ML Hub and can be found under C:\Users\_user_\MagicLeap\MLHub\plugins\com.magicleap.adb.win32.x86_64_1.0.41.28_0_2_202304071616\adb\adb.exe for windows. Use this guide to add this path to your Path environment variable on windows.

6. Check that you have access to adb by running: '''adb devices''' 
You should see that your device is connected to the host. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_device_connected.png")} >Check Device Connection with adb</Image>

7. Connect your Magic Leap 2 device to WiFi. Public WiFi will not work since peer-to-peer connections are disabled on public WiFi. Try connecting to a private WiFi network with password protection.

8. You can verify WiFi communication with these commands:
```adb shell ip -o -h -c a #reveals the IP address of your device under wLan0```

```ping <device-ip-addr> #contacts the device via WiFi to verify connection```

If everything is working, you'll get output similar to this: <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_check_wifi_connection.png")} >Check WiFi Connection with adb</Image>

If the ping fails, then your device and PC are not accessible to each other on the network. You need to make sure your device is connected to the same private WiFi as the host. 

Save the address displayed in the red box, you will need it later on.

9. You can launch RGP using Python 3 if you have it installed, or with the Magic Leap Hub and a commandline.

Python launch method - Navigate to your extracted RGP folder and run the following command: 
```./rdp_android.py --target <device_ip_addr>```

Jump ahead to step 13 if you use this method. 

10. If you do not have Python 3 installed, you can also launch RGP using the Magic Leap Hub and a commandline. Start by going to the commandline and running ```adb shell /vendor/bin/RadeonDeveloperServiceCLI```

11. Navigate to the Magic Leap Hub and launch RGP by finding the **RadeonTM GPU Profiler** and clicking **Launch**. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_launch_from_hub.png")} >Launch RGP with Hub and commandline</Image>

12. You're prompted to set the connection. Set the **Connection** dropdown from **Local ==> Remote <ip_addr>**.
<Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_set_connection_local.png")} >Set Connection - Local to Remote</Image>

13. Enter the IP address under **Host Name** that you saved from step 8. Make sure the port number is **27300**. Click on Connect. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_add_host_name.png")} >Add Host Name</Image>

14. If the connection is successful, you see a green dot next to **Connection**. It means your devices are connected and communicating, and the next application launched should be caught. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_connection_ok.png")} >Connection Ok</Image>

## Image Based Tutorial for Using RGP 
This tutorial goes over a common use case with RGP. Complete the other instructions in this document before starting with this tutorial. RGP is often used for cases such as:
* Shader time
* Draw time
* Application load

This tutorial shows you how to look at draw time. Take the following steps to try analyzing draw time with the Radeon Developer Panel: 

1. If you just walked through connecting your device, you should be on the last screen, with a green dot showing your devices are connected. If not, get to that place again using the previous instructions in this document before continuing.

2. Run your application on device. If you already have it running, close it and restart it.

3. With the application running, click on the **Capture profile** button. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/draw_capture_profile.png")} >Capture Profile for Draw Time</Image>

4. When the profile capture completes, select the profile from the list. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/draw_select_profile.png")} >Select Profile for Draw Time Review</Image>

5. An Overview of the frame summary should open. It highlights if the app is CPU/GPU bound. Next, click on the **Events** tab on top. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/draw_frame_summary.png")} >Draw Frame Summary</Image>

6. Click the **Event timing** section. Here you can see details of the API calls made by the driver and the application. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/draw_event_timing.png")} >Draw Event Timing</Image>

7. Here’s a breakdown of all draw calls made during the capture. In this example, we see the call taking 80.916 µs or **0.080916 ms**. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/draw_capture_call_breakdown.png")} >Draw Calls During Capture</Image>

You have now walked through analyzing a draw capture. 

## Known Issues
Here's a list of known issues for profiling apps with RGP:
* Unity applications do not work with RGP currently.
* For heavy applications, trying to capture RGP can cause the GPU to freeze. 
* The application is not usable afterRGP capture and requires a close and reopening. 






-------

Ensure you have **adb** in your PATH. Follow our [ADB Setup Guide](/docs/guides/developer-tools/android-debug-bridge/adb-setup.md) for more info.

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

1. Download RGP from the [ML Hub Package Manager](/docs/guides/developer-tools/ml-hub/ml-hub-package-manager.md).
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
