---
title: Audio
summary: apis for the audio service. 

---

# Audio

APIs for the Audio Service.  [More...](#detailed-description)

## Modules

| Name           |
| -------------- |
| **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)**  |

## Detailed Description

APIs for the Audio Service. 


The audio capture capabilities of the Audio Service include capturing:



* Mono mic signal focused on the user's voice (voice comm).


* Stereo mic signal of the ambient environment (world capture).


* Stereo mix of the audio output currently being rendered (virtual capture).


* Mix of voice comm and world capture (mixed capture).

To initiate a capture input, the client allocates an 'input' using one of the create functions, and then starts the stream of audio input. The audio input streaming can be accomplished either by polling or callbacks (callbacks are recommended).

The audio render capabilities of the Audio Service include rendering: (1) an audio file fully loaded into memory (loaded file); (2) an audio file streamed from flash memory to main memory in chunks (streamed file); and (3) a buffered stream of audio output (output stream). To initiate a render output, the client allocates a 'sound' using one of the create functions, and then calls 'start' to play the audio. For the first two rendering options, the file to be played can either be passed to the create function, or it can be pre-loaded as a 'resource' so that it can be loaded once and then used by multiple sounds that get created and destroyed. For audio output streams, the audio input streaming can be accomplished either by polling or callbacks (callbacks are recommended). For sounds where 3D audio spatialization is desired, the client must enable 'spatial sound' for that sound and then set its position (and if desired, other spatial sound params can be adjusted for more detailed control). 




**Shared Object:**
  * audio.magicleap*




-----------







