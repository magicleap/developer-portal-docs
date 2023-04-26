---
title: MagicLeapProvider

---

# MagicLeapProvider







Inherits from: <br></br>Provider




## Public Fields

### imageLibrary {#override-runtimereferenceimagelibrary-imagelibrary}

The current  RuntimeReferenceImageLibrary . If  null  then the subsystem will be set to "off". 

```csharp

public override RuntimeReferenceImageLibrary imageLibrary { get; set; }

```






-----------

### requestedMaxNumberOfMovingImages {#override-int-requestedmaxnumberofmovingimages}

Stores the requested maximum number of concurrently tracked moving images. 

```csharp

public override int requestedMaxNumberOfMovingImages { get; set; }

```


**Details**

Magic Leap Image Tracking has the ability to set an enforcement policy on the maximum number of tracked moving images. If the policy has been explicitly set to  false  by using ImageTrackingSubsystem.SetAutomaticImageStationarySettingsEnforcementPolicy then this value will not be honored by the native provider until the policy is set to  true . 





-----------

## Public Methods

### override RuntimeReferenceImageLibrary CreateRuntimeLibrary {#override-runtimereferenceimagelibrary-createruntimelibrary}

Creates a  RuntimeReferenceImageLibrary  from the passed in  XRReferenceImageLibrary  passed in. 

```csharp
public override RuntimeReferenceImageLibrary CreateRuntimeLibrary(
    XRReferenceImageLibrary serializedLibrary
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| XRReferenceImageLibrary |serializedLibrary|The  XRReferenceImageLibrary  that is used to create the  RuntimeReferenceImageLibrary |






**Returns**: A new  RuntimeReferenceImageLibrary  created from the old 



-----------

### override void Destroy {#override-void-destroy}

Destroy the image tracking subsystem. 

```csharp
public override void Destroy()
```






-----------

### unsafe override TrackableChanges&lt; XRTrackedImage &gt; GetChanges {#unsafe-override-trackablechanges-xrtrackedimage-getchanges}

```csharp
public unsafe override TrackableChanges< XRTrackedImage > GetChanges(
    XRTrackedImage defaultTrackedImage,
    Allocator allocator
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| XRTrackedImage |defaultTrackedImage||
| Allocator |allocator||






-----------

###  MagicLeapProvider {#functions-magicleapprovider}

```csharp
public MagicLeapProvider()
```






-----------

### bool RequestPermissionIfNecessary {#bool-requestpermissionifnecessary}

Allows the user to re-request privileges 

```csharp
public bool RequestPermissionIfNecessary()
```






**Returns**:  true  if the Color Camera privileges were granted and  false  otherwise. 



-----------

## Public Attributes

### currentMaxNumberOfMovingImages {#override-int-currentmaxnumberofmovingimages}

Stores the current maximum number of moving images that can be tracked by the native platform. 

```csharp

public override int currentMaxNumberOfMovingImages => m_RequestedNumberOfMovingImages;

```


**Details**

Magic Leap Image Tracking has the ability to set an enforcement policy on the maximum number of tracked moving images. If the policy has been explicitly set to  false  by using ImageTrackingSubsystem.SetAutomaticImageStationarySettingsEnforcementPolicy then this value will indicate the current number of explicitly declared moving images in the current library otherwise it will return the same value as requestedMaxNumberOfMovingImages. 





-----------


