---
id: voice-design-guidelines
title: Design Guidelines
sidebar_position: 7
date: 08/30/2022
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

# Voice Intent Design Guidelines

## Introduction

The purpose of this document is to help Magic Leap app developers understand how to design their own app voice intents (also known as voice commands) that work seamlessly alongside system voice intents on the Magic Leap 2.

**System voice intents** control Magic Leap’s device settings and help users quickly navigate the operating system. System voice intents can be triggered by speaking the wake word “Hey Magic Leap” followed by a system voice intent. If needed, you can disable some or all of the system voice intents while users are in your app.

**App voice intents** control an application just as you might with a controller. Users can use their voice to navigate an app while their hands are busy or to quickly complete tasks that would otherwise be tedious with other modes of input, ultimately reducing the cognitive load. App intents are designed so that users don’t need to use a wake word and can simply speak the voice intent. This allows for quick, simple and more natural interactions.

## Useful Links

- [System Voice Intents](/versioned_docs/version-31-Aug-2023/guides/features/voice-commands)
- [Unity Voice Input](/versioned_docs/version-31-Aug-2023/guides/unity/input/voice-intents/voice-intents-overview.md)
- [CAPI Voice Input](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___input/struct_m_l_voice_intent_settings.md)

## Understanding Intents

Voice Intents are broken down into the following phases:

### Understand

- You can think of this phase as the time to ask Magic Leap to undertake an action and ask for additional information or clarification if necessary.
- Parameters that are required to complete an action may be noted as well as those that are optional.

### Confirm

- The confirm phase happens when you have all the information you need to handle the intent. This phase can give people a chance to make sure they want to complete the task. Errors may also be presented at this phase.

### Execute

- Third, the system performs the task during the execute phase. Magic Leap provides both visual and textual information that lets users know that they were heard, and that the task was completed.

## Anatomy of Voice Intents

A voice intent consists of three elements at its core: **intent**, **utterance**, and **slot**.

### Intent

- The intent represents the objective of the user’s voice intent. Voice interactions’ intent may be a low utility or high utility interaction.
- A high utility interaction refers to very specific tasks, such as increasing volume and a low utility interaction, on the other hand, is about performing more general tasks. We recommend sticking to High Utility Interactions

### Slot

- Slots are optional arguments, or variables, to intents which are requested from the user to complete the action.
- Details related to an intent, such as a direction (i.e. up, down, left, or right) to move an object, that serve as arguments to the intent, are known as Slots. Slots may be required to complete an action and others may be optional.

### Utterance

- The utterance corresponds to a spoken phrase in which a user expresses the voice intent.
- Some intent utterances can be relatively simple such as “Save”. Other intents may require several utterances to be included to suit different user’s speaking styles and reduce mental load.
- For the Magic Leap 2, we recommend designing the utterances using the 4 Grice’s Maxims.

## Voice Intent Design Principles

### Grice’s Maxims

Grice’s Maxims, also known as the [Cooperative Principle](https://en.wikipedia.org/wiki/Cooperative_principle), is comprised of a set of 4 maxims that help facilitate good communication. We recommend abiding by the maxims below as they are a simple framework to follow when designing voice user interfaces. They keep communication flows simple and engaging for users and make it simple for you to extract the information you need to develop interactions in your applications.

### 1. Maxim of Quantity: Length & Depth

_“Don’t make your contribution more informative than is required.”_

Magic Leap users use voice intents to quickly access menu options, change settings, and work with tools within apps. Unlike conversational AI used by consumers, Magic Leap users are business users who need to efficiently access settings and app features. Full sentences, long names, and formalities are unnecessary. Lengthy voice intents take too long to say and make it more difficult for users to accomplish tasks.

**Keep it short and simple.**

```
Write this: "Take photo"
Not this: "I would like to take a photograph please."
```

Short and simple should not be extreme such as a single word. Utterances that are too short will reduce speech recognition, especially in noisy environments.

```
Write this: "Go home"
Not this: "Home"
```

### 2. Maxim of Manner: Clarity

_“Be perspicuous.”_

Use language that clearly correlates to an intent. If a person would need to infer information based on knowledge not specified in the voice intents, it’s probably not very clear.

The Maxim of Manner can be achieved using the following principles:

- **Avoid obscurity of expression** — i.e., avoid language that is difficult to understand.
- **Avoid ambiguity** — i.e., avoid language that can be interpreted in multiple ways.
- **Be brief** — i.e., avoid unnecessary prolixity.
- **Be orderly & professional** — i.e., provide information in an order that makes sense, and makes it easy for the recipient to process it

```
Write this: "Increase the volume."
Not this: "Crank it up."
```

In this example, we don’t know what “it” is and a non-native English speaker would likely have trouble understanding this as a colloquial way of asking for the volume to be increased. Furthermore, you should design your voice intents to be professional and appropriate for a business environment.This helps all users to quickly learn your voice intents and work with them intuitively. By specifying “volume” in the voice intent, you avoid any ambiguity between turning up the volume and turning up the screen brightness. Think about whether you might use a particular voice intent in some other intent and if that might be confusing to a user.

### 3. Maxim of Relation: Relevance

_“All the information they provide is relevant to the task; therefore omit any irrelevant information”_

Voice intents should provide as much information as is needed, no more and no less.

Depending on your use case, you may want to give users the ability to increase the brightness of their screen or of an object. You may want them to specify which object to control or make it so they don’t have to specify an object. You may also want them to specify a percentage to set. Users want to be helpful and provide as much information as needed to accomplish their goal. Give them the opportunity to provide that information without overburdening them.

```
Write this: "Increase screen brightness."
Not this: "Make it brighter."
```

### 4. Maxim of Quality: Truth

_“Make your contribution one that is true to the core functions of your app.”_

Identify your application’s Key Tasks and keep intents relevant to those. The communication between your app and the operating system is based on the intents — that is, the tasks — your app helps people perform. When possible, take advantage of the intents that Magic Leap has defined by enabling them within your app. Using system-provided intents can make your job easier, while still giving you opportunities to customize the experience. However, if your app offers tasks that aren’t represented by system-defined intents — you can create a custom intent.

