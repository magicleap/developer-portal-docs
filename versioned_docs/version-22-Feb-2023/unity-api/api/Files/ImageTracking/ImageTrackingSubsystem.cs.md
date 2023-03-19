---

title: ImageTrackingSubsystem.cs

---


# ImageTrackingSubsystem.cs









## Source code

```csharp
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Unity.Collections;
using Unity.Collections.LowLevel.Unsafe;
using Unity.Jobs;
using UnityEngine.Scripting;
using UnityEngine.XR.ARSubsystems;
using UnityEngine.XR.MagicLeap.Native;

namespace UnityEngine.XR.MagicLeap
{
    [Preserve]
    public sealed class ImageTrackingSubsystem : XRImageTrackingSubsystem
    {

#if !UNITY_2020_2_OR_NEWER
        protected override Provider CreateProvider() => new MagicLeapProvider();
#endif

        class MagicLeapProvider : Provider
        {
            internal static bool IsSubsystemStateValid()
            {
                // TODO: Implement when Image Tracking is available from the platform
                return false;
            }

            public bool RequestPermissionIfNecessary()
            {
                // TODO: Implement when Image Tracking is available from the platform
                return false;
            }

            public MagicLeapProvider()
            {
                // TODO: Implement when Image Tracking is available from the platform
            }

#if UNITY_2020_2_OR_NEWER
            public override void Start() { }
            public override void Stop() { }
#endif

            public override void Destroy()
            {
                // TODO: Implement when Image Tracking is available from the platform
            }

            public override RuntimeReferenceImageLibrary imageLibrary
            {
                set
                {
                    // TODO: Implement when Image Tracking is available from the platform
                }
            }

            public unsafe override TrackableChanges<XRTrackedImage> GetChanges(XRTrackedImage defaultTrackedImage, Allocator allocator)
            {
                // TODO: Implement when Image Tracking is available from the platform
                return default(TrackableChanges<XRTrackedImage>);
            }

            public override int requestedMaxNumberOfMovingImages
            {
                get => m_RequestedNumberOfMovingImages;
                set
                {
                    m_RequestedNumberOfMovingImages = value;
                }
            }
            int m_RequestedNumberOfMovingImages = 25;

            public override int currentMaxNumberOfMovingImages => m_RequestedNumberOfMovingImages;

            public override RuntimeReferenceImageLibrary CreateRuntimeLibrary(XRReferenceImageLibrary serializedLibrary)
            {
                // TODO: Implement when Image Tracking is available from the platform
                return null;
            }
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        static void RegisterDescriptor()
        {
            XRImageTrackingSubsystemDescriptor.Create(new XRImageTrackingSubsystemDescriptor.Cinfo
            {
                id = MagicLeapXrProvider.ImageTrackingSubsystemId,
#if UNITY_2020_2_OR_NEWER
                providerType = typeof(MagicLeapProvider),
                subsystemTypeOverride = typeof(ImageTrackingSubsystem),
#else
                subsystemImplementationType = typeof(ImageTrackingSubsystem),
#endif
                // TODO: Update when Image Tracking is available from the platform
                supportsMovingImages = false,
                supportsMutableLibrary = false
            });
        }
    }
}
```




