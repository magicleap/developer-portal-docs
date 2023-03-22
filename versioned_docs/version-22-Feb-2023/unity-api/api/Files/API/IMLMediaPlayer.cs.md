---

title: IMLMediaPlayer.cs

---


# IMLMediaPlayer.cs









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

namespace UnityEngine.XR.MagicLeap
{
    public interface IMLMediaPlayer
    {
        public bool IsPlaying { get; }

        MLResult SetSourceURI(string source);

        MLResult SetSourcePath(string source);

        MLResult Play();

        MLResult Pause();

        MLResult Stop();

        MLResult Resume();

        MLResult Seek(int positionSeconds, MLMedia.Player.SeekMode seekMode);

        MLResult SetVolume(float vol);

        MLResult SetLooping(bool loop);

        int GetDurationMilliseconds();

        int GetPositionMilliseconds();

        int GetWidth();

        int GetHeight();
    }
}
```




