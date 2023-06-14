---
title: Audio
sidebar_position: 5
date: 07/12/2022
tags: [Unity, Audio]
keywords: [Unity, Audio]
---

This section provides information on using Magic Leap 2's Audio API for audio input and output.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

:::caution SDK 1.0.0 or greater
In **Project Settings > XR Plugin Management > Magic Leap Settings**, there will be a new checkbox to toggle usage of `MLAudio` `on`/`off`. This switches between the usage of `Java AudioTrack` (Android's default) and `MLAudio` as the main playback API for the audio. These demos require MLAudio to be unchecked.
:::

## More Information

<DocCardList items={useCurrentSidebarCategory().items}/>
