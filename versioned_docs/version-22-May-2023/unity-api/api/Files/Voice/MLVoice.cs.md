---

title: MLVoice.cs

---


# MLVoice.cs









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
    using UnityEngine;
    using System.Collections.Generic;

    public partial class MLVoice : MLAutoAPISingleton<MLVoice>
    {
        public enum State
        {
            HotwordDetected,

            SessionEnded,

            ISessionEndedAborted,

            SessionEndedNoIntent,

            SessionEndedTimeout,

            SessionEndedError,

            Ready,

            NotAvailable
        };

        public enum NoIntentReason
        {
            NoReason,
            Silence,
            NoMatch
        };

        public struct EventSlot
        {
            public string SlotName;
            public string SlotValue;

            public EventSlot(string name, string value)
            {
                this.SlotName = name;
                this.SlotValue = value;
            }
        }

        public struct IntentEvent
        {
            public State State;

            public NoIntentReason NoIntentReason;

            public string EventName;

            public uint EventID;

            // <summary>
            public List<EventSlot> EventSlotsUsed;
        };

        public delegate void OnVoiceEventDelegate(in bool wasSuccessful, in IntentEvent voiceEvent);

        public static event OnVoiceEventDelegate OnVoiceEvent
        {
            add
            {
                OnVoiceEventInternal += value;
            }

            remove
            {
                OnVoiceEventInternal -= value;
            }
        }

        private static event OnVoiceEventDelegate OnVoiceEventInternal = delegate { };

        public static bool VoiceEnabled => Instance.isEnabled();

        protected override MLResult.Code StartAPI()
        {
            if (!MLResult.DidNativeCallSucceed(MLPermissions.CheckPermission(MLPermission.VoiceInput).Result, nameof(StartAPI)))
            {
                MLPluginLog.Error($"{nameof(MLVoice)} requires missing permission {MLPermission.VoiceInput}");
                return MLResult.Code.PermissionDenied;
            }

            var resultCode = MLVoice.NativeBindings.MLVoiceIntentCreate(out this.Handle);
            MLResult.DidNativeCallSucceed(resultCode, nameof(MLVoice.NativeBindings.MLVoiceIntentCreate));
            return resultCode;
        }

        protected override MLResult.Code StopAPI()
        {
            var result = MLVoice.NativeBindings.MLVoiceIntentDestroy(this.Handle);
            if (MLResult.IsOK(result))
            {
                this.Handle = Native.MagicLeapNativeBindings.InvalidHandle;
            }
            return result;
        }

        public static MLResult SetupVoiceIntents(MLVoiceIntentsConfiguration voiceConfiguration)
        {
            string JSONString = voiceConfiguration.GetJSONString();

            MLResult result = MLResult.Create(Instance.ConfigureSettings(JSONString));
            if (!result.IsOk)
            {
                MLPluginLog.Error("MLVoice failed to ConfigureSettings: " + result);
                return result;
            }

            result = MLResult.Create(Instance.SetCallbacks(false));
            if (!result.IsOk)
            {
                MLPluginLog.Error("MLVoice failed to SetCallbacks: " + result);
                return result;
            }

            var resultCode = NativeBindings.MLVoiceIntentStartProcessing(Instance.Handle);

            if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLVoiceIntentStartProcessing)))
            {
                MLPluginLog.Error("MLVoice failed to StartProcessing: " + result);
            }
            else
            {
                Instance.isProcessing = true;
            }
            return result;
        }

        public static MLResult SetupVoiceIntents(string JSONString)
        {
            MLResult result = MLResult.Create(Instance.ConfigureSettings(JSONString));
            if (!result.IsOk)
            {
                MLPluginLog.Error("MLVoice failed to ConfigureSettings: " + result);
                return result;
            }

            result = MLResult.Create(Instance.SetCallbacks(false));
            if (!result.IsOk)
            {
                MLPluginLog.Error("MLVoice failed to SetCallbacks: " + result);
                return result;
            }

            var resultCode = NativeBindings.MLVoiceIntentStartProcessing(Instance.Handle);

            if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLVoiceIntentStartProcessing)))
            {
                MLPluginLog.Error("MLVoice failed to StartProcessing: " + result);
            }
            else
            {
                Instance.isProcessing = true;
            }
            return result;
        }

        public static MLResult Stop()
        {
            MLResult result = MLResult.Create(Instance.SetCallbacks(true));

            if (!MLResult.IsOK(result.Result))
            {
                MLPluginLog.Error("MLVoice.Stop failed to unregister MLVoiceIntentSetCallbacks: " + result);
            }

            var resultCode = NativeBindings.MLVoiceIntentStopProcessing(Instance.Handle);

            if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLVoiceIntentStopProcessing)))
            {
                MLPluginLog.Error("MLVoice.Stop failed to MLVoiceIntentStopProcessing: " + result);
            }
            else
            {
                Instance.isProcessing = false;
            }

            return MLResult.Create(resultCode);
        }
    }
}
```




