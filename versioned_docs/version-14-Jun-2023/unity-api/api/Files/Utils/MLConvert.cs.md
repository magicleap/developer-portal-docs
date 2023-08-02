---

title: MLConvert.cs

---


# MLConvert.cs









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
    using System.Globalization;
    using System.IO;
    using System.Runtime.InteropServices;
    using System.Runtime.Serialization.Formatters.Binary;
    using System.Text;
    using UnityEngine;
    using UnityEngine.XR.MagicLeap;

    public static class MLConvert
    {
        public static readonly float[] IdentityMatrixColMajor = { 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 };

        public static Vector3 ToUnity(Vector3 vec, bool transformToRUF = true) => new Vector3(vec.x, vec.y, (transformToRUF) ? -vec.z : vec.z);

        public static Vector3 ToUnity(MagicLeapNativeBindings.MLVec3f vec, bool transformToRUF = true) => ToUnity(vec.X, vec.Y, vec.Z, transformToRUF);


        public static Vector2 ToUnity(MagicLeapNativeBindings.MLVec2f vec, bool transformToRUF = true) => ToUnity(vec.X, vec.Y, 0, transformToRUF);
        public static Vector3 ToUnity(float x, float y, float z, bool transformToRUF = true) => new Vector3(x, y, transformToRUF ? -z : z);

        public static Quaternion ToUnity(MagicLeapNativeBindings.MLQuaternionf quat, bool transformToRUF = true) => new Quaternion(quat.X, quat.Y, transformToRUF ? -quat.Z : quat.Z, transformToRUF ? -quat.W : quat.W);


        public static Quaternion ToUnity(Quaternion quat, bool transformToRUF = true)
        {
            if (transformToRUF)
            {
                quat.z = -quat.z;
                quat.w = -quat.w;
            }
            return quat;
        }

        public static Matrix4x4 ToUnity(MagicLeapNativeBindings.MLMat4f mat)
        {
            return FloatsToMat(mat.MatrixColmajor);
        }

        public static Matrix4x4 ToUnity(MagicLeapNativeBindings.MLTransform transform, bool transformToRUF = true)
        {
            Vector3 position = ToUnity(transform.Position, transformToRUF);
            Quaternion rotation = ToUnity(transform.Rotation, transformToRUF);

            return Matrix4x4.TRS(position, rotation, Vector3.one);
        }

        public static Guid ToUnity(MagicLeapNativeBindings.MLUUID uuid)
        {
            return new Guid(uuid.TimeLow, uuid.TimeMid, uuid.TimeHiAndVersion, uuid.ClockSeqHiAndReserved, uuid.ClockSeqLow, uuid.Node0, uuid.Node1, uuid.Node2, uuid.Node3, uuid.Node4, uuid.Node5);
        }

        public static MagicLeapNativeBindings.MLTransform FromUnity(Matrix4x4 mat, bool transformFromRUF = true)
        {
            MagicLeapNativeBindings.MLTransform transform = new MagicLeapNativeBindings.MLTransform();

            transform.Position = FromUnity(GetPositionFromTransformMatrix(mat), transformFromRUF);
            transform.Rotation = FromUnity(GetRotationFromTransformMatrix(mat), transformFromRUF);

            return transform;
        }

        public static void FromUnity(Matrix4x4 mat, ref float[] matrixColMajor)
        {
            for (int i = 0; i < 16; ++i)
            {
                matrixColMajor[i] = mat[i];
            }
        }

        public static MagicLeapNativeBindings.MLVec3f FromUnity(Vector3 vec, bool transformFromRUF = true)
        {
            if (transformFromRUF)
            {
                vec.z = -vec.z;
            }


            MagicLeapNativeBindings.MLVec3f outVec = new MagicLeapNativeBindings.MLVec3f();
            outVec.X = vec.x;
            outVec.Y = vec.y;
            outVec.Z = vec.z;

            return outVec;
        }

        public static MagicLeapNativeBindings.MLQuaternionf FromUnity(Quaternion quat, bool transformFromRUF = true)
        {
            MagicLeapNativeBindings.MLQuaternionf outQuat = new MagicLeapNativeBindings.MLQuaternionf();

            outQuat.X = quat.x;
            outQuat.Y = quat.y;

            if (transformFromRUF)
            {
                outQuat.Z = -quat.z;
                outQuat.W = -quat.w;
            }
            else
            {
                outQuat.Z = quat.z;
                outQuat.W = quat.w;
            }

            return outQuat;
        }

        public static MagicLeapNativeBindings.MLUUID FromUnity(Guid guid)
        {
            MagicLeapNativeBindings.MLUUID result = new MagicLeapNativeBindings.MLUUID();
            string guidString = guid.ToString("N");

            result.TimeLow = uint.Parse(guidString.Substring(0, 8), NumberStyles.HexNumber);
            result.TimeMid = ushort.Parse(guidString.Substring(8, 4), NumberStyles.HexNumber);
            result.TimeHiAndVersion = ushort.Parse(guidString.Substring(12, 4), NumberStyles.HexNumber);
            result.ClockSeqHiAndReserved = byte.Parse(guidString.Substring(16, 2), NumberStyles.HexNumber);
            result.ClockSeqLow = byte.Parse(guidString.Substring(18, 2), NumberStyles.HexNumber);
            result.Node0 = byte.Parse(guidString.Substring(20, 2), NumberStyles.HexNumber);
            result.Node1 = byte.Parse(guidString.Substring(22, 2), NumberStyles.HexNumber);
            result.Node2 = byte.Parse(guidString.Substring(24, 2), NumberStyles.HexNumber);
            result.Node3 = byte.Parse(guidString.Substring(26, 2), NumberStyles.HexNumber);
            result.Node4 = byte.Parse(guidString.Substring(28, 2), NumberStyles.HexNumber);
            result.Node5 = byte.Parse(guidString.Substring(30, 2), NumberStyles.HexNumber);

            return result;
        }

        public static Vector3 GetPositionFromTransformMatrix(Matrix4x4 transformMatrix)
        {
            return transformMatrix.GetColumn(3);
        }

        public static Quaternion GetRotationFromTransformMatrix(Matrix4x4 transformMatrix)
        {
            return Quaternion.LookRotation(transformMatrix.GetColumn(2), transformMatrix.GetColumn(1));
        }

        public static byte[] ToUTF8Snipped(string inString, int snipLength)
        {
            int snipSize = Math.Min(inString.Length, snipLength);
            int size = Encoding.UTF8.GetByteCount(inString.Substring(0, snipSize));

            while (snipSize >= 0 && size > snipLength)
            {
                size -= Encoding.UTF8.GetByteCount(inString.Substring(snipSize - 1, 1));
                --snipSize;
            }

            return Encoding.UTF8.GetBytes(inString.Substring(0, snipSize));
        }

        public static string DecodeAscii(byte[] buffer)
        {
            int count = Array.IndexOf<byte>(buffer, 0, 0);

            if (count < 0)
            {
                count = buffer.Length;
            }

            return Encoding.ASCII.GetString(buffer, 0, count);
        }

        public static string DecodeUTF8(byte[] buffer)
        {
            int count = Array.IndexOf<byte>(buffer, 0, 0);

            if (count < 0)
            {
                count = buffer.Length;
            }

            return Encoding.UTF8.GetString(buffer, 0, count);
        }

        public static IntPtr EncodeToUnmanagedUTF8(string s)
        {
            int length = Encoding.UTF8.GetByteCount(s);
            byte[] buffer = new byte[length + 1];

            Encoding.UTF8.GetBytes(s, 0, s.Length, buffer, 0);

            IntPtr nativeUtf8 = Marshal.AllocHGlobal(buffer.Length);

            Marshal.Copy(buffer, 0, nativeUtf8, buffer.Length);

            return nativeUtf8;
        }

        public static byte[] EncodeUTF8(string decodedString)
        {
            return Encoding.UTF8.GetBytes(decodedString);
        }

        public static string DecodeUTF8(IntPtr nativeString, int maximumSize = -1)
        {
            if (nativeString == IntPtr.Zero)
            {
                return string.Empty;
            }

            int byteLength = 0;

            if (maximumSize > 0)
            {
                while (Marshal.ReadByte(nativeString, byteLength) != 0)
                {
                    ++byteLength;
                    if (byteLength == maximumSize)
                    {
                        break;
                    }
                }
            }
            else
            {
                while (Marshal.ReadByte(nativeString, byteLength) != 0)
                {
                    ++byteLength;
                }
            }

            if (byteLength == 0)
            {
                return string.Empty;
            }

            byte[] buffer = new byte[byteLength];
            Marshal.Copy(nativeString, buffer, 0, buffer.Length);

            return Encoding.UTF8.GetString(buffer);
        }

        public static string DecodeUTF16BE(byte[] nativeArray)
        {
            return Encoding.BigEndianUnicode.GetString(nativeArray);
        }

        public static string DecodeUTF16LE(byte[] nativeArray)
        {
            return Encoding.Unicode.GetString(nativeArray);
        }

        public static byte[] ObjectToByteArray<T>(T obj)
        {
            BinaryFormatter bf = new BinaryFormatter();

            using (var ms = new MemoryStream())
            {
                bf.Serialize(ms, obj);
                return ms.ToArray();
            }
        }

        public static object ByteArrayToObject(byte[] byteArray)
        {
            using (var memStream = new MemoryStream())
            {
                var binForm = new BinaryFormatter();
                memStream.Write(byteArray, 0, byteArray.Length);
                memStream.Seek(0, SeekOrigin.Begin);
                var obj = binForm.Deserialize(memStream);
                return obj;
            }
        }

        public static void FlipTransformMatrixVertically(float[] frameTransformMatColMajor)
        {
            /*
            Using the matrix provided by MLNativeSurfaceGetFrameTransformationMatrix() directly renders
            the video upside down. Multiply it with the following matrix to flip it and render with the
            right orientation in Vulkan -

            | 1  0   0  0 |
            | 0  -1  0  1 |
            | 0  0   1  0 |
            | 0  0   0  1 |

            The multiplication result in this -

            | m00  -m01  m02  m03 + m01 |
            | m10  -m11  m12  m13 + m11 |
            | m20  -m21  m22  m23 + m21 |
            | m30  -m31  m32  m33 + m32 |
            */

            for (int i = 12; i <= 15; ++i)
            {
                frameTransformMatColMajor[i] += frameTransformMatColMajor[i - 8];
            }

            for (int i = 4; i <= 7; ++i)
            {
                frameTransformMatColMajor[i] = -1 * frameTransformMatColMajor[i];
            }
        }

        public static void FlipTransformMatrixHorizontally(float[] frameTransformMatColMajor)
        {
            /*
            Multiply with the following matrix to flip horizontally -

            | -1 0  0  1 |
            | 0  1  0  0 |
            | 0  0  1  0 |
            | 0  0  0  1 |

            The multiplication result in this -

            | -m00  m01  m02  m03 + m00 |
            | -m10  m11  m12  m13 + m10 |
            | -m20  m21  m22  m23 + m20 |
            | -m30  m31  m32  m33 + m30 |
            */

            for (int i = 12; i <= 15; ++i)
            {
                frameTransformMatColMajor[i] += frameTransformMatColMajor[i - 12];
            }

            for (int i = 0; i <= 4; ++i)
            {
                frameTransformMatColMajor[i] = -1 * frameTransformMatColMajor[i];
            }
        }


        private static Matrix4x4 FloatsToMat(float[] vals)
        {
            Matrix4x4 mat = new Matrix4x4();

            for (int i = 0; i < 16; ++i)
            {
                mat[i] = vals[i];
            }

            return mat;
        }

        public static T[] MarshalUnmanagedArray<T>(IntPtr arrayPtr, int count)
        {
            T[] convertedArray = new T[count];
            int tSize = Marshal.SizeOf<T>();
            for (int i = 0; i < count; ++i)
            {
                convertedArray[i] = Marshal.PtrToStructure<T>((arrayPtr + (tSize * i)));
            }

            return convertedArray;
        }
    }
}
```



