---
title: DispatchPayload1
summary: overloads the generic dispatcher to call back a method with a single payload 

---

# DispatchPayload1




Overloads the generic dispatcher to call back a method with a single payload   [More...](#detailed-description)  


Inherits from: <br></br>UnityEngine.XR.MagicLeap.Native.MLThreadDispatch.Dispatcher



## Detailed Description

```csharp
private template <T > class DispatchPayload1 : Dispatcher 
```


**Template Parameters**: 

  * `T` Payload type






-----------



## Public Methods

### override void Dispatch {#override-void-dispatch}

Dispatches the previously stored callback with the supplied payload 

```csharp
public override void Dispatch()
```






-----------

###  DispatchPayload1 {#functions-dispatchpayload1}

Initializes a new instance of the DispatchPayload1&lt;T&gt; class. with the supplied callback and payload 

```csharp
public DispatchPayload1(
    T payload,
    System.Action< T > action
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| T |payload|Payload to dispatch|
| System.Action&lt; T &gt; |action|Method to call back|






-----------


