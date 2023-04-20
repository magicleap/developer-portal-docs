---
title: RadiationProperties
summary: properties specifying the directivity of a spatial sound. 

---

# RadiationProperties




Properties specifying the directivity of a spatial sound.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### OuterGainMF {#float-outergainmf}

Volume scale (0-1) beyond outer cone for mid freqs. 

```csharp

public float OuterGainMF;

```






-----------

### OuterGainLF {#float-outergainlf}

Volume scale (0-1) beyond outer cone for low freqs. 

```csharp

public float OuterGainLF;

```






-----------

### OuterGainHF {#float-outergainhf}

Volume scale (0-1) beyond outer cone for high freqs. 

```csharp

public float OuterGainHF;

```






-----------

### OuterGain {#float-outergain}

Volume scale (0-1) beyond outer cone for all freqs. 

```csharp

public float OuterGain;

```






-----------

### OuterAngle {#float-outerangle}

Outer cone angle (0-360); directivity at maximum. 

```csharp

public float OuterAngle;

```






-----------

### InnerAngle {#float-innerangle}

Inner cone angle (0-360); radiation unaffected. 

```csharp

public float InnerAngle;

```






-----------

