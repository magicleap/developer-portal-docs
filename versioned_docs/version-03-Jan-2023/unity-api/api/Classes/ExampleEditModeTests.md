---
title: ExampleEditModeTests
summary: edit-mode tests are tests which can only be run at edit time in the unity editor, e.g. they don't require running on device or in playmode via magic leap app simulator. 

---

# ExampleEditModeTests




"Edit-Mode Tests" are tests which can only be run at edit time in the Unity editor, e.g. they don't require running on device or in Playmode via Magic Leap App Simulator.   [More...](#detailed-description)  




## Detailed Description

```csharp
public class ExampleEditModeTests; 
```


**Details**

Edit-mode tests can be ideal for test-driven-development (TDD). The examples below are very rudimentary methods which check that certain simple methods in the Magic Leap SDK return the expected values.

Note that these methods don't perform any action that depends on the app actually running on device (or via Magic Leap App Simulator). 





-----------



## Public Methods

### void MLResult_Create_Returns_Result_with_Given_Code {#void-mlresult-create-returns-result-with-given-code}

Tests to make sure the MLResult.Create method behaves as expected. 

```csharp
public void MLResult_Create_Returns_Result_with_Given_Code()
```






-----------

### void MLResult_with_Code_Ok_Returns_IsOk {#void-mlresult-with-code-ok-returns-isok}

Test to make sure "result.IsOk" works as expected. 

```csharp
public void MLResult_with_Code_Ok_Returns_IsOk()
```






-----------

### void NativeBindings_Recognize_Invalid_Handle {#void-nativebindings-recognize-invalid-handle}

Tests to make sure invalid handles are recognized appropriately 

```csharp
public void NativeBindings_Recognize_Invalid_Handle()
```






-----------

