---

title: MLOcclusionNativeBindings.cs

---


# MLOcclusionNativeBindings.cs









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
    public partial class MLOcclusion
    {
        private class NativeBindings : Native.MagicLeapNativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public struct MLOcclusionSettings
            {
                public uint Version;

                public float MinDistance;

                //  Possible values ranges from 0.3m up to 7.5m.
                public float MaxDistance;
                public static MLOcclusionSettings Init(uint version = 1)
                {
                    return new MLOcclusionSettings
                    {
                        Version = version,
                        MaxDistance = 5f,
                        MinDistance = 0.3f,
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLOcclusionMesh
            {
                public uint Version;

                public ulong Timestamp;

                public uint IndexCount;

                public uint VertexCount;

                public IntPtr Vertex;

                public IntPtr Index;

                public static MLOcclusionMesh Init(uint version = 1)
                {
                    return new MLOcclusionMesh
                    {
                        Version = version,
                        Vertex = IntPtr.Zero,
                        Index = IntPtr.Zero,
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLOcclusionMeshQuery
            {
                public uint Version;
                public static MLOcclusionMeshQuery Init(uint version = 1)
                {
                    return new MLOcclusionMeshQuery
                    {
                        Version = version,
                    };
                }
            }

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOcclusionCreateClient(in MLOcclusionSettings settings, out ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOcclusionDestroyClient(ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOcclusionUpdateSettings(ulong handle, in MLOcclusionSettings settings);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOcclusionGetLatestMesh(ulong handle, in MLOcclusionMeshQuery mesh_query, out MLOcclusionMesh out_mes_data);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLOcclusionReleaseMesh(ulong handle, out MLOcclusionMesh out_mes_data);
        }
    }
}
```




