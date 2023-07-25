---
title: WebXR
date: 07/18/2023
sidebar_position: 12
tags: [Features]
keywords: [Features]
---

MagicLeap now offers full support for the WebXR Device API. It comes already installed on your Magic Leap device and should work with your standard WebXR applications out of the box. All features described in the WebXR specification here - https://www.w3.org/TR/webxr/ are supported.

:::info WebXR Viewer has been replaced with the System Web Browser

Starting on Magic Leap OS version 1.3.0-dev1, the WebXR viewer has been replaced with the more full featured system web browser. This document has been updated to reflect those changes.

:::

## What's Supported, What's Not

The following WebXR specifications and extensions are supported on MagicLeap:
- WebXR core/device API 
- WebXR reference spaces (view, local, local-floor, bounded, unbounded)
- HandTracking
- Input Controller
- Segmented Dimmer through **immersive-vr** and **immersive-ar** during requestSession API in WebXR. If you use **immersive-vr**, it will darken the real world to create a VR experience. **immersive-ar** will show the real world along with the virtual content.

Currently, Magic Leap does not support WebXR Anchor, WebXR Layers, and WebXR Hittest modules.

You can launch features from the command line like this:

```shell
adb shell am start -n
com.magicleap.helio_webxrviewer/com.magicleap.helio.WebXRViewerActivity
https://immersiveweb.dev
```

## Pinning Web Apps

MagicLeap does not support pinning web applications from the browser to the home menu. However, any APK (Android Package Kit) which can load a URL on startup can be used. Third-party developers using WebXR can launch their web content using custom tabs and trusted web activities. When the User launches the APK, it opens the URL in a browser.

NOTE: This is a browser/system feature, not a WebXR feature.


## Start with QR Code

You can launch your application through a QR code. When someone accesses the QR code, the MagicLeap browser will open with the URL provided in the QR code.

NOTE: This is a browser/system feature, not a WebXR feature.


## Permissions 

MagicLeap handles permissions for you. When a user navigates to your WebXR experience webpage, they'll be asked to grant permission to allow WebXR to start immersive mode. For WebXR content, you must always have the permission prompt. This is true for all WebXR experiences.

NOTE: This is a browser/system feature, not a WebXR feature.


## Quit Web XR

Users can quit a WebXR immersive experience by pressing the menu button on the controller at any time. The immersive session will close, and the user will be able to see web contents in standard browser mode(non immersive).

## Samples

If you’d like to try the WebXR experience to see how it appears in MagicLeap, there are many good WebXR resources available:
- https://immersive-web.github.io/webxr-samples/
- https://hubs.mozilla.com/labs/
- https://avida.cs.wright.edu/WebXR/webxr-samples/

