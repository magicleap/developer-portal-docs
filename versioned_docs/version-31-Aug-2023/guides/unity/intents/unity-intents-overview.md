---
id: unity-intents-overview
slug: unity-intents-overview
title: Intents
sidebar_position: 5
date: 07/12/2022
tags: [Unity, Intents]
keywords: [Unity, Intents]
---

Unity developers can use intents inside their applications to open external activities and services. For example, you can use Intents to open the Eye Calibration application after detecting poor accuracy when using the Eye Tracking feature, or if you want the user to localize into a map before loading the content from your application. This section provides examples of how to call both implicit and explicit intents.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

To learn more about intents, including Magic Leap specific intents, see the [Intents Overview](/versioned_docs/version-31-Aug-2023/guides/features/android-intents-overview.md) page or [Android's Intents Documentation](https://developer.android.com/guide/components/intents-filters).

Magic Leap also includes an API to open Magic Leap System Settings from inside your application. The `UnityEngine.XR.MagicLeap.SettingsIntentsLauncher` is pre-configured to allow developers to open the device's Display Settings, Voice Input settings, and AR Cloud Settings using a single line of code. Additional intents can be launched by passing the Intent Action ID.

Launching pre-defined intents:

```csharp
UnityEngine.XR.MagicLeap.SettingsIntentsLauncher.LaunchSystemVoiceInputSettings();
```

Launching custom intents:

```csharp
string intentID = "com.magicleap.intent.action.FITTING";
UnityEngine.XR.MagicLeap.SettingsIntentsLauncher.LaunchSystemSettings(intentID);
```

<DocCardList items={useCurrentSidebarCategory().items}/>
