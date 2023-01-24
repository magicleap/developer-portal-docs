---
title: Spaces
description: Learn how to use the Spaces app to localize into and create spatial maps.
sidebar_position: 5
date: 2/24/2022
tags: [Perception, Anchors, Persistence]
keywords: [Perception, Anchors, Persistence]
---

Spaces is an application that comes preinstalled on the Magic Leap 2. It can be used to scan and localize into a local or shared spatial map.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

## Creating a Space

1. Launch the Spaces application from the Magic Leap 2 home screen.

![Spaces selected on the home screen](/img/device/spaces/spaces_1.png)

2. Select **New Local Space** and follow the instructions on the screen. Note some objects do not map well, like ones that have dark or glossy surfaces.

![The default view inside the Spaces Application](/img/device/spaces/spaces_2.png)

![Prompts to scan your space](/img/device/spaces/spaces_3.png)

3. When you are finished scanning your space, select **Finish Scanning** then, select **Yes, Save**.

![The default view inside the Spaces Application](/img/device/spaces/spaces_5.png)

4. Your new space should now appear in your list of spaces.

![The default view inside the Spaces Application](/img/device/spaces/spaces_6.png)

For more specific in-device guidance on the scanning process, click the information icon on the bottom left corner of the Spaces home menu screen.

## Viewing Spatial Anchors from other applications

When Developer mode is enabled, you can use the Spaces application to view anchors created by other applications using the [Spatial Anchors API](/docs/guides/unity/perception/anchors/spatial-anchors-overview.md).

In order to view another application's spatial anchors in Spaces:

1. Enable Developer mode inside the **Settings** application by going to **Settings > About > Build Number**. Hover over the Build Number and press the trigger 7 times.
2. Open **Spaces** and localize into your current location.

3. Open your application and place the spatial anchors.

![An anchor placed inside the Spatial Anchors scene of Magic Leap Unity Examples](/img/device/spaces/spaces_7.jpg)

4. Go back to **Spaces** and click the **eye icon** next to the space you are currently localized in.

![The "view" eye icon next to your local space in Spaces](/img/device/spaces/spaces_8.jpg)

5. You will now see the spatial anchors and their ID displayed inside the Spaces application.

![Spaces displaying the newly placed spatial anchors](/img/device/spaces/spaces_9.jpg)

## More Information

<DocCardList items={useCurrentSidebarCategory().items}/>