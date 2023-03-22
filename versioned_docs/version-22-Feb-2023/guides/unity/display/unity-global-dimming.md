---
id: unity-global-dimming
title: Global Dimming
description: Learn how to use the Magic Leap 2's unique global dimming technology. 
sidebar_position: 0
date: 06/08/2022
tags: [Unity, Dimmer, Dimming, Global, Dynamic]
keywords: [Unity, Dimmer, Dimming, Global, Dynamic]
---

Global Dimming is a baseline tint applied over the entire display. You should think of it as a single ‘darkness’ (opacity) value, though an advanced developer is able to apply effects such as a gradient or vignette.

 `public static MLResult SetValue(float dimmerValue)`

Sets the GlobalDimmer value between 0 and 1.

**Params:**

- **dimmerValue**: **Float**. Will be clamped between **0** and **1.**

## Example Code

```csharp showLineNumbers
using System.Collections;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
 
public class GlobalDimmerTest : MonoBehaviour
{
    [SerializeField]
    private float waitTimer = 5.0f;
    [SerializeField]
    private float fadeTimer = 2.0f;
 
    private float dimmerDelta = 0.1f;
    private const float FrameRate = 60.0f;
    void Start()
    {
        dimmerDelta = 1.0f / (FrameRate * fadeTimer);
        Debug.Log("Enabling global dimmer");
        StartCoroutine(UpdateGlobalDimmer());
    }
 
    IEnumerator UpdateGlobalDimmer()
    {
        yield return new WaitForSeconds(fadeTimer);
 
        float dimmer = 0.0f;
        while (true)
        {
            // fade in
            for (dimmer = 0.0f; dimmer <= 1.0f; dimmer += dimmerDelta)
            {
                MLGlobalDimmer.SetValue(dimmer);
                yield return new WaitForEndOfFrame();
            }
 
            yield return new WaitForSeconds(waitTimer);
 
            // fade out
            for (dimmer = 1.0f; dimmer >= 0.0f; dimmer -= dimmerDelta)
            {
                MLGlobalDimmer.SetValue(dimmer);
                yield return new WaitForEndOfFrame();
            }
 
            yield return new WaitForSeconds(waitTimer);
        }
    }
}
```

