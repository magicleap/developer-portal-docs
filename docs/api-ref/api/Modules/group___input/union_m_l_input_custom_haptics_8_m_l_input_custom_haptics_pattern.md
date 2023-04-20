---
title: MLInputCustomHaptics.MLInputCustomHapticsPattern

---

# MLInputCustomHaptics.MLInputCustomHapticsPattern

**Module:** **[Input](/api-ref/api/Modules/group___input/group___input.md)**



 [More...](#detailed-description)

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) | **[buzz](/api-ref/api/Modules/group___input/union_m_l_input_custom_haptics_8_m_l_input_custom_haptics_pattern.md#mlinputbuzzcommand-buzz)**  |
| [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) | **[pre_defined](/api-ref/api/Modules/group___input/union_m_l_input_custom_haptics_8_m_l_input_custom_haptics_pattern.md#mlinputpredefinedpattern-pre-defined)**  |

## Detailed Description

```cpp
union MLInputCustomHaptics.MLInputCustomHapticsPattern;
```


Either buzz command or pre-defined pattern. 





-----------
## Public Attributes Documentation

### buzz {#mlinputbuzzcommand-buzz}

```cpp
MLInputBuzzCommand buzz;
```



| Type | Description |
|--|--|
| [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) | A structure containing information about the Buzz command to be played.  |






-----------

### pre_defined {#mlinputpredefinedpattern-pre-defined}

```cpp
MLInputPreDefinedPattern pre_defined;
```



| Type | Description |
|--|--|
| [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) | A structure containing information about the Pre-Defined pattern to be played.  |






-----------

