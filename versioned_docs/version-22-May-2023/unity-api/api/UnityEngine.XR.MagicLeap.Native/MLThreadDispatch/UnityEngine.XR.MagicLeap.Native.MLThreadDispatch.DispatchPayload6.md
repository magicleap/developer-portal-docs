---
title: DispatchPayload6
summary: overloads the generic dispatcher to call back a method with four payloads 

---

# DispatchPayload6




Overloads the generic dispatcher to call back a method with four payloads   [More...](#detailed-description)  


Inherits from: <br></br>UnityEngine.XR.MagicLeap.Native.MLThreadDispatch.Dispatcher



## Detailed Description

```csharp
private template <A ,B ,C ,D ,E ,F > class DispatchPayload6 : Dispatcher 
```


**Template Parameters**: 

  * `A` First payload type
  * `B` Second payload type
  * `C` Third payload type
  * `D` Forth payload type
  * `E` Fifth payload type
  * `E` Sixth payload type






-----------



## Public Methods

### override void Dispatch {#override-void-dispatch}

Dispatches the previously stored callback with the supplied payloads 

```csharp
public override void Dispatch()
```






-----------

###  DispatchPayload6 {#functions-dispatchpayload6}

Initializes a new instance of the DispatchPayload6&lt;A,B,C,D,E,F&gt; class with the supplied callback and payloads 

```csharp
public DispatchPayload6(
    A payload1,
    B payload2,
    C payload3,
    D payload4,
    E payload5,
    F payload6,
    System.Action< A, B, C, D, E, F > action
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| A |payload1|First payload|
| B |payload2|Second payload|
| C |payload3|Third payload|
| D |payload4|Forth payload|
| E |payload5|Fifth payload|
| F |payload6|Sixth payload|
| System.Action&lt; A, B, C, D, E, F &gt; |action|Method to dispatch|






-----------


