---
title: MLInputCustomHapticsInfo
summary: or pre-defined patterns to be played. 

---

# MLInputCustomHapticsInfo




A structure containing a list of [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command and/or pre-defined patterns to be played.   


Inherits from: <br></br>IInputDeviceCommandInfo,<br></br>IDisposable




## Public Methods

### void Dispose {#void-dispose}

```csharp
public void Dispose()
```






-----------

###  MLInputCustomHapticsInfo {#functions-mlinputcustomhapticsinfo}

```csharp
public MLInputCustomHapticsInfo(
    List< NativeBindings.MLInputCustomHaptics > customHaptics
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| List&lt; [NativeBindings.MLInputCustomHaptics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.NativeBindings.MLInputCustomHaptics.md) &gt; |customHaptics|A structure containing information about the [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) command and/or pre-defined pattern to be played. A custom haptics pattern can be played by combining [Buzz](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Haptics/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Haptics.Buzz.md) haptic command and/or a pre-defined pattern, this structure will hold info of a pattern to be added to the custom haptics array. |






-----------

## Public Attributes

### CustomHapticsArrayPtr {#readonly-intptr-customhapticsarrayptr}

An array containing the list of buzz command and/or pre-defined patterns. 

```csharp

public readonly IntPtr CustomHapticsArrayPtr;

```






-----------

### Size {#readonly-uint-size}

Size of the array. 

```csharp

public readonly uint Size;

```






-----------

### Version {#readonly-uint-version}

Version of this structure. 

```csharp

public readonly uint Version;

```






-----------

### typeStatic {#fourcc-typestatic}

```csharp

public FourCC typeStatic => commandType;

```






-----------


