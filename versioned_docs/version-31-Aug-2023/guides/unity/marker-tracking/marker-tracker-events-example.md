---
id: marker-tracker-events-example
title: Marker Tracker Events Example
sidebar_position: 1.5
date: 05/17/2022
tags: [Unity, Perception, Marker, Tracking, ArUco, QR Codes,Fiducial, Example]
keywords: [Unity, Perception, Marker, Tracking, ArUco, QR Codes,Fiducial, Example]
---

The Magic Leap 2's marker tracker API is light weight and can be extended depending on your application's needs. This section provides an example of extending the API to broadcast an event when a marker is found, lost or updated based on the amount of time that has passed since the marker was update.

## Example

:::caution
This feature requires the `MARKER_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

### Tracked Marker

This script is used to keep track of the detected marker and tracking how much time has passed since the marker was updated.

```csharp showLineNumbers
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
/// <summary>
/// Class used to keep track of markers that have already been detected.
/// </summary>
public class TrackedMarker
{
    public uint Id;
    public float LastTrackTime { get; private set; }
    public Vector3 Position { get; private set; }
    public Quaternion Rotation { get; private set; }

    public TrackedMarker(MLMarkerTracker.MarkerData data)
    {
        Id = data.ArucoData.Id;
        UpdateMarker(data);
    }

    public void UpdateMarker(MLMarkerTracker.MarkerData data)
    {
        //You can perform smoothing here
        Position = data.Pose.position;
        Rotation = data.Pose.rotation;

        LastTrackTime = Time.time;
    }
}

```

### Tracking Markers

This script uses the MLMarkerTracker to detect markers, then tracks them and broadcasts the on marker found/updated and lost events.

```csharp showLineNumbers
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
/// <summary>
/// Example of tracking markers and then calling the on marker found/lost/updated events.
/// </summary>
public class MarkerTrackerExample : MonoBehaviour
{
    [Header("ArucoMarkerSettings")]
    public float QrCodeMarkerSize = 0.1f;
    public float ArucoMarkerSize = 0.1f;
    public MLMarkerTracker.MarkerType TrackedMarkerType = MLMarkerTracker.MarkerType.Aruco_April;
    public MLMarkerTracker.ArucoDictionaryName ArucoDict = MLMarkerTracker.ArucoDictionaryName.DICT_5X5_50;
    public MLMarkerTracker.Profile TrackerProfile = MLMarkerTracker.Profile.Default;
    
    [Header("TrackingSettings")] 
    [Tooltip("The amount of time a marker can remain not tracked before being considered as lost.")]
    public float LostTrackingDelay;
    public float UpdateDelay = 1;

    private float _lastTickTime;

    //Used to track mich markers have been detected.
    private Dictionary<uint, TrackedMarker> _trackedMarkerById = new Dictionary<uint, TrackedMarker>();

    //Used to check which markers have lost tracking
    private List<TrackedMarker> _markerToUpdate = new List<TrackedMarker>();

    public static Action<TrackedMarker> OnMarkerFound;
    public static Action<TrackedMarker> OnMarkerUpdated;
    public static Action<TrackedMarker> OnMarkerLost;

    void Update()
    {
        float currentTime = Time.time;
        //Only update the list if needed. Marker Tracking runs slower than the update loop.
        if (currentTime - _lastTickTime < UpdateDelay)
            return;

        for (int i = _markerToUpdate.Count - 1; i >= 0; i--)
        {
            bool isStale = _markerToUpdate[i].LastTrackTime <= currentTime - LostTrackingDelay;
            if (isStale)
            {
                TrackedMarker marker = _markerToUpdate[i];
                _trackedMarkerById.Remove(marker.Id);
                _markerToUpdate.RemoveAt(i);
                OnMarkerLost?.Invoke(marker);
            }
        }
        _lastTickTime = currentTime;
    }

    private void OnEnable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFound += OnTrackerResults;
        StartTracking();
    }

    private void OnDisable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFound -= OnTrackerResults;
        StopTracking();
    }

    private void StartTracking()
    {
        // Unity has it's own value for Enum called Everything and sets it to -1
        MLMarkerTracker.MarkerType MarkerTypes = (int)TrackedMarkerType == -1 ? MLMarkerTracker.MarkerType.All : TrackedMarkerType;
        MLMarkerTracker.TrackerSettings trackerSettings = MLMarkerTracker.TrackerSettings.Create(
            true, TrackedMarkerType, QrCodeMarkerSize, ArucoDict, ArucoMarkerSize, TrackerProfile, default);
        _ = MLMarkerTracker.SetSettingsAsync(trackerSettings);
    }

    private  void StopTracking()
    {
        _ = MLMarkerTracker.StopScanningAsync();
    }

    private void OnTrackerResults(MLMarkerTracker.MarkerData markerData)
    {
        //Switch in case you are tracking multiple types
        switch (markerData.Type)
        {
            case MLMarkerTracker.MarkerType.Aruco_April:
                if (_trackedMarkerById.TryGetValue(markerData.ArucoData.Id, out TrackedMarker marker))
                {
                    marker.UpdateMarker(markerData);
                    OnMarkerUpdated?.Invoke(marker);
                }
                else
                {
                    var newMarker = new TrackedMarker(markerData);
                    //Track the marker
                    _trackedMarkerById.Add(newMarker.Id, newMarker);
                    _markerToUpdate.Add(newMarker);
                    OnMarkerFound?.Invoke(newMarker);
                }
                break;
        }
    }
}

```

### Spawning Visuals

This script  creates a cube at each of the target's location. Based on the events from the previous script.

```csharp showLineNumbers
using System.Collections.Generic;
using UnityEngine;
/// <summary>
/// Example of spawning markers using the MarkerTrackerExample script.
/// </summary>
public class MarkerSpawner : MonoBehaviour
{
    public GameObject Visual;

    private Dictionary<uint, GameObject> _markerById = new Dictionary<uint, GameObject>();
    // Start is called before the first frame update
    void Start()
    {
        MarkerTrackerExample.OnMarkerLost += MarkerLost;
        MarkerTrackerExample.OnMarkerFound += MarkerFound;
        MarkerTrackerExample.OnMarkerUpdated += MarkerUpdated;
    }

    private void MarkerUpdated(TrackedMarker trackedMarker)
    {
        GameObject marker = _markerById[trackedMarker.Id];
        marker.transform.position = trackedMarker.Position;
        marker.transform.rotation = trackedMarker.Rotation;
    }

    private void MarkerFound(TrackedMarker trackedMarker)
    {
        GameObject marker = Instantiate(Visual);
        _markerById.Add(trackedMarker.Id, marker);
        marker.transform.position = trackedMarker.Position;
        marker.transform.rotation = trackedMarker.Rotation;
    }

    private void MarkerLost(TrackedMarker trackedMarker)
    {
        GameObject marker = MarkerById[trackedMarker.Id];
        _markerById.Remove(trackedMarker.Id);
        Destroy(marker);
    }
}

```

## See also

- [`MLMarkerTracker`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md)
  - API to scan markers and obtain additional data such as 6DOF poses.
- [`MLMarkerTracker.ArucoData`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.ArucoData.md)
  - API that contains the data that belongs to Aruco Markers.
- [`MLMarkerTracker.Settings`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md)
  - Marker Tracker Settings API that contains information such as what type of markers, their sizes, and if the Marker tracker is enabled.

