---
id: media-codecs
title: Media Codecs
sidebar_position: 8
date: 05/05/2022
tags: [Features, Media Codecs, Video, Audio]
keywords: [Features, Media Codecs, Video, Audio]
---

This section includes information about the media codecs supported on the Magic Leap 2.

## Software Video Codecs and Features

| SW Video Codec | Encoder/Decoder | Features                  |
|----------------|-----------------|---------------------------|
| h263           | decoder         | 288p30 <br />Adaptive Playback  |
|                | encoder         | 144p                      |
| h264/avc       | decoder         | 4080p30 <br />Adaptive Playback |
|                | encoder         | 2048p <br />Intra Refresh       |
| h265/hevc      | decoder         | 4096p30 <br />Adaptive Playback |
| mpeg4          | decoder         | 288p30 <br />Adaptive Playback  |
|                | encoder         | 144p                      |
| vp8            | decoder         | 2160p30 <br />Adaptive Playback |
|                | encoder         | 2160p30 <br />VBR CBR           |
| vp9            | decoder         | 2160p30 <br />Adaptive Playback |
|                | encoder         | 2160p30 <br />VBR CBR           |

## Software Audio Codecs and Features

| SW Audio Codec | Encoder/Decoder | Features                                                        |
|----------------|-----------------|-----------------------------------------------------------------|
| aac            | decoder         | channel count: 8<br /> sample rates: 7350-48000 <br />bitrate: 8000-96000   |
|                | encoder         | channel count: 6 <br />sample rates: 8000-48000 <br />bitrate: 8000-960000  |
| ac3            | decoder         | channel count: 8 <br />sample rates: 8000-192000 <br />bitrate: 1-10000000  |
| amrnb          | decoder         | channel count: 1 <br />sample rates: 8000 <br />bitrate: 4750-12200         |
|                | encoder         | CBR channel count: 1 <br />sample rates: 8000 <br />bitrate: 4750-12200     |
| amrwb          | decoder         | channel count: 1 <br />sample rates: 16000 <br />bitrate: 6600-23850        |
|                | encoder         | CBR channel count: 1 <br />sample rates: 16000 <br />bitrate: 6600-23850    |
| flac           | decoder         | channel count: 8 <br />sample rates: 1-655350 <br />bitrate: 1-21000000     |
|                | encoder         | CQ channel count: 2 <br />sample rates: 1-655350 <br />bitrate: 1-21000000  |
| mp3            | decoder         | channel count: 2 <br />sample rates: 8000-48000 <br />bitrate: 8000-320000  |
| opus           | decoder         | channel count: 8 <br />sample rates: 48000 <br />bitrate: 6000-510000       |
| raw            | decoder         | channel count: 8 <br />sample rates: 8000-96000 <br />bitrate: 1-10000000   |
| vorbis         | decoder         | channel count: 8 <br />sample rates: 8000-96000 <br />bitrate: 32000-500000 |

:::note
Through *ffmpeg* we support *aac* and *ac3* SW decoders.
:::

:::info
All the Sample Rates: 7350, 8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000
:::

## AMD Hardware Codec Concurrency Support

### AMD Hardware Decoders

| Decoder  | Number of Streams supported            |
|----------|----------------------------------------|
| H.265    | (1x) 4K60fps (2x) 4K30fps (8x) 1080p30 |
| H.264    | (1x) 4K60fps (2x) 4K30fps (8x) 1080p30 |
| WEBM VP9 | (1x) 4K60fps (2x) 4K30fps (8x) 1080p30 |
| mpeg2    | (8x) 1080p30                           |

### AMD Hardware Encoders

| Encoder | Number of Streams supported            |
|---------|----------------------------------------|
| H.265   | (1x) 4K60fps (2x) 4K30fps (8x) 1080p30 |
| H.264   | (1x) 4K60fps (2x) 4K30fps (8x) 1080p30 |

### AMD Hardware Codecs

| Simultaneous Encoder/Decoder usage                                                  |
|-------------------------------------------------------------------------------------|
| (4x) encode/decode sessions of 1080p@30fps + (1x) encode/decode session of 4K@30fps |

