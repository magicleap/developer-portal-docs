---
title: MLUUID

---

# MLUUID

**Module:** **[Common](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/group___common.md)**



 [More...](#detailed-description)


`#include <ml_types.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[time_low](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md#uint32-t-time-low)**  |
| uint16_t | **[time_mid](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md#uint16-t-time-mid)**  |
| uint16_t | **[time_hi_and_version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md#uint16-t-time-hi-and-version)**  |
| uint8_t | **[clock_seq_hi_and_reserved](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md#uint8-t-clock-seq-hi-and-reserved)**  |
| uint8_t | **[clock_seq_low](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md#uint8-t-clock-seq-low)**  |
| uint8_t[6] | **[node](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___common/struct_m_l_u_u_i_d.md#uint8-t-node)**  |

## Detailed Description

```cpp
struct MLUUID;
```


Universally Unique Identifier. 





-----------
## Public Attributes Documentation

### time_low {#uint32-t-time-low}

```cpp
uint32_t time_low;
```






-----------

### time_mid {#uint16-t-time-mid}

```cpp
uint16_t time_mid;
```






-----------

### time_hi_and_version {#uint16-t-time-hi-and-version}

```cpp
uint16_t time_hi_and_version;
```






-----------

### clock_seq_hi_and_reserved {#uint8-t-clock-seq-hi-and-reserved}

```cpp
uint8_t clock_seq_hi_and_reserved;
```






-----------

### clock_seq_low {#uint8-t-clock-seq-low}

```cpp
uint8_t clock_seq_low;
```






-----------

### node {#uint8-t-node}

```cpp
uint8_t[6] node;
```



| Type | Description |
|--|--|
| uint8_t[6] | [6] |






-----------


