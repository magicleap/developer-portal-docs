---
title: MLInputBuzzCommand
summary: a structure containing information about the buzz command to be played. 

---

# MLInputBuzzCommand

**Module:** **[Input](/api-ref/api/Modules/group___input/group___input.md)**



A structure containing information about the Buzz command to be played.  [More...](#detailed-description)


`#include <ml_input.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md#uint32-t-version)**  |
| uint16_t | **[start_hz](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md#uint16-t-start-hz)**  |
| uint16_t | **[end_hz](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md#uint16-t-end-hz)**  |
| uint32_t | **[duration_ms](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md#uint32-t-duration-ms)**  |
| uint8_t | **[amp](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md#uint8-t-amp)**  |

## Detailed Description

```cpp
struct MLInputBuzzCommand;
```

A structure containing information about the Buzz command to be played. 


When playing haptic buzz command, needed information is stored in this structure. 




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

### start_hz {#uint16-t-start-hz}

```cpp
uint16_t start_hz;
```


Start frequency of the buzz command (1 - 1250). 





-----------

### end_hz {#uint16-t-end-hz}

```cpp
uint16_t end_hz;
```


End frequency of the buzz command (1 - 1250). 





-----------

### duration_ms {#uint32-t-duration-ms}

```cpp
uint32_t duration_ms;
```


Duration of the buzz command in milliseconds (ms). 





-----------

### amp {#uint8-t-amp}

```cpp
uint8_t amp;
```


Amplitude of the buzz command, as a percentage (1 - 100). 





-----------

