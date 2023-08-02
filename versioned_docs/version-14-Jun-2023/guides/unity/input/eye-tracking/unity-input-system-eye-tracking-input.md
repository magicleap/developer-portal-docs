---
id: input-system-eye-tracking
title: Generic Eye Tracking Data
sidebar_position: 1
date: 1/28/2022
tags: [Unity, Eye Tracking, Input, Porting]
keywords: [Unity, Eye Tracking, Input, Porting]
---

# Generic Eye Tracking Data

:::note
If your Application collects, stores, transfers or otherwise uses data off the Magic Leap 2 device that is received via this API, then you must comply with the [Magic Leap 2 Eye Tracking Data Transparency Policy](https://www.magicleap.com/eye-tracking).
:::

Unity Input System can be used to obtain common eye tracking input such as the user's Fixation Point. This section includes a few examples of accessing eye tracking data through the EyesAction class.

See Unity's [UnityEngine.InputSystem.XR.Eyes](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/api/UnityEngine.InputSystem.XR.Eyes.html) API section for information on all the type of data that can be obtained.

:::caution
This features requires the `EYE_TRACKING` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

## Fixation Point Example

The following example shows how to Initialize, access and dispose of eye tracking input data.

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;

public class EyeTrackingExample: MonoBehaviour
{
    // Used to get Magic Leap Inputs.
    private MagicLeapInputs mlInputs;
    // Used to access eyes action data.
    private MagicLeapInputs.EyesActions eyesActions;
      
    // Start is called before the first frame update
    void Start()
    {
        // Initialize Magic Leap Eye Tracking
        InputSubsystem.Extensions.MLEyes.StartTracking();

        // Initialize Magic Leap inputs to capture input data
        mlInputs = new MagicLeapInputs();
        mlInputs.Enable();
        
        // Initialize Eyes Actions using mlInputs
        eyesActions = new MagicLeapInputs.EyesActions(mlInputs);
    }
    
    void Update()
    {
        // Read the current value of the action.
        var eyes = eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>();
        // Now you can access to the eye input values
        Debug.Log(eyes.fixationPoint);
    }
    
    private void OnDestroy()
    {
        mlInputs.Dispose();
    }
}
```

## Gaze Ray Example

The example snippet below can be used to debug a green ray from the user's eyes to the fixation point.

```csharp
    private GameObject fixationPoint;
...
    void Update()
    {
        // Read the current value of the action.
        var eyes = eyesActions.Data.ReadValue<UnityEngine.InputSystem.XR.Eyes>();
        
        //Fixation Gaze Ray
        Vector3 worldPosition = CameraCache.Main.transform.position;
        Vector3 worldRotation = (eyes.fixationPoint - worldPosition).normalized;
        Debug.DrawRay(worldPosition, worldRotation, Color.green);

        //Create a primitive cube to represent the fixation point
        if(fixationPoint == null){
          fixationPoint = GameObject.CreatePrimitive(PrimitiveType.Cube);
          //Render the cube with the default URP shader
          fixationPoint.AddComponent<Renderer>();
          fixationPoint.GetComponent<Renderer>().material = new Material(Shader.Find("Universal Render Pipeline/Lit"));
          fixationPoint.transform.localScale = new Vector3(0.025f,0.025f,0.025f);
        }

        // Position the GameObject to the fixation point
        fixationPoint.transform.position = eyes.fixationPoint;

     }
 ...
```

## See also

- [`UnityEngine.InputSystem.XR.Eyes`](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/api/UnityEngine.InputSystem.XR.Eyes.html)
  - API reference documentation of Unity's Eyes struct.
- [`Unity​Engine.​Input​System.InputAction`](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/api/UnityEngine.InputSystem.InputAction.html)
  - API reference documentation of the InputAction class.
- [Actions- Unity Reference](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.3/manual/Actions.html)
  - API overview of Unity Actions from the Unity Input system.

