---

title: MLSegmentedDimmer.cs

---


# MLSegmentedDimmer.cs









## Source code

```csharp
using UnityEngine.Rendering;
#if URP_14_0_0_OR_NEWER
using UnityEngine.Rendering.Universal;
using SegmentedDimmerFeature = URP.SegmentedDimmer.SegmentedDimmer;
#endif

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLSegmentedDimmer
    {
#if URP_14_0_0_OR_NEWER
        private static SegmentedDimmerFeature urpFeature;
        private static SegmentedDimmerFeature Feature
        {
            get
            {
                if(urpFeature == null)
                {
                    var urp = GraphicsSettings.currentRenderPipeline as UniversalRenderPipelineAsset;
                    if(urp != null)
                    {
                        urpFeature = urp.GetRendererFeature<SegmentedDimmerFeature>() as SegmentedDimmerFeature;
                    }
                }
                return urpFeature;
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

#if URP_14_0_0_OR_NEWER
        public static bool Exists => Feature != null;
#else
        public static bool Exists => false;
#endif

        public static void SetEnabled(bool enabled)
        {
#if URP_14_0_0_OR_NEWER
            if (Exists)
            {
                var renderers = GameObject.FindObjectsOfType<MeshRenderer>();
                foreach (var r in renderers)
                {
                    if ((Feature.settings.layerMask & (1 << r.gameObject.layer)) != 0)
                    {
                        r.enabled = enabled;
                    }
                }
            }
            else
            {
                Debug.LogError("Segmented Dimmer requirement not met: URP SegmentedDimmer RenderFeature was not configured.");
            }
#else
            Debug.LogError("Segmented Dimmer requirement not met: Package com.unity.render-pipelines.universal >= 14.0.0 was not installed.");
#endif
        }        

        public static int GetDefaultLayer()
        {
#if URP_14_0_0_OR_NEWER
            if (defaultLayer >= 0)
            {
                return defaultLayer;
            }
            for (int i = 0; i < 32; i++)
            {
                if (Feature.settings.layerMask == (Feature.settings.layerMask | (1 << i)))
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



