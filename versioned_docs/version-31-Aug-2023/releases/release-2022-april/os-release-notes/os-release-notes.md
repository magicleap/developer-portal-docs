---
id: os-release-notes
title: April 2022 - OS Release Notes
sidebar_position: 0
date: 4/05/2022
---

# April 2022 OS Release Notes

## Features

- Added Voice Input "App Specific Voice Intents" for Apps in SDK
- Hand Tracking: Hand skeleton estimation and tracking for Apps in SDK
- On-Device Localization and Mapping Tool App: Offline content persistence through spatial anchors on up-to 5 maps
- Fit and Eye Calibration App: "FitEyeCalib" app, now accessible from the home menu launcher. The application can also be launched directly into specific steps using Android intents, once the step has been unlocked (previous steps completed at least once). For example, the app can be started by any of the following:
   - adb shell am start -a com.magicleap.intent.action.FIT_WEAR
   - adb shell am start -a com.magicleap.intent.action.FITTING
   - adb shell am start -a com.magicleap.intent.action.EYE_CALIBRATION
- World Reconstruction Planes: Query for planar and semantic surfaces in the environment.
Low Frequency Sensor Online Calibration : On-device automatic correction of camera calibrations is now enabled. This is helpful if the cameras experience deformation if the device drops, or mishandling during transport, storage, accumulation of heat or other external physical factors.
Gaze Recognition API preview is available. This API provides higher level classification of the "state" of the user’s eyes (e.g., the user is fixating, the user just made a saccade to the right, etc.)

Key ML2 vs ML1 Differences

- ML2 OS is now based on AOSP, alongside its development toolchain
- Only immersive applications are supported
- ML2 Controller: Now based on an optical concept instead of EM
- ML2 Controller: Now has a dedicated button to bring user back to Home Menu
- Reality button is no longer available on wearable
- Updated LED patterns


## Known Issues

- Users may experience occasional audio capture glitch during system overload conditions. These glitches may or may not be noticeable.
- Audio analysis results may be inaccurate.
- We recommend users to use Setting app from the home menu to configure WiFi and bluetooth.
- Launching the Fit and Eye Calibration application with an Android intent and then selecting the "Back" button will cause some of the interface to disappear. The app will need to be restarted.
- When the Fit and Eye Calibration application is suspended, sound from the application may continue to be heard.
- On Fit and Eye Calibration app user may not be able to successfully pass Eye calibration after their first failed attempt. Re-launch the app if this happens.
- The pupil radius field has been temporarily removed in this release, it will be made available in another struct in the next release.
- The Settings - Connected Devices options for USB shows up as Disabled. As a workaround, user can go to System >Developer Options > Default USB Configuration
- Low battery icon for controller may not flash when the battery is low
Menu may get stuck and become headlocked (or fly away) if device loses headpose

