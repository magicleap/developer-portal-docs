---
title: ZI
summary: apis for the zero iteration on host os platforms. 

---

# ZI

APIs for the Zero Iteration on Host OS Platforms.  [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIIsServerConfigured](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlziisserverconfigured)**(bool * out_is_configured)<br></br>Checks to see if the Zero Iteration server is running and configured properly to use by a host application.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZISetProgramLabel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzisetprogramlabel)**(const char * in_label)<br></br>Set the human-readable label of the current project or library, to be used in UI display and diagnostic logs to indicate what is running.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIGraphicsEnumerateRequiredVkInstanceExtensions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzigraphicsenumeraterequiredvkinstanceextensions)**(VkExtensionProperties * out_required_extension_properties, uint32_t * out_extension_property_count)<br></br>Returns a list of required VkInstance extensions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIGraphicsEnumerateRequiredVkDeviceExtensions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzigraphicsenumeraterequiredvkdeviceextensions)**(VkExtensionProperties * out_required_extension_properties, uint32_t * out_extension_property_count)<br></br>Returns a list of required VkDevice extensions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIPermissionsStart](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsstart)**()<br></br>Start the ZI permissions system. This must be called before other permissions calls.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIPermissionsStop](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsstop)**()<br></br>Stop the ZI permission system. Call to clean up the ZI permission system at application termination.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIPermissionsIsGranted](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsisgranted)**(const char * permission_name)<br></br>Asks if the application has the given permission granted.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIPermissionsRequest](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzipermissionsrequest)**(const char * permission_name)<br></br>Request the given permission (blocking if pending until user either allows or denies permission). Client code can poll the permission state to see if the permission was granted, denied or still pending.  |

## Detailed Description

APIs for the Zero Iteration on Host OS Platforms. 



* This header supports general Zero Iteation state queries.


* Provides ZI support for host-specific MLGraphics APIs.


* These APIs support requesting and checking permissions from the C API rather than requiring ZI to emulate a full JNI layer. Programs should conditionally use these APIs when building for host instead of using Android APIs in order to simulate permissions requests and management. 



:::caution Attention

  * These APIs are meant to enable a better integration to ZI for engines running on Host OS Platforms. These APIs are not available on device.
  * These APIs are meant to enable a better integration to ZI for engines running on Host OS Platforms. These APIs are not available on device.
  * These APIs are meant to enable a better integration to ZI for engines running on Host OS Platforms. These APIs are not available on device.

:::



**Shared Object:**
  * zi.magicleap*

**Shared Object:**
  * graphics.magicleap*

**Shared Object:**
  * zi.magicleap*




-----------


## Functions Documentation

### MLZIIsServerConfigured {#mlresult-mlziisserverconfigured}

```cpp
MLResult MLZIIsServerConfigured(
    bool * out_is_configured
)
```

Checks to see if the Zero Iteration server is running and configured properly to use by a host application. 

**Parameters**

|  |   |   |
|--|--|--|
| bool * |out_is_configured|Pointer to a bool indicating whether the ZI server is running and is configured properly.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|is_configured parameter is not valid (null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Timeout|The ZI server could not be reached. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error submitting the query.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLZISetProgramLabel {#mlresult-mlzisetprogramlabel}

```cpp
MLResult MLZISetProgramLabel(
    const char * in_label
)
```

Set the human-readable label of the current project or library, to be used in UI display and diagnostic logs to indicate what is running. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |in_label|Pointer to a C string indicating the label to use for the running program, or NULL or "" to reset the label. The string is copied. It is interpreted as UTF-8.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If label was accepted (always).|
**Required Permissions**:

  * None 


When unset, The Lab and the ZI runtime refer to a program running under ZI by its process / executable name.

A label must be set before the program calls one of the MLGraphicsCreate() functions in order to be reflected.




**API Level:**
  * 20




-----------

### MLZIGraphicsEnumerateRequiredVkInstanceExtensions {#mlresult-mlzigraphicsenumeraterequiredvkinstanceextensions}

```cpp
MLResult MLZIGraphicsEnumerateRequiredVkInstanceExtensions(
    VkExtensionProperties * out_required_extension_properties,
    uint32_t * out_extension_property_count
)
```

Returns a list of required VkInstance extensions. 

**Parameters**

|  |   |   |
|--|--|--|
| VkExtensionProperties * |out_required_extension_properties|Either null or a pointer to an array of VkExtensionProperties. |
| uint32_t * |out_extension_property_count|Is a pointer to an integer related to the number of extensions required or queried.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error submitting the query.|
**Required Permissions**:

  * None 


If out_required_extension_properties is null then the number of required extension is returned in out_extension_property_count. Otherwise, out_extension_property_count must point to a variable set to the number of elements in the out_required_extension_properties array, and on return the variable is overwritten with the number of strings actually written to out_required_extension_properties.





-----------

### MLZIGraphicsEnumerateRequiredVkDeviceExtensions {#mlresult-mlzigraphicsenumeraterequiredvkdeviceextensions}

```cpp
MLResult MLZIGraphicsEnumerateRequiredVkDeviceExtensions(
    VkExtensionProperties * out_required_extension_properties,
    uint32_t * out_extension_property_count
)
```

Returns a list of required VkDevice extensions. 

**Parameters**

|  |   |   |
|--|--|--|
| VkExtensionProperties * |out_required_extension_properties|Either null or a pointer to an array of VkExtensionProperties. |
| uint32_t * |out_extension_property_count|Is a pointer to an integer related to the number of extensions required or queried.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|If input parameter is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error submitting the query.|
**Required Permissions**:

  * None 


If out_required_extension_properties is null then the number of required extension is returned in out_extension_property_count. Otherwise, out_extension_property_count must point to a variable set to the number of elements in the out_required_extension_properties array, and on return the variable is overwritten with the number of strings actually written to out_required_extension_properties.





-----------

### MLZIPermissionsStart {#mlresult-mlzipermissionsstart}

```cpp
MLResult MLZIPermissionsStart()
```

Start the ZI permissions system. This must be called before other permissions calls. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLZIPermissionsStop {#mlresult-mlzipermissionsstop}

```cpp
MLResult MLZIPermissionsStop()
```

Stop the ZI permission system. Call to clean up the ZI permission system at application termination. 


**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLZIPermissionsIsGranted {#mlresult-mlzipermissionsisgranted}

```cpp
MLResult MLZIPermissionsIsGranted(
    const char * permission_name
)
```

Asks if the application has the given permission granted. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |permission_name|The permission name.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The permission_name parameter is not valid (or null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The permission is granted. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_PermissionDenied|If permission denied. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Pending|If permission request has not been resolved. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error.|
**Required Permissions**:

  * Any 




**See**: [https://developer.android.com/training/permissions/requesting](https://developer.android.com/training/permissions/requesting)


**API Level:**
  * 20




-----------

### MLZIPermissionsRequest {#mlresult-mlzipermissionsrequest}

```cpp
MLResult MLZIPermissionsRequest(
    const char * permission_name
)
```

Request the given permission (blocking if pending until user either allows or denies permission). Client code can poll the permission state to see if the permission was granted, denied or still pending. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |permission_name|The permission name.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|The permission_name parameter is not valid (or null). |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|The query was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|There was an unknown error.|
**Required Permissions**:

  * None 




**See**: [https://developer.android.com/training/permissions/requesting](https://developer.android.com/training/permissions/requesting)


**API Level:**
  * 20




-----------






