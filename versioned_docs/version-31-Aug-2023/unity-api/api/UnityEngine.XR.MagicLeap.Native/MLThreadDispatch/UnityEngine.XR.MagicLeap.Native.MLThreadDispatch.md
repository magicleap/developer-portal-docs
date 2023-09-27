---
title: MLThreadDispatch
summary: handles dispatching calls from the magic leap native thread to the unity thread 

---

# MLThreadDispatch



**NameSpace:** 
[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) 


Handles dispatching calls from the Magic Leap native thread to the Unity thread   





## Public Methods

### void Call {#void-call}

A method that queues an action without a payload 

```csharp
public static void Call(
    System.Delegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| System.Delegate |callback|A callback function to be called when the delegate is invoked |






-----------

### void Call {#void-call}

A method that queues an action without a payload 

```csharp
public static void Call(
    System.Action callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| System.Action |callback|A callback function to be called when the action is invoked |






-----------

### void Call< A > {#void-call-a-}

A template method that queues an action with a single payload 

```csharp
public static void Call< A >(
    A a,
    System.Delegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |a|Payload 1|
| System.Delegate |callback|A callback function to be called when the delegate is invoked |


**Template Parameters**: 

  * `A` Payload type






-----------

### void Call< A, B > {#void-call-a,-b-}

A template method that queues an action with two payloads 

```csharp
public static void Call< A, B >(
    A a,
    B b,
    System.Delegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |a|Payload 1|
| B |b|Payload 2|
| System.Delegate |callback|A callback function to be called when the delegate is invoked |


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type






-----------

### void Call< A, B, C > {#void-call-a,-b,-c-}

A template method that queues an action with three payloads 

```csharp
public static void Call< A, B, C >(
    A a,
    B b,
    C c,
    System.Delegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |a|Payload 1|
| B |b|Payload 2|
| C |c|Payload 3|
| System.Delegate |callback|A callback function to be called when the delegate is invoked |


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type
  * `C` Third payload type






-----------

### void Call< A, B, C, D > {#void-call-a,-b,-c,-d-}

A template method that queues an action with four payloads 

```csharp
public static void Call< A, B, C, D >(
    A a,
    B b,
    C c,
    D d,
    System.Delegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |a|Payload 1|
| B |b|Payload 2|
| C |c|Payload 3|
| D |d|Payload 4|
| System.Delegate |callback|A callback function to be called when the delegate is invoked |


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type
  * `C` Third payload type
  * `D` Forth payload type






-----------

### void Call< A, B, C, D, E > {#void-call-a,-b,-c,-d,-e-}

A template method that queues an action with five payloads 

```csharp
public static void Call< A, B, C, D, E >(
    A a,
    B b,
    C c,
    D d,
    E e,
    System.Delegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |a|Payload 1|
| B |b|Payload 2|
| C |c|Payload 3|
| D |d|Payload 4|
| E |e|Payload 5|
| System.Delegate |callback|A callback function to be called when the delegate is invoked |


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type
  * `C` Third payload type
  * `D` Forth payload type
  * `E` Fifth payload type






-----------

### void Call< A, B, C, D, E, F > {#void-call-a,-b,-c,-d,-e,-f-}

A template method that queues an action with six payloads 

```csharp
public static void Call< A, B, C, D, E, F >(
    A a,
    B b,
    C c,
    D d,
    E e,
    F f,
    System.Delegate callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |a|Payload 1|
| B |b|Payload 2|
| C |c|Payload 3|
| D |d|Payload 4|
| E |e|Payload 5|
| F |f|Payload 6|
| System.Delegate |callback|A callback function to be called when the delegate is invoked |


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type
  * `C` Third payload type
  * `D` Forth payload type
  * `E` Fifth payload type
  * `F` Sixth payload type






-----------

### void DispatchAll {#void-dispatchall}

Dispatch all queued items 

```csharp
public static void DispatchAll()
```






-----------

### void ScheduleGraphics {#void-schedulegraphics}

```csharp
public static void ScheduleGraphics(
    System.Action callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| System.Action |callback||






-----------

### void ScheduleMain {#void-schedulemain}

A method that schedules a callback on the main thread. 

```csharp
public static void ScheduleMain(
    System.Action callback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| System.Action |callback|A callback function to be called when the action is invoked |






-----------

### void ScheduleWork {#void-schedulework}

A method that schedules a callback on the worker thread. 

```csharp
public static void ScheduleWork(
    Func< bool > function
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Func&lt; bool &gt; |function|Function to call. Return TRUE when processing is done, FALSE to be placed back in the queue to be called again at a later time.|






-----------


