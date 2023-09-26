---
title: ml_media_codeclist.h

---

# ml_media_codeclist.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md)**  |
| struct | **[MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md)** <br></br>Used to store the list of codec profile levels.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) | **[MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodeclistqueryresults)**  |
| typedef struct [MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) | **[MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#struct-mlmediacodeclistprofilelevel)** <br></br>Used to store the list of codec profile levels.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[MLMediaCodecListCodecTypeFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag)** <br></br> { <br></br>[MLMediaCodecListCodecTypeFlag_Software](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeclistcodectypeflag-software) = 1 << 0,<br></br> [MLMediaCodecListCodecTypeFlag_Hardware](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeclistcodectypeflag-hardware) = 1 << 1,<br></br> [MLMediaCodecListCodecTypeFlag_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeclistcodectypeflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecListCapabilityFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag)** <br></br> { <br></br>[MLMediaCodecListCapabilityFlag_AdaptivePlayback](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeclistcapabilityflag-adaptiveplayback) = 1 << 0,<br></br> [MLMediaCodecListCapabilityFlag_SecurePlayback](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeclistcapabilityflag-secureplayback) = 1 << 1,<br></br> [MLMediaCodecListCapabilityFlag_TunneledPlayback](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeclistcapabilityflag-tunneledplayback) = 1 << 2,<br></br> [MLMediaCodecListCapabilityFlag_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeclistcapabilityflag-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLMediaCodecColorFormat](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeccolorformat)** <br></br> { <br></br>[MLMediaCodecColorFormat_Unused](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-unused) = 0,<br></br> [MLMediaCodecColorFormat_Monochrome](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-monochrome) = 1,<br></br> [MLMediaCodecColorFormat_8BitRGB332](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-8bitrgb332) = 2,<br></br> [MLMediaCodecColorFormat_12BitRGB444](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-12bitrgb444) = 3,<br></br> [MLMediaCodecColorFormat_16BitARGB4444](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-16bitargb4444) = 4,<br></br> [MLMediaCodecColorFormat_16BitARGB1555](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-16bitargb1555) = 5,<br></br> [MLMediaCodecColorFormat_16BitRGB565](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-16bitrgb565) = 6,<br></br> [MLMediaCodecColorFormat_16BitBGR565](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-16bitbgr565) = 7,<br></br> [MLMediaCodecColorFormat_18BitRGB666](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-18bitrgb666) = 8,<br></br> [MLMediaCodecColorFormat_18BitARGB1665](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-18bitargb1665) = 9,<br></br> [MLMediaCodecColorFormat_19BitARGB1666](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-19bitargb1666) = 10,<br></br> [MLMediaCodecColorFormat_24BitRGB888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-24bitrgb888) = 11,<br></br> [MLMediaCodecColorFormat_24BitBGR888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-24bitbgr888) = 12,<br></br> [MLMediaCodecColorFormat_24BitARGB1887](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-24bitargb1887) = 13,<br></br> [MLMediaCodecColorFormat_25BitARGB1888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-25bitargb1888) = 14,<br></br> [MLMediaCodecColorFormat_32BitBGRA8888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-32bitbgra8888) = 15,<br></br> [MLMediaCodecColorFormat_32BitARGB8888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-32bitargb8888) = 16,<br></br> [MLMediaCodecColorFormat_YUV411Planar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv411planar) = 17,<br></br> [MLMediaCodecColorFormat_YUV411PackedPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv411packedplanar) = 18,<br></br> [MLMediaCodecColorFormat_YUV420Planar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv420planar) = 19,<br></br> [MLMediaCodecColorFormat_YUV420PackedPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv420packedplanar) = 20,<br></br> [MLMediaCodecColorFormat_YUV420SemiPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv420semiplanar) = 21,<br></br> [MLMediaCodecColorFormat_YUV422Planar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv422planar) = 22,<br></br> [MLMediaCodecColorFormat_YUV422PackedPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv422packedplanar) = 23,<br></br> [MLMediaCodecColorFormat_YUV422SemiPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv422semiplanar) = 24,<br></br> [MLMediaCodecColorFormat_YCbYCr](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-ycbycr) = 25,<br></br> [MLMediaCodecColorFormat_YCrYCb](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-ycrycb) = 26,<br></br> [MLMediaCodecColorFormat_CbYCrY](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-cbycry) = 27,<br></br> [MLMediaCodecColorFormat_CrYCbY](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-crycby) = 28,<br></br> [MLMediaCodecColorFormat_YUV444Interleaved](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv444interleaved) = 29,<br></br> [MLMediaCodecColorFormat_RawBayer8Bit](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-rawbayer8bit) = 30,<br></br> [MLMediaCodecColorFormat_RawBayer10Bit](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-rawbayer10bit) = 31,<br></br> [MLMediaCodecColorFormat_RawBayer8Bitcompressed](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-rawbayer8bitcompressed) = 32,<br></br> [MLMediaCodecColorFormat_L2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-l2) = 33,<br></br> [MLMediaCodecColorFormat_L4](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-l4) = 34,<br></br> [MLMediaCodecColorFormat_L8](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-l8) = 35,<br></br> [MLMediaCodecColorFormat_L16](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-l16) = 36,<br></br> [MLMediaCodecColorFormat_L24](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-l24) = 37,<br></br> [MLMediaCodecColorFormat_L32](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-l32) = 38,<br></br> [MLMediaCodecColorFormat_YUV420PackedSemiPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv420packedsemiplanar),<br></br> [MLMediaCodecColorFormat_YUV422PackedSemiPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv422packedsemiplanar),<br></br> [MLMediaCodecColorFormat_18BitBGR666](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-18bitbgr666),<br></br> [MLMediaCodecColorFormat_24BitARGB6666](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-24bitargb6666),<br></br> [MLMediaCodecColorFormat_24BitABGR6666](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-24bitabgr6666),<br></br> [MLMediaCodecColorFormat_KhronosExtensions](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-khronosextensions) = 0x6F000000,<br></br> [MLMediaCodecColorFormat_VendorStartUnused](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-vendorstartunused) = 0x7F000000,<br></br> [MLMediaCodecColorFormat_AndroidOpaque](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-androidopaque) = 0x7F000789,<br></br> [MLMediaCodecColorFormat_32BitRGBA8888](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-32bitrgba8888) = 0x7F00A000,<br></br> [MLMediaCodecColorFormat_YUV420Flexible](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv420flexible) = 0x7F420888,<br></br> [MLMediaCodecColorFormat_YUV420Planar16](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv420planar16) = 0x7F42016B,<br></br> [MLMediaCodecColorFormat_YUV444Y410](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-yuv444y410) = 0x7F444AAA,<br></br> [MLMediaCodecColorFormat_TIYUV420PackedSemiPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-tiyuv420packedsemiplanar) = 0x7F000100,<br></br> [MLMediaCodecColorFormat_QCOMYVU420SemiPlanar](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-qcomyvu420semiplanar) = 0x7FA30C00,<br></br> [MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar64x32Tile2m8ka](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-qcomyuv420packedsemiplanar64x32tile2m8ka) = 0x7FA30C03,<br></br> [MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar32m](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-qcomyuv420packedsemiplanar32m) = 0x7FA30C04,<br></br> [MLMediaCodecColorFormat_SECNV12Tiled](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-secnv12tiled) = 0x7FC00002,<br></br> [MLMediaCodecColorFormat_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodeccolorformat-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining possible uncompressed image/video formats.  |
| enum | **[MLMediaCodecPriority](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecpriority)** <br></br> { <br></br>[MLMediaCodecPriority_RealTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecpriority-realtime) = 0,<br></br> [MLMediaCodecPriority_NonRealTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecpriority-nonrealtime) = 1,<br></br> [MLMediaCodecPriority_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecpriority-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining the Codec priority.  |
| enum | **[MLMediaCodecIntraRefreshMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecintrarefreshmode)** <br></br> { <br></br>[MLMediaCodecIntraRefreshMode_Cyclic](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecintrarefreshmode-cyclic) = 0,<br></br> [MLMediaCodecIntraRefreshMode_Adaptive](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecintrarefreshmode-adaptive) = 1,<br></br> [MLMediaCodecIntraRefreshMode_Both](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecintrarefreshmode-both) = 2,<br></br> [MLMediaCodecIntraRefreshMode_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecintrarefreshmode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration of possible methods to use for Intra Refresh.  |
| enum | **[MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode)** <br></br> { <br></br>[MLMediaCodecBitrateMode_CQ](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecbitratemode-cq) = 0,<br></br> [MLMediaCodecBitrateMode_VBR](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecbitratemode-vbr) = 1,<br></br> [MLMediaCodecBitrateMode_CBR](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecbitratemode-cbr) = 2,<br></br> [MLMediaCodecBitrateMode_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecbitratemode-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining Codec Bitrate modes.  |
| enum | **[MLMediaCodecProfileType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecprofiletype)** <br></br> { <br></br>[MLMediaCodecProfileType_H263Baseline](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263baseline) = 0x01,<br></br> [MLMediaCodecProfileType_H263H320Coding](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263h320coding) = 0x02,<br></br> [MLMediaCodecProfileType_H263BackwardCompatible](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263backwardcompatible) = 0x04,<br></br> [MLMediaCodecProfileType_H263ISWV2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263iswv2) = 0x08,<br></br> [MLMediaCodecProfileType_H263ISWV3](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263iswv3) = 0x10,<br></br> [MLMediaCodecProfileType_H263HighCompression](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263highcompression) = 0x20,<br></br> [MLMediaCodecProfileType_H263Internet](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263internet) = 0x40,<br></br> [MLMediaCodecProfileType_H263Interlace](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263interlace) = 0x80,<br></br> [MLMediaCodecProfileType_H263HighLatency](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-h263highlatency) = 0x100,<br></br> [MLMediaCodecProfileType_MPEG2Simple](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg2simple) = 0,<br></br> [MLMediaCodecProfileType_MPEG2Main](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg2main) = 1,<br></br> [MLMediaCodecProfileType_MPEG2422](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg2422) = 2,<br></br> [MLMediaCodecProfileType_MPEG2SNR](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg2snr) = 3,<br></br> [MLMediaCodecProfileType_MPEG2Spatial](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg2spatial) = 4,<br></br> [MLMediaCodecProfileType_MPEG2High](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg2high) = 5,<br></br> [MLMediaCodecProfileType_MPEG4Simple](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4simple) = 0x01,<br></br> [MLMediaCodecProfileType_MPEG4SimpleScalable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4simplescalable) = 0x02,<br></br> [MLMediaCodecProfileType_MPEG4Core](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4core) = 0x04,<br></br> [MLMediaCodecProfileType_MPEG4Main](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4main) = 0x08,<br></br> [MLMediaCodecProfileType_MPEG4Nbit](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4nbit) = 0x10,<br></br> [MLMediaCodecProfileType_MPEG4ScalableTexture](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4scalabletexture) = 0x20,<br></br> [MLMediaCodecProfileType_MPEG4SimpleFace](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4simpleface) = 0x40,<br></br> [MLMediaCodecProfileType_MPEG4SimpleFBA](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4simplefba) = 0x80,<br></br> [MLMediaCodecProfileType_MPEG4BasicAnimated](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4basicanimated) = 0x100,<br></br> [MLMediaCodecProfileType_MPEG4Hybrid](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4hybrid) = 0x200,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedRealTime](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4advancedrealtime) = 0x400,<br></br> [MLMediaCodecProfileType_MPEG4CoreScalable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4corescalable) = 0x800,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedCoding](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4advancedcoding) = 0x1000,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedCore](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4advancedcore) = 0x2000,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedScalable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4advancedscalable) = 0x4000,<br></br> [MLMediaCodecProfileType_MPEG4AdvancedSimple](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-mpeg4advancedsimple) = 0x8000,<br></br> [MLMediaCodecProfileType_AVCBaseline](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-avcbaseline) = 0x01,<br></br> [MLMediaCodecProfileType_AVCMain](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-avcmain) = 0x02,<br></br> [MLMediaCodecProfileType_AVCExtended](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-avcextended) = 0x04,<br></br> [MLMediaCodecProfileType_AVCHigh](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-avchigh) = 0x08,<br></br> [MLMediaCodecProfileType_AVCHigh10](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-avchigh10) = 0x10,<br></br> [MLMediaCodecProfileType_AVCHigh422](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-avchigh422) = 0x20,<br></br> [MLMediaCodecProfileType_AVCHigh444](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-avchigh444) = 0x40,<br></br> [MLMediaCodecProfileType_VP8Main](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp8main) = 0x01,<br></br> [MLMediaCodecProfileType_VP90](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp90) = 0x01,<br></br> [MLMediaCodecProfileType_VP91](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp91) = 0x02,<br></br> [MLMediaCodecProfileType_VP92](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp92) = 0x04,<br></br> [MLMediaCodecProfileType_VP93](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp93) = 0x08,<br></br> [MLMediaCodecProfileType_VP92HDR](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp92hdr) = 0x1000,<br></br> [MLMediaCodecProfileType_VP93HDR](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp93hdr) = 0x2000,<br></br> [MLMediaCodecProfileType_VP92HDR10Plus](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp92hdr10plus) = 0x4000,<br></br> [MLMediaCodecProfileType_VP93HDR10Plus](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-vp93hdr10plus) = 0x8000,<br></br> [MLMediaCodecProfileType_HEVCMain](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-hevcmain) = 0x01,<br></br> [MLMediaCodecProfileType_HEVCMain10](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-hevcmain10) = 0x02,<br></br> [MLMediaCodecProfileType_HEVCMainStill](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-hevcmainstill) = 0x04,<br></br> [MLMediaCodecProfileType_HEVCMain10HDR10](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-hevcmain10hdr10) = 0x1000,<br></br> [MLMediaCodecProfileType_HEVCMain10HDR10Plus](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-hevcmain10hdr10plus) = 0x2000,<br></br> [MLMediaCodecProfileType_AACObjectNull](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjectnull) = 0,<br></br> [MLMediaCodecProfileType_AACObjectMain](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjectmain) = 1,<br></br> [MLMediaCodecProfileType_AACObjectLC](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjectlc) = 2,<br></br> [MLMediaCodecProfileType_AACObjectSS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjectss) = 3,<br></br> [MLMediaCodecProfileType_AACObjectLTP](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjectltp) = 4,<br></br> [MLMediaCodecProfileType_AACObjectHE](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjecthe) = 5,<br></br> [MLMediaCodecProfileType_AACObjectScalable](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjectscalable) = 6,<br></br> [MLMediaCodecProfileType_AACObjectERLC](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjecterlc) = 17,<br></br> [MLMediaCodecProfileType_AACObjectLD](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjectld) = 23,<br></br> [MLMediaCodecProfileType_AACObjectHE_PS](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-aacobjecthe-ps) = 29,<br></br> [MLMediaCodecProfileType_WMAProfileUnused](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-wmaprofileunused) = 0,<br></br> [MLMediaCodecProfileType_WMAProfileL1](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-wmaprofilel1) = 1,<br></br> [MLMediaCodecProfileType_WMAProfileL2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-wmaprofilel2) = 2,<br></br> [MLMediaCodecProfileType_WMAProfileL3](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-wmaprofilel3) = 3,<br></br> [MLMediaCodecProfileType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecprofiletype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining Codec profile types.  |
| enum | **[MLMediaCodecLevelType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecleveltype)** <br></br> { <br></br>[MLMediaCodecLevelType_H263Level10](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-h263level10) = 0x01,<br></br> [MLMediaCodecLevelType_H263Level20](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-h263level20) = 0x02,<br></br> [MLMediaCodecLevelType_H263Level30](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-h263level30) = 0x04,<br></br> [MLMediaCodecLevelType_H263Level40](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-h263level40) = 0x08,<br></br> [MLMediaCodecLevelType_H263Level45](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-h263level45) = 0x10,<br></br> [MLMediaCodecLevelType_H263Level50](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-h263level50) = 0x20,<br></br> [MLMediaCodecLevelType_H263Level60](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-h263level60) = 0x40,<br></br> [MLMediaCodecLevelType_H263Level70](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-h263level70) = 0x80,<br></br> [MLMediaCodecLevelType_MPEG2LevelLL](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg2levelll) = 0,<br></br> [MLMediaCodecLevelType_MPEG2LevelML](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg2levelml) = 1,<br></br> [MLMediaCodecLevelType_MPEG2LevelH14](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg2levelh14) = 2,<br></br> [MLMediaCodecLevelType_MPEG2LevelHL](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg2levelhl) = 3,<br></br> [MLMediaCodecLevelType_MPEG4Level0](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg4level0) = 0x01,<br></br> [MLMediaCodecLevelType_MPEG4Level0b](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg4level0b) = 0x02,<br></br> [MLMediaCodecLevelType_MPEG4Level1](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg4level1) = 0x04,<br></br> [MLMediaCodecLevelType_MPEG4Level2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg4level2) = 0x08,<br></br> [MLMediaCodecLevelType_MPEG4Level3](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg4level3) = 0x10,<br></br> [MLMediaCodecLevelType_MPEG4Level4](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg4level4) = 0x20,<br></br> [MLMediaCodecLevelType_MPEG4Level4a](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg4level4a) = 0x40,<br></br> [MLMediaCodecLevelType_MPEG4Level5](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-mpeg4level5) = 0x80,<br></br> [MLMediaCodecLevelType_AVCLevel1](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel1) = 0x01,<br></br> [MLMediaCodecLevelType_AVCLevel1b](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel1b) = 0x02,<br></br> [MLMediaCodecLevelType_AVCLevel11](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel11) = 0x04,<br></br> [MLMediaCodecLevelType_AVCLevel12](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel12) = 0x08,<br></br> [MLMediaCodecLevelType_AVCLevel13](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel13) = 0x10,<br></br> [MLMediaCodecLevelType_AVCLevel2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel2) = 0x20,<br></br> [MLMediaCodecLevelType_AVCLevel21](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel21) = 0x40,<br></br> [MLMediaCodecLevelType_AVCLevel22](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel22) = 0x80,<br></br> [MLMediaCodecLevelType_AVCLevel3](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel3) = 0x100,<br></br> [MLMediaCodecLevelType_AVCLevel31](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel31) = 0x200,<br></br> [MLMediaCodecLevelType_AVCLevel32](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel32) = 0x400,<br></br> [MLMediaCodecLevelType_AVCLevel4](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel4) = 0x800,<br></br> [MLMediaCodecLevelType_AVCLevel41](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel41) = 0x1000,<br></br> [MLMediaCodecLevelType_AVCLevel42](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel42) = 0x2000,<br></br> [MLMediaCodecLevelType_AVCLevel5](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel5) = 0x4000,<br></br> [MLMediaCodecLevelType_AVCLevel51](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-avclevel51) = 0x8000,<br></br> [MLMediaCodecLevelType_VP8LevelVersion0](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp8levelversion0) = 0x01,<br></br> [MLMediaCodecLevelType_VP8LevelVersion1](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp8levelversion1) = 0x02,<br></br> [MLMediaCodecLevelType_VP8LevelVersion2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp8levelversion2) = 0x04,<br></br> [MLMediaCodecLevelType_VP8LevelVersion3](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp8levelversion3) = 0x08,<br></br> [MLMediaCodecLevelType_VP9Level1](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level1) = 0x1,<br></br> [MLMediaCodecLevelType_VP9Level11](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level11) = 0x2,<br></br> [MLMediaCodecLevelType_VP9Level2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level2) = 0x4,<br></br> [MLMediaCodecLevelType_VP9Level21](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level21) = 0x8,<br></br> [MLMediaCodecLevelType_VP9Level3](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level3) = 0x10,<br></br> [MLMediaCodecLevelType_VP9Level31](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level31) = 0x20,<br></br> [MLMediaCodecLevelType_VP9Level4](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level4) = 0x40,<br></br> [MLMediaCodecLevelType_VP9Level41](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level41) = 0x80,<br></br> [MLMediaCodecLevelType_VP9Level5](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level5) = 0x100,<br></br> [MLMediaCodecLevelType_VP9Level51](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level51) = 0x200,<br></br> [MLMediaCodecLevelType_VP9Level52](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level52) = 0x400,<br></br> [MLMediaCodecLevelType_VP9Level6](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level6) = 0x800,<br></br> [MLMediaCodecLevelType_VP9Level61](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level61) = 0x1000,<br></br> [MLMediaCodecLevelType_VP9Level62](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-vp9level62) = 0x2000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel1](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel1) = 0x1,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel1](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel1) = 0x2,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel2) = 0x4,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel2](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel2) = 0x8,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel21](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel21) = 0x10,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel21](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel21) = 0x20,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel3](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel3) = 0x40,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel3](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel3) = 0x80,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel31](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel31) = 0x100,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel31](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel31) = 0x200,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel4](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel4) = 0x400,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel4](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel4) = 0x800,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel41](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel41) = 0x1000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel41](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel41) = 0x2000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel5](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel5) = 0x4000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel5](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel5) = 0x8000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel51](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel51) = 0x10000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel51](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel51) = 0x20000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel52](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel52) = 0x40000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel52](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel52) = 0x80000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel6](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel6) = 0x100000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel6](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel6) = 0x200000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel61](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel61) = 0x400000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel61](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel61) = 0x800000,<br></br> [MLMediaCodecLevelType_HEVCMainTierLevel62](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevcmaintierlevel62) = 0x1000000,<br></br> [MLMediaCodecLevelType_HEVCHighTierLevel62](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-hevchightierlevel62) = 0x2000000,<br></br> [MLMediaCodecLevelType_Ensure32Bits](/versioned_docs/version-31-Aug-2023/api-ref/api/Files/ml__media__codeclist_8h.md#enums-mlmediacodecleveltype-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Enumeration defining Codec Level types.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListCountCodecs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcountcodecs)**(uint64_t * out_codec_count)<br></br>Obtain the number of available codecs.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsSoftwareCodec](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistissoftwarecodec)**(const char * codec_name, bool * out_val)<br></br>Determine whether a codec is a software codec.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetMatchingCodecs](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetmatchingcodecs)**(const char * mime, bool is_encoder, [MLMediaCodecListCodecTypeFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag) flag, [MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * out_matching_codecs)<br></br>Obtain a list of matching codecs for a given codec mime.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetCodecByType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecbytype)**(const char * type, bool is_encoder, uint64_t start_index, int64_t * out_index)<br></br>Obtain the codec matching the given codec type from the codec list.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetCodecByName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecbyname)**(const char * name, int64_t * out_index)<br></br>Obtain the codec from the codec matching the given codec name from the codec list.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsEncoder](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisencoder)**(uint64_t index, bool * out_val)<br></br>Confirm whether a component is an Encoder or Decoder.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetCodecName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcodecname)**(uint64_t index, char * out_name)<br></br>Obtain a codec name.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSupportedMimes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedmimes)**(uint64_t index, [MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * out_supported_mimes)<br></br>Obtain the list of mime types supported by a codec.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetCapabilityFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcapabilityflag)**(uint64_t index, const char * mime, [MLMediaCodecListCapabilityFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag) * out_capability_flag)<br></br>Obtain the capability flag for a codec.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSecureCodecName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsecurecodecname)**(const char * mime, bool is_decoder, char * out_name)<br></br>Obtain the name of a secure codec for the given mime type.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListQueryResultsRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistqueryresultsrelease)**([MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * query_results)<br></br>Release the query results.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSupportedProfileLevels](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels)**(uint64_t index, const char * mime, [MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) ** out_profile_levels, size_t * out_profile_levels_size)<br></br>Obtain the supported profile levels for a codec.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListProfileLevelsRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistprofilelevelsrelease)**([MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) * profile_levels)<br></br>Release profile levels.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSupportedColorFormats](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedcolorformats)**(uint64_t index, const char * mime, uint32_t ** out_color_formats, size_t * out_color_formats_size)<br></br>Obtain the supported color formats for a codec. All the supported color formats are defined by MLMediaCodecColorFormat.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListColorFormatsRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcolorformatsrelease)**(uint32_t * color_formats)<br></br>Release color formats.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListGetSupportedBitrateModes](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedbitratemodes)**(uint64_t index, const char * mime, [MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode) ** out_bitrate_modes, size_t * out_bitrate_modes_size)<br></br>Obtain the supported bitrate modes for a codec.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecBitrateModesRelease](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecbitratemodesrelease)**([MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode) * bitrate_modes)<br></br>Release Bitrate modes.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsAdaptivePlaybackSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisadaptiveplaybacksupported)**(uint64_t index, const char * mime, bool * out_supported)<br></br>Check whether Adaptive playback is supported.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsSecurePlaybackSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistissecureplaybacksupported)**(uint64_t index, const char * mime, bool * out_supported)<br></br>Check whether Secure playback is supported.  |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLMediaCodecListIsIntraRefreshSupported](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistisintrarefreshsupported)**(uint64_t index, const char * mime, bool * out_supported)<br></br>Check whether Intra Refresh is supported.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAX_CODEC_NAME_LENGTH](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-length)**  |

## Enums Documentation

### MLMediaCodecListCodecTypeFlag {#enums-mlmediacodeclistcodectypeflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecListCodecTypeFlag_Software |  1 << 0| Software. |
| MLMediaCodecListCodecTypeFlag_Hardware |  1 << 1| Hardware. |
| MLMediaCodecListCodecTypeFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |




Bit mask for specifying the type of codec being queried using [MLMediaCodecListGetMatchingCodecs()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetmatchingcodecs). 





-----------

### MLMediaCodecListCapabilityFlag {#enums-mlmediacodeclistcapabilityflag}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecListCapabilityFlag_AdaptivePlayback |  1 << 0| Adaptive playback. |
| MLMediaCodecListCapabilityFlag_SecurePlayback |  1 << 1| Secure playback. |
| MLMediaCodecListCapabilityFlag_TunneledPlayback |  1 << 2| Tunneled playback. |
| MLMediaCodecListCapabilityFlag_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |




Bit mask for checking the capability of a codec after queried via [MLMediaCodecListGetCapabilityFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetcapabilityflag). 





-----------

### MLMediaCodecColorFormat {#enums-mlmediacodeccolorformat}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecColorFormat_Unused |  0| Unused: Placeholder value when format is N/A. |
| MLMediaCodecColorFormat_Monochrome |  1| Monochrome: black and white. |
| MLMediaCodecColorFormat_8BitRGB332 |  2| 8BitRGB332: Red 7:5, Green 4:2, Blue 1:0. |
| MLMediaCodecColorFormat_12BitRGB444 |  3| 12BitRGB444: Red 11:8, Green 7:4, Blue 3:0. |
| MLMediaCodecColorFormat_16BitARGB4444 |  4| 16BitARGB4444: Alpha 15:12, Red 11:8, Green 7:4, Blue 3:0. |
| MLMediaCodecColorFormat_16BitARGB1555 |  5| 16BitARGB1555: Alpha 15, Red 14:10, Green 9:5, Blue 4:0. |
| MLMediaCodecColorFormat_16BitRGB565 |  6| 16BitRGB565: Red 15:11, Green 10:5, Blue 4:0. |
| MLMediaCodecColorFormat_16BitBGR565 |  7| 16BitBGR565: Blue 15:11, Green 10:5, Red 4:0. |
| MLMediaCodecColorFormat_18BitRGB666 |  8| 18BitRGB666: Red 17:12, Green 11:6, Blue 5:0. |
| MLMediaCodecColorFormat_18BitARGB1665 |  9| 18BitARGB1665: Alpha 17, Red 16:11, Green 10:5, Blue 4:0. |
| MLMediaCodecColorFormat_19BitARGB1666 |  10| 19BitARGB1666: Alpha 18, Red 17:12, Green 11:6, Blue 5:0. |
| MLMediaCodecColorFormat_24BitRGB888 |  11| 24BitRGB888: Red 24:16, Green 15:8, Blue 7:0. |
| MLMediaCodecColorFormat_24BitBGR888 |  12| 24BitBGR888: Blue 24:16, Green 15:8, Red 7:0. |
| MLMediaCodecColorFormat_24BitARGB1887 |  13| 24BitARGB1887: Alpha 23, Red 22:15, Green 14:7, Blue 6:0. |
| MLMediaCodecColorFormat_25BitARGB1888 |  14| 25BitARGB1888: Alpha 24, Red 23:16, Green 15:8, Blue 7:0. |
| MLMediaCodecColorFormat_32BitBGRA8888 |  15| 32BitBGRA8888: Blue 31:24, Green 23:16, Red 15:8, Alpha 7:0. |
| MLMediaCodecColorFormat_32BitARGB8888 |  16| 32BitARGB8888: Alpha 31:24, Red 23:16, Green 15:8, Blue 7:0. |
| MLMediaCodecColorFormat_YUV411Planar |  17| YUV411Planar: U,Y are subsampled by a factor of 4 horizontally. |
| MLMediaCodecColorFormat_YUV411PackedPlanar |  18| YUV411PackedPlanar: packed per payload in planar slices. |
| MLMediaCodecColorFormat_YUV420Planar |  19| YUV420Planar: Three arrays Y,U,V. |
| MLMediaCodecColorFormat_YUV420PackedPlanar |  20| YUV420PackedPlanar: packed per payload in planar slices. |
| MLMediaCodecColorFormat_YUV420SemiPlanar |  21| YUV420SemiPlanar: Two arrays, one is all Y, the other is U and V. |
| MLMediaCodecColorFormat_YUV422Planar |  22| YUV422Planar: Three arrays Y,U,V. |
| MLMediaCodecColorFormat_YUV422PackedPlanar |  23| YUV422PackedPlanar: packed per payload in planar slices. |
| MLMediaCodecColorFormat_YUV422SemiPlanar |  24| YUV422SemiPlanar: Two arrays, one is all Y, the other is U and V. |
| MLMediaCodecColorFormat_YCbYCr |  25| YCbYCr: Organized as 16Bit YUYV (i.e. YCbYCr). |
| MLMediaCodecColorFormat_YCrYCb |  26| YCrYCb: Organized as 16Bit YVYU (i.e. YCrYCb). |
| MLMediaCodecColorFormat_CbYCrY |  27| CbYCrY: Organized as 16Bit UYVY (i.e. CbYCrY). |
| MLMediaCodecColorFormat_CrYCbY |  28| CrYCbY: Organized as 16Bit VYUY (i.e. CrYCbY). |
| MLMediaCodecColorFormat_YUV444Interleaved |  29| YUV444Interleaved: Each pixel contains equal parts YUV. |
| MLMediaCodecColorFormat_RawBayer8Bit |  30| RawBayer8Bit: SMIA camera output format. |
| MLMediaCodecColorFormat_RawBayer10Bit |  31| RawBayer10Bit: SMIA camera output format. |
| MLMediaCodecColorFormat_RawBayer8Bitcompressed |  32| RawBayer8Bitcompressed: SMIA camera output format. |
| MLMediaCodecColorFormat_L2 |  33| Deprecated. Use MLMediaCodecColorFormat_L8. |
| MLMediaCodecColorFormat_L4 |  34| Deprecated. Use MLMediaCodecColorFormat_L8. |
| MLMediaCodecColorFormat_L8 |  35| 8 Bits per pixel Y color format. |
| MLMediaCodecColorFormat_L16 |  36| 16 Bits per pixel, little-endian Y color format. |
| MLMediaCodecColorFormat_L24 |  37| Deprecated. Use MLMediaCodecColorFormat_L16. |
| MLMediaCodecColorFormat_L32 |  38| Deprecated. Use MLMediaCodecColorFormat_L16. |
| MLMediaCodecColorFormat_YUV420PackedSemiPlanar | | YUV420PackedSemiPlanar. |
| MLMediaCodecColorFormat_YUV422PackedSemiPlanar | | YUV422PackedSemiPlanar. |
| MLMediaCodecColorFormat_18BitBGR666 | | 18BitBGR666. |
| MLMediaCodecColorFormat_24BitARGB6666 | | 24BitARGB6666. |
| MLMediaCodecColorFormat_24BitABGR6666 | | 24BitABGR6666. |
| MLMediaCodecColorFormat_KhronosExtensions |  0x6F000000| Reserved region for introducing Khronos Standard Extensions. |
| MLMediaCodecColorFormat_VendorStartUnused |  0x7F000000| Reserved region for introducing Vendor Extensions. |
| MLMediaCodecColorFormat_AndroidOpaque |  0x7F000789| Reserved android opaque color format. Tells the encoder that the actual color format will be relayed by the Graphics memory allocator Buffers. |
| MLMediaCodecColorFormat_32BitRGBA8888 |  0x7F00A000| 32BitRGBA8888. |
| MLMediaCodecColorFormat_YUV420Flexible |  0x7F420888| Flexible 8-bit YUV format. Codec should report this format as being supported if it supports any YUV420 packed planar or semiplanar formats. When port is set to use this format, codec can substitute any YUV420 packed planar or semiplanar format for it. |
| MLMediaCodecColorFormat_YUV420Planar16 |  0x7F42016B| 10-bit or 12-bit YUV format, LSB-justified (0's on higher bits). |
| MLMediaCodecColorFormat_YUV444Y410 |  0x7F444AAA| Packed 10-bit YUV444 representation that includes 2 bits of alpha. Each pixel is 32-bit. Bits 0-9 contain the U sample, bits 10-19 contain the Y sample, bits 20-29 contain the V sample, and bits 30-31 contain the alpha value. |
| MLMediaCodecColorFormat_TIYUV420PackedSemiPlanar |  0x7F000100| TI's YUV420PackedSemiPlanar. |
| MLMediaCodecColorFormat_QCOMYVU420SemiPlanar |  0x7FA30C00| QCOM's YVU420SemiPlanar. |
| MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar64x32Tile2m8ka |  0x7FA30C03| QCOM's YUV420PackedSemiPlanar64x32Tile2m8ka. |
| MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar32m |  0x7FA30C04| QCOM's YUV420PackedSemiPlanar32m. |
| MLMediaCodecColorFormat_SECNV12Tiled |  0x7FC00002| SEC's NV12Tiled. |
| MLMediaCodecColorFormat_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining possible uncompressed image/video formats. 




**API Level:**
  * 9




-----------

### MLMediaCodecPriority {#enums-mlmediacodecpriority}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecPriority_RealTime |  0| Realtime priority. The codec shall support the given performance configuration (e.g. framerate) at realtime. This should only be used by media playback, capture, and possibly by realtime communication scenarios if best effort performance is not suitable. |
| MLMediaCodecPriority_NonRealTime |  1| Non-realtime priority (best effort). |
| MLMediaCodecPriority_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining the Codec priority. 




**API Level:**
  * 9




-----------

### MLMediaCodecIntraRefreshMode {#enums-mlmediacodecintrarefreshmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecIntraRefreshMode_Cyclic |  0| Cyclic. |
| MLMediaCodecIntraRefreshMode_Adaptive |  1| Adaptive. |
| MLMediaCodecIntraRefreshMode_Both |  2| Both. |
| MLMediaCodecIntraRefreshMode_Ensure32Bits |  0x7FFFFFFF| |



Enumeration of possible methods to use for Intra Refresh. 




**API Level:**
  * 9




-----------

### MLMediaCodecBitrateMode {#enums-mlmediacodecbitratemode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecBitrateMode_CQ |  0| Constant quality mode. |
| MLMediaCodecBitrateMode_VBR |  1| Variable bitrate mode. |
| MLMediaCodecBitrateMode_CBR |  2| Constant bitrate mode. |
| MLMediaCodecBitrateMode_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining Codec Bitrate modes. 




**API Level:**
  * 9




-----------

### MLMediaCodecProfileType {#enums-mlmediacodecprofiletype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecProfileType_H263Baseline |  0x01| H263 Baseline Profile: H.263 (V1), no optional modes. |
| MLMediaCodecProfileType_H263H320Coding |  0x02| H263 H.320 Coding Efficiency Backward Compatibility Profile: H.263+ (V2), includes annexes I, J, L.4 and T. |
| MLMediaCodecProfileType_H263BackwardCompatible |  0x04| H263 Backward Compatibility Profile: H.263 (V1), includes annex F. |
| MLMediaCodecProfileType_H263ISWV2 |  0x08| H263 Interactive Streaming Wireless Profile: H.263+ (V2), includes annexes I, J, K and T. |
| MLMediaCodecProfileType_H263ISWV3 |  0x10| H263 Interactive Streaming Wireless Profile: H.263++ (V3), includes profile 3 and annexes V and W.6.3.8. |
| MLMediaCodecProfileType_H263HighCompression |  0x20| H263 Conversational High Compression Profile: H.263++ (V3), includes profiles 1 & 2 and annexes D and U. |
| MLMediaCodecProfileType_H263Internet |  0x40| H263 Conversational Internet Profile: H.263++ (V3), includes profile 5 and annex K. |
| MLMediaCodecProfileType_H263Interlace |  0x80| H263 Conversational Interlace Profile: H.263++ (V3), includes profile 5 and annex W.6.3.11. |
| MLMediaCodecProfileType_H263HighLatency |  0x100| H263 High Latency Profile: H.263++ (V3), includes profile 6 and annexes O.1 and P.5. |
| MLMediaCodecProfileType_MPEG2Simple |  0| MPEG-2 Simple Profile. |
| MLMediaCodecProfileType_MPEG2Main |  1| MPEG-2 Main Profile. |
| MLMediaCodecProfileType_MPEG2422 |  2| MPEG-2 4:2:2 Profile. |
| MLMediaCodecProfileType_MPEG2SNR |  3| MPEG-2 SNR Profile. |
| MLMediaCodecProfileType_MPEG2Spatial |  4| MPEG-2 Spatial Profile. |
| MLMediaCodecProfileType_MPEG2High |  5| MPEG-2 High Profile. |
| MLMediaCodecProfileType_MPEG4Simple |  0x01| MPEG-4 Simple Profile, Levels 1-3. |
| MLMediaCodecProfileType_MPEG4SimpleScalable |  0x02| MPEG-4 Simple Scalable Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4Core |  0x04| MPEG-4 Core Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4Main |  0x08| MPEG-4 Main Profile, Levels 2-4. |
| MLMediaCodecProfileType_MPEG4Nbit |  0x10| MPEG-4 N-bit Profile, Level 2. |
| MLMediaCodecProfileType_MPEG4ScalableTexture |  0x20| MPEG-4 Scalable Texture Profile, Level 1. |
| MLMediaCodecProfileType_MPEG4SimpleFace |  0x40| MPEG-4 Simple Face Animation Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4SimpleFBA |  0x80| MPEG-4 Simple Face and Body Animation (FBA) Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4BasicAnimated |  0x100| MPEG-4 Basic Animated Texture Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4Hybrid |  0x200| MPEG-4 Hybrid Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4AdvancedRealTime |  0x400| MPEG-4 Advanced Real Time Simple Profiles, Levels 1-4. |
| MLMediaCodecProfileType_MPEG4CoreScalable |  0x800| MPEG-4 Core Scalable Profile, Levels 1-3. |
| MLMediaCodecProfileType_MPEG4AdvancedCoding |  0x1000| MPEG-4 Advanced Coding Efficiency Profile, Levels 1-4. |
| MLMediaCodecProfileType_MPEG4AdvancedCore |  0x2000| MPEG-4 Advanced Core Profile, Levels 1-2. |
| MLMediaCodecProfileType_MPEG4AdvancedScalable |  0x4000| MPEG-4 Advanced Scalable Texture, Levels 2-3. |
| MLMediaCodecProfileType_MPEG4AdvancedSimple |  0x8000| MPEG-4 Advanced Simple. |
| MLMediaCodecProfileType_AVCBaseline |  0x01| AVC Baseline profile. |
| MLMediaCodecProfileType_AVCMain |  0x02| AVC Main profile. |
| MLMediaCodecProfileType_AVCExtended |  0x04| AVC Extended profile. |
| MLMediaCodecProfileType_AVCHigh |  0x08| AVC High profile. |
| MLMediaCodecProfileType_AVCHigh10 |  0x10| AVC High 10 profile. |
| MLMediaCodecProfileType_AVCHigh422 |  0x20| AVC High 4:2:2 profile. |
| MLMediaCodecProfileType_AVCHigh444 |  0x40| AVC High 4:4:4 profile. |
| MLMediaCodecProfileType_VP8Main |  0x01| VP8 Main profile. |
| MLMediaCodecProfileType_VP90 |  0x01| VP9 Profile 0 4:2:0 8-bit. |
| MLMediaCodecProfileType_VP91 |  0x02| VP9 Profile 1 4:2:2 8-bit. |
| MLMediaCodecProfileType_VP92 |  0x04| VP9 Profile 2 4:2:0 10-bit. |
| MLMediaCodecProfileType_VP93 |  0x08| VP9 Profile 3 4:2:2 10-bit. |
| MLMediaCodecProfileType_VP92HDR |  0x1000| VP9 Profile 2 4:2:0 10-bit HDR. |
| MLMediaCodecProfileType_VP93HDR |  0x2000| VP9 Profile 3 4:2:2 10-bit HDR. |
| MLMediaCodecProfileType_VP92HDR10Plus |  0x4000| VP9 Profile 2 4:2:0 10-bit HDR10Plus. |
| MLMediaCodecProfileType_VP93HDR10Plus |  0x8000| VP9 Profile 3 4:2:2 10-bit HDR10Plus. |
| MLMediaCodecProfileType_HEVCMain |  0x01| HEVC Main profile. |
| MLMediaCodecProfileType_HEVCMain10 |  0x02| HEVC Main 1.0 profile. |
| MLMediaCodecProfileType_HEVCMainStill |  0x04| HEVC Main Still profile. |
| MLMediaCodecProfileType_HEVCMain10HDR10 |  0x1000| HEVC Main HDR profile. |
| MLMediaCodecProfileType_HEVCMain10HDR10Plus |  0x2000| HEVC Main HDR+ profile. |
| MLMediaCodecProfileType_AACObjectNull |  0| AAC Null, not used. |
| MLMediaCodecProfileType_AACObjectMain |  1| AAC Main object. |
| MLMediaCodecProfileType_AACObjectLC |  2| AAC Low Complexity object (AAC profile). |
| MLMediaCodecProfileType_AACObjectSS |  3| AAC Scalable Sample Rate object. |
| MLMediaCodecProfileType_AACObjectLTP |  4| AAC Long Term Prediction object. |
| MLMediaCodecProfileType_AACObjectHE |  5| AAC High Efficiency (object type SBR, HE-AAC profile). |
| MLMediaCodecProfileType_AACObjectScalable |  6| AAC Scalable object. |
| MLMediaCodecProfileType_AACObjectERLC |  17| ER AAC Low Complexity object (Error Resilient AAC-LC). |
| MLMediaCodecProfileType_AACObjectLD |  23| AAC Low Delay object (Error Resilient). |
| MLMediaCodecProfileType_AACObjectHE_PS |  29| AAC High Efficiency with Parametric Stereo coding (HE-AAC v2, object type PS). |
| MLMediaCodecProfileType_WMAProfileUnused |  0| WMA profile unused or unknown . |
| MLMediaCodecProfileType_WMAProfileL1 |  1| WMA version 9 profile L1. |
| MLMediaCodecProfileType_WMAProfileL2 |  2| WMA version 9 profile L2. |
| MLMediaCodecProfileType_WMAProfileL3 |  3| WMA version 9 profile L3. |
| MLMediaCodecProfileType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining Codec profile types. 

This is a consolidated list for all the codecs that support profiles. Each profile indicates support for various performance bounds and different annexes.



:::note
A codec may not support all the profiles and levels listed below. For any given codec, the supported profiles and levels can be queried using [MLMediaCodecListGetSupportedProfileLevels](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels).
:::


**API Level:**
  * 9




-----------

### MLMediaCodecLevelType {#enums-mlmediacodecleveltype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLMediaCodecLevelType_H263Level10 |  0x01| H263 Level 1.0. |
| MLMediaCodecLevelType_H263Level20 |  0x02| H263 Level 2.0. |
| MLMediaCodecLevelType_H263Level30 |  0x04| H263 Level 3.0. |
| MLMediaCodecLevelType_H263Level40 |  0x08| H263 Level 4.0. |
| MLMediaCodecLevelType_H263Level45 |  0x10| H263 Level 4.5. |
| MLMediaCodecLevelType_H263Level50 |  0x20| H263 Level 5.0. |
| MLMediaCodecLevelType_H263Level60 |  0x40| H263 Level 6.0. |
| MLMediaCodecLevelType_H263Level70 |  0x80| H263 Level 7.0. |
| MLMediaCodecLevelType_MPEG2LevelLL |  0| MPEG-2 Low Level. |
| MLMediaCodecLevelType_MPEG2LevelML |  1| MPEG-2 Main Level. |
| MLMediaCodecLevelType_MPEG2LevelH14 |  2| MPEG-2 High 1440. |
| MLMediaCodecLevelType_MPEG2LevelHL |  3| MPEG-2 High Level. |
| MLMediaCodecLevelType_MPEG4Level0 |  0x01| MPEG-4 Level 0. |
| MLMediaCodecLevelType_MPEG4Level0b |  0x02| MPEG-4 Level 0b. |
| MLMediaCodecLevelType_MPEG4Level1 |  0x04| MPEG-4 Level 1. |
| MLMediaCodecLevelType_MPEG4Level2 |  0x08| MPEG-4 Level 2. |
| MLMediaCodecLevelType_MPEG4Level3 |  0x10| MPEG-4 Level 3. |
| MLMediaCodecLevelType_MPEG4Level4 |  0x20| MPEG-4 Level 4. |
| MLMediaCodecLevelType_MPEG4Level4a |  0x40| MPEG-4 Level 4a. |
| MLMediaCodecLevelType_MPEG4Level5 |  0x80| MPEG-4 Level 5. |
| MLMediaCodecLevelType_AVCLevel1 |  0x01| AVC Level 1. |
| MLMediaCodecLevelType_AVCLevel1b |  0x02| AVC Level 1.b. |
| MLMediaCodecLevelType_AVCLevel11 |  0x04| AVC Level 1.1. |
| MLMediaCodecLevelType_AVCLevel12 |  0x08| AVC Level 1.2. |
| MLMediaCodecLevelType_AVCLevel13 |  0x10| AVC Level 1.3. |
| MLMediaCodecLevelType_AVCLevel2 |  0x20| AVC Level 2. |
| MLMediaCodecLevelType_AVCLevel21 |  0x40| AVC Level 2.1. |
| MLMediaCodecLevelType_AVCLevel22 |  0x80| AVC Level 2.2. |
| MLMediaCodecLevelType_AVCLevel3 |  0x100| AVC Level 3. |
| MLMediaCodecLevelType_AVCLevel31 |  0x200| AVC Level 3.1. |
| MLMediaCodecLevelType_AVCLevel32 |  0x400| AVC Level 3.2. |
| MLMediaCodecLevelType_AVCLevel4 |  0x800| AVC Level 4. |
| MLMediaCodecLevelType_AVCLevel41 |  0x1000| AVC Level 4.1. |
| MLMediaCodecLevelType_AVCLevel42 |  0x2000| AVC Level 4.2. |
| MLMediaCodecLevelType_AVCLevel5 |  0x4000| AVC Level 5. |
| MLMediaCodecLevelType_AVCLevel51 |  0x8000| AVC Level 5.1. |
| MLMediaCodecLevelType_VP8LevelVersion0 |  0x01| VP8 Level version 0. |
| MLMediaCodecLevelType_VP8LevelVersion1 |  0x02| VP8 Level version 1. |
| MLMediaCodecLevelType_VP8LevelVersion2 |  0x04| VP8 Level version 2. |
| MLMediaCodecLevelType_VP8LevelVersion3 |  0x08| VP8 Level version 3. |
| MLMediaCodecLevelType_VP9Level1 |  0x1| VP9 Level 5.1. |
| MLMediaCodecLevelType_VP9Level11 |  0x2| VP9 Level 1.1. |
| MLMediaCodecLevelType_VP9Level2 |  0x4| VP9 Level 2. |
| MLMediaCodecLevelType_VP9Level21 |  0x8| VP9 Level 2.1. |
| MLMediaCodecLevelType_VP9Level3 |  0x10| VP9 Level 3. |
| MLMediaCodecLevelType_VP9Level31 |  0x20| VP9 Level 3.1. |
| MLMediaCodecLevelType_VP9Level4 |  0x40| VP9 Level 4. |
| MLMediaCodecLevelType_VP9Level41 |  0x80| VP9 Level 4.1. |
| MLMediaCodecLevelType_VP9Level5 |  0x100| VP9 Level 5. |
| MLMediaCodecLevelType_VP9Level51 |  0x200| VP9 Level 5.1. |
| MLMediaCodecLevelType_VP9Level52 |  0x400| VP9 Level 5.2. |
| MLMediaCodecLevelType_VP9Level6 |  0x800| VP9 Level 6. |
| MLMediaCodecLevelType_VP9Level61 |  0x1000| VP9 Level 6.1. |
| MLMediaCodecLevelType_VP9Level62 |  0x2000| VP9 Level 6.2. |
| MLMediaCodecLevelType_HEVCMainTierLevel1 |  0x1| HEVC Main Level 1. |
| MLMediaCodecLevelType_HEVCHighTierLevel1 |  0x2| HEVC High Level 1. |
| MLMediaCodecLevelType_HEVCMainTierLevel2 |  0x4| HEVC Main Level 2. |
| MLMediaCodecLevelType_HEVCHighTierLevel2 |  0x8| HEVC High Level 2. |
| MLMediaCodecLevelType_HEVCMainTierLevel21 |  0x10| HEVC Main Level 2.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel21 |  0x20| HEVC High Level 2.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel3 |  0x40| HEVC Main Level 3. |
| MLMediaCodecLevelType_HEVCHighTierLevel3 |  0x80| HEVC High Level 3. |
| MLMediaCodecLevelType_HEVCMainTierLevel31 |  0x100| HEVC Main Level 3.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel31 |  0x200| HEVC High Level 3.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel4 |  0x400| HEVC Main Level 4. |
| MLMediaCodecLevelType_HEVCHighTierLevel4 |  0x800| HEVC High Level 4. |
| MLMediaCodecLevelType_HEVCMainTierLevel41 |  0x1000| HEVC Main Level 4.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel41 |  0x2000| HEVC High Level 4.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel5 |  0x4000| HEVC Main Level 5. |
| MLMediaCodecLevelType_HEVCHighTierLevel5 |  0x8000| HEVC High Level 5. |
| MLMediaCodecLevelType_HEVCMainTierLevel51 |  0x10000| HEVC Main Level 5.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel51 |  0x20000| HEVC High Level 5.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel52 |  0x40000| HEVC Main Level 5.2. |
| MLMediaCodecLevelType_HEVCHighTierLevel52 |  0x80000| HEVC High Level 5.2. |
| MLMediaCodecLevelType_HEVCMainTierLevel6 |  0x100000| HEVC Main Level 6. |
| MLMediaCodecLevelType_HEVCHighTierLevel6 |  0x200000| HEVC High Level 6. |
| MLMediaCodecLevelType_HEVCMainTierLevel61 |  0x400000| HEVC Main Level 6.1. |
| MLMediaCodecLevelType_HEVCHighTierLevel61 |  0x800000| HEVC High Level 6.1. |
| MLMediaCodecLevelType_HEVCMainTierLevel62 |  0x1000000| HEVC Main Level 6.2. |
| MLMediaCodecLevelType_HEVCHighTierLevel62 |  0x2000000| HEVC High Level 6.2. |
| MLMediaCodecLevelType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 Bits. |



Enumeration defining Codec Level types. 

This is a consolidated list for all the codecs that support profiles. Each level indicates support for various frame sizes, bit rates, decoder frame rates.



:::note
A codec may not support all the profiles and levels listed below. For any given codec, the supported profiles and levels can be queried using [MLMediaCodecListGetSupportedProfileLevels](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels).
:::


**API Level:**
  * 9




-----------


## Types Documentation

### MLMediaCodecListQueryResults {#struct-mlmediacodeclistqueryresults}

```cpp
typedef struct MLMediaCodecListQueryResults MLMediaCodecListQueryResults;
```


Used to store the list of available codec names or the list of supported mime types. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md)



-----------

### MLMediaCodecListProfileLevel {#struct-mlmediacodeclistprofilelevel}

```cpp
typedef struct MLMediaCodecListProfileLevel MLMediaCodecListProfileLevel;
```

Used to store the list of codec profile levels. 



[More Info](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md)


**API Level:**
  * 6




-----------


## Functions Documentation

### MLMediaCodecListCountCodecs {#mlresult-mlmediacodeclistcountcodecs}

```cpp
MLResult MLMediaCodecListCountCodecs(
    uint64_t * out_codec_count
)
```

Obtain the number of available codecs. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t * |out_codec_count|Number of available codecs.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListIsSoftwareCodec {#mlresult-mlmediacodeclistissoftwarecodec}

```cpp
MLResult MLMediaCodecListIsSoftwareCodec(
    const char * codec_name,
    bool * out_val
)
```

Determine whether a codec is a software codec. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |codec_name|Name of the codec. |
| bool * |out_val|Returns true if the codec is a software codec and false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetMatchingCodecs {#mlresult-mlmediacodeclistgetmatchingcodecs}

```cpp
MLResult MLMediaCodecListGetMatchingCodecs(
    const char * mime,
    bool is_encoder,
    MLMediaCodecListCodecTypeFlag flag,
    MLMediaCodecListQueryResults * out_matching_codecs
)
```

Obtain a list of matching codecs for a given codec mime. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime|Codec mime. |
| bool |is_encoder|Set to true if querying for encoder and false otherwise. |
| [MLMediaCodecListCodecTypeFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag) |flag|Whether querying for software-only or hardware-only, defined by [MLMediaCodecListCodecTypeFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcodectypeflag). |
| [MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * |out_matching_codecs|List of codecs supporting the given mime.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The memory used to store the list is maintained by the library. User shall call [MLMediaCodecListQueryResultsRelease()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistqueryresultsrelease) to release it.





-----------

### MLMediaCodecListGetCodecByType {#mlresult-mlmediacodeclistgetcodecbytype}

```cpp
MLResult MLMediaCodecListGetCodecByType(
    const char * type,
    bool is_encoder,
    uint64_t start_index,
    int64_t * out_index
)
```

Obtain the codec matching the given codec type from the codec list. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |type|Codec mime. |
| bool |is_encoder|Set to true if querying for encoder and false otherwise. |
| uint64_t |start_index|Index from which to search in the codec list. The number shall be between 0 and number of available codecs. |
| int64_t * |out_index|Index of the matching codec or -2.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetCodecByName {#mlresult-mlmediacodeclistgetcodecbyname}

```cpp
MLResult MLMediaCodecListGetCodecByName(
    const char * name,
    int64_t * out_index
)
```

Obtain the codec from the codec matching the given codec name from the codec list. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |name|Codec name. |
| int64_t * |out_index|Index of the matching codec or -2.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListIsEncoder {#mlresult-mlmediacodeclistisencoder}

```cpp
MLResult MLMediaCodecListIsEncoder(
    uint64_t index,
    bool * out_val
)
```

Confirm whether a component is an Encoder or Decoder. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| bool * |out_val|Returns true if the codec is an encoder and false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetCodecName {#mlresult-mlmediacodeclistgetcodecname}

```cpp
MLResult MLMediaCodecListGetCodecName(
    uint64_t index,
    char * out_name
)
```

Obtain a codec name. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| char * |out_name|Pointer to the user-maintained buffer for storing the output C-style name string.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_CODEC_NAME_LENGTH](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-length) bytes of memory for storing the output name string.





-----------

### MLMediaCodecListGetSupportedMimes {#mlresult-mlmediacodeclistgetsupportedmimes}

```cpp
MLResult MLMediaCodecListGetSupportedMimes(
    uint64_t index,
    MLMediaCodecListQueryResults * out_supported_mimes
)
```

Obtain the list of mime types supported by a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| [MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * |out_supported_mimes|List of supported mimes.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


The memory used to store the list is maintained by the library. User shall call [MLMediaCodecListQueryResultsRelease()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistqueryresultsrelease) to release it.





-----------

### MLMediaCodecListGetCapabilityFlag {#mlresult-mlmediacodeclistgetcapabilityflag}

```cpp
MLResult MLMediaCodecListGetCapabilityFlag(
    uint64_t index,
    const char * mime,
    MLMediaCodecListCapabilityFlag * out_capability_flag
)
```

Obtain the capability flag for a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| [MLMediaCodecListCapabilityFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag) * |out_capability_flag|Codec capability flag defined by [MLMediaCodecListCapabilityFlag](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodeclistcapabilityflag).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetSecureCodecName {#mlresult-mlmediacodeclistgetsecurecodecname}

```cpp
MLResult MLMediaCodecListGetSecureCodecName(
    const char * mime,
    bool is_decoder,
    char * out_name
)
```

Obtain the name of a secure codec for the given mime type. 

**Parameters**

|  |   |   |
|--|--|--|
| const char * |mime|Mime type of the codec. |
| bool |is_decoder|Set to true if querying for decoder and false otherwise. |
| char * |out_name|Pointer to the user-maintained buffer for storing the output C-style name string.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall allocate at least [MAX_CODEC_NAME_LENGTH](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#defines-max-codec-name-length) bytes of memory for storing the output name string.





-----------

### MLMediaCodecListQueryResultsRelease {#mlresult-mlmediacodeclistqueryresultsrelease}

```cpp
MLResult MLMediaCodecListQueryResultsRelease(
    MLMediaCodecListQueryResults * query_results
)
```

Release the query results. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecListQueryResults](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_query_results.md) * |query_results|Query results such as the list of codecs acquired by [MLMediaCodecListGetMatchingCodecs()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetmatchingcodecs) or the list of supported mime types acquired by [MLMediaCodecListGetSupportedMimes()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedmimes).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 






-----------

### MLMediaCodecListGetSupportedProfileLevels {#mlresult-mlmediacodeclistgetsupportedprofilelevels}

```cpp
MLResult MLMediaCodecListGetSupportedProfileLevels(
    uint64_t index,
    const char * mime,
    MLMediaCodecListProfileLevel ** out_profile_levels,
    size_t * out_profile_levels_size
)
```

Obtain the supported profile levels for a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| [MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) ** |out_profile_levels|Codec supported profile levels defined by [MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md). |
| size_t * |out_profile_levels_size|Number of profile levels.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall call [MLMediaCodecListProfileLevelsRelease()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistprofilelevelsrelease) to release it.




**API Level:**
  * 6




-----------

### MLMediaCodecListProfileLevelsRelease {#mlresult-mlmediacodeclistprofilelevelsrelease}

```cpp
MLResult MLMediaCodecListProfileLevelsRelease(
    MLMediaCodecListProfileLevel * profile_levels
)
```

Release profile levels. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecListProfileLevel](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/struct_m_l_media_codec_list_profile_level.md) * |profile_levels|The return value of [MLMediaCodecListGetSupportedProfileLevels()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedprofilelevels).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 6




-----------

### MLMediaCodecListGetSupportedColorFormats {#mlresult-mlmediacodeclistgetsupportedcolorformats}

```cpp
MLResult MLMediaCodecListGetSupportedColorFormats(
    uint64_t index,
    const char * mime,
    uint32_t ** out_color_formats,
    size_t * out_color_formats_size
)
```

Obtain the supported color formats for a codec. All the supported color formats are defined by MLMediaCodecColorFormat. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| uint32_t ** |out_color_formats|Codec supported color formats of type MLMediaCodecColorFormat. |
| size_t * |out_color_formats_size|Number of color formats.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall call [MLMediaCodecListColorFormatsRelease()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistcolorformatsrelease) to release it.




**API Level:**
  * 6




-----------

### MLMediaCodecListColorFormatsRelease {#mlresult-mlmediacodeclistcolorformatsrelease}

```cpp
MLResult MLMediaCodecListColorFormatsRelease(
    uint32_t * color_formats
)
```

Release color formats. 

**Parameters**

|  |   |   |
|--|--|--|
| uint32_t * |color_formats|The return value of [MLMediaCodecListGetSupportedColorFormats()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedcolorformats).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 6




-----------

### MLMediaCodecListGetSupportedBitrateModes {#mlresult-mlmediacodeclistgetsupportedbitratemodes}

```cpp
MLResult MLMediaCodecListGetSupportedBitrateModes(
    uint64_t index,
    const char * mime,
    MLMediaCodecBitrateMode ** out_bitrate_modes,
    size_t * out_bitrate_modes_size
)
```

Obtain the supported bitrate modes for a codec. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| [MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode) ** |out_bitrate_modes|Codec supported Bitrate modes defined by [MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode). |
| size_t * |out_bitrate_modes_size|Number of Bitrate modes.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


User shall call [MLMediaCodecBitrateModesRelease()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodecbitratemodesrelease) to release it.




**API Level:**
  * 9




-----------

### MLMediaCodecBitrateModesRelease {#mlresult-mlmediacodecbitratemodesrelease}

```cpp
MLResult MLMediaCodecBitrateModesRelease(
    MLMediaCodecBitrateMode * bitrate_modes
)
```

Release Bitrate modes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLMediaCodecBitrateMode](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#enums-mlmediacodecbitratemode) * |bitrate_modes|The return value of [MLMediaCodecListGetSupportedBitrateModes()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___media_player/group___media_player.md#mlresult-mlmediacodeclistgetsupportedbitratemodes).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 





**API Level:**
  * 9




-----------

### MLMediaCodecListIsAdaptivePlaybackSupported {#mlresult-mlmediacodeclistisadaptiveplaybacksupported}

```cpp
MLResult MLMediaCodecListIsAdaptivePlaybackSupported(
    uint64_t index,
    const char * mime,
    bool * out_supported
)
```

Check whether Adaptive playback is supported. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| bool * |out_supported|Returns true if supported, false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


This function is used to query a video decoder to see whether it supports seamless resolution changes through Adaptive streaming. If the component is an audio decoder or encoder, it will always return false.




**API Level:**
  * 9




-----------

### MLMediaCodecListIsSecurePlaybackSupported {#mlresult-mlmediacodeclistissecureplaybacksupported}

```cpp
MLResult MLMediaCodecListIsSecurePlaybackSupported(
    uint64_t index,
    const char * mime,
    bool * out_supported
)
```

Check whether Secure playback is supported. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| bool * |out_supported|Returns true if supported, false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If the component is an encoder, it will always return false.




**API Level:**
  * 9




-----------

### MLMediaCodecListIsIntraRefreshSupported {#mlresult-mlmediacodeclistisintrarefreshsupported}

```cpp
MLResult MLMediaCodecListIsIntraRefreshSupported(
    uint64_t index,
    const char * mime,
    bool * out_supported
)
```

Check whether Intra Refresh is supported. 

**Parameters**

|  |   |   |
|--|--|--|
| uint64_t |index|Index of the codec in the codec list. The number shall be between 0 and number of available codecs. |
| const char * |mime|Mime type of the codec being queried. |
| bool * |out_supported|Returns true if supported, false otherwise.|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|One of the parameters is invalid. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|If operation was successful. |
| [MLResult](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|The operation failed with an unspecified error.|
**Required Permissions**:

  * None 


If the component is Decoder, it will always return false.




**API Level:**
  * 9




-----------



## Macros Documentation

### MAX_CODEC_NAME_LENGTH {#defines-max-codec-name-length}

```cpp
#define MAX_CODEC_NAME_LENGTH 64
```






-----------

## Source code

```cpp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2017 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement,
// located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying
// this distribution may also be found in the top-level NOTICE file
// appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

#pragma once

#include "ml_api.h"

ML_EXTERN_C_BEGIN

#define MAX_CODEC_NAME_LENGTH 64

typedef enum MLMediaCodecListCodecTypeFlag {
  MLMediaCodecListCodecTypeFlag_Software     = 1 << 0,
  MLMediaCodecListCodecTypeFlag_Hardware     = 1 << 1,
  MLMediaCodecListCodecTypeFlag_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecListCodecTypeFlag;

typedef enum MLMediaCodecListCapabilityFlag {
  MLMediaCodecListCapabilityFlag_AdaptivePlayback = 1 << 0,
  MLMediaCodecListCapabilityFlag_SecurePlayback   = 1 << 1,
  MLMediaCodecListCapabilityFlag_TunneledPlayback = 1 << 2,
  MLMediaCodecListCapabilityFlag_Ensure32Bits     = 0x7FFFFFFF
} MLMediaCodecListCapabilityFlag;

typedef enum MLMediaCodecColorFormat {
  MLMediaCodecColorFormat_Unused = 0,
  MLMediaCodecColorFormat_Monochrome = 1,
  MLMediaCodecColorFormat_8BitRGB332 = 2,
  MLMediaCodecColorFormat_12BitRGB444 = 3,
  MLMediaCodecColorFormat_16BitARGB4444 = 4,
  MLMediaCodecColorFormat_16BitARGB1555 = 5,
  MLMediaCodecColorFormat_16BitRGB565 = 6,
  MLMediaCodecColorFormat_16BitBGR565 = 7,
  MLMediaCodecColorFormat_18BitRGB666 = 8,
  MLMediaCodecColorFormat_18BitARGB1665 = 9,
  MLMediaCodecColorFormat_19BitARGB1666 = 10,
  MLMediaCodecColorFormat_24BitRGB888 = 11,
  MLMediaCodecColorFormat_24BitBGR888 = 12,
  MLMediaCodecColorFormat_24BitARGB1887 = 13,
  MLMediaCodecColorFormat_25BitARGB1888 = 14,
  MLMediaCodecColorFormat_32BitBGRA8888 = 15,
  MLMediaCodecColorFormat_32BitARGB8888 = 16,
  MLMediaCodecColorFormat_YUV411Planar = 17,
  MLMediaCodecColorFormat_YUV411PackedPlanar = 18,
  MLMediaCodecColorFormat_YUV420Planar = 19,
  MLMediaCodecColorFormat_YUV420PackedPlanar = 20,
  MLMediaCodecColorFormat_YUV420SemiPlanar = 21,
  MLMediaCodecColorFormat_YUV422Planar = 22,
  MLMediaCodecColorFormat_YUV422PackedPlanar = 23,
  MLMediaCodecColorFormat_YUV422SemiPlanar = 24,
  MLMediaCodecColorFormat_YCbYCr = 25,
  MLMediaCodecColorFormat_YCrYCb = 26,
  MLMediaCodecColorFormat_CbYCrY = 27,
  MLMediaCodecColorFormat_CrYCbY = 28,
  MLMediaCodecColorFormat_YUV444Interleaved = 29,
  MLMediaCodecColorFormat_RawBayer8Bit = 30,
  MLMediaCodecColorFormat_RawBayer10Bit = 31,
  MLMediaCodecColorFormat_RawBayer8Bitcompressed = 32,
  MLMediaCodecColorFormat_L2 = 33,
  MLMediaCodecColorFormat_L4 = 34,
  MLMediaCodecColorFormat_L8 = 35,
  MLMediaCodecColorFormat_L16 = 36,
  MLMediaCodecColorFormat_L24 = 37,
  MLMediaCodecColorFormat_L32 = 38,
  MLMediaCodecColorFormat_YUV420PackedSemiPlanar,
  MLMediaCodecColorFormat_YUV422PackedSemiPlanar,
  MLMediaCodecColorFormat_18BitBGR666,
  MLMediaCodecColorFormat_24BitARGB6666,
  MLMediaCodecColorFormat_24BitABGR6666,
  MLMediaCodecColorFormat_KhronosExtensions = 0x6F000000,
  MLMediaCodecColorFormat_VendorStartUnused = 0x7F000000,
  MLMediaCodecColorFormat_AndroidOpaque = 0x7F000789,
  MLMediaCodecColorFormat_32BitRGBA8888 = 0x7F00A000,
  MLMediaCodecColorFormat_YUV420Flexible = 0x7F420888,
  MLMediaCodecColorFormat_YUV420Planar16 = 0x7F42016B,
  MLMediaCodecColorFormat_YUV444Y410 = 0x7F444AAA,

  MLMediaCodecColorFormat_TIYUV420PackedSemiPlanar = 0x7F000100,
  MLMediaCodecColorFormat_QCOMYVU420SemiPlanar = 0x7FA30C00,
  MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar64x32Tile2m8ka = 0x7FA30C03,
  MLMediaCodecColorFormat_QCOMYUV420PackedSemiPlanar32m = 0x7FA30C04,
  MLMediaCodecColorFormat_SECNV12Tiled = 0x7FC00002,

  MLMediaCodecColorFormat_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecColorFormat;

typedef enum MLMediaCodecPriority {
  MLMediaCodecPriority_RealTime = 0,
  MLMediaCodecPriority_NonRealTime = 1,
  MLMediaCodecPriority_Ensure32Bits = 0x7FFFFFFF,
} MLMediaCodecPriority;

typedef enum MLMediaCodecIntraRefreshMode {
  MLMediaCodecIntraRefreshMode_Cyclic = 0,
  MLMediaCodecIntraRefreshMode_Adaptive = 1,
  MLMediaCodecIntraRefreshMode_Both = 2,
  MLMediaCodecIntraRefreshMode_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecIntraRefreshMode;

typedef enum MLMediaCodecBitrateMode {
  MLMediaCodecBitrateMode_CQ = 0,
  MLMediaCodecBitrateMode_VBR = 1,
  MLMediaCodecBitrateMode_CBR = 2,
  MLMediaCodecBitrateMode_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecBitrateMode;

typedef enum MLMediaCodecProfileType {
  MLMediaCodecProfileType_H263Baseline            = 0x01,
  MLMediaCodecProfileType_H263H320Coding          = 0x02,
  MLMediaCodecProfileType_H263BackwardCompatible  = 0x04,
  MLMediaCodecProfileType_H263ISWV2               = 0x08,
  MLMediaCodecProfileType_H263ISWV3               = 0x10,
  MLMediaCodecProfileType_H263HighCompression     = 0x20,
  MLMediaCodecProfileType_H263Internet            = 0x40,
  MLMediaCodecProfileType_H263Interlace           = 0x80,
  MLMediaCodecProfileType_H263HighLatency         = 0x100,

  MLMediaCodecProfileType_MPEG2Simple = 0,
  MLMediaCodecProfileType_MPEG2Main = 1,
  MLMediaCodecProfileType_MPEG2422 = 2,
  MLMediaCodecProfileType_MPEG2SNR = 3,
  MLMediaCodecProfileType_MPEG2Spatial = 4,
  MLMediaCodecProfileType_MPEG2High = 5,

  MLMediaCodecProfileType_MPEG4Simple = 0x01,
  MLMediaCodecProfileType_MPEG4SimpleScalable = 0x02,
  MLMediaCodecProfileType_MPEG4Core = 0x04,
  MLMediaCodecProfileType_MPEG4Main = 0x08,
  MLMediaCodecProfileType_MPEG4Nbit = 0x10,
  MLMediaCodecProfileType_MPEG4ScalableTexture = 0x20,
  MLMediaCodecProfileType_MPEG4SimpleFace = 0x40,
  MLMediaCodecProfileType_MPEG4SimpleFBA = 0x80,
  MLMediaCodecProfileType_MPEG4BasicAnimated = 0x100,
  MLMediaCodecProfileType_MPEG4Hybrid = 0x200,
  MLMediaCodecProfileType_MPEG4AdvancedRealTime = 0x400,
  MLMediaCodecProfileType_MPEG4CoreScalable = 0x800,
  MLMediaCodecProfileType_MPEG4AdvancedCoding = 0x1000,
  MLMediaCodecProfileType_MPEG4AdvancedCore = 0x2000,
  MLMediaCodecProfileType_MPEG4AdvancedScalable = 0x4000,
  MLMediaCodecProfileType_MPEG4AdvancedSimple = 0x8000,

  MLMediaCodecProfileType_AVCBaseline = 0x01,
  MLMediaCodecProfileType_AVCMain     = 0x02,
  MLMediaCodecProfileType_AVCExtended = 0x04,
  MLMediaCodecProfileType_AVCHigh     = 0x08,
  MLMediaCodecProfileType_AVCHigh10   = 0x10,
  MLMediaCodecProfileType_AVCHigh422  = 0x20,
  MLMediaCodecProfileType_AVCHigh444  = 0x40,

  MLMediaCodecProfileType_VP8Main = 0x01,

  MLMediaCodecProfileType_VP90 = 0x01,
  MLMediaCodecProfileType_VP91 = 0x02,
  MLMediaCodecProfileType_VP92 = 0x04,
  MLMediaCodecProfileType_VP93 = 0x08,
  MLMediaCodecProfileType_VP92HDR = 0x1000,
  MLMediaCodecProfileType_VP93HDR = 0x2000,
  MLMediaCodecProfileType_VP92HDR10Plus = 0x4000,
  MLMediaCodecProfileType_VP93HDR10Plus = 0x8000,

  MLMediaCodecProfileType_HEVCMain        = 0x01,
  MLMediaCodecProfileType_HEVCMain10      = 0x02,
  MLMediaCodecProfileType_HEVCMainStill   = 0x04,
  MLMediaCodecProfileType_HEVCMain10HDR10 = 0x1000,
  MLMediaCodecProfileType_HEVCMain10HDR10Plus = 0x2000,

  MLMediaCodecProfileType_AACObjectNull = 0,
  MLMediaCodecProfileType_AACObjectMain = 1,
  MLMediaCodecProfileType_AACObjectLC = 2,
  MLMediaCodecProfileType_AACObjectSS = 3,
  MLMediaCodecProfileType_AACObjectLTP = 4,
  MLMediaCodecProfileType_AACObjectHE = 5,
  MLMediaCodecProfileType_AACObjectScalable = 6,
  MLMediaCodecProfileType_AACObjectERLC = 17,
  MLMediaCodecProfileType_AACObjectLD = 23,
  MLMediaCodecProfileType_AACObjectHE_PS = 29,

  MLMediaCodecProfileType_WMAProfileUnused = 0,
  MLMediaCodecProfileType_WMAProfileL1 = 1,
  MLMediaCodecProfileType_WMAProfileL2 = 2,
  MLMediaCodecProfileType_WMAProfileL3 = 3,

  MLMediaCodecProfileType_Ensure32Bits = 0x7FFFFFFF
} MLMediaCodecProfileType;

typedef enum MLMediaCodecLevelType {
  MLMediaCodecLevelType_H263Level10  = 0x01,
  MLMediaCodecLevelType_H263Level20  = 0x02,
  MLMediaCodecLevelType_H263Level30  = 0x04,
  MLMediaCodecLevelType_H263Level40  = 0x08,
  MLMediaCodecLevelType_H263Level45  = 0x10,
  MLMediaCodecLevelType_H263Level50  = 0x20,
  MLMediaCodecLevelType_H263Level60  = 0x40,
  MLMediaCodecLevelType_H263Level70  = 0x80,

  MLMediaCodecLevelType_MPEG2LevelLL = 0,
  MLMediaCodecLevelType_MPEG2LevelML = 1,
  MLMediaCodecLevelType_MPEG2LevelH14 = 2,
  MLMediaCodecLevelType_MPEG2LevelHL = 3,

  MLMediaCodecLevelType_MPEG4Level0 = 0x01,
  MLMediaCodecLevelType_MPEG4Level0b = 0x02,
  MLMediaCodecLevelType_MPEG4Level1 = 0x04,
  MLMediaCodecLevelType_MPEG4Level2 = 0x08,
  MLMediaCodecLevelType_MPEG4Level3 = 0x10,
  MLMediaCodecLevelType_MPEG4Level4 = 0x20,
  MLMediaCodecLevelType_MPEG4Level4a = 0x40,
  MLMediaCodecLevelType_MPEG4Level5 = 0x80,

  MLMediaCodecLevelType_AVCLevel1       = 0x01,
  MLMediaCodecLevelType_AVCLevel1b      = 0x02,
  MLMediaCodecLevelType_AVCLevel11      = 0x04,
  MLMediaCodecLevelType_AVCLevel12      = 0x08,
  MLMediaCodecLevelType_AVCLevel13      = 0x10,
  MLMediaCodecLevelType_AVCLevel2       = 0x20,
  MLMediaCodecLevelType_AVCLevel21      = 0x40,
  MLMediaCodecLevelType_AVCLevel22      = 0x80,
  MLMediaCodecLevelType_AVCLevel3       = 0x100,
  MLMediaCodecLevelType_AVCLevel31      = 0x200,
  MLMediaCodecLevelType_AVCLevel32      = 0x400,
  MLMediaCodecLevelType_AVCLevel4       = 0x800,
  MLMediaCodecLevelType_AVCLevel41      = 0x1000,
  MLMediaCodecLevelType_AVCLevel42      = 0x2000,
  MLMediaCodecLevelType_AVCLevel5       = 0x4000,
  MLMediaCodecLevelType_AVCLevel51      = 0x8000,

  MLMediaCodecLevelType_VP8LevelVersion0 = 0x01,
  MLMediaCodecLevelType_VP8LevelVersion1 = 0x02,
  MLMediaCodecLevelType_VP8LevelVersion2 = 0x04,
  MLMediaCodecLevelType_VP8LevelVersion3 = 0x08,

  MLMediaCodecLevelType_VP9Level1  = 0x1,
  MLMediaCodecLevelType_VP9Level11 = 0x2,
  MLMediaCodecLevelType_VP9Level2  = 0x4,
  MLMediaCodecLevelType_VP9Level21 = 0x8,
  MLMediaCodecLevelType_VP9Level3  = 0x10,
  MLMediaCodecLevelType_VP9Level31 = 0x20,
  MLMediaCodecLevelType_VP9Level4  = 0x40,
  MLMediaCodecLevelType_VP9Level41 = 0x80,
  MLMediaCodecLevelType_VP9Level5  = 0x100,
  MLMediaCodecLevelType_VP9Level51 = 0x200,
  MLMediaCodecLevelType_VP9Level52 = 0x400,
  MLMediaCodecLevelType_VP9Level6  = 0x800,
  MLMediaCodecLevelType_VP9Level61 = 0x1000,
  MLMediaCodecLevelType_VP9Level62 = 0x2000,

  MLMediaCodecLevelType_HEVCMainTierLevel1  = 0x1,
  MLMediaCodecLevelType_HEVCHighTierLevel1  = 0x2,
  MLMediaCodecLevelType_HEVCMainTierLevel2  = 0x4,
  MLMediaCodecLevelType_HEVCHighTierLevel2  = 0x8,
  MLMediaCodecLevelType_HEVCMainTierLevel21 = 0x10,
  MLMediaCodecLevelType_HEVCHighTierLevel21 = 0x20,
  MLMediaCodecLevelType_HEVCMainTierLevel3  = 0x40,
  MLMediaCodecLevelType_HEVCHighTierLevel3  = 0x80,
  MLMediaCodecLevelType_HEVCMainTierLevel31 = 0x100,
  MLMediaCodecLevelType_HEVCHighTierLevel31 = 0x200,
  MLMediaCodecLevelType_HEVCMainTierLevel4  = 0x400,
  MLMediaCodecLevelType_HEVCHighTierLevel4  = 0x800,
  MLMediaCodecLevelType_HEVCMainTierLevel41 = 0x1000,
  MLMediaCodecLevelType_HEVCHighTierLevel41 = 0x2000,
  MLMediaCodecLevelType_HEVCMainTierLevel5  = 0x4000,
  MLMediaCodecLevelType_HEVCHighTierLevel5  = 0x8000,
  MLMediaCodecLevelType_HEVCMainTierLevel51 = 0x10000,
  MLMediaCodecLevelType_HEVCHighTierLevel51 = 0x20000,
  MLMediaCodecLevelType_HEVCMainTierLevel52 = 0x40000,
  MLMediaCodecLevelType_HEVCHighTierLevel52 = 0x80000,
  MLMediaCodecLevelType_HEVCMainTierLevel6  = 0x100000,
  MLMediaCodecLevelType_HEVCHighTierLevel6  = 0x200000,
  MLMediaCodecLevelType_HEVCMainTierLevel61 = 0x400000,
  MLMediaCodecLevelType_HEVCHighTierLevel61 = 0x800000,
  MLMediaCodecLevelType_HEVCMainTierLevel62 = 0x1000000,
  MLMediaCodecLevelType_HEVCHighTierLevel62 = 0x2000000,

  MLMediaCodecLevelType_Ensure32Bits = 0x7FFFFFFF,
} MLMediaCodecLevelType;

typedef struct MLMediaCodecListQueryResults {
  size_t  count;
  char    **data;
} MLMediaCodecListQueryResults;

typedef struct MLMediaCodecListProfileLevel {
  uint32_t profile;
  uint32_t level;
} MLMediaCodecListProfileLevel;

ML_API MLResult ML_CALL MLMediaCodecListCountCodecs(uint64_t *out_codec_count);

ML_API MLResult ML_CALL MLMediaCodecListIsSoftwareCodec(const char *codec_name, bool *out_val);

ML_API MLResult ML_CALL MLMediaCodecListGetMatchingCodecs(const char *mime, bool is_encoder, MLMediaCodecListCodecTypeFlag flag, MLMediaCodecListQueryResults *out_matching_codecs);

ML_API MLResult ML_CALL MLMediaCodecListGetCodecByType(const char *type, bool is_encoder, uint64_t start_index, int64_t *out_index);

ML_API MLResult ML_CALL MLMediaCodecListGetCodecByName(const char *name, int64_t *out_index);

ML_API MLResult ML_CALL MLMediaCodecListIsEncoder(uint64_t index, bool *out_val);

ML_API MLResult ML_CALL MLMediaCodecListGetCodecName(uint64_t index, char *out_name);

ML_API MLResult ML_CALL MLMediaCodecListGetSupportedMimes(uint64_t index, MLMediaCodecListQueryResults *out_supported_mimes);

ML_API MLResult ML_CALL MLMediaCodecListGetCapabilityFlag(uint64_t index, const char *mime, MLMediaCodecListCapabilityFlag *out_capability_flag);

ML_API MLResult ML_CALL MLMediaCodecListGetSecureCodecName(const char *mime, bool is_decoder, char *out_name);

ML_API MLResult ML_CALL MLMediaCodecListQueryResultsRelease(MLMediaCodecListQueryResults *query_results);

ML_API MLResult ML_CALL MLMediaCodecListGetSupportedProfileLevels(uint64_t index, const char *mime,
    MLMediaCodecListProfileLevel **out_profile_levels, size_t *out_profile_levels_size);

ML_API MLResult ML_CALL MLMediaCodecListProfileLevelsRelease(MLMediaCodecListProfileLevel *profile_levels);

ML_API MLResult ML_CALL MLMediaCodecListGetSupportedColorFormats(uint64_t index, const char *mime,
    uint32_t **out_color_formats, size_t *out_color_formats_size);

ML_API MLResult ML_CALL MLMediaCodecListColorFormatsRelease(uint32_t *color_formats);

ML_API MLResult ML_CALL MLMediaCodecListGetSupportedBitrateModes(uint64_t index, const char *mime,
    MLMediaCodecBitrateMode **out_bitrate_modes, size_t *out_bitrate_modes_size);

ML_API MLResult ML_CALL MLMediaCodecBitrateModesRelease(MLMediaCodecBitrateMode *bitrate_modes);

ML_API MLResult ML_CALL MLMediaCodecListIsAdaptivePlaybackSupported(uint64_t index, const char *mime, bool *out_supported);

ML_API MLResult ML_CALL MLMediaCodecListIsSecurePlaybackSupported(uint64_t index, const char *mime, bool *out_supported);

ML_API MLResult ML_CALL MLMediaCodecListIsIntraRefreshSupported(uint64_t index, const char *mime, bool *out_supported);

ML_EXTERN_C_END
```




