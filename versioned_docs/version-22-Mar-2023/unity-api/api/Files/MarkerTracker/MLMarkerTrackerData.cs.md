---

title: MLMarkerTrackerData.cs

---


# MLMarkerTrackerData.cs









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

using System;
using System.Text;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLMarkerTracker
    {
        [Flags]
        public enum MarkerType
        {
            None = 0,

            QR = 1,

            Aruco_April = 2,

            EAN_13 = 4,

            UPC_A = 8,

            All = 0x3FFFFFFF
        }

        public enum ArucoDictionaryName
        {
            NotInitialized = -1,

            DICT_4X4_50 = 0,

            DICT_4X4_100,

            DICT_4X4_250,

            DICT_4X4_1000,

            DICT_5X5_50,

            DICT_5X5_100,

            DICT_5X5_250,

            DICT_5X5_1000,

            DICT_6X6_50,

            DICT_6X6_100,

            DICT_6X6_250,

            DICT_6X6_1000,

            DICT_7X7_50,

            DICT_7X7_100,

            DICT_7X7_250,

            DICT_7X7_1000,

            DICT_ARUCO_ORIGINAL,

            DICT_APRILTAG_16h5,

            DICT_APRILTAG_25h9,

            DICT_APRILTAG_36h10,

            DICT_APRILTAG_36h11,
        }

        public enum Profile
        {
            Default,

            Custom,

            Speed,

            Accuracy,

            SmallTargets,

            Large_FOV = 6
        }

        public enum FPSHint
        {
            Low,
            Medium,
            High,
            Max
        }

        public enum ResolutionHint
        {
            Low,
            Medium,
            High
        }

        public enum CameraHint
        {
            RGB,

            World
        }

        public enum FullAnalysisIntervalHint
        {
            Max,

            Fast,

            Medium,

            Slow
        }

        public enum CornerRefineMethod
        {
            None,

            Subpix,

            Contour,

            AprilTag
        }

        public readonly struct ArucoData
        {
            public readonly ArucoDictionaryName Dictionary;

            public readonly uint Id;

            internal ArucoData(NativeBindings.MLMarkerTrackerDecodedArucoData nativeArucoData)
            {
                this.Dictionary = nativeArucoData.Dictionary;
                this.Id = nativeArucoData.Id;
            }

            public override string ToString() =>
                $"Id: {Id}\nDictionaryName: {this.Dictionary}";
        }

        public readonly struct BinaryData
        {
            public readonly byte[] Data;

            internal BinaryData(byte[] data)
            {
                this.Data = data;
            }

            public override string ToString() => $"Data: {this.Data}";
        }

        public readonly struct MarkerData
        {
            public readonly MarkerType Type;

            public readonly ArucoData ArucoData;

            public readonly BinaryData BinaryData;

            public readonly Pose Pose;

            public readonly float ReprojectionError;

            internal MarkerData(MarkerType Type, NativeBindings.MLMarkerTrackerDecodedArucoData NativeArucoData, byte[] BinaryDataResult, Pose Pose, float ReprojectionError)
            {
                this.Type = Type;
                this.ArucoData = new ArucoData(NativeArucoData);
                this.BinaryData = new BinaryData(BinaryDataResult);
                this.Pose = Pose;
                this.ReprojectionError = ReprojectionError;
            }
            public override string ToString()
            {
                string toString;
                switch (this.Type)
                {
                    case MarkerType.Aruco_April:
                        toString = $"\nType: {Enum.GetName(typeof(MLMarkerTracker.MarkerType), this.Type)}\nReprojection Error: {this.ReprojectionError}\n Data:\n {this.ArucoData}";
                        break;

                    case MarkerType.QR:
                    case MarkerType.EAN_13:
                    case MarkerType.UPC_A:
                        toString = $"\nType: {Enum.GetName(typeof(MLMarkerTracker.MarkerType), this.Type)}\nReprojection Error: {this.ReprojectionError}\n Data Length:\n{this.BinaryData.Data.Length} bytes";
                        break;

                    default:
                        toString = "Marker has no type.";
                        break;
                }
                return toString;
            }


        }
    }
}
```




