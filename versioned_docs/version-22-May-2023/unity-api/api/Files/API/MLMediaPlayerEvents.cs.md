---

title: MLMediaPlayerEvents.cs

---


# MLMediaPlayerEvents.cs









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
  public partial class MLMedia
  {
    public partial class Player
    {
      public delegate void OnMediaPlayerGeneralDelegate(MLMedia.Player mediaPlayer);

      public delegate void OnDRMTrackInfoDelegate(MLMedia.Player mediaPlayer, MLMedia.Player.Track.DRM.Info trackDRMInfo);

      public delegate void OnTrackSelectedDelegate(MLMedia.Player mediaPlayer, Track selectedTrack);

      public delegate void OnTrackFoundDelegate(MLMedia.Player mediaPlayer, Track track);

      public delegate void OnCaptionsTextDelegate(MLMedia.Player mediaPlayer, string text);

      public delegate void OnVideoSizeChangedDelegate(MLMedia.Player mediaPlayer, int width, int height);

      public delegate void OnErrorDelegate(MLMedia.Player mediaPlayer, MLResult.Code errorCode);

      public delegate void OnTimedTextUpdateDelegate(MLMedia.Player mediaPlayer, ulong timedText);

      public delegate void OnInfoDelegate(MLMedia.Player mediaPlayer, MLMedia.Player.Info info);

      public delegate void OnBufferingUpdateDelegate(MLMedia.Player mediaPlayer, float percent);

      public event OnMediaPlayerGeneralDelegate OnPlay = delegate { };

      public event OnMediaPlayerGeneralDelegate OnPause = delegate { };

      public event OnMediaPlayerGeneralDelegate OnStop = delegate { };

      public event OnTrackFoundDelegate OnTrackFound = delegate { };

      public event OnTrackSelectedDelegate OnTrackSelected = delegate { };

      public event OnDRMTrackInfoDelegate OnDRMTrackInfo = delegate { };

      public event OnCaptionsTextDelegate OnCEA608 = delegate { };

      public event OnCaptionsTextDelegate OnCEA708 = delegate { };

      public event OnCaptionsTextDelegate OnTimedText = delegate { };

      public event OnMediaPlayerGeneralDelegate OnMediaSubtitleUpdate = delegate { };

      public event OnMediaPlayerGeneralDelegate OnFrameAvailable = delegate { };

      public event OnVideoSizeChangedDelegate OnVideoSizeChanged = delegate { };

      public event OnMediaPlayerGeneralDelegate OnFramePacking = delegate { };

      public event OnInfoDelegate OnInfo = delegate { };

      public event OnMediaPlayerGeneralDelegate OnPrepared = delegate { };

      public event OnBufferingUpdateDelegate OnBufferingUpdate = delegate { };

      public event OnMediaPlayerGeneralDelegate OnCompletion = delegate { };

      public event OnErrorDelegate OnError = delegate { };

      public event OnMediaPlayerGeneralDelegate OnSeekComplete = delegate { };

      public event OnMediaPlayerGeneralDelegate OnResetComplete = delegate { };
    }
  }
}
```




