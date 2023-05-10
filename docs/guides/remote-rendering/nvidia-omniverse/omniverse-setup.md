---
id: omniverse-setup
title: Remote Rendering with Nvidia Omniverse
sidebar_label: Nvidia Omniverse Setup
sidebar_position: 1
description: Remote Rendering with Nvidia Omniverse.
date: 05/04/2023
tags: [Rendering, Servers, Omniverse, Remote Rendering]
keywords: [Rendering, Servers, Omniverse, Remote Rendering]
---

![Omniverse](/img/omniverse/car.webp)

:::caution Performance Considerations
Performance for remote rendering is highly-dependent on the capabilities of the host machine that is running Nvidia Omniverse. Noticeable lag may be a result of insufficient processing or GPU power.

This is an early access version of Nvidia's Omniverse tool for Magic Leap 2 users, based on Create XR. Future releases will be made available by Nvidia directly via the Omniverse Launcher.
:::

## Prerequisites

[Remote Rendering Setup Instructions with the Remote Rendering Service](/docs/guides/remote-render/remote-render).

## Setup

:::caution
It is necessary for the Remote Rendering service to be active before launching Omniverse.
:::

1. Download [Omniverse Create XR Magic Leap Early Access](https://ml2-developer.magicleap.com/downloads).
2. Unpack the file to a suitable location.
3. Execute the extracted **RunOmniverseML.bat** file by double-clicking.

:::info
After launching, new shaders will be generated for your GPU, which might take a few minutes. Please be patient.
:::

4. Click on the **"Start Magic Leap"** button in Omniverse. This finalizes the configuration but will not yet show anything on the device until Omniverse has been restarted.
5. Close Omniverse. Everything has been configured at this point and subsequents starts will be much faster.

![Main window](/img/omniverse/main.png)

## Usage

1. Execute the extracted **RunOmniverseML.bat** file by double-clicking.
1. Open an existing USD file using **File** -> **Open...** or create a new one.
1. Click on the **"Start Magic Leap"** button in Omniverse. At this point Omniverse will render a stereoscopic image on your PC and it is being displayed on in the Remote Rendering app on your Magic Leap 2 device.

Press the <kbd>Menu</kbd>/**Settings** button on your Controller to see a settings panel and to enable tool tips:

![Controller](/img/omniverse/controller.png)

For more information, please see the official documentation of [Nvidia Omniverse Create XR](https://www.nvidia.com/en-us/omniverse/apps/xr/).

## Known Issues

- After clicking "Stop Magic Leap" you might see the window turn black or red. Unfortunately there is currently no solution for this issue - please restart the app.
- Multi-GPU systems are not supported. If you have more than one GPU, you need to disable one of them in Device Manager.

## Demo content

The above download contains just the core application. We also have additional demo downloads available. Those contain the same core application but come bundled with example content and example scripts. This makes them a great tool for learning how to create customized Omniverse plugins for your business use case.

### Car Demo

The [Car Demo](https://ml2-developer.magicleap.com/downloads) contains a highly detailed car model and demonstrates basic interaction features.

- Click **RunDemo.bat**
- Once Omniverse is set up (see above), select **Windows/Magic Leap Car Demo**
- Press the **Load Content** button and then **Start Magic Leap**
- You will see a sports car and a selection panel beneath it.
  - Click on the color swatches to change the car's paint and wheels. 
  - Click on the driver side door to open it and turn on additional lights
