---

title: MLWebViewNativeBindings.cs

---


# MLWebViewNativeBindings.cs









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
        private class NativeBindings : Native.MagicLeapNativeBindings
        {
            public delegate void OnBeforeResourceLoadCallback([MarshalAs(UnmanagedType.LPStr)] string resourceUrl, IntPtr userData);

            public delegate void OnLoadEndCallback([MarshalAs(UnmanagedType.I1)] bool isMainFrame, int httpStatusCode, IntPtr userData);

            public delegate void OnLoadErrorCallback([MarshalAs(UnmanagedType.I1)] bool isMainFrame, int httpStatusCode, [MarshalAs(UnmanagedType.LPStr)] string errorStr, [MarshalAs(UnmanagedType.LPStr)] string failedUrl, IntPtr userData);

            [return: MarshalAs(UnmanagedType.I1)]
            public delegate bool OnCertificateErrorCallback(int errorCode, [MarshalAs(UnmanagedType.LPStr)] string url, [MarshalAs(UnmanagedType.LPStr)] string errorMessage, [MarshalAs(UnmanagedType.LPStr)] string details, IntPtr userData);

            public delegate void OnShowKeyboardCallback(int x, int y, int width, int height, TextInputFlags textInputFlags, TextInputType textInputType, IntPtr userData);

            public delegate void OnKeyboardDismissCallback(IntPtr userData);

            public delegate void OnDestroyCallback(IntPtr userData);

            public delegate void OnServiceConnectedCallback(IntPtr userData);

            public delegate void OnServiceDisconnectedCallback(IntPtr userData);

            public delegate void OnServiceFailedCallback(MLResult result, IntPtr userData);

            public delegate bool OnBeforePopupCallback([MarshalAs(UnmanagedType.LPStr)] string url, IntPtr userData);

            public delegate void OnPopupOpenedCallback(ulong popupID, [MarshalAs(UnmanagedType.LPStr)] string url, IntPtr userData);

            public delegate void OnPopupClosedCallback(ulong handle, IntPtr userData);

            [StructLayout(LayoutKind.Sequential)]
            public struct CursorState
            {
                public uint Version;

                public uint XPosition;

                public uint YPosition;

                public EventFlags Modifiers;

                public static CursorState Create(uint xPosition, uint yPosition, EventFlags modifiers)
                {
                    return new CursorState()
                    {
                        Version = 1,
                        XPosition = xPosition,
                        YPosition = yPosition,
                        Modifiers = modifiers
                    };
                }
            };

            [StructLayout(LayoutKind.Sequential)]
            public struct Settings
            {
                public uint Version;

                public uint Width;

                public uint Height;

                public IntPtr ApplicationVm;

                public IntPtr Context;

                public EventCallbacks Callbacks;

                public bool IsPopup;

                public ulong PopupID;

                public static Settings Create(GCHandle gcHandle, uint width, uint height, bool isPopup, ulong popupID)
                {
                    return new Settings()
                    {
                        Version = 3,
                        Width = width,
                        Height = height,
                        ApplicationVm = GetJavaVM(),
                        Context = GetAppContext(),
                        Callbacks = EventCallbacks.Create(gcHandle),
                        IsPopup = isPopup,
                        PopupID = popupID
                    };
                }
            };

            [StructLayout(LayoutKind.Sequential)]
            public struct EventCallbacks
            {
                public uint Version;

                public IntPtr UserData;

                public OnBeforeResourceLoadCallback OnBeforeResourceLoad;

                public OnLoadEndCallback OnLoadEnd;

                public OnLoadErrorCallback OnLoadError;

                public OnCertificateErrorCallback OnCertificateError;

                public OnShowKeyboardCallback OnShowKeyboard;

                public OnKeyboardDismissCallback OnKeyboardDismiss;

                public OnDestroyCallback OnDestroy;

                public OnServiceConnectedCallback OnServiceConnected;

                public OnServiceDisconnectedCallback OnServiceDisconnected;

                public OnServiceFailedCallback OnServiceFailed;

                public OnBeforePopupCallback OnBeforePopup;

                public OnPopupOpenedCallback OnPopupOpened;

                public OnPopupClosedCallback OnPopupClosed;

                public static EventCallbacks Create(GCHandle gcHandle)
                {
                    return new EventCallbacks()
                    {
                        Version = 3u,
                        UserData = GCHandle.ToIntPtr(gcHandle),
                        OnBeforeResourceLoad = HandleOnBeforeResourceLoad,
                        OnLoadEnd = HandleOnLoadEnd,
                        OnLoadError = HandleOnLoadError,
                        OnCertificateError = HandleOnCertificateError,
                        OnShowKeyboard = HandleOnShowKeyboard,
                        OnKeyboardDismiss = HandleOnKeyboardDismiss,
                        OnDestroy = HandleOnDestroy,
                        OnServiceConnected = HandleServiceConnected,
                        OnServiceDisconnected = HandleServiceDisconnected,
                        OnServiceFailed = HandleServiceFailed,
                        OnBeforePopup = HandleBeforePopup,
                        OnPopupOpened = HandlePopupOpened,
                        OnPopupClosed = HandlePopupClosed
                    };
                }
            };

            [DllImport(CUtilsDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr GetJavaVM();

            [DllImport(CUtilsDLL, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr GetAppContext();

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewCreate(out ulong handle, ref Settings settings);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewDestroy(ulong handle);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewSetEventCallbacks(ulong handle, EventCallbacks callbacks, IntPtr userData);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewAcquireNextAvailableFrame(ulong handle, out IntPtr hwBuffer);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewReleaseFrame(ulong handle, IntPtr hwBuffer);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewGoTo(ulong handle, [MarshalAs(UnmanagedType.LPStr)] string url);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewGoBack(ulong handle);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewGoForward(ulong handle);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewReload(ulong handle);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewGetUrl(ulong handle, out uint inoutSize, IntPtr outUrl);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewCanGoBack(ulong handle, [MarshalAs(UnmanagedType.I1)] out bool outCanGoBack);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewCanGoForward(ulong handle, [MarshalAs(UnmanagedType.I1)] out bool outCanGoForward);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]

            public static extern MLResult.Code MLWebViewInjectMouseMove(ulong handle, ref CursorState cursorState);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewInjectMouseButtonDown(ulong handle, ref CursorState cursorState);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewInjectMouseButtonUp(ulong handle, ref CursorState cursorState);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewInjectChar(ulong handle, uint charUtf32);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewInjectKeyDown(ulong handle, MLWebView.KeyCode keyCode, uint modifierMask);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewInjectKeyUp(ulong handle, MLWebView.KeyCode keyCode, uint modifierMask);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewResetZoom(ulong handle);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewZoomIn(ulong handle);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewZoomOut(ulong handle);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewGetZoomFactor(ulong handle, out double outZoomFactor);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewScrollBy(ulong handle, uint xPixels, uint yPixels);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewGetScrollSize(ulong handle, out int width, out int height);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewGetScrollOffset(ulong handle, out int x, out int y);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewGetFrameTransformMatrix(ulong handle, out MLMat4f outMtx);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewRemoveAllCookies(ulong handle);


            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewPause(ulong handle, MLWebView.PauseType pauseType);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewResume(ulong handle);

            [DllImport(MLWebViewDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLWebViewClearCache(ulong handle);


            [AOT.MonoPInvokeCallback(typeof(OnBeforeResourceLoadCallback))]
            private static void HandleOnBeforeResourceLoad([MarshalAs(UnmanagedType.LPStr)] string resourceUrl, IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, resourceUrl, webView.OnBeforeResourceLoaded);
            }

            [AOT.MonoPInvokeCallback(typeof(OnLoadEndCallback))]
            private static void HandleOnLoadEnd([MarshalAs(UnmanagedType.I1)] bool isMainFrame, int httpStatusCode, IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, isMainFrame, httpStatusCode, webView.OnLoadEnded);
            }

            [AOT.MonoPInvokeCallback(typeof(OnLoadErrorCallback))]
            private static void HandleOnLoadError([MarshalAs(UnmanagedType.I1)] bool isMainFrame, int httpStatusCode, [MarshalAs(UnmanagedType.LPStr)] string errorStr, [MarshalAs(UnmanagedType.LPStr)] string failedUrl, IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, isMainFrame, httpStatusCode, errorStr, failedUrl, webView.OnErrorLoaded);
            }

            [AOT.MonoPInvokeCallback(typeof(OnCertificateErrorCallback))]
            private static bool HandleOnCertificateError(int errorCode, [MarshalAs(UnmanagedType.LPStr)] string url, [MarshalAs(UnmanagedType.LPStr)] string errorMessage, [MarshalAs(UnmanagedType.LPStr)] string details, IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, errorCode, url, errorMessage, details, webView.IgnoreCertificateError, webView.OnCertificateErrorLoaded);
                return webView.IgnoreCertificateError;
            }

            [AOT.MonoPInvokeCallback(typeof(OnShowKeyboardCallback))]
            private static void HandleOnShowKeyboard(int x, int y, int width, int height, TextInputFlags textInputFlags, TextInputType textInputType, IntPtr userData)
            {
                InputFieldData keyboardShowData = new InputFieldData()
                {
                    X = x,
                    Y = y,
                    Width = width,
                    Height = height,
                    TextInputFlags = textInputFlags,
                    TextInputType = textInputType
                };

                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, keyboardShowData, webView.OnKeyboardShown);
            }

            [AOT.MonoPInvokeCallback(typeof(OnKeyboardDismissCallback))]
            private static void HandleOnKeyboardDismiss(IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, webView.OnKeyboardDismissed);
            }

            [AOT.MonoPInvokeCallback(typeof(OnDestroyCallback))]
            private static void HandleOnDestroy(IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, webView.OnWebViewDestroyed);
            }

            [AOT.MonoPInvokeCallback(typeof(OnServiceConnectedCallback))]
            private static void HandleServiceConnected(IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, webView.OnServiceConnected);
            }

            [AOT.MonoPInvokeCallback(typeof(OnServiceDisconnectedCallback))]
            private static void HandleServiceDisconnected(IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, webView.OnServiceDisconnected);
            }

            [AOT.MonoPInvokeCallback(typeof(OnServiceFailedCallback))]
            private static void HandleServiceFailed(MLResult result, IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, result, webView.OnServiceFailed);
            }

            [AOT.MonoPInvokeCallback(typeof(OnBeforePopupCallback))]
            private static bool HandleBeforePopup([MarshalAs(UnmanagedType.LPStr)] string url, IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, url, webView.AcceptPopup, webView.OnBeforePopup);
                return webView.AcceptPopup;
            }

            [AOT.MonoPInvokeCallback(typeof(OnPopupOpenedCallback))]
            private static void HandlePopupOpened(ulong popupID, [MarshalAs(UnmanagedType.LPStr)] string url, IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, popupID, url, webView.OnPopupOpened);
            }

            [AOT.MonoPInvokeCallback(typeof(OnPopupClosedCallback))]
            private static void HandlePopupClosed(ulong handle, IntPtr userData)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(userData);
                MLWebView webView = gcHandle.Target as MLWebView;
                MLThreadDispatch.Call(webView, handle, webView.OnPopupClosed);
            }
        }
    }
}
```




