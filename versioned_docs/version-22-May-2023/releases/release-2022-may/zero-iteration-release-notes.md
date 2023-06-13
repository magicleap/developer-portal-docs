---
id: zero-iteration-release-notes
sidebar_position: 2
date: 05/10/2022
---

# 3.1.0 Zero Iteration (ZI) Lab Module

Version 3.1.0

:::caution

Currently, Zero Iteration is not supported on M1 Macs.

:::

## Changes

Here are the major changes to be aware of.

### Unity workflow

- You no longer need to import support libraries (the menu item “Magic Leap > Zero Iteration > Import Support Libraries” has been removed). If you have done this previously, delete any "Assets/Plugins/Lumin/Editor" folders from your projects.
- You still need to install the **com.magicleap.unitysd** package and specify the path to the Lumin/Relish SDK in Unity preferences.

### C API development workflow

- The development workflow remains similar to the 3.0.0 release. The tool **ZILauncher**, used to launch the application shared library, now supports command line arguments in Android Intents format. See "--help" for how these are passed onto the shared library.

### UI in The Lab

#### Permissions panel

- The newly added Permissions panel allows simulating the state of permissions available to running applications. It lists all the permissions from the file **ml_permissions.json** in the MLSDK's **data** folder.
- Each entry has a corresponding state that can be set to Allowed, Denied or Pending. When a permission is in Pending state and an application requests that permission, a dialog appears in The Lab letting the user allow or deny the permission. Otherwise, the state of the permission is used as-is, whether explicitly requested of the user in the past or set through the UI.
- The panel allows loading a AndroidManifest.xml that acts as a filter on the loaded permissions and restricts the number of privileges that a running MLSDK application has access to.
- Through the context menu, permissions can all be set to well-known states.
- Permissions states can also be stored in a profile, allowing for testing specific user scenarios.
- **NOTE**: at runtime, permissions must be driven through a ZI-specific **MLZIPermissions** API. See "ZI-specific C APIs" below.

#### Miscellaneous

- Updated the Zero Iteration and Room Generator cards on the Lab home page.
- Updated the several images and animations in the Action Bindings Editor to match the ML2 headset and controller.
- Updated the default room in the Simulator to be a smaller Office, for the benefit of typical enterprise scenarios
- Updated the "Package Session as Room" utility, in the Session file dropdown, to generate compact .room files from .session files.
- Added a new default layout for Simulator and Device modes that primarily adjusts the Device View to have the same aspect ratio as the ML2 eyepieces. Users can restore the old ML1 layout from the Layout dropdown on the top right.
- Added a tab for "Device View" settings that is active in Device mode only and is visible under Settings > Zero Iteration > ML Device.
- Added support for the "Home" button in the Controller Panel.
- Added a popup to notify the user of graphics hardware not being able to handle the Codec type when running an application in Device mode. This usually manifests on old Intel cards and negatively impacts performance. A corresponding setting, "Show Codec Warning Message", has been added to Settings > Zero Iteration > General > Logging.
- Adjusted the range of touchpad gesture properties radius, speed and distance.
- Fixed highlighting of the "Trigger" button when the same is pressed on the physical controller.
- Fixed visibility of read only properties by making the text lighter.
- Fixed a crash on adding multiple image targets.
- Fixed the issue of some settings restoring to original values on edit.

### C API Support

- Added support for **ml\camera\v2** and **ml\camera\metadata_v2** APIs in device mode.
- Added support for **ml_planes** APIs.

### ZI-specific C APIs

- Permissions: use the **MLZIPermissions** API (see **ml\zi\permissions.h**) for applications on host running under ZI. This serves as a replacement for corresponding Android calls (since ZI does not simulate Java, and ML2's Android Q does not support the recent NDK APIs for permissions). This API drives end-user requests for permissions through a blocking API, used in conjunction with the Permissions panel.

### ZI Runtime

- Updated the headset and controller in the Simulator Scene and Devices Views to match the ML2 headset and controller. Hands have also been updated to be more life-like (though they are still static and do not reflect the actual hand keypoint state).
- Fixed handling of ZI installation paths containing Unicode characters.
- Fixed the issue of all planes being returned when vertical only semantics are enabled through an application.
- Fixed high CPU consumption of the ZILauncher app when left running after stopping a ZI session.
- Fixed drifting of controller position when follow headpose is enabled.

### Device Performance

- The device performance has been significantly improved by rendering at 60 Hz. The overall pixel stick should also be better.
- The default Graphics Resolution Scale in the Rendering panel has been bumped up to 1 in Device mode. New options for enabling re-projection and re-projection depth have also been exposed in the same panel.
- A new splash screen has been added to indicate that the on device agent is waiting to receive textures from the application on host, to indicate that an app is starting, rather than having a long blank display.

### ZIF library

- Added ZIF permission APIs.
- Several ZIF API areas (hands, input controller, eye tracking, image tracking) support a new "ActiveOnDevice" property which allows you to determine whether the respective data is being driven from the device at the current time.
- Fixed some instructions for building C# programs using ZIF
- The ZIFTracker.py script supports filtering by field (-f)
- The ZISessionTarget API supports creating an uninitialized session target
- Support Changes to session Logging state
- Support Changes when a simulator session has started and completed loading
- Removed obsolete properties from input controller touchpad APIs
- Fixed a few incorrect null checks in scene and image target APIs
- Improved comment formatting in ZIF headers

### Zero Iteration in Unity

- ZIFUnity no longer prompts to import support libraries, since this is no longer necessary. Remove any "Assets/Plugins/Lumin/Editor" folders from your projects.
- ZIFUnity will detect where the ZI runtime lives at startup. This relies on the Lumin SDK path being set (where "labdriver" is located).

- Note: this step currently occurs a few times more often than we'd like, which adds to startup time, and will be improved in the future.
- To work around this, set the ML\ZI\ROOT environment variable to point to the ZI runtime. You can copy this from the environment after launching a terminal from The Lab (F8).

- Added a "stop session on exit?" dialog if ZI is still running when Unity exits
- Added ZI Rendering panel corresponding to the same UI in The Lab
- Allow resetting ZI > General preferences (which will help find ZI and its default room if these have become stale)
- More closely match "read-only" state of properties according to the current ZI mode
- Reduced decimal places displayed in Position/Orientation fields
- Improved resizing of the ZI Target view
- Multiple stability improvements (crash issues, session start/stop, session dirty state, recent sessions list, default room selection)

## Known Issues

- The ZI simulator modes support some APIs that have not been implemented on ML2 devices. Image Tracking, Meshing, and Hand Tracking are the most obvious examples of this. These API areas will evolve in the future.
- Editing certain state properties in ZIFUnity (hands, input, eye state) will not have the same effect as editing them in The Lab, and edits may not work at all in some cases. These issues will be resolved in ZIF and ZI in upcoming releases.

Version 3.0.0

## Overview

This is the initial release supporting ML2.

## Changes

If you used Zero Iteration as it existed in The Lab 1.x for ML1, then welcome back! Here are the major changes to be aware of.

### Unity workflow

- Double-check you have updated your project to be based on the example provided with the Magic Leap Unity SDK -- you should see a "Magic Leap > Zero Iteration > …" menu provided by the **com.magicleap.unitysdk** package.
- Some of the project setup needed for running ZI in Unity has been simplified and re-factored, which should make for a better experience.

- There is no need to precisely synchronize SDK settings between The Lab and Unity, nor to launch ZI once in The Lab beforehand.
- You only need to ensure The Lab and ZI are installed, and that your Unity project points to an ML2 SDK.
- Then invoke "Magic Leap > Zero Iteration > Import Support Libraries" whenever you update to a new ZI build. Check the Console for any further steps reported.

- This release provides only part of the changes yet to come. Stay tuned!

### C API development workflow

- ML2 is built on Android, so development now relies on Android SDK / NDK tooling. ZI still targets the host, however, so this has several impacts on the build and deployment workflow.
- The structure of host-side "applications" is different.

- For building, **mabu** is no longer maintained or provided as a cross-platform build tool, since Android tooling is more comprehensive and applicable to ML2 development. The Lumin SDK supports **cmake** for building cross-platform code.
- The C API samples target **shared libraries** for their application code, as done in Android **NativeActivity** projects. Thus, ZI programs on host should also follow this pattern (see references to **ZILauncher** below).
- But you are still free to develop fully standalone host executables for use with ZI as with ML1. Consult the "cmake" and "zi\android\sdk" folders in the Lumin SDK for guidance if you take this route.

- The workflow for running ZI programs differs from ML1. In order to launch applications built into shared libraries, we provide a new tool, **ZILauncher**, which can load the shared library and host it in a standalone process.

### UI in The Lab

#### Image Tracking

(Note that ML2 device support has not yet landed for Image Tracking, so this feature reflects the Simulator / Hybrid support assuming Image Tracking continues in the ML1 API style.)

- Added support for assigning the same image to multiple Image Target Gizmos. This does now require a user action to assign the target images loaded by the running Lumin SDK application via the **MLImageTrackerAddImageTargetFromFile** or **MLTrackerAddImageTargetFromArray** functions to the Image Target Gizmos.
- Removed limit on the number of Image Target Gizmos that can be in the scene as they are no longer tied one-to-one with the target images being tracked.
- Target images are not saved to session files by content. But the name, generated from either the path or array checksum of the target image, is stored and will restore the user defined mappings on the next run of the Lumin SDK application after loading a saved session, if the same target images are reloaded.
- Image Target Gizmo properties are now displayed in the Scene Graph's Selected Node Properties panel when the gizmo is selected.
- Fixed renaming of image target nodes when one is deleted.

#### System Events

This is a new part in The Lab.

- Added support for triggering system events and sequences thereof, using a dedicated panel in the Lab UI. This currently supports event sets for Head Pose and Lifecycle.
- Additionally, the ZI device agent also generates the following events in Device and Hybrid modes: DeviceActive, DeviceStandby, DeviceReality, FocusLost, FocusGained.

#### Scene/ Device Views

- Integrated the latest version of DriftFX library in the Lab UI. This should further improve the Scene/ Device view interactions, especially on Windows. Additionally, this also fixes rendering on old AMD cards.
- ZI should work under Remote Desktop now, where before it would fail or cause The Lab to crash.
- Keyboard and mouse input should be much smoother.
- Selected primary navigation targets work as expected when clicking on the tabs associated with the Scene/ Device views. Earlier, one would need to click inside the views.
- Updated the Virtual Room to process up to 32 lights in the scene.
- Enabled scaling of room nodes when selected from the Scene Graph.
- Fixed incremental updates to Scene / Device views not showing up on loading large .room/ .session files.
- Fixed the issue of Scene/ Device views occasionally going blank on launch.

#### Scene Graph

- Added a confirmation prompt on clearing the scene from the Scene Graph panel.
- Fixed de-selection of nodes in the Scene Graph panel when using Ctrl (Command on macOS) click.
- Creating new Light/ Room nodes using the context menu in an empty area of the Scene Objects tab creates them as top-level nodes. Earlier, they would be created as children of a previously selected node.
- Added new menu items to the context menu in the Scene Objects tab. These allow adding new .room and model files as well as deleting nodes.
- Added a context menu to the Image Targets sub-panel in the Tracked Objects tab that allows adding Image Targets to the scene. The action is analogous to using the "Add Target" button in the Image Tracking panel.

#### User overrides

- When you edit a property in The Lab, that acts as an "override" to the state otherwise provided by the Simulator or Device. (This was the ML1 behavior as well.)
- The presence of such overrides is now indicated by italicizing the property name.
- When you hover over such a label, a "reset" icon appears next to the property name. You can click this to remove this override. (Previously you would need to restart the ZI session to accomplish this.)

#### Miscellaneous

- Added an entry "Package Session as Room" to the Session file dropdown in the Lab UI. This lets you send a machine-specific .session file to someone on a different machine.
- Added support for left/ right pupil diameter and IPD (inter-pupillary distance) fields to Eye Tracking.
- Added thresholds to configure the delay in reporting the activeness of hands and eyes in Device and Hybrid modes (Settings > Zero Iteration > ML Device).
- Moved Key Pose properties in the Hand Tracking panel to a collapsible group.
- Several ZI dialogs gained "Do not prompt again" checkboxes, including those for terminating a session on exit, and saving a dirty session on exit. Also, explicit settings were added in Settings to allow restoring the behavior if needed.
- Fixed occasional timeouts during Simulator mode launch.
- Fixed the logic of plane filtering in Simulator mode to include both semantics and orientation.

#### Crash Handling

- Improved crash handling behavior by splitting the preferences for internal and user apps (Settings > Zero Iteration General > Show Crash Messages and Settings > Zero Iteration > General > Show User Crash Messages).
- An announcement is posted when a crash is detected, and clicking on the Details buttons brings up the crash dialog. The crash dialog allows for ignoring future crashes and allows to gather logs.

### ZI API Support

- Added support for left / right pupil diameter fields from the ml\eye\tracking APIs.
- The param **surface_scale** in struct MLGraphicsFrameParamsEx works as expected.
- Fixed an occasional Vulkan graphics driver crash on Simulator mode shutdown. This impacted Windows only.
- Fixed occasional timeouts during Simulator mode launch.
- Fixed the logic of plane filtering in Simulator mode to include both semantics and orientation.

### ZI-specific APIs

- The "ml\remote.h" header has been split into several "ml\zi*" headers.
- The "ml_remote" library is now named "zi.magicleap" in accordance with other Lumin SDK library renames.

### ZI Runtime

- ZI's configuration directory (under your home directory in ".config/mlvds") has separate sections for ML1 and ML2, so you can run ZI side-by-side for these platforms if needed.
- The ZI runtime executables have been renamed. All the relevant processes should be grouped together now in process listings:

- VirtualDeviceServer → ZIServer
- VirtualRoomServer + MockML1SparseDevice (combined) → ZISimulator
- Peripheral → ZIPeripheral
- `<new> → ZISystem`
- (Note that the VDCLI tool is currently still named as before.)

- The on-device portion of ZI is now called **com.magicleap.zi_agent**. It never was a "server', so the terminology should be clearer.
- Fixed the issue of ZI not recovering from the machine going to sleep.
- Fixed an occasional Vulkan graphics driver crash on Simulator mode shutdown. This impacted Windows only.

### ZIF

- The ZIF ("Zero Iteration Frontend") library has come a long way since its initial release in 2.3.0. In addition to features supported in 2.3.0, the following notable features have been introduced:

- New APIs for the following feature areas: head tracking, input controller, hand tracking, eye tracking, image tracking, virtual room management, scene graph manipulation, configuration management
- New pause/ resume APIs to reduce the CPU load of feature areas and the viewer
- New support in various APIs to detect "changes" since the last query and await changes to specific properties

- Additionally, ZIF provides HLL (high-level language) wrappers for C#, Java, and Python. The file **README-scripting.md** in the "zif/docs" folder of the ZI runtime has details on using these wrappers.
- The ZIF SDK provides more sample programs to play with under "zif/samples".
- A nascent test script "ZIFTracker.py" in "scripts" (in the ZI runtime) exercises some of the features above.

### Known Issues

#### ZI-specific API support

- The "ml_zi_permissions.h" header is not wired up. On-device programs will use Android Java APIs for this, so ZI will provide a C-only counterpart in an upcoming release.

#### Simulator-only support

- The ZI simulator modes support some APIs that have not been implemented on ML2 devices. Image Tracking, Meshing, and Hand Tracking are the most obvious examples of this. These API areas (and thus ZI) may evolve in the future.

#### Application scaling

- When C API samples are run against ZI, their windows have an unexpected aspect ratio. The content in the ZI Device View is correct.

#### Device performance

- The resolution of the ML2 eyepieces has around twice as many pixels on ML1, which means a corresponding 2x slowdown to transmit the data sent for your application's frames.
- (As with ML1, USB 3.x is preferred over USB 2.x for best throughput. And avoid wifi if you can, since it is still slower than USB. We strongly recommend Windows 10 even if you can still run ZI on Windows 7, because it offers H264 encoding support, which is essential for a pleasant experience.)
- For the moment we have changed the default for Rendering > Device > Graphics Resolution Scale to 0.5 to compensate for these issues but are actively working on improvements in this area. Stay tuned!

### New Features

#### Zero Iteration in Unity

This release includes a preview of a package (**com.magicleap.zifunity**) which integrates much of the familiar UI from The Lab's Zero Iteration module into Unity.

#### Basic Usage

- Install the ZI Lab module and runtime into The Lab.
- Depending on how you found it, install the **com.magicleap.zifunity** from the Magic Leap scoped registry, or add the package from disk.
- See the **Window > Magic Leap > Zero Iteration** menu to add panels to your layout.
- The "ZI Target" panel is needed at a minimum to start a session. From there, start a given session by selecting Simulator, Device, or Hybrid and clicking the "play/stop" button.
- See **Edit > Project Settings... > MagicLeap > Zero Iteration** to configure ZI. This should be familiar from The Lab. (If you are used to the Rendering panel, this is not yet provided. See the same settings in the **Device View** and **Scene View** categories.)
- The ZI integration can be used whether or not a Unity scene is playing.
- Project setup otherwise needs to be the same as for Zero Iteration (Relish/ML2 build platform, OpenGL).
- When playing a scene, you can drive the head pose camera in Game view using standard mouse and keyboard controls.

#### Known Issues

This is a preview release and has several known issues:

- When starting a session, sometimes messages about "ZI\HANDLE\NONE" appear in the Console and cause the startup to fail. Try to launch the session again.
- Some unwanted/ spammy messages appearing in Console.
- Occasional crashes.
- Some users report performance issues on macOS when playing a scene. Closing the Scene and Device panels may help.
- While you can use The Lab and ZIF in Unity side-by-side, currently you need to start a ZI session from Unity for this to work (Unity doesn't "attach" to a running ZI session).
- When the ZI Target panel is in the layout, subsequent launches of Unity will invoke The Lab (via "labdriver") up to three times before the Unity window appears.

Bug reports are welcome. Please gather logs with such reports either by using the **Save Diagnostic Logs…** menu item in The Lab or by using "labdriver save-logs SomeFileName.zip" from a command prompt configured for the Lumin SDK. (Unity logs themselves will not provide enough detail. The Lab commands will include crash dumps as well as Unity editor logs.)

