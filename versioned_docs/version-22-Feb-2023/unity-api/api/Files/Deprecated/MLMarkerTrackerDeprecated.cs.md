---

title: MLMarkerTrackerDeprecated.cs

---


# MLMarkerTrackerDeprecated.cs









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
    using System.Threading.Tasks;

    public partial class MLMarkerTracker
    {
        [Obsolete("This function will be removed in a future release. Instead, use SetSettingsAsync() with a TrackerSettings parameter.")]
        public static async Task SetSettingsAsync(Settings value)
        {
            var newSettings = TrackerSettings.Create(value.EnableMarkerScanning, value.MarkerTypes, value.QRCodeSize, value.ArucoDicitonary, value.ArucoMarkerSize, Profile.Custom, TrackerSettings.CustomProfile.Create(value.FPSHint, value.ResolutionHint, CameraHint.RGB, value.FullAnalysisIntervalHint, value.CornerRefineMethod, value.UseEdgeRefinement));

            if (futureSettingsValue.Equals(newSettings))
                return;

            futureSettingsValue = newSettings;
            var resultCode = (await MLMarkerTrackerSettingsUpdate(newSettings)).Result;
            if (MLResult.IsOK(resultCode))
                Instance.settings = newSettings;
        }

        [Obsolete("This function will be removed in a future release. Instead, use StartScanningAsync() with a TrackerSettings parameter.")]
        public static async Task StartScanningAsync(Settings settings)
        {
            if (IsStarted && Instance.settings.EnableMarkerScanning == true)
                return;
            
            await SetSettingsAsync(Settings.Create(true, settings.MarkerTypes, settings.QRCodeSize, settings.ArucoDicitonary, settings.ArucoMarkerSize));
        }


        [Serializable]
        [Obsolete("This struct will be removed in a future release. Instead, use the TrackerSettings struct.")]
        public readonly struct Settings
        {
            public readonly bool EnableMarkerScanning;

            public readonly FPSHint FPSHint;

            public readonly ResolutionHint ResolutionHint;

            public readonly FullAnalysisIntervalHint FullAnalysisIntervalHint;

            public readonly CornerRefineMethod CornerRefineMethod;

            public readonly bool UseEdgeRefinement;

            public readonly ArucoDictionaryName ArucoDicitonary;

            public readonly float ArucoMarkerSize;

            public readonly int ArucoCamera;

            public readonly float QRCodeSize;

            public readonly MarkerType MarkerTypes;

            internal Settings(bool enableMarkerScanning, FPSHint fpsHint, ResolutionHint resolutionHint, FullAnalysisIntervalHint fullAnalysisIntervalHint, CornerRefineMethod cornerRefineMethod, bool useEdgeRefinement, MarkerType markerTypes, float qRCodeSize, ArucoDictionaryName arucoDicitonary, float arucoMarkerSize, int arucoCamera)
            {
                this.EnableMarkerScanning = enableMarkerScanning;
                this.FPSHint = fpsHint;
                this.ResolutionHint = resolutionHint;
                this.FullAnalysisIntervalHint = fullAnalysisIntervalHint;
                this.CornerRefineMethod = cornerRefineMethod;
                this.UseEdgeRefinement = useEdgeRefinement;
                this.ArucoDicitonary = arucoDicitonary;
                this.ArucoMarkerSize = arucoMarkerSize;
                this.QRCodeSize = qRCodeSize;
                this.MarkerTypes = markerTypes;
                this.ArucoCamera = arucoCamera;

            }

            public static Settings Create(bool enableMarkerScanning = true, MarkerType markerTypes = MarkerType.All, float qRCodeSize = 0.1f, ArucoDictionaryName arucoDicitonary = ArucoDictionaryName.DICT_5X5_100, float arucoMarkerSize = 0.1f, int arucoCamera = 0, FPSHint fpsHint = FPSHint.Medium, ResolutionHint resolutionHint = ResolutionHint.Low, FullAnalysisIntervalHint fullAnalysisIntervalHint = FullAnalysisIntervalHint.Medium, CornerRefineMethod cornerRefineMethod = CornerRefineMethod.None, bool useEdgeRefinement = false) =>
                new Settings(enableMarkerScanning, fpsHint, resolutionHint, fullAnalysisIntervalHint, cornerRefineMethod, useEdgeRefinement, markerTypes, qRCodeSize, arucoDicitonary, arucoMarkerSize, arucoCamera);

            public override string ToString() => $"{this.MarkerTypes}, {this.ArucoDicitonary}, {this.QRCodeSize}, {this.ArucoMarkerSize}, {this.EnableMarkerScanning}";

        }
    }
}
```




