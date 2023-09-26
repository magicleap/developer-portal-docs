---
title: MLInputConnectedDevicesList
summary: a structure containing information about the connected devices. 

---

# MLInputConnectedDevicesList

**Module:** **[Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/group___input.md)**



A structure containing information about the connected devices.  [More...](#detailed-description)


`#include <ml_input.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md#uint32-t-version)**  |
| uint32_t | **[connected_controller_count](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md#uint32-t-connected-controller-count)**  |
| const uint8_t * | **[connected_controller_ids](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md#const-uint8-t-connected-controller-ids)**  |

## Detailed Description

```cpp
struct MLInputConnectedDevicesList;
```

A structure containing information about the connected devices. 




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### connected_controller_count {#uint32-t-connected-controller-count}

```cpp
uint32_t connected_controller_count;
```


Number of connected controllers. 





-----------

### connected_controller_ids {#const-uint8-t-connected-controller-ids}

```cpp
const uint8_t * connected_controller_ids;
```


Pointer to the array of connected controller IDs. 





-----------


