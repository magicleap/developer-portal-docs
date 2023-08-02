---
title: DispatchPayload3
summary: overloads the generic dispatcher to call back a method with three payloads 

---

# DispatchPayload3




Overloads the generic dispatcher to call back a method with three payloads   [More...](#detailed-description)  


Inherits from: <br></br>UnityEngine.XR.MagicLeap.Native.MLThreadDispatch.Dispatcher



## Detailed Description

```csharp
private template <A ,B ,C > class DispatchPayload3 : Dispatcher 
```


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type
  * `C` Third payload type






-----------



## Public Methods

### override void Dispatch {#override-void-dispatch}

Dispatches the previously stored callback with the supplied payloads 

```csharp
public override void Dispatch()
```






-----------

###  DispatchPayload3 {#functions-dispatchpayload3}

Initializes a new instance of the DispatchPayload3&lt;A,B,C&gt; class with the supplied callback and payloads 

```csharp
public DispatchPayload3(
    A payload1,
    B payload2,
    C payload3,
    System.Action< A, B, C > action
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |payload1|First payload|
| B |payload2|Second payload|
| C |payload3|Third payload|
| System.Action&lt; A, B, C &gt; |action|Method to dispatch|






-----------


