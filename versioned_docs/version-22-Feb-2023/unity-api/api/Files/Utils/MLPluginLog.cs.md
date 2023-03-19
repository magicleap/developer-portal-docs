---

title: MLPluginLog.cs

---


# MLPluginLog.cs









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
    public static class MLPluginLog
    {
        public enum VerbosityLevel : uint
        {
            Silent,

            ErrorsOnly,

            WarningsAndErrors,

            Verbose,
        }

        public static VerbosityLevel Level { get; set; } = VerbosityLevel.ErrorsOnly;

        public static void Debug(object logMsg)
        {
            if (MLPluginLog.Level == MLPluginLog.VerbosityLevel.Verbose)
            {
                UnityEngine.Debug.Log(logMsg);
            }
        }

        public static void DebugFormat(string logMsg, params object[] args)
        {
            if (MLPluginLog.Level == MLPluginLog.VerbosityLevel.Verbose)
            {
                UnityEngine.Debug.LogFormat(logMsg, args);
            }
        }

        public static void Warning(object logMsg)
        {
            if (MLPluginLog.Level == MLPluginLog.VerbosityLevel.Verbose || MLPluginLog.Level == MLPluginLog.VerbosityLevel.WarningsAndErrors)
            {
                UnityEngine.Debug.LogWarning("Warning: " + logMsg);
            }
        }

        public static void WarningFormat(string logMsg, params object[] args)
        {
            if (MLPluginLog.Level == MLPluginLog.VerbosityLevel.Verbose || MLPluginLog.Level == MLPluginLog.VerbosityLevel.WarningsAndErrors)
            {
                UnityEngine.Debug.LogWarningFormat("Warning: " + logMsg, args);
            }
        }

        public static void Error(object logMsg)
        {
            if (MLPluginLog.Level != MLPluginLog.VerbosityLevel.Silent)
            {
                UnityEngine.Debug.LogError("Error: " + logMsg);
            }
        }

        public static void ErrorFormat(string logMsg, params object[] args)
        {
            if (MLPluginLog.Level != MLPluginLog.VerbosityLevel.Silent)
            {
                UnityEngine.Debug.LogErrorFormat("Error: " + logMsg, args);
            }
        }
    }
}
```




