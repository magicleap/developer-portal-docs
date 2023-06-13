---

title: MLGlobalDimmerNativeBindings.cs

---


# MLGlobalDimmerNativeBindings.cs









## Source code

```csharp
using System.Runtime.InteropServices;
using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLGlobalDimmer
    {
        private class NativeBindings : MagicLeapNativeBindings
        {
            [DllImport(UnityMagicLeapDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern void UnityMagicLeap_RenderingSetGlobalDimmerValue(float dimmerValue);
        }
    }
}
```




