---
title: HMDActions

---

# HMDActions










## Public Methods

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    HMDActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [HMDActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.HMDActions.md) |set||






-----------

### void SetCallbacks {#void-setcallbacks}

```csharp
public void SetCallbacks(
    IHMDActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [IHMDActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IHMDActions.md) |instance||






-----------

###  HMDActions {#functions-hmdactions}

```csharp
public HMDActions(
    @MagicLeapInputs wrapper
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| @[MagicLeapInputs](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.md) |wrapper||






-----------

### InputActionMap Get {#inputactionmap-get}

```csharp
public InputActionMap Get()
```






-----------

### void Enable {#void-enable}

```csharp
public void Enable()
```






-----------

### void Disable {#void-disable}

```csharp
public void Disable()
```






-----------

## Public Attributes

### enabled {#bool-enabled}

```csharp

public bool enabled => Get().enabled;

```






-----------

### Rotation {#inputaction-rotation}

```csharp

public InputAction Rotation => m_Wrapper.m_HMD_Rotation;

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_HMD_Position;

```






-----------

