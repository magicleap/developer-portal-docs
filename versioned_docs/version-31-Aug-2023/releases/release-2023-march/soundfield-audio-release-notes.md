---
id: soundfield-audio-release-notes
title: Soundfield Audio Unity Plugin 3.3.0
sidebar_position: 6
date: 03/22/2022
---

**Soundfield Audio** is Magic Leap's proprietary solution for audio spatialization and room modeling. Audio spatialization is the processing of sounds so that they appear to come from defined locations in 3D space around the listener. Soundfield Audio is a Unity Game-Plugin NPM package, and can be installed with Package Manager in Unity.

## General Notes

- Automatic spatial audio:
  - Starting with 3.3.0 you may add spatial audio to your project just by installing and selecting the Soundfield plugin. You no longer need to add components, though you could still add them for extra features. The default behavior for point sources and listener may fit a wide range of use cases for spatial audio.
- New look for gizmo rendering

Breaking change in 3.2.3 (previous version): OSOffload has been moved from the MLListener component to our global scriptable object MSAGlobalScriptableObject.

If you try but cannot change the value on the MSAGlobalScriptableObject (read only), you may have an older copy of the scriptable object. Please delete it and it will be created again with read/write access (the plugin creates it with default values if not present).

Also, if you need programmatic access to find out if the spatial audio is working in offload mode or in app mode, please use the new API call GetMode()

Example:
using MagicLeap.Soundfield;

```
MLAudioResult mLAudioResult = Plugin.GetMode(out PluginMode mode);
if (mode == PluginMode.OsOffload)
{
Debug.Log("We are in OSOffload mode");
}
```

## Issues addressed in 3.3.0 from 3.2.3

- AAL-2480 - Fixed MLRuntimeGizmoManager compile error
- AAL-2472 - Fixed Gizmo to point to the correct direction when created
- AAL-2473 - Hide Gizmo components from the add component dropdown menu
- AAL-2474 - Control gizmo's visibility from the EnableGizmo option and MLRuntimeGizmoManager
- AAL-2471 - Updated version to 3.3.0
- AAL-2316 - Replaced GL line with LineRenderer and refactor MLPointSource and MLListener Gizmo code
- AAL-2425 - Spatial audio works automatically by default
- AAL-2427 - Removed MLPointSource from Analysis sample, not needed anymore
- AAL-2442 - Reduced analysis queue to avoid latency/tail on measurements
- AAL-2445 - Fixed IsInitialized() method returning incorrect values resulting in incorrect engine startup procedure

