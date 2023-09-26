---
title: Marker Tracking
sidebar_position: 5
date: 07/19/2023
tags: [Application Simulator, Marker Tracking]
keywords: [Application Simulator, Marker Tracking]
---

## Marker Tracking with the Application Simulator

This guide explains how to use the marker tracking feature in Magic Leap's Application Simulator in [Simulator, Hybrid, and Device modes](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/app-sim/using-app-sim). You'll walk through how to use the marker tracking feature in the Application Simulator.

## Prerequisites

Make sure the [Magic Leap Hub and Magic Leap Application Simulator is installed](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/app-sim/app-sim-setup).

## Simulator and Hybrid Modes

In these two modes, you are going to add "virtual" markers in your "virtual room." The Application Simulator will detect the markers based on what your application specifies to detect, and notify your application. Do the following: 

1. Start the [Application Simulator](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/app-sim/app-sim-setup#starting-application-simulator).
2. Go to the **Marker Tracking** panel and click the **Add Marker** button.

<Image url= {require("/img/app-sim/add_marker_panel.png")}>Marker Tracking Panel</Image>

3. If it's your first time adding a marker, you get a prompt stating that App Sim needs to install support into the current SDK for creating markers.

<Image url= {require("/img/app-sim/app_sim_install_marker.png")}>Install Support</Image>

4. Click **OK** to start the installation (you will not be able to create a marker successfully until you complete the installation). You'll be able to see your new marker in:
- Device View
- Marker Tracking tab
- Tracked Objects section under Scene Graph

5. After you have a marker, click the **Duplicate** button (it's the icon that looks like two stacked rectangles, to the right of your marker) to create a new marker by copying.

6. You can remove a marker by clicking the **Delete** button (it's the trash can icon to the right of the marker you wish to delete).

7. You can track your marker using the icon depicting a square with a circle in the middle. If the icon is green, the marker is being tracked actively by your headset. When your marker is partially out of view, the icon will turn red, indicating that the tracking is unreliable. If you see the icon is gray, the marker is out of view, and your headset is no longer tracking it. 

8. You can rotate any marker by changing its orientation using X, Y, and Z. 

9. You can also change the type of marker using the **Type** drop down. Choose from Barcode EAN-13, Barcode UPC-A, QR Code, or Aruco ID. You should see the marker image change accordingly in the Device View. 

## Device Mode

In this mode, the ML2 device detects any markers in the physical world per specification from your application, and notifies your application.
