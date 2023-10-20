---
title: Access Magic Leap 2 with Android
sidebar_position: 1
date: 09/23/2022
tags: [Magic Leap, Android]
keywords: [Magic Leap, Android, Generic, Sensor]
---
 
 # Access Sensors, Cameras, and Microphones on Magic Leap 2 with Android

Developers can access a variety of Magic Leap 2’s sensors to obtain information about the environment and the device’s orientation, motion, and position. These sensors can be accessed via the standard Android Sensor API, which allows you to register listeners for sensor events, get sensor data, and manage sensor resources. The available sensors include:

* Ambient Light Sensor
* Headset Pressure Sensor (Altimeter)
* Compute Pack Pressure Sensor (Altimeter)
* Compute Pack Gyroscope Sensor
* Headset Left Gyroscope Sensor
* Headset Right Gyroscope Sensor
* Compute Pack Accelerometer Sensor
* Headset Left Accelerometer Sensor
* Headset Right Accelerometer Sensor
* Headset Right Uncalibrated 
* Magnetometer Sensor (Compass)
* Headset Left Uncalibrated 
* Magnetometer Sensor (Compass)

The camera you can access is available through Android's [Camera2 API](https://developer.android.com/training/camera2):

* Video Camera (also called VCam, RGB Camera, Picture Camera)

You cannot access the other cameras through Android at this time. If you want access to specialized sensors such as eye or depth camera sensors, you can use the Magic Leap 2 Unity or Native options:
* [Access Magic Leap 2 with Native C](nativec-sensors)
* [Access Magic Leap 2 with Unity](unity-sensors)

You can access the microphones through Android **MediaRecorder** and **AudioRecord**. 

For more information about the different sensors, cameras, and microphones, what they do, and the different ways they are referred to in Magic Leap 2 documentation, refer to [Features Overview and Accessibility](features-overview-and-accessibility).

## Available Sensors

The following table lists the sensors that are available on Magic Leap 2 and their corresponding sensor types in the Android Sensor API. The names can be used to identify which sensor was updated when implementing the ```SensorEventListener``` interface to receive updates when sensor values change in Java.  
  
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

## Available Camera

You can access the video camera (also known as VCam, RGB Camera, or Picture Camera) using Android's Camera2 API. To get started using the video camera, Magic Leap 2 recommends [this sample from Android](https://github.com/android/camera-samples/blob/main/Camera2Basic/app/src/main/java/com/example/android/camera2/basic/fragments/CameraFragment.kt).

::: note
When you use the Camera2 API, three cameras enumerate. To access the main video/RGB camera stream, use **camera 0**. The other options do not connect with Magic Leap 2.
:::

### Options for Accessing Other Cameras Through Unity

You can access Magic Leap 2 cameras through Magic Leap's Unity SDK. See [Access Magic Leap 2 with Unity](unity-sensors) for more information on how to access additional sensors.

### Options for Accessing Other Cameras Through Native C

You can access Magic Leap 2 cameras through Magic Leap's Unity SDK. See [Access Magic Leap 2 with Native C](nativec-sensors) for more information on how to access additional sensors.


## Access Microphones

Android uses **MediaRecorder** for video and audio. You can access Magic Leap microphones using MediaRecorder. Read the documentation for MediaRecorder for more information.

## Using the Android Sensor API

To use the Android Sensor API, begin by registering a listener for sensor events through an object implementing the `SensorEventListenerinterface`. This interface comprises two methods: `onSensorChanged(SensorEvent event)` and `onAccuracyChanged(Sensor sensor, int accuracy)`. Obtain an instance of the `SensorManager` class by invoking `getSystemService(Context.SENSOR_SERVICE)` and register your listener with one of the `registerListener()` methods. Specify the sensor, your desired sampling rate, or delay from constants like `SENSOR_DELAY_NORMAL`, `SENSOR_DELAY_UI`, and so on. Always unregister listeners when not needed. When a sensor event arises, the `onSensorChanged` method provides a `SensorEvent` object containing details like the generating sensor, event accuracy, timestamp, and the sensor data. The nature of this data varies with the sensor type. Lastly, manage sensor resources judiciously to save battery and processing power. Utilize methods from the `SensorManager` class to check sensor availability and manage dynamic sensors. For in-depth details, consult the [Android Sensor Documentation](https://developer.android.com/guide/topics/sensors/sensors_overview).

## References

For more information and examples on how to use the Android Sensor API, please refer to the following resources:

* [Android Developers: Sensors Overview](https://developer.android.com/guide/topics/sensors/sensors_overview)
* [Android Developers: Motion Sensor](https://developer.android.com/guide/topics/sensors/sensors)
* [Android Developers: SensorManager](https://developer.android.com/reference/android/hardware/SensorManager)

For information and examples on using the Android Camera2 API to access the video camera, refer to this resource:
* [Android Developers: Camera2 API](https://developer.android.com/training/camera2)
