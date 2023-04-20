---
title: SubsystemFeatures

---

# SubsystemFeatures



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Fields

### requestedFeatures {#feature-requestedfeatures}

```csharp

public static Feature requestedFeatures { get; set; }

```






-----------

### currentFeatures {#feature-currentfeatures}

```csharp

public static Feature currentFeatures { get; set; }

```






-----------

## Public Methods

### void SetFeatureRequested {#void-setfeaturerequested}

```csharp
public static void SetFeatureRequested(
    Feature feature,
    bool value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Feature |feature||
| bool |value||






-----------

### void SetCurrentFeatureEnabled {#void-setcurrentfeatureenabled}

```csharp
public static void SetCurrentFeatureEnabled(
    Feature feature,
    bool value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Feature |feature||
| bool |value||






-----------

### unsafe NativeArray&lt; ConfigurationDescriptor &gt; AcquireConfigurationDescriptors {#unsafe-nativearray-configurationdescriptor-acquireconfigurationdescriptors}

```csharp
public static unsafe NativeArray< ConfigurationDescriptor > AcquireConfigurationDescriptors(
    Allocator allocator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Allocator |allocator||






-----------

