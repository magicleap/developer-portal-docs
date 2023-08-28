---
id: capi-samples
title: C-API Samples Overview
sidebar_position: 5
date: 08/29/2022
tags: [Native, C-API, Samples, Audio, Battery, Camera, Mixed Reality, Photo, Record, Controller, Gaze Recognition, Hand Tracking, Head Tracking, Input, Marker Tracking, Media Player, Permissions, Planes, Segmented Dimmer, simple_gl_app]
keywords: [Native, C-API, Samples, Audio, Battery, Camera, Mixed Reality, Photo, Record, Controller, Gaze Recognition, Hand Tracking, Head Tracking, Input, Marker Tracking, Media Player, Permissions, Planes, Segmented Dimmer, simple_gl_app]
---

The list below contains descriptions of each of the C-API samples available in the ML Hub. The `README.md` files of each example contain instructions on how to build, install and uninstall the example, as well as its expected behavior and GUI.

## Audio Input

This sample provides a GUI that will allow users to record their voice and play
it back.

## Audio Output

Application assets contain two audio PCM files: mary.pcm and ML_AUD_Example.raw. By default tha app will play ML_AUD_Example.raw on the loop.
With command line arguments it is possible to specify file to play (--filename), sample rate (--sample_rate) and other parameters.
Please see main.cpp for complete list of parameters supported.

## Battery

This sample demonstrates how to get the battery status.

## Camera: Auto Exposure

This sample demonstrates how to use Auto Exposure (AE) related API especially in terms of AE regions.

## Camera: Auto Focus

This sample demonstrates how to use auto focus from camera API.

## Camera: Mixed Reality

This sample demonstrates how to set up the mixed reality camera and record the video from it using MediaRecorder API.

## Camera: Photo

This sample demonstrates how to preview live feed from a camera and capture images by using multiple streams for a single camera.

## Camera: Preview

This sample demonstrates how to set up camera and stream live feed to a view surface.

## Camera: Record

This sample demonstrates how to preview live feed from a camera and record it using MediaRecorder API.

## Controller

This sample demonstrates how to get the state of the Controller and also displays the 6dof position of the Controller.

See the **ml_input.h** header for the MLInputControllerCallbacks, which
can also be used to get events on Controller input.

## Eye Tracking

This example demonstrates the Eye Tracking API by drawing a cube at the gaze convergence point.

## Gaze Recognition

Gaze recognition reports ML's best estimate of your oculomotor behavior at a given point in time, metadata about the current behavior, and useful high-precision eye position signals.

The app will draw text to the screen that reports the state of your headset's Perception system and Gaze Recognition system, and current oculomotor behavior.

A cube is rendered in space to indicate the point of vergence.

## Hand Tracking

This sample visualizes output from the Hand Tracking API using simple meshes and text.

## Head Locked

The app prints a text box in front of the users eyes that is locked to the head's movement.

## Head Tracking

This sample renders a cube 1.5m in the negative Z direction from the
world origin. The device's world origin is where the device was when
it was booted up.

## Input Callbacks

This sample demonstrates how to receive keyboard input callbacks and Controller callbacks in an out of tree application.

## Input Command

This sample demonstrates how to use the bluetooth keyboard or soft keyboard to send
commands to an out of tree application.

This sample renders a cube 1.5m in the negative Z direction just to get a graphics window up.

## Lifecycle

This app will write loop info to logcat and the virtual console. Please refer to the `README.md` file for more information.

## Marker Tracker

When properly configured in the GUI, Aruco & QR trackers will receive an AR overlay showing their orientation. This will track multiple markers at the same time.

## Media Player

The GUI provides a simple media player interface. The app will start playing a built-in local media file automatically as soon as it is launched.

## Meshing

This sample demonstrates how to set up the Meshing API.

## Permissions

This sample shows how to request app permissions.

## Planes

This sample renders planes that are semantically tagged as floors. It
shows a pointer coming from the Controller. When you point at a plane
and pull the trigger a sphere will be placed at the middle of the
plane.

## Segmented Dimmer

This sample demonstrates how to use segmented dimmer via pixels alpha channel.

## simple_gl_app

This example demonstrates a simple OpenGL application which can be built and run
on host and on device using the Virtual Device and App Simulator systems.

## Spatial Anchor

This sample presents usage of the Spatial Anchors API.

## Voice Intents

The app is controlled by voice. A GUI with a menu shows up with multiple options that the user can say to interact with the app. Please refer to the `README.md` file for a full list of commands.

## Vulkan Cube

Renders a spinning cube with a triangle on top.

## WebView

Renders a browser window that will allow you to access the web if the device is connected to the internet. Please refer to the `README.md` file for further instructions.

