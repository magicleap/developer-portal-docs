---
id: controller-gestures
title: Controller Gesture Events
sidebar_position: 0.5
date: 1/28/2022
tags: [UnityController, Input]
keywords: [UnityController, Input]
---

This section demonstrates how to use Magic Leap's Gesture subsystem to  receive the input events that are triggered when the user performs a gesture on the controllers touch pad.


## Example

The example script below subscribes to the Magic Leap controller's input events, and debugs the input values to the Debug Log.

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.InputSystem;

public class ExampleClass : MonoBehaviour
{
    private GestureSubsystem.Extensions.TouchpadGestureEvent currentGesture;

    void Start()
    {
        #if UNITY_MAGICLEAP || UNITY_ANDROID
        // Start the Unity gesture subsystem.
        MLDevice.RegisterGestureSubsystem();
        if (MLDevice.GestureSubsystemComponent != null)
        {
            MLDevice.GestureSubsystemComponent.onTouchpadGestureChanged += this.HandleOnTouchpadGestureChanged;
        }
        #endif
    }

    private void HandleOnTouchpadGestureChanged(GestureSubsystem.Extensions.TouchpadGestureEvent gestureEvent)
    {
        currentGesture = gestureEvent;
        Debug.Log($"Gesture: {currentGesture}");
    }

    // Handles the disposing all of the input events.
    void OnDestroy()
    {
       #if UNITY_MAGICLEAP || UNITY_ANDROID
       // Unsubscribe from gesture event and disable gesture subsystem
        if (MLDevice.GestureSubsystemComponent != null)
        {
            MLDevice.GestureSubsystemComponent.onTouchpadGestureChanged -= this.HandleOnTouchpadGestureChanged;
            MLDevice.UnregisterGestureSubsystem();
        }
        #endif
    }
}
```

## See also

- [`TouchpadGestureEvent`](/docs/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/Extensions/UnityEngine.XR.MagicLeap.GestureSubsystem.Extensions.TouchpadGestureEvent/)
  - The event data related to a Magic Leap Touchpad gesture.
  
