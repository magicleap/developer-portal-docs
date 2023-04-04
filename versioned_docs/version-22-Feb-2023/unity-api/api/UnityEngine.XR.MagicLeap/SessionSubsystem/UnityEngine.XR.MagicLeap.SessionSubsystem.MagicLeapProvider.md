---
title: MagicLeapProvider

---

# MagicLeapProvider







Inherits from: <br></br>Provider




## Public Fields

### currentTrackingMode {#override-feature-currenttrackingmode}

The current tracking mode feature flag. 

```csharp

public override Feature currentTrackingMode { get; set; }

```


**Details**

Magic Leap will always try to use 6DoF tracking but will automatically switch to 3DoF if it doesn't have a sufficient tracking environment. This will report which of the two modes is currently active and  UnityEngine.XR.ARSubsystems.Feature.None  otherwise. 





-----------

### requestedTrackingMode {#override-feature-requestedtrackingmode}

```csharp

public override Feature requestedTrackingMode { get; set; }

```






-----------

### trackingState {#override-trackingstate-trackingstate}

```csharp

public override TrackingState trackingState { get; set; }

```






-----------

## Public Methods

### override Promise&lt; SessionAvailability &gt; GetAvailabilityAsync {#override-promise-sessionavailability-getavailabilityasync}

```csharp
public override Promise< SessionAvailability > GetAvailabilityAsync()
```






-----------

### override NativeArray&lt; ConfigurationDescriptor &gt; GetConfigurationDescriptors {#override-nativearray-configurationdescriptor-getconfigurationdescriptors}

```csharp
public override NativeArray< ConfigurationDescriptor > GetConfigurationDescriptors(
    Allocator allocator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Allocator |allocator||






-----------

### override void Update {#override-void-update}

```csharp
public override void Update(
    XRSessionUpdateParams updateParams,
    Configuration configuration
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| XRSessionUpdateParams |updateParams||
| Configuration |configuration||




TODO (5/26/2020): Move MLSpatialMapper specific features to shared XRMeshSubsystem extensions 



-----------

## Public Attributes

### requestedFeatures {#override-feature-requestedfeatures}

```csharp

public override Feature requestedFeatures => SubsystemFeatures.requestedFeatures;

```






-----------


