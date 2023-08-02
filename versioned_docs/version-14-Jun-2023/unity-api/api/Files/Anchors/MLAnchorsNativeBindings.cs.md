---

title: MLAnchorsNativeBindings.cs

---


# MLAnchorsNativeBindings.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%


namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;
    using Native;

    public partial class MLAnchors
    {
        public class NativeBindings : MagicLeapNativeBindings
        {
            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLSpatialAnchor
            {
                public readonly uint Version;

                public readonly MLUUIDBytes Id;

                public readonly NativeBindings.MLCoordinateFrameUID Cfuid;

                public readonly ulong ExpirationTimeStamp;

                public readonly bool IsPersisted;

                public readonly MLUUIDBytes SpaceId;

                public MLSpatialAnchor(MLAnchors.Anchor anchor)
                {
                    this.Version = 1;
                    this.Id = anchor.id;
                    this.Cfuid = anchor.cfuid;
                    this.ExpirationTimeStamp = anchor.ExpirationTimeStamp;
                    this.IsPersisted = anchor.IsPersisted;
                    this.SpaceId = anchor.spaceId;
                }

                public MLSpatialAnchor(MLAnchors.Anchor anchor, ulong expirationTimeStamp)
                {
                    this.Version = 1;
                    this.Id = anchor.id;
                    this.Cfuid = anchor.cfuid;
                    this.ExpirationTimeStamp = expirationTimeStamp;
                    this.IsPersisted = anchor.IsPersisted;
                    this.SpaceId = anchor.spaceId;
                }
            };

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLSpatialAnchorCreateInfo
            {
                public readonly uint Version;

                public readonly NativeBindings.MLTransform Transform;

                public readonly ulong ExpirationTimestamp;

                public MLSpatialAnchorCreateInfo(Pose Pose, ulong ExpirationTimestamp)
                {
                    this.Version = 1;
                    this.Transform = new NativeBindings.MLTransform();
                    this.Transform.Position = MLConvert.FromUnity(Pose.position);
                    this.Transform.Rotation = MLConvert.FromUnity(Pose.rotation);
                    this.ExpirationTimestamp = ExpirationTimestamp;
                }
            };

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLSpatialAnchorQueryFilter
            {
                public readonly uint Version;

                public readonly MLVec3f Center;

                public readonly float RadiusM;

                public readonly IntPtr Ids;

                public readonly uint IdsCount;

                public readonly uint MaxResults;

                [MarshalAs(UnmanagedType.I1)]
                public readonly bool Sorted;

                // Used by the anchor subsystem.
                internal MLSpatialAnchorQueryFilter(Vector3 Center, float RadiusM, IntPtr Ids, uint IdsCount, uint MaxResults, bool Sorted)
                {
                    this.Version = 1;
                    this.Center = MLConvert.FromUnity(Center);
                    this.RadiusM = RadiusM;
                    this.Ids = Ids;
                    this.IdsCount = IdsCount;
                    this.MaxResults = MaxResults;
                    this.Sorted = Sorted;
                }

                internal MLSpatialAnchorQueryFilter(Request.Params requestParams)
                {
                    this.Version = 1;
                    this.Center = MLConvert.FromUnity(requestParams.Center);
                    this.RadiusM = requestParams.Radius;

                    this.Ids = IntPtr.Zero;
                    this.IdsCount = 0;

                    if (requestParams.Anchors != null)
                        MarshalArrayToPtr(requestParams.Anchors, out this.Ids, out this.IdsCount);

                    else if (requestParams.AnchorIds != null)
                        MarshalArrayToPtr(requestParams.AnchorIds, out this.Ids, out this.IdsCount);

                    this.MaxResults = requestParams.MaxResults;
                    this.Sorted = requestParams.Sorted;
                }

                internal static void MarshalArrayToPtr<T>(T[] array, out IntPtr ids, out uint idsCount)
                {
                    IntPtr arrayPtr = Marshal.AllocHGlobal(Marshal.SizeOf<MLUUIDBytes>() * array.Length);
                    IntPtr walkPtr = arrayPtr;
                    foreach (var element in array)
                    {
                        if (element is Anchor)
                            Marshal.StructureToPtr((element as Anchor?)?.id, walkPtr, false);

                        else if (element is string)
                            Marshal.StructureToPtr(new MLUUIDBytes(element as string), walkPtr, false);

                        walkPtr = new IntPtr(walkPtr.ToInt64()) + Marshal.SizeOf<MLUUIDBytes>();
                    }

                    ids = arrayPtr;
                    idsCount = (uint)array.Length;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLSpatialAnchorLocalizationInfo
            {
                public readonly uint Version;

                public readonly LocalizationStatus LocalizationStatus;

                public readonly MappingMode MappingMode;

                [MarshalAs(UnmanagedType.ByValTStr, SizeConst = (int)MaxSpaceNameLength)]
                public readonly string SpaceName;

                public readonly NativeBindings.MLUUIDBytes SpaceId;

                public readonly MagicLeapNativeBindings.MLCoordinateFrameUID TargetSpaceOrigin;

                public static MLSpatialAnchorLocalizationInfo Create() => new MLSpatialAnchorLocalizationInfo(2);

                public MLSpatialAnchorLocalizationInfo(uint version)
                {
                    this.Version = version;
                    this.LocalizationStatus = default;
                    this.MappingMode = default;
                    this.SpaceName = default;
                    this.SpaceId = default;
                    this.TargetSpaceOrigin = default;
                }
            };

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorCreate(ulong handle, in MLSpatialAnchorCreateInfo createInfo, out MLSpatialAnchor anchor);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorTrackerCreate(out ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorTrackerDestroy(ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorPublish(ulong handle, MLUUIDBytes anchorId);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorDelete(ulong handle, MLUUIDBytes anchorId);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorUpdate(ulong handle, in MLSpatialAnchor anchor);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorQueryCreate(ulong handle, in MLSpatialAnchorQueryFilter queryFilter, out ulong queryHandle, out uint resultsCount);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorQueryDestroy(ulong handle, ulong queryHandle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorQueryGetResult(ulong handle, ulong queryHandle, uint firstIndex, uint lastIndex, [In, Out] MLSpatialAnchor[] results);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLSpatialAnchorGetLocalizationInfo(ulong handle, ref MLSpatialAnchorLocalizationInfo localizationInfo);
        }
    }
}
```



