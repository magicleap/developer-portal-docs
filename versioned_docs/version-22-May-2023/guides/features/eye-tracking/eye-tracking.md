---
title: Eye Tracking
sidebar_position: 7
date: 08/16/2022
tags: [Eye Tracking, Overview]
keywords: [Eye Tracking, Overview]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Magic Leap 2 provides a set of APIs that gives developers the ability to access the user's eye data. These APIs can be used to understand the position and rotation of the eyes, as well as the ability to track what the user is looking at. This page explains how developers can benefit from eye tracking for various use cases, and what to look for when designing eye-gaze-based user interactions.

The Eye Tracking APIs have been designed with a user’s privacy in mind; it avoids the passing of any identifiable information, particularly any biometrics. For eye-tracking capable applications, the user needs to grant apps permission to use eye tracking data.

Eye tracking on Magic Leap 2 lets developers design natural and intuitive input and interaction scenarios. The Eye Tracking API provides information about what the user is looking at as a single eye-gaze ray (gaze origin and direction) at approximately 90 FPS (90 Hz). For eye tracking to work accurately, each user is required to go through an eye tracking user calibration.

The predicted eye-gaze is approximately within 1 degree in visual angle around the actual target. Slight imprecisions are expected, so developers should plan for some margin around this lower-bound value.  

:::note
If your Application collects, stores, transfers or otherwise uses data off the Magic Leap 2 device that is received via this API, then you must comply with the [Magic Leap 2 Eye Tracking Data Transparency Policy](https://www.magicleap.com/eye-tracking).
:::


## More Information

<DocCardList items={useCurrentSidebarCategory().items}/>
