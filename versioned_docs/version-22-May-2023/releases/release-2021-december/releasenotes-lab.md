---
id: release-notes-lab
title: 2.0.0.2 - Lab Tools Release Notes
sidebar_position: 2
date: 12/21/2021
---

# RC1 Lab Tools Release Notes

## Lab Tools

- Zero Iteration currently offers limited support in Simulator mode, and allows certain C-API samples to be functional. Current known issues:
  - Samples loading assets, using the ResourcePool implementation in app_framework, will not work against ZI. This includes the audio_output, planes, and the controller samples.
  - It has been reported that newer versions of Apple clang (v12.0.5) prevent app_framework from being built.

### C API development workflow

ML2 is built on Android, so development now relies on Android SDK / NDK tooling. ZI still targets the host, however, so this has several impacts on the build and deployment workflow.
The structure of host-side "applications" is different.
For building, mabu is no longer maintained or provided as a cross-platform build tool, since Android tooling is more comprehensive and applicable to ML2 development. The Lumin SDK supports cmake for building cross-platform code.
The C API samples target shared libraries for their application code, as done in Android NativeActivity projects. Thus, ZI programs on host should also follow this pattern (see references to ZILauncher below).
But you are still free to develop fully standalone host executables for use with ZI as with ML1. Consult the "cmake" and "zi_android_sdk" folders in the Lumin SDK for guidance if you take this route.
The workflow for running ZI programs differs from ML1. In order to launch applications built into shared libraries, we provide a new tool, ZILauncher, which can load the shared library and host it in a standalone process.

## UI in The Lab

### Image Tracking

(Note that ML2 device support has not yet landed for Image Tracking, so this feature reflects the Simulator / Hybrid support assuming Image Tracking continues in the ML1 API style.)

- Added support for assigning the same image to multiple Image Target Gizmos. This does now require a user action to assign the target images loaded by the running Lumin SDK application via the `MLImageTrackerAddImageTargetFromFile` or `MLTrackerAddImageTargetFromArray` functions to the Image Target Gizmos.
- Removed limit on the number of Image Target Gizmos that can be in the scene as they are no longer tied one-to-one with the target images being tracked.
- Target images are not saved to session files by content. But the name, generated from either the path or array checksum of the target image, is stored and will restore the user defined mappings on the next run of the Lumin SDK application after loading a saved session, if the same target images are reloaded.
- Image Target Gizmo properties are now displayed in the Scene Graph's Selected Node Properties panel when the gizmo is selected.
- Fixed renaming of image target nodes when one is deleted.

### System Events

This is a new part in The Lab.

- Added support for triggering system events and sequences thereof, using a dedicated panel in the Lab UI. This currently supports event sets for Head Pose and Lifecycle.
- Additionally, the ZI device agent also generates the following events in Device and Hybrid modes: DeviceActive, DeviceStandby, DeviceReality, FocusLost, FocusGained.

### Scene/ Device Views

- Integrated the latest version of DriftFX library in the Lab UI. This should further improve the Scene/ Device view interactions, especially on Windows. Additionally, this also fixes rendering on old AMD cards.
- ZI should work under Remote Desktop now, where before it would fail or cause The Lab to crash.
Keyboard and mouse input should be much smoother.
Selected primary navigation targets work as expected when clicking on the tabs associated with the Scene/ Device views. Earlier, one would need to click inside the views.
- Updated the Virtual Room to process up to 32 lights in the scene.
- Enabled scaling of room nodes when selected from the Scene Graph.
- Fixed incremental updates to Scene / Device views not showing up on loading large .room/ .session files.
- Fixed the issue of Scene/ Device views occasionally going blank on launch.

### Scene Graph

- Added a confirmation prompt on clearing the scene from the Scene Graph panel.
- Fixed deselection of nodes in the Scene Graph panel when using Ctrl (Command on macOS) click.
- Creating new Light/ Room nodes using the context menu in an empty area of the Scene Objects tab creates them as top-level nodes. Earlier, they would be created as children of a previously selected node.
- Added new menu items to the context menu in the Scene Objects tab. These allow adding new .room and model files as well as deleting nodes.
- Added a context menu to the Image Targets sub-panel in the Tracked Objects tab that allows adding Image Targets to the scene. The action is analogous to using the "Add Target" button in the Image Tracking panel.

### User overrides

- When you edit a property in The Lab, that acts as an "override" to the state otherwise provided by the Simulator or Device. (This was the ML1 behavior as well.)
- The presence of such overrides is now indicated by italicizing the property name.
- When you hover over such a label, a "reset" icon appears next to the property name. You can click this to remove this override. (Previously you would need to restart the ZI session to accomplish this.)

### Miscellaneous

- Added an entry "Package Session as Room" to the Session file dropdown in the Lab UI. This lets you send a machine-specific session file to someone on a different machine.
- Added support for left/ right pupil diameter and IPD (inter-pupillary distance) fields to Eye Tracking.
- Added thresholds to configure the delay in reporting the activeness of hands and eyes in Device and Hybrid modes (Settings > Zero Iteration > ML Device).
- Moved Key Pose properties in the Hand Tracking panel to a collapsible group.
- Several ZI dialogs gained "Do not prompt again" checkboxes, including those for terminating a session on exit, and saving a dirty session on exit. Also, explicit settings were added in Settings to allow restoring the behavior if needed.
- Fixed occasional timeouts during Simulator mode launch.
- Fixed the logic of plane filtering in Simulator mode to include both semantics and orientation.

### Crash Handling

- Improved crash handling behavior by splitting the preferences for internal and user apps (Settings > Zero Iteration General > Show Crash Messages and Settings > Zero Iteration > General > Show User Crash Messages).
- An announcement is posted when a crash is detected, and clicking on the Details buttons brings up the crash dialog. The crash dialog allows for ignoring future crashes and allows gathering logs.

### ZI API Support

- Added support for left / right pupil diameter fields from the ml_eye_tracking APIs.
The param surface_scale in struct `MLGraphicsFrameParamsEx` works as expected.
- Fixed an occasional Vulkan graphics driver crash on Simulator mode shutdown. This impacted Windows only.
- Fixed occasional timeouts during Simulator mode launch.
- Fixed the logic of plane filtering in Simulator mode to include both semantics and orientation.

### ZI-specific APIs

- The `ml_remote.h` header has been split into several `ml_zi*` headers.
- The `ml_remote` library is now named `zi.magicleap` in accordance with other Lumin SDK library renames.

### ZI Runtime

- ZI's configuration directory (under your home directory in `.config/mlvds`) has separate sections for ML1 and ML2, so you can run ZI side-by-side for these platforms if needed.
- The ZI runtime executables have been renamed. All the relevant processes should be grouped together now in process listings:
  - VirtualDeviceServer → ZIServer
  - VirtualRoomServer + MockML1SparseDevice (combined) → ZISimulator
  - Peripheral → ZIPeripheral
  - `< new > → ZISystem`
  - (Note that the VDCLI tool is currently still named as before.)
- The on-device portion of ZI is now called com.magicleap.zi_agent. It was never a "server', so the terminology should be clearer.
- Fixed the issue of ZI not recovering from the machine going to sleep.
- Fixed an occasional Vulkan graphics driver crash on Simulator mode shutdown. This impacted Windows only.

### ZIF

- The ZIF ("Zero Iteration Frontend") library has come a long way since its initial release in 2.3.0. In addition to features supported in 2.3.0, the following notable features have been introduced:
- New APIs for the following feature areas: head tracking, input controller, hand tracking, eye tracking, image tracking, virtual room management, scene graph manipulation, configuration management
- New pause/ resume APIs to reduce the CPU load of feature areas and the viewer
- New support in various APIs to detect "changes" since the last query and await changes to specific properties
- Additionally, ZIF provides HLL (high-level language) wrappers for C#, Java, and Python. The file README-scripting.md in the "zif/docs" folder of the ZI runtime has details on using these wrappers.
- The ZIF SDK provides more sample programs to play with under "zif/samples".
- A nascent test script "ZIFTracker.py" in "scripts" (in the ZI runtime) exercises some of the features above.

## Known Issues

### ZI-specific API support

- The `ml_zi_permissions.h` header is not wired up. On-device programs will use Android Java APIs for this, so ZI will provide a C-only counterpart in an upcoming release.

### Simulator-only support

- The ZI simulator modes support some APIs that have not been implemented on ML2 devices. Image Tracking, Meshing, and Hand Tracking are the most obvious examples of this. These API areas (and thus ZI) may evolve in the future.

### Application scaling

- When C API samples are run against ZI, their windows have an unexpected aspect ratio. The content in the ZI Device View is correct.

### Device performance

- The resolution of the ML2 eyepieces has around twice as many pixels on ML1, which means a corresponding 2x slowdown to transmit the data sent for your application's frames.
(As with ML1, USB 3.x is preferred over USB 2.x for best throughput. And avoid Wi-Fi if you can, since it is still slower than USB. We strongly recommend Windows 10 even if you can still run ZI on Windows 7, because it offers H264 encoding support, which is essential for a pleasant experience.)
For the moment we have changed the default for Rendering > Device > Graphics Resolution Scale to 0.5 to compensate for these issues but are actively working on improvements in this area. Stay tuned!

### Crash reports

- The Lab UI doesn't show any notifications on app crashes, even when the corresponding setting is enabled.

