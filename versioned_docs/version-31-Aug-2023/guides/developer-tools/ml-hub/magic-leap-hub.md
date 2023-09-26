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

Follow our guides on [installing the Magic Leap Hub](/versioned_docs/version-31-Aug-2023/guides/getting-started/install-the-tools.md#install-magic-leap-hub).

:::info
There is currently an issue with some Macs not being able to open the ML Hub terminal. To get around this bug, you can open up any command line interface (e.g. Terminal) and set up your environment with the following commands:

```shell
source $USER/MagicLeap/mlsdk/<your-os-version>/envsetup.sh
source $USER/MagicLeap/tools/zi/<latest-app-sim-version>/mlvdsetup.sh
```

:::

For more information on tools in The ML Hub, see the following pages:

<DocCardList items={useCurrentSidebarCategory().items}/>

