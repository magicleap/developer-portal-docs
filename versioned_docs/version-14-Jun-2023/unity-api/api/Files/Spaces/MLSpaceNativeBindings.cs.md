---

title: MLSpaceNativeBindings.cs

---


# MLSpaceNativeBindings.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2023) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;

    public partial class MLSpace
    {
        public class NativeBindings : Native.MagicLeapNativeBindings
        {
            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceManagerCreate(in Settings settings, out ulong handle);

            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceSetCallbacks(ulong handle, ref SpaceCallbacks callbacks, IntPtr userData );

            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceGetSpaceList(ulong hanlde, out SpaceFilter queryFilter, out SpaceList spaceList);

            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceReleaseSpaceList(ulong handle, out SpaceList list);
            
            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceRequestLocalization(ulong handle, ref SpaceLocalizationInfo spaceList);

            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceGetLocalizationResult(ulong handle, out SpaceLocalizationResult result);
            
            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceManagerDestroy(ulong handle);

            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceImportSpace(in SpaceImportInfo importInfo, ref SpaceImportOutData data);

            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceExportSpace(in SpaceExportInfo exportInfo, ref SpaceExportOutData data);

            [DllImport(MLSpaceDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpaceReleaseExportData(ref SpaceExportOutData data);
            
        }
    }
}
```



