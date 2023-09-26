---
id: capture-overview
title: System Capture
sidebar_position: 11
date: 08/29/2022
tags: [Features, Capture, Media, Video, Photo, Screenshot, ML Hub, Device Bridge, ADB]
keywords: [Features, Capture, Media, Video, Photo, Screenshot, ML Hub, Device Bridge, Recorder, Record]
---

The Capture App allows you to take screenshots and screen recordings on the Magic Leap 2 from any app or platform. Below you'll find instructions on capturing media and accessing it on-device, in the ML Hub.

:::info ADB Capture Commands

To learn how to capture videos and images on your device using ADB, see the [adb capture commands guide](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/android-capture-commands.md).

:::

## Activate Capture On-Device

You can activate Capture on any Magic Leap 2 app or menu by pressing and holding the **home** button and then pressing and releasing the **bumper**.

The animation below shows the correct button sequence:

<Image url= {require("/img/features/capture-controller.gif")} >Controller Animation of Capture Button Press Sequence</Image>

:::note
You might have trouble activating Capture if the app you're using currently is accessing the camera stream.
:::

### Photo

Pressing and releasing the bumper immediately results in a photo capture. A timer counts down *three seconds* and then the device takes a **screenshot**.

### Video

Pressing and holding the bumper for *three seconds* and then releasing starts a video capture. A timer counts down *three seconds* after you release, and then the device begins a **screen recording**. To stop recording, repeat the Capture button sequence (press and hold home, then press and release the bumper).

## Access Capture Media On-Device

After you've captured some content, you can view your photos and videos on the Magic Leap 2.

1. From the **home menu**, open **Settings**.
2. Open **Apps**, and select "**See All Apps**".
3. Scroll down and select **Files**, then select **Open**.
4. From here you can see the images, audio, and videos that you have captured.

:::info
These steps will change in upcoming builds as we continue to develop our default apps and media viewers. You may not be able to open the images or videos on-device. If so, follow the subsequent sections to open them on your computer.
:::

## Access Capture Media via the ML Hub

:::tip
For instructions on installing the ML Hub, follow the [**Getting Started Tools**](/versioned_docs/version-31-Aug-2023/guides/getting-started/install-the-tools.md) page.
:::

Captured media can also be accessed from your computer by connecting the Magic Leap 2 over USB and using the ML Hub's [**Device Bridge**](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-device-bridge.md) tool.

1. Connect your compute pack to your computer via USB.
2. Open the **ML Hub** app.
3. Open the **Device Bridge** module by selecting "**Start Device Bridge**".
4. If your device is connected appropriately, your headset and device details should appear. If you see a screen that is asking for USB or WiFi connection, check your USB cable to ensure the device is recognized.
5. On the top level navigation, select **Files**, and then navigate to the `/storage/self/primary/DCIM` folder. Here you will find any photos and videos you've captured and you can download them by clicking the **Download** button on the right side of the page.

