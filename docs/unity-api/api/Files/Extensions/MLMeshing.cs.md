---

title: MLMeshing.cs

---


# MLMeshing.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2021-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;
    using UnityEngine.XR.ARSubsystems;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MeshingSubsystem
    {
        public static partial class Extensions
        {
            public static partial class MLMeshing
            {

                public enum MeshState
                {
                    New,

                    Updated,

                    Deleted,

                    Unchanged,
                }

                public enum LevelOfDetail
                {
                    Minimum,

                    Medium,

                    Maximum
                }
                
                public static LevelOfDetail DensityToLevelOfDetail( float density )
                {
                    if (density < 0.33f)
                        return LevelOfDetail.Minimum;
                    else if (density < 0.66f)
                        return LevelOfDetail.Medium;
                    else
                        return LevelOfDetail.Maximum;
                }
                
                public static float LevelOfDetailToDensity( LevelOfDetail lod )
                {
                    if (lod == LevelOfDetail.Minimum)
                        return 0.0f;
                    else if (lod == LevelOfDetail.Medium)
                        return 0.5f;
                    else
                        return 1.0f;
                }

                public delegate MeshingSubsystem.Extensions.MLMeshing.MeshBlockRequest[] OnMeshBlockRequests(MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo[] blockInfos);

                public readonly struct MeshBlockInfo
                {
                    internal MeshBlockInfo(MLMeshing.NativeBindings.MLMeshingBlockInfo nativeBlockInfo)
                    {
                        id = nativeBlockInfo.cfuid.ToString();
                        pose = new Pose(MLConvert.ToUnity(nativeBlockInfo.extents.center), MLConvert.ToUnity(nativeBlockInfo.extents.rotation));
                        extents = MLConvert.ToUnity(nativeBlockInfo.extents.extents);
                        MLTime.ConvertSystemTimeToMLTime(nativeBlockInfo.timestamp, out timestamp);
                        state = nativeBlockInfo.state;
                    }

                    public readonly string id;

                    public readonly Pose pose;

                    public readonly Vector3 extents;

                    public readonly MLTime timestamp;

                    public readonly MeshState state;
                }

                public readonly struct MeshBlockRequest
                {
                    internal MeshBlockRequest(MLMeshing.NativeBindings.MLMeshingBlockRequest nativeBlockRequest)
                    {
                        this.id = nativeBlockRequest.cfuid.ToString();
                        this.levelOfDetail = nativeBlockRequest.levelOfDetail;
                    }

                    public MeshBlockRequest(string id, LevelOfDetail levelOfDetail)
                    {
                        this.id = id;
                        this.levelOfDetail = levelOfDetail;
                    }

                    public readonly string id;

                    public readonly LevelOfDetail levelOfDetail;
                }


                internal static class NativeBindings
                {

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLMeshingExtents
                    {
                        public MagicLeapNativeBindings.MLVec3f center;

                        public MagicLeapNativeBindings.MLQuaternionf rotation;

                        public MagicLeapNativeBindings.MLVec3f extents;
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLMeshingBlockInfo
                    {
                        public MagicLeapNativeBindings.MLCoordinateFrameUID cfuid;

                        public MLMeshingExtents extents;

                        public long timestamp;

                        public MeshState state;
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLMeshingMeshInfo
                    {
                        public long timestamp;

                        public uint dataCount;

                        public IntPtr data;
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public readonly struct MLMeshingBlockRequest
                    {
                        internal MLMeshingBlockRequest(MLMeshing.MeshBlockRequest blockRequest)
                        {
                            this.cfuid = MagicLeapNativeBindings.MLCoordinateFrameUID.EmptyFrame;
                            this.cfuid.FromString(blockRequest.id);
                            this.levelOfDetail = blockRequest.levelOfDetail;
                        }

                        internal MLMeshingBlockRequest(MagicLeapNativeBindings.MLCoordinateFrameUID cfuid, MLMeshing.LevelOfDetail levelOfDetail)
                        {
                            this.cfuid = cfuid;
                            this.levelOfDetail = levelOfDetail;
                        }

                        public readonly MagicLeapNativeBindings.MLCoordinateFrameUID cfuid;

                        public readonly MLMeshing.LevelOfDetail levelOfDetail;
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLMeshingMeshRequest
                    {
                        public int requestCount;

                        public IntPtr blockRequests;
                    }
                }

                public static partial class Config
                {
                    public static void SetCustomMeshBlockRequests(OnMeshBlockRequests onBlockRequests)
                    {
                        customBlockRequests = onBlockRequests;

                        if (customBlockRequests != null)
                        {
                            MagicLeapXrProviderNativeBindings.MeshingSetMeshRequestCallback(OnMeshRequest);
                            MagicLeapXrProviderNativeBindings.MeshingSetFreeBlockRequestPointerCallback(OnFreeMeshRequestPointer);
                        }
                        else
                        {
                            MagicLeapXrProviderNativeBindings.MeshingSetMeshRequestCallback(null);
                            MagicLeapXrProviderNativeBindings.MeshingSetFreeBlockRequestPointerCallback(null);
                        }
                    }

                    public static IntPtr AcquireConfidence(MeshId meshId, out int count) => NativeBindings.MeshingAcquireConfidence(meshId, out count);
                    public static void ReleaseConfidence(MeshId meshId) => NativeBindings.MeshingReleaseConfidence(meshId);
                    public static void SetBounds(Transform transform, Vector3 extents) => SetBounds(transform.localPosition, transform.localRotation, extents);
                    public static void SetBounds(Vector3 position, Quaternion rotation, Vector3 extents) => NativeBindings.MeshingSetBounds(position, rotation, extents);

                    public static int batchSize
                    {
                        set { NativeBindings.MeshingSetBatchSize(value); }
                    }

                    public static float density
                    {
                        set { NativeBindings.MeshingSetDensity(value); }
                    }

                    public static Settings meshingSettings
                    {
                        set
                        {
                            SubsystemFeatures.SetCurrentFeatureEnabled(Feature.Meshing | Feature.PointCloud, false);
                            if (value.flags.HasFlag(Flags.PointCloud))
                            {
                                SubsystemFeatures.SetCurrentFeatureEnabled(Feature.PointCloud, true);
                            }
                            else
                            {
                                SubsystemFeatures.SetCurrentFeatureEnabled(Feature.Meshing, true);
                            }
                            NativeBindings.MeshingUpdateSettings(ref value);
                        }
                    }

                    [Flags]
                    public enum Flags
                    {
                        None = 0,
                        PointCloud = 1 << 0,
                        ComputeNormals = 1 << 1,
                        ComputeConfidence = 1 << 2,
                        Planarize = 1 << 3,
                        RemoveMeshSkirt = 1 << 4,
                        IndexOrderCW = 1 << 5
                    }

                    private static IntPtr arrayPtr;
                    private static OnMeshBlockRequests customBlockRequests;

                    [AOT.MonoPInvokeCallback(typeof(MagicLeapXrProviderNativeBindings.CreateBlockRequestsDelegate))]
                    private static void OnMeshRequest(ref MeshingSubsystem.Extensions.MLMeshing.NativeBindings.MLMeshingMeshInfo meshInfo, ref MeshingSubsystem.Extensions.MLMeshing.NativeBindings.MLMeshingMeshRequest meshRequest)
                    {
                        if (meshInfo.data == IntPtr.Zero)
                            return;

                        var blockInfos = new MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo[meshInfo.dataCount];

                        IntPtr walkPtr = meshInfo.data;
                        for (int i = 0; i < meshInfo.dataCount; ++i)
                        {
                            var nativeBlockInfo = Marshal.PtrToStructure<MeshingSubsystem.Extensions.MLMeshing.NativeBindings.MLMeshingBlockInfo>(walkPtr);
                            blockInfos[i] = new MeshingSubsystem.Extensions.MLMeshing.MeshBlockInfo(nativeBlockInfo);
                            walkPtr = new IntPtr(walkPtr.ToInt64() + Marshal.SizeOf<MeshingSubsystem.Extensions.MLMeshing.NativeBindings.MLMeshingBlockInfo>());
                        }

                        var blockRequests = customBlockRequests(blockInfos);
                        var nativeBlockRequests = new MLMeshing.NativeBindings.MLMeshingBlockRequest[blockRequests.Length];
                        for (int i = 0; i < nativeBlockRequests.Length; ++i)
                        {
                            nativeBlockRequests[i] = new MLMeshing.NativeBindings.MLMeshingBlockRequest(blockRequests[i]);
                        }

                        meshRequest.requestCount = nativeBlockRequests.Length;
                        meshRequest.blockRequests = MarshalArrayToPtr(nativeBlockRequests);
                    }

                    [AOT.MonoPInvokeCallback(typeof(MagicLeapXrProviderNativeBindings.CallFreeBlockRequestPointerDelegate))]
                    private static void OnFreeMeshRequestPointer()
                    {
                        Marshal.FreeHGlobal(arrayPtr);
                    }

                    private static IntPtr MarshalArrayToPtr<T>(T[] array)
                    {
                        arrayPtr = Marshal.AllocHGlobal(Marshal.SizeOf<T>() * array.Length);

                        IntPtr walkPtr = arrayPtr;

                        foreach (var element in array)
                        {
                            Marshal.StructureToPtr(element, walkPtr, true);
                            walkPtr = new IntPtr(walkPtr.ToInt64()) + Marshal.SizeOf<T>();
                        }

                        return arrayPtr;
                    }

                    [StructLayout(LayoutKind.Sequential)]
                    public struct Settings
                    {
                        public Flags flags;
                        public float fillHoleLength;
                        public float disconnectedComponentArea;
                    }



                }

            }
        }
    }
}
```



