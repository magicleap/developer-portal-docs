---
id: android-debug-bridge
title: Android Debug Bridge
sidebar_position: 0
date: 05/02/2022
tags: [Android Debug Bridge, adb, command line]
keywords: [Android Debug Bridge, adb, command line]
---


Android Debug Bridge (ADB) is a command-line tool that allows you to communicate with Android Open Source Project (AOSP) devices such as the Magic Leap 2. ADB can be used to send a variety of commands to your device, including to install and debug applications on your device. It also provides access to a Unix shell that can be used to run device specific commands.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';


:::info
To learn more, see the [adb section](https://developer.android.com/studio/command-line/adb) on [Android's Developer guide](https://developer.android.com/).
:::

:::info
ADB `setprop` or `root` commands only work on *userdebug* builds of the OS. If you have a *user* build, reach out to your Magic Leap contact for support.
:::

Read the following pages for more information:

<DocCardList items={useCurrentSidebarCategory().items}/>

