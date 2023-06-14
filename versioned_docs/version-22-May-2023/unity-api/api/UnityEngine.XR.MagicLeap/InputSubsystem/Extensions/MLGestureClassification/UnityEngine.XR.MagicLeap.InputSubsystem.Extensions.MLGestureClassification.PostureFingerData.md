---
title: PostureFingerData
summary: gesture classification posture related finger data. 

---

# PostureFingerData




Gesture classification posture related finger data.   [More...](#detailed-description)  




## Detailed Description

```csharp
public struct PostureFingerData; 
```


**Details**

Pinch values are measured between the finger and thumb. In case thumb is the finger, values are same with index's values. 





-----------



## Public Attributes

### PinchAngleOfSeparationDeg {#float-pinchangleofseparationdeg}

Absolute pinch angle (angular) in degrees. -1.0 if the value is not valid. 

```csharp

public float PinchAngleOfSeparationDeg;

```






-----------

### PinchDistanceM {#float-pinchdistancem}

Absolute pinch distance (euclidean) in meters. -1.0 if the value is not valid. 

```csharp

public float PinchDistanceM;

```






-----------

### PinchNormalAngle {#float-pinchnormalangle}

Normalized pinch angle (range 0.0 ~ 1.0). -1.0 if the value is not valid. 

```csharp

public float PinchNormalAngle;

```






-----------

### PinchNormalizedDistance {#float-pinchnormalizeddistance}

Normalized pinch distance (range 0.0 ~ 1.0). -1.0 if the value is not valid. 

```csharp

public float PinchNormalizedDistance;

```






-----------


