---
id: unity-hand-tracking-overview
title: Hand Tracking Overview
sidebar_position: 0
date: 07/08/2022
tags: [Unity, Hand Tracking, Gesture, Input]
keywords: [Unity, Hand Tracking, Gesture, Input]
---
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

## Overview

Hand tracking API provides access to the left / right hand positions, keyposes, bones, and confidence values. The HandTracking API is now used through Unity's XR Input Subsystem. Classes that are related the hand tracking can be found in the following namespaces.

```csharp
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;
```

## Requirements

Hand Tracking Requires developers to enable the Hand Tracking permissions in the Manifest Settings. To do this Go to **Edit > Project Settings > Magic Leap > Permissions** and enable `com.magicleap.permission.HAND_TRACKING`. For more information, refer to the [permissions guide](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md).

## See Also

- [Hand Tracking API Overview](/versioned_docs/version-31-Aug-2023/guides/unity/input/hand-tracking/unity-hand-tracking-api.md)
  - An overview of the core hand tracking API, including example scripts.
- [Gesture Classification API Overview](docs/guides/unity/input/gesture-classification/unity-gesture-classification-overview.md)
  - An overview of the gesture classification API, including example scripts.

<DocCardList items={useCurrentSidebarCategory().items}/>

