---
title: MLMediaDRMKeyValue
summary: data type containing {key, value} pair. 

---

# MLMediaDRMKeyValue




Data type containing {key, value} pair.   





## Public Methods

### KeyValuePair&lt; string, string &gt; string {#keyvaluepair-string,-string-string}

```csharp
public KeyValuePair< string, string > string(
    this. Key,
    this. Value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| this. |Key||
| this. |Value||






-----------

###  MLMediaDRMKeyValue {#functions-mlmediadrmkeyvalue}

```csharp
public MLMediaDRMKeyValue(
    KeyValuePair< string, string > pair
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| KeyValuePair&lt; string, string &gt; |pair||






-----------

## Public Attributes

### Value {#readonly-string-value}

Value. 

```csharp

public readonly string Value;

```






-----------

### KeyValue {#keyvaluepair-string,-string-keyvalue}

```csharp

public KeyValuePair< string, string > KeyValue => new KeyValuePair<string;

```






-----------

### Key {#readonly-string-key}

[Key](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/DRM/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.DRM.Key.md). 

```csharp

public readonly string Key;

```






-----------

