---
title: MLSpace Examples
sidebar_position: 2
date: 06/09/2023
tags: [Unity, Spaces, ARCloud]
keywords: [Unity, Spaces, ARCloud, Import, Export, Manage, MLSpaces]
---

# MLSpace Examples

These scripts demonstrate various functionalities of the MLSpace API, which is used for managing spaces in a mixed reality environment. The scripts are broken down into specific functionalities: requesting permissions, retrieving available spaces, localizing into a space, exporting and saving spaces, and importing previously saved spaces. Each script serves as an isolated example of a particular functionality, making it easier to understand and implement these functions in your own projects. They are designed to be used with the Unity game engine and the Magic Leap platform. Note that they should be used in a real device environment for proper functioning.

:::caution
This features requires the `com.magicleap.permission.SPACE_IMPORT_EXPORT` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

## List Available Spaces

This script demonstrates how to fetch the list of available Spaces using the MLSpace API. Then the script prints the name of each Space to the debug log.

```csharp

// This script fetches the list of available spaces.

using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class GetSpacesExample : MonoBehaviour
{
    private List<MLSpace.Space> Spaces;

    void Start()
    {
        GetListOfAvailableSpaces();
    }

    void GetListOfAvailableSpaces()
    {
        MLSpace.GetSpaceList(out MLSpace.Space[] list);
        Spaces = new List<MLSpace.Space>(list);

        foreach (var space in Spaces)
        {
            Debug.Log("Space name: " + space.SpaceName);
        }
    }
}


```

## Localizing into a Space

This script demonstrates how to localize a Magic Leap device into a specific space. The script automatically localizes to the first available space in the list, showcasing the basic process of using the localization feature.

```csharp
// This script localizes into the first available space.

using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class LocalizeSpaceExample : MonoBehaviour
{
    private List<MLSpace.Space> Spaces;

    void Start()
    {
        GetListOfAvailableSpaces();
        LocalizeToSpace();
    }

    void GetListOfAvailableSpaces()
    {
        MLSpace.GetSpaceList(out MLSpace.Space[] list);
        Spaces = new List<MLSpace.Space>(list);
    }

    void LocalizeToSpace()
    {
        if (Spaces.Count == 0)
        {
            Debug.LogWarning("No spaces to localize to. Please use the Spaces app to create a space first.");
            return;
        }
        MLSpace.SpaceInfo info;
        var space = Spaces[0];  // Using the first space in the list
        info.SpaceId = space.SpaceId;
        MLSpace.RequestLocalization(ref info);
    }
}

```

## Exporting and Saving Spaces

This script is concerned with exporting a space and saving it to a file. Exporting a space allows you to share it between devices. In this script, the first available space is exported and then saved to a binary file.

```csharp
// This script exports the first available space and saves it to a file.

using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class ExportSpaceExample : MonoBehaviour
{
    private List<MLSpace.Space> Spaces;
    private string spaceFileName = "exported_space.bin";
    private string filePath;

    void Start()
    {
        filePath = Path.Combine(Application.persistentDataPath, spaceFileName);
        //Get all of the saved Spaces on the devices
        GetListOfAvailableSpaces();
        ExportSpace();
    }

    void GetListOfAvailableSpaces()
    {
        MLSpace.GetSpaceList(out MLSpace.Space[] list);
        Spaces = new List<MLSpace.Space>(list);
    }

    public void ExportSpace()
    {
        if (Spaces.Count == 0)
        {
            Debug.LogWarning("No spaces to be exported. Please use the Spaces app first.");
            return;
        }
        var space = Spaces[0];  // Using the first space in the list

        MLSpace.SpaceInfo info;
        info.SpaceId = space.SpaceId;

        MLResult.Code result = MLSpace.ExportSpace(in info, out MLSpace.SpaceData exportData);

        var binaryData = exportData.Data;

        SaveSpaceToFile(binaryData);
    }

    private void SaveSpaceToFile(byte[] binaryData)
    {
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
}

```


## Importing Spaces

This script demonstrates importing a previously saved space. Importing a space involves loading a previously exported space, allowing the device to recognize and localize into it. In this case, the script attempts to import a space from a previously saved binary file.


```csharp
// This script imports a previously saved space.

using System.IO;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class ImportSpaceExample : MonoBehaviour
{
    private string spaceFileName = "exported_space.bin";
    private string filePath;

    void Start()
    {
        filePath = Path.Combine(Application.persistentDataPath, spaceFileName);
        ImportLastSpace();
    }

    public void ImportLastSpace()
    {
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

        if (result == MLResult.Code.Ok)
        {
            Debug.Log("Space imported successfully");
        }
        else
        {
            Debug.LogError("Failed to import space");
        }
    }
}

```

## Complete Example

This example script that script demonstrates how to use the Magic Leap `MLSpace` API to manage and interact with virtual spaces. The script manages a list of available `MLSpace` instances, keeps track of the localization status, and supports the importing and exporting of spaces. The script logs relevant status updates and errors are logged to the Debug Log, providing visibility to the script's operation.

```csharp
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class MLSpaceTest : MonoBehaviour
{
    private List<MLSpace.Space> Spaces;
    private List<string> SpaceNames;
    private readonly MLPermissions.Callbacks permissionCallbacks = new MLPermissions.Callbacks();
    private MLSpace.LocalizationResult localizationResult;
    private string filePath;
    private string spaceFileName = "exported_space.bin";

    void Start()
    {
        // Setup event listeners for permissions and localization events.
        permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
        permissionCallbacks.OnPermissionDenied += OnPermissionDenied;
        permissionCallbacks.OnPermissionDeniedAndDontAskAgain += OnPermissionDenied;
        MLSpace.OnLocalizationEvent += OnLocalizationChanged;

        // Request permissions for space import/export and define the path for the exported space file.
        MLPermissions.RequestPermission(MLPermission.SpaceImportExport, permissionCallbacks);
        filePath = Path.Combine(Application.persistentDataPath, spaceFileName);

        // Perform each of the MLSpace API functions
        GetLocalizationResult()
        GetListOfAvailableSpaces();
        ExportSpace();
        ImportLastSpace();
        LocalizeToSpace();
    }

    void OnDestroy()
    {
        // Unsubscribe event listeners when the object is destroyed.
        permissionCallbacks.OnPermissionGranted -= OnPermissionGranted;
        permissionCallbacks.OnPermissionDenied -= OnPermissionDenied;
        permissionCallbacks.OnPermissionDeniedAndDontAskAgain -= OnPermissionDenied;
        MLSpace.OnLocalizationEvent -= OnLocalizationChanged;
    }

    void GetListOfAvailableSpaces()
    {
        // Get the list of available spaces and log them.
        MLSpace.Space[] list;
        MLSpace.GetSpaceList(out list);
        Spaces = new List<MLSpace.Space>();
        SpaceNames = new List<string>();

        for (int i = 0; i < list.Length; ++i)
        {
            Spaces.Add(list[i]);
            SpaceNames.Add(list[i].SpaceName);
        }

        Debug.Log("Available Spaces: " + string.Join(", ", SpaceNames));
    }

    void UpdateStatus()
    {
        // Update and log the localization status and the name of the localized space.
        string status = localizationResult.LocalizationStatus.ToString();
        string spaceName = localizationResult.LocalizationStatus == MLSpace.Status.Localized ? localizationResult.Space.SpaceName : "None";

        Debug.Log("Localization Status: " + status);
        Debug.Log("Localized Space Name: " + spaceName);
    }

    void GetLocalizationResult()
    {
        // Get the localization result and update the status.
        MLSpace.GetLocalizationResult(out localizationResult);
        UpdateStatus();
    }

    public void LocalizeToSpace()
    {
        // Localize to a selected space, if any.
        if (Spaces.Count == 0)
        {
            Debug.LogWarning("No spaces to localize to. Please use the Spaces app first.");
            return;
        }
        MLSpace.SpaceInfo info;
        var space = GetSelectedSpace();
        info.SpaceId = space.SpaceId;
        MLSpace.RequestLocalization(ref info);
    }

    public void ImportLastSpace()
    {
        // Import the last exported space, if any.
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

        GetListOfAvailableSpaces();
    }

    MLSpace.Space GetSelectedSpace()
    {
        // Get the selected space, in this case, we take the first space as selected.
        // You might need to modify this method to select space as per your needs.
        var selectedSpace = Spaces[0];
        return selectedSpace;
    }

    public void ExportSpace()
    {
        // Export a selected space.
        if (Spaces.Count == 0)
        {
            Debug.LogWarning("No spaces to be exported. Please use the Spaces app first.");
            return;
        }
        var space = GetSelectedSpace();

        MLSpace.SpaceInfo info;
        info.SpaceId = space.SpaceId;

        MLResult.Code result = MLSpace.ExportSpace(in info, out MLSpace.SpaceData exportData);

        byte[] binaryData = exportData.Data;

        SaveSpaceToFile(binaryData);
    }

    void OnPermissionGranted(string permission)
    {
        // When the requested permission is granted, get the list of available spaces.
        GetListOfAvailableSpaces();
    }

    void OnPermissionDenied(string permission)
    {
        // Log an error when the requested permission is denied.
        Debug.LogError($"{permission} denied, test won't function.");
    }

    void OnLocalizationChanged(MLSpace.LocalizationResult result)
    {
        // When localization changes, update the localization result and status,
        // and get the list of available spaces again.
        localizationResult = result;
        UpdateStatus();
        GetListOfAvailableSpaces();
    }

    private void SaveSpaceToFile(byte[] binaryData)
    {
        // Save the binary data of a space to a file.
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
}
```
