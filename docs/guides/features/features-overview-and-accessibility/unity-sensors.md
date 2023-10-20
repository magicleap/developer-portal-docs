---
title: Access Magic Leap 2 with Unity
sidebar_position: 2
date: 10/05/2023
tags: [Unity, Sensors]
keywords: [Unity, Sensors]
---

# Access Sensors, Cameras, and Microphones on Magic Leap 2 with Unity

With Unity, you can access many of Magic Leap 2’s sensors to retrieve information about the environment and the device’s orientation, motion, and position.You can also access Magic Leap 2’s cameras and microphones. The available sensors include:
* Ambient Light Sensor
* Headset Pressure Sensor (Altimeter)
* Compute Pack Pressure Sensor (Altimeter)
* Compute Pack Gyroscope Sensor
* Headset Left Gyroscope Sensor
* Headset Right Gyroscope Sensor
* Compute Pack Accelerometer Sensor
* Headset Left Accelerometer Sensor
* Headset Right Accelerometer Sensor

::: note
You can access the following sensors through Android in Unity (Magic Leap's Unity API and SDK does not offer a way to do it directly):
* Headset Right Uncalibrated Magnetometer Sensor (Compass)
* Headset Left Uncalibrated Magnetometer Sensor (Compass)
:::

The available cameras and microphones include:
* Video Camera
* Depth Camera (1)
* World Camera (3)
* Eye Camera (4)
* Microphones (4)

There are also camera sensors on the controller, two world cameras, but these cannot be accessed by you.

If your project is limited to the video camera and the sensors, you can use Android APIs, and add a plug-in to access the other cameras through Unity:
* [Access Magic Leap 2 with Android](android-sensors)

For more information about the different sensors and cameras, what they do, and the different ways they are referred to in Magic Leap 2 documentation, refer to [Features Overview and Accessibility](features-overview-and-accessibility). 

## Available Sensors for Unity

Magic Leap 2's Unity documentation maps available sensors from Unity to Android in the [Sensors Input section](https://developer-docs.magicleap.cloud/docs/guides/unity/input/sensors/unity-android-sensors/#enabling-and-disabling-sensors). Using this documentation, you can access:
* Ambient Light Sensor (Light Sensor)
* Headset Pressure Sensor (Altimeter)
* Compute Pack Pressure Sensor (Altimeter)
* Compute Pack Gyroscope Sensor 
* Headset Left Gyroscope Sensor
* Headset Right Gyroscope Sensor
* Compute Pack Accelerometer Sensor
* Headset Left Accelerometer Sensor
* Headset Right Accelerometer Sensor

If you want to access Magic Leap 2 magnetometer data, you can use the Android APIs (see Accessing Sensors on Magic Leap 2 with Android). The sensors you can access are:
* Headset Right Uncalibrated 
* Magnetometer Sensor
* Headset Left Uncalibrated 
* Magnetometer Sensor

## Camera Access for Unity

You can access all of Magic Leap 2’s cameras (except for those on the controller) using Unity. Cameras include:
* Video Camera
* Depth Camera (1)
* World Camera (3)
* Eye Camera (4)

### Video Camera

In Unity, the video camera is referred to as the **MLCamera** or **MLCVCamera**. This camera is also sometimes referred to as the picture camera, RGB camera, or go pro camera. You can read more about how to access this camera to capture real and virtual video in your application in the [Unity MLCamera](https://developer-docs.magicleap.cloud/docs/guides/unity/camera/ml-camera-overview/) section and the [Unity MLCVCamera](https://developer-docs.magicleap.cloud/docs/unity-api/api/UnityEngine.XR.MagicLeap/MLCVCamera/UnityEngine.XR.MagicLeap.MLCVCamera/) section. You can obtain frame buffers, timestamp and other metadata using MLCamera and then use MLCVCamera to query for frame pose using MLCVCamera API. The timestamp is what connects both.

### Depth Camera

The depth camera is used to determine the distance (depth) of points in a VR or AR scene. You can access the depth camera using **MLDepthCamera**. See the [Depth Camera section](https://developer-docs.magicleap.cloud/docs/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera/) for Unity.

### World Camera

World cameras can be accessed in Unity using **MLWorldCamera**. You can find more information about accessing world cameras in the [MLWorldCamera for Unity section](https://developer-docs.magicleap.cloud/docs/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera/).

### Eye Camera

You can access information about the user’s eyes through the four eye cameras on the Magic Leap 2 headset. The main ways to retrieve this data are with **MLEyeCalibration**, **MLEyeCamera**, **MLFacialExpression**, and **MLGazeRecognition**. See the following Unity documentation:
* [MLEyeCalibration](https://developer-docs.magicleap.cloud/docs/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration/)
* [MLEyeCamera](https://developer-docs.magicleap.cloud/docs/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera/)
* [MLFacialExpression](https://developer-docs.magicleap.cloud/docs/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/UnityEngine.XR.MagicLeap.MLFacialExpression/)
* [MLGazeRecognition](https://developer-docs.magicleap.cloud/docs/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition/)

## Microphone Access for Unity

Magic Leap’s offering for microphone access is more detailed than the standard Unity offering, though you can use either. For Magic Leap, use **MLAudio** in the [MLAudio for Unity section](https://developer-docs.magicleap.cloud/docs/guides/unity/ml-audio/ml-audio-overview/). This allows the greatest flexibility when using the microphone. However, if you want to use standard Unity, you can use [Unity’s Microphone class documentation](https://docs.unity3d.com/2022.3/Documentation/Manual/class-Microphone.html).



