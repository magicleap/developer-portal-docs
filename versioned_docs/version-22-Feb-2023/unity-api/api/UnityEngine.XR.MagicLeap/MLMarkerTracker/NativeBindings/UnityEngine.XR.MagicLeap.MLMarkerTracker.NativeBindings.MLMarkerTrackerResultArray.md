---
title: MLMarkerTrackerResultArray
summary: an array of all the detection results from the marker scanning. 

---

# MLMarkerTrackerResultArray




An array of all the detection results from the marker scanning.   





## Public Methods

###  MLMarkerTrackerResultArray {#functions-mlmarkertrackerresultarray}

```csharp
public MLMarkerTrackerResultArray(
    uint version
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### Count {#readonly-uintptr-count}

Number of markers being tracked. 

```csharp

public readonly UIntPtr Count;

```






-----------

### Detections {#readonly-intptr-detections}

Pointer to an array of pointers for MLMarkerResult. 

```csharp

public readonly IntPtr Detections;

```






-----------

### Version {#readonly-uint-version}

```csharp

public readonly uint Version;

```






-----------


