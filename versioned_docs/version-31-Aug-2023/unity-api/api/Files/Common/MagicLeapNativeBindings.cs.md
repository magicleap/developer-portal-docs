---

title: MagicLeapNativeBindings.cs

---


# MagicLeapNativeBindings.cs









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


namespace UnityEngine.XR.MagicLeap.Native
{
    using System;
    using System.Runtime.InteropServices;
    using System.Text;

    public partial class MagicLeapNativeBindings
    {
        public const ulong InvalidHandle = 0xFFFFFFFFFFFFFFFF;

        protected MagicLeapNativeBindings()
        {
        }

        public enum MLSensoryState
        {
            Initializing,

            Ready
        }

        public static bool MLHandleIsValid(ulong handle)
        {
            return handle != InvalidHandle;
        }

        public static string MLGetResultString(MLResult.Code result)
        {
            switch (result)
            {
                case MLResult.Code.Ok:
                    {
                        return "MLResult_Ok";
                    }

                case MLResult.Code.Pending:
                    {
                        return "MLResult_Pending";
                    }

                case MLResult.Code.Timeout:
                    {
                        return "MLResult_Timeout";
                    }

                case MLResult.Code.Locked:
                    {
                        return "MLResult_Locked";
                    }

                case MLResult.Code.UnspecifiedFailure:
                    {
                        return "MLResult_UnspecifiedFailure";
                    }

                case MLResult.Code.InvalidParam:
                    {
                        return "MLResult_InvalidParam";
                    }

                case MLResult.Code.AllocFailed:
                    {
                        return "MLResult_AllocFailed";
                    }

                case MLResult.Code.PermissionDenied:
                    {
                        return "MLResult_PermissionDenied";
                    }

                case MLResult.Code.NotImplemented:
                    {
                        return "MLResult_NotImplemented";
                    }

                case MLResult.Code.ClientLimitExceeded:
                    {
                        return "MLResult_ClientLimitExceeded";
                    }

                case MLResult.Code.PoseNotFound:
                    {
                        return "MLResult_PoseNotFound";
                    }

                case MLResult.Code.APIDLLNotFound:
                    {
                        return "MLResult_APIDLLNotFound";
                    }

                case MLResult.Code.APISymbolsNotFound:
                    {
                        return "MLResult_APISymbolsNotFound";
                    }

                case MLResult.Code.IncompatibleSKU:
                    {
                        return "MLResult_IncompatibleSKU";
                    }

                case MLResult.Code.PerceptionSystemNotStarted:
                    {
                        return "MLResult_PerceptionSystemNotStarted";
                    }

                case MLResult.Code.LicenseError:
                    {
                        return "MLResult_LicenseError";
                    }

                default:
                    {
                        return "MLResult_Unknown";
                    }
            }
        }

        internal static string MLGetSnapshotResultString(MLResult.Code resultCode)
        {
            try
            {
                return Marshal.PtrToStringAnsi(MagicLeapNativeBindings.MLSnapshotGetResultString(resultCode));
            }
            catch (System.DllNotFoundException)
            {
                MLPluginLog.Error("MagicLeapNativeBindings.MLGetSnapshotResultString failed. Reason: MagicLeapNativeBindings is currently available only on device.");
            }
            catch (System.EntryPointNotFoundException)
            {
                MLPluginLog.Error("MagicLeapNativeBindings.MLGetSnapshotResultString failed. Reason: API symbols not found");
            }

            return string.Empty;
        }

        internal static string MLGetInputResultString(MLResult.Code resultCode)
        {
            try
            {
                return Marshal.PtrToStringAnsi(MagicLeapNativeBindings.MLInputGetResultString(resultCode));
            }
            catch (System.DllNotFoundException)
            {
                MLPluginLog.Error("MagicLeapNativeBindings.MLGetInputResultString failed. Reason: MagicLeapNativeBindings is currently available only on device.");
            }
            catch (System.EntryPointNotFoundException)
            {
                MLPluginLog.Error("MagicLeapNativeBindings.MLGetInputResultString failed. Reason: API symbols not found");
            }

            return string.Empty;
        }

        [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern MLResult.Code MLPerceptionGetSnapshot(ref IntPtr snapshot);

        [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern MLResult.Code MLPerceptionGetPredictedSnapshot(ulong timestamp, ref IntPtr out_snapshot);

        [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern MLResult.Code MLPerceptionReleaseSnapshot(IntPtr snap);

        [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern MLResult.Code MLSnapshotGetTransform(IntPtr snap, ref MLCoordinateFrameUID id, ref MLTransform outTransform);

        [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern MLResult.Code MLSnapshotGetStaticData(ref MLSnapshotStaticData outStaticData);

        [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern MLResult.Code MLSnapshotGetPoseInBase(IntPtr snap, ref MLCoordinateFrameUID base_id, ref MLCoordinateFrameUID id, ref MLPose outPose);

        [DllImport(MLPerceptionClientDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr MLSnapshotGetResultString(MLResult.Code result);

        [DllImport(MLInputDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr MLInputGetResultString(MLResult.Code result);

        [DllImport(MLPlatformDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern MLResult.Code MLPlatformGetAPILevel(ref uint level);

        [DllImport(MLSdkLoaderDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern MLResult.Code MLUnitySdkGetMinApiLevel(out uint minApiLevel);

        [DllImport(UnityMagicLeapDll, EntryPoint = "UnityMagicLeap_TryGetPose")]
        [return: MarshalAs(UnmanagedType.I1)]
        public static extern bool UnityMagicLeap_TryGetPose(MLCoordinateFrameUID id, out UnityEngine.Pose pose);

        [StructLayout(LayoutKind.Sequential)]
        public struct MLVec2f
        {
            public float X;

            public float Y;

            public Vector2 ToVector2() => new Vector3(X, Y);
        }

        [Serializable]
        [StructLayout(LayoutKind.Sequential)]
        public struct MLVec3f
        {
            public float X;

            public float Y;

            public float Z;

            public Vector3 ToVector3() => new Vector3(X, Y, Z);
        }

        [Serializable]
        [StructLayout(LayoutKind.Sequential)]
        public struct MLQuaternionf
        {
            public float X;

            public float Y;

            public float Z;

            public float W;

            public static MLQuaternionf Identity()
            {
                MLQuaternionf quat = new MLQuaternionf()
                {
                    X = 0,
                    Y = 0,
                    Z = 0,
                    W = 1
                };

                return quat;
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct MLTransform
        {
            public MLQuaternionf Rotation;

            public MLVec3f Position;

            public static MLTransform Identity()
            {
                MLTransform t = new MLTransform();
                t.Rotation = MLQuaternionf.Identity();
                return t;
            }

            public override string ToString()
            {
                return $"Position: ({Position.X}, {Position.Y}, {Position.Z}) Rotation: ({Rotation.X}, {Rotation.Y}, {Rotation.Z}, {Rotation.W})";
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct MLMat4f
        {
            [MarshalAs(UnmanagedType.ByValArray, SizeConst = 16)]
            public float[] MatrixColmajor;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct MLRectf
        {
            public float X;

            public float Y;

            public float W;

            public float H;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct MLRecti
        {
            public int X;

            public int Y;

            public int W;

            public int H;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct MLUUID
        {
            public uint TimeLow;

            public ushort TimeMid;

            public ushort TimeHiAndVersion;

            public byte ClockSeqHiAndReserved;

            public byte ClockSeqLow;

            public byte Node0;

            public byte Node1;

            public byte Node2;

            public byte Node3;

            public byte Node4;

            public byte Node5;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct MLUUIDBytes
        {
            private static readonly int[] hyphenIndices = new int[] { 8, 13, 18, 23 };

            [MarshalAs(UnmanagedType.ByValArray, SizeConst = 16)]
            public byte[] Data;

            public static bool operator ==(MLUUIDBytes one, MLUUIDBytes two)
            {
                if (one.Data.Length != two.Data.Length)
                    return false;

                for (int i = 0; i < one.Data.Length; ++i)
                {
                    if (one.Data[i] != two.Data[i])
                        return false;
                }

                return true;
            }

            public static bool operator !=(MLUUIDBytes one, MLUUIDBytes two)
            {
                return !(one == two);
            }

            public override bool Equals(object obj)
            {
                if (obj is MLUUIDBytes)
                {
                    var rhs = (MLUUIDBytes)obj;
                    return this == rhs;
                }

                return false;
            }

            public override int GetHashCode() => this.Data[0].GetHashCode();

            public override string ToString()
            {
                string idString = string.Empty;

                foreach (byte b in this.Data)
                    idString += string.Format("{0:x2}", b);

                foreach (int i in hyphenIndices)
                    idString = idString.Insert(i, "-");

                return idString;
            }

            internal MLUUIDBytes(string id)
            {
                id = id.Replace("-", string.Empty);
                this.Data = StringToByteArray(id);
            }

            private static byte[] StringToByteArray(string hex)
            {
                int numChars = hex.Length;
                byte[] bytes = new byte[numChars / 2];
                for (int i = 0; i < numChars; i += 2)
                    bytes[i / 2] = Convert.ToByte(hex.Substring(i, 2), 16);
                return bytes;
            }
        }

        [Serializable]
        [StructLayout(LayoutKind.Sequential)]
        public struct MLCoordinateFrameUID
        {
            public ulong First;

            public ulong Second;

            public static MLCoordinateFrameUID EmptyFrame
            {
                get
                {
                    return new MLCoordinateFrameUID();
                }
            }

            public MLCoordinateFrameUID(ulong first, ulong second)
            {
                First = first;
                Second = second;
            }

            public MLCoordinateFrameUID(Guid guid)
            {
                First = 0;
                Second = 0;
                FromGuid(guid);
            }

            public MLCoordinateFrameUID(string guidString)
            {
                First = 0;
                Second = 0;
                Guid guid;

                if (Guid.TryParse(guidString, out guid))
                {
                    FromGuid(guid);
                }
            }

            public static bool operator ==(MLCoordinateFrameUID one, MLCoordinateFrameUID two)
            {
                return one.First == two.First && one.Second == two.Second;
            }

            public static bool operator !=(MLCoordinateFrameUID one, MLCoordinateFrameUID two)
            {
                return !(one == two);
            }

            public override bool Equals(object obj)
            {
                if (obj is MLCoordinateFrameUID)
                {
                    var rhs = (MLCoordinateFrameUID)obj;
                    return this == rhs;
                }

                return false;
            }

            public override int GetHashCode()
            {
                return this.First.GetHashCode();
            }

            public override string ToString()
            {
                return this.ToGuid().ToString();
            }

            public Guid ToGuid()
            {
                byte[] toConvert = BitConverter.GetBytes(this.First);
                byte[] newSecond = BitConverter.GetBytes(this.Second);
                FlipGuidComponents(toConvert);
                ulong newFirst = BitConverter.ToUInt64(toConvert, 0);

                return new Guid((int)(newFirst >> 32 & 0x00000000FFFFFFFF), (short)(newFirst >> 16 & 0x000000000000FFFF), (short)(newFirst & 0x000000000000FFFF), newSecond);
            }

            public void FromGuid(Guid guid)
            {
                byte[] guidBytes = guid.ToByteArray();

                byte[] arrayInt = new byte[4];
                Array.Copy(guidBytes, arrayInt, 4);
                int firstPart = (int)BitConverter.ToUInt32(arrayInt, 0);

                byte[] arrayShort = new byte[2];
                Array.Copy(guidBytes, 4, arrayShort, 0, 2);
                short secondPart = (short)BitConverter.ToUInt16(arrayShort, 0);

                Array.Copy(guidBytes, 6, arrayShort, 0, 2);
                short thirdPart = (short)BitConverter.ToUInt16(arrayShort, 0);

                ulong first = ((ulong)firstPart << 32) + ((ulong)secondPart << 16) + (ulong)thirdPart;

                byte[] firstBytes = BitConverter.GetBytes(first);
                FlipGuidComponents(firstBytes);

                Second = BitConverter.ToUInt64(guidBytes, 8);
                First = BitConverter.ToUInt64(firstBytes, 0);
            }

            public void FromString(string guidString)
            {
                Guid guid;

                if (Guid.TryParse(guidString, out guid))
                {
                    FromGuid(guid);
                }
            }

            public void FromULongPair(ulong first, ulong second)
            {
                First = first;
                Second = second;
            }

            private static void FlipGuidComponents(byte[] bytes)
            {
                if (BitConverter.IsLittleEndian)
                {
                    Array.Reverse(bytes);
                }
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct MLPose
        {
            public MLTransform Transform;

            public bool HasDerivatives;

            public MLVec3f LinearVelocity;

            public MLVec3f LinearAcceleration;

            public MLVec3f AngularVelocity;

            public MLVec3f AngularAcceleration;

            public long OriginTimeNs;

            public long PredictTimeNs;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct MLSnapshotStaticData
        {
            UInt32 version;

            MLCoordinateFrameUID CoordWorldOrigin;

            public static MLSnapshotStaticData Init()
            {
                return new MLSnapshotStaticData()
                {
                    version = 1u,
                };
            }
        }

    }
}
```




