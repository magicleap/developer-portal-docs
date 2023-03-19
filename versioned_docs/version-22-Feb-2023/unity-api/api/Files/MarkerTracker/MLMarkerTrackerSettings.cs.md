---

title: MLMarkerTrackerSettings.cs

---


# MLMarkerTrackerSettings.cs









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

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLMarkerTracker
    {
        [Serializable]
        public readonly struct TrackerSettings
        {
            public readonly bool EnableMarkerScanning;

            public readonly MarkerType MarkerTypes;

            public readonly ArucoDictionaryName ArucoDicitonary;

            public readonly float ArucoMarkerSize;

            public readonly float QRCodeSize;

            public readonly Profile TrackerProfile;

            public readonly CustomProfile CustomTrackerProfile;

            internal TrackerSettings(bool enableMarkerScanning, MarkerType markerTypes, float qRCodeSize, ArucoDictionaryName arucoDicitonary, float arucoMarkerSize, Profile profile, CustomProfile customProfile)
            {
                this.EnableMarkerScanning = enableMarkerScanning;
                this.ArucoDicitonary = arucoDicitonary;
                this.ArucoMarkerSize = arucoMarkerSize;
                this.QRCodeSize = qRCodeSize;
                this.MarkerTypes = markerTypes;
                this.TrackerProfile = profile;
                this.CustomTrackerProfile = customProfile;
            }

            public static TrackerSettings Create(bool enableMarkerScanning = true, MarkerType markerTypes = MarkerType.All, float qRCodeSize = 0.1f, ArucoDictionaryName arucoDicitonary = ArucoDictionaryName.DICT_5X5_100, float arucoMarkerSize = 0.1f, Profile profile = Profile.Default, CustomProfile customProfile = default) =>
                new TrackerSettings(enableMarkerScanning, markerTypes, qRCodeSize, arucoDicitonary, arucoMarkerSize, profile, customProfile);

            public override string ToString() => $" {this.EnableMarkerScanning}, {this.MarkerTypes}, {this.ArucoDicitonary}, {this.QRCodeSize}, {this.ArucoMarkerSize},  {this.TrackerProfile},  {this.CustomTrackerProfile}";



            [Serializable]
            public readonly struct CustomProfile
            {
                public readonly FPSHint FPSHint;

                public readonly ResolutionHint ResolutionHint;

                public readonly CameraHint CameraHint;

                public readonly FullAnalysisIntervalHint FullAnalysisIntervalHint;

                public readonly CornerRefineMethod CornerRefineMethod;

                public readonly bool UseEdgeRefinement;

                internal CustomProfile(FPSHint fpsHint, ResolutionHint resolutionHint, CameraHint cameraHint, FullAnalysisIntervalHint fullAnalysisIntervalHint, CornerRefineMethod cornerRefineMethod, bool useEdgeRefinement)
                {
                    this.FPSHint = fpsHint;
                    this.ResolutionHint = resolutionHint;
                    this.CameraHint = cameraHint;
                    this.FullAnalysisIntervalHint = fullAnalysisIntervalHint;
                    this.CornerRefineMethod = cornerRefineMethod;
                    this.UseEdgeRefinement = useEdgeRefinement;
                }

                public static CustomProfile Create(FPSHint fpsHint = FPSHint.Medium, ResolutionHint resolutionHint = ResolutionHint.Low, CameraHint cameraHint = CameraHint.RGB, FullAnalysisIntervalHint fullAnalysisIntervalHint = FullAnalysisIntervalHint.Medium, CornerRefineMethod cornerRefineMethod = CornerRefineMethod.None, bool useEdgeRefinement = false) =>
                    new CustomProfile(fpsHint, resolutionHint, cameraHint, fullAnalysisIntervalHint, cornerRefineMethod, useEdgeRefinement);

                public override string ToString() => $"{this.FPSHint}, {this.ResolutionHint}, {this.CameraHint}, {this.FullAnalysisIntervalHint}, {this.CornerRefineMethod}, {this.UseEdgeRefinement}";
            }
        }

    }
}
```




