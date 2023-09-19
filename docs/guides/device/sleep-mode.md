---
id: sleep-mode
title: Sleep Mode for Magic Leap 2
sidebar_position: 7
date: 07/21/2023
tags: [Power, Sleep Mode, Settings, Optimization]
keywords: [Power, Sleep Mode, Settings, Optimization]
---

# Sleep Mode

In previous releases of MagicLeap 2, sleep mode was disabled by default, and was an option you could choose to set. Going forward, sleep mode is enabled by default. Your existing applications may need to be updated to handle this change. New applications should include planning for handling the way this setting now works. If you encounter issues, please provide feedback on the change to us at developer@magicleap.com. This document is about MagicLeap 2 1.3.0-dev2 and onwards, from late October 2023 forward.

## Updates to Your Device
After sleep mode is enabled by default, if you choose to update your device with a regular update, your existing settings will be saved, and sleep mode will still be optional (the default will be Standby enabled). If your device is new, or you do a factory reset update on an existing device, sleep mode is enabled by default. Keeping sleep mode set by default can greatly extend the length of time your device can go without recharging. 

## About the Standby Mode Feature
You can opt to enter standby mode if no face is detected by choosing the **Compute Pack Standby** setting in the UI, as pictured below.

## About the Sleep Mode Feature
You can enable or disable the sleep mode feature using the battery settings by toggling the **Sleep Mode** option.

<Image url= {require("/img/developer-mode/standby_transition.png")} >Battery Settings</Image>

When you choose to enable Sleep Mode, you’re also able to choose when Sleep Mode is activated.

<Image url= {require("/img/developer-mode/auto_sleep_choices.png")}>Auto Sleep Choices</Image>

## Best Practices
This section covers what you’ll need to keep in mind when handling Standby and Sleep modes. 

- From the Android activity lifecycle perspective, both Standby and Sleep mode can be treated in the same manner as Android Doze.
- When entering Android Doze, the screen is turned off. Following the standard Android activity lifecycle logic, screen off will trigger the **onStop** event broadcast to applications. If your application is using a camera resource, the application should close the camera device upon receiving the **onPause/onStop** event broadcast.
- Follow the guidelines for the Android activity lifecycle with your application. You can review the activity lifecycle here-- https://developer.android.com/guide/components/activities/activity-lifecycle.
- When resuming back to the Normal operating mode, the **onStart** event will be broadcast.
- Your app should listen for **onStop**/**onStart** and handle issues that can arise from going into and coming out of Standby and Sleep modes. 
- When your application returns from Standby or Sleep, some API features may return error states as the device resumes. Some services may not be automatically reconnected. For example, both Standby and Sleep will cause a loss of head pose and network access. Sleep mode will cause a loss of WiFi and Bluetooth connectivity and all core services will be suspended. These services will always be resumed upon the device wake. But your application needs to take into consideration all the APIs you have running and check to make sure they are appropriately reconnected or restarted as needed.
- You can learn more about how to handle Standby and Sleep in your application by first reviewing the Android documentation on Standby Doze, here- https://developer.android.com/training/monitoring-device-state/doze-standby. Second, review the additional information unique to the Magic Leap 2 platform in the diagram and charts below. 
- Remember that from the application perspective, **onStop** will be broadcasted to indicate both Standby and Sleep. This means that **onStop** application logic must be generic in handling both Standby and Sleep.

## Standby and Sleep for MagicLeap 2

<Image url= {require("/img/developer-mode/power_state.png")}>Power States for MagicLeap 2</Image>

| Power State | Description |
|-------------| ---------------------------------------------|
| Standby     | Display placed into standby (screen off) |
| Standby     | Audio powered off |
| Standby | Application processor still up and running |
| Standby | Networking and application access to networking is limited |
| Standby | Totem controller placed in standby |
| Standby | All peripheral sensors and cameras placed into Low Power state |
| Standby | Head Pose Tracking is suspended |
| Standby | Upper Face Detection continues to run |
| Sleep | Display powered off (screen off) |
| Sleep | Audio powered off |
| Sleep | Application processor suspended and placd into low power state |
| Sleep | All system services and applications suspended |
| Sleep | Network unavailable |
| Sleep | Totem controller placed in standby |
| Sleep | All bluetooth devices are disconnected |
| Sleep | Loss of adb shell access |
| Sleep | All peripheral sensors and cameras placed into Low Power state |
| Sleep | Head Pose Tracking and Upper Face Detection suspended |



