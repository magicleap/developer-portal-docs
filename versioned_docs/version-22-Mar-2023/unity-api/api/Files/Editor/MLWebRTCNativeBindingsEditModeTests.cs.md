---

title: MLWebRTCNativeBindingsEditModeTests.cs

---


# MLWebRTCNativeBindingsEditModeTests.cs









## Source code

```csharp
using System.Reflection;
using NUnit.Framework;

namespace Tests.Editor
{
    public class MLWebRTCNativeBindingsEditModeTests : NativeBindingsTests
    {
        [SetUp]
        public void SetupNativeBindings()
        {
            var apiType = typeof(UnityEngine.XR.MagicLeap.MLWebRTC);
            nativeBindings = apiType.GetNestedType("NativeBindings", BindingFlags.NonPublic);
        }

        [Test]
        public void NativeBinding_MLWebRTCInstanceCreate_Exists()
        {
            AssertThatMethodExists("MLWebRTCInstanceCreate");
        }

        [Test]
        public void NativeBinding_MLWebRTCInstanceCreateWithDebugUtils_Exists()
        {
            AssertThatMethodExists("MLWebRTCInstanceCreateWithDebugUtils");
        }

        [Test]
        public void NativeBinding_MLWebRTCInstanceDestroy_Exists()
        {
            AssertThatMethodExists("MLWebRTCInstanceDestroy");
        }

        [Test]
        public void NativeBinding_MLWebRTCGetResultString_Exists()
        {
            AssertThatMethodExists("MLWebRTCGetResultString");
        }
    }
}
```




