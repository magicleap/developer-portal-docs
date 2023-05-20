---
id: app-sim-setup
title: Application Simulator Setup
sidebar_position: 0
date: 08/29/2022
engine: All
tags: [Application Simulator, Developer Tools, Setup]
keywords: [Application Simulator, Developer Tools, Setup]
---


Follow this guide to setup Application Simulator for use in your development cycles.

## System Requirements

Intel integrated graphics are not supported. Consult the tables below for the minimum and the recommended system requirements.

### Minimum System Specs

| Item | Specification |
| -------------- | ---------------------------------------- |
| **CPU** | Quad-core Intel or AMD, 2.5 GHz|
| **Memory** | 2 GB RAM |
| **Graphics** | NVIDIA Geforce or AMD Radeon graphics. PC graphics cards must be Open GL 4.3 conformant. Mac graphics cards must be Open GL 4.1 conformant. Minimum resolution of 1280x1024 is expected. |
| **Operating System**             | Windows 10 (64-bit) or macOS Sierra (10.12) |
| **Administration** | Administrator access to your computer's operating system       |

### Recommended System Specs

| Item | Recommendation |
|---------|--------------------------------------------------------------------|
| **CPU** | 8th-generation Intel i7 (6 cores, 12 threads with hyperthreading) |
| **Memory**    | 8 GB RAM |
| **GPU** | **PC:** NVIDIA 1070 GTX or later with recent GeForce drivers. **Mac:** NVIDIA Geforce or AMD Radeon GPU. PC graphics cards must be Open GL 4.3 conformant. Mac graphics cards must be Open GL 4.1 conformant. |
| **OS** | Windows 10 (64-bit), macOS Sierra (10.12) to macOS Monterey (12.6) |
| **Gamepad (optional)** | Any gamepad recognized by your host OS as a USB gamepad. Microsoft Xbox controllers on macOS require support from [360Controller](https://github.com/360Controller/360Controller/releases). |

## Installing Application Simulator

Application Simulator is typically installed as an optional component when installing bundles in the [ML Hub's Package Manager](/docs/guides/developer-tools/ml-hub/ml-hub-package-manager.md). If the Application Simulator activity card is already present in the ML Hub, you have already installed Application Simulator, but the Application Simulator Runtime package may need to be updated when you update the ML Hub (the app will let you know if this is required).

![Start Application Simulator from the Application Simulator Activity Card](/img/app-sim/ml_hub_app_sim.png)

If the card is not present, you can install Application Simulator in the ML Hub as follows:

1. Launch the ML Hub.
2. Click **Package Manager**.
3. Click the **All** tab.
4. Go to **Magic Leap Hub Modules > Magic Leap Application Simulator**, and then click the **Install** icon.

![Installing Application Simulator from Package Manager](/img/app-sim/app_sim_download.png)

5. Verify that the **Magic Leap Application Simulator (ZI) Runtime** package has been added to the **Change Summary** pane. If not, find and add it under **Common Packages**.
6. Click **Apply Changes**.

![Apply Changes](/img/app-sim/app_sim_packages_download.png)

7. Restart the ML Hub when prompted to do so.

## Starting Application Simulator

The first time you use Application Simulator, you need to make an SDK and target selection:

1. Click **Start Application Simulator** on the Application Simulator activity card in the ML Hub. The Application Simulator module workspace appears, and the Target Selector dialog automatically comes up.

![Start Application Simulator](/img/app-sim/target_connection.png)

1. Select an installed SDK, and then a target as follows:

    - **Simulator**: If you do not have a device, Application Simulator can render graphics to a window that is a composite of simulated Headset graphics on top of 3D geometry of a virtual room. Headpose, Controller input, gestures, and similar sensory input is simulated through a GUI. The 3D geometry in the virtual room services world reconstruction requests (meshing, planes, raycast). When iterating using the Simulator, your app's content is composited together with a depiction of your virtual room and rendered to the Device View.

    - **Your Device**: If you have a device, Application Simulator can stream the rendered frames to the Headset. Headpose, Controller input, gestures, and similar sensory input is sent from the device to the computer. You are able to effectively preview the app without needing to go through a time-consuming build and deploy process.

    - **Hybrid**: Combines the power of infinite test scenarios within the Simulator with the responsiveness of the physical device sensors. Headpose, Controller input, Hand Tracking, Eye Gaze, and similar sensory input is sent from the device to the computer and is mirrored in the Virtual Room. World reconstruction requests continue to make use of 3D geometry in the virtual room.

2. Click **Connect**.

For launching future Application Simulator sessions using the same SDK and target, you can toggle the **State** slider from **Off** to **Running**. The Target dropdown maintains a history of recent launches, allowing convenient switching.
