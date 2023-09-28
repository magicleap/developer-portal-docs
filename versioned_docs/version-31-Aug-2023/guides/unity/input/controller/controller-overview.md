---
id: unity-controller-overview
title: Controller Overview
sidebar_position: 0
date: 1/28/2022
tags: [UnityController, Input]
keywords: [UnityController, Input]
---
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

The Magic Leap 2's controller input can be accessed using Unity's [Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/QuickStartGuide.html). The Magic Leap 2 SDK includes predefined action mappings, so developers can access controller input in a familiar way. 

This section includes general information on Controller input and Controller Example scripts, including:

- [API Overview](/versioned_docs/version-31-Aug-2023/guides/unity/input/controller/controller-api-overview.md) - a summary of how to get started using the Magic Leap 2 Controller Input API.
- [Reading Controller Input](/versioned_docs/version-31-Aug-2023/guides/unity/input/controller/reading-controller-input.md) - demonstrates how to read the Magic Leap 2 Controller input values directly from the `MagicLeapInputs.ControllerActions`.
- [Controller Action Events](/versioned_docs/version-31-Aug-2023/guides/unity/input/controller/controller-action-events.md) - includes an example and information on subscribing to delegates that are called with the controller's input values changes.
- [Tracked Pose Driver](/versioned_docs/version-31-Aug-2023/guides/unity/input/controller/tracked-pose-driver-controller.md) - A guide on setting up Unity's Tracked Pose Driver to mirror the controllers position and rotation.
- [Migration Guide](/versioned_docs/version-31-Aug-2023/guides/unity/input/controller/controller-porting-guide.md) - Includes details on upgrading your Magic Leap 1 controller API to the Magic Leap 2.

:::tip
To learn about the Magic Leap 2's controller hardware features, see the [Controller Features](/versioned_docs/version-31-Aug-2023/guides/features/controller-features.md) guide.
:::

<DocCardList items={useCurrentSidebarCategory().items}/>

