---

title: MLWebViewInternal.cs

---


# MLWebViewInternal.cs









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
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebView
    {

        private GCHandle gcHandle;

        private MLWebView()
        {
            gcHandle = GCHandle.Alloc(this, GCHandleType.Weak);
            Handle = Native.MagicLeapNativeBindings.InvalidHandle;
        }

        ~MLWebView()
        {
            gcHandle.Free();
        }

        private MLResult.Code CreateInternal(uint width, uint height, bool isPopup, ulong popupID)
        {
            Handle = MagicLeapNativeBindings.InvalidHandle;
            var resultCode = MLPermissions.CheckPermission(MLPermission.WebView).Result;
            if (!MLResult.DidNativeCallSucceed(resultCode, nameof(CreateInternal)))
            {
                MLPluginLog.Error($"{nameof(MLWebView)} requires missing permission {MLPermission.Internet}");
                return MLResult.Code.PermissionDenied;
            }

            var settings = NativeBindings.Settings.Create(gcHandle, width, height, isPopup, popupID);

            MLResult.Code result = NativeBindings.MLWebViewCreate(out Handle, ref settings);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewCreate));
            return result;
        }

        private MLResult.Code DestroyInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            MLResult.Code result = NativeBindings.MLWebViewDestroy(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewDestroy));
            Handle = MagicLeapNativeBindings.InvalidHandle;
            return result;
        }

        private MLResult.Code GoToInternal(string url)
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }
            var result = NativeBindings.MLWebViewGoTo(Handle, url);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewGoTo));
            return result;
        }

        private MLResult.Code GoBackInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }
            var result = NativeBindings.MLWebViewGoBack(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewGoBack));
            return result;
        }

        private MLResult.Code GoForwardInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }
            var result = NativeBindings.MLWebViewGoForward(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewGoForward));
            return result;
        }

        private MLResult.Code ReloadInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }
            var result = NativeBindings.MLWebViewReload(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewReload));
            return result;
        }

        private string GetURLInternal()
        {
            string url = string.Empty;

            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return url;
            }

            MLResult.Code result = NativeBindings.MLWebViewGetUrl(Handle, out uint length, IntPtr.Zero);

            if (MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewGetUrl)))
            {
                IntPtr stringPtr = Marshal.AllocHGlobal((int)length);

                try
                {
                    result = NativeBindings.MLWebViewGetUrl(Handle, out length, stringPtr);
                    MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewGetUrl));
                    url = Marshal.PtrToStringAnsi(stringPtr);
                }
                finally
                {
                    Marshal.FreeHGlobal(stringPtr);
                }
            }

            return url;
        }

        private bool CanGoBackInternal()
        {
            bool canGoBack = false;
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return canGoBack;
            }

            MLResult.Code result = NativeBindings.MLWebViewCanGoBack(Handle, out canGoBack);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewCanGoBack), IllegalStatePredicate);
            return canGoBack;
        }

        private bool CanGoForwardInternal()
        {
            bool canGoForward = false;

            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return canGoForward;
            }

            MLResult.Code result = NativeBindings.MLWebViewCanGoForward(Handle, out canGoForward);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewCanGoForward), IllegalStatePredicate);
            return canGoForward;
        }

        private bool IllegalStatePredicate(MLResult.Code code) => code == MLResult.Code.Ok || code == MLResult.Code.IllegalState;

        private MLResult.Code InjectMouseMoveInternal(uint xPosition, uint yPosition, EventFlags modifiers)
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            NativeBindings.CursorState cursorState = NativeBindings.CursorState.Create(xPosition, yPosition, modifiers);
            var result = NativeBindings.MLWebViewInjectMouseMove(Handle, ref cursorState);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewInjectMouseMove));
            return result;
        }

        private MLResult.Code InjectMouseButtonDownInternal(uint xPosition, uint yPosition, EventFlags modifiers)
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            NativeBindings.CursorState cursorState = NativeBindings.CursorState.Create(xPosition, yPosition, modifiers);
            var result = NativeBindings.MLWebViewInjectMouseButtonDown(Handle, ref cursorState);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewInjectMouseButtonDown));
            return result;
        }

        private MLResult.Code InjectMouseButtonUpInternal(uint xPosition, uint yPosition, EventFlags modifiers)
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            NativeBindings.CursorState cursorState = NativeBindings.CursorState.Create(xPosition, yPosition, modifiers);
            var result = NativeBindings.MLWebViewInjectMouseButtonUp(Handle, ref cursorState);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewInjectMouseButtonUp));
            return result;
        }

        private MLResult.Code InjectCharInternal(char charUtf32)
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewInjectChar(Handle, Convert.ToUInt32(charUtf32));
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewInjectChar));
            return result;
        }

        private MLResult.Code InjectKeyDownInternal(KeyCode keyCode, uint modifierMask)
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewInjectKeyDown(Handle, keyCode, modifierMask);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewInjectKeyDown));
            return result;
        }

        private MLResult.Code InjectKeyUpInternal(KeyCode keyCode, uint modifierMask)
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewInjectKeyUp(Handle, keyCode, modifierMask);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewInjectKeyUp));
            return result;
        }

        private MLResult.Code ScrollByInternal(uint xPixels, uint yPixels)
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewScrollBy(Handle, xPixels, yPixels);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewScrollBy));
            return result;
        }

        private Vector2Int GetScrollSizeInternal()
        {
            int width = 0;
            int height = 0;
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return new Vector2Int(width, height);
            }

            MLResult.Code result = NativeBindings.MLWebViewGetScrollSize(Handle, out width, out height);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewGetScrollSize));
            return new Vector2Int(width, height);
        }

        private Vector2Int GetScrollOffsetInternal()
        {
            int x = 0;
            int y = 0;
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return new Vector2Int(x, y);
            }

            MLResult.Code result = NativeBindings.MLWebViewGetScrollOffset(Handle, out x, out y);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewGetScrollOffset));
            return new Vector2Int(x, y);
        }

        private MLResult.Code ResetZoomInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewResetZoom(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewResetZoom));
            return result;
        }

        private MLResult.Code ZoomInInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewZoomIn(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewZoomIn));
            return result;
        }

        private MLResult.Code ZoomOutInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewZoomOut(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewZoomOut));
            return result;
        }

        private double GetZoomFactorInternal()
        {
            double zoomFactor = 1;
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return zoomFactor;
            }

            MLResult.Code result = NativeBindings.MLWebViewGetZoomFactor(Handle, out zoomFactor);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewGetZoomFactor), IllegalStatePredicate);
            return zoomFactor;
        }

        private MLResult.Code RemoveAllCookiesInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewRemoveAllCookies(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewRemoveAllCookies));
            return result;
        }

        private MLResult.Code ClearCacheInternal()
        {
            if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
            {
                MLPluginLog.Error("invalid WebView handle");
                return MLResult.Code.InvalidParam;
            }

            var result = NativeBindings.MLWebViewClearCache(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewClearCache));
            return result;
        }


        private MLResult.Code PauseInternal(PauseType pauseType)
        {
            MLResult.Code result = NativeBindings.MLWebViewPause(Handle, pauseType);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewPause));
            return result;
        }

        private MLResult.Code ResumeInternal()
        {
            MLResult.Code result = NativeBindings.MLWebViewResume(Handle);
            MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLWebViewResume));
            return result;
        }
    }
}
```




