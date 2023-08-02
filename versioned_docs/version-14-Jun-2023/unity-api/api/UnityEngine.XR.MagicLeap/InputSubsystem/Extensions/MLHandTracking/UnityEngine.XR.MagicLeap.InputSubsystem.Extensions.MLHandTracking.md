---
title: MLHandTracking

---

# MLHandTracking










## Public Methods

### string GetKeyPointName {#string-getkeypointname}

```csharp
public static string GetKeyPointName(
    KeyPointLocation location,
    int keyPointIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| KeyPointLocation |location||
| int |keyPointIndex||






-----------

### bool GetKeyPointStatus {#bool-getkeypointstatus}

```csharp
public static bool GetKeyPointStatus(
    InputDevice handDevice,
    KeyPointLocation location,
    int keyPointIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |handDevice||
| KeyPointLocation |location||
| int |keyPointIndex||






-----------

### void SetPreRenderHandUpdate {#void-setprerenderhandupdate}

By default the keypoints data is updated twice. To turn this off set enable to false to potentially improve performance. This is not recommended if keypoints are visual in the app as it will significantly decrease the smoothness of visuals. 

```csharp
public static void SetPreRenderHandUpdate(
    bool enable =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |enable||






-----------

### void StartTracking {#void-starttracking}

```csharp
public static void StartTracking()
```






-----------

### void StopTracking {#void-stoptracking}

```csharp
public static void StopTracking()
```






-----------

### bool TryGetKeyPointsMask {#bool-trygetkeypointsmask}

```csharp
public static bool TryGetKeyPointsMask(
    InputDevice handDevice,
    out bool [] keyPointsMask
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |handDevice||
| out bool [] |keyPointsMask||






-----------

## Public Attributes

### MaxKeyPoints {#const-int-maxkeypoints}

The max number of key points to track. 

```csharp

public const int MaxKeyPoints = 28;

```






-----------

## Public Enums

### HandType {#enums-handtype}

Represents if a hand is the right or left hand. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Left | | Left hand.   |
| Right | | Right hand.   |








-----------

### KeyPointLocation {#enums-keypointlocation}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Thumb | 0|   |
| Index | 4|   |
| Middle | 8|   |
| Ring | 12|   |
| Pinky | 16|   |
| Wrist | 20|   |
| Center | 23|   |
| FifthBone | 24|   |








-----------

### KeyPoints {#enums-keypoints}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Thumb_Tip | 0|   |
| Thumb_IP | |   |
| Thumb_MCP | |   |
| Thumb_CMC | |   |
| Index_Tip | |   |
| Index_DIP | |   |
| Index_PIP | |   |
| Index_MCP | |   |
| Middle_Tip | |   |
| Middle_DIP | |   |
| Middle_PIP | |   |
| Middle_MCP | |   |
| Ring_Tip | |   |
| Ring_DIP | |   |
| Ring_PIP | |   |
| Ring_MCP | |   |
| Pinky_Tip | |   |
| Pinky_DIP | |   |
| Pinky_PIP | |   |
| Pinky_MCP | |   |
| Wrist_Center | |   |
| Wrist_Ulnar | |   |
| Wrist_Radial | |   |
| Hand_Center | |   |
| Index_CMC | |   |
| Middle_CMC | |   |
| Ring_CMC | |   |
| Pinky_CMC | |   |








-----------


