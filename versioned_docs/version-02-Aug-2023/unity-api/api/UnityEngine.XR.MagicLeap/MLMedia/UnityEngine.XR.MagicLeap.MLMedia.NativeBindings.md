---
title: NativeBindings
summary: general media native bindings. 

---

# NativeBindings




General media native bindings.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### string GetResultString {#string-getresultstring}

Gets the result string for a MLResult.Code. 

```csharp
public static string GetResultString(
    MLResult.Code resultCode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) |resultCode|The MLResult.Code to be requested.|






**Returns**: The result string.



-----------

### IntPtr MLMediaResultGetString {#intptr-mlmediaresultgetstring}

Gets a readable version of the result code as an ASCII string. 

```csharp
public IntPtr MLMediaResultGetString(
    MLResult.Code result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) |result|The MLResult.Code that should be converted.|






**Returns**: ASCII string containing a readable version of the result code.



-----------


