---

title: MLSpaceStructs.cs

---


# MLSpaceStructs.cs









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
    using UnityEngine.XR.MagicLeap.Native;
    using static UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings;

    public partial class MLSpace
    {
        public const uint MaxSpaceNameLength = 64;

        [StructLayout(LayoutKind.Sequential)]
        public struct Settings
        {
            public uint Version;

            public static Settings Create(uint version = 1)
            {
                return new Settings
                {
                    Version = version,
                };
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct Space
        {
            public uint Version;

            [MarshalAs(UnmanagedType.ByValTStr, SizeConst = (int)MaxSpaceNameLength)]
            public string SpaceName;

            public MLUUID SpaceId;

            public Type SpaceType;

            public static Space Create(uint version = 1u)
            {
                return new Space
                {
                    Version = version,
                };
            }

        }

        [StructLayout(LayoutKind.Sequential)]
        public readonly struct SpaceList
        {
            public readonly uint Version;

            public readonly uint SpaceCount;

            public readonly IntPtr Spaces;

            SpaceList(uint version = 1u)
            {
                Version = version;
                SpaceCount = 0;
                Spaces = default;
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct SpaceFilter
        {
            public uint Version;

            public static SpaceFilter Create(uint version = 1u)
            {
                return new SpaceFilter
                {
                    Version = version,
                };
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct SpaceLocalizationInfo
        {
            public uint Version;

            public MLUUID SpaceId;

            public static SpaceLocalizationInfo Create(uint version = 1u)
            {
                return new SpaceLocalizationInfo
                {
                    Version = version,
                };
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct SpaceLocalizationResult
        {
            public uint Version;

            public readonly Status LocalizationStatus;

            public readonly Space Space;

            public static SpaceLocalizationResult Create(uint version = 1u)
            {
                return new SpaceLocalizationResult
                {
                    Version = version,
                };
            }
        }

        public struct LocalizationResult
        {
            public Status LocalizationStatus;

            public Space Space;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct SpaceCallbacks
        {
            public uint Version;

            public MLSpaceDelegate OnLocalizationChangedCallbacks;


            public static SpaceCallbacks Create(uint version = 1u)
            {
                return new SpaceCallbacks
                {
                    Version = version,
                    OnLocalizationChangedCallbacks = LocalizationChanged,
                };
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct SpaceImportInfo
        {
            public uint Version;

            public ulong Size;

            public IntPtr Data;

            public static SpaceImportInfo Create(uint version = 1u)
            {
                return new SpaceImportInfo
                {
                    Version = version,
                    Size = 0u,
                    Data = IntPtr.Zero,
                };
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct SpaceImportOutData
        {
            public MLUUID SpaceId;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct SpaceExportInfo
        {
            public uint Version;

            public MLUUID SpaceId;

            public static SpaceExportInfo Create(uint version = 1u)
            {
                return new SpaceExportInfo
                {
                    Version = version,
                };
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct SpaceExportOutData
        {
            public readonly ulong Size;

            public IntPtr Data;


            public static SpaceExportOutData Create()
            {
                return new SpaceExportOutData()
                {
                    Data = IntPtr.Zero,
                };
            }

            public static byte[] GetData(SpaceExportOutData data)
            {
                if (data.Data == IntPtr.Zero)
                    return null;
                byte[] bytes = MLConvert.MarshalUnmanagedArray<byte>(data.Data, (int)data.Size);
                return bytes;
            }
        }

        public struct SpaceData
        {
            public ulong Size;

            public byte[] Data;
        }

        public struct SpaceInfo
        {
            public MLUUID SpaceId;
        }
    }
}
```




