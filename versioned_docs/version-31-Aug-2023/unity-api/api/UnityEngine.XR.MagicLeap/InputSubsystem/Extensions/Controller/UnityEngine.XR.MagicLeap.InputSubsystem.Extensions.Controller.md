---
title: Controller

---

# Controller










## Public Methods

### bool AttachTriggerListener {#bool-attachtriggerlistener}

Exposed callback for controller NativeBindings.OnTrigger   trigger event. 

```csharp
public static bool AttachTriggerListener(
    Action< ushort, MLInputControllerTriggerEvent, float > triggerCallback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Action&lt; ushort, [MLInputControllerTriggerEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Controller/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Controller.md#enums-mlinputcontrollertriggerevent), float &gt; |triggerCallback|Trigger events types. |






-----------

### [State](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Controller/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Controller.State.md) GetState {#state-getstate}

```csharp
public static State GetState()
```






-----------

### void RemoveTriggerListener {#void-removetriggerlistener}

```csharp
public static void RemoveTriggerListener(
    Action< ushort, MLInputControllerTriggerEvent, float > triggerCallback
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Action&lt; ushort, [MLInputControllerTriggerEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Controller/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Controller.md#enums-mlinputcontrollertriggerevent), float &gt; |triggerCallback|Trigger events types. |






-----------

## Public Attributes

### MaxControllerTouchpadTouches {#const-uint-maxcontrollertouchpadtouches}

The maximum number of controller touchpad touches that are supported. 

```csharp

public const uint MaxControllerTouchpadTouches = 2;

```






-----------

## Public Enums

### CalibrationAccuracy {#enums-calibrationaccuracy}

The calibration accuracy levels for controller. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Bad | 0| The calibration accuracy is bad.   |
| Low | 1| The calibration accuracy is low.   |
| Medium | 2| The calibration accuracy is medium.   |
| High | 3| The calibration accuracy is high.   |








-----------

### MLInputControllerButton {#enums-mlinputcontrollerbutton}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | |   |
| Bumper | |   |
| Menu | |   |
| Count | |   |








-----------

### MLInputControllerHand {#enums-mlinputcontrollerhand}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | |   |
| Left | |   |
| Right | |   |
| Both | |   |








-----------

### MLInputControllerTriggerEvent {#enums-mlinputcontrollertriggerevent}

Trigger events types. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Pull | | This is used when trigger is pulled down, and the normalized value is &gt; 0.   |
| Release | | /This is used when trigger is fully released, and the normalized value is 0.   |
| Click | | This is used when trigger is pulled and released within a short duration.   |
| Hold | | This is used when trigger is pulled and held for a longer duration.   |








-----------

### MLInputControllerType {#enums-mlinputcontrollertype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | |   |
| Device | |   |








-----------


