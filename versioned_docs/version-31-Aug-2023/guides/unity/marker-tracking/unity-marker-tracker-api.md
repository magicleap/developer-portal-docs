---
id: marker-tracker-api
title: Marker Tracker API Overview
sidebar_position: 0
date: 06/27/2022
tags: [Unity, Perception, Marker, Tracking, ArUco, QR Codes, Fiducial, API]
keywords: [Unity, Perception, Marker, Tracking, ArUco, QR Codes, Fiducial, API]
---

This section provides an overview of the marker tracker and references to create a custom Marker Tracking script.

## Marker Tracker Settings

Marker Tracker settings tell the marker tracker what type of markers it should track, their sizes, and if the Marker tracker is enabled.

If settings are created and marker tracking is set to false, the Marker Scanner will release the camera and stop scanning markers. Internal state of the scanner will be maintained. Allowing you to resume scanning using the previous settings.

:::tip

You can view the complete list of Marker Tracking settings in the [MLMarkerTracking the API section](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md)

:::

:::caution
This feature requires the `MARKER_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

```csharp
...

  //Should the Marker Tracker enable as soon as the settings are set?
  bool enableMarkerScanning = true;
  float qrCodeMarkerSize  = 0.1f;
  float arucoMarkerSize  = 0.1f;
  MLMarkerTracker.MarkerType type = MLMarkerTracker.MarkerType.Aruco_April;
  MLMarkerTracker.ArucoDictionaryName arucoDict = MLMarkerTracker.ArucoDictionaryName.DICT_5X5_100;
  MLMarkerTracker.Profile trakerProfile = MLMarkerTracker.Profile.Default;
  MLMarkerTracker.TrackerSettings.Settings settings = MLMarkerTracker.TrackerSettings.Create(enableMarkerScanning, type, qrCodeMarkerSize, arucoDict, trakerProfile, default);

  _ = MLMarkerTracker.SetSettingsAsync(settings);

...
```

## Marker Tracker Profile

Marker Tracker Profiles allow developers to choose pre-configured or create custom marker tracking settings based on their use case. The pre-configured profiles are as follows:

- Default
  -  Tracker profile that covers standard use cases.
-  Speed
  -  Use this profile to reduce the compute load and increase detection/tracker speed.(Can result poor poses.)
-  Accuracy
  -  Use this profile to optimize for accurate marker poses. (Can cause increased load on the compute.)
-  SmallTargets
  -  Use this profile to optimize for markers that are small or for larger markers that need to detected from far.
-  Large_FOV
  -  Use this profile to be able to detect markers across a larger Field Of View. Marker Tracker system will attempt to use multiple cameras to detect the markers.
-  Custom
  -   Application can define a custom tracker profiler.


Developers can specify a variety of options when creating custom profiles. The example below shows how to create Marker Tracker Settings with a custom and predefined profile. Note that the custom profile value is set to `default` when a preconfigured option is used.

```csharp
        //The Marker Tracker Profile to use
        MLMarkerTracker.Profile trackerProfile = MLMarkerTracker.Profile.Custom;

        //Custom Profile Settings
        MLMarkerTracker.FPSHint fpsHint = MLMarkerTracker.FPSHint.Medium;
        MLMarkerTracker.ResolutionHint resolutionHint = MLMarkerTracker.ResolutionHint.Medium;
        MLMarkerTracker.CameraHint cameraHint = MLMarkerTracker.CameraHint.World;
        MLMarkerTracker.FullAnalysisIntervalHint analysisInterval = MLMarkerTracker.FullAnalysisIntervalHint.Medium;
        MLMarkerTracker.CornerRefineMethod refineMethod = MLMarkerTracker.CornerRefineMethod.None;
        bool useEdgeRefinement = false;

        // Create Custom Settings only if tarckerProfile is set to custom, otherwise, use default.
        MLMarkerTracker.TrackerSettings.CustomProfile customProfile = trackerProfile == MLMarkerTracker.Profile.Custom 
            ? MLMarkerTracker.TrackerSettings.CustomProfile.Create(fpsHint, resolutionHint, cameraHint, analysisInterval, refineMethod, useEdgeRefinement) 
            : default;
        
        //Create and set the marker tracker settings.
        MLMarkerTracker.TrackerSettings markerSettings = MLMarkerTracker.TrackerSettings.Create(EnableMarkerScanning, MarkerTypes, QRCodeSize, ArucoDicitonary, ArucoMarkerSize, trackerProfile, customProfile);
        _ = MLMarkerTracker.SetSettingsAsync(markerSettings);
```

## Initialize the Marker Tracker

You can pass the Marker Tracker settings directly into the `StartScanningAsync()` method, to start the scanning with new settings. If no settings are provided, the scanner will resume with the previous configuration.

Additionally, this call is not needed when calling `SetSettingsAsync()` with the `enable:true`. `StartScanningAsync()` simply flips the enabled flag, to start scanning using the existing settings.

```csharp
  _ = MLMarkerTracker.StartScanningAsync();
```

## Stop the Marker Tracker

:::caution
It is important to wait until the marker tracker is completely disabled before starting the tracker again.
:::

```csharp
  _ = MLMarkerTracker.StopScanningAsync();
```

## Marker Tracking Events

Since the marker tracker supports multiple types of markers, it is important to check the `MarkerType` before reading the data. This is because, markers like QR codes only contain binary data, while ArUco markers contain additional data, like which dictionary they belong to.

```csharp
...
    private void OnEnable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFound += OnTrackerResultsFound;
    }

    private void OnDisable()
    {
        MLMarkerTracker.OnMLMarkerTrackerResultsFound -= OnTrackerResultsFound;
    }

    private void OnTrackerResultsFound(MLMarkerTracker.MarkerData data)
    {
        if( MLMarkerTracker.MarkerType.Aruco_April)
        {
         // Aruco markers contains additional information like which dictionary they belong to.
         string arucoId = data.ArucoData.Id.ToString();
         Debug.Log(arucoId + "Position:"+ data.Pose.position +" Rotation:"+data.Pose.rotation);
        }
        else
        {
         // If the marker is not an Aruco marker, it will only contain binary data.
         string markerData = data.BinaryData.Data.ToString();
         Debug.Log(arucoId + "Position:"+ data.Pose.position +" Rotation:"+data.Pose.rotation);
        }
    }
...
```

:::note
Developers can also use the `MLMarkerTracker.OnMLMarkerTrackerResultsFoundArray` event to receive one event with all of the detected markers.
:::

## Reading Binary Data

Binary Data that is encoded into a QR code or barcode marker has to be decoded into the expected type. For example, if data is encoded into the marker as a string, you may want to use the AsciiEncoder to read the binary data correctly.

```csharp

    private ASCIIEncoding _asciiEncoder = new System.Text.ASCIIEncoding();

    private void OnTrackerResultsFound(MLMarkerTracker.MarkerData data)
    {
        switch (data.Type)
        {
            case MLMarkerTracker.MarkerType.EAN_13:
            case MLMarkerTracker.MarkerType.UPC_A:
            case MLMarkerTracker.MarkerType.QR:
              string data = _asciiEncoder.GetString(data.BinaryData.Data, 0, data.BinaryData.Data.Length);
              Debug.Log(data);
        }
    }
```

## See Also

- [`MLMarkerTracker`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md)
  - API to scan markers and obtain additional data such as 6DOF poses.
- [`MLMarkerTracker.ArucoData`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.ArucoData.md)
  - API that contains the data that belongs to Aruco Markers.
- [`MLMarkerTracker.Settings`](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md)
  - Marker Tracker Settings API that contain information such as : what type of markers, their sizes, and if the Marker tracker is enabled.

