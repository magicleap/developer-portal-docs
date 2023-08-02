---

title: MLSpaceInternal.cs

---


# MLSpaceInternal.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2023 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Linq;
using System.Runtime.InteropServices;
using UnityEngine.XR.MagicLeap.Native;
using static UnityEngine.XR.MagicLeap.MLSpace;

namespace UnityEngine.XR.MagicLeap
{
    public partial class MLSpace : MLAutoAPISingleton<MLSpace>
    {

        private MLResult.Code InternalMLSpacesStart()
        {
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.SpaceManager).Result))
            {
                MLPluginLog.Error($"{nameof(MLSpace)} requires missing permission {MLPermission.SpaceManager}");
                return MLResult.Code.PermissionDenied;
            }

            Settings settings = Settings.Create();
            MLResult.Code resultCode = NativeBindings.MLSpaceManagerCreate(settings, out Handle);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceManagerCreate)))
            {
                SpaceCallbacks callbacks = SpaceCallbacks.Create();
                var result = NativeBindings.MLSpaceSetCallbacks(Handle, ref callbacks, System.IntPtr.Zero);
                MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLSpaceManagerCreate));
            }

            return resultCode;
        }

        private MLResult.Code InternalMLSpacesStop()
        {
            MLResult.Code resultCode = NativeBindings.MLSpaceManagerDestroy(Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceManagerDestroy));

            return resultCode;
        }

        private MLResult.Code InternalExportSpace(in SpaceInfo info, out SpaceData data)
        {
            data = new();
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.SpaceImportExport).Result))
            {
                MLPluginLog.Error($"{nameof(MLSpace)} requires missing permission {MLPermission.SpaceImportExport}");
                return MLResult.Code.PermissionDenied;
            }

            SpaceExportInfo exportInfo = new();
            SpaceExportOutData outData = SpaceExportOutData.Create();
            exportInfo.SpaceId = info.SpaceId;

            MLResult.Code resultCode = NativeBindings.MLSpaceExportSpace(exportInfo, ref outData);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceExportSpace)))
            {
                data.Size = outData.Size;
                data.Data = MLSpace.SpaceExportOutData.GetData(outData);
                InternalReleaseExportSpaceData(ref outData);
            }

            return resultCode;
        }

        private MLResult.Code InternalReleaseExportSpaceData(ref SpaceExportOutData data)
        {
           
            MLResult.Code resultCode = NativeBindings.MLSpaceReleaseExportData(ref data);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceReleaseExportData));

            return resultCode;
        }

        private MLResult.Code InternalImportSpace(in SpaceData binaryData, out SpaceInfo info)
        {
            info = new SpaceInfo();
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.SpaceImportExport).Result))
            {
                MLPluginLog.Error($"{nameof(MLSpace)} requires missing permission {MLPermission.SpaceImportExport}");
                return MLResult.Code.PermissionDenied;
            }

            SpaceImportOutData outData = new();
            SpaceImportInfo importInfo = SpaceImportInfo.Create();


            importInfo.Size = binaryData.Size;

            importInfo.Data = Marshal.AllocHGlobal(binaryData.Data.Length);
            Marshal.Copy(binaryData.Data, 0, importInfo.Data, binaryData.Data.Length);

            MLResult.Code resultCode = NativeBindings.MLSpaceImportSpace(importInfo, ref outData);

            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceImportSpace)))
            {
                info.SpaceId = outData.SpaceId;
            }

            Marshal.FreeHGlobal(importInfo.Data);
            return resultCode;
        }

        private MLResult.Code InternalGetSpaceList(out Space[] spaceList)
        {
            SpaceList list = new SpaceList();
            SpaceFilter filter = SpaceFilter.Create();

            MLResult.Code resultCode = NativeBindings.MLSpaceGetSpaceList(Handle, out filter, out list);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceGetSpaceList)))
            {
                spaceList = MLConvert.MarshalUnmanagedArray<Space>(list.Spaces,(int)list.SpaceCount);
                InternalReleaseSpaceList(out list);
            }
            else
            {
                spaceList = new Space[0];
            }


            return resultCode;
        }


        private MLResult.Code InternalReleaseSpaceList(out SpaceList list)
        {
            MLResult.Code resultCode = NativeBindings.MLSpaceReleaseSpaceList(Handle, out list);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceReleaseSpaceList));

            return resultCode;
        }

        private MLResult.Code InternalRequestLocalization(ref SpaceInfo info)
        {
            SpaceLocalizationInfo localizationInfo = SpaceLocalizationInfo.Create();
            localizationInfo.SpaceId = info.SpaceId;
            MLResult.Code resultCode = NativeBindings.MLSpaceRequestLocalization(Handle, ref localizationInfo);
            MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceRequestLocalization));

            return resultCode;
        }

        private MLResult.Code InternalGetLocalizationResult(out LocalizationResult result)
        {
            result = new();
            SpaceLocalizationResult localizationResult = SpaceLocalizationResult.Create();
            MLResult.Code resultCode = NativeBindings.MLSpaceGetLocalizationResult(Handle, out localizationResult);
            if (MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLSpaceGetLocalizationResult)))
            {
                result.LocalizationStatus = localizationResult.LocalizationStatus;
                result.Space = localizationResult.Space;
            }


            return resultCode;
        }

        private static event OnLocalizationDelegate OnLocalizationChanged = delegate { };

        [AOT.MonoPInvokeCallback(typeof(MLSpaceDelegate))]
        public static void LocalizationChanged(ref SpaceLocalizationResult result, IntPtr data)
        {
            LocalizationResult localizedResult = new LocalizationResult();
            localizedResult.LocalizationStatus = result.LocalizationStatus;
            localizedResult.Space = result.Space;

            MLThreadDispatch.ScheduleMain(() =>
            {
                OnLocalizationChanged?.Invoke(localizedResult);
            });
        }
    }
}
```



