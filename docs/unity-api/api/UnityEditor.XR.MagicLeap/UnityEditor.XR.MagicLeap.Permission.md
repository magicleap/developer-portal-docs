---
title: Permission

---

# Permission



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEditor.XR.MagicLeap/UnityEditor.XR.MagicLeap.md) 








## Public Fields

### Name {#string-name}

```csharp

public string Name { get; set; }

```






-----------

### MinimumApiLevel {#int-minimumapilevel}

```csharp

public int MinimumApiLevel { get; set; }

```






-----------

### Level {#protectionlevel-level}

```csharp

public ProtectionLevel Level { get; set; }

```






-----------

### Enabled {#bool-enabled}

```csharp

public bool Enabled { get; set; }

```






-----------

### Description {#string-description}

```csharp

public string Description { get; set; }

```






-----------

## Public Attributes

### LevelDescriptions {#readonly-dictionary-protectionlevel,-string-leveldescriptions}

```csharp

public static readonly Dictionary< ProtectionLevel, string > LevelDescriptions = new Dictionary<ProtectionLevel, string>()
        {
            { ProtectionLevel.Normal, "Normal permissions will be autmatically granted at install time if included in AndroidManifest.xml." },
            { ProtectionLevel.Dangerous, "Dangerous permissions will require an additional runtime request from the app, and the user will have the option to deny the permission." }
        };

```






-----------

## Public Enums

### ProtectionLevel {#enums-protectionlevel}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Normal | |   |
| Dangerous | |   |








-----------

