---
id: app-sim-unity-mlhub
title: Application Simulator ML Hub
sidebar_position: 10
date: 09/13/2022
tags: [Application Simulator, Unity]
keywords: [Application Simulator, Unity]
---

If you do not wish to install the Application Simulator for Unity Package or if you need greater graphics support, you can run the App Simulator directly from the Magic Leap Hub.

:::info Graphics API
Running the Application Simulator from the Magic Leap Hub allows developers to use more graphics APIs when connecting to the App Simulator.

1. Open the Player Settings Window (**Edit > Project Settings > Player**) section, then select the Standalone tab.
2. Expand the **Other Settings** and under **Rendering**, uncheck or adjust the Graphics API for your platform to [one that is compatible with your configuration](/docs/guides/developer-tools/app-sim/app-sim-graphics-compatibility.md#using-application-simulator-interface-in-ml-hub-along-with-unity).
:::

## Prerequisites

- Installed the [ML Hub](/docs/guides/getting-started/install-the-tools.md).
- Installed [App Simulator](/docs/guides/developer-tools/app-sim/app-sim-setup.md).
- [Configured Unity Settings](/docs/guides/unity/getting-started/configure-unity-settings.md) for Magic Leap.
- [Configured Unity Settings](/docs/guides/unity/app-simulator/configure-unity.md) for App Simulator.

## Starting the App Simulator

See the [App Simulator Setup guide](docs\guides\developer-tools\app-sim\app-sim-setup.md) for details steps on downloading and installing the Magic Leap App Simulator.

## Running Unity Application

With the App Simulator running in the Magic Leap Hub, enter Play mode on the Unity Editor. Once in Play mode, you should notice that Magic Leap Application Simulator's Device view displays the same content as your Game View window, in addition to the device's environment.

<Image url= {require("/img/app-sim/ml-unity-appsim.png")} >Screenshot of Unity and Magic Leap App Simulator running side-by-side</Image>
