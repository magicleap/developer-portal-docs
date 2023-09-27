---
title: Stabilization Overview
description: Learn how make content appear more stable.
sidebar_position: 0
date: 12/08/2022
tags: [Unity, Camera, Stabilization]
keywords: [Unity,Focus,Distance,Stereo Convergence, Stabilization, Drift]
---


This article provides guidelines on improving content registration in the world. Content registration commonly referred to as pixel stick is important for a good experience. There are several things you should consider. In a more dynamic environnement it's very important you follow these guidelines.

The Magic Leap 2 offers developers precise control over stabilization. A distance is set by the application and objects nearest to that distance will appear most stable part of the scene. While further objects will be less stable.

## Best Practices

If you have only simple content like an image or video, set the distance to match the object that is displayed.

- If there are three small spheres, set the stabilization depth to "cut" though the centers of all the spheres that are currently in the user's view.
- If your scene has content at different depths, if possible set the distance to the object that is in focus. This can be done using eye tracking or a ray-cast from the camera. If a focus point cannot be determine set the focus distance to the furthest object or the average depth of the objects in view, depending on the delta between near and far objects.
- Make sure to adjust the stabilization point every frame to coincide with the content the user is looking at.

Things to Avoid The stabilization plane is a great tool to achieve stable content, but can cause the image to appear unstable when used incorrectly.

- Don't let set the stabilization depth to cut through the user

## Magic Leap Camera Component

Developers should add the Magic Leap Camera component to the Main camera to control the focus distance. This component allows developers to specify a target transform to drive the focus distance defined as a stereo convergence point.

## Gaze Based Focus Point

The focus point can be derived from the user's gaze. To make the implementation easy, we created a unity package that uses a [Physics RayCast](https://docs.unity3d.com/ScriptReference/Physics.Raycast.html) to detect which object the user is looking at. Note, this package will not take into account canvases that do not have a collider.

### Configuring the asset

1. [Download the Unity Package](pathname:///unity-packages/StereoConvergenceDetector_v1.1.0.unitypackage)
2. Import the Unity Package into your project ( **Assets > Import New Package > Custom Package...** )
3. One imported, navigate to the *Assets/StereoConvergenceDetector* folder and drag the Stereo Convergence Detector prefab into your scene.
4. Enable the Eye Tracking permission in the project settings

### Additional Options

This StereoConvergenceDetector has several options of determining focus distance:

- Using a the eye fixation point to target the [SphereCast](https://docs.unity3d.com/ScriptReference/Physics.SphereCast.html)
- Using head-pose and sphere casting down camera forward
- Using eye fixation point directly (which can be shaky when eyes are not calibrated).
  
The default option works best as long as your objects contain colliders. The component also allows you to debug the ray-cast and hit point to help troubleshoot your application.

## Custom Focus Point

Developers can also adjust the stabilization distance using a custom calculation by adjusting the position of `StereoConvergencePoint` target. For example, you can set the point to match the camera's far clipping plane.

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR.MagicLeap.Rendering;
using UnityEngine.XR.MagicLeap;

public class CustomStereoConvergencePointDistance : MonoBehaviour
{
    public MagicLeapCamera MagicLeapCamera;
    public Transform ConvergencePoint

    void Update()
    {
        Vector3 rayOrigin = MagicLeapCamera.transform.position;
        Vector3 rayDirection = MagicLeapCamera.transform.forward;
        Ray ray = new Ray(rayOrigin, rayDirection);
        Vector3 focusPoint = ray.GetPoint(RenderingSettings.minNearClipDistance);
        MagicLeapCamera.StereoConvergencePoint = ConvergencePoint;
    }
}
```

## Next Steps

import Link from '@docusaurus/Link';

<h3><Link to="/docs/guides/best-practices/improve-visual-stability"> Improve Content Stability Overview</Link> </h3>

Learn more about how Magic Leap's focus distance improves the appearance of content stability.

