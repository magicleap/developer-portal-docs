---
title: HMDActions

---

# HMDActions










## Public Methods

### void Disable {#void-disable}

```csharp
public void Disable()
```






-----------

### void Enable {#void-enable}

```csharp
public void Enable()
```






-----------

### InputActionMap Get {#inputactionmap-get}

```csharp
public InputActionMap Get()
```






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
| @[MagicLeapInputs](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.md) |wrapper||






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
| [IHMDActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IHMDActions.md) |instance||






-----------

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    HMDActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [HMDActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.HMDActions.md) |set||






-----------

## Public Attributes

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_HMD_Position;

```






-----------

### Rotation {#inputaction-rotation}

```csharp

public InputAction Rotation => m_Wrapper.m_HMD_Rotation;

```






-----------

### enabled {#bool-enabled}

```csharp

public bool enabled => Get().enabled;

```






-----------


