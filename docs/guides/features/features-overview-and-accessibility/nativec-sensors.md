---
title: Access Magic Leap 2 with Native C
sidebar_position: 2
date: 10/05/2023
tags: [Native C, Sensors]
keywords: [Native C, Sensors]
---

# Access Sensors, Cameras, and Microphones on Magic Leap 2 with Native C

Magic Leap’s Native C offering allows you to access cameras and microphones. 

The available cameras and microphones include:
* Video Camera
* Depth Camera (1)
* World Camera (3)
* Eye Camera (4)
* Microphones (4)

There are also camera sensors on the controller, two world cameras, but these cannot be accessed by you. 

You can access the video camera and sensors through Android APIs:
* [Access Magic Leap 2 with Android](android-sensors)

For more information about the different sensors and cameras, what they do, and the different ways they are referred to in Magic Leap 2 documentation, refer to [Features Overview and Accessibility](features-overview-and-accessibility).

## Camera Access for Native C

Magic Leap 2’s Native C offering allows you to access the following cameras:
* Video Camera
* Depth Camera (1)
* World Camera (3)
* Eye Camera (4)

### Video Camera

You can access Magic Leap 2’s video camera Native C by using the [Camera](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___camera/), [CV Camera](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___c_v_camera/), [Camera Metadata](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___camera_metadata/), and [Media Recorder](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___media_recorder/) sections. Camera allows you to capture screenshots and video of real and/or virtual imagery. Camera allows you to retrieve information about camera pose and location. You can use Camera Metadata to control things like exposure, and the look and feel of your images and videos. Media Recorder allows you to listen for audio capture events and retrieve audio data.

### Depth Camera

The depth camera is used to determine the distance (depth) of points in a VR or AR scene. In Native C, you can access this under Pixel Sensors, in the [Depth Camera](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___pixel_sensors/group___d_cam/) section.

### World Camera

World cameras allow you to determine headpose, and filter the amount of light in your scenes. In Native C, you can access this under Pixel Sensors, in the [World Camera section](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___pixel_sensors/group___w_cam/).

### Eye Camera

Eye cameras allow you to track the user’s eyes. In Native C, you can access this under Pixel sensors, in the [Eye Camera section](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___pixel_sensors/group___e_cam/).

## Microphones for Native C

The Magic Leap 2 device has four microphones. You can access these in Native C with the [Audio](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___audio/) and [Media Recorder sections](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___media_recorder/). The Audio section allows you to adjust microphone settings and capture audio. Media Recorder allows you to listen for audio capture events and retrieve audio data.

