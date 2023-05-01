---
id: remote-render-unreal-engine-5
title: Remote Render with Unreal Engine 5
sidebar_label: Unreal Engine 5
sidebar_position: 2
description: Remote Render with Unreal Engine 5.
date: 05/01/2023
tags: [Rendering, Servers, Unreal, UE, Windrunner]
keywords: [Rendering, Servers, Unreal, UE, Windrunner]
---

## Prerequisite

[Remote Render Setup Instructions with the Remote Render Service](/docs/guides/remote-render/remote-render).

## Setup

1. Create a "New Project" with the **Virtual Reality Template**

![Project Browser](/img/unreal-5/project-browser.png)

:::info
It is recommended to start the Windrunner service ahead of time. But, if it’s not running yet, the Windrunner service will be started automatically.
:::

1. Enable **OpenXR**

:::info
If you’re using the Virtual Reality template in Step 1, this step will not be necessary. When not using VR template, make sure to go through those setting before proceeding.
:::

- Make sure the **OpenXR** plugin is installed in **Edit** -> **Plugins**

![OpenXR Plugins Menu](/img/unreal-5/plugins-menu-openxr.png)

- Make sure `Start in VR` is enabled in **Edit** -> **Project Settings**

![Project Settings VR](/img/unreal-5/preoject-settings-vr.png)

1. Set the **RHI** to `Vulkan`

Under **Edit** -> **Project Settings**:

- Under **Platforms** in the left sidebar, select **Windows**
- Under **Targeted RHIs**, select `Vulkan` as the `Default RHI`

![Project Settings Platform Windows RHI](/img/unreal-5/project-settings-platform-windows.png)

1. Click <kbd>Restart Now</kbd>

:::note
Vulkan is the main supported graphics API for Magic Remote Rendering. Support for DirectX 11 and DirectX 12 are considered as experimental.
:::

## VR Preview

Once the editor has been restarted and shader compilation finishes, simply click `VR Preview`.

![VR Preview](/img/unreal-5/editor-vr-preview.png)
