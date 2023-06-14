---
id: soundfield-audio-release-notes
title: 3.1.1 - Sound Field Audio
sidebar_position: 2
date: 04/05/2022
---

**Soundfield Audio** is the term given to Magic Leap's proprietary solution for audio spatialization and room modeling. Colloquially,  **Soundfield Audio**  is also referred to as  **MSA**, short for Magic Leap Soundfield Audio. Audio spatialization is the processing of sounds so that they appear to come from defined locations in 3D space around the listener. MSA is a Unity Game-Plugin NPM package, install it with Package Manager in Unity.

-   This is a BETA version of the plugin, functionality should be mostly complete, but there are a few well known bugs and small issues that are being fixed for the next release.
-   Includes 2 in progress examples:
    -   MSA Demo uses a MLPointSource and one MLListener, with a wall in between to showcase spatial audio and obstructions.
    -   AnalysisTest uses a generic human model that opens the mouth based on detection of speech
NOTE: Late changes may cause example scenes to be out of sync, a component reset on all present ML components (or prefabs containing them) should resolve this.-   Console warnings: There are a few warnings that will be removed and are harmless, a very common one is a warning about MLPointSource disabled but AudioSource is enabled, when you didn't change anything, please ignore warnings like this for now, we are working on a fix.
-   Technical documentation is in progress: API, ... but not yet included
-   There is a changelog at Packages/com.magicleap.soundfield/CHANGELOG.md
-   If you get this package directly (not from NPM or Nexus server) you will need to add the package from disk in the package manager. Don't add it to your assets!
-   Check for null parent missing in collider search (BUG)
-   Obstructions raycasts collide with MLPointSource Parent colliders (BUG)
-   Update examples for NPM package

## **Known Issues**

-   MSA Analysis is not working (AnalysisTest scene is not reacting to human voice)

