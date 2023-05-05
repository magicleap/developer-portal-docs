---
id: remote-render-nvidia-omniverse
title: Remote Render with Nvidia Omniverse
sidebar_label: Nvidia Omniverse
sidebar_position: 2
description: Remote Render with Nvidia Omniverse.
date: 05/04/2023
tags: [Rendering, Servers, Omniverse, Remote Render]
keywords: [Rendering, Servers, Omniverse, Remote Render]
---

![Omniverse](/img/omniverse/car.webp)

:::caution Performance and Gotchas
Performance for remote rendering is highly-dependent on the capabilities of the host machine that is running Nvidia Omniverse. Noticeable lag may be a result of insufficient processing or GPU power.

This is an early access version of Nvidia's Omniverse tool for Magic Leap 2 users. Future releases will be made available by Nvidia directly via the Omniverse Launcher.
:::

## Prerequisite

[Remote Render Setup Instructions with the Remote Render Service](/docs/guides/remote-render/remote-render).


## Setup
:::info
It is necessary for the Remote Render service to be active before launching Omniverse.
:::

1. Download [Omniverse Create XR Magic Leap Early Access](https://ml2-developer.magicleap.com/downloads).
1. Unpack the file to a suitable location
1. Click on the extracted **RunOmniverseML.bat** file
1. After launching, new shaders will be generated for your GPU, which might take a few minutes. Please be patient
1. Click on the **"Start Magic Leap"** button in Omniverse. This finalizes the configuration but will not yet show anything on the device until Omniverse has been restarted.
1. Close Omniverse. Everything has been configured at this point and subsequents starts will be much faster.

![Main window](/img/omniverse/main.png)

## Usage
1. Click the **RunOmniverseML.bat** file
1. Open an existing USD file using File/Open.. or create a new one.
1. Click on the **"Start Magic Leap"** button in Omniverse. At this point Omniverse will render a stereoscopic image on your PC and it is being displayed on in the Remote Render app on your Magic Leap 2 device.

Press the Menu / Settings button on your controller to see a settings panel and to enable tool tips:
![Controller](/img/omniverse/controller.png)


## Known Issues
* After clicking "Stop Magic Leap" you might see the window turn black or red. Unfortunately there is currently no solution for this issue - please restart the app.

* Multi-GPU systems are not supported. If you have more than one GPU, you need to disable one of them in Device Manager.