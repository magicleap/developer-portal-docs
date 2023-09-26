---
id: marker-tracker-example
title: Marker Tracker Example
sidebar_position: 1
date: 9/18/2023
tags: [Unity, Perception, Marker, Tracking, ArUco, QR Codes, Fiducial, Example]
keywords: [Unity, Perception, Marker, Tracking, ArUco, QR Codes, Fiducial, Example]
---

This section includes an example of detecting Fiducial Markers on the Magic Leap 2 headset.

## Simple Example

This script detects markers and creates a cube at each of the target's location. The script does not handle runtime changes to the Marker Tracker settings.

:::caution
This feature requires the `MARKER_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

```csharp showLineNumbers
using System.Collections.Generic;
using System.Text;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class MarkerTrackerExample : MonoBehaviour
{
    public float QrCodeMarkerSize = 0.1f;
    public float ArucoMarkerSize = 0.1f;
    public MLMarkerTracker.MarkerType Type = MLMarkerTracker.MarkerType.QR;
    public MLMarkerTracker.ArucoDictionaryName ArucoDict = MLMarkerTracker.ArucoDictionaryName.DICT_5X5_100;
    public MLMarkerTracker.Profile Profile = MLMarkerTracker.Profile.Default;

    private Dictionary<string, GameObject> _markers = new Dictionary<string, GameObject>();
    private ASCIIEncoding _asciiEncoder = new System.Text.ASCIIEncoding();


#if UNITY_ANDROID
    private void OnEnable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFound += OnTrackerResultsFound;
    }

    private void Start()
    {
        MLMarkerTracker.TrackerSettings trackerSettings = MLMarkerTracker.TrackerSettings.Create(
            true, Type, QrCodeMarkerSize, ArucoDict, ArucoMarkerSize, Profile);
        _ = MLMarkerTracker.SetSettingsAsync(trackerSettings);
    }

    private void OnDisable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFound -= OnTrackerResultsFound;
        _ = MLMarkerTracker.StopScanningAsync();
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
                marker.transform.position = data.Pose.position;
                marker.transform.rotation = data.Pose.rotation;
                marker.transform.localScale = new Vector3(markerSize, markerSize, markerSize);
                _markers.Add(id, marker);
            }
        }
    }
#endif
}

```

## Custom Profile Example

An example scripts that detects markers using a custom profile.

:::caution 
This feature requires the MARKER_TRACKING permission to be enabled in your project's Manifest Settings. (Edit > Project Settings > Magic Leap > Manifest Settings) 
:::


```csharp
using System.Collections.Generic;
using System.Text;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class MarkerTrackerExample : MonoBehaviour
{
    [Header("Marker Tracker Settings")]
    // QR Code marker size to use (in meters).
    public float QRCodeSize = 0.1f;

    // Aruco marker size to use (in meters).
    public float ArucoMarkerSize = 0.1f;

    // The marker types that are enabled for this scanner. Enable markers by
    // combining any number of <c> MarkerType </c> flags using '|' (bitwise 'or').
    public MLMarkerTracker.MarkerType MarkerTypes = MLMarkerTracker.MarkerType.Aruco_April| MLMarkerTracker.MarkerType.QR;

    // Aruco dictionary to use.
    public MLMarkerTracker.ArucoDictionaryName ArucoDicitonary = MLMarkerTracker.ArucoDictionaryName.DICT_5X5_100;

    // Represents the different tracker profiles used to optimize marker tracking in difference use cases.
    public MLMarkerTracker.Profile TrackerProfile = MLMarkerTracker.Profile.Custom;

    [Header("Marker Tracker Custom Profile")]

    // A hint to the back-end the max frames per second hat should be analyzed.
    public MLMarkerTracker.FPSHint FPSHint;

    // A hint to the back-end the resolution that should be used.
    public MLMarkerTracker.ResolutionHint ResolutionHint;

    // A hint to the back-end for the cameras that should be used.
    public MLMarkerTracker.CameraHint CameraHint;

    // In order to improve performance, the detectors don't always run on the full
    // frame.Full frame analysis is however necessary to detect new markers that
    // weren't detected before. Use this option to control how often the detector may
    // detect new markers and its impact on tracking performance.
    public MLMarkerTracker.FullAnalysisIntervalHint FullAnalysisIntervalHint;

    // This option provides control over corner refinement methods and a way to
    // balance detection rate, speed and pose accuracy. Always available and
    // applicable for Aruco and April tags.
    public MLMarkerTracker.CornerRefineMethod CornerRefineMethod;

    // Run refinement step that uses marker edges to generate even more accurate
    // corners, but slow down tracking rate overall by consuming more compute.
    // Aruco/April tags only.
    public bool UseEdgeRefinement;


    private Dictionary<string, GameObject> _markers = new Dictionary<string, GameObject>();
    private ASCIIEncoding _asciiEncoder = new System.Text.ASCIIEncoding();
    private MLMarkerTracker.TrackerSettings _markerSettings;
    //Enable scanning on start?
    private bool _enableMarkerScanning = true;

#if UNITY_ANDROID
    private void OnEnable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFoundArray += OnMLMarkerTrackerResultsFoundArray;
    }

    private void Start()
    {
        // Unity has it's own value for Enum called Everything and sets it to -1
        MarkerTypes = (int)MarkerTypes == -1 ? MLMarkerTracker.MarkerType.All : MarkerTypes;

        // If we are using a custom profile, create the profile before creating the tracker settings
        if (TrackerProfile == MLMarkerTracker.Profile.Custom)
        {
            MLMarkerTracker.TrackerSettings.CustomProfile customProfile = MLMarkerTracker.TrackerSettings.CustomProfile.Create(FPSHint, ResolutionHint, CameraHint, FullAnalysisIntervalHint, CornerRefineMethod, UseEdgeRefinement);
            _markerSettings = MLMarkerTracker.TrackerSettings.Create(
                _enableMarkerScanning, MarkerTypes, QRCodeSize, ArucoDicitonary, ArucoMarkerSize, TrackerProfile, customProfile);
        }
        else
        {
            _markerSettings = MLMarkerTracker.TrackerSettings.Create(
                _enableMarkerScanning, MarkerTypes, QRCodeSize, ArucoDicitonary, ArucoMarkerSize, TrackerProfile);
        }


        MLMarkerTracker.SetSettingsAsync(_markerSettings).GetAwaiter().GetResult();
    }

    private void OnDisable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFoundArray -= OnMLMarkerTrackerResultsFoundArray;
    }

    private void OnMLMarkerTrackerResultsFoundArray(MLMarkerTracker.MarkerData[] dataArray)
    {
        foreach (MLMarkerTracker.MarkerData data in dataArray)
        {
            ProcessSingleMarker(data);
        }
    }

    private void ProcessSingleMarker(MLMarkerTracker.MarkerData data)
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
                markerSize = QRCodeSize;
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
