---
title: Android Sensor API
sidebar_position: 1
date: 09/23/2022
tags: [Magic Leap, Android]
keywords: [Magic Leap, Android, Generic, Sensor]
---
 
 # Accessing Sensors on Magic Leap 2

Developers can access a variety of Magic Leap 2’s sensors to obtain information about the environment and the device’s orientation, motion, and position. These sensors can be accessed via the standard Android Sensor API, which allows you to register listeners for sensor events, get sensor data, and manage sensor resources.

:::info Specialized Magic Leap 2 sensors

While generic sensors such as the Light Sensor can be accessed using Android's Sensor API, more specialized sensors such as the World Cameras can only be accessed via the Magic Leap SDK.

:::

## Available Sensors

The following table lists the sensors that are available on Magic Leap 2 and their corresponding sensor types in the Android Sensor API. The names can be used to identify which sensor was updated when implementing the SensorEventListener interface to receive updates when sensor values change in Java  
  
:::info Multiple Sensor Instances
Some sensors have multiple instances with different names, such as the gyroscope and accelerometer sensors which are available on both the headset and the compute pack.
:::


| Sensor Name | Sensor Type | Description |
| --- | --- | --- |
| Ambient Light Sensor | `Sensor.TYPE_LIGHT` | Measures the ambient light level in lux and is located on the headset |
| Headset Pressure Sensor | `Sensor.TYPE_PRESSURE` | Measures the atmospheric pressure in hectopascals at the headset |
| Compute Pack Pressure Sensor | `Sensor.TYPE_PRESSURE` | Measures the atmospheric pressure in hectopascals at the compute pack |
| Compute Pack Gyroscope Sensor | `Sensor.TYPE_GYROSCOPE` | Measures the angular velocity of the compute pack in radians per second |
| Headset Left Gyroscope Sensor | `Sensor.TYPE_GYROSCOPE` | Measures the angular velocity of the left side of the headset in radians per second |
| Headset Right Gyroscope Sensor | `Sensor.TYPE_GYROSCOPE` | Measures the angular velocity of the right side of the headset in radians per second |
| Compute Pack Accelerometer Sensor | `Sensor.TYPE_ACCELEROMETER` | Measures the linear acceleration of the compute pack in meters per second squared |
| Headset Left Accelerometer Sensor | `Sensor.TYPE_ACCELEROMETER` | Measures the linear acceleration of the left side of the headset in meters per second squared |
| Headset Right Accelerometer Sensor | `Sensor.TYPE_ACCELEROMETER` | Measures the linear acceleration of the right side of the headset in meters per second squared |
| Headset Right Uncalibrated Magnetometer Sensor | `Sensor.TYPE_MAGNETIC_FIELD_UNCALIBRATED` | Measures the magnetic field strength and bias of the right side of the headset in microteslas |
| Headset Left Uncalibrated Magnetometer Sensor | `Sensor.TYPE_MAGNETIC_FIELD_UNCALIBRATED` | Measures the magnetic field strength and bias of the left side of the headset in microteslas |

## Using the Android Sensor API

To use the Android Sensor API, begin by registering a listener for sensor events through an object implementing the `SensorEventListenerinterface`. This interface comprises two methods: `onSensorChanged(SensorEvent event)` and `onAccuracyChanged(Sensor sensor, int accuracy)`. Obtain an instance of the `SensorManager` class by invoking `getSystemService(Context.SENSOR_SERVICE)` and register your listener with one of the `registerListener()` methods. Specify the sensor, your desired sampling rate, or delay from constants like `SENSOR_DELAY_NORMAL`, `SENSOR_DELAY_UI`, and so on. Always unregister listeners when not needed. When a sensor event arises, the `onSensorChanged` method provides a `SensorEvent` object containing details like the generating sensor, event accuracy, timestamp, and the sensor data. The nature of this data varies with the sensor type. Lastly, manage sensor resources judiciously to save battery and processing power. Utilize methods from the `SensorManager` class to check sensor availability and manage dynamic sensors. For in-depth details, consult the [Android Sensor Documentation](https://developer.android.com/guide/topics/sensors/sensors_overview).

## References

For more information and examples on how to use the Android Sensor API, please refer to the following resources:

* [Android Developers: Sensors Overview](https://developer.android.com/guide/topics/sensors/sensors_overview)
* [Android Developers: Motion Sensor](https://developer.android.com/guide/topics/sensors/sensors)
* [Android Developers: SensorManager](https://developer.android.com/reference/android/hardware/SensorManager)
