---

title: MLGlobalDimmer.cs

---


# MLGlobalDimmer.cs









## Source code

```csharp
using System;
using System.Runtime.InteropServices;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLGlobalDimmer
    {
        public static MLResult SetValue(float dimmerValue)
        {
            float clampedValue = Mathf.Clamp(dimmerValue, 0.0f, 1.0f);
            NativeBindings.UnityMagicLeap_RenderingSetGlobalDimmerValue(clampedValue);
            return MLResult.Create(MLResult.Code.Ok);
        }
    }
}
```



