---
title: NativeBindings
summary: see ml-media-format.h for additional comments. 

---

# NativeBindings




See ml&#95;media&#95;format.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatCreate {#mlresultcode-mlmediaformatcreate}

Create an empty format object. 

```csharp
public MLResult.Code MLMediaFormatCreate(
    out ulong outHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |outHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatCreateAudio {#mlresultcode-mlmediaformatcreateaudio}

Create a audio format object. 

```csharp
public MLResult.Code MLMediaFormatCreateAudio(
    string MimeType,
    int SampleRate,
    int ChannelCount,
    out ulong outHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |MimeType||
| int |SampleRate||
| int |ChannelCount||
| out ulong |outHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatCreateCopy {#mlresultcode-mlmediaformatcreatecopy}

Create a copy of the format handle provided. 

```csharp
public MLResult.Code MLMediaFormatCreateCopy(
    ulong handle,
    out ulong outHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out ulong |outHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatCreateSubtitle {#mlresultcode-mlmediaformatcreatesubtitle}

Create a subtitle format object. 

```csharp
public MLResult.Code MLMediaFormatCreateSubtitle(
    string MimeType,
    string Language,
    out ulong outHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |MimeType||
| string |Language||
| out ulong |outHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatCreateVideo {#mlresultcode-mlmediaformatcreatevideo}

Create a video format object. 

```csharp
public MLResult.Code MLMediaFormatCreateVideo(
    string mimeType,
    int Width,
    int Height,
    out ulong outHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |mimeType||
| int |Width||
| int |Height||
| out ulong |outHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatDestroy {#mlresultcode-mlmediaformatdestroy}

Destroy a format object. 

```csharp
public MLResult.Code MLMediaFormatDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatGetKeyByteBuffer {#mlresultcode-mlmediaformatgetkeybytebuffer}

Obtain the value of a ByteBuffer key. 

```csharp
public MLResult.Code MLMediaFormatGetKeyByteBuffer(
    ulong handle,
    string name,
    out MLMediaFormatByteArray OutBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| out MLMediaFormatByteArray |OutBuffer||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatGetKeySize {#mlresultcode-mlmediaformatgetkeysize}

Obtain the size of a key. 

```csharp
public MLResult.Code MLMediaFormatGetKeySize(
    ulong handle,
    string name,
    out ulong outSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| out ulong |outSize||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatGetKeyString {#mlresultcode-mlmediaformatgetkeystring}

Obtain the value of a string key. User shall allocate at least #MAX&#95;KEY&#95;STRING&#95;SIZE bytes of memory for storing the output key string. 

```csharp
public MLResult.Code MLMediaFormatGetKeyString(
    ulong handle,
    string name,
    IntPtr outString
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| IntPtr |outString||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatGetKeyValueFloat {#mlresultcode-mlmediaformatgetkeyvaluefloat}

Obtain the value of an float key. 

```csharp
public MLResult.Code MLMediaFormatGetKeyValueFloat(
    ulong handle,
    string name,
    out float outKey
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| out float |outKey||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatGetKeyValueInt32 {#mlresultcode-mlmediaformatgetkeyvalueint32}

Obtain the value of an integer key. For example, use #MLMediaFormat&#95;Key&#95;Frame&#95;Rate key to get the framerate of a video track. 

```csharp
public MLResult.Code MLMediaFormatGetKeyValueInt32(
    ulong handle,
    string name,
    out int outKey
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| out int |outKey||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatGetKeyValueInt64 {#mlresultcode-mlmediaformatgetkeyvalueint64}

Obtain the value of an long key. For example, use MLMediaFormat&#95;Key&#95;Duration key to get duration of a track. 

```csharp
public MLResult.Code MLMediaFormatGetKeyValueInt64(
    ulong handle,
    string name,
    out long outKey
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| out long |outKey||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatKeyByteBufferRelease {#mlresultcode-mlmediaformatkeybytebufferrelease}

Release the ByteBuffer acquired by MLMediaFormatGetKeyByteBuffer. 

```csharp
public MLResult.Code MLMediaFormatKeyByteBufferRelease(
    ulong handle,
    ref MLMediaFormatByteArray buffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref MLMediaFormatByteArray |buffer||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatObjectToString {#mlresultcode-mlmediaformatobjecttostring}

Obtain the human readable representation of the format. User shall allocate at least #MAX&#95;FORMAT&#95;STRING&#95;SIZE bytes of memory for storing the output format string. The format string contains a list of key-value pairs, which can be extracted individually via the suitable "GetKeyValue" APIs. 

```csharp
public MLResult.Code MLMediaFormatObjectToString(
    ulong handle,
    IntPtr outString
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| IntPtr |outString||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatSetKeyByteBuffer {#mlresultcode-mlmediaformatsetkeybytebuffer}

Set the value of a ByteBuffer key. 

```csharp
public MLResult.Code MLMediaFormatSetKeyByteBuffer(
    ulong handle,
    string name,
    ref MLMediaFormatByteArray Buffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| ref MLMediaFormatByteArray |Buffer||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatSetKeyFloat {#mlresultcode-mlmediaformatsetkeyfloat}

Set the value of a float key. 

```csharp
public MLResult.Code MLMediaFormatSetKeyFloat(
    ulong handle,
    string name,
    float keyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| float |keyValue||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatSetKeyInt32 {#mlresultcode-mlmediaformatsetkeyint32}

Set the value of an integer key. 

```csharp
public MLResult.Code MLMediaFormatSetKeyInt32(
    ulong handle,
    string name,
    int keyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| int |keyValue||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatSetKeyInt64 {#mlresultcode-mlmediaformatsetkeyint64}

Set the value of a long key. 

```csharp
public MLResult.Code MLMediaFormatSetKeyInt64(
    ulong handle,
    string name,
    long keyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| long |keyValue||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatSetKeySize {#mlresultcode-mlmediaformatsetkeysize}

Set the size of a key. 

```csharp
public MLResult.Code MLMediaFormatSetKeySize(
    ulong handle,
    string name,
    ulong keySize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| ulong |keySize||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaFormatSetKeyString {#mlresultcode-mlmediaformatsetkeystring}

Set the value of a string key. 

```csharp
public MLResult.Code MLMediaFormatSetKeyString(
    ulong handle,
    string name,
    string KeyValue
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| string |name||
| string |KeyValue||






-----------

## Public Attributes

### MAX_FORMAT_STRING_SIZE {#int-max-format-string-size}

Internal max size of format string. 

```csharp

public static int MAX_FORMAT_STRING_SIZE = 512;

```






-----------

### MAX_KEY_STRING_SIZE {#int-max-key-string-size}

Internal max size of key string. 

```csharp

public static int MAX_KEY_STRING_SIZE = 64;

```






-----------


