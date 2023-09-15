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

Radeon GPU Profiler (RGP) is a **GPU profiling tool** developed by AMD. It is a graphics profiling tool, which captures a single frame and tells you where all your time is being spent. This document is a how-to for installing the tool and using it with a Magic Leap 2 device. Extensive documentation for RGP exists [here](https://radeon-gpuprofiler.readthedocs.io/en/latest/). This document is a primer for getting up and running with RGP, targeting Magic Leap OS.

### About RGP

RGP is a single-frame profiler. That means that each capture operation profiles one and only one frame, whichever frame is being rendered at the time you initiate the capture. You can profile as many frames as you want, but each one is an independent operation and resulting file.

RGP, unlike other profiling tools, doesn't allow you to launch an application from the tool, for the sake of profiling it. The application needs to be launched independently (e.g., via the home menu or adb). And while the process need not be launched in any special way, RGP does require that you have the Radeon Developer Panel (RDP) up and running and connected to the device before you launch the target application. RGP discovers newly launched graphical processes and then gives you the ability to profile it.

## Prerequisites
To use RGP, you'll need the following installed:
* [Magic Leap Hub](https://developer-docs.magicleap.cloud/docs/guides/getting-started/install-the-tools)
* [adb](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/android-debug-bridge/adb-setup/)

## How to Install RGP (Linux and Windows Only)
This section walks you through installing RGP.

1. Navigate to the Magic Leap Hub. 

2. In Magic Leap Hub, open the **Package Manager**. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_package_manager.png")} >Download RGP</Image>

3. Click the **All** icon. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_all_icon.png")} >Click All Icon</Image> 

4. Find the **Radeon GPU Profiler** package within the **Common Packages** category. Download the latest one. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_download_screen.png")} >Download RGP</Image>

5. Double check that you have access to adb by running: ```adb devices``` 
You should see that your device is connected to the host. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_device_connected.png")} >Check Device Connection with adb</Image>

6. Connect your Magic Leap 2 device to WiFi. Public WiFi will not work since peer-to-peer connections are disabled on public WiFi. Try connecting to a private WiFi network with password protection.

7. You can verify WiFi communication with these commands:
```shell
adb shell ip -o -h -c a #reveals the IP address of your device under wLan0```

```shell
ping <device-ip-addr> #contacts the device via WiFi to verify connection```

If everything is working, you'll get output similar to this: <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_check_wifi_connection.png")} >Check WiFi Connection with adb</Image>

If the ping fails, then your device and PC are not accessible to each other on the network. You need to make sure your device is connected to the same private WiFi as the host. 

Save the address displayed in the red box, you will need it later on.

8. You can launch RGP using Python 3 if you have it installed, or with the Magic Leap Hub and a commandline.

Python launch method - Navigate to your extracted RGP folder and run the following command: 
```./rdp_android.py --target <device_ip_addr>```

Jump ahead to step 12 if you use this method. 

9. If you do not have Python 3 installed, you can also launch RGP using the Magic Leap Hub and a commandline. Start by going to the commandline and running ```adb shell /vendor/bin/RadeonDeveloperServiceCLI```

10. Navigate to the Magic Leap Hub and launch RGP by finding the **RadeonTM GPU Profiler** and clicking **Launch**. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_launch_from_hub.png")} >Launch RGP with Hub and commandline</Image>

11. You're prompted to set the connection. Set the **Connection** dropdown from **Local ==> Remote <ip_addr>**.
<Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_set_connection_local.png")} >Set Connection - Local to Remote</Image>

12. Enter the IP address under **Host Name** that you saved from step 8. Make sure the port number is **27300**. Click on Connect. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_add_host_name.png")} >Add Host Name</Image>

13. If the connection is successful, you see a green dot next to **Connection**. It means your devices are connected and communicating, and the next application launched should be caught. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_connection_ok.png")} >Connection Ok</Image>

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

## Troubleshooting

Please contact Customer Care if you encounter any issues. RGP is a proprietary AMD tool, but our Dev Tools team provides tier 1 support. They'll open a ticket with AMD as needed. Please provide the RGP log file when reporting an issue:

- windows: `C:\Users\<name>\AppData\Roaming\RadeonDeveloperPanel\log.txt`
- linux: `~/.local/share/RadeonDeveloperPanel/log.txt`
