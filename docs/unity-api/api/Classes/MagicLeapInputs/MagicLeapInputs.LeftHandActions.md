---
title: LeftHandActions

---

# LeftHandActions










## Public Methods

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    LeftHandActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [LeftHandActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.LeftHandActions.md) |set||






-----------

### void SetCallbacks {#void-setcallbacks}

```csharp
public void SetCallbacks(
    ILeftHandActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ILeftHandActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.ILeftHandActions.md) |instance||






-----------

###  LeftHandActions {#functions-lefthandactions}

```csharp
public LeftHandActions(
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

public InputAction Rotation => m_Wrapper.m_LeftHand_Rotation;

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_LeftHand_Position;

```






-----------

### Keypose {#inputaction-keypose}

```csharp

public InputAction Keypose => m_Wrapper.m_LeftHand_Keypose;

```






-----------

