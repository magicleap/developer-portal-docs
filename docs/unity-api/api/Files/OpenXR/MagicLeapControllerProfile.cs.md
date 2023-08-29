---

title: MagicLeapControllerProfile.cs

---


# MagicLeapControllerProfile.cs









## Source code

```csharp

#if UNITY_OPENXR_1_7_0_OR_NEWER
using System.Collections.Generic;
using UnityEngine.InputSystem.Layouts;
using UnityEngine.InputSystem.Controls;
using UnityEngine.InputSystem.XR;
using UnityEngine.Scripting;
using UnityEngine.XR.OpenXR.Input;

#if UNITY_EDITOR
using UnityEditor;
#endif

#if USE_INPUT_SYSTEM_POSE_CONTROL
using PoseControl = UnityEngine.InputSystem.XR.PoseControl;
#else
using PoseControl = UnityEngine.XR.OpenXR.Input.PoseControl;
#endif

namespace UnityEngine.XR.OpenXR.Features.MagicLeapSupport
{
#if UNITY_EDITOR
    [UnityEditor.XR.OpenXR.Features.OpenXRFeature(UiName = "Magic Leap 2 Controller Interaction Profile",
        BuildTargetGroups = new[] {BuildTargetGroup.Android, BuildTargetGroup.Standalone},
        Company = "Magic Leap",
        Desc = "Allows for mapping input to the Magic Leap 2 Controller.",
        OpenxrExtensionStrings = extensionString,
        Version = "1.0.0",
        Category = UnityEditor.XR.OpenXR.Features.FeatureCategory.Interaction,
        FeatureId = featureId)]
#endif
    public class MagicLeapControllerProfile : OpenXRInteractionFeature
    {
        public const string featureId = "com.magicleap.openxr.feature.input.ml2controllerprofile";

        public const string extensionString = "XR_ML_ml2_controller_interaction";

        [Preserve, InputControlLayout(displayName = "Magic Leap Controller (OpenXR)", commonUsages = new[] { "LeftHand", "RightHand" })]
        public class MagicLeapController : XRControllerWithRumble
        { 
            [Preserve, InputControl(aliases = new[] { "GripButton", "shoulderClicked"}, usage = "GripButton")]
            public ButtonControl gripPressed { get; private set; }

            [Preserve, InputControl(aliases = new[] { "Primary", "menubutton" }, usage ="MenuButton")]
            public ButtonControl menu { get; private set; }
            
            [Preserve, InputControl(offset = 0, aliases = new[] { "device", "gripPose" }, usage = "Device")]
            public PoseControl devicePose { get; private set; }

            [Preserve, InputControl(offset = 0, alias = "aimPose", usage = "Pointer")]
            public PoseControl pointer { get; private set; }

            [Preserve, InputControl(offset = 2)]
            public new ButtonControl isTracked { get; private set; }

            [Preserve, InputControl(offset = 4)]
            public new IntegerControl trackingState { get; private set; }

            [Preserve, InputControl(offset = 8, alias = "gripPosition")]
            public new Vector3Control devicePosition { get; private set; }

            [Preserve, InputControl(offset = 20, alias = "gripOrientation")]
            public new QuaternionControl deviceRotation { get; private set; }

            [Preserve, InputControl(offset = 68)]
            public Vector3Control pointerPosition { get; private set; }

            [Preserve, InputControl(offset = 80, alias = "pointerOrientation")]
            public QuaternionControl pointerRotation { get; private set; }

            [Preserve, InputControl(alias = "triggeraxis", usage = "Trigger")]
            public AxisControl trigger { get; private set; }

            [Preserve, InputControl(alias = "triggerbutton", usage = "TriggerButton")]
            public ButtonControl triggerPressed { get; private set; }

            [Preserve, InputControl(aliases = new[] { "Primary2DAxis", "touchpadaxes", "touchpad" }, usage = "Primary2DAxis")]
            public Vector2Control trackpad { get; private set; }

            [Preserve, InputControl(aliases = new[] { "joystickorpadpressed", "touchpadpressed" }, usage = "Primary2DAxisClick")]
            public ButtonControl trackpadClicked { get; private set; }

            [Preserve, InputControl(aliases = new[] { "joystickorpadtouched", "touchpadtouched" }, usage = "Primary2DAxisTouch")]
            public ButtonControl trackpadTouched { get; private set; }

            [Preserve, InputControl(alias = "touchpadForce", usage = "Secondary2DAxisForce")]
            public AxisControl trackpadForce { get; private set; }

            [Preserve, InputControl(usage = "Haptic")]
            public HapticControl haptic { get; private set; }

            protected override void FinishSetup()
            {
                base.FinishSetup();
                gripPressed = GetChildControl<ButtonControl>("gripPressed");
                menu = GetChildControl<ButtonControl>("menu");
                devicePose = GetChildControl<PoseControl>("devicePose");
                pointer = GetChildControl<PoseControl>("pointer");

                isTracked = GetChildControl<ButtonControl>("isTracked");
                trackingState = GetChildControl<IntegerControl>("trackingState");
                devicePosition = GetChildControl<Vector3Control>("devicePosition");
                deviceRotation = GetChildControl<QuaternionControl>("deviceRotation");
                pointerPosition = GetChildControl<Vector3Control>("pointerPosition");
                pointerRotation = GetChildControl<QuaternionControl>("pointerRotation");

                trigger = GetChildControl<AxisControl>("trigger");
                triggerPressed = GetChildControl<ButtonControl>("triggerPressed");
                trackpad = GetChildControl<Vector2Control>("trackpad");
                trackpadClicked = GetChildControl<ButtonControl>("trackpadClicked");
                trackpadTouched = GetChildControl<ButtonControl>("trackpadTouched");
                trackpadForce = GetChildControl<AxisControl>("trackpadForce");

                haptic = GetChildControl<HapticControl>("haptic");
            }
        }

        public const string profile = "/interaction_profiles/ml/ml2_controller";

        public const string menu = "/input/menu/click";

        public const string triggerClick = "/input/trigger/click";

        public const string trigger = "/input/trigger/value";

        public const string trackpad = "/input/trackpad";

        public const string trackpadClick = "/input/trackpad/click";

        public const string trackpadForce = "/input/trackpad/force";

        public const string trackpadTouch = "/input/trackpad/touch";

        public const string grip = "/input/grip/pose";

        public const string aim = "/input/aim/pose";

        public const string shoulderClick = "/input/shoulder/click";

        public const string haptic = "/output/haptic";

        private const string kDeviceLocalizedName = "Magic Leap Controller OpenXR";

        protected override void RegisterDeviceLayout()
        {
            InputSystem.InputSystem.RegisterLayout(typeof(MagicLeapController),
                        matches: new InputDeviceMatcher()
                        .WithInterface(XRUtilities.InterfaceMatchAnyVersion)
                        .WithProduct(kDeviceLocalizedName));
        }

        protected override void UnregisterDeviceLayout()
        {
            InputSystem.InputSystem.RemoveLayout(nameof(MagicLeapController));
        }

        protected override void RegisterActionMapsWithRuntime()
        {
            ActionMapConfig actionMap = new ActionMapConfig()
            {
                name = nameof(MagicLeapController),
                localizedName = kDeviceLocalizedName,
                desiredInteractionProfile = profile,
                manufacturer = "Magic Leap",
                deviceInfos = new List<DeviceConfig>()
                {
                    new()
                    {
                        characteristics = InputDeviceCharacteristics.HeldInHand | InputDeviceCharacteristics.TrackedDevice | InputDeviceCharacteristics.Controller | InputDeviceCharacteristics.Left,
                        userPath = UserPaths.leftHand
                    },
                    new()
                    {
                        characteristics = InputDeviceCharacteristics.HeldInHand | InputDeviceCharacteristics.TrackedDevice | InputDeviceCharacteristics.Controller | InputDeviceCharacteristics.Right,
                        userPath = UserPaths.rightHand
                    }
                },
                actions = new List<ActionConfig>()
                {
                    // Bumper
                    new()
                    {
                        name = nameof(MagicLeapController.gripPressed),
                        localizedName = "Grip Pressed",
                        type = ActionType.Binary,
                        usages = new List<string>(){ "GripButton" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = shoulderClick,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    // Menu
                    new()
                    {
                        name =nameof(MagicLeapController.menu),
                        localizedName = "Menu",
                        type = ActionType.Binary,
                        usages = new List<string>() { "MenuButton" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = menu,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    // Device Pose
                    new()
                    {
                        name = nameof(MagicLeapController.devicePose),
                        localizedName = "Device Pose",
                        type = ActionType.Pose,
                        usages = new List<string>() { "Device" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = grip,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    // Pointer Pose
                    new()
                    {
                        name = nameof(MagicLeapController.pointer),
                        localizedName = "Pointer Pose",
                        type = ActionType.Pose,
                        usages = new List<string>() { "Pointer" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = aim,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    // Trigger 
                    new()
                    {
                        name = nameof(MagicLeapController.trigger),
                        localizedName = "Trigger",
                        type = ActionType.Axis1D,
                        usages = new List<string>() { "Trigger" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = trigger,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    // Trigger Pressed
                    new()
                    {
                        name = nameof(MagicLeapController.triggerPressed),
                        localizedName = "Trigger Pressed",
                        type = ActionType.Binary,
                        usages = new List<string>() { "TriggerButton" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = triggerClick,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    new()
                    {
                        name = nameof(MagicLeapController.trackpad),
                        localizedName = "Trackpad",
                        type = ActionType.Axis2D,
                        usages = new List<string>() { "Primary2DAxis" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = trackpad,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    new()
                    {
                        name = nameof(MagicLeapController.trackpadTouched),
                        localizedName = "Trackpad Touched",
                        type = ActionType.Binary,
                        usages = new List<string>() { "Primary2DAxisTouch" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = trackpadTouch,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    new()
                    {
                        name = nameof(MagicLeapController.trackpadClicked),
                        localizedName = "Trackpad Clicked",
                        type = ActionType.Binary,
                        usages = new List<string>() { "Primary2DAxisClick" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = trackpadClick,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    new()
                    {
                        name = nameof(MagicLeapController.trackpadForce),
                        localizedName = "Trackpad Force",
                        type = ActionType.Axis1D,
                        usages = new List<string>() { "Secondary2DAxisForce" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = trackpadForce,
                                interactionProfileName = profile,
                            }
                        }
                    },
                    // Haptics
                    new()
                    {
                        name = nameof(MagicLeapController.haptic),
                        localizedName = "Haptic Output",
                        type = ActionType.Vibrate,
                        usages = new List<string>() { "Haptic" },
                        bindings = new List<ActionBinding>()
                        {
                            new()
                            {
                                interactionPath = haptic,
                                interactionProfileName = profile,
                            }
                        }
                    }
                }
            };

            AddActionMap(actionMap);
        }
    }
}
#endif
```



