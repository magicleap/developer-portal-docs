---
id: intents-overview
slug : android-intents-overview
title: Intents
sidebar_position: 7
date: 09/23/2022
tags: [Magic Leap, Android, Intents]
keywords: [Magic Leap, Android, Intents]
---

The Magic Leap 2 uses an Android based operating system which provides access to core Android-based features. This section will provide an overview on how developers can use intents to open external activities on the Magic Leap 2.

When developing an Android application, it is possible to call functions to start a service or an activity using an [Intent](https://developer.android.com/guide/components/intents-filters). For example your application can start an external activity for changing user settings. Additionally, intents can contain data that can be used by the receiving activity, for example which settings screen to open within the settings application.

Your code can send intents to the Android system defining the components you are targeting. For example via the startActivity() method you can define that the intent should be used to start an activity. An intent can contain data via a Bundle. This data can be used by the receiving component.

See the Android [Intents documentation](https://developer.android.com/guide/components/intents-filters) for more information.

## Implicit vs Explicit Intents

There are two types of intents:

- Implicit Intents do not directly specify the Android components which should be called, it only specifies the action to be performed. This allows a component from another app to handle the action request. For example, if you want to to ask the user to localize into a map, you can use an implicit intent to launch the Mapping application to handle that request.

- Explicit intents specify which application will satisfy the intent, by supplying either the target app's package name or a fully-qualified component class name. Explicit Intents can also be used to pass data to other activity using the `putExtra` method and retrieved by target activity by the `getIntent().getExtras()` methods.

## Magic Leap Specific Intents

This section includes a list of Magic Leap specific intents. These can be used to open custom applications such as Fit calibration.

- `com.magicleap.intent.action.FIT_WEAR`
  - Opens the Eye / Fit Calibration application and guides the user through fit and eye calibration steps. These steps ensure that the user is wearing the headset correctly and that their eyes can be tracked accurately.
- `com.magicleap.intent.action.EYE_CALIBRATION`
  - Opens the Eye / Fit Calibrations application and prompts the user to calibrate the headset so the user's eyes can be tracked reliably. If the fit/wear calibration steps have not been complete, the user will be asked to complete the fit calibration first.
- `com.magicleap.intent.action.MAPPING_TOOL`
  - Opens the Mapping Tool. The Mapping Tool allows users to localize into Spaces, scan new Spaces, and manage Local Spaces.
- `com.magicleap.intent.action.SELECT_SPACE`
  - An Explicit intent that opens the Mapping Tool for the purpose of selecting a space to localize into. It requires being started with startActivityForResult, and also requires the two extras `com.magicleap.intent.extra.SPACE_ID` (The ID of the space you want to localize into) and `com.magicleap.intent.extra.MAPPING_MODE` (Pass 0 for OnDevice and 1 for ARCloud).
- `com.magicleap.intent.action.AR_CLOUD_SETTINGS`
  - This intent opens the device's Perception Settings. From there, users can choose to open the Custom Fit Application or connect to AR Cloud.

Intents can be tested using adb by running the following command from the command line.

```shell
adb shell am start -a YOUR_INTENT_HERE
```

For example:

```shell
adb shell am start -a com.magicleap.intent.action.SPACES
```

## Battery Level

Battery levels for the Compute Pack and Controller can be obtained using standard Android APIs.

### Compute Pack

Developers can access the battery level for the Compute Pack using [Android's Battery Manager](https://developer.android.com/reference/android/os/BatteryManager). See the [Native Battery Sample](/versioned_docs/version-31-Aug-2023/guides/native/capi-samples.md#battery) for more information.

### Controller

To obtain the Controller's battery level we use a sticky Intent. Similar to the **android intent.action.BATTERY_CHANGED** Intent which Android Apps can use to get updates regarding the compute pack battery level and status. Documentation on using the system Intent can be found here: [Monitor the Battery Level and Charging State | Android Developers](https://developer.android.com/training/monitoring-device-state/battery-monitoring)

The Controller battery Intent is named **com.magicleap.controller.action.BATTERY_CHANGED**.  The extras attached to the Intent will follow what the system battery Intent uses, so that code that processes the system battery Intent can be used as the basis for code to process the Controller battery Intent. The following extras are populated in the Controller battery Intent:

- If the connection to the Controller is active, the following extras will be set:
  - **BatteryManager.EXTRA_PRESENT** : true
  - **BatteryManager.EXTRA_LEVEL** : current Controller battery level (0-100)
  - **BatteryManager.EXTRA_SCALE** : 100
  - **BatteryManager.EXTRA_BATTERY_LOW** : true if current level is 25% or lower, otherwise false
  - **BatteryManager.EXTRA_STATUS** : **BatteryManager.BATTERY_STATUS_CHARGING** or **BatteryManager.BATTERY_STATUS_NOT_CHARGING**, based on Controller charger connection state
- If the connection to the Controller is not active, the following extras will be set:
  - **BatteryManager.EXTRA_PRESENT** : false
  - **BatteryManager.EXTRA_STATUS** : **BatteryManager.BATTERY_STATUS_UNKNOWN**

The [Native Battery Sample](/versioned_docs/version-31-Aug-2023/guides/native/capi-samples.md#battery) provides an example of obtaining battery levels for both the Compute Pack and Controller.

