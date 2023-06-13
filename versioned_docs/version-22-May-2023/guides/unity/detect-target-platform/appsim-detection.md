---
title: App Simulator
sidebar_position: 5
date: 09/07/2022
tags: [Unity, Getting Started]
keywords: [Unity, Getting Started]
---

This document demonstrates how to use the `MagicLeapXrProvider` to check if the application is using the Magic Leap App Simulator.

## Example

The following script debugs `true` if the application is running inside the Magic Leap App Simulator.  

```csharp showLineNumbers
using System.Collections;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class RuntimeDetectionExample : MonoBehaviour
{
    void Start()
    {
       Debug.Log("App Simulator Is Running = " UnityEngine.XR.MagicLeap.MagicLeapXrProvider.IsZIRunning);
    }
}
```

