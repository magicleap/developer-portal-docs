---

title: MLMediaParserCEA708NativeBindings.cs

---


# MLMediaParserCEA708NativeBindings.cs









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
    using UnityEngine;
    using UnityEngine.XR.MagicLeap.Native;
    public partial class MLMedia
    {
        public partial class ParserCEA708
        {
            private class NativeBindings : MagicLeapNativeBindings
            {
                public delegate void OnEmitEventDelegate(ulong parserHandle, ref Cea708CaptionEvent captionEvent, IntPtr data);
                private const int MLCea708CaptionWindowsMax = 8;
                private const int MLCea708CaptionEmitCommandBufferMaxSize = 20;

                [StructLayout(LayoutKind.Sequential)]
                public struct Cea708CaptionColor
                {
                    public Cea708CaptionColorOpacity Opacity;

                    public int Red;

                    public int Green;

                    public int Blue;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct Cea708CaptionPenAttr
                {
                    public Cea708CaptionPenSize PenSize;

                    public Cea708CaptionPenOffset PenOffset;

                    public int TextTag;

                    public int FontTag;

                    public int EdgeType;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool Underline;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool Italic;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct Cea708CaptionPenColor
                {
                    public Cea708CaptionColor ForegroundColor;

                    public Cea708CaptionColor BackgroundColor;

                    public Cea708CaptionColor EdgeColor;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct Cea708CaptionPenLocation
                {
                    public int Row;

                    public int Column;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct Cea708CaptionWindowAttr
                {
                    public Cea708CaptionColor FillColor;

                    public Cea708CaptionColor BorderColor;

                    public int BorderType;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool WordWrap;

                    public int PrintDirection;

                    public int ScrollDirection;

                    public int Justify;

                    public int EffectDirection;

                    public int EffectSpeed;

                    public int DisplayEffect;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct Cea708CaptionWindow
                {
                    public int ID;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool Visible;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool RowLock;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool ColumnLock;

                    public int Priority;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool RelativePositioning;

                    public int AnchorVertical;

                    public int AnchorHorizontal;

                    public int AnchorID;

                    public int RowCount;

                    public int ColumnCount;

                    public int PenStyle;

                    public int WindowStyle;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct Cea708CaptionEventInternal
                {
                    public Cea708CaptionEmitCommand Type;

                    public IntPtr Object;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct Cea708CaptionEvent
                {
                    public Cea708CaptionEmitCommand Type;

                    public IntPtr Data;
                }

                [DllImport(MLMediaCEA708DLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaCea708ParserCreate(out ulong parserHandle);

                [DllImport(MLMediaCEA708DLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaCea708ParserDestroy(ulong parserHandle);

                [DllImport(MLMediaCEA708DLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaCea708ParserSetEmitEventCallback(ulong parserHandle, OnEmitEventDelegate calback, IntPtr data);

                [DllImport(MLMediaCEA708DLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaCea708ParserParse(ulong parserHandle, IntPtr subtitleData, uint subtitleDataSize);

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnEmitEventDelegate))]
                public static void OnEmitEvent(ulong parserHandle, ref Cea708CaptionEvent captionEvent, IntPtr data)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(data);
                    ParserCEA708 parser708 = gcHandle.Target as ParserCEA708;
                    if (parser708 == null)
                    {
                        return;
                    }

                    object obj = null;

                    switch (captionEvent.Type)
                    {
                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.Buffer:
                            obj = MLConvert.DecodeUTF8(captionEvent.Data, MLCea708CaptionEmitCommandBufferMaxSize);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.Control:
                            obj = Marshal.ReadByte(captionEvent.Data);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.CWX:
                            obj = Marshal.ReadInt32(captionEvent.Data);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.CLW:
                            obj = Marshal.ReadInt32(captionEvent.Data);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DSW:
                            obj = Marshal.ReadInt32(captionEvent.Data);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.HDW:
                            obj = Marshal.ReadInt32(captionEvent.Data);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.TGW:
                            obj = Marshal.ReadInt32(captionEvent.Data);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DLW:
                            obj = Marshal.ReadInt32(captionEvent.Data);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DLY:
                            obj = Marshal.ReadInt32(captionEvent.Data);
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DLC:
                            obj = null;
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.RST:
                            obj = null;
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.SPA:
                            obj = Marshal.PtrToStructure(captionEvent.Data, typeof(Cea708CaptionPenAttr));
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.SPC:
                            obj = Marshal.PtrToStructure(captionEvent.Data, typeof(Cea708CaptionPenColor));
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.SPL:
                            obj = Marshal.PtrToStructure(captionEvent.Data, typeof(Cea708CaptionPenLocation));
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.SWA:
                            obj = Marshal.PtrToStructure(captionEvent.Data, typeof(Cea708CaptionWindowAttr));
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DFX:
                            obj = Marshal.PtrToStructure(captionEvent.Data, typeof(Cea708CaptionWindow));
                            break;
                    }
                    MLThreadDispatch.Call(captionEvent.Type, obj, parser708.OnEmitEvent);
                    int winBitmap;
                    switch (captionEvent.Type)
                    {
                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.Buffer:
                            if (parser708.cea708WindowID == -1)
                            {
                                parser708.cea708Strings[0] += (string)obj;
                                parser708.subtitleText = parser708.cea708Strings[0];
                                MLThreadDispatch.Call(parser708.subtitleText, parser708.OnText);
                            }
                            else
                            {
                                if (parser708.cea708WindowID == 0)
                                {
                                    parser708.cea708Strings[0] += (string)obj;
                                    parser708.subtitleText = parser708.cea708Strings[0];
                                    MLThreadDispatch.Call(parser708.subtitleText, parser708.OnText);
                                }
                                else if (parser708.cea708WindowID == 1)
                                {
                                    parser708.cea708Strings[1] += (string)obj;
                                    parser708.subtitleText = parser708.cea708Strings[1];
                                    MLThreadDispatch.Call(parser708.subtitleText, parser708.OnText);
                                }
                            }

                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.Control:
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.CWX:
                            parser708.cea708WindowID = (int)obj;
                            if (parser708.cea708WindowID == 0)
                            {
                                parser708.cea708Strings[0] = string.Empty;
                            }
                            else if (parser708.cea708WindowID == 1)
                            {
                                parser708.cea708Strings[1] = string.Empty;
                            }
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.CLW:
                            winBitmap = (int)obj;
                            if (parser708.cea708WindowID == -1)
                            {
                                parser708.cea708Strings[0] = string.Empty;
                            }
                            for (int i = 0; i < MLCea708CaptionWindowsMax; i++)
                            {
                                if ((winBitmap & (1 << i)) != 0)
                                {
                                    if (i == 0 || i == 1)
                                    {
                                        parser708.cea708Strings[i] = string.Empty;
                                    }
                                }
                            }
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DSW:
                            winBitmap = (int)obj;
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.HDW:
                            winBitmap = (int)obj;
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.TGW:
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DLW:
                            winBitmap = (int)obj;
                            for (int i = 0; i < MLCea708CaptionWindowsMax; i++)
                            {
                                if (((winBitmap & (1 << i)) == 0) && (i == 0 || i == 1))
                                {
                                    parser708.cea708Strings[i] = string.Empty;
                                }
                            }
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DLY:
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DLC:
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.RST:
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.SPA:
                            Cea708CaptionPenAttr pen = (Cea708CaptionPenAttr)obj;
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.SPC:
                            Cea708CaptionPenColor penColor = (Cea708CaptionPenColor)obj;
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.SPL:
                            Cea708CaptionPenLocation penLoc = (Cea708CaptionPenLocation)obj;
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.SWA:
                            Cea708CaptionWindowAttr winAttr = (Cea708CaptionWindowAttr)obj;
                            break;

                        case MLMedia.ParserCEA708.Cea708CaptionEmitCommand.DFX:
                            Cea708CaptionWindow win = (Cea708CaptionWindow)obj;
                            break;

                        default:
                            Debug.LogError("Error: ParserCEA708 unknown event type: " + captionEvent.Type);
                            break;
                    }
                }
            }
        }
    }
}
```




