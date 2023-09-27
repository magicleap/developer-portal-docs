---
id: soundfield-audio-release-notes
title: Soundfield Audio Unity Plugin 3.4.0
sidebar_position: 6
date: 04/24/2023
---

**Soundfield Audio** is Magic Leap's proprietary solution for audio spatialization and room modeling. Audio spatialization is the processing of sounds so that they appear to come from defined locations in 3D space around the listener. Soundfield Audio is a Unity Game-Plugin NPM package, and can be installed with Package Manager in Unity.

## General Notes

- Unity Audio Mixer support: Magic Leap 2 now supports the audio mixer in the Soundfield Audio plugin. The idea is to route audio from the AudioSource to a mixer group, add any desired FX and insert the Soundfield Audio plugin at the very end of the effects. This plugin sends the audio after processing back to the MLPointSource (which previously received it directly from the AudioSource, but now gets routed through the mixer if chosen).
- Note: Soundfield Audio mixer sends the audio back so no audio comes out of the group. If you add two Soundfield Audio mixers, the second one will not receive audio.

## Issues addressed in 3.3.0 from 3.2.3

- AAL-2456 - Fix potential acoustic model memory leak
- AAL-2493 - Fix Soundfield Audio mixer loses reference to source when disabled
- AAL-2489 - Fix Dialog on non supported OSs
- AAL-2484 - Fix MLDebugInfo crash when disabled
- AAL-2437 - Fix tooltip missing on analysis MFCC checkbox
- AAL-2441 - Fix for Voice Presence always zero
- AAL-2490 - Update version to 3.4.0
- AAL-2481 - Fixed omni hiding gizmos checkbox in MLPointSource editor
- AAL-2408 - Added Soundfield Audio mixer plugin to support Unity's audio mixer

