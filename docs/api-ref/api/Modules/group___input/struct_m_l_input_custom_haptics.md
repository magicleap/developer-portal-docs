---
title: MLInputCustomHaptics
summary: or pre-defined pattern to be played. 

---

# MLInputCustomHaptics

**Module:** **[Input](/api-ref/api/Modules/group___input/group___input.md)**



A structure containing information about the Buzz command and/or pre-defined pattern to be played.  [More...](#detailed-description)


`#include <ml_input.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLInputCustomHapticsType](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcustomhapticstype) | **[type](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md#mlinputcustomhapticstype-type)**  |
| union MLInputCustomHaptics::@15 | **[MLInputCustomHapticsPattern](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md#union-mlinputcustomhaptics-15-mlinputcustomhapticspattern)**  |
| uint32_t | **[duration_ms](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md#uint32-t-duration-ms)**  |

## Detailed Description

```cpp
struct MLInputCustomHaptics;
```

A structure containing information about the Buzz command and/or pre-defined pattern to be played. 

A custom haptics pattern can be played by combining Buzz haptic command and/or a pre-defined pattern, this structure will hold info of a pattern to be added to the custom haptics array. A [MLInputCustomHapticsType](/api-ref/api/Modules/group___input/group___input.md#enum-mlinputcustomhapticstype) should be set while initializing the struct to indicate whether the to-be set pattern is a buzz command or a pre-defined pattern.

The #duration will set the time for which a pattern is played:

* If the inherited duration of a pre-defined pattern is greater, then it will be cut short and the next pattern will start playing.
* If the inherited duration of a pre-defined pattern is smaller, then it will not repeat itself and will wait for the #duration to complete before starting to play the next pattern.
* Buzz command's duration will supersede the #duration. Above caveat is true in case buzz command's duration is smaller.
* The last pattern of the array will continue playing even if the inherited duration is longer than #duration unless the pattern is interrupted by another pattern in the pipeline. 





-----------
## Public Attributes Documentation

### type {#mlinputcustomhapticstype-type}

```cpp
MLInputCustomHapticsType type;
```


Type of the pattern to be set. 





-----------

### MLInputCustomHapticsPattern {#union-mlinputcustomhaptics-15-mlinputcustomhapticspattern}

```cpp
union MLInputCustomHaptics::@15 MLInputCustomHapticsPattern;
```


Either buzz command or pre-defined pattern. 





-----------

### duration_ms {#uint32-t-duration-ms}

```cpp
uint32_t duration_ms;
```


Duration of the pattern in millisecond (ms). 





-----------

