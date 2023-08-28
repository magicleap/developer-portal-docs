---

title: MLWebViewEvents.cs

---


# MLWebViewEvents.cs









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

    public partial class MLWebView
    {
        public delegate void OnBeforeResourceLoadDelegate(MLWebView webView, string resourceURL);

        public delegate void OnLoadEndDelegate(MLWebView webView, bool isMainFrame, int httpStatusCode);

        public delegate void OnLoadErrorDelegate(MLWebView webView, bool isMainFrame, int httpStatusCode, string errorStr, string failedUrl);

        public delegate void OnCertificateErrorDelegate(MLWebView webView, int errorCode, string url, string errorMessage, string details, bool certificateErrorIgnored);

        public delegate void OnShowKeyboardDelegate(MLWebView webView, InputFieldData keyboardShowData);

        public delegate void OnKeyboardDismissDelegate(MLWebView webView);

        public delegate void OnDestroyDelegate(MLWebView webView);

        public delegate void OnServiceConnectedDelegate(MLWebView webView);

        public delegate void OnServiceDisconnectedDelegate(MLWebView webView);

        public delegate void OnServiceFailedDelegate(MLWebView webView, MLResult result);

        public delegate void OnBeforePopupDelegate(MLWebView webView, string url, bool popupAccepted);

        public delegate void OnPopupOpenedDelegate(MLWebView webView, ulong popupID, string url);

        public delegate void OnPopupClosedDelegate(MLWebView webView, ulong handle);

        public event OnBeforeResourceLoadDelegate OnBeforeResourceLoaded = delegate { };

        public event OnLoadEndDelegate OnLoadEnded = delegate { };

        public event OnLoadErrorDelegate OnErrorLoaded = delegate { };

        public event OnCertificateErrorDelegate OnCertificateErrorLoaded = delegate { };

        public event OnShowKeyboardDelegate OnKeyboardShown = delegate { };

        public event OnKeyboardDismissDelegate OnKeyboardDismissed = delegate { };

        public event OnDestroyDelegate OnWebViewDestroyed = delegate { };

        public event OnServiceConnectedDelegate OnServiceConnected = delegate { };

        public event OnServiceDisconnectedDelegate OnServiceDisconnected = delegate { };

        public event OnServiceFailedDelegate OnServiceFailed = delegate { };

        public event OnBeforePopupDelegate OnBeforePopup = delegate { };

        public event OnPopupOpenedDelegate OnPopupOpened = delegate { };

        public event OnPopupClosedDelegate OnPopupClosed = delegate { };
    }
}
```




