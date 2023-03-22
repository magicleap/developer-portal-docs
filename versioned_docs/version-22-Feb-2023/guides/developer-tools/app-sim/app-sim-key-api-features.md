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

Application Simulator's support for API features varies. Features are supported in Simulator, Device, and Hybrid modes. Some are not supported at all.

## Application Simulator Key API Info

:::caution
If an API feature does not work and is not on this list, it is not supported by Application Simulator. Unsupported API features compile and link for host targets, but return `MLResult_NotImplemented` when requested.
:::

In the Hybrid mode column, the standalone references to Simulator, Device, and Mixed (i.e both Simulator and Device) indicate the **data source** for APIs. Graphics and Audio APIs work differently, which is expanded on in the relevant cells.

### Perception Client API Features

| Feature                  | Simulator | Device |  Hybrid   |
| ------------------------ | :-------: | :----: | :-------: |
| Controller 3/6 DOF       |     ✓     |   ✓    |   Mixed   |
| Eye tracking             |     ✓     |   ✓    |   Mixed   |
| Gaze recognition         |     ✓     |   ✓    |   Mixed   |
| Hand tracking            |     ✓     |   ✓    |   Mixed   |
| Head tracking            |     ✓     |   ✓    |   Mixed   |
| Head tracking map events |     ✓     |   ✓    |   Mixed   |
| Marker tracking          |     ✓     |   ✓    | Simulator |
| Meshing                  |     ✓     |   ✓    | Simulator |
| ML Time(1)               |     ✓     |   ✓    |   Mixed   |
| Planes                   |     ✓     |   ✓    | Simulator |

### Input API Features

| Feature                     | Simulator | Device | Hybrid |
| --------------------------- | :-------: | :----: | :----: |
| Controller state, Callbacks |     ✓     |   ✓    | Mixed  |

### Graphics API Features(2)

| Feature   | Simulator | Device |                Hybrid                |
| --------- | :-------: | :----: | :----------------------------------: |
| OpenGL(3) |     ✓     |   ✓    | Graphics frame rendered in Simulator |
| Vulkan    |     ✓     |   ✓    | Graphics frame rendered in Simulator |

Notes:

(1) All times reported are from the perspective of the host.

(2) Dimmer APIs are not supported.

(3) Unity does not support OpenGL in Editor mode on M1 Macs, but custom engines and C/C++ applications can utilize OpenGL mode via Rosetta emulation.

### Audio API Features

| Feature                  | Simulator | Device |                         Hybrid                          |
| ------------------------ | :-------: | :----: | :-----------------------------------------------------: |
| Simple/ Spatial Audio    |     ✓     |   ✓    | Audio output directed to either host, Device or both(2) |

### Lifecycle

| Feature   | Simulator | Device |  Hybrid   |
| --------- | :-------: | :----: | :-------: |
| Events(1) |     ✓     |   ✓    | Simulator |

Notes:

(1) Supported through Android looper APIs for host. Events can be simulated on host, or are forwarded from the device.


### Camera and Camera Metadata API Features

| Feature | Simulator | Device | Hybrid |
| ------- | :-------: | :----: | :----: |
| All (1) |           |   ✓    |        |

Notes:

(1) 4k video capture is not supported.
