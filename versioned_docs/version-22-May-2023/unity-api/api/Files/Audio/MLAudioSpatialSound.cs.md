---

title: MLAudioSpatialSound.cs

---


# MLAudioSpatialSound.cs









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
    using UnityEngine.XR.MagicLeap.Native;

    public sealed partial class MLAudioOutput
    {
        public sealed partial class SpatialSound
        {
            [Serializable]
            public sealed class SendLevels
            {
                [SerializeField]
                [Range(0.0f, 1.0f)]
                public float Gain;

                [SerializeField]
                [Range(0.0f, 1.0f)]
                public float GainLF;

                [SerializeField]
                [Range(0.0f, 1.0f)]
                public float GainMF;

                [SerializeField]
                [Range(0.0f, 1.0f)]
                public float GainHF;

                public override string ToString()
                {
                    return $"Gain: {Gain}, GainLF: {GainLF}, GainMF: {GainMF}, GainHF: {GainHF}";
                }
            }

            [Serializable]
            public sealed class DistanceProperties
            {
                [SerializeField]
                public float MinDistance;

                [SerializeField]
                public float MaxDistance;

                [SerializeField]
                public float RolloffFactor;

                public override string ToString()
                {
                    return $"MinDistance: {MinDistance}, MaxDistance: {MaxDistance}, RolloffFactor: {RolloffFactor}";
                }
            }

            [Serializable]
            public sealed class RadiationProperties
            {
                [SerializeField]
                [Range(0.0f, 360.0f)]
                public float InnerAngle;

                [SerializeField]
                [Range(0.0f, 360.0f)]
                public float OuterAngle;

                [SerializeField]
                [Range(0.0f, 1.0f)]
                public float OuterGain;

                [SerializeField]
                [Range(0.0f, 1.0f)]
                public float OuterGainLF;

                [SerializeField]
                [Range(0.0f, 1.0f)]
                public float OuterGainMF;

                [SerializeField]
                [Range(0.0f, 1.0f)]
                public float OuterGainHF;

                public override string ToString()
                {
                    return $"InnerAngle: {InnerAngle}, OuterAngle: {OuterAngle}, OuterGain: {OuterGain}, OuterGainLF: {OuterGainLF}, OuterGainMF: {OuterGainMF}, OuterGainHF: {OuterGainHF}";
                }
            }
        }
    }
}
```




