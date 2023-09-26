---

title: MLSegmentedDimmer.cs

---


# MLSegmentedDimmer.cs









## Source code

```csharp
using System;
using UnityEngine.Rendering;
#if URP_14_0_0_OR_NEWER
using UnityEngine.Rendering.Universal;
#if UNITY_XR_MAGICLEAP_PROVIDER
using SegmentedDimmerFeature = URP.SegmentedDimmer.SegmentedDimmer;
#endif
#endif

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLSegmentedDimmer
    {
#if URP_14_0_0_OR_NEWER && UNITY_XR_MAGICLEAP_PROVIDER
        private static SegmentedDimmerFeature segmentedDimmerFeature;
        private static SegmentedDimmerFeature SegmentedDimmerFeature
        {
            get
            {
                if(segmentedDimmerFeature == null)
                {
                    var urp = GraphicsSettings.currentRenderPipeline as UniversalRenderPipelineAsset;
                    if(urp != null)
                    {
                        segmentedDimmerFeature = urp.GetRendererFeature<SegmentedDimmerFeature>() as SegmentedDimmerFeature;
                    }
                }
                return segmentedDimmerFeature;
            }
        }
#endif

        private static int defaultLayer = -1;

        public static void Activate()
        {
            MLGraphicsHooks.RequestAlphaBlendFrameRendering(true);
        }

        public static void Deactivate()
        {
            MLGraphicsHooks.RequestAlphaBlendFrameRendering(false);
        }

#if URP_14_0_0_OR_NEWER && UNITY_XR_MAGICLEAP_PROVIDER
        public static bool Exists => SegmentedDimmerFeature != null;
#else
        public static bool Exists => false;
#endif

        public static int GetDefaultLayer()
        {
#if URP_14_0_0_OR_NEWER && UNITY_XR_MAGICLEAP_PROVIDER
            if (defaultLayer >= 0)
            {
                return defaultLayer;
            }
            for (int i = 0; i < 32; i++)
            {
                if (SegmentedDimmerFeature.settings.layerMask == (SegmentedDimmerFeature.settings.layerMask | (1 << i)))
                {
                    defaultLayer = i;
                    break;
                }
            }
#endif
            return defaultLayer;
        }

        
    }
}
```



