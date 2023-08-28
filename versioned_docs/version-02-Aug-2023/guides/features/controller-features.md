---
title: Controller
description: An overview of the controller's buttons and sensors, touchpad gestures, and important changes from the Magic Leap 1 SDK.
sidebar_position: 3
date: 1/28/2022
tags: [Controller, Input, Power, Power Off, Shut Down]
keywords: [Controller, Input, Power, Power Off, Shut Down]
---

## Controller Overview

The upgraded Magic Leap 2 controller offers the same functionality as the original controller, but it now includes an improved tracking system using two on-controller cameras. Below you can learn more about the controller buttons and sensors, touchpad gestures, and important changes from the Magic Leap 1 SDK.

## Hardware Diagram

<Image url= {require("/img/unity/input/controller/controller-features/controllerDiagram_placeholder.png")} >Controller Button Diagram</Image>

## Touchpad Gestures

<Image url= {require("/img/unity/input/controller/controller-features/touchpadDiagram_placeholder.png")} >Touchpad Gesture Diagram</Image>

## Changes from Magic Leap 1

Magic Leap controller tracking technology has significantly changed. ML1 uses a combination of EM and IMU sensors to track the 6DOF pose of the controller. The Magic Leap 2 controller uses a combination of IR LED tracking and a lightweight SLAM tracker running on the IMU. Therefore, controller tracking should still work when there is no direct line of sight.

Because of the new tracking technology, there are a few things you should pay attention in relation to when porting apps to Magic Leap 2:

- The Controller lacks the 12 visible LEDs arranged around the touchpad. All apps using this feature will need to alter the UX where necessary. The display LED is now replaced by a single status LED.
- The Controller can lose tracking if it is not in the line of sight and is in an area of low-light, low-texture, or high dynamic scenes. These conditions can break SLAM tracking.
- The Controller tracking will degrade in performance if it is out of line of sight for extended periods of time.

## Best Practices

### Avoid the following controller interactions

- Trigger hold+touchpad swipe is not a comfortable interaction for some people.
- Frequent combined controller interactions (i.e. pressing several buttons at the same time) are not comfortable.  
- Touchpad double taps: Every user has a different intuition of how quickly they should tap, which leads to false positives & frustration.
- Touchpad force press: Every user has a different intuition for how hard to press down on the touchpad, which leads to false positives & frustration.

### Overlay digital tooltips on the controller with caution

The controller is outside of the user’s field of view, and so any tooltips will be obscured from view unless attention is directed to them. Moreover, the offset or jitter of digital tooltips on the controller may be confusing to the user. In particular, avoid long small blocks of type locked to the control. The user must steady their head and hand to read them.

:::info
ML2 now supports only one Controller at any given time. ML1 had unofficial support for two controllers. The Magic Leap 2 APIs will be updated to remove this functionality and force developers to use only one Controller.
:::

:::info
To find resources for troubleshooting controller issues, such as turning it on/off, click [here](https://www.magicleap.care/hc/en-us/articles/4424698871565-Controller-Overview)
:::

