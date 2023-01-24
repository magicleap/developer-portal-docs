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

You can also specify a `FPSHint` to increase or decrease the number of frames to process per second. Note, a higher tracking frequency will result in higher CPU load which can affect the performance of your system.

:::tip

You can view the complete list of Marker Tracking settings in the [MLMarkerTracking the API section](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md)

:::

:::caution
This feature requires the `MARKER_TRACKING` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

```csharp
...

  // A value of 0 uses the world cameras and 1 uses the RGB camera to scan for Aruco markers
  int arucoCamera = 0;
  float qrCodeMarkerSize  = 0.1f;
  float arucoMarkerSize  = 0.1f;
  MLMarkerTracker.MarkerType type = MLMarkerTracker.MarkerType.Aruco_April;
  MLMarkerTracker.ArucoDictionaryName arucoDict = MLMarkerTracker.ArucoDictionaryName.DICT_5X5_100;
  MLMarkerTracker.Settings settings = MLMarkerTracker.Settings.Create(true, type, qrCodeMarkerSize, arucoDict, arucoCamera, arucoMarkerSize,MLMarkerTracker.FPSHint.Medium);

  _ = MLMarkerTracker.SetSettingsAsync(settings);

...
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

- [`MLMarkerTracker`](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md)
  - API to scan markers and obtain additional data such as 6DOF poses.
- [`MLMarkerTracker.ArucoData`](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.ArucoData.md)
  - API that contains the data that belongs to Aruco Markers.
- [`MLMarkerTracker.Settings`](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md)
  - Marker Tracker Settings API that contain information such as : what type of markers, their sizes, and if the Marker tracker is enabled.
