---
title: MLPluginLog
summary: used to print logs within the plugin. 

---

# MLPluginLog



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Used to print logs within the plugin.   





## Public Fields

### Level {#verbositylevel-level}

Gets or sets current level of logs to print. 

```csharp

public static VerbosityLevel Level { get; set; }

```

| Type | Description  | 
|--|--|
| [VerbosityLevel](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPluginLog.md#enums-verbositylevel) | Different verbosity levels of which logs to print. Modify this to change the verbosity of the Magic Leap APIs.  |





-----------

## Public Methods

### void Debug {#void-debug}

Prints the given log message. 

```csharp
public static void Debug(
    object logMsg
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |logMsg|The message to print.|






-----------

### void DebugFormat {#void-debugformat}

Prints the given log message with formatting. 

```csharp
public static void DebugFormat(
    string logMsg,
    params object [] args
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |logMsg|The formatted message to print.|
| params object [] |args|The arguments to pass the formatted log message|






-----------

### void Error {#void-error}

Prints the given log message as an error. 

```csharp
public static void Error(
    object logMsg
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |logMsg|The error to print.|






-----------

### void ErrorFormat {#void-errorformat}

Prints the given log message as an error with formatting. 

```csharp
public static void ErrorFormat(
    string logMsg,
    params object [] args
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |logMsg|The formatted error message to print.|
| params object [] |args|The arguments to pass the formatted message|






-----------

### void Warning {#void-warning}

Prints the given log message as a warning. 

```csharp
public static void Warning(
    object logMsg
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |logMsg|The warning to print.|






-----------

### void WarningFormat {#void-warningformat}

Prints the given log message as a warning with formatting. 

```csharp
public static void WarningFormat(
    string logMsg,
    params object [] args
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |logMsg|The formatted warning message to print.|
| params object [] |args|The arguments to pass the formatted message|






-----------

## Public Enums

### VerbosityLevel {#enums-verbositylevel}

Different verbosity levels of which logs to print. Modify this to change the verbosity of the Magic Leap APIs. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Silent | | Don't print any MLPlugin logs.   |
| ErrorsOnly | | Print only MLPlugin error logs.   |
| WarningsAndErrors | | Print MLPlugin error and warning logs.   |
| Verbose | | Print all MLPlugin logs.   |








-----------


