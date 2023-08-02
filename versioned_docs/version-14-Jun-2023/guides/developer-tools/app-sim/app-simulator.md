---
slug: app-sim
title: Application Simulator
sidebar_position: 0
date: 08/29/2022
engine: All
tags: [Application Simulator]
keywords: [Application Simulator]
---
import YouTube from 'react-youtube';

<YouTube videoId="2eXB3uF71OA" />

<br/>
The Application Simulator tool in the ML Hub lets you iterate and test code changes without having to build and deploy the app to a device. Incorporating Application Simulator into your workflow can result in significantly faster development cycles.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';  

<br/>
<br/>
Application Simulator simulates several Magic Leap C SDK API layers to either stream the rendered frames to the headset display or to render them on your desktop PC in a simulated environment. Your app runs locally on your host computer, but gets head pose, meshing, planes, and other data live from your device or from other simulated sources.  
<br/>
<br/>

:::info
Application Simulator is a data simulation platform and not an emulator. It does not utilize the Android emulator workflow.
:::

Read the following pages for more information:

<DocCardList items={useCurrentSidebarCategory().items}/>
