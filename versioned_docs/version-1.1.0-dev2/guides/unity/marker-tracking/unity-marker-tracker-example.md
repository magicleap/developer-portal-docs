---
id: marker-tracker-example
title: Marker Tracker Example
sidebar_position: 1
date: 6/27/2022
tags: [Unity, Perception, Marker, Tracking, ArUco, QR Codes, Fiducial, Example]
keywords: [Unity, Perception, Marker, Tracking, ArUco, QR Codes, Fiducial, Example]
---

This section includes an example of detecting Fiducial Markers on the Magic Leap 2 headset.

## Example

This script detects markers and creates a cube at each of the target's location. The script does not handle runtime changes to the Marker Tracker settings.

:::caution
This feature requires the `MARKER_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

```csharp showLineNumbers
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class MarkerTrackerExample : MonoBehaviour
{
    public float QrCodeMarkerSize = 0.1f;
    public float ArucoMarkerSize = 0.1f;
    public MLMarkerTracker.MarkerType Type = MLMarkerTracker.MarkerType.QR;
    public MLMarkerTracker.ArucoDictionaryName ArucoDict = MLMarkerTracker.ArucoDictionaryName.DICT_5X5_100;
    private Dictionary<string, GameObject> _markers = new Dictionary<string, GameObject>();
    private ASCIIEncoding _asciiEncoder = new System.Text.ASCIIEncoding();


#if UNITY_ANDROID
    private void OnEnable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFound += OnTrackerResultsFound;
    }

    private void Start()
    {
        // A value of 0 uses the world cameras and 1 uses the RGB camera to scan for markers
        // by default markers will be tracked with the world cameras.
        int arucoCamera = 0;
        MLMarkerTracker.Settings trackerSettings = MLMarkerTracker.Settings.Create(
            true, Type, QrCodeMarkerSize, ArucoDict, ArucoMarkerSize, arucoCamera);
        _ = MLMarkerTracker.SetSettingsAsync(trackerSettings);
    }

    private void OnDisable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFound -= OnTrackerResultsFound;
    }

    private void OnTrackerResultsFound(MLMarkerTracker.MarkerData data)
    {
        string id = "";
        float markerSize = .01f;

        switch (data.Type)
        {
            case MLMarkerTracker.MarkerType.Aruco_April:
                id = data.ArucoData.Id.ToString();
                markerSize = ArucoMarkerSize;
                break;

            case MLMarkerTracker.MarkerType.QR:
                id = _asciiEncoder.GetString(data.BinaryData.Data, 0, data.BinaryData.Data.Length);
                markerSize = QrCodeMarkerSize;
                break;
            case MLMarkerTracker.MarkerType.EAN_13:
            case MLMarkerTracker.MarkerType.UPC_A:
                id = _asciiEncoder.GetString(data.BinaryData.Data, 0, data.BinaryData.Data.Length);
                Debug.Log("No pose is given for marker type " + data.Type + " value is " + data.BinaryData.Data);
                break;
        }

        if (!string.IsNullOrEmpty(id))
        {
            if (_markers.ContainsKey(id))
            {
                GameObject marker = _markers[id];
                marker.transform.position = data.Pose.position;
                marker.transform.rotation = data.Pose.rotation;
            }
            else
            {
                //Create a primitive cube
                GameObject marker = GameObject.CreatePrimitive(PrimitiveType.Cube);
                //Render the cube with the default URP shader
                marker.AddComponent<Renderer>();
                marker.GetComponent<Renderer>().material = new Material(Shader.Find("Universal Render Pipeline/Lit"));

                marker.transform.localScale = new Vector3(markerSize, markerSize, markerSize);
                _markers.Add(id, marker);
            }
        }
    }
#endif
}

```

## See also

- [`MLMarkerTracker`](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md)
  - API to scan markers and obtain additional data such as 6DOF poses.
- [`MLMarkerTracker.ArucoData`](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.ArucoData.md)
  - API that contains the data that belongs to Aruco Markers.
- [`MLMarkerTracker.Settings`](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md)
  - Marker Tracker Settings API that contains information such as what type of markers, their sizes, and if the Marker tracker is enabled.
