---
title: Clipping Plane
date: 09/18/2023
sidebar_position: 6
tags: [Unity, Overview, Camera, Clipping Plane, Display]
keywords: [Unity, Overview, Camera, Clipping Plane, Display]
---

# Clipping Plane Settings

The near clipping plane distance on the Magic Leap 2 can be set at different stages within application development and execution.

The following flow shows the importance hierarchy of what setting overrides and sets the final clipping plane distace:

**Absolute Minimum > System Setting > Application Setting**.

:::note

Please note that the default clipping plane distance is 0.37m but can be set to 0.25m at its lowest.
:::

## Application Setting 

The developer can set the near clipping plane distance for the ML Camera component inside the [Unity](/docs/guides/unity/getting-started/unity-getting-started/) XR Rig prefab or using the [C API](/docs/api-ref/api/Modules/group___graphics/struct_m_l_graphics_frame_params_ex/#float-near-clip).

This will be the clipping distance of the camera if the System Setting and Absolute Minimum settings are not changed, assuming that this number is greater than or equal to 0.25. If it is less that 0.25, it will automatically be reset to the Absolute Minimum value at runtime.

## System Setting

To access the global clipping plane setting on a particular device, go to:
 
 [INSERT PATH HERE]


## Absolute Minimum (Lowest possible distance)

The absolute minimum distance the clipping plane can be set to is 0.25 meters. Any application value set to a value lower than 0.25 will automatically be overwritten with 0.25m.
