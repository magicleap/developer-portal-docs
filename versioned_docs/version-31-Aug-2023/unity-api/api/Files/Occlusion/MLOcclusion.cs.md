---

title: MLOcclusion.cs

---


# MLOcclusion.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2023 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.IO;
using System.Runtime.InteropServices;
using static UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLOcclusion : MLAutoAPISingleton<MLOcclusion>
    {

        NativeBindings.MLOcclusionMesh outMesh = NativeBindings.MLOcclusionMesh.Init();
        NativeBindings.MLOcclusionMeshQuery meshQuery = NativeBindings.MLOcclusionMeshQuery.Init();

        public struct Settings
        {
            public float MinDistance;

            public float MaxDistance;
        }

        public struct OcclusionMesh
        {
            public MLTime Timestamp;

            public uint IndexCount;

            public uint VertexCount;

            public Vector3[] Vertex;

            public int[] Index;
        }

        protected override MLResult.Code StartAPI() => Instance.InternalMLOcclusionStart();

        protected override MLResult.Code StopAPI() => Instance.InternalMLOcclusionStop();

        public static MLResult.Code UpdateSettings(in Settings settings) => Instance.InternalMLOcclusionUpdateSettings(in settings);

        public static MLResult.Code GetLatestMesh(out OcclusionMesh mesh) => Instance.InternalGetLatestMesh(out mesh);

        MLResult.Code InternalMLOcclusionStart()
        {
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.SpatialMapping).Result))
            {
                MLPluginLog.Error($"{nameof(MLOcclusion)} requires missing permission {MLPermission.SpatialMapping}");
                return MLResult.Code.PermissionDenied;
            }

            NativeBindings.MLOcclusionSettings settings = NativeBindings.MLOcclusionSettings.Init();
            MLResult.Code result = NativeBindings.MLOcclusionCreateClient(settings, out Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLOcclusionCreateClient));
            return result;
        }

        MLResult.Code InternalMLOcclusionStop()
        {
            MLResult.Code result = NativeBindings.MLOcclusionDestroyClient(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLOcclusionDestroyClient));
            return result;
        }

        MLResult.Code InternalMLOcclusionUpdateSettings(in Settings settings)
        {
            NativeBindings.MLOcclusionSettings internalSettings = NativeBindings.MLOcclusionSettings.Init();
            internalSettings.MaxDistance = settings.MaxDistance;
            internalSettings.MinDistance = settings.MinDistance;
            MLResult.Code result = NativeBindings.MLOcclusionUpdateSettings(Handle, internalSettings);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLOcclusionUpdateSettings));
            return result;
        }

        MLResult.Code InternalGetLatestMesh(out OcclusionMesh mesh)
        {
            mesh = new();
            MLResult.Code result = NativeBindings.MLOcclusionGetLatestMesh(Handle, in meshQuery, out outMesh);

            if (MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLOcclusionGetLatestMesh)))
            {

                MLTime.ConvertSystemTimeToMLTime((long)outMesh.Timestamp, out mesh.Timestamp);
                mesh.IndexCount = outMesh.IndexCount;
                mesh.VertexCount = outMesh.VertexCount;

                MarshalIndexArray(outMesh.Index, (int)outMesh.IndexCount, out mesh.Index);
                ReverseIndices(mesh.Index);

                MarshalVectorArray(outMesh.Vertex, (int)outMesh.VertexCount, out mesh.Vertex);

                result = NativeBindings.MLOcclusionReleaseMesh(Handle, out outMesh);
                MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLOcclusionReleaseMesh));
            }

            return result;
        }

        void MarshalVectorArray(IntPtr verticesPtr, int count, out Vector3[] vertex)
        {
            vertex = new Vector3[count];
            int totalSize = Marshal.SizeOf<MLVec3f>() * count;
            byte[] tempBuffer = new byte[totalSize];
            Marshal.Copy(verticesPtr, tempBuffer, 0, totalSize);

            using (MemoryStream memoryStream = new MemoryStream(tempBuffer))
            using (BinaryReader reader = new BinaryReader(memoryStream))
            {
                float x, y, z;
                for (int i = 0; i < count; ++i)
                {
                    x = reader.ReadSingle();
                    y = reader.ReadSingle();
                    z = reader.ReadSingle();
                    vertex[i] = new Vector3(x, y, -z);
                }
            }
        }
        void MarshalIndexArray(IntPtr indicesPtr, int count, out int[] index)
        {
            index = new int[count];
            int tSize = Marshal.SizeOf<int>();

            byte[] tempBuffer = new byte[tSize * count];
            Marshal.Copy(indicesPtr, tempBuffer, 0, tSize * count);
            Buffer.BlockCopy(tempBuffer, 0, index, 0, tSize * count);
        }

        void ReverseIndices(int[] idx)
        {
            for (int i = 0; i < idx.Length; i += 3)
            {
                int temp = idx[i];
                idx[i] = idx[i + 2];
                idx[i + 2] = temp;
            }
        }
    }
}
```




