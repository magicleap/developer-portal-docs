---
title: MLMediaFormat
summary: apis for creating and retrieving media format information. 

---

# MLMediaFormat



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


APIs for creating and retrieving media format information.   





## Public Fields

### Handle {#ulong-handle}

Handle for the underlying unmanaged object. 

```csharp

public ulong Handle { get; set; }

```






-----------

## Public Methods

### [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) CreateAudio {#mlmediaformat-createaudio}

Create a audio format object. 

```csharp
public static MLMediaFormat CreateAudio(
    string mimeType,
    int sampleRate,
    int channelCount
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |mimeType|Mime type of the content|
| int |sampleRate|Sample rate of the content|
| int |channelCount|Number of audio channels|






**Returns**: An [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) object if successful, null otherwise



-----------

### [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) CreateCopy {#mlmediaformat-createcopy}

Create a copy of the format handle provided. 

```csharp
public static MLMediaFormat CreateCopy(
    MLMediaFormat format
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) |format|[MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) object to copy|


**Details**

This can be particularly useful to persist the media format handle/object that was received through the callbacks(as life cycle of those media format objects are with in the callback context only). The API call to make a copy ensures that the copied object exists until released by the app. 





**Returns**: An [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) object if successful, null otherwise



-----------

### [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) CreateEmpty {#mlmediaformat-createempty}

Create an empty format object. 

```csharp
public static MLMediaFormat CreateEmpty()
```






**Returns**: An [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) object if successful, null otherwise



-----------

### [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) CreateSubtitle {#mlmediaformat-createsubtitle}

Create a subtitle format object. 

```csharp
public static MLMediaFormat CreateSubtitle(
    string mimeType,
    string language
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |mimeType|Mime type of the content|
| string |language|Language of the content, using either ISO 639-1 or 639-2/T codes. Specify null or "und" if language information is only included in the content.|






**Returns**: An [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) object if successful, null otherwise



-----------

### [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) CreateVideo {#mlmediaformat-createvideo}

Create a video format object. 

```csharp
public static MLMediaFormat CreateVideo(
    string mimeType,
    int width,
    int height
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |mimeType|Mime type of the content|
| int |width|Width of the content in pixels|
| int |height|Height of the content in pixels|






**Returns**: An [MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) object if successful, null otherwise



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetValue {#mlresult-getvalue}

Obtain the value of an integer key. 

```csharp
public MLResult GetValue(
    string keyName,
    out int value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to get the value for|
| out int |value|Out param to get the value in|






**Returns**: MLResult.Result.Ok if value was obtained successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetValue {#mlresult-getvalue}

Obtain the value of a long key. 

```csharp
public MLResult GetValue(
    string keyName,
    out long value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to get the value for|
| out long |value|Out param to get the value in|






**Returns**: MLResult.Result.Ok if value was obtained successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetValue {#mlresult-getvalue}

Obtain the value of a float key. 

```csharp
public MLResult GetValue(
    string keyName,
    out float value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to get the value for|
| out float |value|Out param to get the value in|






**Returns**: MLResult.Result.Ok if value was obtained successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetValue {#mlresult-getvalue}

Obtain the value of a string key. 

```csharp
public MLResult GetValue(
    string keyName,
    out string value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to get the value for|
| out string |value|Out param to get the value in|






**Returns**: MLResult.Result.Ok if value was obtained successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetValue {#mlresult-getvalue}

Obtain the value of a byte buffer key. 

```csharp
public MLResult GetValue(
    string keyName,
    out byte [] value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to get the value for|
| out byte [] |value|Out param to get the value in|






**Returns**: MLResult.Result.Ok if value was obtained successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) GetValue {#mlresult-getvalue}

Obtain the value of an unsigned long key. 

```csharp
public MLResult GetValue(
    string keyName,
    out ulong size
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to get the value for|
| out ulong |value|Out param to get the value in|






**Returns**: MLResult.Result.Ok if value was obtained successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetValue {#mlresult-setvalue}

Set the value of an integer key. 

```csharp
public MLResult SetValue(
    string keyName,
    int value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to set the value for|
| int |value|Value to set|






**Returns**: MLResult.Result.Ok if value was set successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetValue {#mlresult-setvalue}

Set the value of a long key. 

```csharp
public MLResult SetValue(
    string keyName,
    long value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to set the value for|
| long |value|Value to set|






**Returns**: MLResult.Result.Ok if value was set successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetValue {#mlresult-setvalue}

Set the value of a float key. 

```csharp
public MLResult SetValue(
    string keyName,
    float value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to set the value for|
| float |value|Value to set|






**Returns**: MLResult.Result.Ok if value was set successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetValue {#mlresult-setvalue}

Set the value of a string key. 

```csharp
public MLResult SetValue(
    string keyName,
    string value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to set the value for|
| string |value|Value to set|






**Returns**: MLResult.Result.Ok if value was set successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetValue {#mlresult-setvalue}

Set the value of a byte buffer key. 

```csharp
public MLResult SetValue(
    string keyName,
    byte [] value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to set the value for|
| byte [] |value|Value to set|






**Returns**: MLResult.Result.Ok if value was set successfully



-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetValue {#mlresult-setvalue}

Set the value of an unsigned long key. 

```csharp
public MLResult SetValue(
    string keyName,
    ulong size
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |keyName|[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md) name to set the value for|
| ulong |value|Value to set|






**Returns**: MLResult.Result.Ok if value was set successfully



-----------

### override string ToString {#override-string-tostring}

Human readable representation of the format. 

```csharp
public override string ToString()
```






**Returns**: Human readable representation of the format.



-----------

## Public Enums

### AudioEncoding {#enums-audioencoding}

Audio data format for track type. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0|   |
| PCM16Bits | 2| Audio data format: PCM 16 bits per sample.   |
| PCM8Bits | 3| Audio data format: PCM 8 bits per sample.   |
| PCMFloat | 4| Audio data format: single-precision floating-point per sample.   |
| PCM32Bits | 201| Audio data format: PCM 32 bits per sample.   |








-----------


