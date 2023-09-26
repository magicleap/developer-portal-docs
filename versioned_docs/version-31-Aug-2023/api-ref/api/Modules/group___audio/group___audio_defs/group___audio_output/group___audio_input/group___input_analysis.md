---
title: Analysis

---

# Analysis

**Module:** **[Audio](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio.md)** **/** **[Audio Definitions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_defs.md)** **/** **[Audio Output](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_output.md)** **/** **[Audio Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___audio_input.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioBeginTraitAnalysisFromMicCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiobegintraitanalysisfrommiccapture)**([MLAudioTraitAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget) target, [MLAudioTraitAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiotraitanalysiscallback) callback, void * callback_context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates a new analysis input for the specified target.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetTraitAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiogettraitanalysis)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, float * out_value)<br></br>Returns the current value of the trait analysis associated with the specified handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioEndTraitAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudioendtraitanalysis)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Stops a previously started trait analysis.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioBeginSpectralAnalysisFromMicCapture](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiobeginspectralanalysisfrommiccapture)**([MLAudioSpectralAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget) target, [MLAudioSpectralAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiospectralanalysiscallback) callback, void * callback_context, [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Starts a new spectral analysis that provides frequency spectrum energy derived from mic signals.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioGetSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudiogetspectralanalysis)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) * out_values)<br></br>Returns the current value of the spectral analysis associated with the specified handle.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLAudioEndSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___audio_output/group___audio_input/group___input_analysis.md#mlresult-mlaudioendspectralanalysis)**([MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Stops a previously started spectral analysis.  |

## Detailed Description


ANALYSIS. 





-----------


## Functions Documentation

### MLAudioBeginTraitAnalysisFromMicCapture {#mlresult-mlaudiobegintraitanalysisfrommiccapture}

```cpp
MLResult MLAudioBeginTraitAnalysisFromMicCapture(
    MLAudioTraitAnalysisTarget target,
    MLAudioTraitAnalysisCallback callback,
    void * callback_context,
    MLHandle * out_handle
)
```

Creates a new analysis input for the specified target. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioTraitAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiotraitanalysistarget) |target|MLAudioTraitAnalysisTarget specifies the analysis target. |
| [MLAudioTraitAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiotraitanalysiscallback) |callback|MLAudioTraitAnalysisCallback function pointer. |
| void * |callback_context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used to identify this analysis in subsequent calls.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set control frequencies. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Creates a trait analysis, initializes its connection to the device microphones as the audio data source, and returns a handle in the 'out_handle' argument. The 'target' argument specifies the type of trait analysis, which implies the type of audio content to be analyzed. Trait analysis results are returned as a single float, whose meaning is context dependent based on the target. Results may be acquired either on a polling basis by calling MLAudioGetTraitAnalysis, or via a callback set by the optional 'callback' argument of this function.




**API Level:**
  * 20




-----------

### MLAudioGetTraitAnalysis {#mlresult-mlaudiogettraitanalysis}

```cpp
MLResult MLAudioGetTraitAnalysis(
    MLHandle handle,
    float * out_value
)
```

Returns the current value of the trait analysis associated with the specified handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the analysis. |
| float * |out_value|Current value of analysis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned control frequencies. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_NotImpelmented|return control frequencies because feature has not been implemented yet.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLAudioEndTraitAnalysis {#mlresult-mlaudioendtraitanalysis}

```cpp
MLResult MLAudioEndTraitAnalysis(
    MLHandle handle
)
```

Stops a previously started trait analysis. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the analysis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned empty buffe for writing more stream data. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Stops the analysis associated with the specified handle.




**API Level:**
  * 20




-----------

### MLAudioBeginSpectralAnalysisFromMicCapture {#mlresult-mlaudiobeginspectralanalysisfrommiccapture}

```cpp
MLResult MLAudioBeginSpectralAnalysisFromMicCapture(
    MLAudioSpectralAnalysisTarget target,
    MLAudioSpectralAnalysisCallback callback,
    void * callback_context,
    MLHandle * out_handle
)
```

Starts a new spectral analysis that provides frequency spectrum energy derived from mic signals. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLAudioSpectralAnalysisTarget](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/group___def_analysis.md#enums-mlaudiospectralanalysistarget) |target|MLAudioSpectralAnalysisTarget specifies the analysis target. |
| [MLAudioSpectralAnalysisCallback](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_callbacks.md#void-mlaudiospectralanalysiscallback) |callback|MLAudioSpectralAnalysisCallback function pointer. |
| void * |callback_context|Generic data pointer passed back to callback. |
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|MLHandle used to identify this analysis in subsequent calls.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|Successfully released buffer. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Creates a spectral analysis, initializes its connection to the device microphones as the audio data source, and returns a handle in the 'out_handle' argument. The 'target' argument specifies the type of spectral analysis, which implies the type of audio content to be analyzed. Spectral analysis results are returned in the [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) struct, which contains a time window of spectral analysis values. Results may be acquired either on a polling basis by calling MLAudioGetSpectralAnalysis, or via a callback set by the optional 'callback' argument of this function, triggered whenever new values are available. Cleanup of [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) passed in the optional callback is handled by the ml_audio library; the caller is not responsible for deallocating memory if the callback is used.




**API Level:**
  * 20




-----------

### MLAudioGetSpectralAnalysis {#mlresult-mlaudiogetspectralanalysis}

```cpp
MLResult MLAudioGetSpectralAnalysis(
    MLHandle handle,
    MLAudioSpectralAnalysis * out_values
)
```

Returns the current value of the spectral analysis associated with the specified handle. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the analysis. |
| [MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) * |out_values|[MLAudioSpectralAnalysis](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___audio/group___audio_defs/group___def_acoustics/group___def_analysis/struct_m_l_audio_spectral_analysis.md) containing the current values of a spectral analysis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully returned latency for sound input. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLAudioResult_OperationUnavailable|Failed because operation is unavailable.|
**Required Permissions**:

  * None 


Allocates memory at out_values->values based on the MLAudioSpectralAnalysisTarget associated with the specified handle. The caller is responsible for deallocating this memory after each call to MLAudioGetSpectralAnalysis.




**API Level:**
  * 20




-----------

### MLAudioEndSpectralAnalysis {#mlresult-mlaudioendspectralanalysis}

```cpp
MLResult MLAudioEndSpectralAnalysis(
    MLHandle handle
)
```

Stops a previously started spectral analysis. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|MLHandle used to identify the analysis.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_OK|Successfully stopped spectral analysis. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed due to an invalid parameter. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed due to an unknown error.|
**Required Permissions**:

  * None 


Stops the analysis associated with the specified handle.




**API Level:**
  * 20




-----------






