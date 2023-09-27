---
title: Control
summary: control. 

---

# Control

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)**

CONTROL. 

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLAudioState](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate)** <br></br> { <br></br>[MLAudioState_Stopped](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate-stopped),<br></br> [MLAudioState_Playing](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate-playing),<br></br> [MLAudioState_Paused](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate-paused),<br></br> [MLAudioState_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiostate-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioSoundEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent)** <br></br> { <br></br>[MLAudioSoundEvent_End](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent-end),<br></br> [MLAudioSoundEvent_Loop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent-loop),<br></br> [MLAudioSoundEvent_MutedBySystem](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent-mutedbysystem),<br></br> [MLAudioSoundEvent_UnmutedBySystem](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent-unmutedbysystem),<br></br> [MLAudioSoundEvent_DuckedBySystem](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent-duckedbysystem),<br></br> [MLAudioSoundEvent_UnduckedBySystem](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent-unduckedbysystem),<br></br> [MLAudioSoundEvent_ResourceDestroyed](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent-resourcedestroyed),<br></br> [MLAudioSoundEvent_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiosoundevent-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioMediaEvent](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiomediaevent)** <br></br> { <br></br>[MLAudioMediaEvent_Play](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiomediaevent-play),<br></br> [MLAudioMediaEvent_Stop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiomediaevent-stop),<br></br> [MLAudioMediaEvent_Pause](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiomediaevent-pause),<br></br> [MLAudioMediaEvent_NextTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiomediaevent-nexttrack),<br></br> [MLAudioMediaEvent_PrevTrack](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiomediaevent-prevtrack),<br></br> [MLAudioMediaEvent_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_control.md#enums-mlaudiomediaevent-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Enums Documentation

### MLAudioState {#enums-mlaudiostate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioState_Stopped | | Stopped, can be started. |
| MLAudioState_Playing | | Playing, can be stopped or paused. |
| MLAudioState_Paused | | Paused, can be resumed or re-started. |
| MLAudioState_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Possible playback states for sounds and inputs. 





-----------

### MLAudioSoundEvent {#enums-mlaudiosoundevent}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioSoundEvent_End | | A sound output has reached the end and is stopping. |
| MLAudioSoundEvent_Loop | | A sound output has reached the end and is is looping. |
| MLAudioSoundEvent_MutedBySystem | | A sound output has been selectively muted due to system conditions. |
| MLAudioSoundEvent_UnmutedBySystem | | A previously muted sound output has been unmuted due to system conditions. |
| MLAudioSoundEvent_DuckedBySystem | | A sound output has been selectively ducked due to system conditions. |
| MLAudioSoundEvent_UnduckedBySystem | | A previously ducked sound output has been unducked due to system conditions. |
| MLAudioSoundEvent_ResourceDestroyed | | The resource used by a sound output has been destroyed. |
| MLAudioSoundEvent_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Possible events for individual sound outputs. 





-----------

### MLAudioMediaEvent {#enums-mlaudiomediaevent}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioMediaEvent_Play | | Indicates a user command to play. |
| MLAudioMediaEvent_Stop | | Indicates a user command to stop. |
| MLAudioMediaEvent_Pause | | Indicates a user command to pause. |
| MLAudioMediaEvent_NextTrack | | Indicates a user command to go to next track. |
| MLAudioMediaEvent_PrevTrack | | Indicates a user command to go to previous track. |
| MLAudioMediaEvent_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Possible media control events initiated by the user. 





-----------








