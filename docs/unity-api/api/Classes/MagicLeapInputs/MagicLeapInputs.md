---
title: MagicLeapInputs

---

# MagicLeapInputs







Inherits from: <br></br>IInputActionCollection2,<br></br>IDisposable




## Public Fields

### devices {#readonlyarray-inputdevice-devices}

```csharp

public ReadOnlyArray< InputDevice > devices { get; set; }

```






-----------

### bindingMask {#inputbinding-bindingmask}

```csharp

public InputBinding bindingMask { get; set; }

```






-----------

### asset {#inputactionasset-asset}

```csharp

public InputActionAsset asset { get; set; }

```






-----------

### MagicLeapScheme {#inputcontrolscheme-magicleapscheme}

```csharp

public InputControlScheme MagicLeapScheme { get; set; }

```






-----------

## Public Methods

###  MagicLeapInputs {#functions-magicleapinputs}

```csharp
public MagicLeapInputs()
```






-----------

### IEnumerator&lt; InputAction &gt; GetEnumerator {#ienumerator-inputaction-getenumerator}

```csharp
public IEnumerator< InputAction > GetEnumerator()
```






-----------

### int FindBinding {#int-findbinding}

```csharp
public int FindBinding(
    InputBinding bindingMask,
    out InputAction action
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputBinding |bindingMask||
| out InputAction |action||






-----------

### InputAction FindAction {#inputaction-findaction}

```csharp
public InputAction FindAction(
    string actionNameOrId,
    bool throwIfNotFound =false
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |actionNameOrId||
| bool |throwIfNotFound||






-----------

### void Enable {#void-enable}

```csharp
public void Enable()
```






-----------

### void Dispose {#void-dispose}

```csharp
public void Dispose()
```






-----------

### void Disable {#void-disable}

```csharp
public void Disable()
```






-----------

### bool Contains {#bool-contains}

```csharp
public bool Contains(
    InputAction action
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputAction |action||






-----------

## Public Attributes

### controlSchemes {#readonlyarray-inputcontrolscheme-controlschemes}

```csharp

public ReadOnlyArray< InputControlScheme > controlSchemes => asset.controlSchemes;

```






-----------

### bindings {#ienumerable-inputbinding-bindings}

```csharp

public IEnumerable< InputBinding > bindings => asset.bindings;

```






-----------

### RightHand {#righthandactions-righthand}

```csharp

public RightHandActions RightHand => new RightHandActions(this);

```






-----------

### LeftHand {#lefthandactions-lefthand}

```csharp

public LeftHandActions LeftHand => new LeftHandActions(this);

```






-----------

### HMD {#hmdactions-hmd}

```csharp

public HMDActions HMD => new HMDActions(this);

```






-----------

### Eyes {#eyesactions-eyes}

```csharp

public EyesActions Eyes => new EyesActions(this);

```






-----------

### Controller {#controlleractions-controller}

```csharp

public ControllerActions Controller => new ControllerActions(this);

```






-----------

