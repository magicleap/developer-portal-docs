---
id: compute-pack-led
title: Compute Pack LED
sidebar_position: 10
date: 06/08/2022
tags: [Controller, LEDs, LED Patterns]
keywords: [Controller, LEDs, LED Patterns]
---

import ReactPlayer from 'react-player';

This article explains what action the Magic Leap 2 Compute Pack's LED patterns signify.

The compute pack on Magic Leap 2 can show anywhere from 1 - 5 LED dots. Different combinations of these dots and colors communicate different statuses about the device.

| Description                                                                                                   | Animation                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Compute pack is waking up.                                                                                    | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-boot-up.webm" width="300px" height="150px" playing loop />                    |
| Compute pack is on.                                                                                           | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-on.webm" width="300px" height="150px" playing loop />                         |
| Controller is in a low power state ready to go into sleep mode.                                               | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-standby.webm" width="300px" height="150px" playing loop />                    |
| Device is in sleep mode.                                                                                      | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-sleep.webm" width="300px" height="150px" playing loop />                      |
| Shut down starts with a long press of the power button.                                                       | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-shut-down.webm" width="300px" height="150px" playing loop />                  |
| The LED will pulse white and red when the compute pack is charging and the battery is 5% or less.             | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-critical-battery-charging.webm" width="300px" height="150px" playing loop />  |
| Compute pack battery is critically low at 5% or less.                                                         | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-critical-battery-unplugged.webm" width="300px" height="150px" playing loop /> |
| Five LEDs show the battery level at 100% and charging.                                                        | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-charging-100.webm" width="300px" height="150px" playing loop />               |
| Four LEDs show the battery level is between 76–99% and charging.                                              | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-charging-76-99.webm" width="300px" height="150px" playing loop />             |
| Three LEDs show the battery level is between 51–75% and charging.                                             | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-charging-51-75.webm" width="300px" height="150px" playing loop />             |
| Two LEDs show the battery level is between 26–50% and charging.                                               | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-charging-26-50.webm" width="300px" height="150px" playing loop />             |
| One LED shows the battery level is between 6–25% and charging.                                                | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-charging-6-25.webm" width="300px" height="150px" playing loop />              |
| Five LEDs show the battery level is 100%.                                                                     | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-battery-check-100.webm" width="300px" height="150px" playing loop />          |
| Four LEDs show the battery level is between 76–99%.                                                           | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-battery-check-76-99.webm" width="300px" height="150px" playing loop />        |
| Three LEDs show the battery level is between 51–75%.                                                          | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-battery-check-51-75.webm" width="300px" height="150px" playing loop />        |
| Two LEDs show the battery level is between 26–50%.                                                            | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-battery-check-26-50.webm" width="300px" height="150px" playing loop />        |
| One LED shows the battery level is between 6–25%.                                                             | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-battery-check-6-25.webm" width="300px" height="150px" playing loop />         |
| An insufficient charger is being used. Five LEDs show the battery level is 100%.                              | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-insufficient-charger-100.webm" width="300px" height="150px" playing loop />   |
| An insufficient charger is being used. Four LEDs show the battery level is between 76–99%.                    | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-insufficient-charger-76-99.webm" width="300px" height="150px" playing loop /> |
| An insufficient charger is being used. Three LEDs show the battery level is between 51–75%.                   | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-insufficient-charger-51-75.webm" width="300px" height="150px" playing loop /> |
| An insufficient charger is being used. Two LEDs show the battery level is between 26–50%.                     | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-insufficient-charger-26-50.webm" width="300px" height="150px" playing loop /> |
| An insufficient charger is being used. One LED shows the battery level is between 6–25%.                      | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-insufficient-charger-6-25.webm" width="300px" height="150px" playing loop />  |
| An incompatible charger is being used.                                                                        | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-incompatible-charger.webm" width="300px" height="150px" playing loop />       |
| Compute pack and controller are pairing.                                                                      | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-bluetooth-pairing.webm" width="300px" height="150px" playing loop />          |
| Compute pack and controller have successfully paired.                                                         | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-bluetooth-pairing-success.webm" width="300px" height="150px" playing loop />  |
| Compute pack and controller have not paired.                                                                  | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-bluetooth-pairing-failure.webm" width="300px" height="150px" playing loop />  |
| Update is in progress.                                                                                        | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-updating.webm" width="300px" height="150px" playing loop />                   |
| Update has failed.                                                                                            | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-updating-failure.webm" width="300px" height="150px" playing loop />           |
| Device is in Fastboot.                                                                                        | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-fastboot.webm" width="300px" height="150px" playing loop />                   |
| Device is in recovery mode.                                                                                   | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-recovery-mode.webm" width="300px" height="150px" playing loop />              |
| Device successfully completed action. This is paired with other patterns to confirm the action is successful. | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-generic-success.webm" width="300px" height="150px" playing loop />            |
| Device failed the attempted action.                                                                           | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-generic-failure.webm" width="300px" height="150px" playing loop />            |
| Device is using the Magic Leap Hub to sideload an APK.                                                        | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-sideload.webm" width="300px" height="150px" playing loop />                   |
| Device needs to cool down.                                                                                    | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-thermal-warning.webm" width="300px" height="150px" playing loop />            |
| Overheating has caused a fault.                                                                               | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-thermal-fault.webm" width="300px" height="150px" playing loop />              |
| A hardware failure has occured.                                                                               | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-hardware-failure.webm" width="300px" height="150px" playing loop />           |
| A software failure has occured.                                                                               | <ReactPlayer url="/videos/led-patterns/compute-pack/compute-software-failure.webm" width="300px" height="150px" playing loop />           |
