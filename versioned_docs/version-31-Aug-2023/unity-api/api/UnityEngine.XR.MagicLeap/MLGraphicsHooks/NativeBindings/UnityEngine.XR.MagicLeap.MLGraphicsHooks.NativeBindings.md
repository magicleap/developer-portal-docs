---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### void ClearCallbacks {#void-clearcallbacks}

```csharp
public static void ClearCallbacks()
```






-----------

### void MLUnityGraphicsClearCallbacks {#void-mlunitygraphicsclearcallbacks}

```csharp
public void MLUnityGraphicsClearCallbacks()
```






-----------

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
| ref [MLUnityGraphicsCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGraphicsHooks/NativeBindings/UnityEngine.XR.MagicLeap.MLGraphicsHooks.NativeBindings.MLUnityGraphicsCallbacks.md) |callbacks||






-----------

### delegate void OnBeginRenderFrameNativeDelegate {#delegate-void-onbeginrenderframenativedelegate}

```csharp
public delegate void OnBeginRenderFrameNativeDelegate(
    IntPtr context,
    long predictedDisplayTime
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |context||
| long |predictedDisplayTime||






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
| ref [MLGraphicsFrameParamsEx](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGraphicsHooks/NativeBindings/UnityEngine.XR.MagicLeap.MLGraphicsHooks.NativeBindings.MLGraphicsFrameParamsEx.md) |frameParams||






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


