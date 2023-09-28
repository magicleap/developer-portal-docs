---

title: MagicLeapNativeBindingsEditModeTests.cs

---


# MagicLeapNativeBindingsEditModeTests.cs









## Source code

```csharp
using NUnit.Framework;
using UnityEngine.XR.MagicLeap.Native;

namespace UnitySDKEditorTests
{
    public class MagicLeapNativeBindingsEditModeTests
    {
        [Test]
        public void NativeBindings_Recognize_Invalid_Handle()
        {
            const ulong invalid = 0xFFFFFFFFFFFFFFFF; // (that's 16 F's)

            Assert.IsFalse(MagicLeapNativeBindings.MLHandleIsValid(invalid));
            Assert.IsTrue(MagicLeapNativeBindings.MLHandleIsValid(0x1));
        }
    }
}
```




