---
title: AndroidManifestXml

---

# AndroidManifestXml



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEditor.XR.MagicLeap/UnityEditor.XR.MagicLeap.md) 





Inherits from: <br></br>XmlDocument




## Public Fields

### ManifestElement {#xmlelement-manifestelement}

```csharp

public XmlElement ManifestElement { get; set; }

```






-----------

## Public Methods

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

### string Save {#string-save}

```csharp
public string Save()
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

### string [] GetIncludedPermissions {#string-getincludedpermissions}

```csharp
public string [] GetIncludedPermissions()
```






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

## Public Attributes

### AssetPath {#string-assetpath}

```csharp

public static string AssetPath = "Assets/Plugins/Android/AndroidManifest.xml";

```






-----------

### AndroidXmlNamespace {#const-string-androidxmlnamespace}

```csharp

public const string AndroidXmlNamespace = "http://schemas.android.com/apk/res/android";

```






-----------

## Protected Attributes

### nsMgr {#xmlnamespacemanager-nsmgr}

```csharp

protected XmlNamespaceManager nsMgr;

```






-----------

