---
title: MLVirtualKeyboard
summary: this class provides callbacks and manages the state of the virtual keyboard. 

---

# MLVirtualKeyboard



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


This class provides callbacks and manages the state of the Virtual Keyboard.   


Inherits from: <br></br>MonoBehaviour




## Public Methods

### void Cancel {#void-cancel}

Invokes the Cancel event for the Virtual Keyboard. 

```csharp
public void Cancel()
```






-----------

### void Delete {#void-delete}

Deletes the last element from the input field text. 

```csharp
public void Delete()
```






-----------

### void Hover {#void-hover}

If a ControllerConnectionHandler is assigned, the Bump feedback pattern will be sent to the active controller. 

```csharp
public void Hover()
```






-----------

### void InsertCharacter {#void-insertcharacter}

Appends a string to the end of the input field text. 

```csharp
public void InsertCharacter(
    string character
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |character||






-----------

### void Open {#void-open}

```csharp
public void Open(
    InputField targetField =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputField |targetField||






-----------

### void Return {#void-return}

Adds a NewLine to the input field text. 

```csharp
public void Return()
```






-----------

### void Space {#void-space}

Appends a space to the end of the input field text. 

```csharp
public void Space()
```






-----------

### void Submit {#void-submit}

Invokes the Submit event for the Virtual Keyboard. 

```csharp
public void Submit()
```






-----------

### void ToggleKeyboard {#void-togglekeyboard}

Toggles the active keyboard between (a-Z) and (Alphanumeric) 

```csharp
public void ToggleKeyboard()
```






-----------

### void ToggleShift {#void-toggleshift}

Toggles the shift state of the currently active keyboard. 

```csharp
public void ToggleShift()
```






-----------

## Public Attributes

### OnCharacterAdded {#unityevent-char-oncharacteradded}

```csharp

public UnityEvent< char > OnCharacterAdded = new UnityEvent<char>();

```






-----------

### OnCharacterDeleted {#unityevent-oncharacterdeleted}

```csharp

public UnityEvent OnCharacterDeleted = new UnityEvent();

```






-----------

### OnInputValueChange {#unityevent-string-oninputvaluechange}

```csharp

public UnityEvent< string > OnInputValueChange = new UnityEvent<string>();

```






-----------

### OnKeyboardCancel {#keyboardcancelevent-onkeyboardcancel}

```csharp

public KeyboardCancelEvent OnKeyboardCancel = new KeyboardCancelEvent();

```






-----------

### OnKeyboardSubmit {#keyboardsubmitevent-onkeyboardsubmit}

```csharp

public KeyboardSubmitEvent OnKeyboardSubmit = new KeyboardSubmitEvent();

```






-----------


