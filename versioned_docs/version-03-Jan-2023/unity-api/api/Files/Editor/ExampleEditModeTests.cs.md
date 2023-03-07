---

title: ExampleEditModeTests.cs

---


# ExampleEditModeTests.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using NUnit.Framework;
using UnityEngine.XR.MagicLeap;
using UnityEngine.XR.MagicLeap.Native;


public class ExampleEditModeTests
{
    [Test]
    public void MLResult_with_Code_Ok_Returns_IsOk()
    {
        MLResult result = MLResult.Create(MLResult.Code.Ok);

        Assert.IsTrue(result.IsOk);
    }

    [Test]
    public void MLResult_Create_Returns_Result_with_Given_Code()
    {
        MLResult result = MLResult.Create(MLResult.Code.Ok);

        Assert.AreEqual(result.Result, MLResult.Code.Ok);
    }

    [Test]
    public void NativeBindings_Recognize_Invalid_Handle()
    {
        const ulong invalid = 0xFFFFFFFFFFFFFFFF; // (that's 16 F's)

        Assert.IsFalse(MagicLeapNativeBindings.MLHandleIsValid(invalid));
        Assert.IsTrue(MagicLeapNativeBindings.MLHandleIsValid(0x1));
    }
}
```



