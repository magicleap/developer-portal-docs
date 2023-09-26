---
title: CircularBuffer
summary: this is a specialized utility class meant to be used within the unity sdk for very specific cases. this should not be taken as a general purpose circular buffer as it does not cater to all possible use cases. 

---

# CircularBuffer



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


This is a specialized utility class meant to be used within the Unity SDK for very specific cases. This should not be taken as a general purpose Circular buffer as it does not cater to all possible use cases.   [More...](#detailed-description)  


Inherits from: <br></br>IEnumerator,<br></br>IEnumerable



## Detailed Description

```csharp
package template <T > class CircularBuffer : IEnumerator 
```


**Template Parameters**: 

  * `T` Type of data to store in the buffer






-----------



## Public Fields

### Count {#int-count}

Number of elements stored in the buffer 

```csharp

public int Count { get; set; }

```






-----------

## Public Methods

###  CircularBuffer {#functions-circularbuffer}

Create a fixed size uninitialized buffer. Use Enqueue / Dequeue / TryDequeue / Count / Capacity / Clear / Resize and the enumerator. 

```csharp
public CircularBuffer(
    uint fixedSize
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |fixedSize||






-----------

### void Clear {#void-clear}

Remove all elements from the buffer. This doesn't actually remove the elements, only resets the queue front/back markers. Thus, the ref-count of objects doesn't go down on calling this function. 

```csharp
public void Clear()
```






-----------

### CircularBuffer&lt; T &gt; Create {#circularbuffer-t-create}

Create a CircularBuffer with preinitialized objects. When creating the buffer with this factory method, use the Get() method to get a reference to the next available object. DO NOT use any other methods available in this class as they;re relevant only when the CircularBuffer is instantiated with a fixed size and no preinitialized objects. 

```csharp
public static CircularBuffer< T > Create(
    params T [] objects
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| params T [] |objects|Array of objects to initialize the Circular Buffer with.|






**Returns**: 



-----------

### int Dequeue {#int-dequeue}

Dequeue an entire array of elements. Uses Array.Copy() and is thus more efficient than calling TryDequeue() in a loop. 

```csharp
public int Dequeue(
    T [] data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| T [] |data|Array to dequeue into|






**Returns**: Number of elements that were dequeued into the provided array



-----------

### void Enqueue {#void-enqueue}

Pushes a new element at the end of the queue. Will replace the front element if queue is full. TODO : ^ make this behavior configurable 

```csharp
public void Enqueue(
    T value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| T |value|Value to enqueue|






-----------

### void Enqueue {#void-enqueue}

Enqueue an entire array at the end of the queue. Uses Array.Copy() and is thus more efficient than calling Enqueue(T value) in a loop. 

```csharp
public void Enqueue(
    T [] values
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| T [] |values|Array of values to enqueue|






-----------

### T Get {#t-get}

Gets the next available pre-initialized object. 

```csharp
public T Get()
```






**Returns**: Next object in the circular buffer



-----------

### IEnumerator GetEnumerator {#ienumerator-getenumerator}

Get the enumerator implemented for this collection 

```csharp
public IEnumerator GetEnumerator()
```






**Returns**: Enumerator



-----------

### bool MoveNext {#bool-movenext}

Move to the next element when using this class as an IEnumerator 

```csharp
public bool MoveNext()
```






**Returns**: True if there are still more elements remaining in the queue, false if end of collection has been reached



-----------

### T Peek {#t-peek}

Gets the curent pre-initialized object in use. 

```csharp
public T Peek()
```






**Returns**: Current object in the circular buffer



-----------

### void Reset {#void-reset}

Reset the flags for the enumerator 

```csharp
public void Reset()
```






-----------

### void Resize {#void-resize}

Change the capacity of the buffer. If new capacity is more than the previous one, all old data is copied into the new buffer. If new capacity is less than previous one, only the latest newCapacity number of elements are preserved. 

```csharp
public void Resize(
    uint newCapacity
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |newCapacity|New capacity|






-----------

### bool TryDequeue {#bool-trydequeue}

Attempt to dequeue a value from the front of the queue. 

```csharp
public bool TryDequeue(
    out T value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out T |value|Dequeued value|






**Returns**: True if dequeue was successful, false otherwise



-----------

## Public Attributes

### Capacity {#int-capacity}

Max number of elements the buffer can hold. 

```csharp

public int Capacity => buffer.Length;

```






-----------

### Current {#object-current}

Get the current value when enumerating the buffer 

```csharp

public object Current => buffer[enumeratorIndex];

```






-----------


