---
title: NativeFixedList
summary: has list-like semantics capacity and length using a nativearray as the backing store. the nativearray is never resized. this is useful for times you don't know how big the array will be, but there is a definite upper bound. this list supports duck-typed foreach enumerator semantics. 

---

# NativeFixedList



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Has List-like semantics (Capacity and Length) using a NativeArray as the backing store. The NativeArray is never resized. This is useful for times you don't know how big the array will be, but there is a definite upper bound. This list supports duck-typed foreach [Enumerator](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/NativeFixedList/UnityEngine.XR.MagicLeap.NativeFixedList.Enumerator.md) semantics.   [More...](#detailed-description)  


Inherits from: <br></br>IEquatable< NativeFixedList< T >>,<br></br>IDisposable



## Detailed Description

```csharp
package template <T > struct NativeFixedList : IEquatable< NativeFixedList< T >> 
```






-----------



## Public Fields

### Capacity {#int-capacity}

```csharp

public int Capacity { get; set; }

```






-----------

### IsCreated {#bool-iscreated}

```csharp

public bool IsCreated { get; set; }

```






-----------

### Length {#int-length}

```csharp

public int Length { get; set; }

```






-----------

### this[int index] {#t-thisint-index}

```csharp

public T this[int index] { get; set; }

```






-----------

## Public Methods

### void Add {#void-add}

```csharp
public void Add(
    T item
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| T |item||






-----------

### void Clear {#void-clear}

```csharp
public void Clear()
```






-----------

### void CopyTo {#void-copyto}

Copies the contents of this list to another NativeArray. _destination_  must have the same Length as this list. 

```csharp
public void CopyTo(
    NativeArray< T > destination
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| NativeArray&lt; T &gt; |destination|The destination array|






-----------

### void Dispose {#void-dispose}

```csharp
public void Dispose()
```






-----------

### override bool Equals {#override-bool-equals}

```csharp
public override bool Equals(
    object obj
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |obj||






-----------

### bool Equals {#bool-equals}

```csharp
public bool Equals(
    NativeFixedList< T > other
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| NativeFixedList&lt; T &gt; |other||






-----------

### [Enumerator](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/NativeFixedList/UnityEngine.XR.MagicLeap.NativeFixedList.Enumerator.md) GetEnumerator {#enumerator-getenumerator}

```csharp
public Enumerator GetEnumerator()
```






-----------

### override int GetHashCode {#override-int-gethashcode}

```csharp
public override int GetHashCode()
```






-----------

###  NativeFixedList {#functions-nativefixedlist}

Allocates a new NativeFixedList with _Capacity_ . Caller must Dispose the array when no longer needed. 

```csharp
public NativeFixedList(
    int Capacity,
    Allocator allocator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |Capacity||
| Allocator |allocator||






-----------

###  NativeFixedList {#functions-nativefixedlist}

Create a NativeFixedList from an existing NativeArray and a length. This NativeFixedList now owns the memory and should be Disposed when finished. 

```csharp
public NativeFixedList(
    NativeArray< T > other,
    int length
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| NativeArray&lt; T &gt; |other|The array to take ownership of|
| int |length|The number of elements actually used by the NativeArray|






-----------

### bool operator!= {#bool-operator}

```csharp
public static bool operator!=(
    NativeFixedList< T > lhs,
    NativeFixedList< T > rhs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| NativeFixedList&lt; T &gt; |lhs||
| NativeFixedList&lt; T &gt; |rhs||






-----------

### bool operator== {#bool-operator}

```csharp
public static bool operator==(
    NativeFixedList< T > lhs,
    NativeFixedList< T > rhs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| NativeFixedList&lt; T &gt; |lhs||
| NativeFixedList&lt; T &gt; |rhs||






-----------

## Public Attributes

### m_NativeArray {#nativearray-t-m-nativearray}

```csharp

public NativeArray< T > m_NativeArray;

```






-----------


