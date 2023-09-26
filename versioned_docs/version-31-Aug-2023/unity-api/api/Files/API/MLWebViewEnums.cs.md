---

title: MLWebViewEnums.cs

---


# MLWebViewEnums.cs









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
    using System;

    public partial class MLWebView
    {

        public enum KeyCode
        {
            Unknown = 0,
            Home = 3,
            Back = 4,
            DpadLeft = 21,
            DpadRight = 22,
            Delete = 67,
            Focus = 80,
            Plus = 81,
            Menu = 82,
            Forward = 125,
            Trigger = 500,
            Capture = 501,
            Bumper = 502,
            Reality = 503,
            Battery = 504,
            MLBack = 508,
            HomeTap = MLBack, // for backward compatability.
            HomeMediumTap = 509,
            Popple = 510,
            MouseLeft = 511,
            MouseRight = 512,
            MouseWheel = 513,
            MouseExtra = 514,
            MouseSide = 515,
            VkbCancel = 1001,
            VkbSubmit = 1002,
            VkbPrevious = 1003,
            VkbNext = 1004,
            VkbClear = 1005,
            VkbClose = 1006,
            VkbCustom1 = 1007,
            VkbCustom2 = 1008,
            VkbCustom3 = 1009,
            VkbCustom4 = 1010,
            VkbHidePassword = 1012,
            VkbShowPassword = 1013
        }

        [Flags]
        public enum EventFlags
        {
            None = 0,

            CapsLockOn = 1 << 0,

            ShiftDown = 1 << 1,

            ControlDown = 1 << 2,

            AltDown = 1 << 3,

            LeftMouseButton = 1 << 4,

            MiddleMouseButton = 1 << 5,

            RightMouseButton = 1 << 6,

            CommandDown = 1 << 7,

            NumLockOn = 1 << 8,

            IsKeyPad = 1 << 9,

            IsLeft = 1 << 10,

            IsRight = 1 << 11,

            AltGRDown = 1 << 12,
        };

        [Flags]
        public enum TextInputFlags
        {
            None = 0,

            AutocompleteOn = 1 << 0,

            AutocompleteOff = 1 << 1,

            AutocorrectOn = 1 << 2,

            AutocorrectOff = 1 << 3,

            SpellcheckOn = 1 << 4,

            SpellcheckOff = 1 << 5,

            AutocapitalizeNone = 1 << 6,

            AutocapitalizeCharacters = 1 << 7,

            AutocapitalizeWords = 1 << 8,

            AutocapitalizeSentences = 1 << 9,

            HaveNextFocusableElement = 1 << 10,

            HavePreviousFocusableElement = 1 << 11,

            HasBeenPasswordField = 1 << 12,
        };

        public enum TextInputType
        {
            None,

            Text,

            Password,

            Search,

            Email,

            Number,

            Telephone,

            URL,

            Date,

            DateTime,

            DateTimeLocal,

            Month,

            Time,

            Week,

            TextArea,

            ContentEditable,

            DateTimeField,
        };
    }
}
```




