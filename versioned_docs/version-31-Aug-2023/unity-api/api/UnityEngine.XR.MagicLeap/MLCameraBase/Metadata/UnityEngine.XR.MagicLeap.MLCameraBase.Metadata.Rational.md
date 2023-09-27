---
title: Rational
summary: rational data type. 

---

# Rational




[Rational](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/Metadata/UnityEngine.XR.MagicLeap.MLCameraBase.Metadata.Rational.md) data type.   





## Public Methods

### void FromFloat {#void-fromfloat}

Sets the numerator and denominator based on the decimal rational and with the provided denominator. 

```csharp
public void FromFloat(
    float value,
    int denominator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |value|The decimal rational value.|
| int |denominator|The denominator used in the rational.|






-----------

### float ToFloat {#float-tofloat}

Returns the rational value as a decimal. 

```csharp
public float ToFloat()
```






**Returns**: The rational value.



-----------

### override string ToString {#override-string-tostring}

Provides a string representation of the numerator and denominator. 

```csharp
public override string ToString()
```






**Returns**: A string representation of the numerator and denominator.



-----------

## Public Attributes

### Denominator {#int-denominator}

Denominator. 

```csharp

public int Denominator;

```






-----------

### Numerator {#int-numerator}

Numerator. 

```csharp

public int Numerator;

```






-----------


