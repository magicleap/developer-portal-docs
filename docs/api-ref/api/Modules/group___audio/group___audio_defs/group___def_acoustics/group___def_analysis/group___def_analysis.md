---
title: Analysis
summary: analysis. 

---

# Analysis

**Module:** **[Audio](/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Acoustics](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_acoustics.md)**

ANALYSIS. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLAudioSpectralAnalysis](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLAudioSpectralAnalysis](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) | **[MLAudioSpectralAnalysis](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#struct-mlaudiospectralanalysis)**  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLAudioTraitAnalysisTarget](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget)** <br></br> { <br></br>[MLAudioTraitAnalysisTarget_AmbientSoundLevelDbfs](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget-ambientsoundleveldbfs),<br></br> [MLAudioTraitAnalysisTarget_UserVoicePresence](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget-uservoicepresence),<br></br> [MLAudioTraitAnalysisTarget_UserVoiceLevelDbfs](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget-uservoiceleveldbfs),<br></br> [MLAudioTraitAnalysisTarget_UserVoicePitch](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget-uservoicepitch),<br></br> [MLAudioTraitAnalysisTarget_Ensure32Bits](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLAudioSpectralAnalysisTarget](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget)** <br></br> { <br></br>[MLAudioSpectralAnalysisTarget_UserVoiceSpectrumMfcc](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget-uservoicespectrummfcc),<br></br> [MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumBark](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget-ambientsoundspectrumbark),<br></br> [MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumMel](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget-ambientsoundspectrummel),<br></br> [MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumThirdOctave](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget-ambientsoundspectrumthirdoctave),<br></br> [MLAudioSpectralAnalysisTarget_Ensure32Bits](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget-ensure32bits) = 0x7FFFFFFF<br></br>} |

## Enums Documentation

### MLAudioTraitAnalysisTarget {#enums-mlaudiotraitanalysistarget}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioTraitAnalysisTarget_AmbientSoundLevelDbfs | | Ambient Sound Level dBFS, a full scale sound level measurement of an ambient mic stream. |
| MLAudioTraitAnalysisTarget_UserVoicePresence | | Voice Presence, indicates absence (0) or presence (1) of voice in a voice mic stream. |
| MLAudioTraitAnalysisTarget_UserVoiceLevelDbfs | | Voice Level dBFS, a full scale sound level measurement of a voice mic stream. |
| MLAudioTraitAnalysisTarget_UserVoicePitch | | Voice Pitch, frequency in hertz of the voice in a voice mic stream. |
| MLAudioTraitAnalysisTarget_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Available trait analyses of an audio stream. 





-----------

### MLAudioSpectralAnalysisTarget {#enums-mlaudiospectralanalysistarget}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLAudioSpectralAnalysisTarget_UserVoiceSpectrumMfcc | | Voice Mel Frequency Cepstral Coefficients, spectral analysis of a voice mic stream. (typically used for lip-sync). |
| MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumBark | | Ambient Sound Spectrum Bark Scale, spectral analysis of ambient mic stream(s) using Bark scale. |
| MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumMel | | Ambient Sound Spectrum Mel Scale, spectral analysis of ambient mic stream(s) using Mel scale. |
| MLAudioSpectralAnalysisTarget_AmbientSoundSpectrumThirdOctave | | Ambient Sound Spectrum Third Octave Scale, spectral analysis of ambient mic stream(s) using Third Octave scale. |
| MLAudioSpectralAnalysisTarget_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Available frequency spectrum analyses of an audio stream. 





-----------


## Types Documentation

### MLAudioSpectralAnalysis {#struct-mlaudiospectralanalysis}

```cpp
typedef struct MLAudioSpectralAnalysis MLAudioSpectralAnalysis;
```


A representation of frequency spectrum energy over a window of time. 



[More Info](/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md)



-----------






