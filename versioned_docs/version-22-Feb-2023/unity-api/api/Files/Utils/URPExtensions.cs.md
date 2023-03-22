---

title: URPExtensions.cs

---


# URPExtensions.cs









## Source code

```csharp
#if URP_14_0_0_OR_NEWER
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using UnityEngine;
using UnityEngine.Rendering.Universal;

namespace UnityEngine.XR.MagicLeap
{
    public static class URPExtensions
    {
        public static ScriptableRendererFeature GetRendererFeature<T>(this UniversalRenderPipelineAsset asset) where T : ScriptableRendererFeature
        {
            var universalRenderData = asset.GetRendererList();

            if (universalRenderData != null && universalRenderData.Count > 0)
            {
                foreach (var renderData in universalRenderData)
                {
                    foreach (var rendererFeature in renderData.rendererFeatures)
                    {
                        if (rendererFeature is T)
                        {
                            return rendererFeature;
                        }
                    }
                }
            }

            return null;
        }

        public static ScriptableRendererFeature GetRendererFeature<T>(this UniversalRendererData asset) where T : ScriptableRendererFeature
        {
            foreach (var rendererFeature in asset.rendererFeatures)
            {
                if (rendererFeature is T)
                {
                    return rendererFeature;
                }
            }

            return null;
        }

        public static UniversalRendererData GetFirstRenderer(this UniversalRenderPipelineAsset asset)
        {
            var rendererList = asset.GetRendererList();

            if(rendererList != null)
            {
                if(rendererList.Count > 0)
                {
                    return rendererList[0];
                }
            }

            return null;
        }

        public static List<UniversalRendererData> GetRendererList(this UniversalRenderPipelineAsset asset)
        {
            var type = asset.GetType();
            var propertyInfo = type.GetField("m_RendererDataList", BindingFlags.Instance | BindingFlags.NonPublic);

            if (propertyInfo == null)
            {
                return null;
            }

            var scriptableRenderDataArray = (ScriptableRendererData[])propertyInfo.GetValue(asset);

            var urpDataList = new List<UniversalRendererData>();
            
            if(scriptableRenderDataArray != null)
            {
                foreach(var dataAsset in scriptableRenderDataArray)
                {
                    if(dataAsset is UniversalRendererData)
                    {
                        urpDataList.Add(dataAsset as UniversalRendererData);
                    }
                }
            }

            return urpDataList;
        }
    }
}
#endif
```




