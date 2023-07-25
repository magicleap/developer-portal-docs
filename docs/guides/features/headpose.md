---
id: headpose
title: Headpose 
sidebar_position: 5
date: 01/25/2023
tags: [Headpose , Sensors, Tracking]
keywords: [Headpose, Sensors, Tracking]
---

# Magic Leap 2 Headpose User Guide

## Introduction

Magic Leap 2 uses cameras and IMUs (Inertial Measurement Units) to determine its accurate relative pose (position and rotation) at any time. By knowing its pose the device can make objects appear world locked while the headset is moving in space. I.e. digital content remains in its initial position and orientation relative to the world while the user is looking at it from different viewpoints.

The system to determine the pose of the device is called **headpose**. It works reliably in most indoor environments. Due to the nature of the technology some conditions may work better than others. This document’s goal is to provide guidance to where headpose will work well and which environments might be difficult for the device to work at its best.

## Environments

### Texture

The headpose system relies on recognizing and tracking so called features in the environment. Features are salient points such as corners, intersections of lines, and specks. Those features act as landmarks that can be recognized from different viewpoints. The more such features are visible and the more they are scattered, the better the headpose accuracy and robustness will be. Such environments are referred to as texture-rich environments. Although the device is designed to also track in relatively low texture environments, the more texture, the more accurate and robust the experience.

#### Ideal texture

Different kinds of objects in the scene. The more clutter, the better.

- Type: Anything that is not uniform and that is static in the room. Examples:
  - Pictures, posters, logos, signs, text, etc.
  - Furniture, interior
  - Smaller installed (static) electronics like sensors, light switches, badge readers
  - Machinery that is mostly static
- Distribution: As distributed in the room as possible. Ideally the cameras can see features in every part of the room.
- Size: Much less important than distribution. Object size can be between 2 cm and 2 m.
- Distance: Texture needs to be close to the device, in between 1-4m.

#### Challenging environments

- Environments with large uniform surfaces should be avoided. E.g. room with only uniform walls.
- Problems might also arise in the presence of many similar features, which may be confused with each other. This can be caused by, e.g. observing a repetitive structure on the ceiling without any other salient points in the field of view of the device.
- Texture only far away (>4m). E.g. looking out the window.
- Many moving objects like
  - Height adjustable tables
  - Non-static chairs
  - Screens with changing content or video

#### Recommendation

- Users can hang posters or signs on the walls, add plants or other feature-rich objects to the environment to improve tracking.
- If it is not possible to alter the environment, users should ensure that a portion of the environment with enough features is visible to the device’s cameras at all times.

#### Good conditions

<table>
    <tr>
        <td> <img src="/img/headpose/f.jpeg" alt = "Office interior with many objects"/> </td>
        <td> <img src="/img/headpose/e.jpeg" alt = "Home interior with many objects"/> </td>
    </tr>
</table>

#### Uniform Surfaces

<table>
    <tr>
        <td> <img src="/img/headpose/d.jpeg" alt = "Smooth floor variation"/> </td>
        <td> <img src="/img/headpose/c.jpeg" alt = "Smooth floor variation"/> </td>
    </tr>
</table>

#### Repetitive Textures

<table>
    <tr>
        <td> <img src="/img/headpose/b.jpeg" alt = "Tennis net pattern"/> </td>
        <td> <img src="/img/headpose/a.jpeg" alt = "Vent pattern"/> </td>
    </tr>
</table>

### Light

Headpose is working in a large variety of light conditions and should perform well in most scenarios. As a general rule of thumb the following can be followed: The more light the better.

#### Ideal conditions

- Artificial uniform indoor illumination >50 lux

#### Challenging conditions

- Low light scenarios with <10 lux. Reduced performance leading to tracking loss and higher variations of the pose can be observed in very low light conditions. Headpose will then not be able to handle fast motions as well and possibly not be able to recover from tracking lost events.
- Very strong brightness differences, e.g. single very bright spot lights.
- Changing Light: Massive lighting changes such as turning ceiling lighting on or off can pose challenges to headpose and should be avoided. Headpose is more robust against incremental lighting changes.

### Scene Dynamics

The environment (“scene”) consists of static and dynamic parts. Moving people, objects (e.g. doors), or texture (e.g. content on computer/tv screens) can cause tracking instabilities if they occupy a prominent portion of the field of view of the device. The negative impact of the dynamic objects on the tracking quality will grow stronger if more of the device’s field of view is covered by them (especially in low-texture environments such as corridors).

#### Ideal conditions

- The best tracking performance can be achieved in completely static environments with rich texture. In environments with dynamic content, tracking performance can be improved by enhancing the environment with static objects, preferably with a lot of texture (posters on the wall, plants, …), and keeping static content in the field of view as much as possible.

#### Challenging conditions

- Crowded places can be especially challenging due to the amount of moving people. When navigating through the crowd, tracking quality can be improved by focusing on static parts in the environment (“looking above the people”)  instead of focusing directly on the crowd, such that the complete field of view of the device is covered by moving people.
- Walking through doors can be another challenging scenario, especially in otherwise low-textured surroundings (see image). Looking away from the door (preferably onto an area with texture) while opening it will help to maintain the tracking quality. Also removing texture from the moving parts (e.g. a poster from the moving door) can improve the experience.

Challenging door scenario with little texture on the static parts of the scene.

<Image url= {require("/img/headpose/g.jpeg")} >White door in white hallway</Image>

### Specular Reflections

When the cameras capture reflective surfaces such as shiny surfaces or floors, glass walls or mirrors, those areas may look like the device is moving in a different direction than it actually is. Depending on the size of those areas and the rest of the environment, this can be a problem for tracking. Try to avoid areas with large reflective surfaces, or try to cover those surfaces at least partially.

#### Ideal conditions

- No reflective surfaces present. The fewer specular reflections present, the better.

#### Challenging conditions

- Large glass walls taking up a big part of the field of view of the cameras on the headset
- Large mirrors taking up a big part of the field of view of the cameras on the headset

|  Glass Walls | Mirrors |
| ----------- | ----------- |
| <Image url= {require("/img/headpose/h.jpeg")} >Glass wall in office conference room</Image>| <Image url= {require("/img/headpose/i.jpeg")} >Bathroom mirror</Image>|

## Motions and Device Handling

### Motion Speeds and Device Handling

The device is designed to support all kinds of user motions. Very fast motions might be challenging and might reduce the performance.

#### Ideal conditions

- A user walking and looking around without sudden fast motions.

#### Challenging conditions

- Users shaking their heads rapidly.
- Using the device very close to a wall. This might cause the cameras to lose visibility to the room and it might result in degraded performance or tracking loss.
- Holding the device with one hand while using it. This often causes one or more cameras to be covered by the hand and will result in degraded performance or tracking loss.

<Image url= {require("/img/headpose/j.jpeg")} >Someone holding ML2 with fingers covering the side cameras</Image>

## Outdoor Conditions

Outdoor conditions are currently not officially supported or tested by Magic Leap. However, this does not mean that it cannot work in such scenarios. The same recommendations as mentioned in the Environment section apply. Due to that the following general notes can be mentioned.

### Scenarios Likely to Work

- Structured outdoor conditions with good texture, e.g. environments with structured floors, near objects or textured walls

### Difficulties likely to occur

- Nature scenarios with a lot of vegetation, e.g. a forest with leaves moved by wind or long grass
- Wide open spaces
- Very crowded places
- Heavy weather

Magic Leap is continuously improving the capabilities of its products and might officially support certain outdoor scenarios with software updates in the future.

## Moving Platforms

Moving platforms are challenging due to the fact that the IMU measurements are not in agreement with what cameras see. This is very similar to the nausea that humans experience when reading a book in a moving car. Currently Magic Leap does not support moving platforms. Magic Leap is continuously improving the capabilities of its products and might officially support certain moving platform scenarios with software updates in the future.

The following are examples of moving platforms:

- Elevators
- Cars
- Ships / vessels
- Airplanes

## Problem Handling

### Headpose Lost

Under conditions of low light/insufficient texture the device is not able to continue to track its environment (see earlier section on descriptions of commonly encountered scenarios). As a result the user will see the digital content “head-locked”, meaning that the content follows the head movement and is not locked to the environment.

The device attempts to relocate itself from this lost state.  This attempted relocalization makes use of the map that was being created as the device was tracking the environment. To help the device relocate (and regain tracking when the tracking is lost) it needs to see a scene in the environment that was tracked earlier. The device is usually able to regain tracking within 500 ms to 1 sec in most usual cases.

Following are the scenarios most likely to cause the tracking to be lost

- Low light (usually less than 5 lumens)
- Insufficient texture in the environment. Eg. in corridors or when the user is very near the walls.
- Dynamic objects covering the majority of the device's tracking camera view. Eg. In very crowded spaces.
- Very fast motions. General human walking to brisk walking is fine, however running might cause the tracking to be lost more often.

#### Recommendation

- Go back to a place where tracking used to work prior to losing track and look around there. In most cases tracking can then continue.

### Digital Content Shifted

There are mainly two types of content shift with different root causes:

1. Small shift of the virtual content when walking around the content in relatively close distance (a few meters at most), but from each viewing position that is revisited, the content appears repeatedly at the same location. This is currently a known limitation of the system. To mitigate this issue, try placing the virtual content when you are at the place where you want to interact with the virtual content.
2. Shift of the virtual content when walking further away from the content, and returning back to the original position. If the content is stuck at a shifted position in this case, the map internally built by the device may be damaged; in this case, try a forced relocation by covering all the 3 cameras for a few seconds until the device loses track. If the problem persists after relocation, reset the map completely by covering the cameras for at least 15 seconds; however, note that this will require placing the virtual content again.

### Digital Content Flying Away

Under challenging scenarios (low light, highly-dynamic scenes) or when performing certain actions (opening of doors, walking on areas with reflective surfaces), tracking might become unstable. In some rare cases, the virtual content might “fly-away”, resulting in “headpose lost”. The device attempts to relocate itself from this lost state.
This attempted relocalization makes use of the map that was being created as the device was tracking the environment. To help the device relocate (and regain tracking when the tracking is lost) it needs to see a scene in the environment that was tracked earlier.

### Digital Content Appears Tilted

In order to correctly align the digital content with the world, headpose needs some motion in order to accurately estimate the alignment. The best practice is to move the device for 0.5m / 20in after headpose initialization, to make sure the alignment can be computed accurately.
