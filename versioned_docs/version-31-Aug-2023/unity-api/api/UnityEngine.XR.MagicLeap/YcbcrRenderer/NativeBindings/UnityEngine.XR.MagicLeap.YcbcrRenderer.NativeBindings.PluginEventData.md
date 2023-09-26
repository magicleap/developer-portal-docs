---
title: PluginEventData
summary: data to be passed down to the native plugin for a rendering event. 

---

# PluginEventData




Data to be passed down to the native plugin for a rendering event.   





## Public Methods

###  PluginEventData {#functions-plugineventdata}

```csharp
public PluginEventData(
    ulong rendererHandle,
    RenderTexture renderBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |rendererHandle||
| RenderTexture |renderBuffer||






-----------

## Public Attributes

### ColorSpace {#colorspace-colorspace}

Color space to render the native buffer in. 

```csharp

public ColorSpace ColorSpace;

```






-----------

### Height {#int-height}

Height of the Unity texture 

```csharp

public int Height;

```






-----------

### RendererHandle {#ulong-rendererhandle}

Handle of the [YcbcrRenderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.md) instance received from a MLYcbcrRendererCreate() call. 

```csharp

public ulong RendererHandle;

```






-----------

### TextureHandle {#intptr-texturehandle}

[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) pointer of the Unity texture to render the android native buffer on. 

```csharp

public IntPtr TextureHandle;

```






-----------

### Width {#int-width}

Width of the Unity texture 

```csharp

public int Width;

```






-----------


