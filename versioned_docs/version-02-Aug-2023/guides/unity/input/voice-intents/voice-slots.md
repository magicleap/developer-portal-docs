---
id: voice-slots
title: Voice Slots
sidebar_position: 5
date: 04/21/2023
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

A **Slot** is a placeholder string for a set of potential values. The utterance will use one of the values and the developer can have different logic based on which value was spoken. To indicate use of a slot, put the slot name within **{ }** for the command.

<Image url= {require("/img/unity/SimpleSlot.png")} >Slot setup</Image>

When the event is triggered, different logic can be applied based on which slot was used if there were multiple in one command and which specific value was uttered. The uttered value is provided in the `IntentEvent` data with a list of `EventSlot` structures called `EventSlotsUsed`.

```csharp
void VoiceEvent(in bool wasSuccessful, in MLVoice.IntentEvent voiceEvent)
{
    if(voiceEvent.EventSlotsUsed.Count > 0)
    {
        MLVoice.EventSlot SlotData = voiceEvent.EventSlotsUsed.FirstOrDefault(s => s.SlotName == "Color");
       
        if(SlotData.SlotName == "Color")
        {
            switch (SlotData.SlotValue)
            {
                case "Red":
                    {
                        rend.material = RedMaterial;
                        break;
                    }
                case "Green":
                    {
                        rend.material = GreenMaterial;
                        break;
                    }
                case "Blue":
                    {
                        rend.material = BlueMaterial;
                        break;
                    }
            }
        }
    }
}

```

## Optional Expressions

Any word followed by a **?** will be optional as will any set of words within **[ ]**. An example of this would be the command **Turn the? Lights Off**. The utterance for this could be "Turn the lights off" or "Turn lights off", and the word "the" is optional. Either variation will still trigger the voice event for this command.

## The Use of OR Operator

- Values are allowed to use **|** as an **OR** representation. Anything after the pipe will be considered a separate expression.
- To just use an OR between two words in an expression surround them with **( )**. An example of this would be the command **Turn the? (Lights|Light) off**. Uttering the command with "Lights" or "Light" will trigger the voice event for this command.

This can also be used for Slots. The image below shows the command **Slot Test for ({Shape}|{Color})**. Valid utterances can use both shape and color values.

Example: "Slot Test for Circle" or "Slot Test for Blue". Either will trigger the voice event for this command, and the developer can determine the logic based on which slot name and value was used.

<Image url= {require("/img/unity/SlotsOr.png")} >Slots Or display</Image>

## Important Notes

- Assumes 1 App is using at a time. Does not support multiple apps using concurrently.
- To avoid potential system issues, Unity automatically stops  voice processing when the application is paused and resumes it when resuming the app

