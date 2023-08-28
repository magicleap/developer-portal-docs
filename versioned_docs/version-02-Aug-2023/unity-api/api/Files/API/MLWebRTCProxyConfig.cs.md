---

title: MLWebRTCProxyConfig.cs

---


# MLWebRTCProxyConfig.cs









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
        public enum ProxyType
        {
            Https,
            Socks5
        }

        public partial struct ProxyConfig
        {
            public ProxyType Type { get; private set; }

            public string HostAddress { get; private set; }

            public int HostPort { get; private set; }

            public string Username { get; private set; }

            public string Password { get; private set; }

            public bool AutoDetect { get; private set; }

            public string AutoConfigUrl { get; private set; }

            public string BypassList { get; private set; }

            public static ProxyConfig Create(ProxyType type, string hostAddress, int hostPort, string userName = null, string password = null, bool autoDetect = false, string autoConfigUrl = null, string bypassList = null)
            {
                ProxyConfig proxyConfig = new ProxyConfig()
                {
                    Type = type,
                    HostAddress = hostAddress,
                    HostPort = hostPort,
                    Username = userName,
                    Password = password,
                    AutoDetect = autoDetect,
                    AutoConfigUrl = autoConfigUrl,
                    BypassList = bypassList
                };

                return proxyConfig;
            }

            public override string ToString()
            {
                return $"Type: {Type}, Host: {HostAddress}:{HostPort}, Auth: {Username}:{Password},\nAutoDetect: {AutoDetect}, AutoConfigUrl: {AutoConfigUrl}, BypassList: {BypassList}";
            }
        }
    }
}
```




