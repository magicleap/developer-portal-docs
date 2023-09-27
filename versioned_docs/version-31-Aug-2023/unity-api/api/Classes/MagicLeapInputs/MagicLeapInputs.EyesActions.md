---
title: EyesActions

---

# EyesActions










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

###  EyesActions {#functions-eyesactions}

```csharp
public EyesActions(
    @MagicLeapInputs wrapper
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| @[MagicLeapInputs](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.md) |wrapper||






-----------

### InputActionMap Get {#inputactionmap-get}

```csharp
public InputActionMap Get()
```






-----------

### void SetCallbacks {#void-setcallbacks}

```csharp
public void SetCallbacks(
    IEyesActions instance
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [IEyesActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IEyesActions.md) |instance||






-----------

### implicit operator InputActionMap {#implicit-operator-inputactionmap}

```csharp
public static implicit operator InputActionMap(
    EyesActions set
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [EyesActions](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.EyesActions.md) |set||






-----------

## Public Attributes

### Data {#inputaction-data}

```csharp

public InputAction Data => m_Wrapper.m_Eyes_Data;

```






-----------

### Position {#inputaction-position}

```csharp

public InputAction Position => m_Wrapper.m_Eyes_Position;

```






-----------

### Rotation {#inputaction-rotation}

```csharp

public InputAction Rotation => m_Wrapper.m_Eyes_Rotation;

```






-----------

### enabled {#bool-enabled}

```csharp

public bool enabled => Get().enabled;

```






-----------


