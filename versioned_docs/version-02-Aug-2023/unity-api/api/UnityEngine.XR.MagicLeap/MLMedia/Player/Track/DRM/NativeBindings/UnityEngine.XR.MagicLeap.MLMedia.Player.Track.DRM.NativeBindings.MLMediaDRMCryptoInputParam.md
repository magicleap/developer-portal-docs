---
title: MLMediaDRMCryptoInputParam
summary: decryption. 

---

# MLMediaDRMCryptoInputParam




Data type that encapsulates algorithm, key&#95;set&#95;id and IV for Encryption/Decryption.   





## Public Attributes

### Algorithm {#string-algorithm}

The cipher mode used for the crypto operation. "AES/CBC/NoPadding" is the only supported algorithm now. 

```csharp

public string Algorithm;

```






-----------

### InitialVector {#intptr-initialvector}

The initial vector used for the crypto operation. 

```csharp

public IntPtr InitialVector;

```






-----------

### KeySetId {#intptr-keysetid}

The identifier for the key to be used. 

```csharp

public IntPtr KeySetId;

```






-----------


