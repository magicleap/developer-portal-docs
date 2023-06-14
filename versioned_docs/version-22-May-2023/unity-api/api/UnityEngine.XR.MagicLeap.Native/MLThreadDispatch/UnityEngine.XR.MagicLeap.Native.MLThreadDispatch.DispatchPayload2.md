---
title: DispatchPayload2
summary: overloads the generic dispatcher to call back a method with two payloads 

---

# DispatchPayload2




Overloads the generic dispatcher to call back a method with two payloads   [More...](#detailed-description)  


Inherits from: <br></br>UnityEngine.XR.MagicLeap.Native.MLThreadDispatch.Dispatcher



## Detailed Description

```csharp
private template <A ,B > class DispatchPayload2 : Dispatcher 
```


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type






-----------



## Public Methods

### override void Dispatch {#override-void-dispatch}

Dispatches the previously stored callback with the supplied payloads 

```csharp
public override void Dispatch()
```






-----------

###  DispatchPayload2 {#functions-dispatchpayload2}

Initializes a new instance of the DispatchPayload2&lt;A,B&gt; class with the supplied callback and payloads 

```csharp
public DispatchPayload2(
    A payload1,
    B payload2,
    System.Action< A, B > action
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |payload1|First payload|
| B |payload2|Second payload|
| System.Action&lt; A, B &gt; |action|Method to dispatch|






-----------


