---

title: ReferenceFrame.cs

---


# ReferenceFrame.cs









## Source code

```csharp
using System;
using System.Runtime.InteropServices;
using UnityEngine.XR.ARSubsystems;

namespace UnityEngine.XR.MagicLeap
{
    internal struct ReferenceFrame
    {
        public struct Cinfo
        {
            public Pose closetCoordinateFrame;

            public Native.MagicLeapNativeBindings.MLCoordinateFrameUID cfuid;

            public TrackingState trackingState;

            public Pose initialAnchorPose;
        }

        public ReferenceFrame(Cinfo cinfo)
        {
            trackableId = GenerateTrackableId();
            coordinateFrame = cinfo.closetCoordinateFrame;
            cfuid = cinfo.cfuid;
            trackingState = cinfo.trackingState;

            // Compute the delta transform between the closet coordinate frame and the anchor
            m_AnchorFromCoordinateFrame = Pose.identity;
            ComputeDelta(cinfo.initialAnchorPose);
        }

        Pose m_AnchorFromCoordinateFrame;

        public TrackableId trackableId { get; private set; }

        public Pose coordinateFrame { get; set; }

        public Native.MagicLeapNativeBindings.MLCoordinateFrameUID cfuid { get; private set; }

        public TrackingState trackingState { get; set; }

        public Pose anchorPose
        {
            get
            {
                return m_AnchorFromCoordinateFrame.GetTransformedBy(coordinateFrame);
            }
        }

        public XRAnchor anchor
        {
            get
            {
                return new XRAnchor(
                    trackableId,
                    anchorPose,
                    trackingState,
                    IntPtr.Zero);
            }
        }

        public void SetCoordinateFrame(Native.MagicLeapNativeBindings.MLCoordinateFrameUID cfuid, Pose coordinateFrame)
        {
            // Compute the current anchor pose
            var pose = anchorPose;

            // Set new coordinate frame
            this.cfuid = cfuid;
            this.coordinateFrame = coordinateFrame;

            // Recompute the delta transform based on the new coordinate frame
            ComputeDelta(pose);
        }

        public bool SetTrackingState(TrackingState trackingState)
        {
            var oldTrackingState = this.trackingState;
            this.trackingState = trackingState;
            return oldTrackingState != trackingState;
        }

        void ComputeDelta(Pose pose)
        {
            var invRotation = Quaternion.Inverse(coordinateFrame.rotation);
            m_AnchorFromCoordinateFrame = new Pose(
                invRotation * (pose.position - coordinateFrame.position),
                invRotation * pose.rotation);
        }

        static unsafe TrackableId GenerateTrackableId()
        {
            var guid = Guid.NewGuid();
            void* guidPtr = &guid;
            return Marshal.PtrToStructure<TrackableId>((IntPtr)guidPtr);
        }
    }
}
```




