---
title: ml_input.h

---

# ml_input.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MLInputControllerTouchpadGesture](/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md)**  |
| struct | **[MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md)** <br></br>A structure containing callbacks for input controller events.  |
| struct | **[MLInputControllerState](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md)** <br></br>A structure containing information about the current state of an input controller.  |
| struct | **[MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md)** <br></br>A structure containing information about the current state of an input controller.  |
| struct | **[MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md)** <br></br>A structure containing information about the connected devices.  |
| struct | **[MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md)** <br></br>A structure containing information about the Pre-Defined pattern to be played.  |
| struct | **[MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md)** <br></br>A structure containing information about the Buzz command to be played.  |
| struct | **[MLInputCustomHaptics](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md)** <br></br>A structure containing information about the Buzz command and/or pre-defined pattern to be played.  |
| struct | **[MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md)** <br></br>A structure containing a list of Buzz command and/or pre-defined patterns to be played.  |
| union | **[MLInputCustomHaptics.MLInputCustomHapticsPattern](/api-ref/api/Modules/group___input/union_m_l_input_custom_haptics_8_m_l_input_custom_haptics_pattern.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [MLInputControllerTouchpadGesture](/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md) | **[MLInputControllerTouchpadGesture](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputcontrollertouchpadgesture)**  |
| typedef struct [MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md) | **[MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputcontrollercallbacksex)** <br></br>A structure containing callbacks for input controller events.  |
| typedef struct [MLInputControllerState](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md) | **[MLInputControllerState](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputcontrollerstate)** <br></br>A structure containing information about the current state of an input controller.  |
| typedef struct [MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md) | **[MLInputControllerStateEx](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputcontrollerstateex)** <br></br>A structure containing information about the current state of an input controller.  |
| typedef struct [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) | **[MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputconnecteddeviceslist)** <br></br>A structure containing information about the connected devices.  |
| typedef struct [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) | **[MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputpredefinedpattern)** <br></br>A structure containing information about the Pre-Defined pattern to be played.  |
| typedef struct [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) | **[MLInputBuzzCommand](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputbuzzcommand)** <br></br>A structure containing information about the Buzz command to be played.  |
| typedef struct [MLInputCustomHaptics](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md) | **[MLInputCustomHaptics](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputcustomhaptics)** <br></br>A structure containing information about the Buzz command and/or pre-defined pattern to be played.  |
| typedef struct [MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) | **[MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/group___input.md#struct-mlinputcustomhapticsinfo)** <br></br>A structure containing a list of Buzz command and/or pre-defined patterns to be played.  |

## Enums

|                | Name           |
| -------------- | -------------- |
| enum | **[Anonymous Enum 13](/api-ref/api/Modules/group___input/group___input.md#enums-anonymous-enum-13)** <br></br> { <br></br>[MLResultAPIPrefix_Input](/api-ref/api/Files/ml__input_8h.md#enums-mlresultapiprefix-input) = ( 0x21DC  << 16)<br></br>} |
| enum | **[MLInputResult](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputresult)** <br></br> { <br></br>[MLInputResult_ServiceNotAvailable](/api-ref/api/Files/ml__input_8h.md#enums-mlinputresult-servicenotavailable) = MLResultAPIPrefix_Input,<br></br> [MLInputResult_PermissionDenied](/api-ref/api/Files/ml__input_8h.md#enums-mlinputresult-permissiondenied),<br></br> [MLInputResult_DeviceNotFound](/api-ref/api/Files/ml__input_8h.md#enums-mlinputresult-devicenotfound),<br></br> [MLInputResult_IllegalState](/api-ref/api/Files/ml__input_8h.md#enums-mlinputresult-illegalstate),<br></br> [MLInputResult_InternalError](/api-ref/api/Files/ml__input_8h.md#enums-mlinputresult-internalerror),<br></br> [MLInputResult_SpeechDisabled](/api-ref/api/Files/ml__input_8h.md#enums-mlinputresult-speechdisabled),<br></br> [MLInputResult_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputresult-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Return values for Input API calls.  |
| enum | **[Anonymous Enum 14](/api-ref/api/Modules/group___input/group___input.md#enums-anonymous-enum-14)** <br></br> { <br></br>[MLInput_MaxControllers](/api-ref/api/Files/ml__input_8h.md#enums-mlinput-maxcontrollers) = 1,<br></br> [MLInput_MaxControllerTouchpadTouches](/api-ref/api/Files/ml__input_8h.md#enums-mlinput-maxcontrollertouchpadtouches) = 2<br></br>} |
| enum | **[MLInputControllerTouchpadGestureState](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertouchpadgesturestate)** <br></br> { <br></br>[MLInputControllerTouchpadGestureState_End](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturestate-end),<br></br> [MLInputControllerTouchpadGestureState_Continue](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturestate-continue),<br></br> [MLInputControllerTouchpadGestureState_Start](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturestate-start),<br></br> [MLInputControllerTouchpadGestureState_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturestate-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLInputControllerTouchpadGestureType](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertouchpadgesturetype)** <br></br> { <br></br>[MLInputControllerTouchpadGestureType_None](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-none),<br></br> [MLInputControllerTouchpadGestureType_Tap](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-tap),<br></br> [MLInputControllerTouchpadGestureType_ForceTapDown](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-forcetapdown),<br></br> [MLInputControllerTouchpadGestureType_ForceTapUp](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-forcetapup),<br></br> [MLInputControllerTouchpadGestureType_ForceDwell](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-forcedwell),<br></br> [MLInputControllerTouchpadGestureType_SecondForceDown](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-secondforcedown),<br></br> [MLInputControllerTouchpadGestureType_RadialScroll](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-radialscroll),<br></br> [MLInputControllerTouchpadGestureType_Swipe](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-swipe),<br></br> [MLInputControllerTouchpadGestureType_Count](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-count),<br></br> [MLInputControllerTouchpadGestureType_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturetype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLInputControllerTouchpadGestureDirection](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertouchpadgesturedirection)** <br></br> { <br></br>[MLInputControllerTouchpadGestureDirection_None](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-none),<br></br> [MLInputControllerTouchpadGestureDirection_Up](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-up),<br></br> [MLInputControllerTouchpadGestureDirection_Down](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-down),<br></br> [MLInputControllerTouchpadGestureDirection_Left](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-left),<br></br> [MLInputControllerTouchpadGestureDirection_Right](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-right),<br></br> [MLInputControllerTouchpadGestureDirection_Clockwise](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-clockwise),<br></br> [MLInputControllerTouchpadGestureDirection_CounterClockwise](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-counterclockwise),<br></br> [MLInputControllerTouchpadGestureDirection_Count](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-count),<br></br> [MLInputControllerTouchpadGestureDirection_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertouchpadgesturedirection-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLInputControllerType](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertype)** <br></br> { <br></br>[MLInputControllerType_None](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertype-none),<br></br> [MLInputControllerType_Device](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertype-device),<br></br> [MLInputControllerType_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLInputControllerButton](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollerbutton)** <br></br> { <br></br>[MLInputControllerButton_None](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerbutton-none),<br></br> [MLInputControllerButton_Bumper](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerbutton-bumper),<br></br> [MLInputControllerButton_Menu](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerbutton-menu),<br></br> [MLInputControllerButton_Count](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerbutton-count),<br></br> [MLInputControllerButton_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerbutton-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLInputControllerTriggerEvent](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollertriggerevent)** <br></br> { <br></br>[MLInputControllerTriggerEvent_Pull](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertriggerevent-pull),<br></br> [MLInputControllerTriggerEvent_Release](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertriggerevent-release),<br></br> [MLInputControllerTriggerEvent_Click](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertriggerevent-click),<br></br> [MLInputControllerTriggerEvent_Hold](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertriggerevent-hold),<br></br> [MLInputControllerTriggerEvent_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollertriggerevent-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLInputPreDefinedPatternType](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputpredefinedpatterntype)** <br></br> { <br></br>[MLInputPreDefinedPatternType_A](/api-ref/api/Files/ml__input_8h.md#enums-mlinputpredefinedpatterntype-a) = 0,<br></br> [MLInputPreDefinedPatternType_B](/api-ref/api/Files/ml__input_8h.md#enums-mlinputpredefinedpatterntype-b) = 1,<br></br> [MLInputPreDefinedPatternType_C](/api-ref/api/Files/ml__input_8h.md#enums-mlinputpredefinedpatterntype-c) = 2,<br></br> [MLInputPreDefinedPatternType_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputpredefinedpatterntype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLInputCustomHapticsType](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcustomhapticstype)** <br></br> { <br></br>[MLInputCustomHapticsType_None](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcustomhapticstype-none) = 0,<br></br> [MLInputCustomHapticsType_Buzz](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcustomhapticstype-buzz) = 1,<br></br> [MLInputCustomHapticsType_Predefined](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcustomhapticstype-predefined) = 2,<br></br> [MLInputCustomHapticsType_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcustomhapticstype-ensure32bits) = 0x7FFFFFFF<br></br>} |
| enum | **[MLInputControllerHand](/api-ref/api/Modules/group___input/group___input.md#enums-mlinputcontrollerhand)** <br></br> { <br></br>[MLInputControllerHand_None](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerhand-none) = 0,<br></br> [MLInputControllerHand_Left](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerhand-left) = 1,<br></br> [MLInputControllerHand_Right](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerhand-right) = 2,<br></br> [MLInputControllerHand_Both](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerhand-both) = 3,<br></br> [MLInputControllerHand_Ensure32Bits](/api-ref/api/Files/ml__input_8h.md#enums-mlinputcontrollerhand-ensure32bits) = 0x7FFFFFFF<br></br>}<br></br>Hand in which the controller is held.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MLInputControllerCallbacksExInit](/api-ref/api/Modules/group___input/group___input.md#void-mlinputcontrollercallbacksexinit)**([MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md) * inout_callbacks)<br></br>Initializes default values for [MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md).  |
| void | **[MLInputControllerStateExInit](/api-ref/api/Modules/group___input/group___input.md#void-mlinputcontrollerstateexinit)**([MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md) inout_attr[MLInput_MaxControllers])<br></br>Initializes values for [MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md).  |
| void | **[MLInputConnectedDevicesListInit](/api-ref/api/Modules/group___input/group___input.md#void-mlinputconnecteddeviceslistinit)**([MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) * inout_devices_list)<br></br>Initializes default values for [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md).  |
| void | **[MLInputPreDefinedPatternInit](/api-ref/api/Modules/group___input/group___input.md#void-mlinputpredefinedpatterninit)**([MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) * inout_pattern)<br></br>Initializes default values for [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md).  |
| void | **[MLInputBuzzCommandInit](/api-ref/api/Modules/group___input/group___input.md#void-mlinputbuzzcommandinit)**([MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) * inout_command)<br></br>Initializes default values for [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md).  |
| void | **[MLInputCustomHapticsInfoInit](/api-ref/api/Modules/group___input/group___input.md#void-mlinputcustomhapticsinfoinit)**([MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) * inout_info)<br></br>Initializes an array of [MLInputCustomHaptics](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md) with default values.  |
| const char * | **[MLInputGetResultString](/api-ref/api/Modules/group___input/group___input.md#const-char-mlinputgetresultstring)**([MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) result)<br></br>Returns an ASCII string for MLInputsResult and MLResult codes.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputCreate](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * out_handle)<br></br>Creates an input tracker.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputSetControllerCallbacksEx](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputsetcontrollercallbacksex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, const [MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md) * controller_callbacks, void * user_data)<br></br>Sets the callbacks for controller input events.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputGetControllerState](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetcontrollerstate)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, struct [MLInputControllerState](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md) out_state[MLInput_MaxControllers])<br></br>Returns current state of all possible input controllers.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputGetControllerStateEx](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetcontrollerstateex)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md) out_state[MLInput_MaxControllers])<br></br>Returns current state of all possible input controllers.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputGetConnectedDevices](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetconnecteddevices)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) * inout_devices)<br></br>Gets the device IDs of all connected devices.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputReleaseConnectedDevicesList](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputreleaseconnecteddeviceslist)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) * devices)<br></br>Releases the contents of [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) populated by [MLInputGetConnectedDevices](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetconnecteddevices).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputStartControllerFeedbackPreDefinedPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackpredefinedpattern)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint8_t controller_id, [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) * pattern)<br></br>Plays the pre-defined pattern.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputStartControllerFeedbackBuzzCommand](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackbuzzcommand)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint8_t controller_id, const [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) * command)<br></br>Plays controller haptic buzz command.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputCreateCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, [MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) * info, uint32_t * inout_pattern_id)<br></br>Creates a custom haptic pattern.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputStartControllerFeedbackCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackcustomhapticspattern)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint8_t controller_id, uint32_t pattern_id)<br></br>Plays the custom haptic pattern created by [MLInputCreateCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputDeleteCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputdeletecustomhapticspattern)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint32_t pattern_id)<br></br>Deletes the custom haptic pattern created by [MLInputCreateCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern).  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputStopControllerFeedback](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstopcontrollerfeedback)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle, uint8_t controller_id)<br></br>Stops the currently playing haptic pattern.  |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) | **[MLInputDestroy](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputdestroy)**([MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) handle)<br></br>Destroys an input tracker.  |

## Enums Documentation

### Anonymous Enum 13 {#enums-anonymous-enum-13}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLResultAPIPrefix_Input |  ( 0x21DC  << 16)| Defines the prefix for MLInputResult codes. |








-----------

### MLInputResult {#enums-mlinputresult}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputResult_ServiceNotAvailable |  MLResultAPIPrefix_Input| |
| MLInputResult_PermissionDenied | | Operation failed because a required permission has not been granted. Example: This can happen when the app is not in the foreground. |
| MLInputResult_DeviceNotFound | | Operation failed because a required device was not found. |
| MLInputResult_IllegalState | | Operation failed because the service was in an illegal state. Example: This can occur when the service is still initializing. |
| MLInputResult_InternalError | | Operation failed because of an internal error. |
| MLInputResult_SpeechDisabled | | Operation failed because a required speech feature is disabled in system settings. |
| MLInputResult_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Return values for Input API calls. 





-----------

### Anonymous Enum 14 {#enums-anonymous-enum-14}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInput_MaxControllers |  1| Maximum recognized number of input controllers. |
| MLInput_MaxControllerTouchpadTouches |  2| Maximum recognized number of controller touchpad touches. |








-----------

### MLInputControllerTouchpadGestureState {#enums-mlinputcontrollertouchpadgesturestate}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputControllerTouchpadGestureState_End | | End(Default). |
| MLInputControllerTouchpadGestureState_Continue | | Continue. |
| MLInputControllerTouchpadGestureState_Start | | Start. |
| MLInputControllerTouchpadGestureState_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Touchpad gesture state. 





-----------

### MLInputControllerTouchpadGestureType {#enums-mlinputcontrollertouchpadgesturetype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputControllerTouchpadGestureType_None | | None. |
| MLInputControllerTouchpadGestureType_Tap | | Tap. This is a discrete gesture. |
| MLInputControllerTouchpadGestureType_ForceTapDown | | Force tap down. This is a discrete gesture. |
| MLInputControllerTouchpadGestureType_ForceTapUp | | Force tap up. This is a discrete gesture. |
| MLInputControllerTouchpadGestureType_ForceDwell | | Force dwell. This is a discrete gesture. |
| MLInputControllerTouchpadGestureType_SecondForceDown | | Second force down. This is a discrete gesture. |
| MLInputControllerTouchpadGestureType_RadialScroll | | Radial scroll. This is a continuous gesture. |
| MLInputControllerTouchpadGestureType_Swipe | | Swipe. This is a continuous gesture. |
| MLInputControllerTouchpadGestureType_Count | | Number of gesture types. |
| MLInputControllerTouchpadGestureType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Recognized touchpad gesture types. 





-----------

### MLInputControllerTouchpadGestureDirection {#enums-mlinputcontrollertouchpadgesturedirection}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputControllerTouchpadGestureDirection_None | | None. |
| MLInputControllerTouchpadGestureDirection_Up | | Up. |
| MLInputControllerTouchpadGestureDirection_Down | | Down. |
| MLInputControllerTouchpadGestureDirection_Left | | Left. |
| MLInputControllerTouchpadGestureDirection_Right | | Right. |
| MLInputControllerTouchpadGestureDirection_Clockwise | | Clockwise. |
| MLInputControllerTouchpadGestureDirection_CounterClockwise | | Counter clockwise. |
| MLInputControllerTouchpadGestureDirection_Count | | Number of directions. |
| MLInputControllerTouchpadGestureDirection_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Direction of touchpad gesture. 





-----------

### MLInputControllerType {#enums-mlinputcontrollertype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputControllerType_None | | None. |
| MLInputControllerType_Device | | Device. |
| MLInputControllerType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Types of input controllers recognized by Magic Leap platform. 





-----------

### MLInputControllerButton {#enums-mlinputcontrollerbutton}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputControllerButton_None | | |
| MLInputControllerButton_Bumper | | Bumper. |
| MLInputControllerButton_Menu | | Menu. |
| MLInputControllerButton_Count | | Number of buttons. |
| MLInputControllerButton_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Buttons on input controllers. 





-----------

### MLInputControllerTriggerEvent {#enums-mlinputcontrollertriggerevent}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputControllerTriggerEvent_Pull | | This is used when trigger is pulled down, and the normalized value is > 0. |
| MLInputControllerTriggerEvent_Release | | This is used when trigger is fully released, and the normalized value is 0. |
| MLInputControllerTriggerEvent_Click | | This is used when trigger is pulled and released within a short duration. |
| MLInputControllerTriggerEvent_Hold | | This is used when trigger is pulled and held for a longer duration. |
| MLInputControllerTriggerEvent_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Trigger events types. 





-----------

### MLInputPreDefinedPatternType {#enums-mlinputpredefinedpatterntype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputPreDefinedPatternType_A |  0| Pre-defined pattern used for VKB hover. |
| MLInputPreDefinedPatternType_B |  1| Pre-Defined pattern used for VKB select. |
| MLInputPreDefinedPatternType_C |  2| Pre-Defined pattern used for homemenu hover. |
| MLInputPreDefinedPatternType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Custom haptics pattern types. 





-----------

### MLInputCustomHapticsType {#enums-mlinputcustomhapticstype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputCustomHapticsType_None |  0| None. |
| MLInputCustomHapticsType_Buzz |  1| Pattern is a buzz command. |
| MLInputCustomHapticsType_Predefined |  2| Pattern is a pre-defined pattern. |
| MLInputCustomHapticsType_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |




Custom haptics pattern types. 





-----------

### MLInputControllerHand {#enums-mlinputcontrollerhand}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MLInputControllerHand_None |  0| None. |
| MLInputControllerHand_Left |  1| Left hand. |
| MLInputControllerHand_Right |  2| Right hand. |
| MLInputControllerHand_Both |  3| Both hand. |
| MLInputControllerHand_Ensure32Bits |  0x7FFFFFFF| Ensure enum is represented as 32 bits. |



Hand in which the controller is held. 




**API Level:**
  * 21




-----------


## Types Documentation

### MLInputControllerTouchpadGesture {#struct-mlinputcontrollertouchpadgesture}

```cpp
typedef struct MLInputControllerTouchpadGesture MLInputControllerTouchpadGesture;
```


A structure containing information about recognized touchpad gesture. 



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_controller_touchpad_gesture.md)



-----------

### MLInputControllerCallbacksEx {#struct-mlinputcontrollercallbacksex}

```cpp
typedef struct MLInputControllerCallbacksEx MLInputControllerCallbacksEx;
```

A structure containing callbacks for input controller events. 

The final parameter to all the callbacks is a void *, which will point to whatever payload data the user provides in MLInputSetControllerCallbacksEx. Individual callbacks which are not required by the client can be NULL.

This structure must be initialized by calling [MLInputControllerCallbacksExInit()](/api-ref/api/Modules/group___input/group___input.md#void-mlinputcontrollercallbacksexinit) before use.



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md)


**API Level:**
  * 20




-----------

### MLInputControllerState {#struct-mlinputcontrollerstate}

```cpp
typedef struct MLInputControllerState MLInputControllerState;
```

A structure containing information about the current state of an input controller. 



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md)

:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal. 
:::



-----------

### MLInputControllerStateEx {#struct-mlinputcontrollerstateex}

```cpp
typedef struct MLInputControllerStateEx MLInputControllerStateEx;
```

A structure containing information about the current state of an input controller. 



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md)


**API Level:**
  * 21




-----------

### MLInputConnectedDevicesList {#struct-mlinputconnecteddeviceslist}

```cpp
typedef struct MLInputConnectedDevicesList MLInputConnectedDevicesList;
```

A structure containing information about the connected devices. 



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md)


**API Level:**
  * 20




-----------

### MLInputPreDefinedPattern {#struct-mlinputpredefinedpattern}

```cpp
typedef struct MLInputPreDefinedPattern MLInputPreDefinedPattern;
```

A structure containing information about the Pre-Defined pattern to be played. 


When playing haptic pre-defined pattern, needed information is stored in this structure. 



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md)


**API Level:**
  * 20




-----------

### MLInputBuzzCommand {#struct-mlinputbuzzcommand}

```cpp
typedef struct MLInputBuzzCommand MLInputBuzzCommand;
```

A structure containing information about the Buzz command to be played. 


When playing haptic buzz command, needed information is stored in this structure. 



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md)


**API Level:**
  * 20




-----------

### MLInputCustomHaptics {#struct-mlinputcustomhaptics}

```cpp
typedef struct MLInputCustomHaptics MLInputCustomHaptics;
```

A structure containing information about the Buzz command and/or pre-defined pattern to be played. 

A custom haptics pattern can be played by combining Buzz haptic command and/or a pre-defined pattern, this structure will hold info of a pattern to be added to the custom haptics array. A [MLInputCustomHapticsType](/api-ref/api/Modules/group___input/group___input.md#enum-mlinputcustomhapticstype) should be set while initializing the struct to indicate whether the to-be set pattern is a buzz command or a pre-defined pattern.

The #duration will set the time for which a pattern is played:

* If the inherited duration of a pre-defined pattern is greater, then it will be cut short and the next pattern will start playing.
* If the inherited duration of a pre-defined pattern is smaller, then it will not repeat itself and will wait for the #duration to complete before starting to play the next pattern.
* Buzz command's duration will supersede the #duration. Above caveat is true in case buzz command's duration is smaller.
* The last pattern of the array will continue playing even if the inherited duration is longer than #duration unless the pattern is interrupted by another pattern in the pipeline. 



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md)



-----------

### MLInputCustomHapticsInfo {#struct-mlinputcustomhapticsinfo}

```cpp
typedef struct MLInputCustomHapticsInfo MLInputCustomHapticsInfo;
```

A structure containing a list of Buzz command and/or pre-defined patterns to be played. 


A custom haptics pattern can be played by combining Buzz haptic command and/or a pre-defined pattern, this structure holds a list of such a combination. 



[More Info](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md)


**API Level:**
  * 20




-----------


## Functions Documentation

### MLInputControllerCallbacksExInit {#void-mlinputcontrollercallbacksexinit}

```cpp
static inline void MLInputControllerCallbacksExInit(
    MLInputControllerCallbacksEx * inout_callbacks
)
```

Initializes default values for [MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md) * |inout_callbacks|The object to initialize with default settings. |



**API Level:**
  * 20




-----------

### MLInputControllerStateExInit {#void-mlinputcontrollerstateexinit}

```cpp
static inline void MLInputControllerStateExInit(
    MLInputControllerStateEx inout_attr[MLInput_MaxControllers]
)
```

Initializes values for [MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md) |inout_attr|The object to initialize. |



**API Level:**
  * 21




-----------

### MLInputConnectedDevicesListInit {#void-mlinputconnecteddeviceslistinit}

```cpp
static inline void MLInputConnectedDevicesListInit(
    MLInputConnectedDevicesList * inout_devices_list
)
```

Initializes default values for [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) * |inout_devices_list|The object to initialize with default settings. |



**API Level:**
  * 20




-----------

### MLInputPreDefinedPatternInit {#void-mlinputpredefinedpatterninit}

```cpp
static inline void MLInputPreDefinedPatternInit(
    MLInputPreDefinedPattern * inout_pattern
)
```

Initializes default values for [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) * |inout_pattern|The object to initialize with default settings. |




-----------

### MLInputBuzzCommandInit {#void-mlinputbuzzcommandinit}

```cpp
static inline void MLInputBuzzCommandInit(
    MLInputBuzzCommand * inout_command
)
```

Initializes default values for [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) * |inout_command|The object to initialize with default settings. |




-----------

### MLInputCustomHapticsInfoInit {#void-mlinputcustomhapticsinfoinit}

```cpp
static inline void MLInputCustomHapticsInfoInit(
    MLInputCustomHapticsInfo * inout_info
)
```

Initializes an array of [MLInputCustomHaptics](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md) with default values. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) * |inout_info|The object to [MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) struct to initialize the array elements with default settings. |




-----------

### MLInputGetResultString {#const-char-mlinputgetresultstring}

```cpp
const char * MLInputGetResultString(
    MLResult result
)
```

Returns an ASCII string for MLInputsResult and MLResult codes. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |result|The input MLResult enum from MLInput functions. |
**Required Permissions**:

  * None 




**Return**: ASCII string containing readable version of result code.


**API Level:**
  * 8




-----------

### MLInputCreate {#mlresult-mlinputcreate}

```cpp
MLResult MLInputCreate(
    MLHandle * out_handle
)
```

Creates an input tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) * |out_handle|A handle to the created input tracker. Only valid if the return value is MLResult_Ok. |

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create the input tracker to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created the input tracker. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create the input tracker due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLInputResult_IllegalState|Failed to create the input tracker due to an unexpected state.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLInputSetControllerCallbacksEx {#mlresult-mlinputsetcontrollercallbacksex}

```cpp
MLResult MLInputSetControllerCallbacksEx(
    MLHandle handle,
    const MLInputControllerCallbacksEx * controller_callbacks,
    void * user_data
)
```

Sets the callbacks for controller input events. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| const [MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md) * |controller_callbacks|Pointer to [MLInputControllerCallbacksEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_callbacks_ex.md) structure (can be NULL). |
| void * |user_data|Pointer to user payload data; this will be the first argument passed to all the callback functions (can be NULL). |

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to set the callback for controller input events due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully set the callback for controller input events. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to set the callback for the controller input events due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 8




-----------

### MLInputGetControllerState {#mlresult-mlinputgetcontrollerstate}

```cpp
MLResult MLInputGetControllerState(
    MLHandle handle,
    struct MLInputControllerState out_state[MLInput_MaxControllers]
)
```

Returns current state of all possible input controllers. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| struct [MLInputControllerState](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md) |out_state|Array of [MLInputControllerState](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state.md) structures that will be populated. The size of this array is at least the size [MLInput_MaxControllers](/api-ref/api/Modules/group___input/group___input.md#enums-mlinput-maxcontrollers). |

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to fetch the controller state due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully fetched the controller state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to fetch the controller state due to an unknown error.|
**Required Permissions**:

  * None 




:::caution Deprecated
Deprecated since 1.1.0. Scheduled for removal. 
:::



-----------

### MLInputGetControllerStateEx {#mlresult-mlinputgetcontrollerstateex}

```cpp
MLResult MLInputGetControllerStateEx(
    MLHandle handle,
    MLInputControllerStateEx out_state[MLInput_MaxControllers]
)
```

Returns current state of all possible input controllers. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| [MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md) |out_state|Array of [MLInputControllerStateEx](/api-ref/api/Modules/group___input/struct_m_l_input_controller_state_ex.md) structures that will be populated. The size of this array is at least the size [MLInput_MaxControllers](/api-ref/api/Modules/group___input/group___input.md#enums-mlinput-maxcontrollers). |

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to fetch the controller state due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully fetched the controller state. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to fetch the controller state due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 21




-----------

### MLInputGetConnectedDevices {#mlresult-mlinputgetconnecteddevices}

```cpp
MLResult MLInputGetConnectedDevices(
    MLHandle handle,
    MLInputConnectedDevicesList * inout_devices
)
```

Gets the device IDs of all connected devices. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) * |inout_devices|Pointer to [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) structure that will be populated. The app should call [MLInputReleaseConnectedDevicesList](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputreleaseconnecteddeviceslist) to release the contents after use. |

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to get the IDs of all connected devices due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully fetched the IDs of the connected devices. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to get the IDs of all connected devices due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 5




-----------

### MLInputReleaseConnectedDevicesList {#mlresult-mlinputreleaseconnecteddeviceslist}

```cpp
MLResult MLInputReleaseConnectedDevicesList(
    MLHandle handle,
    MLInputConnectedDevicesList * devices
)
```

Releases the contents of [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) populated by [MLInputGetConnectedDevices](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputgetconnecteddevices). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) * |devices|Pointer to [MLInputConnectedDevicesList](/api-ref/api/Modules/group___input/struct_m_l_input_connected_devices_list.md) struct. Its contents will be released. |

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully released the contents of the device list. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to release the contents of the device list due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to release the contents of the device list due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 5




-----------

### MLInputStartControllerFeedbackPreDefinedPattern {#mlresult-mlinputstartcontrollerfeedbackpredefinedpattern}

```cpp
MLResult MLInputStartControllerFeedbackPreDefinedPattern(
    MLHandle handle,
    uint8_t controller_id,
    MLInputPreDefinedPattern * pattern
)
```

Plays the pre-defined pattern. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| uint8_t |controller_id|Id of the input controller 0 ~ [MLInput_MaxControllers](/api-ref/api/Modules/group___input/group___input.md#enums-mlinput-maxcontrollers). |
| [MLInputPreDefinedPattern](/api-ref/api/Modules/group___input/struct_m_l_input_pre_defined_pattern.md) * |pattern|A pointer to #MLInputPredefinedPattern structure (can be NULL).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLInputResult_IllegalState|The service is either not initialized or terminated or the app is not in focus. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_DeviceNotFound|The haptic device could not be found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to start a pre-defined pattern due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started a pre-defined pattern on the specified controller. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start a pre-defined pattern due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLInputStartControllerFeedbackBuzzCommand {#mlresult-mlinputstartcontrollerfeedbackbuzzcommand}

```cpp
MLResult MLInputStartControllerFeedbackBuzzCommand(
    MLHandle handle,
    uint8_t controller_id,
    const MLInputBuzzCommand * command
)
```

Plays controller haptic buzz command. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| uint8_t |controller_id|Id of the input controller 0 ~ [MLInput_MaxControllers](/api-ref/api/Modules/group___input/group___input.md#enums-mlinput-maxcontrollers). |
| const [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) * |command|A pointer to [MLInputBuzzCommand](/api-ref/api/Modules/group___input/struct_m_l_input_buzz_command.md) structure (can be NULL).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLInputResult_IllegalState|The service is either not initialized or terminated or the app is not in focus. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_DeviceNotFound|The haptic device could not be found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to start the buzz command due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started the buzz command on the specified controller. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start the buzz command due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLInputCreateCustomHapticsPattern {#mlresult-mlinputcreatecustomhapticspattern}

```cpp
MLResult MLInputCreateCustomHapticsPattern(
    MLHandle handle,
    MLInputCustomHapticsInfo * info,
    uint32_t * inout_pattern_id
)
```

Creates a custom haptic pattern. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| [MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) * |info|Pointer to [MLInputCustomHapticsInfo](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics_info.md) struct. |
| uint32_t * |inout_pattern_id|A pattern Id created by the API, to be used by [MLInputStartControllerFeedbackCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputstartcontrollerfeedbackcustomhapticspattern).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLInputResult_IllegalState|The service is either not initialized or terminated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to create a custom haptic pattern due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully created a custom haptic pattern. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to create a custom haptic pattern due to an unknown error.|
**Required Permissions**:

  * None 



A custom haptics pattern is defined as a set of either buzz command and/or pre-defined patterns. Each pattern is played for a duration defined as the #duration_ms member of each element of the [MLInputCustomHaptics](/api-ref/api/Modules/group___input/struct_m_l_input_custom_haptics.md) array.




**API Level:**
  * 20




-----------

### MLInputStartControllerFeedbackCustomHapticsPattern {#mlresult-mlinputstartcontrollerfeedbackcustomhapticspattern}

```cpp
MLResult MLInputStartControllerFeedbackCustomHapticsPattern(
    MLHandle handle,
    uint8_t controller_id,
    uint32_t pattern_id
)
```

Plays the custom haptic pattern created by [MLInputCreateCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| uint8_t |controller_id|Id of the input controller 0 ~ [MLInput_MaxControllers](/api-ref/api/Modules/group___input/group___input.md#enums-mlinput-maxcontrollers). |
| uint32_t |pattern_id|Custom pattern id created by [MLInputCreateCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLInputResult_IllegalState|The service is either not initialized or terminated or the app is not in focus. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_DeviceNotFound|The haptic device could not be found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to start the custom haptic pattern due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully started the custom haptic pattern on the specified controller. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to start the custom haptic pattern due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLInputDeleteCustomHapticsPattern {#mlresult-mlinputdeletecustomhapticspattern}

```cpp
MLResult MLInputDeleteCustomHapticsPattern(
    MLHandle handle,
    uint32_t pattern_id
)
```

Deletes the custom haptic pattern created by [MLInputCreateCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern). 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| uint32_t |pattern_id|Custom pattern Id created by [MLInputCreateCustomHapticsPattern](/api-ref/api/Modules/group___input/group___input.md#mlresult-mlinputcreatecustomhapticspattern).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLInputResult_IllegalState|The service is either not initialized or terminated. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to destroy the custom haptic pattern due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed the custom haptic pattern on the specified controller. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy the custom haptic pattern due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLInputStopControllerFeedback {#mlresult-mlinputstopcontrollerfeedback}

```cpp
MLResult MLInputStopControllerFeedback(
    MLHandle handle,
    uint8_t controller_id
)
```

Stops the currently playing haptic pattern. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|Handle to the input tracker. |
| uint8_t |controller_id|Id of the input controller 0 ~ [MLInput_MaxControllers](/api-ref/api/Modules/group___input/group___input.md#enums-mlinput-maxcontrollers).|

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLInputResult_IllegalState|The service is either not initialized or terminated or the app is not in focus. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_DeviceNotFound|The haptic device could not be found. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to stop the pattern due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully stopped the pattern on the specified controller. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to stop the pattern due to an unknown error.|
**Required Permissions**:

  * None 





**API Level:**
  * 20




-----------

### MLInputDestroy {#mlresult-mlinputdestroy}

```cpp
MLResult MLInputDestroy(
    MLHandle handle
)
```

Destroys an input tracker. 

**Parameters**

|  |   |   |
|--|--|--|
| [MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) |handle|[MLHandle](/api-ref/api/Modules/group___platform/group___platform.md#uint64-t-mlhandle) to the input tracker to destroy. |

**Returns**

|  |   |   |
|--|--|--|
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_InvalidParam|Failed to destroy the input tracker due to an invalid input parameter. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_Ok|Successfully destroyed the input tracker. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLResult_UnspecifiedFailure|Failed to destroy the input handler due to an unknown error. |
| [MLResult](/api-ref/api/Modules/group___platform/group___platform.md#int32-t-mlresult) |MLInputResult_IllegalState|Failed to destroy the input handler due to an unexpected state.|
**Required Permissions**:

  * None 






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
#include "ml_types.h"

ML_EXTERN_C_BEGIN
enum {
  MLResultAPIPrefix_Input = MLRESULT_PREFIX(0x21DC)
};

typedef enum MLInputResult {
  MLInputResult_ServiceNotAvailable = MLResultAPIPrefix_Input,
  MLInputResult_PermissionDenied,
  MLInputResult_DeviceNotFound,
  MLInputResult_IllegalState,
  MLInputResult_InternalError,
  MLInputResult_SpeechDisabled,
  MLInputResult_Ensure32Bits = 0x7FFFFFFF
} MLInputResult;

enum {
  MLInput_MaxControllers = 1,
  MLInput_MaxControllerTouchpadTouches = 2
};

typedef enum MLInputControllerTouchpadGestureState {
  MLInputControllerTouchpadGestureState_End,
  MLInputControllerTouchpadGestureState_Continue,
  MLInputControllerTouchpadGestureState_Start,
  MLInputControllerTouchpadGestureState_Ensure32Bits = 0x7FFFFFFF
} MLInputControllerTouchpadGestureState;

typedef enum MLInputControllerTouchpadGestureType {
  MLInputControllerTouchpadGestureType_None,
  MLInputControllerTouchpadGestureType_Tap,
  MLInputControllerTouchpadGestureType_ForceTapDown,
  MLInputControllerTouchpadGestureType_ForceTapUp,
  MLInputControllerTouchpadGestureType_ForceDwell,
  MLInputControllerTouchpadGestureType_SecondForceDown,
  MLInputControllerTouchpadGestureType_RadialScroll,
  MLInputControllerTouchpadGestureType_Swipe,
  MLInputControllerTouchpadGestureType_Count,
  MLInputControllerTouchpadGestureType_Ensure32Bits = 0x7FFFFFFF
} MLInputControllerTouchpadGestureType;

typedef enum MLInputControllerTouchpadGestureDirection {
  MLInputControllerTouchpadGestureDirection_None,
  MLInputControllerTouchpadGestureDirection_Up,
  MLInputControllerTouchpadGestureDirection_Down,
  MLInputControllerTouchpadGestureDirection_Left,
  MLInputControllerTouchpadGestureDirection_Right,
  MLInputControllerTouchpadGestureDirection_Clockwise,
  MLInputControllerTouchpadGestureDirection_CounterClockwise,
  MLInputControllerTouchpadGestureDirection_Count,
  MLInputControllerTouchpadGestureDirection_Ensure32Bits = 0x7FFFFFFF
} MLInputControllerTouchpadGestureDirection;

typedef struct MLInputControllerTouchpadGesture {
  MLVec3f pos_and_force;
  MLInputControllerTouchpadGestureType type;
  MLInputControllerTouchpadGestureDirection direction;
  float speed;
  float distance;
  float radius;
  float angle;
} MLInputControllerTouchpadGesture;

typedef enum MLInputControllerType {
  MLInputControllerType_None,
  MLInputControllerType_Device,
  MLInputControllerType_Ensure32Bits = 0x7FFFFFFF
} MLInputControllerType;

typedef enum MLInputControllerButton {
  MLInputControllerButton_None,
  MLInputControllerButton_Bumper,
  MLInputControllerButton_Menu,
  MLInputControllerButton_Count,
  MLInputControllerButton_Ensure32Bits = 0x7FFFFFFF
} MLInputControllerButton;

typedef enum MLInputControllerTriggerEvent {
  MLInputControllerTriggerEvent_Pull,
  MLInputControllerTriggerEvent_Release,
  MLInputControllerTriggerEvent_Click,
  MLInputControllerTriggerEvent_Hold,
  MLInputControllerTriggerEvent_Ensure32Bits = 0x7FFFFFFF
} MLInputControllerTriggerEvent;

typedef enum MLInputPreDefinedPatternType {
  MLInputPreDefinedPatternType_A = 0,
  MLInputPreDefinedPatternType_B = 1,
  MLInputPreDefinedPatternType_C = 2,
  MLInputPreDefinedPatternType_Ensure32Bits = 0x7FFFFFFF
} MLInputPreDefinedPatternType;

typedef enum MLInputCustomHapticsType {
  MLInputCustomHapticsType_None = 0,
  MLInputCustomHapticsType_Buzz = 1,
  MLInputCustomHapticsType_Predefined = 2,
  MLInputCustomHapticsType_Ensure32Bits = 0x7FFFFFFF
} MLInputCustomHapticsType;

typedef enum MLInputControllerHand {
  MLInputControllerHand_None = 0,
  MLInputControllerHand_Left = 1,
  MLInputControllerHand_Right = 2,
  MLInputControllerHand_Both = 3,
  MLInputControllerHand_Ensure32Bits = 0x7FFFFFFF
} MLInputControllerHand;

typedef struct MLInputControllerCallbacksEx {
  uint32_t version;
  void (*on_touchpad_gesture)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data);
  void (*on_touchpad_gesture_continue)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data);
  void (*on_touchpad_gesture_end)(uint8_t controller_id, const MLInputControllerTouchpadGesture *touchpad_gesture, void *data);
  void (*on_button_down)(uint8_t controller_id, MLInputControllerButton button, void *data);
  void (*on_button_up)(uint8_t controller_id, MLInputControllerButton button, void *data);
  void (*on_button_click)(uint8_t controller_id, MLInputControllerButton button, void *data);
  void (*on_trigger)(uint8_t controller_id, MLInputControllerTriggerEvent event, float depth, void *data);
  void (*on_connect)(uint8_t controller_id, void *data);
  void (*on_disconnect)(uint8_t controller_id, void *data);
} MLInputControllerCallbacksEx;

ML_STATIC_INLINE void MLInputControllerCallbacksExInit(MLInputControllerCallbacksEx *inout_callbacks) {
  if (inout_callbacks) {
    inout_callbacks->version = 3u;
    inout_callbacks->on_touchpad_gesture = NULL;
    inout_callbacks->on_touchpad_gesture_continue = NULL;
    inout_callbacks->on_touchpad_gesture_end = NULL;
    inout_callbacks->on_button_down = NULL;
    inout_callbacks->on_button_up = NULL;
    inout_callbacks->on_button_click = NULL;
    inout_callbacks->on_trigger = NULL;
    inout_callbacks->on_connect = NULL;
    inout_callbacks->on_disconnect = NULL;
  }
}

typedef ML_DEPRECATED_MSG("Replaced by MLInputControllerStateEx.") struct MLInputControllerState {
  MLVec3f touch_pos_and_force[MLInput_MaxControllerTouchpadTouches];
  float trigger_normalized;
  bool button_state[MLInputControllerButton_Count];
  bool is_touch_active[MLInput_MaxControllerTouchpadTouches];
  bool is_connected;
  MLInputControllerTouchpadGesture touchpad_gesture;
  MLInputControllerTouchpadGestureState touchpad_gesture_state;
  MLInputControllerType type;
  uint8_t hardware_index;
} MLInputControllerState;

typedef struct MLInputControllerStateEx {
  uint32_t version;
  MLInputControllerType type;
  MLInputControllerHand hand;
  MLVec3f touch_pos_and_force[MLInput_MaxControllerTouchpadTouches];
  float trigger_normalized;
  bool button_state[MLInputControllerButton_Count];
  bool is_touch_active[MLInput_MaxControllerTouchpadTouches];
  bool is_connected;
  MLInputControllerTouchpadGesture touchpad_gesture;
  MLInputControllerTouchpadGestureState touchpad_gesture_state;
  uint8_t hardware_index;
} MLInputControllerStateEx;

ML_STATIC_INLINE void MLInputControllerStateExInit(MLInputControllerStateEx inout_attr[MLInput_MaxControllers]) {
  if (NULL != inout_attr) {
    for (int i = 0; i < MLInput_MaxControllers; ++i) {
      inout_attr[i].version = 1u;
    }
  }
}

typedef struct MLInputConnectedDevicesList {
  uint32_t version;
  uint32_t connected_controller_count;
  const uint8_t *connected_controller_ids;
} MLInputConnectedDevicesList;

ML_STATIC_INLINE void MLInputConnectedDevicesListInit(MLInputConnectedDevicesList *inout_devices_list) {
  if (inout_devices_list) {
    inout_devices_list->version = 2u;
    inout_devices_list->connected_controller_count = 0u;
    inout_devices_list->connected_controller_ids = NULL;
  }
}

typedef struct MLInputPreDefinedPattern {
  uint32_t version;
  uint32_t pattern;
} MLInputPreDefinedPattern;

ML_STATIC_INLINE void MLInputPreDefinedPatternInit(MLInputPreDefinedPattern *inout_pattern) {
  if (inout_pattern) {
    inout_pattern->version = 1u;
    inout_pattern->pattern = (uint32_t)MLInputPreDefinedPatternType_C;
  }
}

typedef struct MLInputBuzzCommand {
  uint32_t version;
  uint16_t start_hz;
  uint16_t end_hz;
  uint32_t duration_ms;
  uint8_t amp;
} MLInputBuzzCommand;

ML_STATIC_INLINE void MLInputBuzzCommandInit(MLInputBuzzCommand *inout_command) {
  if (inout_command) {
    inout_command->version = 1u;
    inout_command->start_hz = 200;
    inout_command->end_hz = 800;
    inout_command->duration_ms = 1000;
    inout_command->amp = 20;
  }
}

typedef struct MLInputCustomHaptics {
  MLInputCustomHapticsType type;
  union {
    MLInputBuzzCommand buzz;
    MLInputPreDefinedPattern pre_defined;
  } MLInputCustomHapticsPattern;
  uint32_t duration_ms;
} MLInputCustomHaptics;

typedef struct MLInputCustomHapticsInfo {
  uint32_t version;
  MLInputCustomHaptics *custom;
  uint32_t size;
} MLInputCustomHapticsInfo;

ML_STATIC_INLINE void MLInputCustomHapticsInfoInit(MLInputCustomHapticsInfo *inout_info) {
  if (inout_info && inout_info->custom) {
    for (uint32_t it = 0; it < inout_info->size; it++) {
      inout_info->version = 1u;
      inout_info->custom[it].type = MLInputCustomHapticsType_None;
      inout_info->custom[it].MLInputCustomHapticsPattern.pre_defined.pattern = 0;
      inout_info->custom[it].duration_ms = 0;
    }
  }
}

ML_API const char *ML_CALL MLInputGetResultString(MLResult result);

ML_API MLResult ML_CALL MLInputCreate(MLHandle *out_handle);

ML_API MLResult ML_CALL MLInputSetControllerCallbacksEx(MLHandle handle, const MLInputControllerCallbacksEx *controller_callbacks, void *user_data);

ML_DEPRECATED_MSG("Replaced by MLInputGetControllerStateEx.")
ML_API MLResult ML_CALL MLInputGetControllerState(MLHandle handle, struct MLInputControllerState out_state[MLInput_MaxControllers]);

ML_API MLResult ML_CALL MLInputGetControllerStateEx(MLHandle handle, MLInputControllerStateEx out_state[MLInput_MaxControllers]);

ML_API MLResult ML_CALL MLInputGetConnectedDevices(MLHandle handle, MLInputConnectedDevicesList *inout_devices);

ML_API MLResult ML_CALL MLInputReleaseConnectedDevicesList(MLHandle handle, MLInputConnectedDevicesList *devices);

ML_API MLResult ML_CALL MLInputStartControllerFeedbackPreDefinedPattern(MLHandle handle, uint8_t controller_id, MLInputPreDefinedPattern* pattern);

ML_API MLResult ML_CALL MLInputStartControllerFeedbackBuzzCommand(MLHandle handle, uint8_t controller_id, const MLInputBuzzCommand* command);

ML_API MLResult ML_CALL MLInputCreateCustomHapticsPattern(MLHandle handle, MLInputCustomHapticsInfo *info, uint32_t *inout_pattern_id);

ML_API MLResult ML_CALL MLInputStartControllerFeedbackCustomHapticsPattern(MLHandle handle, uint8_t controller_id, uint32_t pattern_id);

ML_API MLResult ML_CALL MLInputDeleteCustomHapticsPattern(MLHandle handle, uint32_t pattern_id);

ML_API MLResult ML_CALL MLInputStopControllerFeedback(MLHandle handle, uint8_t controller_id);

ML_API MLResult ML_CALL MLInputDestroy(MLHandle handle);
ML_EXTERN_C_END
```



