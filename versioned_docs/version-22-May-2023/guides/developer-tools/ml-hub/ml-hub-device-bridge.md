---
id: ml-hub-device-bridge
title: Device Bridge
sidebar_position: 2
date: 08/29/2022
engine: All
tags: [ML Hub, Device Bridge, Developer Mode]
keywords: [ML Hub, Device Bridge, Developer Mode]
---


**Device Bridge** helps you manage apps, files, and logs on Magic Leap devices and view information about the device. Device Bridge provides an interface to many [Android Deb Bridge (ADB)](https://developer.android.com/studio/command-line/adb) commands to speed your development processes.

![Device Bridge Console](/img/ml-hub/device_bridge.png)

## Prerequisites

- Install the [Magic Leap Hub](https://developer.magicleap.cloud/downloads) on your computer
- Before you can use Device Bridge, ensure that these settings are enabled on your device:
  - **Settings** > **Developer** > **Developer Mode**
  - **Settings** > **Developer** > **Enable MLDB Access**

## Use Device Bridge

Connect your Magic Leap device to your computer with a USB cable, or use the ML Hub to connect to your device over WiFi (WiFi Bridge). If you have multiple devices connected to your development machine, select a device from the drop-down list.

![Select device from the device drop-down list](/img/ml-hub/device_dropdown.png)

If you want to send commands over WiFi, you must first use a wired connection to configure WiFi Bridge. See [WiFi Bridge](#wifi-bridge) below for configuration information.

![WiFi Bridge toggle is enabled with network, IP address, and port number entries filled out](/img/ml-hub/wifi_bridge.png)

**Note**: You can open Device Bridge in the ML Hub from:

- **Activities Home**
- **Activity** bar (after the first use)
- **Device Tray**

Click on your device in the **Device Tray** to perform common commands like reset headpose and configure WiFi Bridge.

![Visual overview of the device tray with the device expanded. General information about the device and connected network is available and common device commands](/img/ml-hub/device_tray.png)

With a device connected, you can use the following features:

- **Dashboard** - View device information including:
  - Storage information
  - Device serial number
  - Installed OS and API level
  - Battery charge

You can **Restart** or **Shutdown** the device and manage **WiFi Bridge**.

![Device Bridge Console](/img/ml-hub/device_bridge.png)

- **Apps** - View and manage installed apps and app information. Install apps, launch selected apps, or uninstall apps from this screen.

   ![Overview of Apps, showing the app name, version, status, type, and debuggability.](/img/ml-hub/device_apps.png)

- **Files** - Navigate the accessible, on-device file system. Download, upload, delete, or duplicate files and folders from this screen. Downloaded files are kept in the */Users/`<name>`/Magic Leap/downloads* by default. You can specify where Magic Leap files download to your computer in **Settings** in the **Action** menu. You can also change which folders are listed and which confirmation prompts are displayed by changing settings.

   ![Overview of files, showing the on-device folder structure and the files included in the selected folder](/img/ml-hub/device_files.png)

- **Log** - View log entries from the device. You can save, pause, search, or clear the logs.

   ![Overview of Log, displaying a few log entries](/img/ml-hub/device_log.png)

## WiFi Bridge

Configure WiFi Bridge to send commands to your device over WiFi, including CLI commands.

1. Toggle **WiFi Bridge** to enable WiFi connections. Both your device and your development machine must be on the same WiFi network.

   ![WiFi Bridge panel](/img/ml-hub/wifi_bridge.png)

