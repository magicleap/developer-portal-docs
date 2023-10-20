---
title: Features Overview and Accessibility
sidebar_position: 7
date: 10/03/2023
tags: [Features, Overview]
keywords: [Features, Overview]
---

# Features Overview and Accessibility

Magic Leap 2 allows developers to access the data from a variety of sensors. A general overview of what’s on each Magic Leap 2 headset is provided in this [Learn More](https://www.magicleap.com/ml2-devices) document. This guide details the different sensors available on the Magic Leap 2, as well as how you can access them. Some sensors are available through Magic Leap’s offerings, and many can be accessed through the Android Sensor API. Eventually, the sensors will all be standardized for use through the Android Sensor API.  

* Camera and Light Sensors - Headset
    * Video Camera (1) 
    * Depth Camera (1)
    * World Camera (3)
    * Eye Camera (4)
    * Ambient Light Sensor (1)

* Camera Sensors - Controller
    * World Camera (2) 
    
:::note 
These cannot be accessed by you. 
:::

* Audio Sensors 
    * Microphones (4)

* Other Sensors
    * 3-axis Accelerometer
    * 3-axis Gyroscope
    * 3-axis Magnetometers (2)
    * Altimeters (2)

## Sensor Accessibility Chart

This section provides a chart showing you what features are available across APIs. For more specifics please see the following content:
* [Access Sensors on Magic Leap 2 with Android](android-sensors) 
* [Access Sensors on Magic Leap 2 with Unity](unity-sensors)
* [Access Sensors on Magic Leap 2 with Native C](nativec-sensors)

| Sensor Title | Android | Magic Leap Unity | Magic Leap Native |
| ----- | ----- | ----- | ----- |
| Video Camera | Yes (w/ Android Camera API, ML Unity or ML Native C) | Yes | Yes |
| Depth Camera | Use ML Unity or ML Native | Yes | Yes |
| World Cameras (headset) | Use ML Unity or ML Native | Yes | Yes |
| World Cameras (controllers) | No | No | No |
| Eye Cameras (headset) | Use ML Unity or ML Native | Yes | Yes |
| Ambient Light Sensor (headset) | Yes | Yes | Use Android |
| Headset Pressure Sensor | Yes | Yes | Use Android |
| Compute Pack Pressure Sensor | Yes | Yes | Use Android |
| Compute Pack Gyroscope Sensor | Yes | Yes | Use Android |
| Headset Left Gyroscope Sensor | Yes | Yes | Use Android |
| Headset Right Gyroscope Sensor | Yes | Yes | Use Android |
| Compute Pack Accelerometer Sensor | Yes | Yes | Use Android |
| Headset Left Accelerometer Sensor | Yes | Yes | Use Android |
| Headset Right Accelerometer Sensor | Yes | Yes | Use Android |
| Headset Right Uncalibrated Magnetometer Sensor | Yes | Use Android or Compass in standard Unity | Use Android |
| Headset Left Uncalibrated Magnetometer Sensor | Yes | Use Android or Compass in standard Unity | Use Android |

## Camera and Light Sensors

The Magic Leap 2 device has 11 different cameras, 9 on the headset, and 2 on the controller. There’s also one ambient light sensor. These include:

Headset
* Video Camera (VCam, RGB Camera, the Picture Camera or “the go-pro” Camera) - 1 camera
* Depth Camera (DCam or PMD) - 1 camera
* World Cameras (WCam) - 3 cameras
* Eye Cameras (ECam) - 4 cameras
* Ambient light sensor - 1 sensor

Controller
* World Cameras (WCam) - 2 cameras

In the center of the Magic Leap 2 device (center of your forehead), there are three cameras, one world camera, the depth camera, and the video camera. To either side, near your temples, there is an additional world camera. The eye cameras are placed with one at the left temple, left side of your nose, right side of your nose, and right temple. These look into the user’s eye to monitor eye tracking. More information is provided about each kind of camera in the following sections.

### Video Camera (VCam, RGB Camera, Picture Camera)

There is 1 video camera on the Magic Leap 2 device. The video camera is a forward facing video camera that can be used the same way a phone, camera, or camcorder would be. It’s a full color camera you can access through Android APIs as well as Magic Leap 2 APIs. This camera is also used with a feature called “third eye,” which allows recording of not only the real world in front of the user, but a mix of Magic Leap 2 virtual content combined with the world, giving you augmented reality, for use either in streaming or recording. This is done by creating a virtual camera device in the system which shows up as if it were another camera plugged into the system, but is actually a software stream combining the hardware VCam with the rendered scene.

#### Video Camera Specifications:
* Resolution 12.59MP (4096 x 3072)
* Diag. FOV 77.6D x 65.4H x 51.2V deg 
* Aperture FOV f/2.0
* Focus Variable Focus (60cm, 2m), 0.2m - 2m (Adjustable Peak Focus)
* Streaming 4K@30fps or 1920x1080@60fps

### Depth Camera
There is 1 depth camera on the Magic Leap 2 device. The depth camera is used to determine the distance (depth) of points in a VR or AR scene. This is used in the World Reconstruction process. The depth camera takes an IR picture of the world to get a base-line, and then it flashes a powerful IR light, like the flash on a camera, and takes a picture with that flash. The headset can take this main image, and subtract out the baseline.

#### Depth Camera Specifications:
* Resolution - 544(cropped) x 480(interpolated) pix, Native: 640 x 240, Native Implementation: 544 x 240, Upscaling: 544 x 480 2x2 Binned Mode: 272 x 240
* FoV per cam 92.2D x 75.0H x 70.0V deg
* Short Range Operating Distance 0.2m to 0.7m
* Long Range Operating Distance up to 7.5m at 90% reflectivity, up to 4.5m at 18% reflectivity
* Operating Modes - SR (60Hz), LR (5Hz), SR+LR (5Hz), SR(~50+Hz) + LR(1Hz) 
* Operating Wavelength - 850nm 

### World Camera
The MagicLeap 2 comes with 3 Field of View world cameras. You can read more about [MagicLeap’s FoV World Cameras here](https://developer-docs.magicleap.cloud/docs/guides/device/fov#world-camera-fov). These IR cameras look at the world basically as a black and white version of what you would see, but with three of them, you have a broader field of view, and you have overlapping views from different vantage points. This allows the system to determine the head pose at 30hz. These cameras can also alternate into a short exposure mode, which filters out the world except for sources of IR light, or IR reflectors, which makes it very easy to track objects with IR emitters, such as the controller.

#### World Camera Specifications:
* Resolution 1016x1016 pix
* FoV per cam 113.4D x 100.0H x 100.0V deg
* FoV total across cameras 170H x 100V deg
* Stereo overlap 30H x 100V deg
* F# 2.09
* EFL vis=1.96mm ir=1.97mm
* Object Distance/DOF 25cm to inf
* Operating Wavelength 420-700nm

### Eye Camera

The Eye Cameras look at the eyes, two cameras per eye. The cameras track where the user’s eyes are relative to the headset for rendering purposes. You have two cameras per eye, because the cameras must be at off angles to avoid obstructing the user’s world view. They determine where the user’s gaze is fixated (distance), which can be important for rendering, and can be used as an input mode based on where the user is looking.

#### Eye Camera Specifications:
* Feature 90 fps 2 cameras per eye
* Resolution 400x400 2 per eye
* FOV per cam 90D x 70H x 70V deg
* User detection - not wearing flag 2s after pupil not detected

### Ambient Light Sensor

Ambient Light Sensor
Your MagicLeap 2 device has one dedicated ambient light sensor. It is a photodetector used to sense the amount of ambient light present.
* 1 Ambient Light Sensor

## Audio and Other Sensors

### Accelerometer 

The MagicLeap 2 offers four 3-axis accelerometers. They are used to measure the rate of change in movement.
* 1 Headset Left Accelerometer sensor
* 1 Headset Right Accelerometer sensor
* 1 Compute Pack Accelerometer sensor
* 1 Controller Accelerometer sensor

### Gyroscope

There are four 3-axis gyroscopes on the MagicLeap 2 device. They are used in rotational tracking on your device to track the rotational movements of pitch, yaw, and roll.
* 1 Headset Left Gyroscope sensor
* 1 Headset Right Gyroscope sensor
* 1 Compute Pack Gyroscope sensor
* 1 Controller Gyroscope sensor

### Magnetometer

There are two 3-axis magnetometers on the MagicLeap 2 device. They measure magnetic flux density and determine the direction, strength, and variation in a magnetic field at a set location.
* 1 Headset Left Uncalibrated Magnetometer sensor
* 1 Headset Right Uncalibrated Magnetometer sensor

### Microphone

There are four microphones on MagicLeap 2 devices that capture audio of your voice during video recordings, calls, meetings, and when you use Voice Commands. The microphones also collect acoustic sound from the world around you, which can be used to create realistic digital sound effects.