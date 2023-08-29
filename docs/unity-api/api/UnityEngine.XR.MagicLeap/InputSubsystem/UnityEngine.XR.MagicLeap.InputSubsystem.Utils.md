---
title: Utils

---

# Utils










## Public Methods

### InputDevice FindMagicLeapDevice {#inputdevice-findmagicleapdevice}

Returns valid Magic Leap input device for provided InputDeviceCharacteristics, InputDevice.isValid   . If there is none matching device the returned  gonna be set as false. 

```csharp
public static InputDevice FindMagicLeapDevice(
    InputDeviceCharacteristics inputDeviceCharacteristics
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDeviceCharacteristics |inputDeviceCharacteristics||






-----------

### void PredictSnapshot {#void-predictsnapshot}

Instructs the input subsystem to use MLPerceptionGetPerdictedSnapshot by default. 

```csharp
public static void PredictSnapshot(
    long timestamp,
    bool predictSnapshots
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| long |timestamp|Time representing the time in ms for which to predict poses (the max value is 100 ms). This timestamp typically comes from out&#95;frame&#95;info.predicted&#95;display&#95;time. |
| bool |predictSnapshots|Boolean representing whether or not to predict the snapshot.|






-----------

### void ResetSnapshotPrediction {#void-resetsnapshotprediction}

Reset the snapshot state of the subsystem to before prediction. Use this to cleanup after PredictSnapshot 

```csharp
public static void ResetSnapshotPrediction()
```






-----------

