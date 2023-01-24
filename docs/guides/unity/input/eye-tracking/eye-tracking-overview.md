---
id: eye-tracking-overview
title: Eye Tracking Overview
sidebar_position: 1
date: 2/16/2022
tags: [Unity, Eye Tracking, Input, Overview]
keywords: [Unity, Eye Tracking, Input, Overview]
---
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Eye tracking uses cameras to track the movement of the user’s eyes to  calculate where a user is looking, track whether they are blinking, and check if their eyes are in a comfortable configuration.

:::caution
This features requires the `EYE_TRACKING` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

This category includes the following articles:

- [API Overview](/docs/guides/unity/input/eye-tracking/eye-tracking-api-overview.md) - a summary of terminology and how to get started using the Magic Leap 2 Controller Input API.
- [Magic Leap Specific Eye Tracking Data](/docs/guides/unity/input/eye-tracking/eye-tracking-subsystem-extension.md) - demonstrates how to get and read the Magic Leap 2 specific eye tracking data using the `EyeTrackingState` struct, such as the confidence of the fixation point.
- [Generic Eye Tracking Data](/docs/guides/unity/input/eye-tracking/unity-input-system-eye-tracking-input.md) - includes information and an example on how to read eye tracking input using the generic `UnityEngine.InputSystem.XR.Eyes` struct, such as fixation point.
- [Tracked Pose Driver](/docs/guides/unity/input/eye-tracking/tracked-pose-driver-eye-tracking.md) - A guide on setting up Unity's Tracked Pose Driver to mirror the eye input position and rotation.
- [Migration Guide](/docs/guides/unity/input/eye-tracking/eye-tracking-porting-guide.md) - Includes details on upgrading your Magic Leap 1 controller API to the Magic Leap 2.

<DocCardList items={useCurrentSidebarCategory().items}/>
