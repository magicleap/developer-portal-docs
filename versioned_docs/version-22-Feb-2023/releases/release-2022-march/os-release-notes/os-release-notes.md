---
id: os-release-notes
title: March 2022 - OS Release Notes
sidebar_position: 0
date: 3/7/2022
---


**Don’t forget**: Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform. 

# Flashing Instructions
## Linux and Windows
When flashing please use -e parameter for this build, namely - 
``` bash
	$ ./flashall_amd.sh -e
```
## Mac
Mac OS Flashing to Sprint 9 is NOT supported. This will be supported on a later build. We recommend developers to Flash their devices using a Linux or Windows machine. Contact your Magic Leap customer service representative for any additional support. 

## New Features
- Captive Portal Login
    - Users are able to authenticate with Open WiFi networks using our Captive Portal Window
- OAuth Intent
    - Any application requesting OAuth authentication will now be able to use our OAuth login window and have their OAuth token/credentials sent back to their application.
- Overall performance and stabilization improvements

## Key ML2 vs ML1 Differences
- ML2 OS is now based on AOSP, alongside its development toolchain
- Only immersive applications are supported
- ML2 Controller: Now based on an optical concept instead of EM
- ML2 Controller: Now has a dedicated button to bring user back to Home Menu
- Reality button is no longer available on wearable
- Updated LED pattern - see LED Pattern table section below

## Known Issues
- Display
     - Sometimes the display doesn’t come up after booting up. In order to workaround this, please reboot the device.
    - The Magic Leap logo on boot is only visible in the left eye. This is the expected behavior until the next release.
- Eyetracking
    - Blink detection is enabled now, but can be sensitive to background illumination changes either due to fast head movement or if the device is not on the head at all (e.g., resting on a desk). We expect to have this tuned up in the next release.
- Settings
    - When clicking on the “Free Up Space” section of Storage this will always display a page showing “Nothing to remove”. 
    - AOSP Settings - Connected Devices -> USB shows the options disabled.  Work around to access the USB options through Settings-> System -> Developer Options 
    - System Trace option from Settings -> Systems page shows up as blank for a second and returns to System page.
    - No support for Bluetooth audio devices
- Camera Capture 
    - A Unity application setup to capture camera footage at 15 fps can cause the app to crash
- Controller
    - When flashing the controller, you may hit a failure - The failing red LED pattern shows up on the powerpack and the totem. To work around that - Reset the controller (10 second home button press) then try flashing it again.
- Headpose
    - Occasional headpose crashes can happen when running for a longer time. This causes all perception features to stop working. Restart of the device is necessary.
    - During longer usage it can happen that the virtual content appears to be flying away towards infinity. If relocalization does not automatically happen, please cover all world cameras for 15 seconds to trigger relocalization.
    - Relocalization after tracking loss might not work as reliably as in the previous release. Try to go back to a place where tracking was still possible and be relatively still.
    - Relocalization attempts while walking might cause re-initialization which causes the content to appear in a new position.

