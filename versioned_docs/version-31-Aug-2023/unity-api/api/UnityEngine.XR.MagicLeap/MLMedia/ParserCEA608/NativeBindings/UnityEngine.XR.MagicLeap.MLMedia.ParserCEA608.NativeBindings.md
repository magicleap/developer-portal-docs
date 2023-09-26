---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCCParserCreate {#mlresultcode-mlmediaccparsercreate}

```csharp
public MLResult.Code MLMediaCCParserCreate(
    out ulong parserHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |parserHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCCParserDestroy {#mlresultcode-mlmediaccparserdestroy}

```csharp
public MLResult.Code MLMediaCCParserDestroy(
    ulong parserHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCCParserGetDisplayableEx {#mlresultcode-mlmediaccparsergetdisplayableex}

```csharp
public MLResult.Code MLMediaCCParserGetDisplayableEx(
    ulong parserHandle,
    IntPtr subtitleData,
    int subtitleDataSize,
    ref IntPtr captionSegment
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHandle||
| IntPtr |subtitleData||
| int |subtitleDataSize||
| ref IntPtr |captionSegment||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCCParserParse {#mlresultcode-mlmediaccparserparse}

```csharp
public MLResult.Code MLMediaCCParserParse(
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

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaCCParserSetDisplayChangedCallback {#mlresultcode-mlmediaccparsersetdisplaychangedcallback}

```csharp
public MLResult.Code MLMediaCCParserSetDisplayChangedCallback(
    ulong parserHandle,
    OnDisplayChangedDelegate calback,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHandle||
| OnDisplayChangedDelegate |calback||
| IntPtr |data||






-----------

### void OnDisplayChanged {#void-ondisplaychanged}

Callback for the OnDisplayChanged event. 

```csharp
public static void OnDisplayChanged(
    ulong parserHande,
    ref CaptionSegmentEx segment,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHande||
| ref [CaptionSegmentEx](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA608/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA608.NativeBindings.CaptionSegmentEx.md) |segment||
| IntPtr |data||






-----------

### delegate void OnDisplayChangedDelegate {#delegate-void-ondisplaychangeddelegate}

```csharp
public delegate void OnDisplayChangedDelegate(
    ulong parserHande,
    ref CaptionSegmentEx segment,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |parserHande||
| ref [CaptionSegmentEx](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/ParserCEA608/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.ParserCEA608.NativeBindings.CaptionSegmentEx.md) |segment||
| IntPtr |data||






-----------


