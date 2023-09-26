---
title: AndroidManifestXml

---

# AndroidManifestXml



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEditor.XR.MagicLeap/UnityEditor.XR.MagicLeap.md) 





Inherits from: <br></br>XmlDocument




## Public Fields

### ManifestElement {#xmlelement-manifestelement}

```csharp

public XmlElement ManifestElement { get; set; }

```






-----------

## Public Methods

### void AddPermission {#void-addpermission}

```csharp
public void AddPermission(
    string permissionName
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permissionName||






-----------

###  AndroidManifestXml {#functions-androidmanifestxml}

```csharp
public AndroidManifestXml(
    string path
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |path||






-----------

### string [] GetIncludedPermissions {#string-getincludedpermissions}

```csharp
public string [] GetIncludedPermissions()
```






-----------

### void RemovePermission {#void-removepermission}

```csharp
public void RemovePermission(
    string permissionName
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |permissionName||






-----------

### string Save {#string-save}

```csharp
public string Save()
```






-----------

### string SaveAs {#string-saveas}

```csharp
public string SaveAs(
    string path
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |path||






-----------

### void UpdateOrCreateAttribute {#void-updateorcreateattribute}

```csharp
public void UpdateOrCreateAttribute(
    XmlElement xmlParentElement,
    string tag,
    string key,
    string value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| XmlElement |xmlParentElement||
| string |tag||
| string |key||
| string |value||






-----------

## Public Attributes

### AndroidXmlNamespace {#const-string-androidxmlnamespace}

```csharp

public const string AndroidXmlNamespace = "http://schemas.android.com/apk/res/android";

```






-----------

### AssetPath {#string-assetpath}

```csharp

public static string AssetPath = "Assets/Plugins/Android/AndroidManifest.xml";

```






-----------

## Protected Attributes

### nsMgr {#xmlnamespacemanager-nsmgr}

```csharp

protected XmlNamespaceManager nsMgr;

```






-----------


