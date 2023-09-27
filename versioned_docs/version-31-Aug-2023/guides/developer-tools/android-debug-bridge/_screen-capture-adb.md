---
id: screen-capture-adb
title: Screen Capture with ADB
sidebar_position: 3
date: 07/14/2022
tags: [Android Debug Bridge, ADB, Command Line, Capture, Screenshot, Video, Photo]
keywords: [Android Debug Bridge, ADB, Command Line, Capture, Screenshot, Video, Photo]
---

Here are some commands used in ADB specifically pertaining to the [Capture](/versioned_docs/version-31-Aug-2023/guides/features/capture-overview.md) functionality and downloading on-device screenshots and video/audio recordings.

For instructions on how to install and use adb, follow the [ADB Setup Guide](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/adb-setup.md).

For other general use commands, please reference the [ADB  Commands](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/adb-commands.md) page.

:::note
If you're trying to capture a stock Android app (e.g., the MDM app), use `adb shell screencap` for a screenshot, as per the standard Android way. `adb shell screenrecord` (for screencasts) is not available on our platform.
:::

:::info
If you are unable to use `setprop` or `root` commands, you likely are using a *user* build of the OS. These commands only work on *userdebug* builds of the OS.
:::

## Using *mlcapture*

### View All Options

```bash
adb shell mlcapture --help
```

Outputs:

```bash
Usage: capture image [-c (real|virtual|mixed) [-q (1080p|720p|4k)] [-b (alpha|additive|hybrid)] (-s | <dest-file.jpg>)
       capture video [-c (real|virtual|mixed) [-d] [-p (1080p|720p|4k)] [-r (9:10|4:3)]  [-b (alpha|additive|hybrid)]
                     [-a (voice|world|virtual|mixed)] (-f <cnt> | -t <sec> | -w) (-s | <dest-file.mp4>)
              -c: capture type (default is mixed)
              -s: stream result to stdout (without -s, destination file must be specified)
              -q: quality, resolution to capture with (default is 1080p)
              -b: blend type (default is additive)
           options for video capture only:
              -f <cnt>: number of frames to record
              -t <time>: time in seconds to record. Can be floating point number (e.g., 1.5)
              -w: record until something is entered on the keyboard
              -d: use digital video stabilization
              -a: audio recording type (default is mixed)
```

### Capture Workflow Setup

Run these commands to prepare your environment for the capture commands (e.g. `mlcapture image`, `mlcapture video`):

```bash
adb root
adb remount
adb shell
cd /data/local/tmp
```

:::note
The final step is to `cd` into a `tmp` directory because you cannot capture to the device root directory. You can choose to `cd` to another directory you want to download to, or you can specify the download path explicitly in the capture command.
:::

### Image Examples

```bash
mlcapture image -c mixed mixedImage.jpg
```

```bash
mlcapture image -c virtual -b hybrid virtualImage.jpg
```

### Video Examples

```bash
mlcapture video -c virtual -a virtual -t 60 VV_VA_60s.mp4
```

```bash
mlcapture video -c mixed -a virtual -t 90 MV_VA_90s.mp4
```

## Using *mlcapture* to Download Directly to PC

### Capturing Video (Limited to Predefined Duration)

```bash
cd <whichever-local-directory-you-want>
adb exec-out mlcapture video -t 90 -s > capture_90s.mp4
```

### "Talking Through a Bug Report" (Capture Including Voice)

```bash
cd <whichever-local-directory-you-want>
adb exec-out mlcapture video -c virtual -a mixed -t 120 -s > video.mp4
```

## Managing Captures Already on Device

:::note
These commands are used when accessing captures taken through the [Capture App], not the above `mlcapture` method.
:::

### Navigate to Local Directory Destination

```bash
cd <where-you-want-the-capture>
```

### Choose Which Media to Download

All Photos and Videos:

```bash
adb pull storage/emulated/0/DCIM
```

Photos:

```bash
adb pull storage/emulated/0/DCIM/photos
```

Videos:

```bash
adb pull storage/emulated/0/DCIM/videos
```

### Delete All Captures

```bash
adb shell rm -rf storage/emulated/0/DCIM
```

