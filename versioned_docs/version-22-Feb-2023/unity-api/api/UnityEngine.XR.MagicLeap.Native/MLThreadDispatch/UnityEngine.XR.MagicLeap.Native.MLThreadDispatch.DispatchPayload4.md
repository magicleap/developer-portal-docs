---
title: DispatchPayload4
summary: overloads the generic dispatcher to call back a method with four payloads 

---

# DispatchPayload4




Overloads the generic dispatcher to call back a method with four payloads   [More...](#detailed-description)  


Inherits from: <br></br>UnityEngine.XR.MagicLeap.Native.MLThreadDispatch.Dispatcher



## Detailed Description

```csharp
private template <A ,B ,C ,D > class DispatchPayload4 : Dispatcher 
```


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type
  * `C` Third payload type
  * `D` Forth payload type






-----------



## Public Methods

### override void Dispatch {#override-void-dispatch}

Dispatches the previously stored callback with the supplied payloads 

```csharp
public override void Dispatch()
```






-----------

###  DispatchPayload4 {#functions-dispatchpayload4}

Initializes a new instance of the DispatchPayload4&lt;A,B,C,D&gt; class with the supplied callback and payloads 

```csharp
public DispatchPayload4(
    A payload1,
    B payload2,
    C payload3,
    D payload4,
    System.Action< A, B, C, D > action
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |payload1|First payload|
| B |payload2|Second payload|
| C |payload3|Third payload|
| D |payload4|Forth payload|
| System.Action&lt; A, B, C, D &gt; |action|Method to dispatch|






-----------


