---
title: MLPSSHEntry

---

# MLPSSHEntry

**Module:** **[Media Player](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md)**



 [More...](#detailed-description)


`#include <ml_media_types.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLUUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md) | **[uuid](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md#mluuid-uuid)**  |
| size_t | **[size](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md#size-t-size)**  |
| uint8_t * | **[data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_p_s_s_h_entry.md#uint8-t-data)**  |

## Detailed Description

```cpp
struct MLPSSHEntry;
```


PSSH entry. 





-----------
## Public Attributes Documentation

### uuid {#mluuid-uuid}

```cpp
MLUUID uuid;
```


16 bytes UUID specifying crypto scheme. 





-----------

### size {#size-t-size}

```cpp
size_t size;
```


Size of the data payload. 





-----------

### data {#uint8-t-data}

```cpp
uint8_t * data;
```


Data specific to that scheme. 





-----------


