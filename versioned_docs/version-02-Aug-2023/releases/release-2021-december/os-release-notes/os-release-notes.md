---
id: os-release-notes
title: December 2021 - OS Release Notes
sidebar_position: 0
date: 12/21/2021
---

# December 2021 OS Release Notes

**Don’t forget** : *Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.*

## Need To Know Instructions & Notifications

- Power up: press the power button for at least 3 seconds or until the Compute Pack LED sunrise pattern shows.
- Power down: to turn device off; unplug the USB charger from the device, then hold power button down until the Compute Pack LED sunset pattern shows.  If no sunset pattern shows; press again for at least 10s.
- OS Updates will be provided via private file share email links.
- Battery optimizations are not fully turned on, so the battery may drain faster than usual while unplugged.

## Key ML2 vs ML1 Differences

- ML2 OS is now based on AOSP, alongside its development toolchain
- Only immersive applications are supported
- ML2 Controller: Now based on an optical concept instead of EM
- ML2 Controller: Now has a dedicated button to bring user back to Home Menu
- Reality button is no longer available on wearable
- Updated LED pattern - see LED Pattern table section below

## Features

### New Home Menu

- A column of icons shows the status of the device (called the Status Bar). These icons are also buttons that can be pressed for quick access to shutdown/restart, change volume, enable bluetooth, etc.
- Application Tab: Applications are listed in a column to the right of the Status Bar. Click an application to launch it.

### Settings Tab

If the Settings tab is selected, all of the device’s settings are available to edit in the column to the right of the Status Bar

- Home Menu can be activated by pressing the Home button on the controller.

### Virtual Keyboard

- Drumstick Input: When using the Virtual Keyboard, the Laser Pointer will change to a (very short) drumstick that is used to press the keys (no need to pull the trigger on the controller). Double tap Shift key for caps lock. Keyboard can be moved with drag handles on the left and right side of the keyboard. Put the drumstick in a grab handle and pull the trigger, then drag the keyboard to a new location.

### Multimedia

- MR Camera Service and RTSP Services are enabled (with virtual only capture)
- Multimedia demo apps (as APK)
- Local, Streaming, Adaptive Media Playback

### Audio Playback

- Most features are working similar to ML1
- Loaded and Streamed files (compressed and uncompressed)
- Buffered Output (mono, stereo, 5.1, 7.1)
- Spatialized Audio (with generic reverb)
- Amplifier tuning and master volume are still rough

### Audio Capture

- Previous ML1 capture APIs are functional
- Voice comm, world capture, virtual capture, mixed capture
- Audio capture is still just raw mics (no processing)
- Audio capture has some glitching

### Pixelstick / headpose

- Initial version supporting indoor scenarios

### Controller

- Optical 6DOF controller initial version

### Battery Saver

- Device now supports Battery Saver Mode which extends the life of the battery when plugged into the charger for long durations over 72hrs. The SOC is dropped and held at 85% until the charger is unplugged and reinserted

## Known Issues

### Fastboot/flashing

Ensure the battery is fully charged before attempting to fastboot/flash.  This will prevent unexpected low battery situations that may make flashing fail
When upgrading from B3E.211021.01-R.016 OS or if you're experiencing an issue where on control startup a buzz (haptics) occurs 3 times and shows a yellow / green LED light on the controller, then we recommend you to recalibrate the controller
Please reach out to your Magic Leap counterpart to help with re-calibrating the controller

### Power Management

- Once powered up, the device will stay on until battery drains, as there are no automatic power savings features enabled yet.  Unplug it from charger/coolgear when not in use (and avoid charging it for long periods, e.g. overnight); and shutdown as indicated in “Power down” section above to preserve the battery.
- Coolgear must be used to charge ML2 when connected to a PC.
- Device will not shut down properly when battery drains to 0%

### Boot Up

- The enrollment application will be available for 30 seconds in the first boot after a factory reset. After the 30 seconds expires the enrollment application (terminates and) is disabled (and remains disabled for future boot-ups).
- Booting the device while wearable is upside down causes the device to fail to enumerate, and fail adb access. - Reboot manually to recover.
Calling 'adb reboot bootloader' may not boot into fastboot mode, but instead reboot the device.

### Controller

- Controller only works close to where you initialize it. Moving too far away from the point of initialization will lead to increasing jitter and controller displacement. Stay within a 1.5m x 1.5m area of where you initiated the session.
- To reset: run adb reset-headpose, or cover all headset cameras for 15 seconds, or restart the device.

### Latency with respect to movement

-Flashing user data may lead to Controller ray not appearing in UI nor trackpad working

### Settings

- The Settings → General → Auto Time & Date, when enabled, retrieves and displays the current network time in GMT.  It does not automatically determine the time zone.  The automatically retrieved time/date will override any previous setting.
- The date and time can be manually specified using the following adb commands:
  - adb shell date MMDDhhmmYYYY.00
  - MM: is the month
  - DD: is the day of the month
  - hh: is the hour in 00-24
  - mm: is the minute
  - YYYY: is the year
- adb shell am broadcast -a android.intent.action.TIME_SET
- Enable/Disable Wi-Fi from UI puts Wi-Fi into bad state. If that happens, reboot the device to fix the issue.

### Pixelstick / Headpose

- Low light conditions may be problematic. (*Scene lighting with lux values below 20 have shown issues within certain environments.)
- Small swim of virtual objects while moving the head
- Occasional flickering of the virtual content while moving the head
- Occasionally content flies away: To reset run adb reset-headpose, or cover all headset cameras for 15 seconds, or restart the device.
- Recovering from tracking loss (relocalization) is only working when being almost static and looking at a lot of texture that has been seen before while tracking.
- KaliEnterpriseDemo app placement may move when walking away from content.
- If the user boots the device while wearing the headset, headpose may take up to 12 seconds to kick-in.  
- Strong jitter while updating the controller firmware

### Graphics

- Dynamic Surface scaling APIs are not yet supported in this release.

### Eye Tracking

- The core eye tracking system is available in this release via the API, but user calibration is not available. - In its uncalibrated state the gaze direction can be expected to be off by ~5 degrees.
- The pupil diameter is calculated internally but in the API the connection is stubbed out and will always return 4mm.

### Audio

- DC offset on side MICs can cause an audible glitch at the start and end of recordings
- Occasional left and right sample swap
- Calling '`getprop persist.ml.audio.vol.tmr`' on adb shell may not return accurate values if audio is continuously playing
- Volume up & down keys on connected Bluetooth Keyboards is not supported

### Video Camera - Lens

- The macro and infinity lens positions have been calibrated in the module vendor's factory.
- If the lens is enabled for a long period of time (e.g. overnight ~ 12 hours), the macro and infinity lens positions will require adjustment. Without adjustment, the images at macro and infinity will lose sharpness.
- For example: An application leaving the lens at the macro position for a long period of time(e.g. overnight ~ 12 hours) would be the worst-case scenario.
- ML is developing code to measure and dynamically adjust the factory calibration values to compensate for this error.

### Video Camera - Automatic Exposure Control (AEC)

- The image brightness may flicker in specific scenes.
- The image brightness may not be set properly for rapid back-to-back image captures.
- Magic Leap is actively debugging the issue.

### Video Camera - Recording

- Video recorded with parameters of 480p 30fps is not yet supported
- When recording content with microphone, then playing back, you may hear auditory glitches
- Long recording times (10+ minutes) may produce jittered / chopped videos on movement

### LightWear Shutdown

- The LightWear will shutdown at internal temperatures below 0 degrees C.

