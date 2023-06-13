---
id: spatial-anchors-example
title: Spatial Anchors Examples
description: Contains code that can be used as a reference or demo Magic Leap 2's Spatial Anchors functionality.
sidebar_position: 4
date: 2/24/2022
tags: [Unity, Perception, Anchors, Persistence]
keywords: [Unity, Perception, Anchors, Persistence]
---

This section contains code that can be used to demo Magic Leap 2's Spatial Anchors functionality. It can also be used as a reference when creating Applications that take advantage of the Anchors API.

## Spatial Anchor Visualizer Minimal Example

This example script allows users that are localized into a map to do the following:

- Visualize existing anchors
- Create anchors by pressing the trigger
- Delete them by pressing the bumper

:::caution
This feature requires the `SPATIAL_ANCHORS` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

```csharp showLineNumbers
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.XR.MagicLeap;

public class AnchorExampleScript : MonoBehaviour
{
    //How many meters from the origin should the anchor request search?
    public float SearchRadius = 10;

    private MagicLeapInputs _magicLeapInputs;
    private MagicLeapInputs.ControllerActions _controllerActions;

#if UNITY_MAGICLEAP || UNITY_ANDROID
    private MLAnchors.Request _mlAnchorsRequest;
    private MLAnchors.Request.Params _anchorRequestParams;
    
    private Dictionary<string, GameObject> _gameObjectsByAnchorId = new Dictionary<string, GameObject>();

    void Start()
    {
        // Initialize controller input events.
        _magicLeapInputs = new MagicLeapInputs();
        _magicLeapInputs.Enable();

        _controllerActions = new MagicLeapInputs.ControllerActions(_magicLeapInputs);
        _controllerActions.Bumper.started += HandleOnBumper;
        _controllerActions.Trigger.started += HandleOnTrigger;

        //Initialize Magic leap Spatial Anchor Requests
        _mlAnchorsRequest = new MLAnchors.Request();

        //Get the user's current Localization Info and debugs it
        MLResult mlResult = MLAnchors.GetLocalizationInfo(out MLAnchors.LocalizationInfo info);
        Debug.Log("Localization Info " + info);
    }

    void Update()
    {
        // Setting Max result or radius to zero means the search will not be constrained.
        Vector3 controllerPosition = _controllerActions.Position.ReadValue<Vector3>();
        _anchorRequestParams = new MLAnchors.Request.Params(controllerPosition, SearchRadius, 0,false);

        // Starts the search using the parameters above.
        MLResult startStatus = _mlAnchorsRequest.Start(_anchorRequestParams);
        if (!startStatus.IsOk)
        {
            Debug.Log("Could not start Request : " + startStatus);
            return;
        }

        // Query the search for anchors.
        MLResult resultStatus = _mlAnchorsRequest.TryGetResult(out MLAnchors.Request.Result result);
        if (!resultStatus.IsOk)
        {
            Debug.Log("Could not get Anchors : " + resultStatus);
            return;
        }

        // Iterate through the anchors found in the search.
        for (int i = 0; i < result.anchors.Length; ++i)
        {
            MLAnchors.Anchor anchor = result.anchors[i];
            string id = anchor.Id;

            // If the anchor was already created, update it's position and rotation.
            if (_gameObjectsByAnchorId.ContainsKey(id))
            {
                GameObject anchorVisual = _gameObjectsByAnchorId[id];
                anchorVisual.transform.position = anchor.Pose.position;
                anchorVisual.transform.rotation = anchor.Pose.rotation;
            }
            else
            {
                // If we located a new anchor, create a cube at it's location and store it in our dictionary.
                GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
                //Render the cube with the default URP shader
                cube.AddComponent<Renderer>();
                cube.GetComponent<Renderer>().material = new Material(Shader.Find("Universal Render Pipeline/Lit"));

                //Scale the cube so it is a reasonable size
                cube.transform.localScale = new Vector3(0.1f, 0.1f, 0.1f);
           
                cube.transform.position = anchor.Pose.position;
                cube.transform.rotation = anchor.Pose.rotation;
                _gameObjectsByAnchorId.Add(id, cube);
            }
        }
    }

    // Delete the closest anchor to the controller when the user presses the bumper.
    private void HandleOnBumper(InputAction.CallbackContext obj)
    {
        // Start the search using the parameters specified in the Update function.
        _mlAnchorsRequest.Start(_anchorRequestParams);
        // Get the search results.
        _mlAnchorsRequest.TryGetResult(out MLAnchors.Request.Result result);
        if (result.anchors.Length > 0)
        {
            // Get the closest anchor.
            var anchor = result.anchors[0];
            //Delete the anchor using the Anchor's ID
            MLAnchors.Anchor.DeleteAnchorWithId(anchor.Id);
            //Delete the gameObject if it exists
            if (_gameObjectsByAnchorId.ContainsKey(anchor.Id))
            {
                GameObject anchorVisual = _gameObjectsByAnchorId[anchor.Id];
                _gameObjectsByAnchorId.Remove(anchor.Id);
                Destroy(anchorVisual);
            }
        }
    }

    //Create a new anchor at the controllers location when the user presses the trigger.
    private void HandleOnTrigger(InputAction.CallbackContext obj)
    {
        // Create a pose from the controller's position and rotation.
        Pose controllerPose = new Pose(_controllerActions.Position.ReadValue<Vector3>(),
            _controllerActions.Rotation.ReadValue<Quaternion>());
        // Create a new anchor at the location of the controller.
        MLAnchors.Anchor.Create(controllerPose, 300, out MLAnchors.Anchor anchor);
        // Publish the anchor to the map after it is created.
        anchor.Publish();
    }
    
    private void OnDestroy()
    {
        _controllerActions.Bumper.started -= HandleOnBumper;
        _controllerActions.Trigger.started -= HandleOnTrigger;
    }
#endif
}
```

## Spatial Anchors Full Example Project

<https://github.com/magicleap/SpatialAnchorsExample>

