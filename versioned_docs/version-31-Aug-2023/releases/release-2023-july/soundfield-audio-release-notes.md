---
id: soundfield-audio-release-notes
title: Soundfield Audio Unity Plugin 3.4.0
sidebar_position: 6
date: 08/02/2023
---

## Release notes

- Unity Audio Mixer support: We now support the audio mixer in our plugin. The idea is to route audio from the AudioSource to a mixer group, add any FX you want and insert at the very end of the effects our MSA Mixer mixer plugin. This plugin sends the audio after processing back to the MLPointSource (which used to receive it directly from the AudioSource, but now it gets routed if you want through the mixer).

Note: Since the MSA mixer sends the audio back to the MLPointSource, no audio comes out of the group. This means if you add two MSA mixers, the second one does not receive audio.

Issues addressed in 3.4.0 from 3.3.3:

AAL-2456 - Fix potential acoustic model memory leak
AAL-2493 - Fix MSA mixer loses reference to source when disabled
AAL-2489 - Fix Dialog on non supported OSs
AAL-2484 - Fix MLDebugInfo crash when disabled
AAL-2437 - Fix tooltip missing on analysis MFCC checkbox
AAL-2441 - Fix for Voice Presence always zero
AAL-2490 - Update version to 3.4.0
AAL-2481 - Fixed omni hiding gizmos checkbox in MLPointSource editor
AAL-2408 - Added MSA mixer plugin to support Unity's audio mixer
