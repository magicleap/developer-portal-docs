---
id: adb-commands
title: ADB Commands
sidebar_position: 2
date: 07/14/2022
tags: [Android Debug Bridge, adb, command line]
keywords: [Android Debug Bridge, adb, command line]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Here are some of the most frequently used ADB commands.

For instructions on how to install and use adb, follow the [ADB Setup Guide](/versioned_docs/version-31-Aug-2023/guides/developer-tools/android-debug-bridge/adb-setup.md).

:::tip
After entering the adb console with `adb shell`, you can quit by entering `exit` in the console.
:::

## Managing Apps

### Installing an App

```bash
adb install <myApp.apk>
```

:::tip
You can also type `adb install` and then drag the apk file into the terminal window.
:::

### Reinstalling an App

To replace a previously installed version of the app:

```bash
adb install -r <myApp.apk>
```

### Uninstalling an App

```bash
adb uninstall <package-name>
```

:::info
This is **not** the name of the .apk file, but the name of the app. This is typically something like `com.magicleap.myapp`. In Unity you can find the package name by going to the Player Settings menu. You can also run the `list packages` command below.
:::

### Launching an App

Though it's easiest to launch an app by simply selecting it from the Home Menu, you can also launch an app over adb:

```bash
adb shell am start -S <package-name>
```

### Closing an App

Though it's easiest to close an app by simply hitting the **\[X\]** button on the Home Menu, you can also close an app over adb:

```bash
adb shell am force-stop <package-name>
```

### List All Installed Packages

```bash
adb shell pm list packages
```

## Connectivity

### Pairing a Controller

To pair a controller, connect the controller to the compute pack with a USBC<->C cable. If you have to connect over ADB, this command will accept the first controller in pairing mode that the device finds.

```bash
adb shell controller connect
```

### Connect to WiFi

#### Enable WiFi

```bash
adb shell svc wifi enable
```

#### Connect to Network

```bash
adb shell wifi-ml connect-network <NETWORK-ID> wpa2 <PASSWORD> -h
```

#### Use ADB over WiFi

```bash
adb tcpip [-p] <portnumber (any number above 1024, default is 5555)>
adb connect <IP of the Magic Leap 2>:<portnumber>
```

:::note
Will only work after WiFi has already been configured, and will last until the next reboot.
:::

### Bluetooth

#### Enable Bluetooth

```bash
adb shell
su
svc bluetooth enable
```

#### Disable Bluetooth

```bash
adb shell
su
svc bluetooth disable
```

#### Bluetooth Adapter Test

```bash
adb shell
btadaptertest
```

The `btadaptertest` command gives you several options for interfacing with bluetooth devices. Here are the available commands you can use within `btadaptertest`:

```bash
l - Configure Snoop Log [param1 = 0 (disable), 1 (enable)]
e - Enable Bluetooth adapter
f - Disable Bluetooth adapter
g - Get Adapter State
d - Start Discovery
c - Cancel Discovery
j - Discover supported profiles for device [param1 = scannedDeviceIndex]
p - Pair device [param1 = scanDeviceIndex]
u - Unpair device [param1 = bondedDeviceIndex]
    (run 'b' command before each unpair)
b - Print bonded devices and connection states
    (use this to get bondedDeviceIndex used by other commands)
o - Set device friendly name (alias) [param1 = bondedDeviceIndex, param2 = name]
0 - Print connected profiles [param1 = bondedDeviceIndex]
1 - Connect device (all profiles) [param1 = bondedDeviceIndex]
2 - Disconnect device (all profiles) [param1 = bondedDeviceIndex]
--------------------------------------------------------------------------
3 - Connect a profile [param1 = bondedDeviceIndex, param2 = profileId]
4 - Disconnect a profile [param1 = bondedDeviceIndex, param2 = profileId]
--------------------------------------------------------------------------
h - Print adapter name
m - Set adapter name [param1 = newAdapterName]
w - Print adapter address
s - Set Discoverable Timeout [param1 = timeoutValue in seconds]
v - Set Scan Mode [param1 = scanMode]
    (0 - None, 1 - Connectable, 2 - Discoverable and Connectable)
q - Quit
```

#### Pair and Connect Example

```bash
adb shell
btadaptertest
d
p <index of bluetooth device found in discovery scan>
b
1 <index of bonded bluetooth device>
```

## File Management

### Pushing Files to Device

```bash
adb push <file(s)-to-push> <destination-path>
```

:::tip
You can specify the destination file name as well, if you'd like the file to be renamed.
:::

### Pulling Files from Device

```bash
adb pull <file(s)-to-pull>
```

:::note
This will pull the files into the directory you're currently in. Make sure you `cd` to the proper directory first.
:::

## Debug/Logs

### View Debug Logs (Live)

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```bash
adb shell logcat | find "thing you're searching for"
```

</TabItem>
  <TabItem value="maclinux" label="MacOS/Linux">

```bash
adb shell logcat | grep <thing you're searching for>
```

</TabItem>
</Tabs>

### Print Logs to File (Live)

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```bash
adb shell logcat | find "thing you're searching for" > outputfile.txt
```

</TabItem>
  <TabItem value="maclinux" label="MacOS/Linux">

```bash
adb shell logcat | grep <thing you're searching for> > outputfile.txt
```

</TabItem>
</Tabs>

### Show File System Usage

```bash
adb shell cmd storageusage-ml
```

### Show Controller Info

```bash
adb shell controller info
```

### Reset Head Pose

```bash
adb shell reset-headpose
```

### Print Compute Pack Battery State

```bash
adb shell dumpsys battery
```

### Factory Reset

```bash
adb reboot bootloader
fastboot erase userdata
fastboot reboot
```

### Wait For Device

Runs command after a device is detected, or omit command to just wait.

```bash
adb wait-for-device <command>
```

## Additional Resources

- [Google's ADB Reference](https://developer.android.com/studio/command-line/adb)
- [Google's Logcat Reference](https://developer.android.com/studio/command-line/logcat)
- [Regex Tutorial](https://regexone.com/)

