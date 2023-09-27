---
id: controller-porting-guide
title: Migrating from ML1
sidebar_position: 2
date: 1/28/2022
tags: [UnityController, Input, Porting]
keywords: [UnityController, Input, Porting]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Upgrade to Magic Leap's new Controller APIs

This guide provides an overview on how to upgrade an existing Magic leap Controller Script to the Magic Leap 2. To learn more about the Unity Input System view Unity's [Input System Documentation](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/index.html) page.

## API Transition Table

| Topic             | Magic Leap 1   | Magic Leap 2                      |
|-------------------|--------------------|-----------------------------------|
| Buttons           | `MLInput.OnControllerButtonUp`<br /><br />`MLInput.GetController(0).IsBumperDown` | `controllerActions.Bumper.IsPressed()`<br />`controllerActions.Bumper.performed` / cancelled delegate<br /><br />`controllerActions.Menu.IsPressed()`<br />`controllerActions.Menu.performed` / cancelled delegate |
| Touchpad          | `MLInput.GetController(0).TouchPosAndForce`<br /><br />`MLInput.GetController(0).Touch1Active`  | `controllerActions.TouchpadPosition.ReadValue<Vector2>()`<br /><br />`controllerActions.TouchpadForce.ReadValue<float>()`         |
| Touchpad Gestures | `MLInput.OnControllerTouchpadGestureStart`/`End`/`Continue` delegate                      | `GestureSubsystemComponent.gestureSubsystem.touchpadGestureEvents`                                                                                                                               |
| Transform         | `MLInput.GetController(0).Position`<br /><br />`MLInput.GetController(0).Orientation`           | `controllerActions.Position.ReadValue<Vector3>()`<br /><br />`controllerActions.Rotation.ReadValue<Quaternion>()`                                                                                          |
| Trigger           | `MLInput.OnTriggerDown`/`Up` delegate<br /><br />`MLInput.GetController(0).TriggerValue`          | `controllerActions.Trigger.performed` delegate<br /><br />`controllerActions.Trigger.ReadValue<float>()`      |

### Example

<Tabs>  
<TabItem  value="diff"  label="Diff"    >  

```diff title="The differences between the Magic Leap 1 and Magic Leap 2 scripts"
public class ExampleClass : MonoBehaviour
{
+   private MagicLeapInputs _magicLeapInputs;
+   private MagicLeapInputs.ControllerActions _controllerActions;
   
   private void Start(){
   
+       _magicLeapInputs = new MagicLeapInputs();
+       _magicLeapInputs.Enable();
+       _controllerActions = new MagicLeapInputs.ControllerActions(_magicLeapInputs);

+       _controllerActions.Trigger.performed += HandleOnTrigger;
+       _controllerActions.IsTracked.performed += HandleOnControllerChanged;
+       _controllerActions.IsTracked.canceled += HandleOnControllerChanged;

-       MLInput.OnTriggerDown += HandleOnTriggerDown;
-       MLInput.OnControllerConnected += MLControllerConnected;
-       MLInput.OnControllerDisconnected += MLControllerDisconnected;

   }
   
+    private void HandleOnTrigger(InputAction.CallbackContext obj)
+    {
+        float triggerValue = obj.ReadValue<float>();
+        Debug.Log("The Trigger value is : " +  triggerValue);
+    }
   
+   private void HandleOnControllerChanged(InputAction.CallbackContext callbackContext)
+   {
+       if (controllerActions.IsTracked.IsPressed())
+       {
+          Debug.Log("Controller Connected");
+       }else{
+          Debug.Log("Controller Disconnected");
+       }
+   }
   
-   private void HandleOnTriggerDown(byte controllerId, float value)
-   {
-       Debug.Log("Tigger Value " + value);
-   }

-   void MLControllerConnected(byte controllerId)
-   {
-       Debug.Log("Controller Connected");
-   }
   
-   void MLControllerDisconnected(byte controllerId)
-   {
-       Debug.Log("Controller Disconnected");
-   }

}
```

</TabItem>  
<TabItem  value="ml1"  label="Magic Leap 1" >  

```csharp title="The original Magic Leap 1 script"
public class ExampleClass : MonoBehaviour
{

   private void Start(){
       MLInput.OnTriggerDown += HandleOnTriggerDown;
       MLInput.OnControllerConnected += MLControllerConnected;
       MLInput.OnControllerDisconnected += MLControllerDisconnected;
   }

   private void HandleOnTriggerDown(byte controllerId, float value)
   {
       Debug.Log("Trigger Value " + value);
   }
   
   void MLControllerConnected(byte controllerId)
   {
       Debug.Log("Controller Connected");
   }
   
   void MLControllerDisconnected(byte controllerId)
   {
       Debug.Log("Controller Disconnected");
   }
}

```

</TabItem>  
<TabItem  value="ml2"  label="Magic Leap 2">  

```csharp title="The final version of the Magic Leap 2 script"
public class ExampleClass : MonoBehaviour
{
    private MagicLeapInputs _magicLeapInputs;
   private MagicLeapInputs.ControllerActions _controllerActions;
   
   private void Start(){

       _magicLeapInputs = new MagicLeapInputs();
       _magicLeapInputs.Enable();
 
       _controllerActions = new MagicLeapInputs.ControllerActions(_magicLeapInputs);
       _controllerActions.Trigger.performed += HandleOnTrigger;
       _controllerActions.IsTracked.performed += HandleOnControllerChanged;
       _controllerActions.IsTracked.canceled += HandleOnControllerChanged;
   }
   
    private void HandleOnTrigger(InputAction.CallbackContext obj)
    {
        float triggerValue = obj.ReadValue<float>();
        Debug.Log("The Trigger value is : " +  triggerValue);
    }
   
   private void HandleOnControllerChanged(InputAction.CallbackContext callbackContext)
   {
       if (controllerActions.IsTracked.IsPressed())
       {
          Debug.Log("Controller Connected");
       }else{
          Debug.Log("Controller Disconnected");
       }
   }
}
```

</TabItem>  
</Tabs>

## Read the Controller's Input Directly

Using the Unity Input system, you can read Magic Leap 2's controller input directly using the `InputAction.ReadValue<T>()`  method.  

Note:  
- ML1's `MLInput.Controller`  API is now obsolete, controller input should be accessed using `MagicLeapInputs.ControllerActions` instead. 

### Example

<Tabs>  
<TabItem  value="diff"  label="Diff"  default>  

```diff title="The differences between the Magic Leap 1 and Magic Leap 2 scripts"
public class ExampleClass : MonoBehaviour
{
+   private MagicLeapInputs _magicLeapInputs;
+   private MagicLeapInputs.ControllerActions _controlActions;
-   private MLInput.Controller _connectedController;
   
   private void Start(){
   
+       _magicLeapInputs = new MagicLeapInputs();
+       _magicLeapInputs.Enable();
+       _controlActions = new MagicLeapInputs.ControllerActions(_magicLeapInputs);
+   
-       MLInput.OnControllerConnected += MLControllerConnected;
-       MLInput.OnControllerDisconnected += MLControllerDisconnected;   
   }
   
   void Update()
    {
-       if(_connectedController && _connectedController.Type ==  MLInput.Controller.ControlType.Control){

+          Debug.Log("Position:" + _controlActions.Position.ReadValue<Vector3>());
-          Debug.Log("Position:" + _connectedController.Position);

+          Debug.Log("Rotation:" + _controlActions.Rotation.ReadValue<Quaternion>());
-           Debug.Log("Rotation:" + _connectedController.Orientation);

+          Debug.Log("Trigger:" + _controlActions.Trigger.ReadValue<float>());
-           Debug.Log("Trigger:" +_connectedController.TriggerValue);

+          Debug.Log("Bumper:" + _controlActions.Bumper.IsPressed());
-           Debug.Log("Bumper:" + _connectedController.IsBumperDown);

+          Debug.Log("Touchpad1Position:" + _controlActions.TouchpadPosition.ReadValue<Vector2>());
-           Debug.Log("Touchpad1Position:" +  _control.Touch1PosAndForce.x +","+ _connectedController.Touch1PosAndForce.y);

+          Debug.Log("Touchpad1Force:" + _controlActions.TouchpadForce.ReadValue<float>());
-           Debug.Log("Touchpad1Force:" + _control.Touch1PosAndForce.z);
-       }
    }
    
-   void MLControllerConnected(byte controllerId)
-   {
-       _connectedController = MLInput.GetController(_controllerId);
-   }
   
-   void MLControllerDisconnected(byte controllerId)
-   {
-       _connectedController = null;
-   }
}
```

</TabItem>  
<TabItem  value="ml1"  label="Magic Leap 1" >  

```csharp title="The original Magic Leap 1 script"
public class ExampleClass : MonoBehaviour
{
   private MLInput.Controller _connectedController;
   
   private void Start(){
   
       MLInput.OnControllerConnected += MLControllerConnected;
       MLInput.OnControllerDisconnected += MLControllerDisconnected;
   }
   
   void Update()
    {
       if(_connectedController && _connectedController.Type ==  MLInput.Controller.ControlType.Control){       
          Debug.Log("Position:" + _connectedController.Position);
           Debug.Log("Rotation:" + _connectedController.Orientation);
           Debug.Log("Trigger:" +_connectedController.TriggerValue);
           Debug.Log("Bumper:" + _connectedController.IsBumperDown);
           Debug.Log("Touchpad1Position:" +  _control.Touch1PosAndForce.x +","+ _connectedController.Touch1PosAndForce.y);
           Debug.Log("Touchpad1Force:" + _control.Touch1PosAndForce.z);
       }
    }
    
   void MLControllerConnected(byte controllerId)
   {
       _connectedController = MLInput.GetController(_controllerId);
   }
   
   void MLControllerDisconnected(byte controllerId)
   {
       _connectedController = null;
   }
}

```

</TabItem>  
<TabItem  value="ml2"  label="Magic Leap 2">  


```csharp title="The final version of the Magic Leap 2 script"
public class ExampleClass : MonoBehaviour
{
    private MagicLeapInputs _magicLeapInputs;
    private MagicLeapInputs.ControllerActions _controlActions;

    void Start()
    {
        _magicLeapInputs = new MagicLeapInputs();
        _magicLeapInputs.Enable();
        _controlActions = new MagicLeapInputs.ControllerActions(_magicLeapInputs);
    }

    void Update()
    {
        Debug.Log("Position:" + _controlActions.Position.ReadValue<Vector3>());
        Debug.Log("Rotation:" + _controlActions.Rotation.ReadValue<Quaternion>());
        Debug.Log("Trigger:" + _controlActions.Trigger.ReadValue<float>());
        Debug.Log("Bumper:" + _controlActions.Bumper.IsPressed());
        Debug.Log("Touchpad1Position:" + _controlActions.TouchpadPosition.ReadValue<Vector2>());
        Debug.Log("Touchpad1Force:" + _controlActions.TouchpadForce.ReadValue<float>());
    }
}
```

</TabItem>  
</Tabs>

