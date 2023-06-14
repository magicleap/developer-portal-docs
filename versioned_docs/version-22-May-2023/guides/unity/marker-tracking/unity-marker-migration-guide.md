---
id: marker-tracker-migration
title: Migrating from ML1
sidebar_position: 5
date: 2/24/2022
tags: [UnityPerception, Marker, Tracking, ArUco, QR Codes,Fiducial, Migration]
keywords: [UnityPerception, Marker, Tracking, ArUco, QR Codes,Fiducial, Migration]
---

The `MLBarcodeScanner` and `MLArucoTracker` APIs have been unified into a single `MLMarkerTracker` API. Additionally, unlike the ML1, the Marker Tracker on the Magic Leap 2 manages its own lifecycle, meaning that the Tracker does not have to be stopped or disposed manually when exiting the app.

## MLBarcodeScanner Transition Table

| Topic | Magic Leap 1 | Magic Leap 2 |
|---|---|---|
| Barcode Scanner | MLBarcodeScanner | MLMarkerTracker |
| Barcodes Found Event | MLBarcodeScanner<br />.OnMLBarcodeScannerResultsFound | MLMarkerTracker<br />.OnMLMarkerTrackerResultsFound |
| Start | MLBarcodeScanner<br />.StartAPI() | MLMarkerTrackerStartScanningAsync() |
| Stop | MLBarcodeScanner<br />.StopAPI() | MLMarkerTracker<br />.StopScanningAsync()  |
| Enable Barcode Scanning | MLBarcodeScanner<br />.Settings.EnableBarcodeScanning | MLMarkerTracker<br />.Settings.EnableMarkerScanning |
| Barcode Type | MLBarcodeScanner<br />.BarcodeData.BarcodeType | MLMarkerTracker.MarkerType |
| Data | MLBarcodeScanner<br />.BarcodeData.stringData | MLMarkerTracker<br />.MarkerData.BinaryData|

## MLArucoTracker Transition Table

| Topic | Magic Leap 1 | Magic Leap 2 |
|---|---|---|
| Barcode Scanner | MLArucoTracker | MLMarkerTracker |
| Barcodes Found Event | MLArucoTracker<br />.OnMarkerStatusChange | MLMarkerTracker<br />.OnMLMarkerTrackerResultsFound |
| Start | MLBarcodeScanner<br />.StartAPI() | MLMarkerTracker<br />.StartScanningAsync() |
| Stop | MLBarcodeScanner<br />.StopAPI() | MLMarkerTracker<br />.StopScanningAsync()  |
| Marker Data | MLArucoTracker<br />.Marker | MLMarkerTracker<br />.MarkerData |
| Tracking Status | MLArucoTracker<br />.Marker.TrackingStatus | Removed |
| ID | MLArucoTracker<br />.Marker.id | MLMarkerTracker<br />.MarkerData.ArucoData.Id |
| Marker Length | MLArucoTracker<br />.Settings.MarkerLength | MLMarkerTracker<br />.Settings.ArucoMarkerSize |
| Dictionary | MLArucoTracker<br />.Settings.Dictionary | MLMarkerTracker<br />.Settings.ArucoDictionary |

