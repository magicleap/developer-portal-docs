---
id: android-capture-commands
title: Android Capture Commands
sidebar_position: 3
date: 08/17/2022
tags: [Android Debug Bridge, adb, command line, screen capture, screen record, capture]
keywords: [Android Debug Bridge, adb, command line, screen capture, screen record, capture]
---

# ADB Screen Capture Commands

The following list of adb commands provides you with options of screen capture modes available on the Magic Leap 2 headset.

To begin capturing your headset's display, connect the compute pack to your computer and run the following adb command inside your preferred CLI:

```shell
adb shell mlcapture
```

:::note
Starting from SDK 0.53.3, you can use the `mlcapture` tool's `-m`  flag to override the alpha value of content for screen captures!

For example:

```shell
adb shell mlcapture video -t <capture_length> -m <alpha_value> /data/local/tmp/<filename>.mp4
```

Note that you can provide an alpha value between 0.0 and 1.0 (where 0.0 is default behavior and 1.0 is fully opaque alpha) so feel free to play around with it.
:::

Then you can use the following commands to specify your capture options:

## List of Capture Commands

The following list can also be accessed via `adb shell mlcapture --help` command when your device is turned on and plugged into your computer.

```shell
Usage: capture image [-c (real|virtual|mixed)] [-q (1080p|720p|4k)] [-r (9:10|4:3)] [-b (alpha|additive|hybrid)]
                     [-l (off|auto|incandescent|fluorescent|daylight|cloudy|twilight|shade)]
                     [-e <index>] [-m <val>] [-n <val>] (-s | <dest-file.jpg>)
       capture video [-c (real|virtual|mixed)] [-q (1080p|720p|4k)] [-r (9:10|4:3)] [-b (alpha|additive|hybrid)]
                     [-l (off|auto|incandescent|fluorescent|daylight|cloudy|twilight|shade)]
                     [-e <index>] [-m <val>] [-n <val>] [-a (voice|world|virtual|mixed)] [-d]
                     (-f <cnt> | -t <sec> | -w) (-s | <dest-file.mp4>)
       capture raw   [-l (off|auto|incandescent|fluorescent|daylight|cloudy|twilight|shade)]
                     [-b (alpha|additive|hybrid)] [-e <index>] [-m <val>] [-n <val>] (-f <cnt> | -t <sec> | -w)
              -b: <type>    Blend type (default is Hybrid)
                  Alpha:    Uses virtual image alpha to blend the virtual and camera content. 1.0 results in
                            fully opaque virtual content and 0.0 results in completely transparent virtual
                            content. This option is best suited when content is using segmented dimmer as
                            alpha channel is reused for the alpha blending.
                  Additive: Ignores alpha and blends the virtual and camera content purely based on colors. The
                            virtual content in the resulting blend does not look as solid as in alpha blend
                            with high alpha values but is best when the user can not control the alpha channel.
                  Hybrid:   Acts as alpha mode when virtual content alpha value is greater than 0.0 and less
                            than or equal to 1.0 and it falls back to Additive blending when alpha equals 0.0.
                            This mode is best suited when the content mixes both segmented dimmer and 
                            non segmented dimer content.
              -c: <type>    Capture type (default is mixed)
              -e: <index>   exposure compensation index for camera frames.
                            Default is 0 (auto exposure), Valid Range is [-9,9].
              -l: <preset>  WhiteBalance preset for camera frames.
                            Valid values are off|auto|incandescent|fluorescent|daylight|cloudy|twilight|shade
              -m: <val>     Alpha Override. Default is 0.0 which means no-override. Valid Range is [0.0, 1.0].
                            Overrides the virtual image alpha value for all non black pixels to the specified
                            value. This only has an effect in alpha and hybrid blending modes. This is best
                            when the user desires virtual content to look more opaque but has no control over
                            the content alpha. Note that the override value is applied identically to all
                            non black pixels.
              -n: <val>     Tint value applied on camera frames. Default is 0.4, Valid Range is [0.0, 1.0].
              -q: <quality> Resolution to capture with (default is 1080p)
              -s:           Stream result to stdout (without -s, destination file must be specified)
           options for video and raw capture:
              -f <cnt>:     Number of frames to record
              -t <time>:    Time in seconds to record. Can be floating point number (e.g., 1.5)
              -w:           Record until something is entered on the keyboard
           options for video capture only:
              -a:           Audio recording type (default is mixed)
              -d:           Use digital video stabilization

```

## Example Captures

Where `myscreenshot.jpg` or `myscreencast.mp4` can be replaced with any path to a specified location on your computer.

#### Mixed reality, 1080P

```shell
adb exec-out mlcapture image -s > myscreenshot.jpg
```

#### RGB camera only, 720P

```shell
adb exec-out mlcapture image -s -c real -q 720p > myscreenshot.jpg
```

#### Five seconds of mixed reality, 1080P

```shell
adb exec-out mlcapture video -s -t 5 > myscreencast.mp4
```

#### 60 frames of virtual content only, 720P

```shell
adb exec-out mlcapture video -s -c virtual -f 60 -q 720p > myscreencast.mp4
```

## Producing a file on the device

If you're wondering what the `-s` option is for in the commands above, it tells the mlcapture program to stream the media file out to `stdout`. This allows you to use adb's `exec-out` command to produce the file on your PC, instead of on the device. This saves you from having to run a second adb command (pull) to download the file to your PC. But this approach comes with one downside: if there is an error in the capture process, you won't see the reason printed on the console. So, if you're running into issues, your best bet is to try without -s, as follows:

```shell
adb shell mlcapture video -t 5 /sdcard/myscreencast.mp4
adb pull /sdcard/myscreencast.mp4
```

## Split Mode

```shell
adb shell mlcapture raw
```

- In this mode, the camera and the virtual content is kept separated instead of blended. This composition mode results in a frame in RGBA color space of 1440x2160 resolution  with a stride of 5888.
- The top half contains the virtual content and the bottom half contains the camera content.
- This mode is best suited for expert users who desire to customize the blending process in post-processing.
- In this mode, mlcapture will write individual frames in separate files with .rgba extension under /data/local/tmp.
- Under light to medium system load, user should be able to achieve 25 FPS or more.

