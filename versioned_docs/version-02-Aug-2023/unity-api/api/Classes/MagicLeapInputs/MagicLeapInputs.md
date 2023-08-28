---
title: MagicLeapInputs

---

# MagicLeapInputs







Inherits from: <br></br>IInputActionCollection2,<br></br>IDisposable




## Public Fields

### Controller {#controlleractions-controller}

```csharp

public ControllerActions Controller { get; set; }

```






-----------

### Eyes {#eyesactions-eyes}

```csharp

public EyesActions Eyes { get; set; }

```






-----------

### HMD {#hmdactions-hmd}

```csharp

public HMDActions HMD { get; set; }

```






-----------

### LeftHand {#lefthandactions-lefthand}

```csharp

public LeftHandActions LeftHand { get; set; }

```






-----------

### MagicLeapScheme {#inputcontrolscheme-magicleapscheme}

```csharp

public InputControlScheme MagicLeapScheme { get; set; }

```






-----------

### RightHand {#righthandactions-righthand}

```csharp

public RightHandActions RightHand { get; set; }

```






-----------

### asset {#inputactionasset-asset}

```csharp

public InputActionAsset asset { get; set; }

```






-----------

### bindingMask {#inputbinding?-bindingmask}

```csharp

public InputBinding? bindingMask { get; set; }

```






-----------

### bindings {#ienumerable-inputbinding-bindings}

```csharp

public IEnumerable< InputBinding > bindings { get; set; }

```






-----------

### controlSchemes {#readonlyarray-inputcontrolscheme-controlschemes}

```csharp

public ReadOnlyArray< InputControlScheme > controlSchemes { get; set; }

```






-----------

### devices {#readonlyarray-inputdevice-?-devices}

```csharp

public ReadOnlyArray< InputDevice >? devices { get; set; }

```






-----------

## Public Methods

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

### void Disable {#void-disable}

```csharp
public void Disable()
```






-----------

### void Dispose {#void-dispose}

```csharp
public void Dispose()
```






-----------

### void Enable {#void-enable}

```csharp
public void Enable()
```






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

### IEnumerator&lt; InputAction &gt; GetEnumerator {#ienumerator-inputaction-getenumerator}

```csharp
public IEnumerator< InputAction > GetEnumerator()
```






-----------

###  MagicLeapInputs {#functions-magicleapinputs}

```csharp
public MagicLeapInputs()
```






-----------


