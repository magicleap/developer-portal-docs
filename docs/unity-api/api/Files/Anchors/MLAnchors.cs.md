---

title: MLAnchors.cs

---


# MLAnchors.cs









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
    using System.Threading.Tasks;
    using Native;

    public partial class MLAnchors : MLAutoAPISingleton<MLAnchors>
    {
        public enum LocalizationStatus
        {
            NotLocalized,

            Localized,

            LocalizationPending,

            LocalizationFailed,

        };

        public enum MappingMode
        {
            OnDevice,

            ARCloud,
        };

        public const uint MaxSpaceNameLength = 64;

        protected override MLResult.Code StartAPI()
        {
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.SpatialAnchors).Result, nameof(StartAPI)))
            {
                MLPluginLog.Error($"{nameof(MLAnchors)} requires missing permission {MLPermission.SpatialAnchors}");
                return MLResult.Code.PermissionDenied;
            }
            return MLAnchors.NativeBindings.MLSpatialAnchorTrackerCreate(out this.Handle);
        }

        protected override MLResult.Code StopAPI() => MLAnchors.NativeBindings.MLSpatialAnchorTrackerDestroy(this.Handle);

        public static MLResult GetLocalizationInfo(out LocalizationInfo info) => MLResult.Create(Instance.GetLocalizationInformation(out info));

        public partial class Request : MLRequest<Request.Params, Request.Result>
        {
            private uint resultsCount;

            public Request()
            {
                handle = MagicLeapNativeBindings.InvalidHandle;
            }

            public override MLResult Start(Params queryParams)
            {
                Dispose(true);
                parameters = queryParams;
                var q = MLAnchors.Instance.CreateQuery(parameters, out handle, out resultsCount);
                var mlResult = MLResult.Create(q);
                return mlResult;
            }

            public MLResult Start(Params parameters, out uint resultsCount)
            {
                var mlResult = this.Start(parameters);
                resultsCount = this.resultsCount;
                return mlResult;
            }

            public override MLResult TryGetResult(out Result result) => this.TryGetResult(0, (int)this.resultsCount - 1, out result);

            public MLResult TryGetResult(int firstIndex, int lastIndex, out Result result)
            {
                if (this.resultsCount == 0)
                {
                    result = new Result(new NativeBindings.MLSpatialAnchor[0]);
                    return MLResult.Create(MLResult.Code.Ok);
                }

                int size = lastIndex - firstIndex + 1;
                var anchors = new NativeBindings.MLSpatialAnchor[size];
                var resultCode = MLAnchors.Instance.GetQueryResult(this.parameters, this.handle, (uint)firstIndex, (uint)lastIndex, anchors);
                MLResult mlResult = MLResult.Create(resultCode);
                result = new Result(anchors);
                return mlResult;
            }

            protected override void Dispose(bool disposing)
            {
                if (MagicLeapNativeBindings.MLHandleIsValid(this.handle))
                {
                    MLResult.Code resultCode = MLAnchors.Instance.DestroyQuery(this.handle);
                    if (MLResult.IsOK(resultCode))
                        this.handle = MagicLeapNativeBindings.InvalidHandle;
                    else
                        Debug.LogError("Failed to destroy anchor query: " + resultCode);
                }
            }
        }

        public partial class Request
        {
            public struct Params
            {
                public readonly Vector3 Center;

                public readonly float Radius;

                public readonly Anchor[] Anchors;

                public readonly string[] AnchorIds;

                public readonly uint MaxResults;

                public readonly bool Sorted;

                public Params(Vector3 Center, float Radius, uint MaxResults, bool Sorted)
                {
                    this.Center = Center;
                    this.Radius = Radius;
                    this.Anchors = null;
                    this.AnchorIds = null;
                    this.MaxResults = MaxResults;
                    this.Sorted = Sorted;
                }

                public Params(Vector3 Center, float Radius, Anchor[] Anchors, uint MaxResults, bool Sorted)
                {
                    this.Center = Center;
                    this.Radius = Radius;
                    this.Anchors = Anchors;
                    this.AnchorIds = null;
                    this.MaxResults = MaxResults;
                    this.Sorted = Sorted;
                }

                public Params(Vector3 Center, float Radius, string[] AnchorIds, uint MaxResults, bool Sorted)
                {
                    this.Center = Center;
                    this.Radius = Radius;
                    this.Anchors = null;
                    this.AnchorIds = AnchorIds;
                    this.MaxResults = MaxResults;
                    this.Sorted = Sorted;
                }
            }
        }

        public partial class Request
        {
            public readonly struct Result
            {
                internal Result(NativeBindings.MLSpatialAnchor[] nativeAnchors)
                {
                    var anchors = new Anchor[nativeAnchors.Length];

                    for (int i = 0; i < nativeAnchors.Length; ++i)
                        anchors[i] = new Anchor(nativeAnchors[i]);

                    this.anchors = anchors;
                }
                public readonly Anchor[] anchors;
            }
        }

        public readonly struct Anchor
        {
            public static MLResult Create(Pose pose, long expirationSeconds, out Anchor anchor)
            {
                anchor = new Anchor();
                
                if (expirationSeconds < 0)
                    return MLResult.Create(MLResult.Code.InvalidParam,
                        "The expirationSeconds parameter was a negative number and should be positive or 0.");
                
                double unixTimestamp = 0;
                if (expirationSeconds > 0)
                {
                    var maxExpirationSeconds = (long)DateTime.MaxValue.Subtract(DateTime.UtcNow).TotalSeconds;
                    var clampedExpirationSeconds = Math.Clamp(expirationSeconds, 0, maxExpirationSeconds);
                    
                    unixTimestamp = (DateTime.UtcNow.AddSeconds(clampedExpirationSeconds)).Subtract(DateTime.UnixEpoch).TotalSeconds;
                }
                
                var createInfo = new NativeBindings.MLSpatialAnchorCreateInfo(pose, (ulong)unixTimestamp);
                var resultCode = MLAnchors.Instance.CreateAnchor(createInfo, out NativeBindings.MLSpatialAnchor nativeAnchor);
                anchor = new Anchor(nativeAnchor);
                return MLResult.Create(resultCode);
            }

            public static MLResult DeleteAnchorWithId(string anchorId)
            {
                var resultCode = MLAnchors.Instance.DeleteAnchor(anchorId);
                return MLResult.Create(resultCode);
            }

            public string Id => this.id.ToString();

            public string SpaceId => this.spaceId.ToString();

            public readonly Pose Pose;

            public readonly ulong ExpirationTimeStamp;

            public readonly bool IsPersisted;

            internal readonly NativeBindings.MLUUIDBytes id;

            internal readonly NativeBindings.MLUUIDBytes spaceId;

            internal readonly MagicLeapNativeBindings.MLCoordinateFrameUID cfuid;

            public MLResult Publish()
            {
                var resultCode = MLAnchors.Instance.PublishAnchor(this);
                return MLResult.Create(resultCode);
            }

            public MLResult Update(long newExpirationTimeStamp)
            {
                if (newExpirationTimeStamp < 0)
                    return MLResult.Create(MLResult.Code.InvalidParam,
                        "The expirationSeconds parameter was a negative number and should be positive or 0.");
                
                double unixTimestamp = 0;
                if (newExpirationTimeStamp > 0)
                {
                    var maxExpirationSeconds = (long)DateTime.MaxValue.Subtract(DateTime.UtcNow).TotalSeconds;
                    var clampedExpirationSeconds = Math.Clamp(newExpirationTimeStamp, 0, maxExpirationSeconds);
                    
                    unixTimestamp = (DateTime.UtcNow.AddSeconds(clampedExpirationSeconds)).Subtract(DateTime.UnixEpoch).TotalSeconds;
                }
                
                var resultCode = MLAnchors.Instance.UpdateAnchor(this, (ulong)unixTimestamp);
                return MLResult.Create(resultCode);
            }

            public MLResult Delete()
            {
                var resultCode = MLAnchors.Instance.DeleteAnchor(this);
                return MLResult.Create(resultCode);
            }

            internal Anchor(NativeBindings.MLSpatialAnchor nativeAnchor)
            {
                this.id = nativeAnchor.Id;
                this.spaceId = nativeAnchor.SpaceId;
                this.cfuid = nativeAnchor.Cfuid;
                MagicLeapXrProviderNativeBindings.GetUnityPose(nativeAnchor.Cfuid, out this.Pose);
                this.ExpirationTimeStamp = nativeAnchor.ExpirationTimeStamp;
                this.IsPersisted = nativeAnchor.IsPersisted;
            }

            public static bool operator ==(Anchor one, Anchor two)
            {
                return one.id == two.id;
            }

            public static bool operator !=(Anchor one, Anchor two)
            {
                return !(one == two);
            }

            public override bool Equals(object obj)
            {
                if (obj is Anchor)
                {
                    var rhs = (Anchor)obj;
                    return this == rhs;
                }

                return false;
            }

            public override int GetHashCode()
            {
                return this.Id.GetHashCode();
            }

            public override string ToString() => $"id: {Id},\nPose: {Pose},\nExpirationTimeStamp: {ExpirationTimeStamp},\nIsPersisted: {IsPersisted},\nSpaceId: {SpaceId}";
        }

        public readonly struct LocalizationInfo
        {
            public readonly LocalizationStatus LocalizationStatus;

            public readonly MappingMode MappingMode;

            public readonly string SpaceName;

            public readonly string SpaceId => this.spaceId.ToString();

            public readonly Pose SpaceOrigin;

            internal readonly NativeBindings.MLUUIDBytes spaceId;

            internal readonly MagicLeapNativeBindings.MLCoordinateFrameUID spaceOrigin;

            public LocalizationInfo(NativeBindings.MLSpatialAnchorLocalizationInfo nativeInfo)
            {
                this.LocalizationStatus = nativeInfo.LocalizationStatus;
                this.MappingMode = nativeInfo.MappingMode;
                this.SpaceName = nativeInfo.SpaceName;
                this.spaceId = nativeInfo.SpaceId;
                this.spaceOrigin = nativeInfo.TargetSpaceOrigin;

                IntPtr snapshot = IntPtr.Zero;
                MagicLeapNativeBindings.MLTransform transform = new MagicLeapNativeBindings.MLTransform();
                MagicLeapNativeBindings.MLCoordinateFrameUID cfuid = nativeInfo.TargetSpaceOrigin;
                MagicLeapNativeBindings.MLPerceptionGetSnapshot(ref snapshot);
                MagicLeapNativeBindings.MLSnapshotGetTransform(snapshot, ref cfuid, ref transform);
                
                this.SpaceOrigin.position = transform.Position.ToVector3();
                this.SpaceOrigin.rotation = MLConvert.ToUnity(transform.Rotation);

                MagicLeapNativeBindings.MLPerceptionReleaseSnapshot(snapshot);
            }

            public override string ToString() => $"LocalizationStatus: {this.LocalizationStatus},\nMappingMode: {this.MappingMode},\nSpaceName: {this.SpaceName},\nSpaceId: {this.SpaceId}, \nSpaceOriginId: {this.spaceOrigin}, \nSpaceOrigin: {this.SpaceOrigin}";

        }
    }

}
```



