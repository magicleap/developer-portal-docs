---
id: soundfield-audio-release-notes
title: 3.1.2 - Sound Field Audio
sidebar_position: 2
date: 05/10/2022
---

**Soundfield Audio** is the term given to Magic Leap's proprietary solution for audio spatialization and room modeling. Colloquially,  **Soundfield Audio**  is also referred to as  **MSA**, short for Magic Leap Soundfield Audio. Audio spatialization is the processing of sounds so that they appear to come from defined locations in 3D space around the listener. MSA is a Unity Game-Plugin NPM package, install it with Package Manager in Unity.

## **Note**

- Due to some problems with the ambisonic audiosource settings, you should not check the "play on awake" check box on the ambisonic source. The MLAmbisonicSource will start it automatically for you. If you don't want to play it automatically you could always add a script with `audiosource.stop()` but for now the default is play on awake without the checkbox selected.

## **Change List**

- AAL-2118 - play on awake bug for ambisonics
- AAL-2108 - Removed "Is Head Relative" property from the ambisonic source component and stopped passing the listener transform in the native plugin
- AAL-2068 - Make MLListener Proxy component available at the correct menu location
- AAL-2101 - Check ambi plugin is selected at start up and added example for ambisonic
- AAL-2111 - Fixed audio corruption when playing ambisonic and non-ambisonic sources
- AAL-2102 - Set obstruction factor to 1.0f when MLListener raycasts linecast is true
- AAL-2069 - MLRuntimeGizmoManager now renders gizmos more consistently
- AAL-2068 - Rename MLListenerSpringBoard component to MLListenerProxy and made it available in the hierarchy menu
- AAL-2055 - Breaking API rename changes
- AAL-2084 - Enable Ambisonics plugin and audio source component
- AAL-2056 - Reset MLListener component properties on constructor

