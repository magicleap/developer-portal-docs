---
id: adb-bugreport
title: ADB Bugreport
sidebar_position: 4
date: 02/14/2023
tags: [Android Debug Bridge, adb, command line]
keywords: [Android Debug Bridge, adb, command line]
---

:::tip Bug Reports from the ML Hub
Bug reports [can also be gathered using the ML Hub](/docs/guides/developer-tools/ml-hub/ml-hub-bugreport.md).
:::

There are cases when debugging a project with logs available from your development environment may not be sufficient. In this case, it can be useful to create and submit a bug report that can be examined more closely.

To create a bug report, use the `adb bugreport` command. You can run the following command to generate it and save it on your computer:

```shell
adb bugreport E:\Path\To\BugReports
```

If you don't specify a path for the bug report, it is saved to the local `/bugreports/` directory of the device with a path resembling, `bugreport-demophon_aosp-B3E.221128.08-R.092-2023-02-14-11-59-32.zip`

:::tip
See [Android's Bug Report documentation](https://developer.android.com/studio/debug/bug-report) for more information on generating a bug report using ADB.
:::

## Download Bug Report Using ML Hub

Downloading the file is as simple as navigating to the [Device Bridge](/docs/guides/developer-tools/ml-hub/ml-hub-device-bridge), going to the Files tab, and selecting the relevant bug report:

<Image url= {require("/img/developer-tools/adb/adb-bugreport-files.png")} >Downloading a bug report through the Device Bridge</Image>
