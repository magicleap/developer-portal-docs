---
title: RightHandActions

---

# RightHandActions










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

###  RightHandActions {#functions-righthandactions}

```csharp
public RightHandActions(
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
    IRightHandActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [IRightHandActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IRightHandActions.md) |instance||






-----------

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    RightHandActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [RightHandActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.RightHandActions.md) |set||






-----------

## Public Attributes

### Keypose {#inputaction-keypose}

```csharp

public InputAction Keypose => m_Wrapper.m_RightHand_Keypose;

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_RightHand_Position;

```






-----------

### Rotation {#inputaction-rotation}

```csharp

public InputAction Rotation => m_Wrapper.m_RightHand_Rotation;

```






-----------

### enabled {#bool-enabled}

```csharp

public bool enabled => Get().enabled;

```






-----------


