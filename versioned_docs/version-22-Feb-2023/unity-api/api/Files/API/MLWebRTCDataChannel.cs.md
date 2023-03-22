---

title: MLWebRTCDataChannel.cs

---


# MLWebRTCDataChannel.cs









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
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class DataChannel
        {
            private GCHandle gcHandle;

            internal ulong Handle { get; private set; }

            internal DataChannel()
            {
            }

            internal DataChannel(ulong handle)
            {
                this.Handle = handle;
            }

            public delegate void OnOpenedDelegate(MLWebRTC.DataChannel dataChannel);

            public delegate void OnClosedDelegate(MLWebRTC.DataChannel dataChannel);

            public delegate void OnMessageTextDelegate(MLWebRTC.DataChannel dataChannel, string message);

            public delegate void OnMessageBinaryDelegate(MLWebRTC.DataChannel dataChannel, byte[] message);

            public event OnOpenedDelegate OnOpened = delegate { };

            public event OnClosedDelegate OnClosed = delegate { };

            public event OnMessageTextDelegate OnMessageText = delegate { };

            public event OnMessageBinaryDelegate OnMessageBinary = delegate { };

            public string Label { get; internal set; }

            public PeerConnection ParentConnection { get; internal set; }

            public static DataChannel CreateLocal(MLWebRTC.PeerConnection connection, out MLResult result, string label = "local")
            {
                DataChannel dataChannel = null;

                if (connection == null)
                {
                    result = MLResult.Create(MLResult.Code.InvalidParam, "PeerConnection is null.");
                    return dataChannel;
                }

                ulong dataChannelHandle = MagicLeapNativeBindings.InvalidHandle;
                MLResult.Code resultCode = NativeBindings.MLWebRTCDataChannelCreate(connection.Handle, label, out dataChannelHandle);
                if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCDataChannelCreate)))
                {
                    result = MLResult.Create(resultCode);
                    return dataChannel;
                }

                dataChannel = new DataChannel(dataChannelHandle)
                {
                    Label = label,
                    ParentConnection = connection
                };

                resultCode = NativeBindings.SetCallbacks(dataChannel);

                if (!MLResult.IsOK(resultCode))
                {
                    result = MLResult.Create(resultCode);
                    return dataChannel;
                }

                connection.LocalDataChannels.Add(dataChannel);
                result = MLResult.Create(resultCode);
                return dataChannel;
            }

            public MLResult SendMessage(string message)
            {
                MLResult.Code resultCode = NativeBindings.SendMessageToDataChannel(this, message);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.SendMessageToDataChannel));
                return MLResult.Create(resultCode);
            }

            public MLResult SendMessage<T>(T[] message)
            {
                MLResult.Code resultCode = NativeBindings.SendMessageToDataChannel(this, message);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.SendMessageToDataChannel));
                return MLResult.Create(resultCode);
            }

            public MLResult IsOpen(out bool open)
            {
                bool isOpen = false;
                MLResult.Code resultCode = NativeBindings.MLWebRTCDataChannelIsOpen(this.Handle, out isOpen);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCDataChannelIsOpen));
                open = isOpen;
                MLResult result = MLResult.Create(resultCode);
                return result;
            }

            public MLResult Destroy()
            {
                if (this.ParentConnection == null || !MagicLeapNativeBindings.MLHandleIsValid(this.Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam);
                }

                MLResult.Code resultCode = NativeBindings.MLWebRTCDataChannelDestroy(this.ParentConnection.Handle, this.Handle);
                if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCDataChannelDestroy)))
                {
                    this.Handle = MagicLeapNativeBindings.InvalidHandle;
                    this.ParentConnection = null;
                }
                this.gcHandle.Free();
                return MLResult.Create(resultCode);
            }
        }
    }
}
```




