---
title: CursorState
summary: struct to define the cursor's state. 

---

# CursorState




Struct to define the cursor's state.   





## Public Methods

### [CursorState](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/NativeBindings/UnityEngine.XR.MagicLeap.MLWebView.NativeBindings.CursorState.md) Create {#cursorstate-create}

Create and return an initialized version of this struct. 

```csharp
public static CursorState Create(
    uint xPosition,
    uint yPosition,
    EventFlags modifiers
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |xPosition||
| uint |yPosition||
| [EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags) |modifiers|Flags to set special key states during input. |






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### Modifiers {#eventflags-modifiers}

Should be one or combination of #MLWebViewEventFlags. 

```csharp

public EventFlags Modifiers;

```

| Type | Description  | 
|--|--|
| [EventFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md#enums-eventflags) | Flags to set special key states during input.  |





-----------

### Version {#uint-version}

Version of this struct. 

```csharp

public uint Version;

```






-----------

### XPosition {#uint-xposition}

Horizontal position of the cursor. 

```csharp

public uint XPosition;

```






-----------

### YPosition {#uint-yposition}

Vertical position of the cursor. 

```csharp

public uint YPosition;

```






-----------


