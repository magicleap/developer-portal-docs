---
title: MLMediaDRMRSAInputParam
summary: data type that encapsulates algorithm, wrapped-key for rsa operation. 

---

# MLMediaDRMRSAInputParam




Data type that encapsulates algorithm, wrapped&#95;key for RSA operation.   





## Public Attributes

### Algorithm {#string-algorithm}

The MAC algorithm used for padding/signing. "HmacSHA256" is the only supported algorithm now. 

```csharp

public string Algorithm;

```






-----------

### WrappedRsaKey {#intptr-wrappedrsakey}

The wrapped RSA key to be used. 

```csharp

public IntPtr WrappedRsaKey;

```






-----------


