---
id: app-sim-command-line
title: Command Line
sidebar_position: 6
date: 08/29/2022
tags: [Application Simulator, Command Line]
keywords: [Application Simulator, Command Line]
---

You can activate Application Simulator functions to iterate on the device using command line tools.

:::tip
For additional information on using Application Simulator on the command line with Native applications, reference the [C/C++ Apps section of the Using Application Simulator Guide](/versioned_docs/version-31-Aug-2023/guides/developer-tools/app-sim/using-app-sim.md#cc-apps-and-custom-engines).
:::

These are some of the most common VDCLI commands. For a full list of commands, type `VDCLI --help` on the command line.

|  Commands | Description: |
|:-- |:--- |
|VDCLI -s |Starts the Application Simulator Server (VDS) |
|VDCLI -k |Stops the Application Simulator Server |
|VDCLI -r |Restarts the Application Simulator Server |
|VDCLI -h |Displays the command line help page |

:::info
There is currently an issue with some Macs not being able to open the ML Hub terminal. To get around this bug, you can open up any command line interface (e.g. Terminal) and set up your environment with the following commands:

```shell
source $USER/MagicLeap/mlsdk/<your-os-version>/envsetup.sh
source $USER/MagicLeap/tools/zi/<latest-app-sim-version>/mlvdsetup.sh
```

:::

## Start Application Simulator in Device Mode

Your device must be connected to the host with a USB cable.

1. Open a terminal from the [ML Hub](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/magic-leap-hub.md) by opening the Activity bar and clicking the terminal icon at the bottom. Use this terminal to enter commands.

2. Start the Application Simulator Server.

```shell
VDCLI -s
```

3. Install the `com.magicleap.zi_agent` to the device.

```shell
adb install -u path/to/mlsdk/VirtualDevice/device/com.magicleap.zi_agent.apk
```

4. Launch the Application Simulator Agent.

```shell
adb shell start am -n com.magicleap.zi_agent.MainActivity
```

5. Connect the Application Simulator Server to the device.

```shell
VDCLI --connect 12345
```

## Start Application Simulator in Simulator Mode

1. Open a terminal from the ML Hub by opening the Activity bar and clicking the terminal icon at the bottom. Use this terminal to enter commands.

2. Start the Application Simulator Server.

```shell
VDCLI -s
```

3. Launch the Simulator.

```shell
VDCLI -R Simulator
```

4. Connect your peripheral.

```shell
VDCLI -R Peripheral
```

