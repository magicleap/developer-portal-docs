---

title: MLWebView.cs

---


# MLWebView.cs









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

    public partial class MLWebView : MLAPIBase
    {
        public enum PauseType
        {
            MultiMedia,

            Timers,

            Discard
        }

        public static MLWebView Create(uint width, uint height, bool isPopup = false, ulong popupId = 0)
        {
            MLWebView webView = new MLWebView();
            return webView.CreateInternal(width, height, isPopup, popupId) == MLResult.Code.Ok ? webView : null;

        }

        public MLResult Destroy() => MLResult.Create(DestroyInternal());

        public ulong WebViewHandle
        {
            get => Handle;
        }

        public bool IgnoreCertificateError
        {
            get; set;
        } = false;

        public bool AcceptPopup
        {
            get; set;
        } = true;

        public MLResult GoTo(string url) => MLResult.Create(GoToInternal(url));

        public MLResult Reload() => MLResult.Create(ReloadInternal());

        public MLResult GoBack() => MLResult.Create(GoBackInternal());

        public MLResult GoForward() => MLResult.Create(GoForwardInternal());

        public bool CanGoBack() => CanGoBackInternal();

        public bool CanGoForward() => CanGoForwardInternal();

        public string GetURL() => GetURLInternal();

        public MLResult InjectMouseMove(uint xPosition, uint yPosition, EventFlags modifiers) => MLResult.Create(InjectMouseMoveInternal(xPosition, yPosition, modifiers));

        public MLResult InjectMouseButtonDown(uint xPosition, uint yPosition, EventFlags modifiers) => MLResult.Create(InjectMouseButtonDownInternal(xPosition, yPosition, modifiers));

        public MLResult InjectMouseButtonUp(uint xPosition, uint yPosition, EventFlags modifiers) => MLResult.Create(InjectMouseButtonUpInternal(xPosition, yPosition, modifiers));

        public MLResult InjectChar(char charUtf) => MLResult.Create(InjectCharInternal(charUtf));

        public MLResult InjectKeyDown(MLWebView.KeyCode keyCode, uint modifierMask) => MLResult.Create(InjectKeyDownInternal(keyCode, modifierMask));

        public MLResult InjectKeyUp(MLWebView.KeyCode keyCode, uint modifierMask) => MLResult.Create(InjectKeyUpInternal(keyCode, modifierMask));

        public MLResult ScrollBy(uint xPixels, uint yPixels) => MLResult.Create(ScrollByInternal(xPixels, yPixels));

        [Obsolete("GetScrollSize has been deprecated and will be removed in a future release.")]
        public Vector2Int GetScrollSize() => GetScrollSizeInternal();

        [Obsolete("GetScrollOffset has been deprecated and will be removed in a future release.")]
        public Vector2Int GetScrollOffset() => GetScrollOffsetInternal();

        public MLResult ResetZoom() => MLResult.Create(ResetZoomInternal());

        public MLResult ZoomIn() => MLResult.Create(ZoomInInternal());

        public MLResult ZoomOut() => MLResult.Create(ZoomOutInternal());

        public double GetZoomFactor() => GetZoomFactorInternal();

        public MLResult ClearCache() => MLResult.Create(ClearCacheInternal());

        public MLResult RemoveAllCookies() => MLResult.Create(RemoveAllCookiesInternal());

        public MLResult Pause(PauseType pauseType) => MLResult.Create(PauseInternal(pauseType));

        public MLResult Resume() => MLResult.Create(ResumeInternal());

        public struct InputFieldData
        {
            public int X;

            public int Y;

            public int Width;

            public int Height;

            public TextInputFlags TextInputFlags;

            public TextInputType TextInputType;
        }
    }
}
```




