---
title: Utils

---

# Utils



**NameSpace:** 
[OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) 








## Public Methods

### InputDevice FindMagicLeapController {#inputdevice-findmagicleapcontroller}

Finds an appropriate Magic Leap Controller registered through [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) which is properly named and is valid. 

```csharp
public static InputDevice FindMagicLeapController(
    InputDeviceCharacteristics inputDeviceCharacteristics
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDeviceCharacteristics |inputDeviceCharacteristics|The characteristics required of the input device to be found.|






**Returns**: A Magic Leap Controller InputDevice registered through [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md). If none is found then a new InputDevice is returned.



-----------


