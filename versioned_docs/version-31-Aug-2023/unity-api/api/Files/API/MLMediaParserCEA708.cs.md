---

title: MLMediaParserCEA708.cs

---


# MLMediaParserCEA708.cs









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
    using System.Text;

    public partial class MLMedia
    {
        public partial class ParserCEA708
        {
            public const string Mime = "text/cea-708";
            private int selectedTrackID = -1;
            private string subtitleText = string.Empty;
            private string[] cea708Strings = new string[2];
            private int cea708WindowID = -1;

            public delegate void OnTextDelegate(string text);
            public event OnTextDelegate OnText = delegate { };

            public delegate void OnEmitEventDelegate(Cea708CaptionEmitCommand command, object obj);
            public event OnEmitEventDelegate OnEmitEvent = delegate { };

            private StringBuilder stringBuilder = new StringBuilder();

            public ParserCEA708()
            {
                MLResult.Code resultCode = NativeBindings.MLMediaCea708ParserCreate(out ulong parserHandle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaCea708ParserCreate));
                this.Handle = parserHandle;
                this.gcHandle = GCHandle.Alloc(this, GCHandleType.Weak);
                IntPtr gcHandlePtr = GCHandle.ToIntPtr(this.gcHandle);
                resultCode = NativeBindings.MLMediaCea708ParserSetEmitEventCallback(this.Handle, NativeBindings.OnEmitEvent, gcHandlePtr);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaCea708ParserSetEmitEventCallback));
            }

            ~ParserCEA708()
            {
                MLResult.Code resultCode = NativeBindings.MLMediaCea708ParserSetEmitEventCallback(this.Handle, null, IntPtr.Zero);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaCea708ParserSetEmitEventCallback));
                resultCode = NativeBindings.MLMediaCea708ParserDestroy(this.Handle);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaCea708ParserDestroy));
                this.gcHandle.Free();
            }

            public void ParseAsync(IntPtr data, uint dataSize)
            {
                MLResult.Code resultCode = NativeBindings.MLMediaCea708ParserParse(this.Handle, data, dataSize);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaCea708ParserParse));
            }

            internal ulong Handle
            {
                get;
                private set;
            }

            private GCHandle gcHandle;

            public enum Cea708CaptionPenSize
            {
                Small = 0,

                Standard = 1,

                Large = 2,
            }

            public enum Cea708CaptionPenOffset
            {
                Subscript = 0,

                Normal = 1,

                Superscript = 2,
            }


            public enum Cea708CaptionEmitCommand : int
            {
                Buffer = 1,

                Control = 2,

                CWX = 3,

                CLW = 4,

                DSW = 5,

                HDW = 6,

                TGW = 7,

                DLW = 8,

                DLY = 9,

                DLC = 10,

                RST = 11,

                SPA = 12,

                SPC = 13,

                SPL = 14,

                SWA = 15,

                DFX = 16
            }

            public enum Cea708CaptionEmitCommandControl : int
            {
                ETX = 0x03,

                BS = 0x08,

                FF = 0x0c,

                HCR = 0x0e
            }

            public enum Cea708CaptionColorOpacity : int
            {
                Solid = 0,

                Flash = 1,

                Translucent = 2,

                Transparent = 3
            }
        }
    }
}
```




