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
| @[MagicLeapInputs](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.md) |wrapper||






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
| [IEyesActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.IEyesActions.md) |instance||






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
| [EyesActions](/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.EyesActions.md) |set||






-----------

## Public Attributes

### Data {#inputaction-data}

```csharp

public InputAction Data => m_Wrapper.m_Eyes_Data;

```






-----------

### enabled {#bool-enabled}

```csharp

public bool enabled => Get().enabled;

```






-----------

