---
title: LeftHandActions

---

# LeftHandActions










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

###  LeftHandActions {#functions-lefthandactions}

```csharp
public LeftHandActions(
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
    ILeftHandActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [ILeftHandActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.ILeftHandActions.md) |instance||






-----------

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    LeftHandActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [LeftHandActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.LeftHandActions.md) |set||






-----------

## Public Attributes

### Keypose {#inputaction-keypose}

```csharp

public InputAction Keypose => m_Wrapper.m_LeftHand_Keypose;

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_LeftHand_Position;

```






-----------

### Rotation {#inputaction-rotation}

```csharp

public InputAction Rotation => m_Wrapper.m_LeftHand_Rotation;

```






-----------

### enabled {#bool-enabled}

```csharp

public bool enabled => Get().enabled;

```






-----------


