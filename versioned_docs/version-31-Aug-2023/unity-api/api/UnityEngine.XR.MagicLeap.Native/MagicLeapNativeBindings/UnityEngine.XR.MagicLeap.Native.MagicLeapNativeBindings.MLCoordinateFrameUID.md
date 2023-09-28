---
title: MLCoordinateFrameUID
summary: a unique identifier which represents a coordinate frame. the unique identifier is comprised of two values. 

---

# MLCoordinateFrameUID




A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values.   





## Public Fields

### EmptyFrame {#mlcoordinateframeuid-emptyframe}

Gets an initialized [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md). 

```csharp

public static MLCoordinateFrameUID EmptyFrame { get; set; }

```

| Type | Description  | 
|--|--|
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) | A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values.  |





**Returns**: An initialized [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md).



-----------

## Public Methods

### override bool Equals {#override-bool-equals}

The equality check to be used for when being compared to an object. 

```csharp
public override bool Equals(
    object obj
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |obj|The object to compare to this one with.|






**Returns**: True if the the provided object is of the [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) type and has the same two data values.



-----------

### void FromGuid {#void-fromguid}

Sets First and Second data value based on given GUID. 

```csharp
public void FromGuid(
    Guid guid
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Guid |guid|GUID needed to calculate both data values.|






-----------

### void FromString {#void-fromstring}

Sets First and Second data value based on given GUID in stirng form. 

```csharp
public void FromString(
    string guidString
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |guidString|GUID needed to calculate both data values|






-----------

### void FromULongPair {#void-fromulongpair}

Sets First and Second value. 

```csharp
public void FromULongPair(
    ulong first,
    ulong second
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |first|First data value.|
| ulong |second|Second data value.|






-----------

### override int GetHashCode {#override-int-gethashcode}

Gets the hash code to use from the first data value. 

```csharp
public override int GetHashCode()
```






**Returns**: The hash code returned by the first data value of this object 



-----------

###  MLCoordinateFrameUID {#functions-mlcoordinateframeuid}

Constructor getting two ulongs as argument. 

```csharp
public MLCoordinateFrameUID(
    ulong first,
    ulong second
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |first|First data value.|
| ulong |second|Second data value.|






-----------

###  MLCoordinateFrameUID {#functions-mlcoordinateframeuid}

Constructor getting GUID as argument. 

```csharp
public MLCoordinateFrameUID(
    Guid guid
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Guid |guid|GUID from which both values will be calculated.|






-----------

###  MLCoordinateFrameUID {#functions-mlcoordinateframeuid}

Constructor getting GUID as argument in string form. 

```csharp
public MLCoordinateFrameUID(
    string guidString
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |guidString|GUID from which both values will be calculated.|






-----------

### Guid ToGuid {#guid-toguid}

Returns the GUID based on the values of this [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md). 

```csharp
public Guid ToGuid()
```






**Returns**: The calculated GUID.



-----------

### override string ToString {#override-string-tostring}

Returns the string value of the GUID of this [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md). 

```csharp
public override string ToString()
```






**Returns**: The string value of the GUID.



-----------

### bool operator!= {#bool-operator}

The inequality check to be used for comparing two [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) structs. 

```csharp
public static bool operator!=(
    MLCoordinateFrameUID one,
    MLCoordinateFrameUID two
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) |one|The first struct to compare with the second struct. |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) |two|The second struct to compare with the first struct. |






**Returns**: True if the two provided structs do not have the same two data values.



-----------

### bool operator== {#bool-operator}

The equality check to be used for comparing two [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) structs. 

```csharp
public static bool operator==(
    MLCoordinateFrameUID one,
    MLCoordinateFrameUID two
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) |one|The first struct to compare with the second struct. |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) |two|The second struct to compare with the first struct. |






**Returns**: True if the two provided structs have the same two data values.



-----------

## Public Attributes

### First {#ulong-first}

The first data value. 

```csharp

public ulong First;

```






-----------

### Second {#ulong-second}

The second data value. 

```csharp

public ulong Second;

```






-----------


