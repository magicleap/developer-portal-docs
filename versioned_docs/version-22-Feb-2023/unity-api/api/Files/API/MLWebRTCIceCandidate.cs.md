---

title: MLWebRTCIceCandidate.cs

---


# MLWebRTCIceCandidate.cs









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
    public partial class MLWebRTC
    {
        public partial struct IceCandidate
        {
            public string Candidate { get; private set; }

            public string SdpMid { get; private set; }

            public int SdpMLineIndex { get; private set; }

            public static IceCandidate Create(string candidate = "", string sdpMid = "", int sdpMLineIndex = 0)
            {
                IceCandidate iceCandidate = new IceCandidate()
                {
                    Candidate = candidate,
                    SdpMid = sdpMid,
                    SdpMLineIndex = sdpMLineIndex,
                };

                return iceCandidate;
            }
        }
    }
}
```




