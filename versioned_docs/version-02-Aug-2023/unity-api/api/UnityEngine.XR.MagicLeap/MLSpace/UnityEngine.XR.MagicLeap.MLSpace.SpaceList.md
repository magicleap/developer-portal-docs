---
title: SpaceList
summary: a structure containing list of #mlspace. this structure must be initialized by calling #mlspacelistinit before use. 

---

# SpaceList




A structure containing list of #MLSpace. This structure must be initialized by calling #MLSpaceListInit before use.   





## Public Methods

###  SpaceList {#functions-spacelist}

Initializes default values for MLSpaceList. 

```csharp
public SpaceList(
    uint version =1u
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### SpaceCount {#readonly-uint-spacecount}

Number of Magic Leap Spaces. 

```csharp

public readonly uint SpaceCount;

```






-----------

### Spaces {#readonly-intptr-spaces}

List of Magic Leap Spaces. 

```csharp

public readonly IntPtr Spaces;

```






-----------

### Version {#readonly-uint-version}

Version of the structure. 

```csharp

public readonly uint Version;

```






-----------


