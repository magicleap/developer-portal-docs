---
id: unity-planes-overview
title: Plane Detection
description: Learn how to detect surfaces using the Magic Leap SDK. 
sidebar_position: 0
date: 06/08/2022
tags: [Unity, Perception, Planes, Surfaces,]
keywords: [Unity, Perception, Planes, Surfaces,]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Magic Leap 2 tries to understand its environment using feature points and planes.

If a cluster of feature points appears to lie on common horizontal or vertical surfaces, Magic Leap labels this cluster as a geometric plane and classifies it as being a floor, wall, or ceiling.

Each detected plane contains information about its alignment, center position, size, and extents. This information can be useful for placing virtual objects that rest on flat surfaces.

:::caution
This feature requires the `WORLD_RECONSTRUCTION` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

:::info
Because the Magic Leap 2 uses feature points to detect planes, flat surfaces without texture, such as a white wall, may not be detected properly.
:::

<DocCardList items={useCurrentSidebarCategory().items}/>

## See also

- [AR Foundation Manual](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/manual/index.html)
  - A quick start guide for AR Foundations.
- [AR Foundation Plane Detection](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/manual/plane-manager.html)
  - Unity Guide about using the Plane Manager for plane detection in AR Foundations.
- [Unity XR Plane Subsystem](https://docs.unity3d.com/Packages/com.unity.xr.arsubsystems@4.2/manual/plane-subsystem.html)
  - Unity's overview of the XR plane subsystem.
- [`UnityEngine.XR.ARFoundation.ARPlane`](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/api/UnityEngine.XR.ARFoundation.ARPlane.html)
  - AR Plane API that shows what type of information can be obtained from each plane.

