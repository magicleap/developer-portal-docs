---

title: MLMarkerTracker.cs

---


# MLMarkerTracker.cs









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

    public sealed partial class MLMarkerTracker : MLAutoAPISingleton<MLMarkerTracker>
    {
        public static event Action<MarkerData> OnMLMarkerTrackerResultsFound;

        public static event Action<MarkerData[]> OnMLMarkerTrackerResultsFoundArray;

        private static TrackerSettings futureSettingsValue;

        private static bool IsPaused { get; set; } = false;

        public static async Task SetSettingsAsync(TrackerSettings value)
        {
            if (futureSettingsValue.Equals(value))
                return;

            futureSettingsValue = value;
            var resultCode = (await MLMarkerTrackerSettingsUpdate(value)).Result;
            if (MLResult.IsOK(resultCode))
                Instance.settings = value;
        }

        private static bool IsScanning => Instance.settings.EnableMarkerScanning;
        private static bool WasScanning = false;

        private MLMarkerTracker.TrackerSettings settings = TrackerSettings.Create(true, MarkerType.All);

        public static async Task StartScanningAsync(TrackerSettings? settings = null)
        {
            if (IsStarted && Instance.settings.EnableMarkerScanning == true)
                return;

            settings ??= Instance.settings;

            await SetSettingsAsync(TrackerSettings.Create(true, settings.Value.MarkerTypes, settings.Value.QRCodeSize, settings.Value.ArucoDicitonary, settings.Value.ArucoMarkerSize));
        }

        public async static Task StopScanningAsync()
        {
            // check future settings instead of current settings because this is asynchronous
            if (!IsStarted || futureSettingsValue.EnableMarkerScanning == false)
                return;

            await SetSettingsAsync(TrackerSettings.Create(false, Instance.settings.MarkerTypes, Instance.settings.QRCodeSize, Instance.settings.ArucoDicitonary, Instance.settings.ArucoMarkerSize));
        }

        protected override MLResult.Code StopAPI()
        {
            if (IsScanning)
                Task.Run(StopScanningAsync).Wait();

            return NativeBindings.MLMarkerTrackerDestroy(Handle);
        }

        protected override MLResult.Code StartAPI() => MLMarkerTrackerCreate(Instance.settings);

        protected override void Update()
        {
            if (IsScanning)
            {
                var results = MLMarkerTrackerGetResults();
                foreach (var result in results)
                    OnMLMarkerTrackerResultsFound?.Invoke(result);

                OnMLMarkerTrackerResultsFoundArray?.Invoke(results);
            }
        }

        protected override void OnApplicationPause(bool pauseStatus)
        {
            if (pauseStatus)
            {
                HandleApplicationPause();
            }
            else
            {
                HandleApplicationUnpause();
            }
        }

        private void HandleApplicationPause()
        {
            if (IsStarted)
            {
                WasScanning = IsScanning;
                StopAPI();
                IsPaused = true;
            }
        }

        private void HandleApplicationUnpause()
        {
            if (IsPaused)
            {
                StartAPI();
                IsPaused = false;
                if (WasScanning)
                {
                    _ = StartScanningAsync();
                }
            }
        }
    }
}
```




