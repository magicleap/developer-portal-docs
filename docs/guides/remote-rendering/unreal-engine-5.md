---
id: remote-rendering-unreal-engine-5
title: Remote Rendering with Unreal Engine 5
sidebar_label: Unreal Engine 5
sidebar_position: 1
date: 03/14/2023
tags: [Rendering, Servers, Unreal, UE, Windrunner]
keywords: [Rendering, Servers, Unreal, UE, Windrunner]
---

## Prerequisite

[Remote Rendering Setup Instructions with Windrunner](/docs/guides/remote-rendering/remote-rendering-windrunner).

## Setup

1. Create a "New Project" with the **Virtual Reality Template**

:::info
It is recommended to start the Windrunner service ahead of time. But, if it’s not running yet, the Windrunner service will be started automatically.
:::

2. Enable **OpenXR**

:::info
If you’re using the Virtual Reality template in Step 1, this step will not be necessary. When not using VR template, make sure to go through those setting before proceeding.
:::

- Make sure the **OpenXR** plugin is installed in **Edit** -> **Plugins**
- Make sure `Start in VR` is enabled in **Edit** -> **Project Settings**

3. Set the **RHI** to `Vulkan`

Under **Edit** -> **Project Settings**:

- Under **Platforms** in the left sidebar, select **Windows**
- Under **Targeted RHIs**, select `Vulkan` as the `Default RHI`

4. Click <kbd>Restart Now</kbd>

:::note
Vulkan is the main supported graphics API for Magic Remote Rendering. Support for DirectX 11 and DirectX 12 are considered as experimental.
:::

## VR Preview

Once the editor has been restarted and shader compilation finishes, simply click `VR Preview`.
