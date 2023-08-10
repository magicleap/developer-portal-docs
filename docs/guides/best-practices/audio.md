---
id: audio
title: Audio Guidelines
date: 08/10/2022
sidebar_position: 2
tags: [Features, Audio]
keywords: [Features, Audio]
---

In the dynamic world of AR applications, audio serves as a powerful tool that complements and enhances the visual experience, immersing users in a multisensory environment. While visuals play a crucial role in AR, audio brings an added layer of depth and realism, enabling developers to create truly immersive and engaging experiences.

Unlike visuals, audio is not restricted by field of view, allowing sound to emanate from any direction around the user, asking for their attention and guiding their focus. Whether it is ambient background noise, interactive sound effects, or spatial audio-cues, audio can communicate information, confirm user interactions, and foster a deeper connection between the user and the AR environment.

This guide will explore the significance of audio in AR applications and provide comprehensive guidelines for developers to effectively implement audio within their AR experiences.

## Audio Asset Creation & Export

### Asset creation

- Include details in sound assets: The more intricate and detailed the sound is, the easier it becomes to spatialize it effectively. Simple sine waves lack the complexity that our ears perceive as spatial. When creating sound assets, aim to incorporate multiple layers, textures, and variations to enhance spatial perception.

- Utilize a wide frequency range: Sounds that span a broad frequency spectrum provide more spatial cues for our ears to perceive directionality and positioning within the AR environment. Including a diverse range of frequencies in the sound assets can aid in accurate spatialization and localization.

- Consider adding white noise or slight distortion: Adding subtle elements like white noise or mild distortion to the sound assets can assist in their spatialization. These elements help in creating a sense of space and depth, making the sound feel more integrated into the AR environment.

- Test and refine the spatialization: It is essential to test the sound assets with context, on device to know how the end result would sound after spatialization and interactivity is added to them. Sounds might come out differently than how they sounded on a computer.

### Audio File Format and Sampling Rate

- To ensure high audio fidelity, it is advised to use source .wav files with a minimum sampling rate of 48kHz. The use of uncompressed .wav files allows for better quality and flexibility during spatial processing.

- Compressed audio formats can result in a loss of quality, so it is recommended to use uncompressed files however the spatializer plugin would work on .mp3 or .ogg files as well.

### Normalization and Mixing

- Normalize audio files to -1dBFS to provide room for subtractive mixing. Lowering individual levels instead of adding gain allows for better control and avoids clipping.

- Consider the overall dynamic range of the audio to ensure important details are not lost or overwhelmed.

- Spatialization, specifically distance attenuation, filtering etc, all reduce the volume of a source sound. Starting with audio assets that have healthy levels ensures that the sound remains audible even after spatial processing implementation.

### Spatialization and Channel Configuration

- For spatial audio sources, design and export files as mono to ensure accurate positioning and placement within the AR environment.

- Avoid using stereo source files unless there is a specific need for directing audio to two distinct locations relative to the user.

- If a stereo image is required in a spatial environment, export the left (L) and right (R) channels separately and attach them to separate objects located on the corresponding L and R sides relative to the listener.

### Dry Export and Real-time Spatialization

- Export audio files intended for spatialization as "dry" as possible, without added reverb or delay effects.

- Use the Soundfield spatialization algorithm to dynamically add reflections, reverb, and other spatial effects in real-time.

- Following this approach allows for greater flexibility and control over the spatial audio experience, tailoring it to the specific AR environment.

### Frequency Considerations

- Prioritize the use of higher frequencies rather than lower ones, considering the audible range of frequencies on the device (500 Hz - 12 kHz)

<Image url= {require("/img/audio/frequency.png")}>Right IR Export sample</Image>

- Ensure important audio elements and details are within the audible range, with frequencies around 1 kHz serving as a reference point for balancing the overall audio mix.

## Spatial Audio Implementation & Properties

Spatial audio has many possible configurations, and attention should be given to the spatial properties of any given sound to ensure that the way a sound is being rendered is appropriate for the context of that sound. You may need to tweak certain settings to achieve the creative goals of a given sound, be that striving for hyper-realism or simple utility sounds.

When implementing spatial audio using MSA, there are few main properties to consider:

### Distance Attenuation

Consider adjusting the distance attenuation of a sound to mimic the natural decrease in volume as the user moves farther away from the sound source.

Ensure that distant sounds are appropriately attenuated to create a realistic sense of depth and distance in the AR environment.

### Direct vs. Indirect Mix (Dry/Wet Mix)

Balance the mix between direct sound (dry) and indirect sound (wet) to achieve the desired spatial perception.

Direct sound is the sound that reaches the user's ears without any reflections or reverb, while indirect sound includes reflections and reverb that contribute to the spatial experience.

### Pre-Delay and Reverb

Experiment with pre-delay settings to create a sense of space and depth by introducing a short delay before the onset of reverberation.

Adjust reverb parameters to simulate different acoustic environments and enhance the spatial realism of the audio.

Consider using spatial mapping to get an accurate reverb reflection based on the room size and shape.

### Obstructions

Consider how physical or virtual objects may obstruct the propagation of sound in the AR environment.

Implement occlusion to simulate audio occlusion when sounds are obstructed by objects, enhancing the sense of realism and immersion.

### Default Settings

The figure below shows the default settings of an MLListener.

<Image url= {require("/img/audio/default.png")}>MLListener default settings</Image>

These defaults provide a good place to start, and lots of things to experiment. Understand how the default settings affect spatial audio rendering and adjust them as necessary to align with your creative intentions.

### When to Spatialize a Sound

Spatialize sounds that have a spatial visual counterpart, ensuring the audio corresponds to the perceived source in the AR environment.
Examples include interactable UI elements (buttons, toggles, sliders), where the sound source is placed at the location of the button or interaction point.

### When Not to Spatialize a Sound

Some sounds may not require spatialization, such as those without a visual component or specific reasons not to alter the sound through spatialization.

Non-spatial sounds can be utilized for system indicators, alerts, alarms, low-level services or hardware states, where spatialization may not be necessary or appropriate.

### General Rules for 2D Sounds

Use non-spatial audio for sounds with no visual component or headlocked visual content.

Consider non-spatial audio for user states within the app, hardware-related sounds, or ported apps without a need for spatialization.

In multi-user scenarios, differentiate spatial and non-spatial sounds based on the user's perspective or virtual representation.

## Interactive Audio Design

Sound is one of our primary communication tools when designing interactions. Sound can ask for our attention, confirm user intent, or provide feedback in a way that is intuitive. Here are some recommendations when adding interactive audio to your experiences.

### Asking for User's Attention

To ensure a seamless flow within your application, the first question to ask yourself as a designer is, "How much attention is needed from the user?" Understanding the level of attention required allows us to categorize the attention-grabbing elements into different levels, each tailored to the urgency and importance of the message.

Consider three categories: low-risk attention, medium attention, and high attention.

#### Low-Risk Attention

*Examples include informative updates, non-critical notifications, or minor status changes.*

- Consider short, tactile sounds that can blend with the environment while still capturing the user's attention.

- Design audio cues that are noticeable but not overly disruptive, allowing the user to stay focused on their primary task.

- Consider an approach of a “by the way” sound language, that will inform users but can keep the flow of the app. 

- Consider using organic sounds, as those are less obvious in the user’s perception.

#### Medium Attention

*Examples include someone joining a call, incoming messages, pending tasks.*

- Employ more distinct and noticeable sounds to alert users to moderately important events or actions.

- Balance the audio cues to ensure they are attention-grabbing without causing undue interruption or distraction.

- Consider developing a certain pattern/audio language (like a specific tone) that will inform the listener on what’s going on without interrupting the flow (for example : a notification sound can have a distinct characteristic that users will associate with an incoming message, and will know based on the sound language what the message is).

#### High Attention

*These cues require immediate user attention. Examples include errors, security breaches, or time-sensitive notifications.*

- Implement highly noticeable and attention-demanding sounds for critical alerts or urgent matters.

- Choose sounds that are distinctive and easily distinguishable from other audio elements in the environment, ensuring users respond promptly to the urgent situation.

- High pitch tones, especially if designed synthetically (with a synthesizer) are easily noticeable since they are very distinct in our environment.

- Try pairing the audio alert with another system, such as a visual cue and haptic feedback, to ensure you get the user’s attention.

### Confirming User Intent

In addition to capturing user attention, audio serves another crucial purpose in user interfaces: confirming user actions. Particularly with new devices or unfamiliar interactions, users often lack certainty about whether their actions have been successfully received by the system. Without proper feedback, users can experience frustration and uncertainty, leading to a bad user experience. Audio feedback, when implemented effectively, provides reassurance and confirmation to users that their commands have been acknowledged.

- Use sound to provide confirmation that the system has understood the user's input or command.

- Design distinct and recognizable audio cues that indicate successful interaction or completion of a task.

- Ensure the confirmation sounds are clear and distinguishable from other audio elements in the AR environment.

- Avoid adding sounds to negative user interaction. Adding sound when the user is doing something wrong will emphasize the mistake and will create stress and frustration.

- Misalignment between what the user can interact with and the sound implementation might create a cognitive dissonance or break immersion. Try to consider all the possible scenarios a user might experience while going through the app and give purposeful feedback to any interaction.

### Providing Feedback

Providing feedback to users is a fundamental aspect of user experience design, and sound can play a crucial role in delivering this feedback effectively. When audio, visuals, and haptics are thoughtfully integrated, sharing a coherent design language, they create a seamless and immersive application experience. The combination of these feedback modalities, when harmoniously synchronized, can elevate the user experience to a new level of engagement. Users may not consciously notice the individual elements, but their collective presence contributes to a cohesive and intuitive application interface. To achieve this level of seamless feedback, there are some rules of thumb to consider.

- Enhance the user's understanding and engagement by providing audio feedback for their actions within the AR application.

- Associate appropriate sound effects with specific user interactions, such as button presses, object manipulation, or menu selections.

- Ensure the feedback sounds are intuitive and aligned with the user's mental model, providing a seamless and immersive experience.

### Sound Characteristics

- Consider the characteristics of sounds used for interactive audio and sound effects.

- Higher-pitched sounds tend to grab more attention, while lower, tactile sounds can provide subtle feedback without being intrusive.

- Experiment with different sound frequencies, volume levels, spatialization, reverb and durations to find the optimal balance between capturing attention and providing a pleasant user experience.

## Accessibility and User Preferences

Factors like noisy surroundings, hearing difficulties or hearing impairment, or distractions in the environment can make it challenging for users to solely rely on audio cues. To overcome these challenges, consider combining audio with other feedback systems. For example, adding haptic feedback alongside audio can gently grab the user's attention, and combining audio with visuals provides more context and improves understanding.
