---
id: magic-leap-hub
title: The Magic Leap Hub
sidebar_position: 0
date: 08/29/2022
engine: All
tags: [ML Hub, Terminal, Device Bridge, OS Installer, Device Stream, Package Manager]
keywords: [ML Hub, Terminal, Device Bridge, OS Installer, Device Stream, Package Manager]
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

The **Magic Leap Hub** is a tool that accelerates workflows for anyone creating with Magic Leap devices. The Hub consolidates several tools and utilities in one place. Magic Leap Hub tools and resources include:

- Device management
- Quick SDK access
- Software package management
- Access to external tools

Follow our guides on [installing the Magic Leap Hub](/docs/guides/getting-started/install-the-tools.md#install-magic-leap-hub).

:::info
There is currently an issue with some Macs not being able to open the ML Hub terminal. To get around this bug, you can open up any command line interface (e.g. Terminal) and set up your environment with the following commands:

```shell
source $USER/MagicLeap/mlsdk/<your-os-version>/envsetup.sh
source $USER/MagicLeap/tools/zi/<latest-app-sim-version>/mlvdsetup.sh
```

:::

For more information on tools in The ML Hub, see the following pages:

<DocCardList items={useCurrentSidebarCategory().items}/>

Install packages from the ML Hub using the [Package Manager](/docs/guides/developer-tools/ml-hub/ml-hub-package-manager.md), where you can install package bundles, individual packages, or specific versions of packages.

![Hub package bundles](/img/ml-hub/ml_hub_package_bundles.png)

Launch tools from the Activities Home, such as [Device Bridge](/docs/guides/developer-tools/ml-hub/ml-hub-device-bridge.md), [Application Simulator](/docs/guides/developer-tools/app-sim/using-app-sim.md), or [Device Stream](/docs/guides/developer-tools/ml-hub/ml-hub-device-stream.md).

![RGP Overview Panel](/img/ml-hub/ml_hub.png)

:::tip
Customize Activities Home by dragging Activity cards to different spots.
:::

Use the Activity sidebar to revisit previously used tools, open the ML C SDK folder, or launch a terminal window configured for use with ML SDK tools.

![ML Hub Sidebar](/img/ml-hub/ml_hub_sidebar.png)

In the Status bar, open the Notifications Tray for updates, errors, and a link to the [Package Manager](/docs/guides/developer-tools/ml-hub/ml-hub-package-manager.md).

![Notification tray](/img/ml-hub/notification_tray.png)

Open the Device Tray to view connect devices, launch device bridge, and to perform common actions to a connected device.

![Visual overview of the device tray with the device expanded. General information about the device and connected network is available and common device commands.](/img/ml-hub/device_bridge.png)
