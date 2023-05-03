---
id: controller-led
title: Controller LED
sidebar_position: 8
date: 06/08/2022
tags: [Compute Pack, LEDs, LED Patterns]
keywords: [Compute Pack, LEDs, LED Patterns]
---

import ReactPlayer from 'react-player';

Magic Leap 2's controller has a single LED dot. Different combinations of colors and flashes communicate different pieces of information about the controller's status.

| Description                                                                                                   | Animation                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Controller is waking up.                                                                                      | <ReactPlayer url="/videos/led-patterns/controller/controller-boot-up.webm" width="200px" height="200px" playing loop muted playsinline />                    |
| Shut down starts with a long press of the power button.                                                       | <ReactPlayer url="/videos/led-patterns/controller/controller-shut-down.webm" width="200px" height="200px" playing loop muted playsinline />                  |
| Controller is on and working properly.                                                                        | <ReactPlayer url="/videos/led-patterns/controller/controller-on.webm" width="200px" height="200px" playing loop muted playsinline />                         |
| Controller is in a low power state ready to go into sleep mode.                                               | <ReactPlayer url="/videos/led-patterns/controller/controller-standby.webm" width="200px" height="200px" playing loop muted playsinline />                    |
| The LED will pulse white and red when the compute pack is charging while the battery is 5% or less.           | <ReactPlayer url="/videos/led-patterns/controller/controller-critical-battery-charging.webm" width="200px" height="200px" playing loop muted playsinline />  |
| Controller is at critically low charge.                                                                       | <ReactPlayer url="/videos/led-patterns/controller/controller-critical-battery-unplugged.webm" width="200px" height="200px" playing loop muted playsinline /> |
| Controller is charging.                                                                                       | <ReactPlayer url="/videos/led-patterns/controller/controller-bluetooth-pairing.webm" width="200px" height="200px" playing loop muted playsinline />          |
| Compute pack and controller are pairing.                                                                      | <ReactPlayer url="/videos/led-patterns/controller/controller-bluetooth-pairing.webm" width="200px" height="200px" playing loop muted playsinline />          |
| Compute pack and controller have successfully paired.                                                         | <ReactPlayer url="/videos/led-patterns/controller/controller-bluetooth-pairing-success.webm" width="200px" height="200px" playing loop muted playsinline />  |
| Compute pack and controller have not paired.                                                                  | <ReactPlayer url="/videos/led-patterns/controller/controller-bluetooth-pairing-failure.webm" width="200px" height="200px" playing loop muted playsinline />  |
| Update is in progress.                                                                                        | <ReactPlayer url="/videos/led-patterns/controller/controller-updating.webm" width="200px" height="200px" playing loop muted playsinline />                   |
| Update has failed.                                                                                            | <ReactPlayer url="/videos/led-patterns/controller/controller-updating-failure.webm" width="200px" height="200px" playing loop muted playsinline />           |
| Device successfully completed action. This is paired with other patterns to confirm the action is successful. | <ReactPlayer url="/videos/led-patterns/controller/controller-generic-success.webm" width="200px" height="200px" playing loop muted playsinline />            |
| Device failed attempted action.                                                                               | <ReactPlayer url="/videos/led-patterns/controller/controller-generic-failure.webm" width="200px" height="200px" playing loop muted playsinline />            |
| Controller and Compute Pack pack have different firmware versions.                                            | <ReactPlayer url="/videos/led-patterns/controller/controller-firmware-mismatch.webm" width="200px" height="200px" playing loop muted playsinline />          |
