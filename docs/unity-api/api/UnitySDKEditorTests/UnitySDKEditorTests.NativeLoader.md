---
title: NativeLoader

---

# NativeLoader



**NameSpace:** 
[UnitySDKEditorTests](/unity-api/api/UnitySDKEditorTests/UnitySDKEditorTests.md) 








## Public Methods

### IntPtr LoadLibrary {#intptr-loadlibrary}

```csharp
public IntPtr LoadLibrary(
    string lpFileName
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |lpFileName||






-----------

### IntPtr GetProcAddress {#intptr-getprocaddress}

```csharp
public IntPtr GetProcAddress(
    IntPtr hModule,
    string procedureName
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |hModule||
| string |procedureName||






-----------

### bool FreeLibrary {#bool-freelibrary}

```csharp
public bool FreeLibrary(
    IntPtr hModule
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |hModule||






-----------

