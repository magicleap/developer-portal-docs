---
title: API Overview
sidebar_position: 1
date: 04/01/2022
tags: [Unity, Spaces, ARCloud]
keywords: [Unity, Spaces, ARCloud, Import, Export, Manage, MLSpaces]
---

# MLSpace API Overview

This guide provides a comprehensive overview of the MLSpace API, specifically focusing on the key features and functions used to manage MLSpaces in your applications. It covers topics such as subscribing to the OnLocalizationEvent to monitor localization status changes, fetching available spaces, understanding and getting localization results, localizing into a specific space, and the export and import of spaces. Each topic is explored with detailed explanations and illustrative code snippets, aiming to provide a clear understanding of how to leverage the MLSpace API effectively. The guide offers insights into the usage of key structs, values, and enums, enhancing your ability to create more interactive and responsive applications using MLSpaces.

## LocalizationResult

The `LocalizationResult` struct provides detailed information about the device's localization in an MLSpace. This information is valuable when you need to understand whether the device is localized in a specific MLSpace, and if so, which one.

| Property | Type | Description |
|----------|------|-------------|
| `LocalizationStatus` | `Status` | Gets the status of the localization. This is an enum which can either be `Localized` or `NotLocalized`, indicating whether the device is currently localized to an MLSpace. |
| `Space` | `MLSpace.Space` | Gets the space to which the device is localized, if it is. This is an instance of `MLSpace.Space` which contains the details of the MLSpace to which the device is localized. |

### Examples

There are two primary ways to get a `LocalizationResult`. In both of these examples, if the device is localized, the `Space` property of the `LocalizationResult` provides the `MLSpace.Space` instance that the device is currently localized to.

#### `MLSpaceOnLocalizationChanged` callback

The `OnLocalizationChanged` event is invoked when the localization status of the device changes. Subscribing to this event provides an easy way to receive updates about the localization status.

```csharp
void Start()
{
    MLSpace.OnLocalizationEvent += OnLocalizationChanged;
}

void OnLocalizationChanged(MLSpace.LocalizationResult result)
{
    Debug.Log($"Localization Status: {result.LocalizationStatus}");
    if (result.LocalizationStatus == MLSpace.Status.Localized)
    {
        Debug.Log($"Localized to space: {result.Space.SpaceName}");
    }
}
```

#### Query Localization using `MLSpace.GetLocalizationResult`

The `GetLocalizationResult` method can be used to query the current localization status at any point. The function will return `MLResult.Ok` is the `LocalizationResult` was retrieved successfully.

```csharp
void CheckLocalizationStatus()
{
    MLSpace.GetLocalizationResult(out MLSpace.LocalizationResult result);

    Debug.Log($"Localization Status: {result.LocalizationStatus}");
    if (result.LocalizationStatus == MLSpace.Status.Localized)
    {
        Debug.Log($"Localized to space: {result.Space.SpaceName}");
    }
}
```

## MLSpace.Space

The `MLSpace.Space` structure represents a saved map of a physical environment, known as a Space, on a Magic Leap device.

| Property | Type | Description |
|----------|------|-------------|
| `SpaceId` | `string` | The unique identifier for the Space. |
| `SpaceName` | `string` | The human-readable name of the Space. |

### Get List Of Available Spaces Example

The method `MLSpace.GetSpaceList(...)` retrieves the list of available MLSpaces on the device.

```csharp
void GetListOfAvailableSpaces()
{
    // Get the list of spaces
    MLSpace.GetSpaceList(out MLSpace.Space[] list);
    // ...
}
```

### Localize Into a Space Example

The function `MLSpace.RequestLocalization(...)` requests the system to localize the device to a specific MLSpace. The function requires the `SpaceId` of the MLSpace for localization. This is an asynchronous request. Use `MLSpace.GetLocalizationResult()` function to get the `LocalizationResult` of the localization or use the `MLSpace.OnLocalizationEvent` to listen to  the localization events.

A new request for localization will override all the past requests for localization that are yet to be completed.

```csharp title="Required Namespaces"
using System;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
using UnityEngine.XR.MagicLeap.Native;
```

```csharp title="Localize to Space Example"
    public void LocalizeToSpace()
        {
            // Declare an MLSpace.SpaceInfo
            MLSpace.SpaceInfo info;
            // Set the SpaceId
            string SpaceID = "YOU_SPACE_ID_HERE";
            if (Guid.TryParse(SpaceID, out Guid spaceGuid))
            {
                info.SpaceId = MLConvert.FromUnity(spaceGuid);
                // Request localization
               MLResult.Code result =  MLSpace.RequestLocalization(ref info);

                if (result == MLResult.Code.Ok)
                {
                    Debug.Log($"Request to localize into Space with ID {info.SpaceId} was successful.");
                }
                else
                {
                    Debug.LogError($"Error requesting to localize into Space: {result}");
                }
            }
            else
            {
                Debug.LogError($"Space ID {SpaceID} could not be converted to Guid.");
            }
          
        }
```

## Export Spaces

The `MLSpace.ExportSpace(...)` function exports a MLSpace into a binary data format that can be saved and later used for import. The `ExportSpace` method requires an instance of the `MLSpace.SpaceInfo` struct as input parameter, and it outputs an instance of the `MLSpace.SpaceData` struct.

| Parameter | Description |
| --- | --- |
| `in MLSpace.SpaceInfo info` | This input parameter is an instance of the `MLSpace.SpaceInfo` struct. It specifies the `SpaceId` of the MLSpace that is being exported. The `SpaceId` uniquely identifies an MLSpace. |
| `out MLSpace.SpaceData exportData` | This output parameter is an instance of the `MLSpace.SpaceData` struct. It contains the exported data of the MLSpace, which can be saved to a file for later use. |

**Returns**

- `MLResult.Ok` Export was successful.
- `MLResult.InvalidParam` One or more input parameters are not valid.
- `MLResult.PermissionDenied` Necessary permission is missing.
- `MLResult.UnspecifiedFailure` Operation failed for unknown reason.
- `MLSpaceResult.UnavailableSpace` Operation failed due an unavailable Space.

### Permissions

Before the `ExportSpace` method can be used, the `com.magicleap.permission.SPACE_IMPORT_EXPORT` permission must be **[requested at runtime](/docs/guides/unity/permissions/requesting-permissions.md#requesting-normal-install-time-permissions)**. Without this permission, the function call will fail.

### Export Space Example

Here's an example of how to use the `ExportSpace` method to export a MLSpace and save it to a file:

```csharp title="Required Namespaces"
using System;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
using UnityEngine.XR.MagicLeap.Native;
```

```csharp title="Export Space Example"
  public void ExportSpace()
        {
            MLSpace.SpaceInfo info;
            string SpaceID = "YOU_SPACE_ID_HERE";
            if (Guid.TryParse(SpaceID, out Guid spaceGuid))
            {
                info.SpaceId = MLConvert.FromUnity(spaceGuid);

                MLResult.Code result = MLSpace.ExportSpace(in info, out MLSpace.SpaceData exportData);

                if (result == MLResult.Code.Ok)
                {
                    var binaryData = exportData.Data;
                    SaveSpaceToFile(binaryData);
                }
            }
            else
            {
                Debug.LogError($"Space ID {SpaceID} could not be converted to Guid.");
            }

        }

        private void SaveSpaceToFile(byte[] binaryData)
        {
            string filePath = "YOU_FILE_PATH_HERE";
            using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
            {
                fileStream.Write(binaryData, 0, binaryData.Length);
            }

            if (File.Exists(filePath))
            {
                Debug.Log("Binary data saved to file: " + filePath);
            }
            else
            {
                Debug.LogError("Failed to save binary data to file: " + filePath);
            }
        }
```

:::warning The exported MLSpace data may contain sensitive information

We recommend that developers encrypt this data before storing it to ensure the privacy and security of their users.

:::

## Import Spaces

The `MLSpace.ImportSpace(in MLSpace.SpaceData data, out MLSpace.SpaceInfo info)` function is used to import a MLSpace from a binary data format that was previously exported using the `MLSpace.ExportSpace()` function. This function is particularly useful when you need to transfer spaces between devices.

The `ImportSpace` function requires two parameters:

| Parameter | Description |
| --- | --- |
| `in SpaceData data` | An instance of `MLSpace.SpaceData` containing the binary data of the exported space. This data is usually loaded from a file or received from another device|
| `out MLSpace.SpaceInfo id` | An out parameter that will contain the `MLSpace.SpaceInfo` of the imported MLSpace if the import operation is successful. |

**Returns**

- `MLResult.Ok` Import was successful.
- `MLResult.InvalidParam One` or more input parameters are not valid.
- `MLResult.PermissionDenied` Necessary permission is missing.
- `MLResult.UnspecifiedFailure` Operation failed for unknown reason.
- `MLSpaceResult.IncompatibleSpace` Operation failed due an incompatible Space.
- `MLSpaceResult.SpaceAlreadyExists` Operation failed because Space being imported already exists

### Permissions

In order to utilize the `ImportSpace` function, your application must first request and be granted the `com.magicleap.permission.SPACE_IMPORT_EXPORT` permission at runtime. Without this permission, the function call will fail.

### Import Spaces Example

Here is an example of how to load a MLSpace from binary data using the `MLSpaceImportSpace` function. In this example, the binary data of a MLSpace is loaded from a file and then imported as a MLSpace using `ImportSpace`. After the space is successfully imported, the list of available spaces is refreshed. If no space was previously exported to a file, a warning message is shown.

```csharp title="Required Namespaces"
using System.IO;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
```

```csharp title="Import Space Example"
 public void ImportSpace()
        {
            string filePath = "/YOUR/FILE/PATH/HERE";

            if (!File.Exists(filePath))
            {
                Debug.LogWarning("No spaces have been exported, cannot import last exported space.");
                return;
            }

            byte[] binaryData;
            using (FileStream fileStream = new FileStream(filePath, FileMode.Open))
            {
                binaryData = new byte[fileStream.Length];
                fileStream.Read(binaryData, 0, binaryData.Length);
            }

            MLSpace.SpaceData data = new MLSpace.SpaceData();
            data.Size = (uint)binaryData.Length;
            data.Data = binaryData;

            MLResult.Code result = MLSpace.ImportSpace(in data, out MLSpace.SpaceInfo info);
            bool didSucceed = MLResult.DidNativeCallSucceed(result, nameof(MLSpace.ImportSpace));
            if (didSucceed)
            {
                Debug.Log($"Space {info.SpaceId} Imported Successfully");
            }
        }
```
