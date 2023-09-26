---
title: MLBitMask
summary: custom attribute to make it easy to turn enum fields into bit masks in the inspector. the enum type must be defined in order for the inspector to be able to know what the bits should be set to. 

---

# MLBitMask



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Custom attribute to make it easy to turn enum fields into bit masks in the inspector. The enum type must be defined in order for the inspector to be able to know what the bits should be set to.   


Inherits from: <br></br>PropertyAttribute




## Public Fields

### PropertyType {#type-propertytype}

Gets or sets the type of the Enum that is being turned into a bit mask. 

```csharp

public Type PropertyType { get; set; }

```






-----------

## Public Methods

###  MLBitMask {#functions-mlbitmask}

Initializes a new instance of the [MLBitMask](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLBitMask.md) class. enum Type. This constructor call is automatic when decorating a field with this Attribute. 

```csharp
public MLBitMask(
    Type propertyType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Type |propertyType|The Type value of the enum|






-----------


