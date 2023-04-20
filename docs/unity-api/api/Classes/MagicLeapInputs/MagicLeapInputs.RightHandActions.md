---
title: RightHandActions

---

# RightHandActions










## Public Methods

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    RightHandActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [RightHandActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.RightHandActions.md) |set||






-----------

### void SetCallbacks {#void-setcallbacks}

```csharp
public void SetCallbacks(
    IRightHandActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [IRightHandActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IRightHandActions.md) |instance||






-----------

###  RightHandActions {#functions-righthandactions}

```csharp
public RightHandActions(
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

public InputAction Rotation => m_Wrapper.m_RightHand_Rotation;

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_RightHand_Position;

```






-----------

### Keypose {#inputaction-keypose}

```csharp

public InputAction Keypose => m_Wrapper.m_RightHand_Keypose;

```






-----------

