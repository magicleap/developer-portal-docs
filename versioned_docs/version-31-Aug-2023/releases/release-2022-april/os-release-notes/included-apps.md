---
id: included-apps
title: April 2022 - Included Apps
sidebar_position: 6
date: 4/05/2022
---

# April Included Apps

The following applications are preinstalled on your device after updating to RC1 OS version.

### Kali Enterprise Demo 

On the home menu you will find the Kali EnterpriseDemo and Kali_Gimble test apps. These are test apps that show a sequence of 3D and 2D assets for testing the device display.

#### App Controls

Display Next Asset - Press the volume + button on the compute pack

Display Previous Asset - Press the volume - button on the compute pack

Return to Home Screen - Press the home button on the controller

#### To enable dimming

Run the following command to enable dimming on your headset.

```bash
adb root

adb shell setprop persist.ml.dimmer.enable true

adb shell am start -S com.magicleap.kalienterprisedemo

```

After the app launches, press the bumper. You should be able to see that dimming got darker.

#### To disable dimming

```bash
adb root

adb shell setprop persist.ml.dimmer.enable false

adb shell am start -S com.magicleap.kalienterprisedemo

```

After the app launches, press the bumper. You should be able to see that dimming does not work.


### Fit Eye Calib

Fit and Eye Calibration App: "FitEyeCalib" app, now accessible from the home menu launcher. The application can also be launched directly into specific steps using Android intents, once the step has been unlocked (previous steps completed at least once).

For example, the app can be started by any of the following:
   - `adb shell am start -a com.magicleap.intent.action.FIT_WEAR`
   - `adb shell am start -a com.magicleap.intent.action.FITTING`
   - `adb shell am start -a com.magicleap.intent.action.EYE_CALIBRATION`

