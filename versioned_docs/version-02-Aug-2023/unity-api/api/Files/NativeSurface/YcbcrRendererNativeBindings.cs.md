---

title: YcbcrRendererNativeBindings.cs

---


# YcbcrRendererNativeBindings.cs









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

using System;
using System.Runtime.InteropServices;

namespace UnityEngine.XR.MagicLeap
{
    public partial class YcbcrRenderer
    {
        private sealed class NativeBindings
        {
            private const string MLYcbcrRendererDll = "ml_ycbcr_renderer";

            [DllImport(MLYcbcrRendererDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLYcbcrRendererCreate([In] ref CreateInfo createInfo, out ulong handle);

            [DllImport(MLYcbcrRendererDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern int MLYcbcrRendererGetEventIdForPluginEvent(PluginEvent pluginEvent);

            [DllImport(MLYcbcrRendererDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr MLYcbcrRendererGetCallbackForPluginEvent(PluginEvent pluginEvent);

            public delegate void AcquireNextAvailableBufferDelegate([MarshalAs(UnmanagedType.I1)][In][Out] ref bool success, [In][Out] ref ulong nativeBufferHandle, IntPtr context);

            public delegate void AcquireNextAvailableHwBufferDelegate([MarshalAs(UnmanagedType.I1)][In][Out] ref bool success, [In][Out] ref IntPtr hwBuffer, IntPtr context);

            public delegate void ReleaseBufferDelegate(ulong nativeBufferHandle, IntPtr context);

            public delegate void ReleaseHwBufferDelegate(IntPtr hwBuffer, IntPtr context);

            public delegate void GetFrameTransformMatrixDelegate([MarshalAs(UnmanagedType.I1)][In][Out] ref bool success, [In][Out] ref Native.MagicLeapNativeBindings.MLMat4f frameMat, IntPtr context);

            public delegate void IsNewFrameAvailableDelegate([MarshalAs(UnmanagedType.I1)][In][Out] ref bool success, IntPtr context);

            public delegate void OnCleanupCompleteDelegate(IntPtr context);

            public delegate void OnFirstFrameRenderedDelegate(IntPtr context);

            public delegate void OverrideYcbcrConversionSamplerDelegate([In] ref VkAndroidHardwareBufferFormatPropertiesANDROID hwBufferFormatProperties, [MarshalAs(UnmanagedType.I1)][In][Out] ref bool samplerChanged, [In][Out] ref VkSamplerYcbcrConversionCreateInfo sampler, IntPtr context);

            [AOT.MonoPInvokeCallback(typeof(AcquireNextAvailableBufferDelegate))]
            private static void AcquireNextAvailableBuffer([MarshalAs(UnmanagedType.I1)][In][Out] ref bool success, [In][Out] ref ulong nativeBufferHandle, IntPtr context)
            {
                GCHandle gCHandle = GCHandle.FromIntPtr(context);
                INativeBufferProvider provider = gCHandle.Target as INativeBufferProvider;
                if (provider == null)
                {
                    return;
                }

                success = provider.AcquireNextAvailableBuffer(out nativeBufferHandle);
            }

            [AOT.MonoPInvokeCallback(typeof(AcquireNextAvailableHwBufferDelegate))]
            private static void AcquireNextAvailableHwBuffer([MarshalAs(UnmanagedType.I1)][In][Out] ref bool success, [In][Out] ref IntPtr hwBuffer, IntPtr context)
            {
                GCHandle gCHandle = GCHandle.FromIntPtr(context);
                IHardwareBufferProvider provider = gCHandle.Target as IHardwareBufferProvider;
                if (provider == null)
                {
                    return;
                }

                success = provider.AcquireNextAvailableHwBuffer(out hwBuffer);
            }

            [AOT.MonoPInvokeCallback(typeof(ReleaseBufferDelegate))]
            private static void ReleaseBuffer(ulong nativeBufferHandle, IntPtr context)
            {
                GCHandle gCHandle = GCHandle.FromIntPtr(context);
                INativeBufferProvider provider = gCHandle.Target as INativeBufferProvider;
                if (provider == null)
                {
                    return;
                }

                provider.ReleaseBuffer(nativeBufferHandle);
            }

            [AOT.MonoPInvokeCallback(typeof(ReleaseHwBufferDelegate))]
            private static void ReleaseHwBuffer(IntPtr hwBuffer, IntPtr context)
            {
                GCHandle gCHandle = GCHandle.FromIntPtr(context);
                IHardwareBufferProvider provider = gCHandle.Target as IHardwareBufferProvider;
                if (provider == null)
                {
                    return;
                }

                provider.ReleaseHwBuffer(hwBuffer);
            }

            [AOT.MonoPInvokeCallback(typeof(GetFrameTransformMatrixDelegate))]
            private static void GetFrameTransformMatrix([MarshalAs(UnmanagedType.I1)][In][Out] ref bool success, [In][Out] ref Native.MagicLeapNativeBindings.MLMat4f frameMat, IntPtr context)
            {
                GCHandle gCHandle = GCHandle.FromIntPtr(context);
                IFrameTransformMatrixProvider provider = gCHandle.Target as IFrameTransformMatrixProvider;
                if (provider == null)
                {
                    return;
                }

                success = provider.GetFrameTransformMatrix(frameMat.MatrixColmajor);
            }

            [AOT.MonoPInvokeCallback(typeof(IsNewFrameAvailableDelegate))]
            private static void IsNewFrameAvailable([MarshalAs(UnmanagedType.I1)][In][Out] ref bool success, IntPtr context)
            {
                GCHandle gCHandle = GCHandle.FromIntPtr(context);
                IFrameAvailabilityProvider provider = gCHandle.Target as IFrameAvailabilityProvider;
                if (provider == null)
                {
                    return;
                }

                success = provider.IsNewFrameAvailable();
            }

            [AOT.MonoPInvokeCallback(typeof(OnCleanupCompleteDelegate))]
            private static void OnCleanupComplete(IntPtr context)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(context);
                YcbcrRenderer ycbcrRenderer = (gcHandle.Target as YcbcrRenderer);
                if (ycbcrRenderer == null)
                {
                    return;
                }

                ycbcrRenderer.InvokeOnCleanupComplete_CallbackThread();
            }

            [AOT.MonoPInvokeCallback(typeof(OnFirstFrameRenderedDelegate))]
            private static void OnFirstFrameRendered(IntPtr context)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(context);
                YcbcrRenderer ycbcrRenderer = (gcHandle.Target as YcbcrRenderer);
                if (ycbcrRenderer == null)
                {
                    return;
                }

                ycbcrRenderer.InvokeOnFirstFrameRendered();
            }

            [AOT.MonoPInvokeCallback(typeof(OverrideYcbcrConversionSamplerDelegate))]
            private static void OverrideYcbcrConversionSampler([In] ref VkAndroidHardwareBufferFormatPropertiesANDROID hwBufferFormatProperties, [MarshalAs(UnmanagedType.I1)][In][Out] ref bool samplerChanged, [In][Out] ref VkSamplerYcbcrConversionCreateInfo sampler, IntPtr context)
            {
                GCHandle gcHandle = GCHandle.FromIntPtr(context);
                IYcbcrConversionSamplerProvider ycbcrRenderer = (gcHandle.Target as IYcbcrConversionSamplerProvider);
                if (ycbcrRenderer == null)
                {
                    return;
                }

                samplerChanged = ycbcrRenderer.OverrideYcbcrConversionSampler(ref hwBufferFormatProperties, ref sampler);
            }

            public enum ColorSpace : uint
            {
                Linear,
                Gamma
            }

            public enum PluginEvent : uint
            {
                SetTexture,

                Draw,

                Cleanup,

                AccessTexture
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct PluginEventData
            {
                public ulong RendererHandle;

                public IntPtr TextureHandle;

                public int Width;

                public int Height;

                public ColorSpace ColorSpace;

                public PluginEventData(ulong rendererHandle, RenderTexture renderBuffer)
                {
                    this.RendererHandle = rendererHandle;
                    this.TextureHandle = renderBuffer.colorBuffer.GetNativeRenderBufferPtr();
                    this.Width = renderBuffer.width;
                    this.Height = renderBuffer.height;
                    // As per https://docs.unity3d.com/ScriptReference/RenderTextureReadWrite.html,
                    // when project color space is Linear, RenderTextures that are supposed to be
                    // used as color textures should should use srgb read-write (default for Linear
                    // color space projets). In such a case, "fragment shaders are considered to output
                    // linear color values", which is why we select Linear here. If srgb read-wrtite is
                    // disabled for this RenderTexture, we should direclty output gamma pixels.
                    this.ColorSpace = renderBuffer.sRGB ? ColorSpace.Linear : ColorSpace.Gamma;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct CreateInfo
            {
                public IntPtr Context;

                public AcquireNextAvailableBufferDelegate AcquireNextAvailableBufferCallback;

                public AcquireNextAvailableHwBufferDelegate AcquireNextAvailableHwBufferCallback;

                public ReleaseBufferDelegate ReleaseBufferCallback;

                public ReleaseHwBufferDelegate ReleaseHwBufferCallback;

                public GetFrameTransformMatrixDelegate GetFrameTransformMatrixCallback;

                public IsNewFrameAvailableDelegate IsNewFrameAvailableCallback;

                public OnCleanupCompleteDelegate OnCleanupCompleteCallback;

                public OnFirstFrameRenderedDelegate OnFirstFrameRenderedCallback;

                public OverrideYcbcrConversionSamplerDelegate OverrideYcbcrConversionSamplerCallback;

                [MarshalAs(UnmanagedType.I1)]
                public bool ShouldWaitForQueueIdleOnSubmit;

                public CreateInfo(GCHandle context, YcbcrRenderer renderer, bool waitForQueueIdleOnSubmit)
                {
                    this.Context = GCHandle.ToIntPtr(context);

                    this.AcquireNextAvailableBufferCallback = null;
                    this.ReleaseBufferCallback = null;
                    if (renderer is INativeBufferProvider)
                    {
                        this.AcquireNextAvailableBufferCallback = AcquireNextAvailableBuffer;
                        this.ReleaseBufferCallback = ReleaseBuffer;
                    }


                    this.AcquireNextAvailableHwBufferCallback = null;
                    this.ReleaseHwBufferCallback = null;
                    if (renderer is IHardwareBufferProvider)
                    {
                        this.AcquireNextAvailableHwBufferCallback = AcquireNextAvailableHwBuffer;
                        this.ReleaseHwBufferCallback = ReleaseHwBuffer;
                    }

                    this.GetFrameTransformMatrixCallback = null;
                    if (renderer is IFrameTransformMatrixProvider)
                    {
                        this.GetFrameTransformMatrixCallback = GetFrameTransformMatrix;
                    }

                    this.IsNewFrameAvailableCallback = null;
                    if (renderer is IFrameAvailabilityProvider)
                    {
                        this.IsNewFrameAvailableCallback = IsNewFrameAvailable;
                    }

                    this.OnCleanupCompleteCallback = OnCleanupComplete;
                    this.OnFirstFrameRenderedCallback = OnFirstFrameRendered;

                    this.OverrideYcbcrConversionSamplerCallback = null;
                    if (renderer is IYcbcrConversionSamplerProvider)
                    {
                        this.OverrideYcbcrConversionSamplerCallback = OverrideYcbcrConversionSampler;
                    }

                    this.ShouldWaitForQueueIdleOnSubmit = waitForQueueIdleOnSubmit;
                }
            }
        }
    }
}
```




