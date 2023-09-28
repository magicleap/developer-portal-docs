---
id: os-release-notes
title: August 2022 - OS Release Notes
sidebar_position: 0
date: 08/10/2022
---

**ML2 OS Release B3E.220721.07-R.026**

Don’t forget: Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Install Instructions

Before flashing make sure to power cycle your device:

1. Unplug the device from the if connected to the computer.
2. Hold down the power button for 20 seconds.
3. Once the device is powered down, press the power button and wait for the device to boot.
4. Connect the device to your computer.

When flashing, you **MUST** flash in a linear sequence based on the build order in the table below. For example, if you're on `B3E.220619.07-R.107_user` (build order #4), you **MUST** flash `B3E.220619.07-R.124_user` (build order #5) then `B3E.220721.07-R.026_user` (build order #6) for your device to work properly with that OS.

| Build Order | Build Fingerprint |
|---|---|
| 6 | B3E.220721.07-R.026_user |
| 5 | B3E.220619.07-R.124_user |
| 4 | B3E.220619.07-R.107_user |
| 3 | B3E_220523.01-R.041_userdebug |
| 2 | B3E_220424.01-R.037_userdebug |
| 1 | B3E.220321.01-R.068_userdebug |

More details can be found in the device upgrade guide via [The Lab 2.0](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-os-installer.md)/ or using [Android Debug Bridge](/versioned_docs/version-31-Aug-2023/guides/device/updating-the-os/device-flashing-guide.md).

## New Features

### WebXR Viewer

We’ve introduced a new WebXR Viewer application which allows WebXR developers to test their applications and how compatible they are with our WebXR implementation. Follow the instructions below for use as it’s not visible from the home menu.

Start WebXR Viewer:

```
adb shell am start -n com.magicleap.selene_webxrviewer/.WebXRViewerActivity https://immersiveweb.dev
```

To RESET VR permission request:

```
**adb shell am start -e settings.vr ASK -n com.magicleap.selene_webxrviewer/.WebXRViewerActivity https://immersiveweb.dev
```

There are several permissions which we can reset via API:

- `-e settings.mic ASK`  
- `-e settings.camera ASK`  
- `-e settings.vr ASK`  
- `-e settings.ar ASK`  

There are several alternatives for the permissions:

- ASK
- ALLOW
- BLOCK
- RESET (set default which is actually is ASK)

## Known Issues

- Developer mode is enabled by default.
- When the user uses voice intent to close an App (for example, “Hey Lumin, Close Settings”), a confirmation dialog pops up. It has Yes/No buttons and can be dismissed using voice or controller. If the controller is used, then the system will keep waiting for voice response until timeout (so the voice UI of the dots will stay until timeout and will not be dismissed along with the dialog).
- The volume warning dialog appears when the user tries to increase the volume too high either using the volume buttons or by using voice (“Hey Lumin, set volume to 100”). This dialog cannot be dismissed using voice (but only using the controller) even if it popped up as a result of volume voice intent.
- In Settings, the Connected Devices option for USB shows up as Disabled. As a workaround, users can go to System → Developer Options → Default USB Configuration.
- Some of the Developer Options in Settings may not work as expected
- The following options under Network → Wi-Fi preferences currently do not work:
- Turn on Wi-Fi automatically when near high-quality saved networks
- Wi-Fi Direct
- Network rating provider
- When shutting down your device while keeping it connected to your PC, you might run into a scenario where upon booting up your device you can not get by the unauthorized state (ADB devices) that gets approved through the device’s display.
- Device Type in settings may be incorrect if you're using a PEQ device with old pre-configured information
- Virtual objects may appear shifted after looking into corner
- If you are unable to put the device in adb debug mode after power-on boot, attempt executing "adb kill-server" and re-connect the USB-C cable to
- Hard reboot the device after flashing if it doesn't enumerate
- If the wake up word (saying "Hey Lumin…") stops responding, as a temporary workaround press the volume up button until the "Audio warning" message appears, then try again.

