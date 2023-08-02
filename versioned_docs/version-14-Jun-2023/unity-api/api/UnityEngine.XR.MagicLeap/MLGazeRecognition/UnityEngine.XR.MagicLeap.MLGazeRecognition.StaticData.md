---
title: StaticData
summary: static information about the gaze recognition system. populate with mlgazerecognitiongetstaticdata. 

---

# StaticData




Static information about the Gaze Recognition system. Populate with MLGazeRecognitionGetStaticData().   





## Public Methods

###  StaticData {#functions-staticdata}

```csharp
public StaticData(
    Pose pose,
    float eyeHeightMax,
    float eyeWidthMax
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Pose |pose||
| float |eyeHeightMax||
| float |eyeWidthMax||






-----------

## Public Attributes

### EyeHeightMax {#readonly-float-eyeheightmax}

The maximum value for the height of the eye&#95;left and eye&#95;right vector. 

```csharp

public readonly float EyeHeightMax;

```






-----------

### EyeWidthMax {#readonly-float-eyewidthmax}

The maximum value for the width of the eye&#95;left and eye&#95;right vector. 

```csharp

public readonly float EyeWidthMax;

```






-----------

### Vergence {#readonly-pose-vergence}

Location of the 3D vergence point, intersection of 3D gaze vectors. 

```csharp

public readonly Pose Vergence;

```






-----------

