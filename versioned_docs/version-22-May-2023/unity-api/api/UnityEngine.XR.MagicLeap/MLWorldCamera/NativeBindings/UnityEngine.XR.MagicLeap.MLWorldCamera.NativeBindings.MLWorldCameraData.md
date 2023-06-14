---
title: MLWorldCameraData
summary: a structure to encapsulate output data for each camera sensor. 

---

# MLWorldCameraData




A structure to encapsulate output data for each camera sensor.   





## Public Methods

###  MLWorldCameraData {#functions-mlworldcameradata}

```csharp
public MLWorldCameraData(
    uint version
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### FrameCount {#readonly-byte-framecount}

Number of camera frames populated. 

```csharp

public readonly byte FrameCount;

```






-----------

### Frames {#readonly-intptr-frames}

Camera frame data. 

```csharp

public readonly IntPtr Frames;

```






-----------

### Version {#readonly-uint-version}

Version of this structure. 

```csharp

public readonly uint Version;

```






-----------


