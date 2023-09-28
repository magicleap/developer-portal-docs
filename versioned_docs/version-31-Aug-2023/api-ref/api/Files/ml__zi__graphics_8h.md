---
title: ml_zi_graphics.h

---

# ml_zi_graphics.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIGraphicsEnumerateRequiredVkInstanceExtensions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzigraphicsenumeraterequiredvkinstanceextensions)**(VkExtensionProperties * out_required_extension_properties, uint32_t * out_extension_property_count)<br></br>Returns a list of required VkInstance extensions.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLZIGraphicsEnumerateRequiredVkDeviceExtensions](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___z_i/group___z_i.md#mlresult-mlzigraphicsenumeraterequiredvkdeviceextensions)**(VkExtensionProperties * out_required_extension_properties, uint32_t * out_extension_property_count)<br></br>Returns a list of required VkDevice extensions.  |



## Functions Documentation

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



## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2021 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"
#include "ml_types.h"
#include "ml_graphics.h"

ML_EXTERN_C_BEGIN

#ifdef VK_VERSION_1_0

ML_API MLResult ML_CALL MLZIGraphicsEnumerateRequiredVkInstanceExtensions(VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count);

ML_API MLResult ML_CALL MLZIGraphicsEnumerateRequiredVkDeviceExtensions(VkExtensionProperties *out_required_extension_properties, uint32_t *out_extension_property_count);

#endif


#ifdef __OBJC__
#import <Metal/Metal.h>

typedef struct MLZIGraphicsCreateClientMTLParams {
  uint32_t version;
  MLGraphicsOptions *options;
  id<MTLDevice> metal_device;
} MLZIGraphicsCreateClientMTLParams;

ML_STATIC_INLINE void MLZIGraphicsCreateClientMTLParamsInit(MLZIGraphicsCreateClientMTLParams *params) {
  if (!params) return;
  params->version      = 1;
  params->options      = NULL;
  params->metal_device = NULL;
}

ML_API MLResult ML_CALL MLZIGraphicsCreateClientMTL(const MLZIGraphicsCreateClientMTLParams *params, MLHandle *out_graphics_client);

ML_API MTLPixelFormat ML_CALL MLZIGraphicsMTLFormatFromMLSurfaceFormat(MLSurfaceFormat format);

ML_API MLSurfaceFormat ML_CALL MLZIGraphicsMLSurfaceFormatFromMTLFormat(MTLPixelFormat format);

ML_API MLResult ML_CALL MLZIGraphicsSignalSyncObjectMTL(MLHandle graphics_client, MLHandle sync_object);

#endif

ML_EXTERN_C_END
```




