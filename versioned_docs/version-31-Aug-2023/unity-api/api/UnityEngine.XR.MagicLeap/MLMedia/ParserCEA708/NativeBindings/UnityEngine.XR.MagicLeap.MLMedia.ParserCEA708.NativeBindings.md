---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCea708ParserCreate {#mlresultcode-mlmediacea708parsercreate}

```csharp
public MLResult.Code MLMediaCea708ParserCreate(
    out ulong parserHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |parserHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCea708ParserDestroy {#mlresultcode-mlmediacea708parserdestroy}

```csharp
public MLResult.Code MLMediaCea708ParserDestroy(
    ulong parserHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCea708ParserParse {#mlresultcode-mlmediacea708parserparse}

```csharp
public MLResult.Code MLMediaCea708ParserParse(
    ulong parserHandle,
    IntPtr subtitleData,
    uint subtitleDataSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHandle||
| IntPtr |subtitleData||
| uint |subtitleDataSize||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCea708ParserSetEmitEventCallback {#mlresultcode-mlmediacea708parsersetemiteventcallback}

```csharp
public MLResult.Code MLMediaCea708ParserSetEmitEventCallback(
    ulong parserHandle,
    OnEmitEventDelegate calback,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHandle||
| OnEmitEventDelegate |calback||
| IntPtr |data||






-----------

### void OnEmitEvent {#void-onemitevent}

Callback for the OnDisplayChanged event. 

```csharp
public static void OnEmitEvent(
    ulong parserHandle,
    ref Cea708CaptionEvent captionEvent,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHandle||
| ref [Cea708CaptionEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionEvent.md) |captionEvent|CEA708 Caption Event. |
| IntPtr |data||






-----------

### delegate void OnEmitEventDelegate {#delegate-void-onemiteventdelegate}

```csharp
public delegate void OnEmitEventDelegate(
    ulong parserHandle,
    ref Cea708CaptionEvent captionEvent,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHandle||
| ref [Cea708CaptionEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA708/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA708.NativeBindings.Cea708CaptionEvent.md) |captionEvent|CEA708 Caption Event. |
| IntPtr |data||






-----------


