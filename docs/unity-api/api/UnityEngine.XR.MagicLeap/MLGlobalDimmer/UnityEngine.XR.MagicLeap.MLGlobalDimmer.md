---
title: MLGlobalDimmer

---

# MLGlobalDimmer



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Methods

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetValue {#mlresult-setvalue}

Set the manual value for the global dimmer Updates are reflected in the next client submitted frame. Global dimmer update through this func is applicable only if auto dimmer is disabled. Any smooth ramping from auto dimmer to application final dimmer should be handled by the application itself. Since the dimmer value set through this func is reflected only in the next client submitted frame, the smooth ramp stepping interval is equal to current application frame rate 

```csharp
public static MLResult SetValue(
    float dimmerValue,
    bool enabled =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |dimmerValue|dimmer value in valid range [0.0 to 1.0]. 0.0 corresponds no global dimming while 1.0 corresponds to max global dimming.|
| bool |enabled|Enable or disable the global dimmer.|






-----------

