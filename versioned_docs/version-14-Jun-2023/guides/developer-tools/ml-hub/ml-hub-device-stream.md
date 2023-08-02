---
id: ml-hub-device-stream
title: Device Stream
sidebar_position: 3
date: 08/29/2022
engine: All
tags: [ML Hub, Device Stream, Capture]
keywords: [ML Hub, Device Stream, Capture]
---

Stream and capture content from your Magic Leap device in the Magic Leap Hub.

:::caution Device Stream Limitations
Device Stream is intended as a **preview** tool for your content and not designed as a perfect way to stream every pixel perfectly. Device Stream uses the RTSP protocol, which prioritizes real-time over quality, meaning that while latency is expected to be low, not all pixels are necessarily going to be delivered, and those that are will have compression applied.

If perfect image quality is desired, it is recommended to instead do a capture session [using our adb-enabled tools](/docs/guides/developer-tools/android-debug-bridge/android-capture-commands) or by [using the ML Hub Advanced Capture tooling](/docs/guides/developer-tools/ml-hub/ml-hub-advanced-capture).
:::

## Setup

Before you can use Device Stream, ensure that these settings are enabled on your device:

* Settings > System > Advanced > Developer Options > Developer Mode
* Settings > System > Capture and Device Stream Settings

You must also be on the same WiFi network as your device.

When you're set up to stream, select your device from the drop-down list or add your device over WiFi using the **+** icon.  If you open Device Stream with a Magic Leap device connected, a streaming session automatically begins.

<Image url= {require("/img/unity/DeviceStreamNotify.png")} >After starting a session, you are notified to respond to an authorization prompt on-device</Image>

:::warning
When you start Device Bridge, you must respond to a prompt on your device before you can stream content. This is a privacy/security feature, as it prevents someone from sharing your experience without your knowledge. If you wait too long, the connection request times out, and you must start a new session. Each new session requires authorization.
:::

By default both digital and environmental content is streamed at 1080p. You can change this by changing **Settings** in the **Device Stream** menu.

<Image url= {require("/img/unity/DeviceStreamResolution.png")} >Resolution Dialog</Image>

While you have an active streaming session, use the icons to capture or control playback.

<Image url= {require("/img/unity/DeviceStreamIcons.png")} >Device Icons</Image>

Click the camera icon to save a screenshot to your captures folder. You can change the location of the folder in **Settings** in the ML Hub menu at the top of the screen.

Click on the **video** icon to start recording a streamed session. Click on the icon a second time to stop recording a session. Right-click the video icon to control duration and delay settings. Recordings are saved to the same *captures* folder.

Sound is mirrored on your computer from your device. Control the playback volume using the **volume** icon. This does not affect the volume on the device.

View your recordings from **Device Stream** > **Captures**. You can also open the *captures* folder from the Device Stream menu.

To stop streaming, hover over the stream and click the pause button. Use the **Device Stream** menu to quit Device Stream.

## Troubleshooting

If connecting to the headset fails, ensure [connecting to the Device Bridge works](/docs/guides/developer-tools/ml-hub/ml-hub-device-bridge#wifi-bridge).

### Device Not Found

The most common issue with Device Stream is not being able to connect to your headset. The most likely causes, in order are:

- Not being connected to the same WiFi network
- Trying to connect on an enterprise network that blocks peer to peer traffic
