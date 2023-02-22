---
id: app-sim-key-api-features
title: Key API Features
sidebar_position: 1
date: 08/29/2022
engine: All
tags: [Application Simulator, API Features]
keywords: [Application Simulator, API Features]
---


Application Simulator's support for API features varies. Features are supported in Simulator, Device, and Hybrid modes. Some are not supported at all.

## How to Find API Feature Compatibility

The most up to date feature compatibility can be found by navigating the Application Simulator application:

1. Open the Application Simulator application from within the ML Hub.

![Select Application Simulator](/img/app-sim/ml_hub_app_sim.png)

2. From the Application Simulator menu in the top left, select the "Show API Features..."

![Select the Show API Features button in the dropdown](/img/app-sim/show_api_features.png)

The page that opens lists current support for API features in Application Simulator, which is also outlined in the following section.

## Application Simulator Key API Info

:::info
This section references information found within the Application Simulator application by following the above section. That information is the most up-to-date, this page may be out of sync until we align the duplicate process.
:::

:::caution
If an API feature does not work and is not on this list, it is not supported by Application Simulator. Unsupported API features compile and link for host targets, but return `MLResult_NotImplemented` when requested.
:::

In the Hybrid mode column, the standalone references to Simulator, Device, and Mixed (i.e both Simulator and Device) indicate the **data source** for APIs. Graphics and Audio APIs work differently, which is expanded on in the relevant cells.

### Perception Client API Features

| Feature                  | Simulator | Device |  Hybrid   |
| ------------------------ | :-------: | :----: | :-------: |
| Controller 3/6 DOF       |     ✓     |   ✓    |   Mixed   |
| Eye tracking             |     ✓     |   ✓    |   Mixed   |
| Gaze recognition         |           |   ✓    |           |
| Hand tracking(1)         |     ✓     |   ✓    |   Mixed   |
| Head tracking            |     ✓     |   ✓    |   Mixed   |
| Head tracking map events |     ✓     |   ✓    |   Mixed   |
| Marker tracking          |           |   ✓    |           |
| Meshing                  |     ✓     |   ✓    | Simulator |
| ML Time(2)               |     ✓     |   ✓    | Mixed     |
| Planes                   |     ✓     |   ✓    | Simulator |

### Input API Features

| Feature                     | Simulator | Device | Hybrid |
| --------------------------- | :-------: | :----: | :----: |
| Controller state, Callbacks |     ✓     |   ✓    | Mixed  |

### Graphics API Features(3)

| Feature   | Simulator | Device |                Hybrid                |
| --------- | :-------: | :----: | :----------------------------------: |
| OpenGL(4) |     ✓     |   ✓    | Graphics frame rendered in Simulator |
| Vulkan    |     ✓     |   ✓    | Graphics frame rendered in Simulator |

Notes:

(1) Gesture classification APIs (ml_gesture_classification.h) are not yet supported. The gestures in the hand tracking panel can be used in Simulator mode to generate hand tracking keypoints.

(2) All times reported are from the perspective of the host.

(3) Dimmer APIs are not supported.

(4) Unity does not support OpenGL in Editor mode on M1 Macs but custom engines and C/C++ applications can utilize OpenGL mode via Rosetta emulation.

### Audio API Features

| Feature                  | Simulator | Device |                         Hybrid                          |
| ------------------------ | :-------: | :----: | :-----------------------------------------------------: |
| Simple/ Spatial Audio(1) |     ✓     |   ✓    | Audio output directed to either host, Device or both(2) |

Notes:

(1) Audio support under Unity has not been fully validated. C API apps are only supported.

(2) The Channels window (launched by clicking on Advanced on the dropdown next to the Target selector) can be used to toggle audio output to Simulator or Device. By default, both of them are selected.

### Lifecycle

| Feature   | Simulator | Device |  Hybrid   |
| --------- | :-------: | :----: | :-------: |
| Events(1) |     ✓     |   ✓    | Simulator |

Notes:

(1) Android Lifecycle events are supported in all three modes via Android Looper APIs.

### Camera and Camera Metadata API Features

| Feature | Simulator | Device | Hybrid |
| ------- | :-------: | :----: | :----: |
| All     |           |   ✓    |        |
