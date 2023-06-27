---
id: renderdoc
title: RenderDoc
sidebar_position: 2
date: 08/29/2022
engine: All
tags: [AOSP, Debugging, RenderDoc]
keywords: [AOSP, Debugging, RenderDoc]
---


## Overview

[RenderDoc](https://renderdoc.org/) is a stand-alone graphics debugger that allows quick and easy single-frame capture and detailed introspection of any application.

This version has the following limitations:

- supports Windows 10, and Ubuntu (16.04 and up). Does not support macOS.
- supports *userdebug* Magic Leap AOSP only (*user* will eventually be supported).
- supports Magic Leap 2 only (no plans for Magic Leap 1 support).

Also, RenderDoc can only target processes that directly make **OpenGL or Vulkan** calls. That means you cannot use RenderDoc on Kali applications (processes) themselves (*systemui* is the one exception since it hosts the kali server in-process). Magic Leap engineers can debug the Kaliverse process, which is what makes the graphics calls on behalf of the Kali client app.

## General Setup

Ensure you have **adb** in your PATH. Follow our [ADB Setup Guide](/docs/guides/developer-tools/android-debug-bridge/adb-setup.md) for more info.

Download RenderDoc from the [ML Hub Package Manager](/docs/guides/developer-tools/ml-hub/ml-hub-package-manager.md). Extract the zip or tarball.

### Windows Setup

Open the unzipped RenderDoc directory and launch `qrenderdoc.exe`.

### Ubuntu 16.04 Setup

RenderDoc relies on Qt 5.11, which is newer than what Ubuntu 16.04 comes with. To update, do the following:

```bash
$ sudo add-apt-repository ppa:deadsnakes/ppa
$ sudo apt update
$ sudo apt install qt511-meta-full
$ mkdir ~/.config/qtchooser
$ echo "/opt/qt511/bin" > ~/.config/qtchooser/default.conf
$ echo "/opt/qt511/lib" >> ~/.config/qtchooser/default.conf
```

To verify that all worked:

```bash
$ qmake -v
QMake version 3.1
Using Qt version 5.11.1 in /opt/qt511/lib
```

If all looks good, extract the RenderDoc preview tarball to a location and launch `qrenderdoc`.

### Ubuntu 20.04 and 18.04 Setup

```bash
$ sudo add-apt-repository ppa:deadsnakes/ppa
$ sudo apt-get update 
$ sudo apt-get install python3.5
$ sudo apt-get install python3.5-dev
$ sudo apt-get install qt5-default
$ sudo apt install --reinstall libqt5widgets5 libqt5gui5 libqt5dbus5 libqt5network5 libqt5core5a
$ sudo apt-get install -y libqtav-dev
$ sudo apt-get install libqt5x11extras5
```

## Device Setup

You should have a fairly recent (05/2022 or newer) build of Magic Leap AOSP on your device, as older builds have not been tested with RenderDoc.

If you're going to use RenderDoc on a Vulkan app, you'll likely need to disable the Magic Leap 2 system Vulkan Khronos layer library, as it does not work well with RenderDoc's layer.

```bash
$ adb root
$ adb remount
$ adb shell mv /system/lib64/libVkLayer_khronos_validation.so /system/lib64/libVkLayer_khronos_validation.so.disable
```

Finally, if you've used an older version of RenderDoc for Magic Leap 2 with your device, you'll need to uninstall the RenderDoc replay server app

```bash
$ adb uninstall org.renderdoc.renderdoccmd.x64
```

## Launching and Debugging

1. Launch RenderDoc (see guidance above, per host OS).
2. In the bottom left of the frame, click on **Replay Context**
   1. If you don't see a *Magic Leap (demophon)* option, then ADB is not in PATH. You'll need to point RenderDoc to an Android SDK that has the Platform Tools installed (i.e., adb). You can do that in *Tool > Settings > Android > Set Android SDK Path*
3. Click the Magic Leap option in the Replay Context menu.
4. You should shortly see *Remote server ready* in the status bar, next to the Replay Context.
5. Click on the **Launch Application** tab. Use the *browse (...)* button next to Executable Path to pick an application and activity to launch.
   1. Note that you can save the launch settings to a file and reuse them later.
6. Click on the **Launch** button.
7. A new tab should open up. After a few seconds, the buttons to initiate a frame capture will become enabled.
   1. If the button doesn't show up, double check that the application is rendering to the headset or monitor.
8. Click on the **Capture Frame(s) Immediately** button.
9. It will take a few seconds for the capture to happen, after which you will see the capture, with thumbnail, in the C**aptures collected** pane.
10. Double click the capture. A progress bar will appear, after which the **Event Browser** will populate with the frame activity.

<Image url= {require("/img/developer-tools/lumin-aosp-tools/renderdoc/renderdoc-eventbrowser.png")} >Radeon Developer Panel Connection Tab</Image>

You can now use RenderDoc as you normally would. Detailed guidance on using RenderDoc is outside the scope of this document, but the developer of RenderDoc has plenty of [documentation](https://renderdoc.org/docs/getting_started/quick_start.html).

## Debugging Something Other Than an APK

RenderDoc has the ability to launch the app it's going to debug. This is quite convenient, as you saw above, but the launching support is limited to formal applications (APKs). What if you want to debug some arbitrary program you normally launch via `adb shell`? What if you want to debug a service, like kaliverse?

These use cases are supported with the attach feature of RenderDoc. That is, RenderDoc is able to attach to an already running process...but there's a catch. You have to do a little setup first so that the process has the right stuff loaded into it when it's launched. And once you've done this setup, any subsequent launch of a graphical program (something that does OpenGL/Vulkan) in that boot cycle will automatically be attachable.

That setup activity is encapsulated in a script that's at the root of the RenderDoc for lumin-aosp layout. The name of the script is  `non-apk-setup.sh/bat`.

We'll use that script in this recipe for using RenderDoc on Kaliverse to capture the frame of Home Menu:

1. Boot up the Magic Leap 2 and ensure that the Home Menu is visible on the headset or monitor.
2. Launch RenderDoc and select *Magic Leap Demophon* in the Replay Server drop-down.
3. Look at the headset/monitor. If you see the green RenderDoc logo, that's the replay server that has come into the foreground. You need to push it to the background. The easiest way is:
   1. `adb shell input keyevent 4`
4. Run the `non-apk-setup` script.
5. Force Kaliverse to restart with:
   1. `adb shell killall -9 kaliverse`
6. Wait for the Home Menu to appear again.
7. In RenderDoc, select *File > Attach to Running Instance*.
8. A dialog shows up showing all the device-side processes that you can attach to. Double click on **kaliverse**.
9. You can now click *Capture Frame Immediately* to capture a frame.

Any process that is launched after having run the `non-apk-setup` script should be attachable. Just keep in mind that the process must be making OpenGL or Vulkan calls in order to be attachable and capturable. Also, make sure you're actually seeing the program render on the headset or monitor. If it's in the background, you won't be able to capture a frame.

To undo the debugging of kaliverse (necessary in order to debug other apps):

```shell
adb shell rm -rf /data/local/debug/gles
adb shell setprop debug.gles.layers '""'
adb shell killall -9 kaliverse
```

## AMD Counters and RGP Interoperability

There are two features AMD added to RenderDoc.

- ability to collect AMD GPU counters for the captured frame (Vulkan apps only)
- ability to do an RGP profiling of the captured frame (Vulkan apps only)

Both of these features currently require first doing a manual step via adb:

```shell
adb shell su root chmod 766 /sys/class/drm/card0/device/power_dpm_force_performance_level
```

Only after you've done that can these AMD-specific features be used. Also, keep in mind that the chmod is not persistent across reboots.

To get AMD GPU counters for a captured frame, open the frame in RenderDoc (double click on it after capturing it), then go to *Windows > Performance Counter Viewer*. Click **Capture Counters**. It'll take a few seconds for the dialog to populate, but you'll end up seeing:

<Image url= {require("/img/developer-tools/lumin-aosp-tools/renderdoc/renderdoc-selection.png")} >Radeon Developer Panel Connection Tab</Image>

Select which counters you want to collect, then click **Sample counters**. You'll end up with something like this:

<Image url= {require("/img/developer-tools/lumin-aosp-tools/renderdoc/renderdoc-viewer.png")} >Radeon Developer Panel Connection Tab</Image>

To perform an RGP profiling of the frame currently opened in RenderDoc, you first have to turn on a setting. Go to *Tools > Settings > Core* and turn on **Enable Radeon GPU Profiler integration**. Also set the path to your RGP application. You should close RenderDoc and reopen it for good measure at this point. This is a one-time step; the setting will persist across launches of RenderDoc and device reboots.

Once you've captured a frame in a Vulkan app and opened it in RenderDoc, select *Tools > Create new RGP Profile*. It can take a minute or two for the whole process to complete, but RenderDoc should eventually launch RGP to show you the profiling information for the frame.
