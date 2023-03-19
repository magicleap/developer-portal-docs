---
title: MLMediaDRMHMACInputParam
summary: verify. 

---

# MLMediaDRMHMACInputParam




Data type that encapsulates algorithm, key&#95;set&#95;id for HMAC based Sign/Verify.   





## Public Attributes

### Algorithm {#string-algorithm}

The MAC algorithm used for the MAC-HASH operation. "HmacSHA256" is the only supported algorithm now. 

```csharp

public string Algorithm;

```






-----------

### KeySetId {#intptr-keysetid}

The identifier for the key to be used. 

```csharp

public IntPtr KeySetId;

```






-----------


