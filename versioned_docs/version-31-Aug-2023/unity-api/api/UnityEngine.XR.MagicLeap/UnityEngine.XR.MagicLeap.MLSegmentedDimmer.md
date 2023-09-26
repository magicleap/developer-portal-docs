---
title: MLSegmentedDimmer

---

# MLSegmentedDimmer



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Methods

### void Activate {#void-activate}

Turn on the ability to display Segmented Dimmer in your scenes. This instructs MLGraphics to provide frames using the AlphaBlend blend mode. 

```csharp
public static void Activate()
```






-----------

### void Deactivate {#void-deactivate}

Turn off the ability to display Segmented Dimmer in your scenes. This reverts to accepting frames with the default blend mode from MLGraphics. 

```csharp
public static void Deactivate()
```






-----------

### int GetDefaultLayer {#int-getdefaultlayer}

Returns the first available Unity Layer specified in the LayerMask for the SegmentedDimmer Feature. This will be the default layer SegmentedDimmer mesh objects will be assigned to when first configured. 

```csharp
public static int GetDefaultLayer()
```






**Returns**: 



-----------

### void SetEnabled {#void-setenabled}

```csharp
public static void SetEnabled(
    bool enabled
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |enabled||






-----------

## Public Attributes

### Exists {#bool-exists}

Does the Universal Render Pipeline contain a Segmented Dimmer feature in its renderers 

```csharp

public static bool Exists => false;

```






-----------


