---
id: api-status
title: Migrating from ML1
sidebar_position: 6
date: 06/27/2022
tags: [Unity, API Status, Features]
keywords: [Unity, API Status, Features]
---

This section includes useful information about API changes when migrating Magic Leap 1 applications to Magic Leap 2.

## APIs not planned for Magic Leap 2

The following APIs that were available for Magic Leap 1 will not be available for Magic Leap 2.

### Replaced with Android Java SDK

- MLAppIdentifier
- MLDispatch
- MLIdentity
- MLLifecycle
- MLLocale
- MLSecureStorage
- MLPrivileges
- MLIMU
- MLBattery
- Light Sensor

### Replaced with Another C-API

- PCF (Replaced with Spatial Anchors)
- ArUco marker & barcode scanner (Combined into a single marker tracker API)

### Unsupported

- MLContacts
- MLConnections
- MLAppConnect
- MLMediaPlayer Sharing (only the sharing APIs will be removed, the general media player will still be supported)
- MLController LED
- Music Service

## Temporarily unavailable APIs

Regardless of the status of platform support for the following API, they're currently disabled in the Magic Leap 2 unity editor/package

- Unity Video Player

## Migration Tips

### Universal Render Pipeline

Although Unity's built-in render pipeline currently works on this engine, it is not planned to be officially supported on Magic Leap 2. Therefore, if you plan to port any of your existing projects to Magic Leap 2, we recommend that you start early by porting to URP. URP does work on the Magic Leap 1, so testing should be easy. You can use the following links as reference:

<https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@8.2/manual/InstallURPIntoAProject.html>

<https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@8.2/manual/upgrading-your-shaders.html>

<https://on.unity.com/3qieGLT>

### Vulkan Rendering

Unity on Magic Leap 2 only supports Vulkan rendering. If you are using any GLSL shaders in your project or are using any native rendering plugins that don't support Vulkan, you will need to configure them to support the Vulkan renderer.

## Next Steps

import Link from '@docusaurus/Link';

<h3><Link to="/docs/guides/third-party/mrtk/mrtk-setup"> MRTK for Magic Leap</Link> </h3>

Developers can quickly build or upgrade applications using Magic Leap's MRTK support package. See the MRTK Magic Leap guide to learn how to use the MRTK in your Magic Leap project.

<h3><Link to="/docs/guides/unity/sdk-example-scenes/sdk-install-setup"> Unity Examples Project</Link> </h3>

After successfully creating a new application, check out the pre-configured Magic Leap Unity Examples Project to see some of Magic Leap's unique platform features.

