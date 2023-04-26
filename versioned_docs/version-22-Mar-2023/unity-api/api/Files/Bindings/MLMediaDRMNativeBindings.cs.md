---

title: MLMediaDRMNativeBindings.cs

---


# MLMediaDRMNativeBindings.cs









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
    using System.Collections.Generic;
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLMedia
    {
        public partial class Player
        {
            public partial class Track
            {
                public partial class DRM
                {
                    internal class NativeBindings : MagicLeapNativeBindings
                    {
                        private const string PROPERTY_VENDOR = "vendor";
                        private const string PROPERTY_VERSION = "version";
                        private const string PROPERTY_DESCRIPTION = "description";
                        private const string PROPERTY_ALGORITHMS = "algorithms";
                        private const string PROPERTY_DEVICE_UNIQUE_ID = "deviceUniqueId";

                        public delegate void OnEventDelegate(ulong handle, [In] ref MLMediaDRMEventInfo info);
                        public delegate void OnExpirationUpdateDelegate(ulong handle, [In] ref MLMediaDRMExpirationUpdateInfo info);
                        public delegate void OnKeyStatusChangeDelegate(ulong handle, [In] ref MLMediaDRMKeyStatusInfo info);

                        internal static readonly Dictionary<Property, string> Properties = new Dictionary<Property, string>()
                        {
                            { Property.Vendor, PROPERTY_VENDOR},
                            { Property.Version, PROPERTY_VERSION},
                            { Property.Description, PROPERTY_DESCRIPTION},
                            { Property.Algorithms, PROPERTY_ALGORITHMS},
                            { Property.DeviceUniqueId, PROPERTY_DEVICE_UNIQUE_ID},
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public readonly struct MLMediaDRMKeyValue
                        {
                            public MLMediaDRMKeyValue(KeyValuePair<string, string> pair)
                            {
                                this.Key = pair.Key;
                                this.Value = pair.Value;
                            }

                            [MarshalAs(UnmanagedType.LPStr)]
                            public readonly string Key;

                            [MarshalAs(UnmanagedType.LPStr)]
                            public readonly string Value;

                            public KeyValuePair<string, string> KeyValue => new KeyValuePair<string, string>(this.Key, this.Value);
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public struct MLMediaDRMByteArray
                        {
                            public IntPtr Data;

                            public ulong Length;

                            public void AllocResources(byte[] data)
                            {
                                this.Data = Marshal.AllocHGlobal(data.Length);
                                Marshal.Copy(data, 0, this.Data, data.Length);
                                this.Length = (ulong)data.Length;
                            }

                            public void FreeResources()
                            {
                                Marshal.FreeHGlobal(this.Data);
                            }

                            public byte[] Bytes
                            {
                                get
                                {
                                    if (IntPtr.Zero == this.Data)
                                        return new byte[0];

                                    byte[] bytes = new byte[this.Length];
                                    Marshal.Copy(this.Data, bytes, 0, (int)this.Length);
                                    return bytes;
                                }
                            }
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public struct MLMediaDRMHMACInputParam
                        {
                            [MarshalAs(UnmanagedType.LPStr)]
                            public string Algorithm;

                            public IntPtr KeySetId;

                            internal void AllocResources(string algorithm, MLMediaDRMByteArray keySetId)
                            {
                                this.Algorithm = algorithm;
                                this.KeySetId = Marshal.AllocHGlobal(Marshal.SizeOf(keySetId));
                                Marshal.StructureToPtr(keySetId, this.KeySetId, false);
                            }

                            internal void FreeResources()
                            {
                                Marshal.FreeHGlobal(this.KeySetId);
                            }
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public struct MLMediaDRMRSAInputParam
                        {

                            public string Algorithm;

                            public IntPtr WrappedRsaKey;

                            internal void AllocResources(string algorithm, MLMediaDRMByteArray keySetId)
                            {
                                this.Algorithm = algorithm;
                                this.WrappedRsaKey = Marshal.AllocHGlobal(Marshal.SizeOf(keySetId));
                                Marshal.StructureToPtr(keySetId, this.WrappedRsaKey, false);
                            }

                            internal void FreeResources()
                            {
                                Marshal.FreeHGlobal(this.WrappedRsaKey);
                            }
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public struct MLMediaDRMByteArrayList
                        {
                            public IntPtr Ptr;

                            public uint Length;

                            internal byte[][] ByteArrays
                            {
                                get
                                {
                                    byte[][] byteArrays = new byte[this.Length][];
                                    IntPtr walkPtr = this.Ptr;
                                    for (int i = 0; i < this.Length; ++i)
                                    {
                                        NativeBindings.MLMediaDRMByteArray secureStopNative = Marshal.PtrToStructure<MLMediaDRMByteArray>(walkPtr);
                                        byteArrays[i] = secureStopNative.Bytes;
                                        walkPtr = new IntPtr(walkPtr.ToInt64() + Marshal.SizeOf<IntPtr>());
                                    }

                                    return byteArrays;
                                }
                            }
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public readonly struct MLMediaDRMKeyValueArray
                        {
                            public readonly IntPtr Ptr;

                            public readonly uint Length;

                            public readonly uint Index;

                            public KeyValuePair<string, string>[] KeyValues
                            {
                                get
                                {
                                    KeyValuePair<string, string>[] keyValues = new KeyValuePair<string, string>[this.Length];
                                    IntPtr walkPtr = this.Ptr;
                                    for (uint i = this.Index; i < this.Length; ++i)
                                    {
                                        MLMediaDRMKeyValue keyVal = Marshal.PtrToStructure<MLMediaDRMKeyValue>(walkPtr);
                                        keyValues[i] = keyVal.KeyValue;
                                        walkPtr = new IntPtr(walkPtr.ToInt64() + Marshal.SizeOf<IntPtr>());
                                    }

                                    return keyValues;
                                }
                            }
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public struct MLMediaDRMKeyRequestInputParam
                        {
                            internal MLMediaDRMKeyRequestInputParam(string mimeType, KeyType keyType)
                            {
                                this.MimeType = mimeType;
                                this.KeyType = keyType;
                                this.InitData = IntPtr.Zero;
                                this.OptionalParams = IntPtr.Zero;
                            }

                            internal void AllocResources(Player.NativeBindings.MLMediaPlayerPSSHEntry psshEntry)
                            {
                                this.InitData = Marshal.AllocHGlobal(Marshal.SizeOf<NativeBindings.MLMediaDRMByteArray>());
                                NativeBindings.MLMediaDRMByteArray pssh = new NativeBindings.MLMediaDRMByteArray();
                                pssh.Data = psshEntry.data;
                                pssh.Length = psshEntry.size;
                                Marshal.StructureToPtr(pssh, this.InitData, false);
                            }

                            internal void FreeResources()
                            {
                                Marshal.FreeHGlobal(this.InitData);
                                Marshal.FreeHGlobal(this.OptionalParams);
                            }

                            public IntPtr InitData;

                            [MarshalAs(UnmanagedType.LPStr)]
                            public string MimeType;

                            public KeyType KeyType;

                            public readonly IntPtr OptionalParams;
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public readonly struct MLMediaDRMRequestMessage
                        {
                            public readonly NativeBindings.MLMediaDRMByteArray Request;

                            [MarshalAs(UnmanagedType.LPStr)]
                            public readonly string DefaultURL;
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public struct MLMediaDRMCryptoInputParam
                        {
                            [MarshalAs(UnmanagedType.LPStr)]
                            public string Algorithm;

                            public IntPtr KeySetId;

                            public IntPtr InitialVector;

                            internal void AllocResources(string algorithm, MLMediaDRMByteArray keySetId, MLMediaDRMByteArray initialVector)
                            {
                                this.Algorithm = algorithm;

                                this.KeySetId = Marshal.AllocHGlobal(Marshal.SizeOf(keySetId));
                                Marshal.StructureToPtr(keySetId, this.KeySetId, false);

                                this.InitialVector = Marshal.AllocHGlobal(Marshal.SizeOf(initialVector));
                                Marshal.StructureToPtr(initialVector, this.InitialVector, false);
                            }

                            internal void FreeResources()
                            {
                                Marshal.FreeHGlobal(this.KeySetId);
                                Marshal.FreeHGlobal(this.InitialVector);
                            }
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public struct MLMediaDRMEventCallbacks
                        {
                            internal static MLMediaDRMEventCallbacks Create()
                            {
                                MLMediaDRMEventCallbacks callbacks = new MLMediaDRMEventCallbacks();
                                callbacks.version = 1;
                                callbacks.onEvent = NativeBindings.OnEvent;
                                callbacks.onExpirationUpdate = NativeBindings.OnExpirationUpdate;
                                callbacks.onKeyStatusChange = NativeBindings.OnKeyStatusChange;
                                return callbacks;
                            }

                            private uint version;

                            public OnEventDelegate onEvent;

                            public OnExpirationUpdateDelegate onExpirationUpdate;

                            public OnKeyStatusChangeDelegate onKeyStatusChange;
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public readonly struct MLMediaDRMEventInfo
                        {
                            public readonly IntPtr sessionIdByteArray;

                            public readonly EventType eventType;

                            public readonly int extra;

                            public readonly IntPtr eventDataByteArray;

                            public readonly IntPtr data;
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public readonly struct MLMediaDRMExpirationUpdateInfo
                        {
                            public readonly IntPtr sessionIdByteArray;

                            public readonly ulong expirationTimeMs;

                            public readonly IntPtr data;
                        };

                        [StructLayout(LayoutKind.Sequential)]
                        public readonly struct MLMediaDRMKeyStatus
                        {
                            public readonly MLMediaDRMByteArray keyId;

                            public readonly KeyStatus status;

                            public Key Data => new Key(this.keyId.Bytes, this.status);
                        }


                        [StructLayout(LayoutKind.Sequential)]
                        public struct MLMediaDRMKeyStatusInfo
                        {
                            public IntPtr sessionIdByteArray;

                            public ulong keyStatusCount;

                            public IntPtr keyStatuses;

                            [MarshalAs(UnmanagedType.I1)]
                            public bool hasNewUsableKey;

                            public IntPtr data;
                        };

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMIsCryptoSchemeSupported(Native.MagicLeapNativeBindings.MLUUID Uuid, IntPtr MimeType, [MarshalAs(UnmanagedType.I1)] out bool supported);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMRequestMessageRelease(ref MLMediaDRMRequestMessage Request);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMVerify(ulong MediaDrm, [In] ref MLMediaDRMByteArray SessionId, [In] ref MLMediaDRMHMACInputParam HMACParam, [In] ref MLMediaDRMByteArray Message, [In] ref MLMediaDRMByteArray Signature, [MarshalAs(UnmanagedType.I1)] out bool IsMatch);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMSign(ulong MediaDrm, [In] ref MLMediaDRMByteArray SessionId, [In] ref MLMediaDRMHMACInputParam HMACParam, [In] ref MLMediaDRMByteArray Message, out MLMediaDRMByteArray Signature);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMRemoveKeys(ulong MediaDrm, [In] ref MLMediaDRMByteArray SessionId, [In] ref MLMediaDRMByteArray KeySetId);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMByteArrayAllocate(uint Size, out MLMediaDRMByteArray OutArray);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMByteArrayAllocAndCopy(IntPtr CopyFrom, uint Size, out MLMediaDRMByteArray OutArray);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMKeyValueArrayAllocate(uint Size, out MLMediaDRMKeyValueArray OutArray);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMCreate(Native.MagicLeapNativeBindings.MLUUID uuid, out ulong handle);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMRelease(ulong drmHandle);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMByteArrayRelease(ref MLMediaDRMByteArray array);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMByteArrayListRelease(ref MLMediaDRMByteArrayList Array);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMKeyValueArrayRelease(ref MLMediaDRMKeyValueArray Array);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMKeyValueArrayAdd([In] ref MLMediaDRMKeyValue Pair, out MLMediaDRMKeyValueArray OutArray);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMSetOnEventListenerEx(ulong MediaDrm, ref MLMediaDRMEventCallbacks Listener, IntPtr data);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMOpenSession(ulong MediaDrm, out MLMediaDRMByteArray sessionId);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMCloseSession(ulong drmHandle, ref MLMediaDRMByteArray sessionId);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMGetKeyRequest(ulong drmHandle, [In] ref MLMediaDRMByteArray sessionId, [In] ref MLMediaDRMKeyRequestInputParam keyRequestParam, out MLMediaDRMRequestMessage keyRequest);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMProvideKeyResponse(ulong drmHandle, [In] ref MLMediaDRMByteArray sessionId, [In] ref MLMediaDRMByteArray response, out MLMediaDRMByteArray keySetId);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMRestoreKeys(ulong MediaDrm, [In] ref MLMediaDRMByteArray sessionId, [In] ref MLMediaDRMByteArray KeySetId);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMQueryKeyStatus(ulong MediaDrm, [In] ref MLMediaDRMByteArray sessionId, out MLMediaDRMKeyValueArray OutInfoMap);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMGetProvisionRequest(ulong drmHandle, [MarshalAs(UnmanagedType.LPStr)] string certType, out MLMediaDRMRequestMessage provisionRequest);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMProvideProvisionResponse(ulong drmHandle, [In] ref MLMediaDRMByteArray response, out MLMediaDRMByteArray certificate, out MLMediaDRMByteArray wrappedKey);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMGetSecureStops(ulong MediaDrm, out MLMediaDRMByteArrayList SecureStops);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMGetSecureStop(ulong MediaDrm, [In] ref MLMediaDRMByteArray SecureStopId, out MLMediaDRMByteArray SecureStop);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMReleaseSecureStops(ulong MediaDrm, [In] ref MLMediaDRMByteArray SecureStop);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMReleaseAllSecureStops(ulong MediaDrm);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMGetPropertyString(ulong MediaDrm, [MarshalAs(UnmanagedType.LPStr)] string PropertyName, [MarshalAs(UnmanagedType.LPStr)] out string OutPropertyValue);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMGetPropertyByteArray(ulong MediaDrm, [MarshalAs(UnmanagedType.LPStr)] string PropertyName, out MLMediaDRMByteArray OutPropertyValue);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMSetPropertyString(ulong MediaDrm, [MarshalAs(UnmanagedType.LPStr)] string PropertyName, [MarshalAs(UnmanagedType.LPStr)] string PropertyValue);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMSetPropertyByteArray(ulong MediaDrm, [MarshalAs(UnmanagedType.LPStr)] string PropertyName, [In] ref MLMediaDRMByteArray PropertyValue);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMEncrypt(ulong MediaDrm, [In] ref MLMediaDRMByteArray SessionId, [In] ref MLMediaDRMCryptoInputParam CryptoKeyParam, [In] ref MLMediaDRMByteArray Input, out MLMediaDRMByteArray Output);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMDecrypt(ulong MediaDrm, [In] ref MLMediaDRMByteArray SessionId, [In] ref MLMediaDRMCryptoInputParam CryptoKeyParam, [In] ref MLMediaDRMByteArray Input, out MLMediaDRMByteArray Output);

                        [DllImport(MLMediaDRMDll, CallingConvention = CallingConvention.Cdecl)]
                        public static extern MLResult.Code MLMediaDRMSignRSA(ulong MediaDrm, [In] ref MLMediaDRMByteArray SessionId, [In] ref MLMediaDRMRSAInputParam HMACParam, [In] ref MLMediaDRMByteArray Message, out MLMediaDRMByteArray Signature);

                        [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnEventDelegate))]
                        private static void OnEvent(ulong MediaDrm, [In] ref MLMediaDRMEventInfo info)
                        {
                            GCHandle gcHandle = GCHandle.FromIntPtr(info.data);
                            DRM drm = gcHandle.Target as DRM;
                            if (drm != null)
                            {
                                MLMediaDRMByteArray eventData = Marshal.PtrToStructure<MLMediaDRMByteArray>(info.eventDataByteArray);
                                MLMediaDRMByteArray sessionId = Marshal.PtrToStructure<MLMediaDRMByteArray>(info.sessionIdByteArray);

                                // free these?

                                Event eventInfo = new Event(eventData.Bytes, sessionId.Bytes, info.eventType, info.extra);
                                MLThreadDispatch.Call(drm, eventInfo, drm.OnEvent);
                            }
                        }

                        [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnExpirationUpdateDelegate))]
                        private static void OnExpirationUpdate(ulong MediaDrm, [In] ref MLMediaDRMExpirationUpdateInfo info)
                        {
                            GCHandle gcHandle = GCHandle.FromIntPtr(info.data);
                            DRM drm = gcHandle.Target as DRM;
                            if (drm != null)
                            {
                                MLMediaDRMByteArray sessionIdArray = Marshal.PtrToStructure<MLMediaDRMByteArray>(info.sessionIdByteArray);
                                Expiration expiration = new Expiration(sessionIdArray.Bytes, info.expirationTimeMs);
                                MLThreadDispatch.Call(drm, expiration, drm.OnExpirationUpdate);
                            }
                        }

                        [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnKeyStatusChangeDelegate))]
                        private static void OnKeyStatusChange(ulong MediaDrm, [In] ref MLMediaDRMKeyStatusInfo info)
                        {
                            GCHandle gcHandle = GCHandle.FromIntPtr(info.data);
                            DRM drm = gcHandle.Target as DRM;
                            if (drm != null)
                            {
                                MLMediaDRMByteArray sessionIdArray = Marshal.PtrToStructure<MLMediaDRMByteArray>(info.sessionIdByteArray);
                                Key[] keys = new Key[info.keyStatusCount];
                                IntPtr walkPtr = info.keyStatuses;
                                for (ulong i = 0; i < info.keyStatusCount; ++i)
                                {
                                    keys[i] = Marshal.PtrToStructure<MLMediaDRMKeyStatus>(walkPtr).Data;
                                    walkPtr = new IntPtr(walkPtr.ToInt64() + Marshal.SizeOf<IntPtr>());
                                }

                                KeyStatuses keyStatuses = new KeyStatuses(sessionIdArray.Bytes, keys, info.hasNewUsableKey);
                                MLThreadDispatch.Call(drm, keyStatuses, drm.OnKeyStatusChange);
                            }
                        }
                    }
                }
            }
        }
    }
}
```




