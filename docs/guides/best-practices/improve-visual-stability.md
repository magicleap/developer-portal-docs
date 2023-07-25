---
title: Improve Visual Stability
sidebar_position: 9
date: 08/16/2022
tags: [Stability, Focus Distance, Stereo Convergence, Display, Time-warp]
keywords: [Stability, Focus Distance, Stereo Convergence, Display, Time-warp]
---

# Improve Visual Stability

Visual stability refers to how well the content appears to be anchored to the real world when moving your device. Developers can improve how well their content appears stable by setting Magic Leap 2's Focus Distance(Native)/Stereo Convergence (Unity))

## Overview

For the ML2 Graphics API, `MLGraphicsFrameParamsEx` defines the frame parameters that are to be specified for the next rendered frame to define its characteristics. These next rendered frame characteristics in `MLGraphicsFrameParamsEx` are then supplied to `MLGraphicsBeginFrameEx()`.

Among these frame characteristics, we have focus distance. Focus distance is the distance, in meters, to a defined virtual plane for the client content. Focus distance should be calculated as a positive distance from the Headset to the chosen virtual plane. Mathematically speaking, choose a point on this plane (usually an object of interest), then build a vector from the camera to the point. Then, use the dot product between the newly obtained vector and the camera’s forward vector. This will give the projected distance to the chosen plane and this is the focus distance to be passed in.

This frame parameter, along with near/far clipping planes, is an important concept for advanced users trying to maximize world lock experience both on the display as well as on the ML mixed reality capture. World lock experience is also known as pixel stick quality.

## Problem

This MLGraphicsFrameParamsEx structure must be initialized by calling `MLGraphicsFrameParamsExInit()`  before use. The default values in this function are set as a base reference. API users are to define these values according to their application to achieve optimal pixel stick performance. Depending on the situation, the pixel stick experience can be improved immensely if the API user customizes both the focus distance and the near/far clipping plane to fit their specific application rather than using static default values.

## Near/Far Clip Plane Recommendation

Always try to set the far clip as close to the camera as possible in a way that encompasses all of your rendered scenes. In AR, rarely would a user need to render virtual content that is farther than around 10 meters. Always try to keep a tight near and far clip distance. Since near and far clip distances are frame parameters, the most optimal solution is to provide dynamic near and far clip distances that adapt to the current scene (tightly bounding it).

Below is an illustration of the most common pitfall where a developer doesn’t change the default far and near clipping planes. In this case, the far clipping plane is set at 1000 meters and therefore, not able to get the best pixel stick.

<Image url= {require("/img/focus-distance/focus_distance_001.png")} ></Image>

If in this scenario the farthest object was 10 meters from the viewer, it would be better to set the far clipping plane at 10 meters as shown below.

<Image url= {require("/img/focus-distance/focus_distance_002.png")} ></Image>

That was better, but the most ideal situation would be to provide tight clipping planes if the bounding box for all objects within FOV (field of view) can be quickly calculated. This is depicted in the image below.

<Image url= {require("/img/focus-distance/focus_distance_003.png")} ></Image>

## Focus Distance Recommendation

There is a very common case where calculating the optimal focus distance parameter is trivial. This is where there is only one virtual object within the FOV. As illustrated below, setting the focus distance plane to a location that approximately matches the position of the virtual object will achieve the most stable pixel stick.

<Image url= {require("/img/focus-distance/focus_distance_004.png")} ></Image>

The more challenging scenarios arise when there are multiple virtual objects within the FOV. If no other information is available, the recommendation is to set the focus distance plane to match the location of the farthest object. If the far clip is ideal (tight), the focus distance can be set equal to the far clip, as shown in the illustration below.

<Image url= {require("/img/focus-distance/focus_distance_005.png")} ></Image>

If more information is available such as a virtual object performing an action, it’s recommended to set the focus distance plane between the action object and the far clip plane, preferably by favoring stabilization of far contents over near content. This is illustrated below.

<Image url= {require("/img/focus-distance/focus_distance_006.png")} ></Image>

Finally, if additional information is available and it increases the confidence of what the user focuses on, the recommendation is to set the focus distance plane to match position of the action object. Examples of this additional information are: controller’s laser pointer interactions, eye gaze vectors, hand tracking selection, etc.

<Image url= {require("/img/focus-distance/focus_distance_007.png")} ></Image>

## Common Pitfalls

The following are some of the common pitfalls to avoid in order to improve pixel stick performance:


1) Not handling the trivial case correctly because of not being aware of focus distance. This is very common in Unity apps. Fixing this should be straightforward.

<Image url= {require("/img/focus-distance/focus_distance_008.png")} ></Image>

1) Setting the focus distance to a static large value. This is also a common problem for Unity apps that never set a focus distance. It results in bad pixel stick quality for content that is very close to the viewer.

<Image url= {require("/img/focus-distance/focus_distance_009.png")} ></Image>

1) Setting the focus distance to the closest object within the FOV. This makes for good pixel stick performance for close objects— but bad pixel stick performance for objects that are far away. When multiple objects are in view, the pixel stick effect (on far content) of choosing a focus distance plane based on near content is worse than the effect (on near content) of placing a focus distance plane based on far content. This is why the recommendation prefers planes on far content unless you have additional information.

<Image url= {require("/img/focus-distance/focus_distance_010.png")} ></Image>

Please consult the recommendations section above to understand how to avoid falling into these pitfalls.

## Next Steps

import Link from '@docusaurus/Link';

<h3><Link to="/docs/guides/unity/display/unity-stabilization-overview"> Improve Content Stability Unity</Link> </h3>

Learn how to use the Magic Leap Camera component and it's focus distance to improve visual stability.
