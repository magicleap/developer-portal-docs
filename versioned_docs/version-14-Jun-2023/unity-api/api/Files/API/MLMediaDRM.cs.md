---

title: MLMediaDRM.cs

---


# MLMediaDRM.cs









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
    using MagicLeap.Native;

    public partial class MLMedia
    {
        public partial class Player
        {
            public partial class Track
            {
                public partial class DRM
                {
                    [Obsolete("OnEventDelegate has been deprecated and will be removed in a future release.")]
                    public delegate void OnEventDelegate(DRM drm, Event eventInfo);

                    [Obsolete("OnExpirationUpdateDelegate has been deprecated and will be removed in a future release.")]
                    public delegate void OnExpirationUpdateDelegate(DRM drm, Expiration expirationInfo);

                    [Obsolete("OnKeyStatusChangeDelegate has been deprecated and will be removed in a future release.")]
                    public delegate void OnKeyStatusChangeDelegate(DRM drm, KeyStatuses KeyStatuses);

                    [Obsolete("OnEvent has been deprecated and will be removed in a future release.")]
                    public event OnEventDelegate OnEvent = delegate { };

                    [Obsolete("OnExpirationUpdateDelegate has been deprecated and will be removed in a future release.")]
                    public event OnExpirationUpdateDelegate OnExpirationUpdate = delegate { };

                    [Obsolete("OnKeyStatusChangeDelegate has been deprecated and will be removed in a future release.")]
                    public event OnKeyStatusChangeDelegate OnKeyStatusChange = delegate { };

                    public enum Property
                    {
                        Vendor,
                        Version,
                        Description,
                        Algorithms,
                        DeviceUniqueId
                    }

                    public enum KeyType : int
                    {
                        Streaming = 1,

                        Offline,

                        Release,
                    }

                    public enum KeyStatus
                    {
                        Usable = 0,
                        Expired,
                        OutputNotAllowed,
                        Pending,
                        InternalError
                    }

                    public enum EventType
                    {
                        ProvisionRequired = 1,

                        KeyRequired,

                        KeyExpired,

                        VendorDefined,

                        SessionReclaimed,

                        ExpirationUpdate,

                        KeysChange,
                    };

                    [Obsolete("TrackType has been deprecated and will be removed in a future release.")]
                    public Track.Type TrackType { get; private set; }

                    private ulong handle = MagicLeapNativeBindings.InvalidHandle;

                    private GCHandle gcHandle;

                    private MLMedia.Player mediaPlayer;

                    private MagicLeapNativeBindings.MLUUID scheme;

                    private DRM() { }

                    [Obsolete("DRM has been deprecated and will be removed in a future release.")]
                    public DRM(MLMedia.Player mlPlayer, Info trackDRMInfo)
                    {
                        this.mediaPlayer = mlPlayer;
                        this.TrackType = trackDRMInfo.TrackType;
                        this.scheme = trackDRMInfo.UUIDS[0];
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMCreate(this.scheme, out this.handle);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMCreate));
                        NativeBindings.MLMediaDRMEventCallbacks callbacks = NativeBindings.MLMediaDRMEventCallbacks.Create();
                        this.gcHandle = GCHandle.Alloc(this, GCHandleType.Weak);
                        System.IntPtr ptr = GCHandle.ToIntPtr(this.gcHandle);
                        resultCode = NativeBindings.MLMediaDRMSetOnEventListenerEx(this.handle, ref callbacks, ptr);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMSetOnEventListenerEx));
                    }

                    [Obsolete("CreateSession has been deprecated and will be removed in a future release.")]
                    public Session CreateSession(Info trackInfo) => new Session(this, trackInfo.PSSHEntries[0]);

                    ~DRM()
                    {
                        if (MagicLeapNativeBindings.MLHandleIsValid(this.handle))
                        {
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMRelease(this.handle);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMRelease));
                        }
                    }

                    [Obsolete("ProvisionRequest has been deprecated and will be removed in a future release.")]
                    public MLResult ProvisionRequest(out byte[] requestData, out string defaultURL)
                    {
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMGetProvisionRequest(this.handle, "none", out NativeBindings.MLMediaDRMRequestMessage provisionRequest);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMGetProvisionRequest));

                        // Send the provision request message to the provision server and get the response
                        requestData = new byte[provisionRequest.Request.Length];
                        Marshal.Copy(provisionRequest.Request.Data, requestData, 0, requestData.Length);
                        defaultURL = provisionRequest.DefaultURL;

                        NativeBindings.MLMediaDRMRequestMessageRelease(ref provisionRequest);
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("ProvisionResponse has been deprecated and will be removed in a future release.")]
                    public MLResult ProvisionResponse(byte[] responseData)
                    {
                        NativeBindings.MLMediaDRMByteArray responseDRMByteArray = new NativeBindings.MLMediaDRMByteArray();
                        responseDRMByteArray.AllocResources(responseData);
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMProvideProvisionResponse(this.handle, ref responseDRMByteArray, out NativeBindings.MLMediaDRMByteArray certificate, out NativeBindings.MLMediaDRMByteArray wrappedKey);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMProvideProvisionResponse));
                        responseDRMByteArray.FreeResources();

                        NativeBindings.MLMediaDRMByteArrayRelease(ref wrappedKey);
                        NativeBindings.MLMediaDRMByteArrayRelease(ref certificate);

                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("GetSecureStops has been deprecated and will be removed in a future release.")]
                    public MLResult GetSecureStops(out byte[][] secureStops)
                    {
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMGetSecureStops(this.handle, out NativeBindings.MLMediaDRMByteArrayList secureStopsNative);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMGetSecureStops));
                        secureStops = secureStopsNative.ByteArrays;
                        NativeBindings.MLMediaDRMByteArrayListRelease(ref secureStopsNative);
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("GetSecureStop has been deprecated and will be removed in a future release.")]
                    public MLResult GetSecureStop(byte[] secureStopId, out byte[] secureStop)
                    {
                        NativeBindings.MLMediaDRMByteArray secureStopIdNative = new NativeBindings.MLMediaDRMByteArray();
                        secureStopIdNative.AllocResources(secureStopId);
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMGetSecureStop(this.handle, ref secureStopIdNative, out NativeBindings.MLMediaDRMByteArray secureStopNative);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMGetSecureStop));
                        secureStop = secureStopNative.Bytes;
                        secureStopIdNative.FreeResources();
                        NativeBindings.MLMediaDRMByteArrayRelease(ref secureStopNative);
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("ReleaseAllSecureStops has been deprecated and will be removed in a future release.")]
                    public MLResult ReleaseAllSecureStops()
                    {
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMReleaseAllSecureStops(this.handle);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMReleaseAllSecureStops));
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("ReleaseSecureStops has been deprecated and will be removed in a future release.")]
                    public MLResult ReleaseSecureStops(byte[] secureStops)
                    {
                        NativeBindings.MLMediaDRMByteArray secureStopNative = new NativeBindings.MLMediaDRMByteArray();
                        secureStopNative.AllocResources(secureStops);
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMReleaseSecureStops(this.handle, ref secureStopNative);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMReleaseSecureStops));
                        secureStopNative.FreeResources();
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("IsCryptoSchemeSupported has been deprecated and will be removed in a future release.")]
                    public MLResult IsCryptoSchemeSupported(MagicLeapNativeBindings.MLUUID uuid, string mime, out bool isSupported)
                    {
                        byte[] mimeBytes = System.Text.Encoding.ASCII.GetBytes(mime);
                        System.IntPtr mimePtr = Marshal.AllocHGlobal(mimeBytes.Length);
                        Marshal.Copy(mimeBytes, 0, mimePtr, mimeBytes.Length);

                        MLResult.Code resultCode = NativeBindings.MLMediaDRMIsCryptoSchemeSupported(uuid, mimePtr, out isSupported);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMIsCryptoSchemeSupported));
                        Marshal.FreeHGlobal(mimePtr);

                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("GetPropertyString has been deprecated and will be removed in a future release.")]
                    public MLResult GetPropertyString(Property property, out string propertyValue)
                    {
                        NativeBindings.Properties.TryGetValue(property, out string propertyName);
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMGetPropertyString(this.handle, propertyName, out propertyValue);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMGetPropertyString));
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("SetPropertyString has been deprecated and will be removed in a future release.")]
                    public MLResult SetPropertyString(Property property, string propertyValue)
                    {
                        NativeBindings.Properties.TryGetValue(property, out string propertyName);
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMSetPropertyString(this.handle, propertyName, propertyValue);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMSetPropertyString));
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("GetPropertyByteArray has been deprecated and will be removed in a future release.")]
                    public MLResult GetPropertyByteArray(Property property, out byte[] propertyValue)
                    {
                        NativeBindings.Properties.TryGetValue(property, out string propertyName);
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMGetPropertyByteArray(this.handle, propertyName, out NativeBindings.MLMediaDRMByteArray propertyValueByteArray);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMGetPropertyByteArray));
                        propertyValue = propertyValueByteArray.Bytes;
                        NativeBindings.MLMediaDRMByteArrayRelease(ref propertyValueByteArray);
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("SetPropertyByteArray has been deprecated and will be removed in a future release.")]
                    public MLResult SetPropertyByteArray(Property property, byte[] propertyValue)
                    {
                        NativeBindings.Properties.TryGetValue(property, out string propertyName);
                        NativeBindings.MLMediaDRMByteArray propertyValuByteArray = new NativeBindings.MLMediaDRMByteArray();
                        propertyValuByteArray.AllocResources(propertyValue);
                        MLResult.Code resultCode = NativeBindings.MLMediaDRMSetPropertyByteArray(this.handle, propertyName, ref propertyValuByteArray);
                        MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMSetPropertyByteArray));
                        propertyValuByteArray.FreeResources();
                        return MLResult.Create(resultCode);
                    }

                    [Obsolete("Session has been deprecated and will be removed in a future release.")]
                    public class Session
                    {
                        [Obsolete("CryptoKeyParam has been deprecated and will be removed in a future release.")]
                        public readonly struct CryptoKeyParam
                        {
                            [Obsolete("CryptoKeyParam has been deprecated and will be removed in a future release.")]
                            public CryptoKeyParam(string algorithm, byte[] keySetId, byte[] initialVector)
                            {
                                this.Algorithm = algorithm;
                                this.KeySetId = keySetId;
                                this.InitialVector = initialVector;
                            }

                            [Obsolete("Algorithm has been deprecated and will be removed in a future release.")]
                            public readonly string Algorithm;

                            [Obsolete("KeySetId has been deprecated and will be removed in a future release.")]
                            public readonly byte[] KeySetId;

                            [Obsolete("InitialVector has been deprecated and will be removed in a future release.")]
                            public readonly byte[] InitialVector;
                        }

                        [Obsolete("HMACParam has been deprecated and will be removed in a future release.")]
                        public readonly struct HMACParam
                        {
                            public HMACParam(string algorithm, byte[] keySetId)
                            {
                                this.Algorithm = algorithm;
                                this.KeySetId = keySetId;
                            }

                            public readonly string Algorithm;
                            public readonly byte[] KeySetId;
                        }

                        [Obsolete("RSAParam has been deprecated and will be removed in a future release.")]
                        public readonly struct RSAParam
                        {
                            [Obsolete("RSAParam has been deprecated and will be removed in a future release.")]
                            public RSAParam(string algorithm, byte[] wrappedRsaKey)
                            {
                                this.Algorithm = algorithm;
                                this.WrappedRsaKey = wrappedRsaKey;
                            }

                            [Obsolete("Algorithm has been deprecated and will be removed in a future release.")]
                            public readonly string Algorithm;

                            [Obsolete("WrappedRsaKey has been deprecated and will be removed in a future release.")]
                            public readonly byte[] WrappedRsaKey;
                        }

                        internal Session(DRM drm, Player.NativeBindings.MLMediaPlayerPSSHEntry psshKey)
                        {
                            this.Drm = drm;
                            this.psshKey = psshKey;
                        }

                        ~Session()
                        {
                            if (MagicLeapNativeBindings.MLHandleIsValid(this.Drm.handle))
                                this.Close();
                        }

                        [Obsolete("Drm has been deprecated and will be removed in a future release.")]
                        public DRM Drm { get; private set; }

                        [Obsolete("IsPrepared has been deprecated and will be removed in a future release.")]
                        public bool IsPrepared { get; private set; }

                        internal NativeBindings.MLMediaDRMByteArray id;

                        internal NativeBindings.MLMediaDRMByteArray keySetId;

                        private Player.NativeBindings.MLMediaPlayerPSSHEntry psshKey;

                        [Obsolete("Open has been deprecated and will be removed in a future release.")]
                        public MLResult Open()
                        {
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMOpenSession(this.Drm.handle, out this.id);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMOpenSession));
                            byte[] sessionData = new byte[this.id.Length];
                            Marshal.Copy(this.id.Data, sessionData, 0, (int)this.id.Length);
                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("Prepare has been deprecated and will be removed in a future release.")]
                        public MLResult Prepare()
                        {
                            MLMedia.Player.NativeBindings.MLMediaPlayerTrackDRMSessionInfo sessionInfo = new Player.NativeBindings.MLMediaPlayerTrackDRMSessionInfo(this.Drm.TrackType);
                            sessionInfo.AllocResources(this.Drm.scheme, this.id);
                            MLResult.Code resultCode = MLMedia.Player.NativeBindings.MLMediaPlayerPrepareTrackDRM(this.Drm.mediaPlayer.handle, ref sessionInfo);
                            this.IsPrepared = MLResult.DidNativeCallSucceed(resultCode, nameof(MLMedia.Player.NativeBindings.MLMediaPlayerPrepareTrackDRM));
                            sessionInfo.FreeResources();

                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("Close has been deprecated and will be removed in a future release.")]
                        public MLResult Close()
                        {
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMByteArrayRelease(ref this.keySetId);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMByteArrayRelease));

                            resultCode = NativeBindings.MLMediaDRMCloseSession(this.Drm.handle, ref this.id);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMCloseSession));

                            this.IsPrepared = false;
                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("KeysRequest has been deprecated and will be removed in a future release.")]
                        public MLResult KeysRequest(out byte[] requestData)
                        {
                            NativeBindings.MLMediaDRMKeyRequestInputParam keyRequestParam = new NativeBindings.MLMediaDRMKeyRequestInputParam("cenc", KeyType.Streaming);
                            keyRequestParam.AllocResources(this.psshKey);
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMGetKeyRequest(this.Drm.handle, ref this.id, ref keyRequestParam, out NativeBindings.MLMediaDRMRequestMessage keyRequest);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMGetKeyRequest));
                            keyRequestParam.FreeResources();
                            requestData = new byte[keyRequest.Request.Length];
                            Marshal.Copy(keyRequest.Request.Data, requestData, 0, requestData.Length);
                            NativeBindings.MLMediaDRMRequestMessageRelease(ref keyRequest);
                            return MLResult.Create(resultCode);
                        }


                        [Obsolete("KeysResponse has been deprecated and will be removed in a future release.")]
                        public MLResult KeysResponse(byte[] responseData, out byte[] keySetData)
                        {
                            NativeBindings.MLMediaDRMByteArray responseDRMByteArray = new NativeBindings.MLMediaDRMByteArray();
                            responseDRMByteArray.AllocResources(responseData);
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMProvideKeyResponse(this.Drm.handle, ref this.id, ref responseDRMByteArray, out this.keySetId);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMProvideKeyResponse));
                            responseDRMByteArray.FreeResources();
                            keySetData = new byte[keySetId.Length];
                            Marshal.Copy(keySetId.Data, keySetData, 0, (int)keySetId.Length);
                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("Encrypt has been deprecated and will be removed in a future release.")]
                        public MLResult Encrypt(CryptoKeyParam cryptoKeyParam, byte[] input, out byte[] output)
                        {
                            NativeBindings.MLMediaDRMByteArray keySetIdByteArray = new NativeBindings.MLMediaDRMByteArray();
                            keySetIdByteArray.AllocResources(cryptoKeyParam.KeySetId);

                            NativeBindings.MLMediaDRMByteArray initialVectorByteArray = new NativeBindings.MLMediaDRMByteArray();
                            initialVectorByteArray.AllocResources(cryptoKeyParam.InitialVector);

                            NativeBindings.MLMediaDRMCryptoInputParam cryptoKeyParamNative = new NativeBindings.MLMediaDRMCryptoInputParam();
                            cryptoKeyParamNative.AllocResources(cryptoKeyParam.Algorithm, keySetIdByteArray, initialVectorByteArray);

                            NativeBindings.MLMediaDRMByteArray inputByteArray = new NativeBindings.MLMediaDRMByteArray();
                            inputByteArray.AllocResources(input);

                            MLResult.Code resultCode = NativeBindings.MLMediaDRMEncrypt(this.Drm.handle, ref this.id, ref cryptoKeyParamNative, ref inputByteArray, out NativeBindings.MLMediaDRMByteArray outputByteArray);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMEncrypt));
                            output = outputByteArray.Bytes;

                            keySetIdByteArray.FreeResources();
                            initialVectorByteArray.FreeResources();
                            cryptoKeyParamNative.FreeResources();
                            inputByteArray.FreeResources();
                            NativeBindings.MLMediaDRMByteArrayRelease(ref outputByteArray);

                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("Decrypt has been deprecated and will be removed in a future release.")]
                        public MLResult Decrypt(CryptoKeyParam cryptoKeyParam, byte[] input, out byte[] output)
                        {
                            NativeBindings.MLMediaDRMByteArray keySetIdByteArray = new NativeBindings.MLMediaDRMByteArray();
                            keySetIdByteArray.AllocResources(cryptoKeyParam.KeySetId);

                            NativeBindings.MLMediaDRMByteArray initialVectorByteArray = new NativeBindings.MLMediaDRMByteArray();
                            initialVectorByteArray.AllocResources(cryptoKeyParam.InitialVector);

                            NativeBindings.MLMediaDRMCryptoInputParam cryptoKeyParamNative = new NativeBindings.MLMediaDRMCryptoInputParam();
                            cryptoKeyParamNative.AllocResources(cryptoKeyParam.Algorithm, keySetIdByteArray, initialVectorByteArray);

                            NativeBindings.MLMediaDRMByteArray inputByteArray = new NativeBindings.MLMediaDRMByteArray();
                            inputByteArray.AllocResources(input);

                            MLResult.Code resultCode = NativeBindings.MLMediaDRMDecrypt(this.Drm.handle, ref this.id, ref cryptoKeyParamNative, ref inputByteArray, out NativeBindings.MLMediaDRMByteArray outputByteArray);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMDecrypt));
                            output = outputByteArray.Bytes;

                            keySetIdByteArray.FreeResources();
                            initialVectorByteArray.FreeResources();
                            cryptoKeyParamNative.FreeResources();
                            inputByteArray.FreeResources();
                            NativeBindings.MLMediaDRMByteArrayRelease(ref outputByteArray);

                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("Sign has been deprecated and will be removed in a future release.")]
                        public MLResult Sign(HMACParam hmacParam, byte[] message, out byte[] signature)
                        {
                            NativeBindings.MLMediaDRMByteArray keySetIdByteArray = new NativeBindings.MLMediaDRMByteArray();
                            keySetIdByteArray.AllocResources(hmacParam.KeySetId);

                            NativeBindings.MLMediaDRMHMACInputParam hmacParamNative = new NativeBindings.MLMediaDRMHMACInputParam();
                            hmacParamNative.AllocResources(hmacParam.Algorithm, keySetIdByteArray);

                            NativeBindings.MLMediaDRMByteArray messageByteArray = new NativeBindings.MLMediaDRMByteArray();
                            messageByteArray.AllocResources(message);

                            MLResult.Code resultCode = NativeBindings.MLMediaDRMSign(this.Drm.handle, ref this.id, ref hmacParamNative, ref messageByteArray, out NativeBindings.MLMediaDRMByteArray signatureByteArray);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMSign));
                            signature = signatureByteArray.Bytes;

                            keySetIdByteArray.FreeResources();
                            hmacParamNative.FreeResources();
                            messageByteArray.FreeResources();
                            NativeBindings.MLMediaDRMByteArrayRelease(ref signatureByteArray);

                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("Sign has been deprecated and will be removed in a future release.")]
                        public MLResult Sign(RSAParam rsaParam, byte[] message, out byte[] signature)
                        {
                            NativeBindings.MLMediaDRMByteArray keySetIdByteArray = new NativeBindings.MLMediaDRMByteArray();
                            keySetIdByteArray.AllocResources(rsaParam.WrappedRsaKey);

                            NativeBindings.MLMediaDRMRSAInputParam rsaParamNative = new NativeBindings.MLMediaDRMRSAInputParam();
                            rsaParamNative.AllocResources(rsaParam.Algorithm, keySetIdByteArray);

                            NativeBindings.MLMediaDRMByteArray messageByteArray = new NativeBindings.MLMediaDRMByteArray();
                            messageByteArray.AllocResources(message);

                            MLResult.Code resultCode = NativeBindings.MLMediaDRMSignRSA(this.Drm.handle, ref this.id, ref rsaParamNative, ref messageByteArray, out NativeBindings.MLMediaDRMByteArray signatureByteArray);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMSignRSA));
                            signature = signatureByteArray.Bytes;

                            keySetIdByteArray.FreeResources();
                            rsaParamNative.FreeResources();
                            messageByteArray.FreeResources();
                            NativeBindings.MLMediaDRMByteArrayRelease(ref signatureByteArray);

                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("Verify has been deprecated and will be removed in a future release.")]
                        public MLResult Verify(HMACParam hmacParam, byte[] message, byte[] signature, out bool isMatch)
                        {
                            NativeBindings.MLMediaDRMByteArray keySetIdByteArray = new NativeBindings.MLMediaDRMByteArray();
                            keySetIdByteArray.AllocResources(hmacParam.KeySetId);

                            NativeBindings.MLMediaDRMHMACInputParam hmacParamNative = new NativeBindings.MLMediaDRMHMACInputParam();
                            hmacParamNative.AllocResources(hmacParam.Algorithm, keySetIdByteArray);

                            NativeBindings.MLMediaDRMByteArray messageByteArray = new NativeBindings.MLMediaDRMByteArray();
                            messageByteArray.AllocResources(message);

                            NativeBindings.MLMediaDRMByteArray signatureByteArray = new NativeBindings.MLMediaDRMByteArray();
                            signatureByteArray.AllocResources(signature);

                            MLResult.Code resultCode = NativeBindings.MLMediaDRMVerify(this.Drm.handle, ref this.id, ref hmacParamNative, ref messageByteArray, ref signatureByteArray, out isMatch);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMVerify));

                            keySetIdByteArray.FreeResources();
                            hmacParamNative.FreeResources();
                            messageByteArray.FreeResources();
                            signatureByteArray.FreeResources();

                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("GetKeyValues has been deprecated and will be removed in a future release.")]
                        public MLResult GetKeyValues(out KeyValuePair<string, string>[] keyValues)
                        {
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMQueryKeyStatus(this.Drm.handle, ref this.id, out NativeBindings.MLMediaDRMKeyValueArray keyValuesNative);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMQueryKeyStatus));
                            keyValues = keyValuesNative.KeyValues;
                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("RestoreKeys has been deprecated and will be removed in a future release.")]
                        public MLResult RestoreKeys(byte[] keySetId)
                        {
                            NativeBindings.MLMediaDRMByteArray keySetIdByteArray = new NativeBindings.MLMediaDRMByteArray();
                            keySetIdByteArray.AllocResources(keySetId);
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMRestoreKeys(this.Drm.handle, ref this.id, ref keySetIdByteArray);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMRestoreKeys));
                            keySetIdByteArray.FreeResources();
                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("AddKeyValue has been deprecated and will be removed in a future release.")]
                        public MLResult AddKeyValue(KeyValuePair<string, string> pair, out KeyValuePair<string, string>[] allKeys)
                        {
                            NativeBindings.MLMediaDRMKeyValue keyValueNative = new NativeBindings.MLMediaDRMKeyValue(pair);
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMKeyValueArrayAdd(ref keyValueNative, out NativeBindings.MLMediaDRMKeyValueArray keyValuesNative);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMKeyValueArrayAdd));
                            allKeys = keyValuesNative.KeyValues;
                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("AllocateKeyValueArray has been deprecated and will be removed in a future release.")]
                        public MLResult AllocateKeyValueArray(uint size, out KeyValuePair<string, string>[] allKeys)
                        {
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMKeyValueArrayAllocate(size, out NativeBindings.MLMediaDRMKeyValueArray keyValuesNative);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMKeyValueArrayAllocate));
                            allKeys = keyValuesNative.KeyValues;
                            return MLResult.Create(resultCode);
                        }

                        [Obsolete("RemoveKeys has been deprecated and will be removed in a future release.")]
                        public MLResult RemoveKeys(byte[] keySetId)
                        {
                            NativeBindings.MLMediaDRMByteArray keySetIdByteArray = new NativeBindings.MLMediaDRMByteArray();
                            keySetIdByteArray.AllocResources(keySetId);
                            MLResult.Code resultCode = NativeBindings.MLMediaDRMRemoveKeys(this.Drm.handle, ref this.id, ref keySetIdByteArray);
                            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaDRMRemoveKeys));
                            keySetIdByteArray.FreeResources();
                            return MLResult.Create(resultCode);
                        }
                    }

                    public struct Info
                    {
                        internal MagicLeapNativeBindings.MLUUID[] UUIDS;

                        internal Player.NativeBindings.MLMediaPlayerPSSHEntry[] PSSHEntries;

                        public Track.Type TrackType;
                    };

                    public readonly struct Event
                    {
                        internal Event(byte[] data, byte[] sessionId, EventType type, int extra)
                        {
                            this.Data = data;
                            this.SessionId = sessionId;
                            this.Type = type;
                            this.Extra = extra;
                        }

                        public readonly byte[] Data;

                        public readonly byte[] SessionId;

                        public readonly EventType Type;

                        public readonly int Extra;

                        public override string ToString() => $"data:  {this.Data}, sessionId:  {this.SessionId}, type:  {this.Type}, extra:  {this.Extra}";

                    }

                    public readonly struct Expiration
                    {
                        internal Expiration(byte[] sessionId, ulong timems)
                        {
                            this.SessionId = sessionId;
                            this.TimeMs = timems;
                        }

                        public readonly byte[] SessionId;

                        public readonly ulong TimeMs;

                        public override string ToString() => $"sessionId:  {this.SessionId}, timeMs:  {this.TimeMs}";

                    }

                    public readonly struct Key
                    {
                        internal Key(byte[] id, KeyStatus status)
                        {
                            this.Id = id;
                            this.Status = status;
                        }

                        public readonly byte[] Id;

                        public readonly KeyStatus Status;

                        public override string ToString() => $"Id: {this.Id}, Status: {this.Status}";

                    }

                    public readonly struct KeyStatuses
                    {
                        internal KeyStatuses(byte[] sessionId, Key[] keys, bool hasNewUseableKey)
                        {
                            this.SessionId = sessionId;
                            this.Keys = keys;
                            this.HasNewUseableKey = hasNewUseableKey;
                        }

                        public readonly byte[] SessionId;

                        public readonly Key[] Keys;

                        public readonly bool HasNewUseableKey;

                        public override string ToString()
                        {
                            string keysString = string.Empty;
                            foreach (Key key in this.Keys)
                                keysString += key + ", ";

                            return $"sessionId:  {this.SessionId}, hasNewUseableKey: {this.HasNewUseableKey} keys: {keysString}";
                        }
                    }
                }
            }
        }
    }
}
```



