---
id: adb-bugreport
title: ADB Bugreport
sidebar_position: 4
date: 02/14/2023
tags: [Android Debug Bridge, adb, command line]
keywords: [Android Debug Bridge, adb, command line]
---

There are cases when debugging a project with logs available from your development environment may not be sufficient. In this case, it can be useful to create and submit a bug report that can be examined more closely.

To create a bug report, enter the following into a terminal shell:

```shell
adb bugreport
```

This .ZIP archive will be saved on-device at the path, `/bugreports/` with a path resembling, `bugreport-demophon_aosp-B3E.221128.08-R.092-2023-02-14-11-59-32.zip`.

Downloading the file is as simple as navigating to the [Device Bridge](/docs/guides/developer-tools/ml-hub/ml-hub-device-bridge), going to the Files tab, and selecting the relevant bug report:

![Downloading a bug report through the Device Bridge](/img/developer-tools/adb/adb-bugreport-files.png)
