---
title: 3.2.0 - Sound Field Audio
sidebar_position: 2
date: 10/03/2022
---

# 3.2.0 - Sound Field Audio

**Soundfield Audio** is the term given to Magic Leap's proprietary solution for audio spatialization and room modeling. Colloquially,  **Soundfield Audio**  is also referred to as  **MSA**, short for Magic Leap Soundfield Audio. Audio spatialization is the processing of sounds so that they appear to come from defined locations in 3D space around the listener. MSA is a Unity Game-Plugin NPM package, install it with Package Manager in Unity.

In order to work around some Unity issues with audio settings, for now we recommend:

- Make sure you don't check the "MLAudio" check box in Magic Leap XR settings
- Sample rate, force it to 48000
- Buffer size use Good Latency

