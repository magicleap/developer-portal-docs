---
title: NativeBindings
summary: see ml-space.h for additional comments. 

---

# NativeBindings




See ml&#95;space.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceExportSpace {#mlresultcode-mlspaceexportspace}

Export an on device Magic Leap Space. 

```csharp
public MLResult.Code MLSpaceExportSpace(
    in SpaceExportInfo exportInfo,
    ref SpaceExportOutData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [SpaceExportInfo](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceExportInfo.md) |exportInfo|A structure containing information about the Space export settings. This structure must be initialized by calling #MLSpaceExportInfoInit before use. |
| ref [SpaceExportOutData](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceExportOutData.md) |data|A structure containing information about the exported Space. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceGetLocalizationResult {#mlresultcode-mlspacegetlocalizationresult}

Get the localization results. 

```csharp
public MLResult.Code MLSpaceGetLocalizationResult(
    ulong handle,
    out SpaceLocalizationResult result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out [SpaceLocalizationResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceLocalizationResult.md) |result|A structure containing information about the device's localization state. This structure must be initialized by calling #MLSpaceLocalizationResultInit before usebefore use. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceGetSpaceList {#mlresultcode-mlspacegetspacelist}

Get the list of available spaces. The list of spaces returned will depend on the current device mapping mode. Only the Spaces associated with the current mapping mode will be returned by this call.Device mapping mode can be changed via the system application(s). 

```csharp
public MLResult.Code MLSpaceGetSpaceList(
    ulong hanlde,
    out SpaceFilter queryFilter,
    out SpaceList spaceList
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |hanlde||
| out [SpaceFilter](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceFilter.md) |queryFilter|A collection of filters for Magic Leap Spaces. This structure must be initialized by calling #MLSpaceQueryFilterInit before use. There is no support for filters at this time. |
| out [SpaceList](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceList.md) |spaceList|A structure containing list of #MLSpace. This structure must be initialized by calling #MLSpaceListInit before use. |


**Details**

The list memory is owned by the library, call #MLSpaceReleaseSpaceList to release the memory. Each get #MLSpaceGetSpaceList should have a corresponding #MLSpaceReleaseSpaceList. 





-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceImportSpace {#mlresultcode-mlspaceimportspace}

Import a Magic Leap Space. The #MLSpaceImportInfo memory is owned by the app and the app should make sure to release the memory once the API call has returned. 

```csharp
public MLResult.Code MLSpaceImportSpace(
    in SpaceImportInfo importInfo,
    ref SpaceImportOutData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [SpaceImportInfo](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceImportInfo.md) |importInfo|A structure containing information needed to import Magic Leap Space. This structure must be initialized by calling #MLSpaceImportInfoInit before use. |
| ref [SpaceImportOutData](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceImportOutData.md) |data|A structure containing information about the imported Space. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceManagerCreate {#mlresultcode-mlspacemanagercreate}

Creates a Magic Leap Space manager handle. 

```csharp
public MLResult.Code MLSpaceManagerCreate(
    in Settings settings,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Settings](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Settings.md) |settings|A structure containing settings for the space manager. This structure must be initialized by calling #MLSpaceManagerSettingsInit before use. |
| out ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceManagerDestroy {#mlresultcode-mlspacemanagerdestroy}

Destroys a Space manager handle. 

```csharp
public MLResult.Code MLSpaceManagerDestroy(
    ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceReleaseExportData {#mlresultcode-mlspacereleaseexportdata}

Release resources acquired in #MLSpaceExportSpace. 

```csharp
public MLResult.Code MLSpaceReleaseExportData(
    ref SpaceExportOutData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [SpaceExportOutData](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceExportOutData.md) |data|A structure containing information about the exported Space. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceReleaseSpaceList {#mlresultcode-mlspacereleasespacelist}

Release the list of available spaces. 

```csharp
public MLResult.Code MLSpaceReleaseSpaceList(
    ulong handle,
    out SpaceList list
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| out [SpaceList](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceList.md) |list|A structure containing list of #MLSpace. This structure must be initialized by calling #MLSpaceListInit before use. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceRequestLocalization {#mlresultcode-mlspacerequestlocalization}

Send a request to localize to a given Magic Leap Space. 

```csharp
public MLResult.Code MLSpaceRequestLocalization(
    ulong handle,
    ref SpaceLocalizationInfo spaceList
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [SpaceLocalizationInfo](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceLocalizationInfo.md) |spaceList|A collection of parameters to be used for localization request. This structure must be initialized by calling #MLSpaceLocalizationInfoInit before use. |






-----------

### [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code) MLSpaceSetCallbacks {#mlresultcode-mlspacesetcallbacks}

Set the callbacks for events related to the Magic Leap Space. 

```csharp
public MLResult.Code MLSpaceSetCallbacks(
    ulong handle,
    ref SpaceCallbacks callbacks,
    IntPtr userData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |handle||
| ref [SpaceCallbacks](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.SpaceCallbacks.md) |callbacks|A structure containing callbacks for events related to the Space. This structure must be initialized by calling #MLSpaceCallbacksInit before use. Application can unregister(stop receiving callbacks) at any time by setting the corresponding callback to NULL. |
| IntPtr |userData||






-----------


