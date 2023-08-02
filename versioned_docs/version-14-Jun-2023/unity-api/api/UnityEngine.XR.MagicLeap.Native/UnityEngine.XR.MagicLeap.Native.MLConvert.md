---
title: MLConvert
summary: utility class used for converting vectors and matrices between native and unity format. 

---

# MLConvert



**NameSpace:** 
[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) 


Utility class used for converting vectors and matrices between native and unity format.   





## Public Methods

### object ByteArrayToObject {#object-bytearraytoobject}

Convert a byte array to an Object 

```csharp
public static object ByteArrayToObject(
    byte [] byteArray
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |byteArray|Byte array to convert|






**Returns**: Returns the newly converted object



-----------

### string DecodeAscii {#string-decodeascii}

Decodes a buffer of bytes into an ASCII string. 

```csharp
public static string DecodeAscii(
    byte [] buffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |buffer|bytes to convert to a string|






**Returns**: A managed string



-----------

### string DecodeUTF16BE {#string-decodeutf16be}

Converts an unmanaged UTF-16 string into a managed string. 

```csharp
public static string DecodeUTF16BE(
    byte [] nativeArray
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |nativeArray|[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) byte array to convert|






**Returns**: A managed string



-----------

### string DecodeUTF16LE {#string-decodeutf16le}

Converts an unmanaged UTF-16 string into a managed string. 

```csharp
public static string DecodeUTF16LE(
    byte [] nativeArray
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |nativeArray|[Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) byte array to convert|






**Returns**: A managed string



-----------

### string DecodeUTF8 {#string-decodeutf8}

Decodes a buffer of bytes into a UTF8 string. 

```csharp
public static string DecodeUTF8(
    byte [] buffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| byte [] |buffer|bytes to convert to a UTF8 string|






**Returns**: A managed string



-----------

### string DecodeUTF8 {#string-decodeutf8}

Converts an unmanaged null terminated UTF-8 string into a managed string. 

```csharp
public static string DecodeUTF8(
    IntPtr nativeString,
    int maximumSize =-1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |nativeString|The unmanaged string to convert|
| int |maximumSize|maximum number of characters to convert|






**Returns**: A managed string



-----------

### IntPtr EncodeToUnmanagedUTF8 {#intptr-encodetounmanagedutf8}

Converts a managed string into an unmanaged null terminated UTF-8 string. 

```csharp
public static IntPtr EncodeToUnmanagedUTF8(
    string s
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |s|The managed string to convert|






**Returns**: A pointer to the unmanaged string



-----------

### byte [] EncodeUTF8 {#byte-encodeutf8}

This encodes the string into a UTF-8 byte array. 

```csharp
public static byte [] EncodeUTF8(
    string decodedString
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |decodedString|string to encode|






**Returns**: UTF8 string byte array



-----------

### void FlipTransformMatrixHorizontally {#void-fliptransformmatrixhorizontally}

```csharp
public static void FlipTransformMatrixHorizontally(
    float [] frameTransformMatColMajor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |frameTransformMatColMajor||






-----------

### void FlipTransformMatrixVertically {#void-fliptransformmatrixvertically}

```csharp
public static void FlipTransformMatrixVertically(
    float [] frameTransformMatColMajor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float [] |frameTransformMatColMajor||






-----------

### [MagicLeapNativeBindings.MLTransform](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) FromUnity {#magicleapnativebindingsmltransform-fromunity}

Creates native transform from a Unity matrix. 

```csharp
public static MagicLeapNativeBindings.MLTransform FromUnity(
    Matrix4x4 mat,
    bool transformFromRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Matrix4x4 |mat|A Unity matrix.|
| bool |transformFromRUF|(Optional) If false, prevents conversion to the native SDK coordinate system.|
|  |applyScale|(Optional) If false, prevents scaling to the native SDK's unit per meter scale.|






**Returns**: A native transform.



-----------

### void FromUnity {#void-fromunity}

Fills out array with values from 4x4 Unity matrix. 

```csharp
public static void FromUnity(
    Matrix4x4 mat,
    ref float [] matrixColMajor
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Matrix4x4 |mat|An input native matrix.|
| ref float [] |matrixColMajor|An array to populate in Unity format.|






-----------

### [MagicLeapNativeBindings.MLVec3f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) FromUnity {#magicleapnativebindingsmlvec3f-fromunity}

Creates native 3d vector from a Unity vector. 

```csharp
public static MagicLeapNativeBindings.MLVec3f FromUnity(
    Vector3 vec,
    bool transformFromRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 |vec|A Unity vector.|
| bool |transformFromRUF|(Optional) If false, prevents conversion to the native SDK coordinate system.|
|  |applyScale|(Optional) If false, prevents scaling to the native SDK's unit per meter scale.|






**Returns**: A native vector.



-----------

### [MagicLeapNativeBindings.MLQuaternionf](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLQuaternionf.md) FromUnity {#magicleapnativebindingsmlquaternionf-fromunity}

Creates native quaternion from a Unity quaternion. 

```csharp
public static MagicLeapNativeBindings.MLQuaternionf FromUnity(
    Quaternion quat,
    bool transformFromRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Quaternion |quat|A Unity quaternion.|
| bool |transformFromRUF|(Optional) If false, prevents conversion to the native SDK coordinate system.|






**Returns**: A native quaternion.



-----------

### [MagicLeapNativeBindings.MLUUID](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUID.md) FromUnity {#magicleapnativebindingsmluuid-fromunity}

Creates an MLUUID from a System.Guid 

```csharp
public static MagicLeapNativeBindings.MLUUID FromUnity(
    Guid guid
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Guid |guid|A System.Guid|






**Returns**: A native MLUUID



-----------

### Vector3 GetPositionFromTransformMatrix {#vector3-getpositionfromtransformmatrix}

Gets the position vector stored in a transform matrix. 

```csharp
public static Vector3 GetPositionFromTransformMatrix(
    Matrix4x4 transformMatrix
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Matrix4x4 |transformMatrix|A Unity matrix treated as a transform matrix.|






**Returns**: A Unity vector representing a position.



-----------

### Quaternion GetRotationFromTransformMatrix {#quaternion-getrotationfromtransformmatrix}

Gets the rotation quaternion stored in a transform matrix. 

```csharp
public static Quaternion GetRotationFromTransformMatrix(
    Matrix4x4 transformMatrix
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Matrix4x4 |transformMatrix|A Unity matrix treated as a transform matrix.|






**Returns**: A Unity quaternion.



-----------

### T [] MarshalUnmanagedArray< T > {#t-marshalunmanagedarray-t-}

Converts an unmanged array to a managed array of type T. 

```csharp
public static T [] MarshalUnmanagedArray< T >(
    IntPtr arrayPtr,
    int count
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |arrayPtr||
| int |count||






-----------

### byte [] ObjectToByteArray< T > {#byte-objecttobytearray-t-}

Convert an object to a byte array. Uses C# Binary formatter to serialize 

```csharp
public static byte [] ObjectToByteArray< T >(
    T obj
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| T |obj|Object to convert|


**Template Parameters**: 

  * `T` Data type of object






**Returns**: Returns a binary array representation of the object



-----------

### byte [] ToUTF8Snipped {#byte-toutf8snipped}

Take a string, snips it to a desired length and converts it to UTF8. 

```csharp
public static byte [] ToUTF8Snipped(
    string inString,
    int snipLength
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |inString|String to snip and convert|
| int |snipLength|length to snip to|






**Returns**: UTF8 string byte array



-----------

### Vector3 ToUnity {#vector3-tounity}

Converts a Vector3 to Unity coordinate space and scale. 

```csharp
public static Vector3 ToUnity(
    Vector3 vec,
    bool transformToRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Vector3 |vec|Vector to convert|
| bool |transformToRUF|If coordinate space should change.|
|  |applyScale|If world scale should be applied.|






**Returns**: Converted Vector



-----------

### Vector3 ToUnity {#vector3-tounity}

Creates a Unity 3D vector from a native vector. 

```csharp
public static Vector3 ToUnity(
    MagicLeapNativeBindings.MLVec3f vec,
    bool transformToRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLVec3f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) |vec|A native vector.|
| bool |transformToRUF|(Optional) If false, prevents conversion to Unity's coordinate system.|
|  |applyScale|(Optional) If false, prevents scaling to Unity's unit per meter scale.|






**Returns**: A Unity vector.



-----------

### Vector2 ToUnity {#vector2-tounity}

Creates a Unity 2D vector from a native vector. 

```csharp
public static Vector2 ToUnity(
    MagicLeapNativeBindings.MLVec2f vec,
    bool transformToRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLVec2f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec2f.md) |vec|A native vector.|
| bool |transformToRUF|(Optional) If false, prevents conversion to Unity's coordinate system.|
|  |applyScale|(Optional) If false, prevents scaling to Unity's unit per meter scale.|






**Returns**: A Unity vector.



-----------

### Vector3 ToUnity {#vector3-tounity}

Creates a Unity 3D vector from a x, y and z parameters. 

```csharp
public static Vector3 ToUnity(
    float x,
    float y,
    float z,
    bool transformToRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |x|X component|
| float |y|Y component|
| float |z|Z component|
| bool |transformToRUF|(Optional) If false, prevents conversion to Unity's coordinate system.|
|  |applyScale|(Optional) If false, prevents scaling to Unity's unit per meter scale.|






**Returns**: A Unity vector.



-----------

### Quaternion ToUnity {#quaternion-tounity}

Creates a Unity quaternion from a native quaternion. 

```csharp
public static Quaternion ToUnity(
    MagicLeapNativeBindings.MLQuaternionf quat,
    bool transformToRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLQuaternionf](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLQuaternionf.md) |quat|A native quaternion.|
| bool |transformToRUF|(Optional) If false, prevents conversion to Unity's coordinate system.|






**Returns**: A Unity quaternion.



-----------

### Quaternion ToUnity {#quaternion-tounity}

Converts a Quaternion to unity space. 

```csharp
public static Quaternion ToUnity(
    Quaternion quat,
    bool transformToRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Quaternion |quat|Quaternion to convert.|
| bool |transformToRUF|(Optional) If false, prevents conversion to Unity's coordinate system.|






**Returns**: A Unity quaternion.



-----------

### Matrix4x4 ToUnity {#matrix4x4-tounity}

Creates Unity 4x4 matrix from native matrix. 

```csharp
public static Matrix4x4 ToUnity(
    MagicLeapNativeBindings.MLMat4f mat
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLMat4f](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLMat4f.md) |mat|A native matrix.|






**Returns**: A Unity matrix.



-----------

### Matrix4x4 ToUnity {#matrix4x4-tounity}

Creates Unity 4x4 matrix from native transform. 

```csharp
public static Matrix4x4 ToUnity(
    MagicLeapNativeBindings.MLTransform transform,
    bool transformToRUF =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLTransform](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) |transform|A native transform.|
| bool |transformToRUF|(Optional) If false, prevents conversion to Unity's coordinate system.|
|  |applyScale|(Optional) If false, prevents scaling to Unity's unit per meter scale.|






**Returns**: A Unity matrix.



-----------

### Guid ToUnity {#guid-tounity}

Creates a System.Guid from an MLUUID 

```csharp
public static Guid ToUnity(
    MagicLeapNativeBindings.MLUUID uuid
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MagicLeapNativeBindings.MLUUID](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLUUID.md) |uuid|A native UUID|






**Returns**: A System.Guid



-----------

## Public Attributes

### IdentityMatrixColMajor {#readonly-float-identitymatrixcolmajor}

```csharp

public static readonly float [] IdentityMatrixColMajor = { 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 };

```






-----------

