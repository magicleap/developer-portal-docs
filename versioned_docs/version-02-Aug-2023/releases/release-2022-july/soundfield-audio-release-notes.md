---
id: soundfield-audio-release-notes
title: 3.1.4 - Sound Field Audio
sidebar_position: 2
date: 07/13/2022
---

# 3.1.4 - Sound Field Audio

**Soundfield Audio** is the term given to Magic Leap's proprietary solution for audio spatialization and room modeling. Colloquially,  **Soundfield Audio**  is also referred to as  **MSA**, short for Magic Leap Soundfield Audio. Audio spatialization is the processing of sounds so that they appear to come from defined locations in 3D space around the listener. MSA is a Unity Game-Plugin NPM package, install it with Package Manager in Unity.

## **Change List**

- Render GL.Lines at the correct position
- Added programmatic access to NPM package version number
- Removed FindObjectOfType calls and log if we are trying to us MLDebugInfo if its not present in the scene
- Fix to GL.Line and use endContextRendering callback to render the Gizmos
- Update build scripts for release/profiler
- Fix UI for Acoustic Mapping

