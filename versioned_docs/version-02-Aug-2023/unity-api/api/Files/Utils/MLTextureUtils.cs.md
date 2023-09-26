---

title: MLTextureUtils.cs

---


# MLTextureUtils.cs









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
    using UnityEngine;
    using UnityEngine.XR.MagicLeap;

    public static class MLTextureUtils
    {
        public static byte[] ConvertToByteArray(Texture2D texture, out int numChannels)
        {
            byte[] encodedImage = null;
            numChannels = 0;

            // [1] Convert the unity texture to RGBA pixel format (if needed).
            // For a pixel at (x,y) the channel c data of that pixels is at the position
            // given by [(width * y + x)*channels + c].
            if (TextureFormat.DXT1 == texture.format)
            {
                Color32[] colorArray = texture.GetPixels32();
                numChannels = Marshal.SizeOf(typeof(Color32));
                int totalBytes = numChannels * colorArray.Length;
                encodedImage = new byte[totalBytes];
                GCHandle handle = default(GCHandle);
                try
                {
                    handle = GCHandle.Alloc(colorArray, GCHandleType.Pinned);
                    IntPtr ptr = handle.AddrOfPinnedObject();
                    Marshal.Copy(ptr, encodedImage, 0, totalBytes);
                }
                finally
                {
                    if (handle != default(GCHandle))
                    {
                        handle.Free();
                    }
                }
            }
            else if (TextureFormat.RGBA32 == texture.format)
            {
                numChannels = 4;
                encodedImage = texture.GetRawTextureData();
            }
            else if (TextureFormat.RGB24 == texture.format)
            {
                numChannels = 3;
                encodedImage = texture.GetRawTextureData();
            }
            else
            {
                MLPluginLog.Error("MLTextureUtils.ConvertToByteArray failed to convert to byte array. Reason: unsupported format. Use RGBA32, RGB24 or DXT1 format when importing textures.");
                return encodedImage;
            }

            // [2] Convert to coorindate frame used by Magic Leap OS
            // Unity texture origin in bottom left, but Magic Leap OS is expecting top left to be the origin.
            int rowLength = texture.width * numChannels;
            var rowTemp = new byte[rowLength];
            for (var i = 0; i < texture.height / 2; i++)
            {
                Buffer.BlockCopy(encodedImage, i * rowLength, rowTemp, 0, rowLength);
                Buffer.BlockCopy(encodedImage, (texture.height - i - 1) * rowLength, encodedImage, i * rowLength, rowLength);
                Buffer.BlockCopy(rowTemp, 0, encodedImage, (texture.height - i - 1) * rowLength, rowLength);
            }

            return encodedImage;
        }
    }
}
```




