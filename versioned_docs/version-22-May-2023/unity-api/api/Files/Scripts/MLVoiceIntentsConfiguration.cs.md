---

title: MLVoiceIntentsConfiguration.cs

---


# MLVoiceIntentsConfiguration.cs









## Source code

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using UnityEngine;

[CreateAssetMenu(fileName = "MLVoiceIntentsConfiguration", menuName = "Magic Leap/Voice Intents Configuration", order = 1)]
public class MLVoiceIntentsConfiguration : ScriptableObject
{
    [System.Flags]
    public enum SystemIntentFlags
    {
        TakeAPhoto = 1 << 0,
        TakeAVideo = 1 << 1,
        StopRecording = 1 << 2,
        CloseAPPNAME = 1 << 3,
        OpenHome = 1 << 4,
        OpenAPPNAME = 1 << 5,
        Mute = 1 << 6,
        Unmute = 1 << 7,
        TurnTheVolumeDown = 1 << 8,
        SetTheVolumeToNUMBERPercent = 1 << 9,
        TurnTheVolumeUp = 1 << 10,
        Help = 1 << 11,
    }

    [System.Serializable]
    public struct JSONData
    {
        public string name;
        public string id;
        public string value;
    }

    [System.Serializable]
    public struct SystemJSONData
    {
        public List<string> name;
    }

    [System.Serializable]
    public struct CustomVoiceIntents
    {
        [Tooltip("Must Be Unique.")]
        public uint Id;
        [Tooltip("The command to be spoken. Can have 2 phrases seperated by an | to indicate multiple commands triggering the same event.")]
        public string Value;
    }

    [System.Serializable]
    public struct SlotData
    {
        public string name;
        public List<string> values;
    }

    [System.Serializable]
    public struct SlotDataInternal
    {
        public string name;
        public string value;
    }

    [System.Serializable]
    public class JSONContainer
    {
        public List<JSONData> app_intents;
        public SystemJSONData sys_intent_list;
        public List<SlotDataInternal> app_slots;
    }

    [System.Serializable]
    private class JSONContainerAutoSystem
    {
        public List<JSONData> app_intents;
        public List<SlotDataInternal> app_slots;
    }

    private JSONContainer container;

    private JSONContainerAutoSystem containerAutoSys;

    private string autoVoiceIntentName = "UnityApp_VoiceIntent_ID";

    [HideInInspector]
    public List<JSONData> AllVoiceIntents;

    [Header("App Specific Voice Commands")]
    [Tooltip("Any word followed by a ? will be optional as will any phrase within [ ]. Values are allowed to use | as an OR. Anything after the pipe will be considered a seperate expression. To just use an OR between two words in an expression surround them with ( ). This can also be used for Slots. To indicate use of a slot, put the slot name within { }.")]
    public List<CustomVoiceIntents> VoiceCommandsToAdd;

    [Header("System Voice Commands")]
    [Tooltip("If True, will disregard the SystemCommands selected and allow all System Intents. If no System Inents are desired, leave this false and the SystemCommands empty.")]
    public bool AutoAllowAllSystemIntents;

    [Tooltip("Flag to indicate which System Intents should be enabled from within the application. In an experimental state as there may be issues using voice commands on any pop-up windows that appear because of the enabled system commands. If no System Inents are desired, leave this list empty.")]
    public SystemIntentFlags SystemCommands;

    [Header("Slot Data")]
    [Tooltip("Slot Name should be unique as it will be used as a reference in CustomVoiceIntents values when placed between { }")]
    public List<SlotData> SlotsForVoiceCommands;

    private List<String> supportedSystemIntents = new List<string> { "ML_CAPTURE_STILL", "ML_CAPTURE_VIDEO_START", "ML_CAPTURE_VIDEO_STOP", "ML_CLOSE" , "ML_GLOBAL_HOME", "ML_LAUNCH" , "ML_SYSAUDIO_MUTE" , "ML_SYSAUDIO_UNMUTE" , "ML_SYSAUDIO_VOLUME_DOWN" , "ML_SYSAUDIO_VOLUME_SET" , "ML_SYSAUDIO_VOLUME_UP" , "ML_GLOBAL_HELP" };

    public string GetJSONString()
    {
        SetupJSONContainer();

        if(AutoAllowAllSystemIntents)
        {
            SetupJSONContainerAutoSystem();
            return JsonUtility.ToJson(containerAutoSys);
        }

        return JsonUtility.ToJson(container);
    }

    public List<string> GetValues()
    {
        SetupJSONContainer();
        List<string> values = new List<string>();

        for (int i = 0; i < container.app_intents.Count; i++)
        {
            values.Add(container.app_intents[i].value);
        }

        return values;
    }

    private void SetupJSONContainer()
    {
        container ??= new JSONContainer();

        if (VoiceCommandsToAdd.Count > 0)
        {
            AddCustomVoiceCommands();
        }

        ValidationCheck();

        container.app_intents = new List<JSONData>();
        container.app_intents.AddRange(AllVoiceIntents);
        container.sys_intent_list = new SystemJSONData();
        container.sys_intent_list.name = new List<string>();
        container.app_slots = new List<SlotDataInternal>();

        AddSlotsToJSON();

        int index = 0;
        foreach(SystemIntentFlags flag in Enum.GetValues(typeof(SystemIntentFlags)))
        {
            if(SystemCommands.HasFlag(flag))
            {
                container.sys_intent_list.name.Add(supportedSystemIntents[index]);
            }
            index++;
        }

    }

    private void SetupJSONContainerAutoSystem()
    {
        containerAutoSys ??= new JSONContainerAutoSystem();

        containerAutoSys.app_intents = new List<JSONData>();
        containerAutoSys.app_intents.AddRange(container.app_intents);
        containerAutoSys.app_slots = new List<SlotDataInternal>();
        containerAutoSys.app_slots.AddRange(container.app_slots);
    }

    private void AddCustomVoiceCommands()
    {
        foreach (CustomVoiceIntents customCommand in VoiceCommandsToAdd)
        {
            JSONData newData = new JSONData();
            newData.name = autoVoiceIntentName + customCommand.Id.ToString();
            newData.id = customCommand.Id.ToString();
            newData.value = customCommand.Value;

            AllVoiceIntents.Add(newData);
        }

        VoiceCommandsToAdd.Clear();
    }

    private void AddSlotsToJSON()
    {
        if(SlotsForVoiceCommands.Count == 0)
        {
            return;
        }


        foreach (SlotData slot in SlotsForVoiceCommands)
        {
            SlotDataInternal newSlot = new SlotDataInternal();

            newSlot.name = slot.name;

            StringBuilder slotValueJSONString = new StringBuilder();

            slotValueJSONString.Append($"{string.Join("|", slot.values)}");

            newSlot.value = slotValueJSONString.ToString();

            container.app_slots.Add(newSlot);
        }
    }

    private void ValidationCheck()
    {
        List<string> Ids = new List<string>();
        List<string> Values = new List<string>();
        foreach (JSONData data in AllVoiceIntents)
        {
            Ids.Add(data.id);
            if (data.value.Contains("|"))
            {
                string[] splitValues = data.value.Split("|", StringSplitOptions.RemoveEmptyEntries);
                foreach (string split in splitValues)
                {
                    string final = split.Trim();
                    final = final.ToLower();
                    Values.Add(final);
                }
            }
            else
            {
                Values.Add((data.value.Trim()).ToLower());
            }
        }

        var unique_ids = new HashSet<string>(Ids);
        var unique_values = new HashSet<string>(Values);

        bool idsUnique = unique_ids.Count == Ids.Count;
        bool valuesUnique = unique_values.Count == Values.Count;

        if (!idsUnique || !valuesUnique)
        {
            Debug.LogError("The Voice Intents Configuration File has detected duplicate Values or Ids used. This could cause unwanted behaviour.");
        }
    }
}
```




