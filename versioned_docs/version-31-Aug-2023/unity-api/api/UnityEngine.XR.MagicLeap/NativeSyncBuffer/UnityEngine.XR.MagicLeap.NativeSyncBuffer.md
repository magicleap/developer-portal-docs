---
title: NativeSyncBuffer

---

# NativeSyncBuffer



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>IDisposable



## Detailed Description

```csharp
package template <T > struct NativeSyncBuffer : IDisposable 
```






-----------



## Public Fields

### Input {#t-input}

```csharp

public T Input { get; set; }

```






-----------

## Public Methods

### void Dispose {#void-dispose}

```csharp
public void Dispose()
```






-----------

### JobHandle Dispose {#jobhandle-dispose}

```csharp
public JobHandle Dispose(
    JobHandle deps
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| JobHandle |deps||






-----------

### T &#42; GetInputPointer {#t-getinputpointer}

```csharp
public T * GetInputPointer()
```






-----------

### T &#42; GetOutputPointerReadOnly {#t-getoutputpointerreadonly}

```csharp
public T * GetOutputPointerReadOnly()
```






-----------

###  NativeSyncBuffer {#functions-nativesyncbuffer}

```csharp
public NativeSyncBuffer(
    Allocator allocator,
    T initialState =default
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Allocator |allocator||
| T |initialState||






-----------

### void Sync {#void-sync}

```csharp
public void Sync()
```






-----------

### JobHandle Sync {#jobhandle-sync}

```csharp
public JobHandle Sync(
    JobHandle deps
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| JobHandle |deps||






-----------

### void UpdateInput {#void-updateinput}

```csharp
public void UpdateInput(
    in T data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in T |data||






-----------

### JobHandle UpdateInputAsync {#jobhandle-updateinputasync}

```csharp
public JobHandle UpdateInputAsync(
    in T data,
    JobHandle deps
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in T |data||
| JobHandle |deps||






-----------

## Public Attributes

### IsValid {#bool-isvalid}

```csharp

public bool IsValid => m_BufferData != null && m_Allocator != Allocator.Invalid;

```






-----------

### Output {#t-output}

```csharp

public T Output => *GetOutputPointerReadOnly();

```






-----------


