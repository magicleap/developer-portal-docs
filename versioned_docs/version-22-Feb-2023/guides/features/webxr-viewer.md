---
title: WebXR Viewer
date: 05/02/2022
sidebar_position: 12
tags: [Features]
keywords: [Features]
---

Magic Leap's WebXR Viewer application allows developers to test their WebXR applications. Note, this application is still being developed and some features may not be compatible with the current release. Additionally, since the feature has been released in *preview* , the WebXR viewer is not visible from the home menu. This section includes instructions on how to launch the WebXR Viewer and how to manage it's permissions.

## Start WebXR Viewer

The following commands should be used to start a WebXR experience.

```shell
adb shell am start -n com.magicleap.helio_webxrviewer/.WebXRViewerActivity https://immersiveweb.dev
```

## Permissions

This section includes information on how to request or reset permissions:

To RESET VR permission request:

```shell
adb shell am start -e settings.vr ASK -n com.magicleap.helio_webxrviewer/.WebXRViewerActivity https://immersiveweb.dev
```

:::caution
Clearing Site level permissions for WebXR is not functional, ie. this:

```shell
adb shell am start -e settings.ar ASK -n com.magicleap.helio_webxrviewer/.WebXRViewerActivity https://immersiveweb.dev
```

**doesn’t** work.
:::

There are several permissions which we can reset via API:

- `-e settings.mic ASK`  
- `-e settings.camera ASK`  
- `-e settings.vr ASK`  
- `-e settings.ar ASK`  

There are several alternatives for the permissions:

- `ASK`  
- `ALLOW`  
- `BLOCK`  
- `RESET` (set permission to default which is `ASK`)

## Bugs / Limitations

The following WebXR samples are currently not supported :

- Anchor
- Hit
- Room Scale

