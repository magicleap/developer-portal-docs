---
id: spatial-anchors-callbacks
title: Spatial Anchors Callbacks
description: Learn how to get notified when spatial anchors are created, added or removed.
sidebar_position: 3
date: 2/24/2022
tags: [Unity, Perception, Anchors, Persistence]
keywords: [Unity, Perception, Anchors, Persistence]
---

Depending on your application's requirement, you may want to track when anchors are created, updated, or removed. This can be done using the `MLAnchors.Request.TryGetResult()` API to query when a change was made.

Some applications may query Spatial Anchors once while others may want to perform the search more frequently.

## Example

The example below shows a simple implementation of using the MLAnchors `TryGetResult()` API to call Unity Events when spatial anchors are modified.

:::caution
This feature requires the `SPATIAL_ANCHORS` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

```csharp showLineNumbers
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class SpatialAnchorCallbacksExample : MonoBehaviour
{
    [Tooltip("How often, in seconds, to search for anchors.")]
    public float SearchInterval = 10;

#if UNITY_MAGICLEAP || UNITY_ANDROID

    public Action<MLAnchors.Anchor> OnAnchorAdded;
    public Action<MLAnchors.Anchor> OnAnchorUpdated;
    public Action<MLAnchors.Anchor> OnAnchorRemoved;

    private MLAnchors.Request _mlAnchorsRequest;
    private MLAnchors.Request.Params _anchorRequestParams;
    //The timestamp when anchors were last searched for
    private float _lastTick;

    //Cached list of the anchors anchor values that were tracked during the last search.
    private readonly List<MLAnchors.Anchor> _trackedAnchorValues = new List<MLAnchors.Anchor>();
    //Cached list of the anchors that are returned via MLAnchors.Request.TryGetResult()
    private readonly HashSet<string> _resultAnchorIds = new HashSet<string>();

    void Start()
    {
        // Initialize Magic leap Spatial Anchor Requests.
        _mlAnchorsRequest = new MLAnchors.Request();
        // Setting Max result or radius to zero means the search will not be constrained.
        _anchorRequestParams = new MLAnchors.Request.Params(Vector3.zero, 0, 0, false);
    }

    void Update()
    {
        // Only search when the update time lapsed 
        if(Time.time- _lastTick < SearchInterval)
            return;
        _lastTick = Time.time;
        _resultAnchorIds.Clear();

        // Starts the search using the parameters above.
        MLResult startStatus = _mlAnchorsRequest.Start(_anchorRequestParams);
        // Query the search for anchors.
        MLResult resultStatus = _mlAnchorsRequest.TryGetResult(out MLAnchors.Request.Result result);

        // Iterate through the anchors found in the search and add it to the current anchor list.
        for (int i = 0; i < result.anchors.Length; ++i)
        {
            MLAnchors.Anchor anchor = result.anchors[i];
            string anchorId = anchor.Id;
            // Track the found anchor's id in our resultAnchorId list.
            _resultAnchorIds.Add(anchorId);
            //Check if the anchor is already tracked.
            int indexOf = _trackedAnchorValues.FindIndex(x => x.Id == anchorId);
            if (indexOf <= 0)
            {
                // If the anchor is new call the OnCreate event and add it to our list.
                _trackedAnchorValues.Add(anchor);
                OnAnchorAdded?.Invoke(anchor);
            }
            else 
            {
                // Update the value of the tracked anchor.
                _trackedAnchorValues[indexOf] = anchor;
                OnAnchorUpdated?.Invoke(anchor);
            }
        }

        //Iterate through the retrieved anchors and update the tracked anchors list
        for (int i = _trackedAnchorValues.Count - 1; i >= 0; i--)
        {
            var trackedAnchor = _trackedAnchorValues[i];
            if (!_resultAnchorIds.Contains(trackedAnchor.Id))
            {
                _trackedAnchorValues.Remove(trackedAnchor);
                OnAnchorRemoved?.Invoke(trackedAnchor);
            }
        }
        
    }
#endif
}
```

