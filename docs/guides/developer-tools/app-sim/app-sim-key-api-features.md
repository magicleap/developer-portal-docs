---
id: app-sim-key-api-features
title: Key API Features
sidebar_position: 1
date: 08/29/2022
engine: All
tags: [Application Simulator, API Features]
keywords: [Application Simulator, API Features]
---

:::info
Application Simulator is backwards compatible with all versions of the MLSDK starting with 1.0.0. Users are encouraged to upgrade to the latest Application Simulator updates in Package Manager.
:::

Application Simulator's support for API features varies. Features are supported in Simulator and Device modes. Some are not supported at all.

## Application Simulator Key API Info

:::caution
If an API feature does not work and is not on this list, it is not supported by Application Simulator. Unsupported API features compile and link for host targets, but return `MLResult_NotImplemented` when requested.
:::

### Perception Client API Features

| Feature                  | Simulator | Device |
| ------------------------ | :-------: | :----: |
| Controller 3/6 DOF       |     ✓     |   ✓    |
| Eye tracking             |     ✓     |   ✓    |
| Gaze recognition         |     ✓     |   ✓    |
| Hand tracking            |     ✓     |   ✓    |
| Head tracking            |     ✓     |   ✓    |
| Head tracking map events |     ✓     |   ✓    |
| Marker tracking          |     ✓     |   ✓    |
| Meshing                  |     ✓     |   ✓    |
| ML Time(1)               |     ✓     |   ✓    |
| Planes                   |     ✓     |   ✓    |

### Input API Features

| Feature                     | Simulator | Device |
| --------------------------- | :-------: | :----: |
| Controller state, Callbacks |     ✓     |   ✓    |

### Graphics API Features(2)

| Feature   | Simulator | Device |
| --------- | :-------: | :----: |
| OpenGL(3) |     ✓     |   ✓    |
| Vulkan    |     ✓     |   ✓    |

Notes:

(1) All times reported are from the perspective of the host.

(2) Dimmer APIs are not supported.

(3) Unity does not support OpenGL in Editor mode on M1 Macs, but custom engines and C/C++ applications can utilize OpenGL mode via Rosetta emulation.

### Audio API Features

| Feature                  | Simulator | Device |
| ------------------------ | :-------: | :----: | 
| Simple/ Spatial Audio    |     ✓     |   ✓    |

### Lifecycle

| Feature   | Simulator | Device |
| --------- | :-------: | :----: |
| Events(1) |     ✓     |   ✓    |

Notes:

(1) Supported through Android looper APIs for host. Events can be simulated on host, or are forwarded from the device.

### Camera and Camera Metadata API Features

| Feature | Simulator | Device |
| ------- | :-------: | :----: |
| All (1) |           |   ✓    |

Notes:

(1) 4k video capture is not supported.
