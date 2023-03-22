---
id: os-release-notes
title: May 2022 - OS Release Notes
sidebar_position: 0
date: 5/10/2022
---

# May 2022 - OS Release Notes

**ML2 OS Release B3E.220424.01-R.037**

Don’t forget: Some Magic Leap hardware and software features are in a pre-release state and might not be available, might contain bugs or defects, and might experience delays or failures. Read this document for guidance on the current state of Magic Leap hardware and software. This guidance helps developers make the best possible use of the Magic Leap platform.

## Flashing Instructions

### Linux and Windows  

When flashing please use -e parameter for this build, namely
`$ ./flashall_amd.sh -e`

### Mac  

If your device is on a build B3E.220227.04-R.038 (also known as Sprint 9 build) or higher then you can flash on Mac using the following command  
`$ ./darwin_flash.sh -e`

If you are on a prior build, then Mac OS Flashing to Sprint 11 is NOT supported. We recommend developers to flash their devices using a Linux or Windows machine. Contact your Magic Leap customer service representative for any additional support.

## New Features  

- (Experimental) Map Quality Full Scale Visualization enabled in the Mapping Tool. This should assist developers trying to map a high quality Space.
- (Experimental) To enable the segmented dimmer functionality for the kali_enterprise_demo application, toggle the "Segmented Dimmer" in Settings under the “Display” menu.

:::caution

RendeDoc doesn't work with Lumin OS ML2 R3 (Sprint 11). Dirty Tile Mapping was activated in that firmware build and it affected RenderDoc functionality. Use Sprint 10 firmware if you need to use RenderDoc.

:::

## Known Issues  

- Enabling the segmented dimmer functionality may cause dimmer artifacts in some applications. Disable the toggle in Settings->Display->Dimmer if not using the kali_enterprise_demo.
- Display Brightness options in settings are non-operational.
- The Settings - Connected Devices options for USB shows up as Disabled. As a workaround, user can go to System->Developer Options -> Default USB Configuration
- Settings - Developers options and Notifications are not functional
- If the home button is pressed while the Fit and Eye Calibration application is running, it is possible that audio from the application can continue to be heard even though the application was put in the background.
- OAuth and Captive Portal windows are unable to display Date/Time picker and other widgets. This prevents users from creating accounts for OAuth and Captive Portal login flows.
- OAuth/Captive Portal: after taking a screenshot there is a loss of input focus and the user needs to press the bumper button for input focus to return.
- Controller may get stuck in bootloader mode while flashing from the wearpack and appear dead. If this happens - manually flash the controller from a PC.
- WebRTC app requests permission for "unknown action" first, before request for camera and microphone access. If the user denies this permission, allowing only camera and microphone access, the app will not work.
- WebRTC Kali App sometimes fails to reconnect ML2 users, sometimes crashes on disconnect/reconnect attempts. If this happens, close the WebRTC app from the Home menu, launch again, create another room and connect all users again.

