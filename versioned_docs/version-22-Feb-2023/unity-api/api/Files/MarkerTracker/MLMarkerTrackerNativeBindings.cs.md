---

title: MLMarkerTrackerNativeBindings.cs

---


# MLMarkerTrackerNativeBindings.cs









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
    using System.Threading.Tasks;
    using UnityEngine.XR.MagicLeap.Native;


    public sealed partial class MLMarkerTracker
    {
        private static MLResult.Code MLMarkerTrackerCreate(TrackerSettings settings)
        {
            var nativeSettings = new NativeBindings.MLMarkerTrackerSettings(settings);
            if (!MLPermissions.CheckPermission(MLPermission.MarkerTracking).IsOk)
            {
                Debug.LogError($"Unable to create MLMarkerTracker because the permission {MLPermission.MarkerTracking} has not been granted.");
                return MLResult.Code.PermissionDenied;
            }
            MLResult.Code resultCode = NativeBindings.MLMarkerTrackerCreate(nativeSettings, out Instance.Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMarkerTrackerCreate));
            return resultCode;
        }

        private static byte[] MarshalBinaryData(IntPtr binaryDataStructPtr)
        {
            var binaryDataStruct = Marshal.PtrToStructure<NativeBindings.MLMarkerTrackerDecodedBinaryData>(binaryDataStructPtr);

            // the actual binary data is at an offset of the binary data struct
            IntPtr offsetPtr = IntPtr.Add(binaryDataStructPtr, Marshal.SizeOf(binaryDataStruct));
            byte[] bytes = new byte[binaryDataStruct.Size];
            Marshal.Copy(offsetPtr, bytes, 0, bytes.Length);
            return bytes;
        }

        private static MarkerData[] MLMarkerTrackerGetResults()
        {
            try
            {
                var scannerResults = new NativeBindings.MLMarkerTrackerResultArray(1);
                var resultCode = NativeBindings.MLMarkerTrackerGetResult(Instance.Handle, ref scannerResults);

                // get results from native api
                if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMarkerTrackerGetResult)))
                {
                    var managedResults = new MarkerData[((int)scannerResults.Count)];
                    for (ulong i = 0; i < scannerResults.Count.ToUInt64(); i++)
                    {
                        // marshal native array into native structs
                        long address = scannerResults.Detections.ToInt64() + (Marshal.SizeOf<IntPtr>() * (int)i);
                        NativeBindings.MLMarkerTrackerResult detectedResult = Marshal.PtrToStructure<NativeBindings.MLMarkerTrackerResult>(Marshal.ReadIntPtr(new IntPtr(address)));
                        Pose pose = Pose.identity;
                        if (detectedResult.IsValidPose)
                        {
                            resultCode = MagicLeapXrProviderNativeBindings.GetUnityPose(detectedResult.CoordinateFrameUID, out pose);
                            if (MLResult.IsOK(resultCode))
                            {
                                // Update marker pose to be rotated 180 degrees on it's z axis to accommodate  for how the marker face is interpreted by the capi.
                                // Without this update the marker positions will be upside down.
                                pose = new Pose(pose.position, pose.rotation * Quaternion.AngleAxis(180, Vector3.forward));                              
                            }
                            else
                                Debug.LogError($"Marker Scanner could not get pose data for coordinate frame id '{detectedResult.CoordinateFrameUID}'");
                        }

                        var decodedDataType = Marshal.PtrToStructure<NativeBindings.MLMarkerTrackerDecodedTypedData>(detectedResult.DecodedData.Data);
                        NativeBindings.MLMarkerTrackerDecodedArucoData arucoData = default;
                        byte[] binaryData = null;
                        var markerType = MarkerType.None;
                        switch (decodedDataType.Type)
                        {
                            case NativeBindings.DecodedDataType.Aruco:
                                arucoData = Marshal.PtrToStructure<NativeBindings.MLMarkerTrackerDecodedArucoData>(detectedResult.DecodedData.Data);
                                markerType = MarkerType.Aruco_April;
                                break;
                            case NativeBindings.DecodedDataType.QR:
                                binaryData = MarshalBinaryData(detectedResult.DecodedData.Data);
                                markerType = MarkerType.QR;
                                break;
                            case NativeBindings.DecodedDataType.EAN_13:
                                binaryData = MarshalBinaryData(detectedResult.DecodedData.Data);
                                markerType = MarkerType.EAN_13;
                                break;
                            case NativeBindings.DecodedDataType.UPC_A:
                                binaryData = MarshalBinaryData(detectedResult.DecodedData.Data);
                                markerType = MarkerType.UPC_A;
                                break;
                        }

                        managedResults[i] =

                            new MarkerData
                            (
                                markerType,
                                arucoData,
                                binaryData,
                                pose,
                                detectedResult.ReprojectionError
                            );

                    }
                    if (scannerResults.Count.ToUInt64() > 0)
                    {
                        // release native memory so results can be polled again
                        if (MLResult.DidNativeCallSucceed(NativeBindings.MLMarkerTrackerReleaseResult(ref scannerResults), nameof(NativeBindings.MLMarkerTrackerReleaseResult)))
                            return managedResults;
                        else
                        {
                            MLPluginLog.Error($"MLMarkerTracker.NativeBindings.MLMarkerTrackerReleaseResult failed when trying to release the results' memory. Reason: {MLResult.CodeToString(resultCode)}");
                            return managedResults;
                        }
                    }
                    else
                    {
                        return managedResults;
                    }

                }
                else
                {
                    MLPluginLog.Error($"MLMarkerTracker.MLMarkerTrackerGetResult failed to obtain a result. Reason: {resultCode}");
                    return new MarkerData[0];
                }
            }
            catch (EntryPointNotFoundException)
            {
                MLPluginLog.Error("MLMarkerTracker.MLMarkerTrackerGetResult failed. Reason: API symbols not found.");
            }

            return new MarkerData[0];
        }

        private static Task<MLResult> MLMarkerTrackerSettingsUpdate(TrackerSettings settings)
        {
            try
            {
                var handle = Instance.Handle;
                var nativeSettings = new NativeBindings.MLMarkerTrackerSettings(settings);
                var resultCode = NativeBindings.MLMarkerTrackerUpdateSettings(handle, in nativeSettings);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMarkerTrackerUpdateSettings));
                return MLResult.Create(resultCode);
            }
            catch (EntryPointNotFoundException)
            {
                string error = "MLMarkerTracker.MLMarkerTrackerUpdateSettings failed. Reason: API symbols not found.";
                MLPluginLog.Error(error);
                return MLResult.Create(MLResult.Code.UnspecifiedFailure, error);
            }
        }

        internal class NativeBindings : MagicLeapNativeBindings
        {
            public enum DecodedDataType
            {
                None,
                Aruco,
                QR,
                EAN_13,
                UPC_A
            }

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMarkerTrackerCreate(in MLMarkerTrackerSettings settings, out ulong handle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMarkerTrackerDestroy(ulong scannerHandle);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMarkerTrackerGetResult(ulong scanner_handle, ref MLMarkerTrackerResultArray data);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMarkerTrackerReleaseResult(ref MLMarkerTrackerResultArray data);

            [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
            public static extern MLResult.Code MLMarkerTrackerUpdateSettings(ulong scanner_handle, in MLMarkerTrackerSettings scanner_settings);
            
            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLMarkerTrackerDecodedTypedData
            {
                public readonly DecodedDataType Type;
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLMarkerTrackerDecodedArucoData
            {
                public readonly DecodedDataType Type;

                public readonly ArucoDictionaryName Dictionary;

                public readonly uint Id;
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLMarkerTrackerDecodedBinaryData
            {
                public readonly DecodedDataType Type;

                public readonly uint Size;
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLMarkerTrackerDecodedData
            {
                public readonly IntPtr Data;

                public readonly uint Size;

                public override string ToString() => $"DataSize: {Size}"; // -1 is for null terminated C strings
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLMarkerTrackerResult
            {
                public readonly MLMarkerTrackerDecodedData DecodedData;

                public readonly MarkerType Type;

                [MarshalAs(UnmanagedType.I1)]
                public readonly bool IsValidPose;

                public readonly MLCoordinateFrameUID CoordinateFrameUID;

                public readonly float ReprojectionError;

                public override string ToString() => $"{DecodedData}\nType: {Enum.GetName(typeof(MarkerType), Type)}\nCoordFrameID: {CoordinateFrameUID}\nReproj Error: {ReprojectionError}";
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLMarkerTrackerResultArray
            {
                public readonly uint Version;

                public readonly IntPtr Detections;

                public readonly UIntPtr Count;

                public MLMarkerTrackerResultArray(uint version)
                {
                    Version = version;
                    Detections = IntPtr.Zero;
                    Count = UIntPtr.Zero;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly partial struct MLMarkerTrackerSettings
            {
                public readonly uint Version;

                [MarshalAs(UnmanagedType.I1)]
                public readonly bool EnableMarkerScanning;

                public readonly uint EnabledDetectorTypes;

                public readonly ArucoDictionaryName ArucoDicitonary;

                public readonly float ArucoMarkerSize;

                public readonly float QRCodeSize;

                public readonly Profile TrackerProfile;

                public readonly MLMarkerTrackerCustomProfile CustomTrackerProfile;


                public MLMarkerTrackerSettings(TrackerSettings settings)
                {
                    this.Version = 5;
                    this.EnableMarkerScanning = settings.EnableMarkerScanning;
                    this.EnabledDetectorTypes = (uint)settings.MarkerTypes;
                    this.ArucoDicitonary = settings.ArucoDicitonary;
                    this.ArucoMarkerSize = settings.ArucoMarkerSize;
                    this.QRCodeSize = settings.QRCodeSize;
                    this.TrackerProfile = settings.TrackerProfile;
                    this.CustomTrackerProfile = new MLMarkerTrackerCustomProfile(settings.CustomTrackerProfile);
                }

                public MLMarkerTrackerSettings(Settings settings)
                {
                    this.Version = 5;
                    this.EnableMarkerScanning = settings.EnableMarkerScanning;
                    this.EnabledDetectorTypes = (uint)settings.MarkerTypes;
                    this.ArucoDicitonary = settings.ArucoDicitonary;
                    this.ArucoMarkerSize = settings.ArucoMarkerSize;
                    this.QRCodeSize = settings.QRCodeSize;
                    this.TrackerProfile = Profile.Default;
                    this.CustomTrackerProfile = default;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public readonly struct MLMarkerTrackerCustomProfile
            {
                public readonly FPSHint FPSHint;

                public readonly ResolutionHint ResolutionHint;

                public readonly CameraHint CameraHint;

                public readonly CornerRefineMethod CornerRefineMethod;

                [MarshalAs(UnmanagedType.I1)]
                public readonly bool UseEdgeRefinement;

                public readonly FullAnalysisIntervalHint FullAnalysisIntervalHint;

                public MLMarkerTrackerCustomProfile(TrackerSettings.CustomProfile customProfile)
                {
                    this.FPSHint = customProfile.FPSHint;
                    this.ResolutionHint = customProfile.ResolutionHint;
                    this.CameraHint = customProfile.CameraHint;
                    this.CornerRefineMethod = customProfile.CornerRefineMethod;
                    this.UseEdgeRefinement = customProfile.UseEdgeRefinement;
                    this.FullAnalysisIntervalHint = customProfile.FullAnalysisIntervalHint;
                }
            }
        }
    }
}
```




