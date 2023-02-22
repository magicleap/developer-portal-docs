---
title: MLSegmentedDimmer

---

# MLSegmentedDimmer



**NameSpace:** 
[MagicLeap](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Fields

### ClearValue {#float-clearvalue}

```csharp

public static float ClearValue { get; set; }

```






-----------

### IgnoreMaterials {#bool-ignorematerials}

```csharp

public static bool IgnoreMaterials { get; set; }

```






-----------

### IsEnabled {#bool-isenabled}

```csharp

public static bool IsEnabled { get; set; }

```






-----------

### LayerMask {#layermask-layermask}

```csharp

public static LayerMask LayerMask { get; set; }

```






-----------

### RenderTargetHeight {#int-rendertargetheight}

```csharp

public static int RenderTargetHeight { get; set; }

```






-----------

### RenderTargetWidth {#int-rendertargetwidth}

```csharp

public static int RenderTargetWidth { get; set; }

```






-----------

### UseFullResolution {#bool-usefullresolution}

```csharp

public static bool UseFullResolution { get; set; }

```






-----------

## Public Methods

### void Activate {#void-activate}

Turn on the ability to display Segmented Dimmer in your scenes by requesting support from the ML Graphics API 

```csharp
public static void Activate()
```






-----------

### void Deactivate {#void-deactivate}

Inform the ML Graphics API to turn off the ability to display Segmented Dimmer 

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

Enables or disables all Mesh Renderers in the current scene which are on a SegmentedDimmer layer.    WARNING: This is expensive and it is recommended not to use it often! 

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

