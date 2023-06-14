---
id: voice-intents-overview
title: Voice Intents Overview
sidebar_position: 1
date: 06/30/2022
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Magic Leap 2 allows users to trigger events using custom verbal commands called Voice Intents. This section outlines how to set up Voice Intents in your project, example scripts, and an API overview.

Note that :

- Voice Intents can only be used by one app at a time.
- To avoid conflicts between system and app voice intents, the API automatically stops voice processing when the application is paused and resumes it when resuming the app.

:::info
Unlike system-wide voice commands that are initiated by saying "Hey Magic Leap", you do not need to say "Hey Magic Leap" for voice input to work in your Unity app.
:::

:::caution
Within the System Settings, the Magic Leap Inputs Voice must be enabled for this API to work. The API could return unknown failures if it is not. To enable:

1. Navigate to **Settings > Magic Leap Inputs > Voice**.
2. Toggle **Voice Commands** on.
:::

:::caution
This feature requires the `VOICE_INPUT` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

<DocCardList items={useCurrentSidebarCategory().items}/>

