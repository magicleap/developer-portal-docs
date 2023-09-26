---
title: VisualStudioProjectFileHook
summary: sets up visual studio project files for this package to show the same folder structure in the ide as in the file explorer. without this class, all files in this package show up under the same root folder when its added as a local package to a unity project. what's worse is that if the package contains files of the same name in 2 different paths, visual studio only shows one of those files and updating one ends up deleting the other. 

---

# VisualStudioProjectFileHook



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEditor.XR.MagicLeap/UnityEditor.XR.MagicLeap.md) 


Sets up Visual Studio Project Files for this package to show the same folder structure in the IDE as in the file explorer. Without this class, all files in this package show up under the same root folder when its added as a local package to a Unity project. What's worse is that if the package contains files of the same name in 2 different paths, Visual Studio only shows one of those files and updating one ends up deleting the other.   


Inherits from: <br></br>AssetPostprocessor




## Public Methods

### string OnGeneratedCSProject {#string-ongeneratedcsproject}

```csharp
public static string OnGeneratedCSProject(
    string path,
    string content
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |path||
| string |content||






-----------


