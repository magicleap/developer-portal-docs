---

title: YcbcrRenderer.cs

---


# YcbcrRenderer.cs









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
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine.Rendering;

namespace UnityEngine.XR.MagicLeap
{
    public abstract partial class YcbcrRenderer
    {
        protected GCHandle gcHandle;

        private ulong handle = Native.MagicLeapNativeBindings.InvalidHandle;

        private IntPtr eventDataPtr = IntPtr.Zero;

        private NativeBindings.PluginEventData eventData;

        private RenderTexture renderTarget = null;
        private bool didExecuteSetTextureCmdBuffer = false;

        private readonly Dictionary<NativeBindings.PluginEvent, CommandBuffer> commandBuffers = new Dictionary<NativeBindings.PluginEvent, CommandBuffer>();

        public delegate void OnCleanupCompleteDelegate();
        public delegate void OnFirstFrameRendereredDelegate();

        public event OnCleanupCompleteDelegate OnCleanupComplete_CallbackThread = delegate { };

        public event OnCleanupCompleteDelegate OnCleanupComplete = delegate { };

        public event OnFirstFrameRendereredDelegate OnFirstFrameRendered = delegate { };

        protected void Initialize(bool waitForQueueIdleOnSubmit = false)
        {
            eventDataPtr = Marshal.AllocHGlobal(Marshal.SizeOf<NativeBindings.PluginEventData>());
            this.gcHandle = GCHandle.Alloc(this, GCHandleType.Weak);

            NativeBindings.CreateInfo createInfo = new NativeBindings.CreateInfo(gcHandle, this, waitForQueueIdleOnSubmit);
            MLResult.Code result = NativeBindings.MLYcbcrRendererCreate(ref createInfo, out handle);
            if (MLResult.IsOK(result))
            {
                eventData.RendererHandle = handle;
                Marshal.StructureToPtr(eventData, eventDataPtr, false);

                CreateAndStoreCommandBufferForEvent(NativeBindings.PluginEvent.Draw);
                // TODO : ideally cleanup command should also create a fence and we should wait on it before destroying the other stuff
                // but i dont think Graphics.CreateGraphicsFence() works with command buffers that issue plugin events. We may need to
                // synchronize directly in the native plugin and expose a func or sync primitive from in there.
                CreateAndStoreCommandBufferForEvent(NativeBindings.PluginEvent.Cleanup);
            }
            else
            {
                handle = Native.MagicLeapNativeBindings.InvalidHandle;
            }
        }

        ~YcbcrRenderer()
        {
            // TODO : See comment regarding GPU-CPU sync for cleanup in the Initialize() func.
            ReleaseUnmanagedMemory();
        }

        public void SetRenderBuffer(RenderTexture renderTexture)
        {
            renderTarget = renderTexture;

            // clear the texture
            RenderTexture rt = RenderTexture.active;
            RenderTexture.active = renderTarget;
            GL.Clear(true, true, Color.clear);
            RenderTexture.active = rt;

            // Make sure the hardware resources are created before we start using them
            renderTarget.Create();
            didExecuteSetTextureCmdBuffer = false;
        }

        public void Render()
        {
            // Only execute SetTexture cmd buffer if render target hw resources have been created.
            if (renderTarget != null && renderTarget.IsCreated() && !didExecuteSetTextureCmdBuffer)
            {
                if(renderTarget.colorBuffer.GetNativeRenderBufferPtr() == IntPtr.Zero) 
                {
                    Debug.LogWarning("Skipping null render buffer");
                    return;
                }
                eventData = new NativeBindings.PluginEventData(handle, renderTarget);
                Marshal.StructureToPtr(eventData, eventDataPtr, false);
                CreateAndStoreCommandBufferForEvent(NativeBindings.PluginEvent.SetTexture);
                Graphics.ExecuteCommandBuffer(commandBuffers[NativeBindings.PluginEvent.SetTexture]);

                didExecuteSetTextureCmdBuffer = true;
            }

            if (renderTarget.IsCreated())
            {
                if (commandBuffers.TryGetValue(NativeBindings.PluginEvent.Draw, out CommandBuffer cmdBuffer))
                {
                    Graphics.ExecuteCommandBuffer(cmdBuffer);
                }
            }
        }

        public void Cleanup()
        {
            if (commandBuffers.TryGetValue(NativeBindings.PluginEvent.Cleanup, out CommandBuffer cmdBuffer))
            {
                Graphics.ExecuteCommandBuffer(cmdBuffer);
            }

            // TODO : See comment regarding GPU-CPU sync for cleanup in the Initialize() func.
        }

        private void ReleaseUnmanagedMemory()
        {
            if (eventDataPtr != IntPtr.Zero)
            {
                Marshal.FreeHGlobal(eventDataPtr);
                eventDataPtr = IntPtr.Zero;
            }
        }

        private void CreateAndStoreCommandBufferForEvent(NativeBindings.PluginEvent pluginEvent)
        {
            if (!commandBuffers.ContainsKey(pluginEvent))
            {
                CommandBuffer cmdBuffer = new CommandBuffer();
                if (pluginEvent == NativeBindings.PluginEvent.Draw)
                {
                    cmdBuffer.IssuePluginEventAndData(
                        NativeBindings.MLYcbcrRendererGetCallbackForPluginEvent(NativeBindings.PluginEvent.AccessTexture),
                        NativeBindings.MLYcbcrRendererGetEventIdForPluginEvent(NativeBindings.PluginEvent.AccessTexture),
                        eventDataPtr);
                }
                cmdBuffer.IssuePluginEventAndData(
                    NativeBindings.MLYcbcrRendererGetCallbackForPluginEvent(pluginEvent),
                    NativeBindings.MLYcbcrRendererGetEventIdForPluginEvent(pluginEvent),
                    eventDataPtr);

                commandBuffers.Add(pluginEvent, cmdBuffer);
            }
        }

        private void InvokeOnCleanupComplete_CallbackThread()
        {
            OnCleanupComplete_CallbackThread();
            Native.MLThreadDispatch.ScheduleMain(() => InvokeOnCleanupCompleted_MainThread());
        }

        private void InvokeOnCleanupCompleted_MainThread()
        {
            if (renderTarget != null)
            {
                renderTarget.Release();
            }

            didExecuteSetTextureCmdBuffer = false;
            handle = Native.MagicLeapNativeBindings.InvalidHandle;
            commandBuffers.Clear();
            gcHandle.Free();
            ReleaseUnmanagedMemory();

            OnCleanupComplete();
        }

        private void InvokeOnFirstFrameRendered()
        {
            Native.MLThreadDispatch.Call(OnFirstFrameRendered);
        }
    }
}
```



