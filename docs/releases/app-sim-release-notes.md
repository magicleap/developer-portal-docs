---
title: Magic Leap Application Simulator Release Notes
sidebar_position: 2
date: 06/13/2023
---

# Version 3.5.0

## What's New
  * UI in ML Hub
    * The Eye Gaze panel has been extended to expose gaze recognition properties.
    * Added menu commands *Application Simulator > Kill Backend Processes...* and *Application Simulator > Purge Generated Files...*.  
    The command *kill backend processes* allows the user to clean up processes and start a fresh session when things have gone wrong from the last session.
  * App Sim Runtime
    * Fixed issues around launching Device and Hybrid modes.
  * C API Support
    * Added support for gaze recognition APIs in all three modes.
  * App Sim for Unity
  	* Added a diagnostic tool *Window > Magic Leap App Simulator > App Sim Diagnostic Tool* that compares the installed versions of package dependencies with the expected versions. Users are expected to update to the correct versions of the dependencies when mismatch is reported.
    * Added logic for detecting ADB process termination and	reporting it to user. This helps resolve issues involving multiple ADB installations.
	* Added logic for reporting that a permission prompt is up on the headset when using Device or Hybrid modes.

## Known Issues
  * Running apps that exercise meshing APIs may cause the rendered frame to freeze in Device mode. It is advisable to change the Current resolution scale (on panel *Rendering > Device View*) to 0.5 in this case.

# Version 3.4.0
  * UI in ML Hub
    * Added Marker Tracking panel to support **ml_marker_tracking** APIs in Simulator mode. The UI allows for adding Barcodes, QR codes, and ArUco markers. On adding a marker to the scene, users may be prompted to install prerequisites. This is a one time operation and requires internet connection.
    * Fixed the issue with Scene and Device views not updating rendered content on switching monitors with different DPI scales.
    * Fixed occasional crash on switching targets.
  * App Sim Runtime
    * Improved audio output quality in Device and Hybrid modes.
    * Fixed issues with marker tracking in Device mode.
    * Fixed bugs around loading .session files and overriding state.
    * Fixed loading of .room files with Unicode characters in file path.
    * Fixed error on loading a manifest file in the Permissions panel.
    * Added the missing Internet permission to the Device Agent app.
    * Added directory support to ZILauncher app. See `--help` for options.
    * Added missing MLTime based timestamps to hand tracking and eye tracking states in Simulator mode.

  * C API Support
    * Adapted to several ML2 API changes.
    * Added support for <b>ml_marker_tracking</b> APIs in Simulator mode.
    * Added support for <b>ml_gesture_classification</b> APIs in Device mode.
			
  * ZIF library
    * Fixed occasional crash on session startup.

  * ML App Sim package for Unity
    * App Sim for Unity now allows for using the Metal graphics API on Macs. The package is fully functional on both M1 and Intel devices.
    * Added Marker Tracking panel that closely mimics the newly added panel in the Hub.

# Known Issues
  * ML Hub and Unity want different versions of <b>adb</b>.  If these are run side-by-side, Unity will unexpectedly kill ML Hub' adb with a console message like  
  <code>Multiple adb server instances found ...</code>.  
  This will have the side effect of corrupting any App Sim Device or Hybrid sessions.
  To work around this, have ML Hub use the same adb as Unity.  
  Use the new ML Hub <code>Setting &gt; General &gt; Developer &gt; Use custom adb</code> to point to the same version configured under Unity in 
  <code>External Tools &gt; Android &gt; Android SDK tools</code> (adb is at <code>platform-tools/adb[.exe]</code>).

  * Running apps that exercise meshing APIs may cause the rendered frame to freeze in Device mode. It is advisable to change the Current resolution scale (Rendering > Device View) to 0.5 in this case.</li>
