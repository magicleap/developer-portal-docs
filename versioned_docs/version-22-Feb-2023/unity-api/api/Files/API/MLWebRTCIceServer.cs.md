---

title: MLWebRTCIceServer.cs

---


# MLWebRTCIceServer.cs









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
        public partial struct IceServer
        {
            public string Uri { get; private set; }

            public string UserName { get; private set; }

            public string Password { get; private set; }

            public static IceServer Create(string uri, string userName = null, string password = null)
            {
                IceServer iceServer = new IceServer()
                {
                    Uri = uri,
                    UserName = userName,
                    Password = password,
                };

                return iceServer;
            }

            public override string ToString()
            {
                return $"Uri : {Uri} ; Username : {UserName} ; Password : {Password}";
            }
        }
    }
}
```




