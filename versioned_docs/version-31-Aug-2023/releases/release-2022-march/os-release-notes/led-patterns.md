---
id: led-patterns
title: March 2022 - LED Patterns
sidebar_position: 5
date: 12/21/2021
---

# RC1 LED Patterns

This article explains what action the ML2 Compute Pack's LED patterns signify.

| Event | LED   |
|-------|-------|
| ![image](/img/led-images/powerup.png)    | <h3>Powering Up</h3> LEDs 1-5 will be all turned off. LED 1 will turn white, followed by LED 2, then 3 through 5.  There's a short second interval in between LEDs turning ON.|
|![image](/img/led-images/powerdown.png)      | <h3>Powering Down</h3> LEDS 1-5 will all be on white. LED 5 will fade out, followed by LED 4, then 3 through 1. There's a short second interval between LEDs turning off. |
|![image](/img/led-images/charging.png)     |  <h3> Charging</h3> **0-24%**: LED 1 will blink white and red alternatively in a breathing manner. <br />  **25-49%**: LEDs 1 and 2 will blink white and red alternatively in a breathing manner. <br /> **50-74%**:LEDs 1,2 and 3 will blink white and orange alternatively in a breathing manner. <br /> **75-99%**: LEDs 1, 2, 3 and 4 will blink white and yellow alternatively in a breathing manner. <br /> **100%**: LEDs 1, 2, 3, 4 and 5 will blink white and yellow alternatively in a breathing manner.|
|![image](/img/led-images/deviceready.png)  | <h3>Device ready to use</h3> LED 3 will be purple and ON. This pattern will be interrupted timely by the Battery Status pattern. |
| ![image](/img/led-images/batterystatus.png)  | <h3>Battery Status</h3>**0-24%**: LED 1 will blink white and red alternatively in a breathing manner. <br /> **25-49%**: LEDs 1 and 2 will blink white and red alternatively in a breathing manner. <br /> **50-74%**:LEDs 1,2 and 3 will blink white and orange alternatively in a breathing manner.<br /> **75-99%**: LEDs 1, 2, 3 and 4 will blink white and yellow alternatively in a breathing manner. <br /> **100%**: LEDs 1, 2, 3, 4 and 5 will blink white and yellow alternatively in a breathing manner.|
|![image](/img/led-images/controlsearch.jpeg)  | <h3>Control Search</h3> A pair of 2 LEDs will turn on white simultaneously, back and forth. <br /> LEDs 1 & 2, then LEDs 2 & 3, then LEDs 3 & 4, then LEDs 4 & 5. <br />Thereafter, the sequence will get reversed. <br /> LEDs 4 & 3, then LEDs 3 & 2, then LEDs 2 & 1|
|![image](/img/led-images/controlpairing.jpeg)  | <h3>Control Pairing</h3> A pair of 2 LEDs will turn blue and will back and forth: <br /> LEDs 1 & 2, then LEDs 2 & 3, then LEDs 3 & 4, then LEDs 4 & 5. <br /> Thereafter, the sequence will get reversed: <br /> LEDs 4 & 3, then LEDs 3 & 2, then LEDs 2 & 1|
|![image](/img/led-images/controlpaired.jpeg)  | <h3>Control Paired</h3> In a blue color, all 5 LEDs will quickly blink twice and then turn off for 1 second. This will continue in a loop.|
|![image](/img/led-images/updating.png)  | <h3>Updating</h3> LEDs will be white. <br /> LED 3 will turn on. <br /> LEDs 2 and 4 will turn on and LED 3 will turn off simultaneously. <br /> LEDs 1 and 5 will turn on while LEDs 2 and 4 turn off simultaneously. <br /> LED 5 will turn on while LEDs 1 and 5 turn off simultaneously. |
|![image](/img/led-images/success.jpeg)  | <h3>Generic Success</h3> LEDs will be white. <br /> All 5 LEDs will simultaneously blink slowly thrice. After the three blinks, there is a gap of 1 second with all 5 LEDs remaining off.|
|![image](/img/led-images/failure.jpeg)  |<h3>Generic Failure</h3> LEDs will be red. <br /> All 5 LEDs will simultaneously blink slowly thrice. After the three blinks, there is a gap of 1 second with all 5 LEDs remaining off.|

