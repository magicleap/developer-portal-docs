---
title: Magic Leap Application Simulator Release Notes
sidebar_position: 2
date: 06/13/2023
---

# Magic Leap Application Simulator Release Notes

# Version 3.7.0 (Dev1)
(2023.08.31)

## What's New
  * Hybrid mode has been removed as it is underutilized.
  * Auxiliary Device list has been removed from the App Sim in ML Hub as it is underutilized.

## Bug Fixes
  * FEEDBACK-463: Device View is sometimes blank after starting App Sim Simulator in Unity.

## Known Issues
  * Any shipped applications built with MLSDK v1.0.0 will require a rebuild with the latest MLSDK to work with the latest App Sim, even if there are no code changes. This is due to a deprecation of `native_app_glue`. The log message "W [Run] Note: deprecated native_app_glue detected; please rebuild your app" will appear if the application is affected by this.
  * If Device View and Scene View are both blank after starting App Sim Simulator, that usually indicates the GPU of the machine does not have required Graphics support. One possible workaround is to set the environment variable `ML_ZI_DISABLE_GPU_SHARING` to `1` then restart ML Hub or Unity Editor.
  * [Unity AppSim] The Unity Editor may become unstable or crash if the headpose is moved while the application is paused (REM-5950).
  * [Unity AppSim] Unity Editor cannot be exited (by closing the window or selecting menu `Unity->Quit`) when App Sim is running. Workaround is to stop App Sim first (REM-6175).

# Version 3.6.0
(2023.08.02)

## What's New
  * App Sim now validates graphics support of the host machine upon start and warns user if the support is lacking or not sufficient.
  * Channel Editor has been removed from the App Sim in ML Hub as it causes more confusion than benefit to the users.

## Bug Fixes
  * [Unity AppSim] Unity sometimes freezes on playing a scene or stopping a scene with App Sim.
  * [Unity AppSim] WASD movement in Game View was inverted along Z axis.

## Known Issues
  * [Unity AppSim] FEEDBACK-463: Sometimes the Device view is blank after starting App Sim Simulator mode in Unity Editor. The workaround is to
    * Stop and restart the simulator till the Device view is rendered, OR
    * Exit Unity Editor and select `No` when prompted whether to stop App Sim and then restart Unity Editor. Then you should see the App Sim is running and the Device view is rendered. 

# Version 3.5.0
(2023.05.15)

## What's New
  * UI in ML Hub
    * The Eye Gaze panel has been extended to expose gaze recognition properties.
    * Added menu commands `Application Simulator > Kill Backend Processes...` and `Application Simulator > Purge Generated Files...`.  
    The command `kill backend processes` allows the user to clean up processes and start a fresh session when things have gone wrong from the last session.
  * App Sim Runtime
    * Fixed issues around launching Device and Hybrid modes.
  * C API Support
    * Added support for gaze recognition APIs in all three modes.
  * App Sim for Unity
  	* Added a diagnostic tool `Window > Magic Leap App Simulator > App Sim Diagnostic Tool` that compares the installed versions of package dependencies with the expected versions. Users are expected to update to the correct versions of the dependencies when mismatch is reported.
    * Added logic for detecting ADB process termination and	reporting it to user. This helps resolve issues involving multiple ADB installations.
	* Added logic for reporting that a permission prompt is up on the headset when using Device or Hybrid modes.

## Known Issues
  * Running apps that exercise meshing APIs may cause the rendered frame to freeze in Device mode. It is advisable to change the Current resolution scale on panel *Rendering > Device View* to 0.5 in this case.

# Version 3.4.0
## What's New
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
    * Added support for *ml_marker_tracking* APIs in Simulator mode.
    * Added support for *ml_gesture_classification* APIs in Device mode.
			
  * ZIF library
    * Fixed occasional crash on session startup.

  * ML App Sim package for Unity
    * App Sim for Unity now allows for using the Metal graphics API on Macs. The package is fully functional on both M1 and Intel devices.
    * Added Marker Tracking panel that closely mimics the newly added panel in the Hub.

## Known Issues
  * ML Hub and Unity want different versions of `adb`.  If these are run side-by-side, Unity will unexpectedly kill ML Hub' adb with a console message like  
  `Multiple adb server instances found ...`  
  This will have the side effect of corrupting any App Sim Device or Hybrid sessions.
  To work around this, have ML Hub use the same adb as Unity.  
  Use the new ML Hub `Setting > General > Developer > Use custom adb` to point to the same version configured under Unity in 
  `External Tools > Android > Android SDK tools` (adb is at `platform-tools/adb[.exe]`).
  * Running apps that exercise meshing APIs may cause the rendered frame to freeze in Device mode. It is advisable to change the `Current resolution scale` on panel `Rendering > Device View` to 0.5 in this case.

# Version 3.3.0

## What's New

In this release, product branding has changed.  "Zero Iteration" is now "Magic Leap Application Simulator".

  * UI in ML Hub
    * Major operations like starting/stopping a session and interacting with the virtual room go through the ZIF library now, as used by the ML App Sim for Unity package.  Some UI, like progress dialogs, have changed to reflect this.
  * App Sim Runtime
    * The virtual room .session file format has been updated.  If you load older sessions, this will silently ignore any non-default "state" fields in Head Pose, Controller, Hands and Eye Tracking (but not the Transforms) since the previous format was tied to ML1 semantics.  
    * Various bugfixes.
  * C API Support
    * Adapted to ML2 API changes.
  * ZIF library
    * Fixed stability issues in some API areas.
  * ML App Sim package for Unity
    * The Unity ML XR package supports Metal, so you can run Unity scenes against ZI on M1 devices. Please note, however, that the Unity frontend ("ZIFUnity") is still not supported on M1, since it still requires OpenGL, which Unity has disabled for this platform. We are planning ZIF support for Metal in future releases.

## Known Issues

  * ML Hub and Unity want different versions of **adb**.  If these are run side-by-side, Unity will unexpectedly kill ML Hub' adb with a console message like `Multiple adb server instances found ...`.  This will have the side effect of corrupting any App Sim Device or Hybrid sessions.  
  To work around this, have ML Hub use the same adb as Unity.  
  Use the new ML Hub `Setting > General > Developer > Use custom adb` to point to the same version configured under Unity in `External Tools > Android > Android SDK tools` (adb is at `platform-tools/adb[.exe]`).
  * When loading .session files that have state fields set (non-Transform properties in Head Pose, Controller, Hand Tracking, Eye Fixation) these will not show up as "modified" and cannot be reset.  Instead, manually change them back to their default values if needed.
  * Running apps that exercise meshing APIs may cause the rendered frame to freeze in Device mode. It is advisable to change the `Current resolution scale` in panel `Rendering > Device View` to 0.5 in this case.

