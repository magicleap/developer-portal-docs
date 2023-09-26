---
id: voice-intent-development-toolkit
title: Voice Intent Development Toolkit
sidebar_position: 6
date: 07/26/2023
tags: [Voice, Commands, Android, Toolkit,]
keywords: [Voice, Commands, Android, Toolkit,]
---

## Overview

The Voice Intent Development Toolkit (VIDTK) serves as an assistant for building application specific voice experiences. It assists the developer in the voice intent development lifecycle by offering insights into the anatomy of voice intents, specifically into their syntax and semantics.

The intuitive user interface guides the Voice Intent Developer from creation of the first voice intent to the creation of the asset (JSON file) that will, co-deployed with the application on the device, enable a customized voice experience. This facilitates a more efficient development lifecycle, creating a better overall voice experience for both the developer and the user.

We recommend using the VIDTK for any application-specific voice intent development.

### Related 

[Voice Design Guidelines](https://developer-docs.magicleap.cloud/docs/guides/features/voice-commands/voice-design-guidelines)

## Supported Languages

The following languages are currently supported,

- English (US)
- Japanese

## Naming Conventions

Since grammar files are the foundation of voice intents, it’s important to start with good naming conventions. Pick names that are descriptive and follow these rules. You can simply name your intent variables after their corresponding phrases and that’s okay. Only alphanumeric characters and underscores are supported.

- **Intents**: Intents should be named in all-caps with snake_case. The naming convention “ML_” is reserved for ML system intents and should not be used by application specific intents. Pick a short abbreviation for your app name followed by an underscore to differentiate your app intents.
  - Examples: APP_CAPTURE, APP_MENU, APP_YES, APP_NO
- **Slots**: Slots should be named in CamelCase with the first letter in uppercase.
  - Examples: Color, MenuOption, VolumeLevel
- **Variables**: Variables should be named using all lowercase snake_case with multiple words.
  - Examples: digit_single, degrees_rule

## Samples

### Simple (Intents only)

In the tabularized example below there are a total of five intents from which the first two, “APP_CONFIRM” and “APP_REJECT”, are app specific intents (App Intents) and the last three are system intents (System Intents). App specific intents allow you to associate one or more utterances with that specific intent. One can think about it as a group of different utterances that will trigger the intent.

| Field | Name | Value |
| --- | --- | --- |
| app_intents | APP_CONFIRM | confirm \| positive \| affirm \| agree |
| app_intents | APP_REJECT | deny / reject |
| sys_intent_list | ML_SYSAUDIO_MUTE | [empty] |
| sys_intent_list | ML_SYSAUDIO_UNMUTE | [empty] |
| sys_intent_list | ML_SYSAUDIO_VOLUME_DOWN | [empty] |

Before validation we enter the above table values into the VIDTK UI using the following steps:

1. Define App Intents

![Define App Intents](/img/vidtk/vidtk-1.png)

2. Define System Intents

![Define System Intents](/img/vidtk/vidtk-2.png)

Before deploying the output with the Android application on the ML2 device, the “Validate” button enables the user to use the VIDTK for uncovering potential issues such as warnings and errors.

![The “Validate” button enables the user to use the VIDTK for uncovering potential issues such as warnings and errors.](/img/vidtk/vidtk-3.png)

In our example, no issues were found and we can export our work to an ML2 compatible file (JSON) format using the “Export” button.

``` json
{
 "language": "en-us",
 "version": 1,
 "_comment1": "[optional] list of slots shared by all app intents",
 "app_slots": [],
 "_comment2": "[optional] list of variables shared by all app intents",
 "app_variables": [],
 "_comment3": "[required] list of app intents",
 "app_intents": [
   {
     "name": "APP_CONFIRM",
     "value": "confirm | positive | affirm | agree",
     "id": 0
   },
   {
     "name": "APP_REJECT",
     "value": "deny | reject",
     "id": 1
   }
 ],
 "_comment4": "[optional] namelist of subscribed ML system intents",
 "_comment5": "all default system intents are subscribed if this section doesn’t exist",
 "_comment6": "NO system intents are subscribed if the value field for key “name” is empty",
 "_comment7": "Partial system intents are subscribed if the value field contains some system intent names",
 "sys_intent_list": {
   "name": [
     "ML_SYSAUDIO_MUTE",
     "ML_SYSAUDIO_UNMUTE",
     "ML_SYSAUDIO_VOLUME_DOWN"
   ]
 }
}
```

To continue, simply use the “Import” button and continue designing and developing the desired Voice Intent experience. 

## Advanced

### Grammar

In order to provide more flexibility in the formulation of intents we are allowing a regular-expression-like syntax to formulate intents. 

**Allowed operators**

| Operator | Description |
| --- | --- |
| \| | A pipe symbol separates alternative items. |
| () | Parentheses enclose items that are grouped together. |
| ? | A question mark following a symbol denotes an optional item. |
| {} | Braces implement slot-capturing semantic markup. |
| $ | A dollar sign precedes a variable which has a rule defined earlier in the grammar.|

Note that we are introducing two terms in this context “variable” and “slot”.

### Variables

A “variable” or non-terminal in terms of context-free grammars, serves purely as a grammatical tool to express variability. Instead of repeating an utterance with multiple shared substrings, one can use “variables” for purposes of convenience.

#### Example

**Before**:

| Field | Name | Value |
| --- | --- | --- | 
| app_intents | APP_CONFIRM | I hereby confirm \| I hereby validate \| I hereby acknowledge \| I hereby verify \| I hereby affirm |

**After (in variables notation)**:

| Field | Name | Value |
| --- | --- | --- |
| app_variable | confirmation_variable | confirm \| validate \| acknowledge \| verify \| affirm |
| app_intents | APP_CONFIRM | I hereby $confirmation_variable |

Note in the grammar we provide “before” and “after” are equivalent.

### Slots

Slots are similar to variables in that they express variability however “{}” notation serves as markup to be able to access those values specifically via Unity or the C-API. 

Here is an example supporting the full grammar:

| field | name | value |
| --- | --- | --- | 
| app_slots | Loudness | high\|medium\|low |
| app_slots | VolumePercent | 1\|2\|3\|4\|5\|6 |
| app_variables | volume_type | sound \| volume |
| app_variables | time_type | year \| month \| day |
| app_intents | APP_CONFIRM | Confirm {Loudness} |
| app_intents | APP_SET_VOL | (set \| change) the ? $volume_type (to \| at) {VolumePercent} percent ? |
| sys_intent_list |  ML_SYSAUDIO_MUTE | [empty]|
| sys_intent_list | ML_SYSAUDIO_UNMUTE |    [empty]|
| sys_intent_list | ML_SYSAUDIO_VOLUME_DOWN |   [empty]|

Following the analogous steps as in the previous example, we:

 a. Define App Intents

 ![Define System Intents](/img/vidtk/vidtk-4.png)

 b. Define App Variables

 ![Define System Intents](/img/vidtk/vidtk-5.png)

 c. Define App Slots

 ![Define System Intents](/img/vidtk/vidtk-6.png)

 d. Define System Intents

 ![Define System Intents](/img/vidtk/vidtk-7.png)

Note that the definition order is commutative.

Using the “Validate” button yields:

 ![Define System Intents](/img/vidtk/vidtk-8.png)

Where the lower left “Validation successful” signals us that we can export the file and then co-deploy it with an Android app. 

### Error and Warning Messages

Please find below a few screenshots depicting those error messages.

1. Use of invalid symbols. Here we add the “+” operator that we don’t support, issuing an error message.

![Define System Intents](/img/vidtk/vidtk-9.png)

![Define System Intents](/img/vidtk/vidtk-10.png)

2. Misspelled word. Here we changed the variable value “volume” to “volumer”, issuing a warning message.

![Define System Intents](/img/vidtk/vidtk-11.png)

![Define System Intents](/img/vidtk/vidtk-12.png)

3. Identical Utterances. Here we created two intents sharing the utterance “Confirm {Loudness}”.

![Define System Intents](/img/vidtk/vidtk-13.png)
