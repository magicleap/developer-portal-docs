---

title: MLResultEditModeTests.cs

---


# MLResultEditModeTests.cs









## Source code

```csharp
using NUnit.Framework;
using static UnityEngine.XR.MagicLeap.MLResult;

namespace UnitySDKEditorTests
{
    public class MLResult
    {
        [Test]
        public void MLResult_with_Code_Ok_Returns_IsOk()
        {
            UnityEngine.XR.MagicLeap.MLResult result = Create(Code.Ok);

            Assert.IsTrue(result.IsOk);
        }

        [Test]
        public void MLResult_Create_Returns_Result_with_Given_Code()
        {
            UnityEngine.XR.MagicLeap.MLResult result = Create(Code.Ok);

            Assert.AreEqual(result.Result, Code.Ok);
        }
    }
}
```




