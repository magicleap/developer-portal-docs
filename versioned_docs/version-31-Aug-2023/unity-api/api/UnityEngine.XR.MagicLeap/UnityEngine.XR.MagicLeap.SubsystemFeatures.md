---
title: SubsystemFeatures

---

# SubsystemFeatures



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Fields

### currentFeatures {#feature-currentfeatures}

```csharp

public static Feature currentFeatures { get; set; }

```






-----------

### requestedFeatures {#feature-requestedfeatures}

```csharp

public static Feature requestedFeatures { get; set; }

```






-----------

## Public Methods

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


