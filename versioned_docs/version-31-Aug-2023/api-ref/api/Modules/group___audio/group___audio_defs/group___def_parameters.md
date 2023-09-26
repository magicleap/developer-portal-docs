---
title: Parameters
summary: parameters. 

---

# Parameters

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)**

PARAMETERS. 

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLAudioOutputDevice](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice)** <br></br> { <br></br>[MLAudioOutputDevice_Wearable](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice-wearable),<br></br> [MLAudioOutputDevice_USB](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice-usb),<br></br> [MLAudioOutputDevice_Bluetooth](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice-bluetooth),<br></br> [MLAudioOutputDevice_HearingAid](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice-hearingaid),<br></br> [MLAudioOutputDevice_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_parameters.md#enums-mlaudiooutputdevice-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Enums Documentation

### MLAudioOutputDevice {#enums-mlaudiooutputdevice}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioOutputDevice_Wearable | | Built-in speakers in the wearable. |
| MLAudioOutputDevice_USB | | USB audio from the beltpack. |
| MLAudioOutputDevice_Bluetooth | | A2DP audio via Bluetooth. |
| MLAudioOutputDevice_HearingAid | | Hearing Aid audio via Bluetooth. |
| MLAudioOutputDevice_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




The currently active output device. 





-----------








