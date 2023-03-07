---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### ulong MLUnityGraphicsGetHandle {#ulong-mlunitygraphicsgethandle}

```csharp
public ulong MLUnityGraphicsGetHandle()
```






-----------

### void MLUnityGraphicsRegisterCallbacks {#void-mlunitygraphicsregistercallbacks}

```csharp
public void MLUnityGraphicsRegisterCallbacks(
    ref MLUnityGraphicsCallbacks callbacks
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLUnityGraphicsCallbacks](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGraphicsHooks/NativeBindings/UnityEngine.XR.MagicLeap.MLGraphicsHooks.NativeBindings.MLUnityGraphicsCallbacks.md) |callbacks||






-----------

### delegate void OnPreBeginRenderFrameNativeDelegate {#delegate-void-onprebeginrenderframenativedelegate}

```csharp
public delegate void OnPreBeginRenderFrameNativeDelegate(
    IntPtr context,
    ref MLGraphicsFrameParamsEx frameParams
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context||
| ref [MLGraphicsFrameParamsEx](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGraphicsHooks/NativeBindings/UnityEngine.XR.MagicLeap.MLGraphicsHooks.NativeBindings.MLGraphicsFrameParamsEx.md) |frameParams||






-----------

## Public Enums

### EnvironmentBlendMode {#enums-environmentblendmode}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Additive | 0|   |
| AlphaBlend | 1|   |








-----------

### ProjectionType {#enums-projectiontype}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SignedZ | 0|   |
| ReversedInfiniteZ | 1|   |
| UnsignedZ | 2|   |








-----------

