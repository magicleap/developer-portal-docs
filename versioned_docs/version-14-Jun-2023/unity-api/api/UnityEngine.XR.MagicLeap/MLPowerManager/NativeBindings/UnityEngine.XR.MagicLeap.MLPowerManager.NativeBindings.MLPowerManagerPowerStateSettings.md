---
title: MLPowerManagerPowerStateSettings
summary: a structure to encapsulate settings used by the power manager when requesting the power state to be changed. 

---

# MLPowerManagerPowerStateSettings




A structure to encapsulate settings used by the Power Manager when requesting the power state to be changed.   





## Public Methods

### [MLPowerManagerPowerStateSettings](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/NativeBindings/UnityEngine.XR.MagicLeap.MLPowerManager.NativeBindings.MLPowerManagerPowerStateSettings.md) Init {#mlpowermanagerpowerstatesettings-init}

```csharp
public static MLPowerManagerPowerStateSettings Init(
    uint version =1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### State {#powerstate-state}

New power state to request. 

```csharp

public PowerState State;

```

| Type | Description  | 
|--|--|
| [PowerState](/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md#enums-powerstate) | Power states.  |





-----------

### Version {#uint-version}

Version of this structure. 

```csharp

public uint Version;

```






-----------

