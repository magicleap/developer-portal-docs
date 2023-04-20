---

title: PermissionsSettingsProviderPresenter.cs

---


# PermissionsSettingsProviderPresenter.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2022 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEngine.UIElements;
using static UnityEditor.XR.MagicLeap.Permission;

namespace UnityEditor.XR.MagicLeap
{
    internal class PermissionsSettingsProviderPresenter : SettingsProvider
    {
        internal const string missingMLSDKPathText = "Unity Editor is missing Magic Leap SDK. To fix that go to: " +
            "'Preferences...' > 'External tools' > 'Magic Leap' and set the Magic Leap SDK path. " +
            "Then click the 'Synchronize' button below to update the permissions list " +
            "against the Magic Leap C SDK specified in the editor preferences.";

        private const string PathToUss =
            @"Packages