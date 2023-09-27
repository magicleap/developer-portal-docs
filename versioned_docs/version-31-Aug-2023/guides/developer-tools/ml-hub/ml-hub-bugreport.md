---
id: ml-hub-bugreport
title: Capture Bug Reports
sidebar_position: 4
date: 04/06/2023
tags: [ML Hub,Bug Report, Developer Mode]
keywords: [ML Hub,Bug Report, Device, Create, Developer Mode]
---

The Magic Leap Hub provides a convenient way for users to generate Magic Leap 2 bug reports. The generated bug report will be exported as a zip file and can be used to help debug or diagnose issues with software and hardware.

Use the steps below to generate a bug report using the Magic Leap Hub:

1. Open the **ML Hub**
2. Click the plugged-in device in the lower-right-hand tray
3. Click the "bug" icon as shown in the image below

<Image url= {require("/img/ml-hub/bugreport-menus.png")} >Downloading a bug report through the ML Hub</Image>

A dialog will open asking you to save the bug report ZIP file:

<Image url= {require("/img/ml-hub/save-bugreport.png")} >Save bug report dialog</Image>


:::tip Reading Bug Reports
See [Android's Bug Report documentation](https://source.android.com/docs/core/tests/debug/read-bug-reports) for information on how to read bug reports
:::

:::tip Create Bug Reports using ADB
Bug reports [can also be gathered using `adb`](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/adb-bugreport.md).
:::

