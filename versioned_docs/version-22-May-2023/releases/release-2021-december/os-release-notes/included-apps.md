---
id: included-apps
title: R157 - Included Apps
sidebar_position: 6
date: 12/21/2021
---

# RC1 Included Apps

The following applications are preinstalled on your device after updating to RC1 OS version.

### Kali Enterprise Demo & Kali Gimbal

On the home menu you will find the Kali EnterpriseDemo and Kali_Gimble test apps. These are test apps that show a sequence of 3D and 2D assets for testing the device display.

#### App Controls

Display Next Asset - Press the volume + button on the compute pack

Display Previous Asset - Press the volume - button on the compute pack

Return to Home Screen - Press the home button on the controller

#### To enable dimming

Run the following command to enable dimming on your headset.

```bash
adb root

adb shell setprop persist.ml.dim_cntr.glob_ovr true

adb shell setprop persist.ml.dimmer.enable true

adb reboot

adb shell am start -S com.magicleap.kalienterprisedemo

```

After the app launches, press the bumper. You should be able to see that dimming got darker.

#### To disable dimming

```bash
adb root

adb shell setprop persist.ml.dim_cntr.glob_ovr true
adb shell setprop persist.ml.dimmer.enable false

adb reboot

adb shell am start -S com.magicleap.kalienterprisedemo

```

After the app launches, press the bumper. You should be able to see that dimming does not work.

