---
id: unity-planes-classification
title: Plane Classification
description: Learn how the Magic Leap classifies surfaces.
sidebar_position: 1
date: 06/08/2022
tags: [Unity, Perception, Planes, Surfaces,]
keywords: [Unity, Perception, Planes, Surfaces,]
---

When this script is attached to the prefab spawned by AR Foundation's plane manager, it will change the color of the mesh based on the plane's classification.

:::caution
This feature requires the `WORLD_RECONSTRUCTION` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class PlanesExample : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        ARPlane plane = GetComponent<ARPlane>();
        Color color = default;
        switch(this.plane.classification)
        {
            case PlaneClassification.Floor:
                color = Color.green;
                break;
            case PlaneClassification.Ceiling:
                color = Color.blue;
                break;
            case PlaneClassification.Wall:
                color = Color.red;
                break;
        }
        GetComponent<MeshRenderer>().material.color = color;
    }
}
```

