---
id: remote-rendering-debug-options
title: Remote Rendering Debug Options
sidebar_label: Debug Options
sidebar_position: 3
date: 5/11/2023
tags: [Render, Servers, Remote, Debug]
keywords: [Render, Servers, Remote, Debug]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RemoteRenderingDisambiguation from './_remote-rendering-disambiguation.md';
import RemoteViewerDisambiguation from './_remote-viewer-disambiguation.md';

:::warning Notice of Support
The flags provided are intended for debugging and may or may not function as expected. The following options come with no warranty or guarantee of successful invocation or results. They are intended to allow pre-release or lower-level insight into the functions provided by the **Remote Rendering** service and **Remote Viewer** app.
:::

## **Remote Rendering** Debug Options

<RemoteRenderingDisambiguation />

If the ML Hub is launched with the environment variable, `XRT_DEBUG_GUI` set, extra debug information is accessible to the developer using the tool.

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

Setting environment environment variables in Windows is done by opening **System Properties** \> **Advanced** \> **Environment Variables** \> **New...**

  </TabItem>
</Tabs>

## Executing the **Remote Viewer** App from Command Line

<RemoteViewerDisambiguation />

### Launching Without Arguments

```powershell
adb shell am start -e com.magicleap.remote_viewer_app/android.app.NativeActivity
```

### Debug Flags

- `--hand_tracking`: Enables Hand Tracking.
- `--floor`: Enables using the `Planes` API to find the "floor," so that `STAGE_SPACE` is appropriately defined. This requires the user to accept a permission prompt.



#### Example Invocation

```powershell
adb shell am start -e --hand_tracking 1 com.magicleap.remote_viewer_app/android.app.NativeActivity
```
